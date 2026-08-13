import { readFile, writeFile } from "node:fs/promises";

const papers = JSON.parse(await readFile(new URL("../data/papers.json", import.meta.url), "utf8"));
const generationResources = JSON.parse(await readFile(new URL("../data/generation-resources.json", import.meta.url), "utf8"));
const checkOnly = process.argv.includes("--check");
const lastUpdated = "2026-08-13";

const taxonomy = [
  {
    id: "visual-table-perception-recognition",
    icon: "🔎",
    title: "1. Visual Table Perception & Recognition",
    description: "Methods that locate tables, recover topology, recognize cell content, or reconstruct structured markup from pixels.",
    children: [
      ["table-detection", "Table Detection"],
      ["table-structure-recognition", "Table Structure Recognition"],
      ["cell-content-recognition", "Cell & Content Recognition"],
      ["end-to-end-reconstruction", "End-to-End Reconstruction / Image-to-Markup"]
    ]
  },
  {
    id: "multimodal-table-understanding-reasoning",
    icon: "🧠",
    title: "2. Multimodal Table Understanding & Reasoning",
    description: "Methods that answer questions, calculate, reason, retrieve evidence, or align visual tables with structured representations.",
    children: [
      ["table-question-answering", "Table Question Answering"],
      ["numerical-symbolic-reasoning", "Numerical & Symbolic Reasoning"],
      ["hybrid-visual-textual-reasoning", "Hybrid Visual–Textual Reasoning"],
      ["retrieval-rag", "Retrieval & RAG"],
      ["grounding-attribution", "Grounding & Attribution"]
    ]
  },
  {
    id: "multimodal-complex-tables",
    icon: "🧩",
    title: "3. Multimodal & Complex Tables",
    description: "Methods centered on non-standard table settings where multimodal cells, domain structure, hierarchy, multiple tables, or real-world capture are the main challenge.",
    children: [
      ["image-graphic-cells", "Image / Graphic Cells"],
      ["scientific-tables", "Scientific Tables"],
      ["hierarchical-tables", "Hierarchical Tables"],
      ["multi-table-reasoning", "Multi-table Reasoning"],
      ["real-world-photographed-tables", "Real-world / Photographed Tables"]
    ]
  },
  {
    id: "multimodal-table-data-generation",
    icon: "🏭",
    title: "4. Multimodal Table Data Generation",
    description: "Pipelines and tools for creating table contents, schemas, rendered pixels, instructions, and validated synthetic training data.",
    children: [
      ["structured-content-generation", "Structured Content Generation"],
      ["schema-layout-generation", "Schema & Layout Generation"],
      ["markup-to-image-rendering", "Markup-to-Image Rendering"],
      ["direct-image-generation", "Direct Image Generation"],
      ["qa-instruction-generation", "QA / Instruction Generation"],
      ["augmentation-validation", "Augmentation & Validation"]
    ]
  },
  {
    id: "benchmarks-datasets",
    icon: "🧪",
    title: "5. Benchmarks & Datasets",
    description: "Datasets and benchmark suites for recognition, understanding, robustness, and multimodal table settings.",
    children: [
      ["benchmark-recognition", "Recognition"],
      ["benchmark-understanding-reasoning", "Understanding & Reasoning"],
      ["benchmark-real-world-robustness", "Real-world / Robustness"],
      ["benchmark-multimodal-tables", "Multimodal Tables"]
    ]
  },
  {
    id: "evaluation-analysis",
    icon: "📏",
    title: "6. Evaluation & Analysis",
    description: "Metrics, controlled evaluations, representation studies, and analyses of robustness and generalization.",
    children: [
      ["metrics", "Metrics"],
      ["evaluation-protocols", "Evaluation Protocols"],
      ["representation-analysis", "Representation Analysis"],
      ["robustness-generalization", "Robustness / Generalization"]
    ]
  },
  {
    id: "surveys",
    icon: "📖",
    title: "7. Surveys",
    description: "Surveys and reviews of table detection, recognition, extraction, and multimodal table understanding.",
    children: [["survey", "Surveys"]]
  }
];

const generationStageToChild = {
  "content-structure": "structured-content-generation",
  "markup-rendering": "markup-to-image-rendering",
  "direct-image": "direct-image-generation",
  "instruction-qa": "qa-instruction-generation",
  "augmentation-validation": "augmentation-validation"
};

const provenanceLabels = {
  official: "official paper code",
  production: "production toolkit",
  community: "community project"
};

const esc = (value = "") => String(value).replaceAll("|", "\\|");
const link = (label, url) => `[${label}](${url})`;
const byNewest = (a, b) => b.year - a.year || a.title.localeCompare(b.title);
const text = (paper) => `${paper.id} ${paper.title} ${paper.note}`.toLowerCase();
const hasTask = (paper, task) => paper.tasks.includes(task);
const hasInput = (paper, input) => paper.inputs.includes(input);
const hasAny = (value, needles) => needles.some((needle) => value.includes(needle));

