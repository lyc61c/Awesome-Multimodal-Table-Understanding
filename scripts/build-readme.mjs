import { readFile, writeFile } from "node:fs/promises";

const papers = JSON.parse(await readFile(new URL("../data/papers.json", import.meta.url), "utf8"));
const generationResources = JSON.parse(await readFile(new URL("../data/generation-resources.json", import.meta.url), "utf8"));
const checkOnly = process.argv.includes("--check");
const lastUpdated = "2026-08-13";

const categoryOrder = [
  "multimodal-reasoning",
  "data-generation",
  "benchmarks-datasets",
  "recognition-extraction",
  "analysis-evaluation",
  "adjacent"
];

const categories = {
  "multimodal-reasoning": {
    icon: "🧠",
    title: "Multimodal reasoning, QA, and training",
    description: "Models and training methods that answer, calculate, retrieve, or reason from visual and hybrid tables."
  },
  "data-generation": {
    icon: "🏭",
    title: "Synthetic data generation and rendering",
    description: "Pipelines that synthesize table content or structure, render markup into pixels, generate instructions, or create images directly."
  },
  "benchmarks-datasets": {
    icon: "🧪",
    title: "Benchmarks and datasets",
    description: "Evaluation suites, training corpora, and diagnostic datasets built around table pixels or multimodal cells."
  },
  "recognition-extraction": {
    icon: "🔎",
    title: "Recognition, parsing, and extraction",
    description: "Table detection, OCR, cell topology, image-to-markup, and end-to-end reconstruction."
  },
  "analysis-evaluation": {
    icon: "📏",
    title: "Analysis, evaluation, metrics, and surveys",
    description: "Controlled comparisons, robustness studies, metrics, uncertainty, reproducibility, and field surveys."
  },
  adjacent: {
    icon: "🧩",
    title: "Adjacent multimodal and document-table work",
    description: "Closely related document, screenshot, retrieval, and cross-modal research with substantive table relevance."
  }
};

const inputLabels = {
  TI: "table image",
  DP: "document page",
  SS: "screenshot or dashboard",
  IM: "images or graphics inside/alongside tables",
  SR: "synthetically rendered table",
  TT: "paired text, markup, or privileged structure"
};

const generationStageLabels = {
  "content-structure": "🧬 Content & structure",
  "markup-rendering": "🎨 Markup & rendering",
  "direct-image": "🖼️ Direct image generation",
  "instruction-qa": "💬 Instructions & QA",
  "augmentation-validation": "🛡️ Augmentation & validation"
};

const provenanceLabels = {
  official: "official paper code",
  production: "production toolkit",
  community: "community project"
};

const esc = (value) => value.replaceAll("|", "\\|");
const codeTag = (tag) => `\`${tag}\``;
const link = (label, url) => `[${label}](${url})`;
const byNewest = (a, b) => b.year - a.year || a.title.localeCompare(b.title);

function resourceLinks(paper) {
  const links = [];
  if (paper.code) links.push(link("💻 Code", paper.code));
  if (paper.data) links.push(link("🗃️ Data", paper.data));
  if (paper.project) links.push(link("🌐 Project", paper.project));
  return links.length ? links.join(" · ") : "—";
}

function paperRow(paper) {
  const tags = [...paper.inputs, ...paper.tasks].map(codeTag).join(" ");
  const note = paper.alias ? `${paper.note} Formerly **${paper.alias}**.` : paper.note;
  const title = `**${link(esc(paper.title), paper.paper)}**`;
  return `| ${paper.year} | ${title} | ${esc(paper.venue)} | ${tags} | ${esc(note)} | ${resourceLinks(paper)} |`;
}

const countsByYear = [...new Set(papers.map((paper) => paper.year))]
  .sort((a, b) => b - a)
  .map((year) => `${year}: **${papers.filter((paper) => paper.year === year).length}**`)
  .join(" · ");

