import { readFile } from "node:fs/promises";

const papers = JSON.parse(await readFile(new URL("../data/papers.json", import.meta.url), "utf8"));
const generationResources = JSON.parse(await readFile(new URL("../data/generation-resources.json", import.meta.url), "utf8"));
const categories = new Set(["multimodal-reasoning", "data-generation", "benchmarks-datasets", "recognition-extraction", "analysis-evaluation", "adjacent"]);
const inputTags = new Set(["TI", "DP", "SS", "IM", "SR", "TT"]);
const taskTags = new Set(["SYNTH", "RENDER", "AUGMENT", "QA", "REASON", "TSR", "OCR", "EXTRACT", "RETRIEVE", "CAPTION", "EVAL", "DATA", "RL", "DETECT", "SURVEY", "TRANSFER"]);
const required = ["id", "year", "title", "venue", "paper", "category", "inputs", "tasks", "note"];
const seen = { id: new Map(), title: new Map(), paper: new Map() };
const errors = [];

for (const [index, paper] of papers.entries()) {
  const at = `papers[${index}]`;
  for (const key of required) if (!(key in paper) || paper[key] === "") errors.push(`${at}: missing ${key}`);
  if (!Number.isInteger(paper.year) || paper.year < 2022 || paper.year > 2026) errors.push(`${at}: year must be 2022..2026`);
  if (!categories.has(paper.category)) errors.push(`${at}: unknown category ${paper.category}`);
  if (!Array.isArray(paper.inputs) || paper.inputs.length === 0) errors.push(`${at}: inputs must be non-empty`);
  else for (const tag of paper.inputs) if (!inputTags.has(tag)) errors.push(`${at}: unknown input tag ${tag}`);
  if (!Array.isArray(paper.tasks) || paper.tasks.length === 0) errors.push(`${at}: tasks must be non-empty`);
  else for (const tag of paper.tasks) if (!taskTags.has(tag)) errors.push(`${at}: unknown task tag ${tag}`);
  for (const key of ["paper", "code", "data", "project"]) {
    if (paper[key] && !/^https:\/\//.test(paper[key])) errors.push(`${at}: ${key} must be an https URL`);
  }
  for (const key of Object.keys(seen)) {
    const value = String(paper[key]).trim().toLowerCase();
    if (seen[key].has(value)) errors.push(`${at}: duplicate ${key} with papers[${seen[key].get(value)}]`);
    else seen[key].set(value, index);
  }
}

const generationStages = new Set(["content-structure", "markup-rendering", "direct-image", "instruction-qa", "augmentation-validation"]);
const provenanceTypes = new Set(["official", "production", "community"]);
const resourceRequired = ["id", "name", "url", "stage", "output", "bestFor", "provenance"];
const resourceSeen = { id: new Map(), url: new Map() };

for (const [index, resource] of generationResources.entries()) {
  const at = `generationResources[${index}]`;
  for (const key of resourceRequired) if (!(key in resource) || resource[key] === "") errors.push(`${at}: missing ${key}`);
  if (!/^https:\/\//.test(resource.url)) errors.push(`${at}: url must be an https URL`);
  if (!generationStages.has(resource.stage)) errors.push(`${at}: unknown stage ${resource.stage}`);
  if (!provenanceTypes.has(resource.provenance)) errors.push(`${at}: unknown provenance ${resource.provenance}`);
  for (const key of Object.keys(resourceSeen)) {
    const value = String(resource[key]).trim().toLowerCase();
    if (resourceSeen[key].has(value)) errors.push(`${at}: duplicate ${key} with generationResources[${resourceSeen[key].get(value)}]`);
    else resourceSeen[key].set(value, index);
  }
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(`Validated ${papers.length} papers and ${generationResources.length} generation resources; no schema or duplicate errors.`);