function resourceLinks(paper) {
  const links = [];
  if (paper.code) links.push(link("💻 Code", paper.code));
  if (paper.data) links.push(link("🗃️ Data", paper.data));
  if (paper.project) links.push(link("🌐 Project", paper.project));
  return links.length ? links.join(" · ") : "—";
}

function paperRow(paper) {
  const note = paper.alias ? `${paper.note} Formerly **${paper.alias}**.` : paper.note;
  return `| ${paper.year} | **${link(esc(paper.title), paper.paper)}** | ${esc(paper.venue)} | ${esc(note)} | ${resourceLinks(paper)} |`;
}

function classifyGeneration(paper) {
  const t = text(paper);
  if (hasAny(t, ["why llms are bad", "augmentation", "stress", "validate", "verification", "graft:"])) return "augmentation-validation";
  if (hasAny(t, ["tabledreamer", "syntab-llava", "tabularmath", "autot2t"])) return "qa-instruction-generation";
  if (hasAny(t, ["latent diffusion", "diffusion models for document image", "realistic data for table recognition", "table and image generation"])) return "direct-image-generation";
  if (hasAny(t, ["cosyn", "code-guided synthetic", "μgat", "mugat", "flexdoc"])) return "markup-to-image-rendering";
  if (hasAny(t, ["tablenet:", "map&make", "text-tuple-table", "text-to-table:"])) return "schema-layout-generation";
  return "structured-content-generation";
}

function classifyRecognition(paper) {
  const t = text(paper);
  if (hasTask(paper, "DETECT") && !hasAny(t, ["end-to-end", "reconstruction", "recognition and structure", "table extraction"])) return "table-detection";
  if (hasAny(t, ["latex", "html", "image-to-markup", "reconstruction", "reconstructed", "end-to-end", "unified generation", "tables decoded", "tables to latex", "table reconstruction", "tableseq", "tdatr", "dream:", "unitable:", "omniparser"])) return "end-to-end-reconstruction";
  if (hasTask(paper, "OCR") && hasAny(t, ["content", "character", "ocr", "text spotting", "cell recognition"])) return "cell-content-recognition";
  return "table-structure-recognition";
}

function classifyReasoning(paper) {
  const t = text(paper);
  if (hasInput(paper, "IM") || hasAny(t, ["image cells", "graphic cells", "semi-structured tables"])) return "image-graphic-cells";
  if (hasAny(t, ["scientific table", "scientific tables"])) return "scientific-tables";
  if (hasAny(t, ["hierarchical table", "hierarchical tables"])) return "hierarchical-tables";
  if (hasAny(t, ["multi-table", "multi tabular", "multi-tabular", "multiple table"])) return "multi-table-reasoning";
  if (hasAny(t, ["photographed", "in the wild", "real-world table", "camera-captured", "scene table"])) return "real-world-photographed-tables";
  if (hasTask(paper, "RETRIEVE") || hasAny(t, ["retrieval", "rag:", "tabrag"])) return "retrieval-rag";
  if (hasAny(t, ["attribution", "evidence localization", "grounding", "supporting cells"])) return "grounding-attribution";
  if (hasAny(t, ["hybrid", "privileged structured", "visual and textual", "visual or textual", "text table representations", "routing", "modality"]) || (hasInput(paper, "TT") && hasTask(paper, "QA"))) return "hybrid-visual-textual-reasoning";
  if (hasAny(t, ["code-driven", "code-based", "neuro-symbolic", "symbolic", "mathematical", "numerical", "calculate", "calculation", "arithmetic"])) return "numerical-symbolic-reasoning";
  return "table-question-answering";
}

function classifyBenchmark(paper) {
  const t = text(paper);
  if (hasInput(paper, "IM") || hasAny(t, ["multimodal table", "chemical tables", "embedded graphics", "image cells"])) return "benchmark-multimodal-tables";
  if (hasAny(t, ["wild", "real-world", "realistic", "photographed", "robust", "tablevista", "realhitbench"])) return "benchmark-real-world-robustness";
  if ((hasTask(paper, "TSR") || hasTask(paper, "DETECT") || hasTask(paper, "OCR")) && !hasTask(paper, "QA")) return "benchmark-recognition";
  return "benchmark-understanding-reasoning";
}