const coreCount = papers.filter((paper) => paper.category !== "adjacent").length;
const adjacentCount = papers.length - coreCount;
const codeCount = papers.filter((paper) => paper.code).length;
const dataCount = papers.filter((paper) => paper.data).length;

const generationResourceRows = generationResources.map((resource) =>
  `| ${generationStageLabels[resource.stage]} | **${link(esc(resource.name), resource.url)}**<br><sub>${provenanceLabels[resource.provenance]}</sub> | ${esc(resource.output)} | ${esc(resource.bestFor)} |`
).join("\n");

const paperLink = (id, label) => {
  const paper = papers.find((item) => item.id === id);
  if (!paper) throw new Error(`Unknown paper id in editorial section: ${id}`);
  return link(label ?? paper.title.split(":")[0], paper.paper);
};

const categorySummary = categoryOrder.map((key) => {
  const category = categories[key];
  return `| ${category.icon} [${category.title}](#${key}) | ${papers.filter((paper) => paper.category === key).length} | ${category.description} |`;
}).join("\n");

const toc = categoryOrder.map((key) => {
  const category = categories[key];
  return `  - [${category.icon} ${category.title}](#${key})`;
}).join("\n");

const sections = categoryOrder.map((key) => {
  const category = categories[key];
  const categoryPapers = papers.filter((paper) => paper.category === key).sort(byNewest);
  const rows = categoryPapers.map(paperRow).join("\n");
  return `<a id="${key}"></a>\n## ${category.icon} ${category.title}\n\n> ${category.description} **${categoryPapers.length} papers.**\n\n| Year | Paper | Venue | Input / task tags | Why it matters | Resources |\n|---:|---|---|---|---|---|\n${rows}\n\n<p align="right"><a href="#readme-top">⬆️ Back to top</a></p>`;
}).join("\n\n");

const frontierIds = [
  "tablenet-autonomous",
  "tabverse",
  "mmtablebench",
  "photographed-table-reasoning",
  "tablevista",
  "wildtablebench",
  "mm-table-r1"
];

const frontierRows = frontierIds.map((id) => {
  const paper = papers.find((item) => item.id === id);
  if (!paper) throw new Error(`Unknown frontier paper id: ${id}`);
  return `| ${paperLink(id)} | ${paper.venue} | ${esc(paper.note)} |`;
}).join("\n");