function classifyEvaluation(paper) {
  const t = text(paper);
  if (hasTask(paper, "SURVEY")) return "survey";
  if (hasAny(t, ["grits", "metric", "uncertainty", "evaluating table structure recognition"])) return "metrics";
  if (hasAny(t, ["texts or images", "text or image", "modality gap", "representation", "cross-domain case study"])) return "representation-analysis";
  if (hasAny(t, ["reproducibility", "replicability", "aligning benchmark", "generalization", "robustness"])) return "robustness-generalization";
  return "evaluation-protocols";
}

function classify(paper) {
  if (paper.category === "adjacent") return "related";
  if (paper.category === "data-generation") return classifyGeneration(paper);
  if (paper.category === "benchmarks-datasets") return classifyBenchmark(paper);
  if (paper.category === "recognition-extraction") return classifyRecognition(paper);
  if (paper.category === "analysis-evaluation") return classifyEvaluation(paper);
  if (paper.category === "multimodal-reasoning") return classifyReasoning(paper);
  throw new Error(`Cannot classify paper ${paper.id}: unknown category ${paper.category}`);
}

const childToParent = new Map();
for (const section of taxonomy) for (const [child] of section.children) childToParent.set(child, section.id);

const assignments = new Map();
for (const paper of papers) {
  const child = classify(paper);
  if (child !== "related" && !childToParent.has(child)) throw new Error(`Unknown taxonomy child ${child} for ${paper.id}`);
  if (assignments.has(paper.id)) throw new Error(`Paper classified twice: ${paper.id}`);
  assignments.set(paper.id, child);
}
if (assignments.size !== papers.length) throw new Error(`Classification coverage mismatch: ${assignments.size}/${papers.length}`);

const corePapers = papers.filter((paper) => assignments.get(paper.id) !== "related");
const relatedPapers = papers.filter((paper) => assignments.get(paper.id) === "related");
if (corePapers.length + relatedPapers.length !== papers.length) throw new Error("Paper coverage mismatch");

const codeCount = papers.filter((paper) => paper.code).length;
const dataCount = papers.filter((paper) => paper.data).length;
const countsByYear = [...new Set(papers.map((paper) => paper.year))]
  .sort((a, b) => b - a)
  .map((year) => `${year}: **${papers.filter((paper) => paper.year === year).length}**`)
  .join(" · ");

function renderPaperTable(items) {
  if (!items.length) return "_No papers in this subsection yet._";
  return `| Year | Paper | Venue | Why it matters | Resources |\n|---:|---|---|---|---|\n${items.sort(byNewest).map(paperRow).join("\n")}`;
}

function renderTaxonomySection(section) {
  const childBlocks = section.children.map(([childId, childTitle]) => {
    const items = corePapers.filter((paper) => assignments.get(paper.id) === childId);
    return `<a id="${childId}"></a>\n### ${childTitle}\n\n${renderPaperTable(items)}`;
  });

  if (section.id === "multimodal-table-data-generation") {
    const resourceBlocks = section.children.map(([childId, childTitle]) => {
      const resources = generationResources.filter((resource) => generationStageToChild[resource.stage] === childId);
      if (!resources.length) return "";
      const rows = resources.map((resource) => `| **${link(esc(resource.name), resource.url)}**<br><sub>${provenanceLabels[resource.provenance]}</sub> | ${esc(resource.output)} | ${esc(resource.bestFor)} |`).join("\n");
      return `#### ${childTitle} — Practical generators & toolkits\n\n| Project | Produces | Best used for |\n|---|---|---|\n${rows}`;
    }).filter(Boolean);
    childBlocks.push(`<a id="generation-tools"></a>\n### Practical Generators & Toolkits\n\nProjects are grouped under the same production stages as the papers above, so the literature and runnable resources stay in one place.\n\n${resourceBlocks.join("\n\n")}`);
  }

  const count = corePapers.filter((paper) => childToParent.get(assignments.get(paper.id)) === section.id).length;
  return `<a id="${section.id}"></a>\n## ${section.icon} ${section.title}\n\n> ${section.description} **${count} papers.**\n\n${childBlocks.join("\n\n")}\n\n<p align="right"><a href="#readme-top">⬆️ Back to top</a></p>`;
}

const toc = taxonomy.map((section) => {
  const children = section.children.map(([id, title]) => `  - [${title}](#${id})`).join("\n");
  return `- [${section.icon} ${section.title}](#${section.id})\n${children}`;
}).join("\n");

const readme = `<a id="readme-top"></a>

<div align="center">
  <img src="assets/logo.svg" width="116" alt="Awesome Multimodal Table Understanding logo" />
  <h1>Awesome Multimodal Table Understanding</h1>
  <p><strong>A curated research map for understanding tables as visual and multimodal objects.</strong></p>
  <p>Table perception · structure recognition · multimodal reasoning · complex tables · synthetic training data</p>
  <p>
    <a href="https://awesome.re"><img src="https://awesome.re/badge-flat2.svg" alt="Awesome" /></a>
    <img src="https://img.shields.io/badge/papers-${papers.length}-2F81F7?style=flat-square" alt="${papers.length} papers" />
    <img src="https://img.shields.io/badge/code-${codeCount}-12B886?style=flat-square" alt="${codeCount} code links" />
    <img src="https://img.shields.io/badge/data-${dataCount}-D6336C?style=flat-square" alt="${dataCount} data links" />
    <img src="https://img.shields.io/badge/generators-${generationResources.length}-E8590C?style=flat-square" alt="${generationResources.length} generation projects" />
    <img src="https://img.shields.io/badge/coverage-2022%E2%80%932026-F59F00?style=flat-square" alt="Coverage 2022 to 2026" />
    <a href="https://github.com/lyc61c/Awesome-Multimodal-Table-Understanding/actions/workflows/validate.yml"><img src="https://github.com/lyc61c/Awesome-Multimodal-Table-Understanding/actions/workflows/validate.yml/badge.svg" alt="Validate" /></a>
    <a href="LICENSE"><img src="https://img.shields.io/badge/license-CC0--1.0-lightgrey?style=flat-square" alt="CC0 1.0" /></a>
  </p>
  <p><a href="#papers">📚 Papers</a> · <a href="RELATED.md">🔗 Related Work</a> · <a href="CONTRIBUTING.md">🤝 Contribute</a></p>
</div>

> **Updated ${lastUpdated}.** ${papers.length} papers · ${corePapers.length} core · ${relatedPapers.length} related · ${generationResources.length} practical generation projects. ${countsByYear}.

<a id="papers"></a>
## 📚 Papers

${toc}

${taxonomy.map(renderTaxonomySection).join("\n\n")}

## 🔗 Related Work

General document AI, text-only table reasoning, heterogeneous multimodal QA, and other useful adjacent work are kept in **[RELATED.md](RELATED.md)** so the main bibliography stays focused.

<a id="contributing"></a>
## 🤝 Contributing

Found a missing paper, better official link, released code, or venue update? Please read [CONTRIBUTING.md](CONTRIBUTING.md) and open a pull request or use the paper-suggestion issue form.

The sources of truth are [data/papers.json](data/papers.json) and [data/generation-resources.json](data/generation-resources.json). README and RELATED.md are generated automatically, and the build fails if any paper is left unclassified or classified more than once.

## 🙏 Acknowledgements

The information architecture draws on the clarity of [Awesome](https://github.com/sindresorhus/awesome), [Awesome Python](https://github.com/vinta/awesome-python), and the navigation patterns collected in [Awesome README](https://github.com/matiassingers/awesome-readme). Thanks to the maintainers of related table-paper lists and to authors who release code or data.

## 📜 License

Released under [CC0 1.0](LICENSE). Paper abstracts, figures, datasets, and code remain under their original licenses.

<div align="center">
  <p><strong>If this map saves you time, consider starring it and contributing the paper we missed.</strong></p>
  <a href="#readme-top">⬆️ Back to top</a>
</div>
`;

const relatedRows = relatedPapers.sort(byNewest).map(paperRow).join("\n");
const related = `# Related Work

This page keeps useful adjacent literature outside the core visual-table taxonomy. These papers are preserved rather than removed, but they are not counted as core multimodal table papers.

| Year | Paper | Venue | Why it matters | Resources |
|---:|---|---|---|---|
${relatedRows}

## Related Lists

- [Awesome-Tabular-LLMs](https://github.com/SpursGoZmy/Awesome-Tabular-LLMs) — broad table + LLM coverage.
- [Awesome-LLM-Table-Mining](https://github.com/USTCAGI/Awesome-LLM-Table-Mining) — table mining with language models.
- [Curated Table Structure Recognition](https://github.com/qyhou/curated-table-structure-recognition) — focused TSR bibliography.
- [Awesome Table Structure Recognition](https://github.com/Tan-Junwen/awesome-table-structure-recognition) — TSR papers, datasets, and implementations.

[← Back to README](README.md)
`;

const outputs = [
  [new URL("../README.md", import.meta.url), readme, "README.md"],
  [new URL("../RELATED.md", import.meta.url), related, "RELATED.md"]
];

if (checkOnly) {
  let stale = false;
  for (const [url, expected, name] of outputs) {
    const current = await readFile(url, "utf8").catch(() => "");
    if (current !== expected) {
      console.error(`${name} is out of date. Run: npm run build`);
      stale = true;
    }
  }
  if (stale) process.exit(1);
} else {
  for (const [url, content] of outputs) await writeFile(url, content);
  console.log(`Generated README.md and RELATED.md with ${corePapers.length} core papers and ${relatedPapers.length} related papers; every paper classified exactly once.`);
}