const readme = `<a id="readme-top"></a>

<div align="center">
  <img src="assets/logo.svg" width="116" alt="Awesome Multimodal Table Understanding logo" />
  <h1>Awesome Multimodal Table Understanding</h1>
  <p><strong>A living, modality-aware map of research on understanding tables as visual objects.</strong></p>
  <p>Table images · document pages · multimodal cells · visual reasoning · structure recognition · synthetic training data</p>
  <p>
    <a href="https://awesome.re"><img src="https://awesome.re/badge-flat2.svg" alt="Awesome" /></a>
    <img src="https://img.shields.io/badge/papers-${papers.length}-2F81F7?style=flat-square" alt="${papers.length} papers" />
    <img src="https://img.shields.io/badge/core-${coreCount}-6E56CF?style=flat-square" alt="${coreCount} core papers" />
    <img src="https://img.shields.io/badge/code-${codeCount}-12B886?style=flat-square" alt="${codeCount} code links" />
    <img src="https://img.shields.io/badge/data-${dataCount}-D6336C?style=flat-square" alt="${dataCount} data links" />
    <img src="https://img.shields.io/badge/generators-${generationResources.length}-E8590C?style=flat-square" alt="${generationResources.length} generation projects" />
    <img src="https://img.shields.io/badge/edition-Data%20Factory-7950F2?style=flat-square" alt="Data Factory edition" />
    <img src="https://img.shields.io/badge/coverage-2022%E2%80%932026-F59F00?style=flat-square" alt="Coverage 2022 to 2026" />
    <a href="https://github.com/lyc61c/Awesome-Multimodal-Table-Understanding/actions/workflows/validate.yml"><img src="https://github.com/lyc61c/Awesome-Multimodal-Table-Understanding/actions/workflows/validate.yml/badge.svg" alt="Validate" /></a>
    <a href="LICENSE"><img src="https://img.shields.io/badge/license-CC0--1.0-lightgrey?style=flat-square" alt="CC0 1.0" /></a>
  </p>
  <p>
    <a href="#start-here">🚀 Start here</a> ·
    <a href="#research-map">🧭 Research map</a> ·
    <a href="#data-generation-pipeline">🏭 Data factory</a> ·
    <a href="#paper-collection">📚 Browse papers</a> ·
    <a href="CONTRIBUTING.md">🤝 Contribute</a>
  </p>
</div>

> **Coverage snapshot — ${lastUpdated}.** The collection contains **${papers.length} papers**: **${coreCount} core** and **${adjacentCount} adjacent**, with ${codeCount} code links and ${dataCount} data links. ${countsByYear}.

> 🆕 **Data Factory Edition.** This is the expanded README, with **${papers.filter((paper) => paper.category === "data-generation").length} data-generation papers**, **${generationResources.length} runnable projects**, and an end-to-end map covering structured-content synthesis, HTML/Markdown/LaTeX rendering, direct image generation, instruction/QA creation, augmentation, and automatic validation. Jump to the [multimodal table data factory](#data-generation-pipeline).

<a id="start-here"></a>
## 🚀 Start here

New to the field? Pick the path closest to your goal instead of scrolling through ${papers.length} rows.

| I want to… | Recommended path |
|---|---|
| Build a visual-table reasoning model | ${paperLink("mmtu")} → ${paperLink("tabpedia")} → ${paperLink("syntab-llava")} → ${paperLink("coretab")} |
| Evaluate realistic visual robustness | ${paperLink("tablevista")} · ${paperLink("wildtablebench")} · ${paperLink("photographed-table-reasoning", "PCTR-16K")} · ${paperLink("tabverse")} |
| Reconstruct table structure and content | ${paperLink("pubtables1m")} → ${paperLink("tablevlm")} → ${paperLink("unitable")} → ${paperLink("trivia")} |
| Produce multimodal table training data | ${paperLink("map-make", "Map&Make")} → ${paperLink("tablenet-autonomous", "TableNet")} → ${paperLink("cosyn", "CoSyn")} → ${paperLink("syntab-llava", "SynTab-LLaVA")} |
| Study RL and process supervision | ${paperLink("table-r1-multimodal-grpo", "Table-R1")} · ${paperLink("mm-table-r1", "MM-Table-R1")} · ${paperLink("coretab")} · ${paperLink("v-tabler1")} |
| Work with images inside table cells | ${paperLink("knowledge-aware-multimodal-tables", "MMTabQA")} · ${paperLink("tabledart")} · ${paperLink("mmtabreal")} |
| Compare images with text/markup | ${paperLink("tables-texts-or-images")} · ${paperLink("texts-or-images-analysis")} · ${paperLink("tableeval-cross-domain", "Cross-domain TableEval")} · ${paperLink("tabverse")} |

### ✨ 2026 frontier watch

| Paper | Venue | Signal |
|---|---|---|
${frontierRows}

<a id="research-map"></a>
## 🧭 Research map

| Layer | Central question | Representative starting points |
|---|---|---|
| 🔎 Detection and recognition | Where is the table, and what are its cells, topology, text, and geometry? | ${paperLink("pubtables1m")}, ${paperLink("tablevlm")}, ${paperLink("unitable")}, ${paperLink("trivia")} |
| 🧠 Visual reasoning | Can a model answer, verify, calculate, and explain directly from table pixels? | ${paperLink("mmtu")}, ${paperLink("tabpedia")}, ${paperLink("syntab-llava")}, ${paperLink("coretab")} |
| 🏭 Data production | How can we generate content, layouts, pixels, labels, and reasoning traces with verifiable provenance? | ${paperLink("cosyn")}, ${paperLink("tablenet-autonomous")}, ${paperLink("mugat")}, ${paperLink("tabledreamer")} |
| 🌍 Realism and robustness | Do gains survive original styles, dense layouts, perturbations, and real-world captures? | ${paperLink("tablevqa-bench")}, ${paperLink("tablet-dataset")}, ${paperLink("tablevista")}, ${paperLink("wildtablebench")} |
| 🧩 Hybrid and interleaved tables | How should models combine pixels, markup, and graphics embedded in table cells? | ${paperLink("knowledge-aware-multimodal-tables")}, ${paperLink("tabledart")}, ${paperLink("mmtabreal")} |
| 🎯 Retrieval and attribution | Can a system find the right table and point to the exact supporting cells? | ${paperLink("tabrag")}, ${paperLink("ritt")}, ${paperLink("vitab-a")} |

<a id="data-generation-pipeline"></a>
## 🏭 Multimodal table data factory

Use this map to turn structured values, text, or a layout plan into pixel-grounded training samples. The strongest pipelines keep every intermediate artifact—schema, markup, render parameters, cell boxes, answers, and validation traces—so labels remain auditable.

\`\`\`mermaid
flowchart LR
  A["1. Content & schema"] --> B["2. Markup & layout"] --> C["3. Render pixels"] --> D["4. QA & instructions"] --> E["5. Validate & augment"]
\`\`\`

| Production stage | Representative papers | Typical output |
|---|---|---|
| 🧬 Content and structure | ${paperLink("map-make", "Map&Make")}, ${paperLink("tabledreamer", "TableDreamer")}, ${paperLink("great-tabular-generator", "GReaT")}, ${paperLink("tabsyn", "TabSyn")} | Values, schemas, relational dependencies, and table semantics |
| 🎨 Markup-to-pixel rendering | ${paperLink("tablenet-autonomous", "TableNet")}, ${paperLink("mugat", "μgat")}, ${paperLink("flexdoc", "FlexDoc")} | HTML/Markdown/LaTeX, images or pages, boxes, and structure labels |
| 🖼️ Direct image synthesis | ${paperLink("latent-diffusion-table-generation", "Latent Diffusion")}, ${paperLink("diffusion-document-generation", "Document Diffusion")}, ${paperLink("synthesizing-realistic-table-data", "Realistic Table Synthesis")} | Table-bearing pixels generated or composed under layout control |
| 💬 QA and instruction synthesis | ${paperLink("cosyn", "CoSyn")}, ${paperLink("syntab-llava", "SynTab-LLaVA")}, ${paperLink("tabularmath-autot2t", "AutoT2T")} | Questions, answers, reasoning traces, and multimodal conversations |
| 🛡️ Validation and stress testing | ${paperLink("graft", "GRAFT")}, ${paperLink("why-llms-bad-synthetic-tables", "Permutation-aided FT")}, ${paperLink("tablevqa-bench", "TableVQA-Bench")} | Executable checks, controlled perturbations, and visual robustness tests |

### 🧰 Practical generators and toolkits

These repositories can serve as components of a training-data production stack. “Official” means the repository is linked to the corresponding paper; community projects are clearly labeled.

| Stage | Project | Produces | Best used for |
|---|---|---|---|
${generationResourceRows}

> **Recommended recipe:** generate statistically coherent values → plan spans and headers → render several HTML/Markdown/LaTeX style families → retain cell-level provenance → synthesize executable QA → add scan, camera, compression, and typography perturbations → reject samples whose rendered evidence no longer supports the answer.

### Collection at a glance

| Section | Papers | What belongs here |
|---|---:|---|
${categorySummary}

<details>
<summary><strong>🎯 Scope and editorial policy</strong></summary>

### Included in the core list

- A model consumes pixels containing a table, document page, or screenshot and performs recognition, extraction, QA, reasoning, retrieval, or generation.
- A benchmark evaluates visual-table perception or reasoning.
- A dataset, metric, survey, or diagnostic is directly useful for visual or multimodal table understanding.
- A generation method produces table content, markup, pixels, labels, or instructions that can directly seed multimodal table training.

### Kept outside the core list

Text-only table reasoning, spreadsheet agents without visual input, generic document AI without substantive table evaluation, and chart-only work. Structured table synthesis is included only when it is a practical upstream source for rendering multimodal training data. Borderline but useful work is retained in **Adjacent multimodal and document-table work**.

“Comprehensive” is treated as an auditable process, not a finished claim: every entry has a stable paper link, explicit modality tags, a concise relevance note, and automated duplicate/schema checks.

</details>

<a id="tag-legend"></a>
## 🏷️ Tag legend

### Input modality

| Tag | Meaning |
|---|---|
${Object.entries(inputLabels).map(([tag, meaning]) => `| ${codeTag(tag)} | ${meaning} |`).join("\n")}

### Task

${["SYNTH", "RENDER", "AUGMENT", "QA", "REASON", "TSR", "OCR", "EXTRACT", "RETRIEVE", "CAPTION", "EVAL", "DATA", "RL"].map(codeTag).join(" ")}

<a id="paper-collection"></a>
## 📚 Paper collection

- [🚀 Start here](#start-here)
- [🧭 Research map](#research-map)
- [🏭 Multimodal table data factory](#data-generation-pipeline)
- [🏷️ Tag legend](#tag-legend)
${toc}
- [🔗 Related lists](#related-lists)
- [🤝 Contributing](#contributing)

${sections}

<a id="related-lists"></a>
## 🔗 Related lists

- [Awesome-Tabular-LLMs](https://github.com/SpursGoZmy/Awesome-Tabular-LLMs) — broad table + LLM coverage and the structural inspiration for this repository.
- [Awesome-LLM-Table-Mining](https://github.com/USTCAGI/Awesome-LLM-Table-Mining) — table mining with language models.
- [Curated Table Structure Recognition](https://github.com/qyhou/curated-table-structure-recognition) — a focused and frequently updated TSR bibliography.
- [Awesome Table Structure Recognition](https://github.com/Tan-Junwen/awesome-table-structure-recognition) — TSR papers, datasets, and implementations.

<a id="contributing"></a>
## 🤝 Contributing

Found a missing paper, better official link, released code, or venue update? Please read [CONTRIBUTING.md](CONTRIBUTING.md) and open a pull request or use the paper-suggestion issue form.

The sources of truth are [data/papers.json](data/papers.json) and [data/generation-resources.json](data/generation-resources.json); README tables are generated automatically. This keeps a large bibliography reviewable and prevents hand-edited tables from drifting.

## 🙏 Acknowledgements

The information architecture draws on the clarity of [Awesome](https://github.com/sindresorhus/awesome), [Awesome Python](https://github.com/vinta/awesome-python), and the navigation patterns collected in [Awesome README](https://github.com/matiassingers/awesome-readme). Thanks to the maintainers of the related table-paper lists and to every author who releases code or data.

## 📜 License

Released under [CC0 1.0](LICENSE). Paper abstracts, figures, datasets, and code remain under their original licenses.

<div align="center">
  <p><strong>If this map saves you time, consider starring it and contributing the paper we missed.</strong></p>
  <a href="#readme-top">⬆️ Back to top</a>
</div>
`;

const readmeUrl = new URL("../README.md", import.meta.url);
if (checkOnly) {
  const current = await readFile(readmeUrl, "utf8").catch(() => "");
  if (current !== readme) {
    console.error("README.md is out of date. Run: npm run build");
    process.exit(1);
  }
} else {
  await writeFile(readmeUrl, readme);
}
