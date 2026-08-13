<a id="readme-top"></a>

<div align="center">
  <img src="assets/logo.svg" width="116" alt="Awesome Multimodal Table Understanding logo" />
  <h1>Awesome Multimodal Table Understanding</h1>
  <p><strong>A living, modality-aware map of research on understanding tables as visual objects.</strong></p>
  <p>Table images · document pages · multimodal cells · visual reasoning · structure recognition · synthetic training data</p>
  <p>
    <a href="https://awesome.re"><img src="https://awesome.re/badge-flat2.svg" alt="Awesome" /></a>
    <img src="https://img.shields.io/badge/papers-170-2F81F7?style=flat-square" alt="170 papers" />
    <img src="https://img.shields.io/badge/core-153-6E56CF?style=flat-square" alt="153 core papers" />
    <img src="https://img.shields.io/badge/code-40-12B886?style=flat-square" alt="40 code links" />
    <img src="https://img.shields.io/badge/data-8-D6336C?style=flat-square" alt="8 data links" />
    <img src="https://img.shields.io/badge/generators-18-E8590C?style=flat-square" alt="18 generation projects" />
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

> **Coverage snapshot — 2026-08-13.** The collection contains **170 papers**: **153 core** and **17 adjacent**, with 40 code links and 8 data links. 2026: **28** · 2025: **49** · 2024: **42** · 2023: **33** · 2022: **18**.

> 🆕 **Data Factory Edition.** This is the expanded README, with **21 data-generation papers**, **18 runnable projects**, and an end-to-end map covering structured-content synthesis, HTML/Markdown/LaTeX rendering, direct image generation, instruction/QA creation, augmentation, and automatic validation. Jump to the [multimodal table data factory](#data-generation-pipeline).

<a id="start-here"></a>
## 🚀 Start here

New to the field? Pick the path closest to your goal instead of scrolling through 170 rows.

| I want to… | Recommended path |
|---|---|
| Build a visual-table reasoning model | [Multimodal Table Understanding](https://aclanthology.org/2024.acl-long.493/) → [TabPedia](https://arxiv.org/abs/2406.01326) → [SynTab-LLaVA](https://openaccess.thecvf.com/content/CVPR2025/html/Zhou_SynTab-LLaVA_Enhancing_Multimodal_Table_Understanding_with_Decoupled_Synthesis_CVPR_2025_paper.html) → [CoReTab](https://aclanthology.org/2026.eacl-long.306/) |
| Evaluate realistic visual robustness | [TableVista](https://aclanthology.org/2026.findings-acl.1745/) · [WildTableBench](https://arxiv.org/abs/2605.01018) · [PCTR-16K](https://doi.org/10.1016/j.patcog.2026.113355) · [TABVERSE](https://arxiv.org/abs/2606.09578) |
| Reconstruct table structure and content | [PubTables-1M](https://openaccess.thecvf.com/content/CVPR2022/html/Smock_PubTables-1M_Towards_Comprehensive_Table_Extraction_From_Unstructured_Documents_CVPR_2022_paper.html) → [TableVLM](https://aclanthology.org/2023.acl-long.137/) → [UniTable](https://arxiv.org/abs/2403.04822) → [TRivia](https://openaccess.thecvf.com/content/CVPR2026/html/Zhang_TRivia_Self-supervised_Fine-tuning_of_Vision-Language_Models_for_Table_Recognition_CVPR_2026_paper.html) |
| Produce multimodal table training data | [Map&Make](https://aclanthology.org/2025.acl-long.1460/) → [TableNet](https://arxiv.org/abs/2604.13041) → [CoSyn](https://aclanthology.org/2025.acl-long.855/) → [SynTab-LLaVA](https://openaccess.thecvf.com/content/CVPR2025/html/Zhou_SynTab-LLaVA_Enhancing_Multimodal_Table_Understanding_with_Decoupled_Synthesis_CVPR_2025_paper.html) |
| Study RL and process supervision | [Table-R1](https://aclanthology.org/2025.emnlp-main.637/) · [MM-Table-R1](https://ojs.aaai.org/index.php/AAAI/article/view/37042) · [CoReTab](https://aclanthology.org/2026.eacl-long.306/) · [V-TableR1](https://arxiv.org/abs/2604.20755) |
| Work with images inside table cells | [MMTabQA](https://aclanthology.org/2024.findings-emnlp.822/) · [TableDART](https://arxiv.org/abs/2509.14671) · [MMTabReal](https://aclanthology.org/2026.findings-acl.2047/) |
| Compare images with text/markup | [Tables as Texts or Images](https://aclanthology.org/2024.findings-acl.23/) · [Texts or Images? A Fine-Grained Analysis of Multimodal Table Understanding](https://aclanthology.org/2025.findings-acl.117/) · [Cross-domain TableEval](https://aclanthology.org/2025.trl-1.10/) · [TABVERSE](https://arxiv.org/abs/2606.09578) |

### ✨ 2026 frontier watch

| Paper | Venue | Signal |
|---|---|---|
| [TableNet](https://arxiv.org/abs/2604.13041) | arXiv | Uses cooperating agents for schema planning, layout construction, and content filling before rendering HTML tables with exact structure labels. |
| [TABVERSE](https://arxiv.org/abs/2606.09578) | arXiv | Aligns identical tables across HTML, Markdown, LaTeX, and rendered images to isolate representation effects. |
| [MMTableBench](https://doi.org/10.1145/3774904.3792367) | The Web Conference | Separates layout complexity from reasoning complexity for fine-grained diagnosis of multimodal TableQA. |
| [A Benchmark and Method for Photographed Table Reasoning](https://doi.org/10.1016/j.patcog.2026.113355) | Pattern Recognition | Introduces PCTR-16K and structure-aware chain-of-thought for Chinese tables photographed under real conditions. |
| [TableVista](https://aclanthology.org/2026.findings-acl.1745/) | Findings of ACL | Expands 3,000 reasoning problems into 30,000 controlled visual variants to isolate style, structure, and vision-only failure modes. |
| [WildTableBench](https://arxiv.org/abs/2605.01018) | arXiv | A manually verified benchmark built from naturally occurring table images rather than template renders. |
| [Multimodal Table Understanding with Difficulty-aware Reinforcement Learning](https://ojs.aaai.org/index.php/AAAI/article/view/37042) | AAAI | Introduces MM-Table-R1 with task- and data-level curricula based on table complexity. |

<a id="research-map"></a>
## 🧭 Research map

| Layer | Central question | Representative starting points |
|---|---|---|
| 🔎 Detection and recognition | Where is the table, and what are its cells, topology, text, and geometry? | [PubTables-1M](https://openaccess.thecvf.com/content/CVPR2022/html/Smock_PubTables-1M_Towards_Comprehensive_Table_Extraction_From_Unstructured_Documents_CVPR_2022_paper.html), [TableVLM](https://aclanthology.org/2023.acl-long.137/), [UniTable](https://arxiv.org/abs/2403.04822), [TRivia](https://openaccess.thecvf.com/content/CVPR2026/html/Zhang_TRivia_Self-supervised_Fine-tuning_of_Vision-Language_Models_for_Table_Recognition_CVPR_2026_paper.html) |
| 🧠 Visual reasoning | Can a model answer, verify, calculate, and explain directly from table pixels? | [Multimodal Table Understanding](https://aclanthology.org/2024.acl-long.493/), [TabPedia](https://arxiv.org/abs/2406.01326), [SynTab-LLaVA](https://openaccess.thecvf.com/content/CVPR2025/html/Zhou_SynTab-LLaVA_Enhancing_Multimodal_Table_Understanding_with_Decoupled_Synthesis_CVPR_2025_paper.html), [CoReTab](https://aclanthology.org/2026.eacl-long.306/) |
| 🏭 Data production | How can we generate content, layouts, pixels, labels, and reasoning traces with verifiable provenance? | [Scaling Text-Rich Image Understanding via Code-Guided Synthetic Multimodal Data Generation](https://aclanthology.org/2025.acl-long.855/), [TableNet](https://arxiv.org/abs/2604.13041), [μgat](https://arxiv.org/abs/2408.15646), [TableDreamer](https://aclanthology.org/2025.findings-acl.381/) |
| 🌍 Realism and robustness | Do gains survive original styles, dense layouts, perturbations, and real-world captures? | [TableVQA-Bench](https://arxiv.org/abs/2404.19205), [TABLET](https://openreview.net/forum?id=5UbeQDlYDj), [TableVista](https://aclanthology.org/2026.findings-acl.1745/), [WildTableBench](https://arxiv.org/abs/2605.01018) |
| 🧩 Hybrid and interleaved tables | How should models combine pixels, markup, and graphics embedded in table cells? | [Knowledge-Aware Reasoning over Multimodal Semi-Structured Tables](https://aclanthology.org/2024.findings-emnlp.822/), [TableDART](https://arxiv.org/abs/2509.14671), [MMTabReal](https://aclanthology.org/2026.findings-acl.2047/) |
| 🎯 Retrieval and attribution | Can a system find the right table and point to the exact supporting cells? | [TabRAG](https://arxiv.org/abs/2602.07642), [RITT](https://aclanthology.org/2025.trl-1.8/), [ViTaB-A](https://arxiv.org/abs/2602.15769) |

<a id="data-generation-pipeline"></a>
## 🏭 Multimodal table data factory

Use this map to turn structured values, text, or a layout plan into pixel-grounded training samples. The strongest pipelines keep every intermediate artifact—schema, markup, render parameters, cell boxes, answers, and validation traces—so labels remain auditable.

```mermaid
flowchart LR
  A["1. Content & schema"] --> B["2. Markup & layout"] --> C["3. Render pixels"] --> D["4. QA & instructions"] --> E["5. Validate & augment"]
```

| Production stage | Representative papers | Typical output |
|---|---|---|
| 🧬 Content and structure | [Map&Make](https://aclanthology.org/2025.acl-long.1460/), [TableDreamer](https://aclanthology.org/2025.findings-acl.381/), [GReaT](https://openreview.net/forum?id=cEygmQNOeI), [TabSyn](https://openreview.net/forum?id=4Ay23yeuz0) | Values, schemas, relational dependencies, and table semantics |
| 🎨 Markup-to-pixel rendering | [TableNet](https://arxiv.org/abs/2604.13041), [μgat](https://arxiv.org/abs/2408.15646), [FlexDoc](https://aclanthology.org/2025.emnlp-industry.105/) | HTML/Markdown/LaTeX, images or pages, boxes, and structure labels |
| 🖼️ Direct image synthesis | [Latent Diffusion](https://arxiv.org/abs/2408.09800), [Document Diffusion](https://doi.org/10.1007/978-3-031-41682-8_27), [Realistic Table Synthesis](https://arxiv.org/abs/2404.11100) | Table-bearing pixels generated or composed under layout control |
| 💬 QA and instruction synthesis | [CoSyn](https://aclanthology.org/2025.acl-long.855/), [SynTab-LLaVA](https://openaccess.thecvf.com/content/CVPR2025/html/Zhou_SynTab-LLaVA_Enhancing_Multimodal_Table_Understanding_with_Decoupled_Synthesis_CVPR_2025_paper.html), [AutoT2T](https://arxiv.org/abs/2505.19563) | Questions, answers, reasoning traces, and multimodal conversations |
| 🛡️ Validation and stress testing | [GRAFT](https://arxiv.org/abs/2508.15690), [Permutation-aided FT](https://arxiv.org/abs/2406.14541), [TableVQA-Bench](https://arxiv.org/abs/2404.19205) | Executable checks, controlled perturbations, and visual robustness tests |

### 🧰 Practical generators and toolkits

These repositories can serve as components of a training-data production stack. “Official” means the repository is linked to the corresponding paper; community projects are clearly labeled.

| Stage | Project | Produces | Best used for |
|---|---|---|---|
| 🎨 Markup & rendering | **[TableGeneration](https://github.com/WenmuZhou/TableGeneration)**<br><sub>official paper code</sub> | HTML tables, rendered images, and exact TSR labels | Autonomous schema, layout, and content generation with reproducible supervision |
| 💬 Instructions & QA | **[CoSyn / pixmo-docs](https://github.com/allenai/pixmo-docs)**<br><sub>official paper code</sub> | Python/HTML/LaTeX renders plus QA and reasoning instructions | Scaling code-guided text-rich multimodal instruction data |
| 🎨 Markup & rendering | **[μgat dataset generator](https://github.com/aimagelab/mugat)**<br><sub>official paper code</sub> | Markdown/LaTeX source paired with PDF and PNG pages | Academic-style tables with controlled templates and source markup |
| 💬 Instructions & QA | **[SynTab-LLaVA](https://github.com/bang123-box/SynTab-LLaVA)**<br><sub>official paper code</sub> | Rendered table images and synthesized visual-table QA | Decoupled, large-scale multimodal table instruction construction |
| 🧬 Content & structure | **[TableDreamer](https://github.com/SpursGoZmy/TableDreamer)**<br><sub>official paper code</sub> | Table titles, contents, instructions, and responses | Weakness-guided table instruction synthesis with pluggable LLMs |
| 💬 Instructions & QA | **[AutoT2T](https://github.com/jokersio-tsy/AutoT2T)**<br><sub>official paper code</sub> | Verified mathematical table tasks and controlled perturbations | Generating executable numerical reasoning examples |
| 🧬 Content & structure | **[Map&Make](https://github.com/coral-lab-asu/map-make)**<br><sub>official paper code</sub> | Grounded scientific tables from unstructured text | Text-to-table data with proposition and schema intermediates |
| 🖼️ Direct image generation | **[WikiTIG](https://github.com/kamigaito/WikiTIG)**<br><sub>official paper code</sub> | Entity-conditioned table and image generation pairs | Bootstrapping generation data from Wikipedia infoboxes |
| 🛡️ Augmentation & validation | **[Realistic Table Recognition Synthesizer](https://github.com/iWudao/Synthesizing-Realistic-Data-for-Table-Recognition)**<br><sub>official paper code</sub> | Realistic financial table images and recognition labels | Draw-and-paste synthesis that retains complex real structures |
| 🎨 Markup & rendering | **[Great Tables](https://github.com/posit-dev/great-tables)**<br><sub>production toolkit</sub> | Styled HTML tables and exportable table images | Programmatic DataFrame-to-pixel rendering with rich styling |
| 🧬 Content & structure | **[Synthetic Data Vault](https://github.com/sdv-dev/SDV)**<br><sub>production toolkit</sub> | Synthetic single-table, multi-table, and sequential values | Producing statistically coherent cell contents before rendering |
| 🧬 Content & structure | **[GReaT](https://github.com/tabularis-ai/be_great)**<br><sub>official paper code</sub> | Language-model-generated structured rows | Domain-adapted table content generation from small seed datasets |
| 🧬 Content & structure | **[REaLTabFormer](https://github.com/worldbank/REaLTabFormer)**<br><sub>official paper code</sub> | Synthetic relational and single-table values | Preserving dependencies across linked tables before visual rendering |
| 🧬 Content & structure | **[TabSyn](https://github.com/amazon-science/tabsyn)**<br><sub>official paper code</sub> | Diffusion-generated mixed-type table rows | High-fidelity numerical and categorical content synthesis |
| 🧬 Content & structure | **[SDGX](https://github.com/hitsz-ids/synthetic-data-generator)**<br><sub>production toolkit</sub> | Pluggable synthetic structured datasets | Composing privacy, quality, and generator modules in production pipelines |
| 🎨 Markup & rendering | **[DoGe Document Generator](https://github.com/Travvy88/DocumentGenerator_DoGe)**<br><sub>community project</sub> | Synthetic document pages with tables, text, and bounding boxes | Generating table-bearing page layouts and detection annotations |
| 🎨 Markup & rendering | **[Synthetic OCR Image Generator](https://github.com/junyeong-nero/synthetic-ocr-image-generator)**<br><sub>community project</sub> | Table images with Markdown and JSON ground truth | Quick OCR and TSR corpus generation from configurable templates |
| 🛡️ Augmentation & validation | **[TableVQA-Bench](https://github.com/naver-ai/tablevqabench)**<br><sub>official paper code</sub> | Controlled table visualizations and visual QA evaluations | Testing whether synthetic styles preserve content and reasoning difficulty |

> **Recommended recipe:** generate statistically coherent values → plan spans and headers → render several HTML/Markdown/LaTeX style families → retain cell-level provenance → synthesize executable QA → add scan, camera, compression, and typography perturbations → reject samples whose rendered evidence no longer supports the answer.

### Collection at a glance

| Section | Papers | What belongs here |
|---|---:|---|
| 🧠 [Multimodal reasoning, QA, and training](#multimodal-reasoning) | 21 | Models and training methods that answer, calculate, retrieve, or reason from visual and hybrid tables. |
| 🏭 [Synthetic data generation and rendering](#data-generation) | 21 | Pipelines that synthesize table content or structure, render markup into pixels, generate instructions, or create images directly. |
| 🧪 [Benchmarks and datasets](#benchmarks-datasets) | 26 | Evaluation suites, training corpora, and diagnostic datasets built around table pixels or multimodal cells. |
| 🔎 [Recognition, parsing, and extraction](#recognition-extraction) | 72 | Table detection, OCR, cell topology, image-to-markup, and end-to-end reconstruction. |
| 📏 [Analysis, evaluation, metrics, and surveys](#analysis-evaluation) | 13 | Controlled comparisons, robustness studies, metrics, uncertainty, reproducibility, and field surveys. |
| 🧩 [Adjacent multimodal and document-table work](#adjacent) | 17 | Closely related document, screenshot, retrieval, and cross-modal research with substantive table relevance. |

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
| `TI` | table image |
| `DP` | document page |
| `SS` | screenshot or dashboard |
| `IM` | images or graphics inside/alongside tables |
| `SR` | synthetically rendered table |
| `TT` | paired text, markup, or privileged structure |

### Task

`SYNTH` `RENDER` `AUGMENT` `QA` `REASON` `TSR` `OCR` `EXTRACT` `RETRIEVE` `CAPTION` `EVAL` `DATA` `RL`

<a id="paper-collection"></a>
## 📚 Paper collection

- [🚀 Start here](#start-here)
- [🧭 Research map](#research-map)
- [🏭 Multimodal table data factory](#data-generation-pipeline)
- [🏷️ Tag legend](#tag-legend)
  - [🧠 Multimodal reasoning, QA, and training](#multimodal-reasoning)
  - [🏭 Synthetic data generation and rendering](#data-generation)
  - [🧪 Benchmarks and datasets](#benchmarks-datasets)
  - [🔎 Recognition, parsing, and extraction](#recognition-extraction)
  - [📏 Analysis, evaluation, metrics, and surveys](#analysis-evaluation)
  - [🧩 Adjacent multimodal and document-table work](#adjacent)
- [🔗 Related lists](#related-lists)
- [🤝 Contributing](#contributing)

<a id="multimodal-reasoning"></a>
## 🧠 Multimodal reasoning, QA, and training

> Models and training methods that answer, calculate, retrieve, or reason from visual and hybrid tables. **21 papers.**

| Year | Paper | Venue | Input / task tags | Why it matters | Resources |
|---:|---|---|---|---|---|
| 2026 | **[CoReTab: Improving Multimodal Table Understanding with Code-driven Reasoning](https://aclanthology.org/2026.eacl-long.306/)** | EACL | `TI` `QA` `REASON` `TSR` `RL` | Builds verified code-grounded traces and combines pretraining, supervised tuning, and GRPO. | — |
| 2026 | **[Decoupling Skeleton and Flesh: Efficient Multimodal Table Reasoning with Disentangled Alignment and Structure-aware Guidance](https://arxiv.org/abs/2602.03491)** | arXiv | `TI` `TT` `QA` `REASON` | Separates structural abstraction from semantic grounding and adds structure-aware inference guidance. | — |
| 2026 | **[Multimodal Table Understanding with Difficulty-aware Reinforcement Learning](https://ojs.aaai.org/index.php/AAAI/article/view/37042)** | AAAI | `TI` `QA` `TSR` `REASON` `RL` | Introduces MM-Table-R1 with task- and data-level curricula based on table complexity. | — |
| 2026 | **[TableDART: Dynamic Adaptive Multi-Modal Routing for Table Understanding](https://arxiv.org/abs/2509.14671)** | ICLR 2026 | `TI` `TT` `QA` `REASON` | Routes between visual and serialized table representations according to example difficulty. | [💻 Code](https://github.com/xiaobo-xing/TableDART) |
| 2026 | **[TABQAWORLD: Optimizing Multimodal Reasoning for Multi-Turn Table Question Answering](https://arxiv.org/abs/2604.03393)** | arXiv | `TI` `TT` `QA` `REASON` | Dynamically selects visual or textual table state representations during multi-turn reasoning. | — |
| 2026 | **[TabRAG: Efficient Table Retrieval and Understanding with Multimodal Large Language Models](https://arxiv.org/abs/2602.07642)** | arXiv | `TI` `RETRIEVE` `QA` `REASON` | Unifies visual table reranking and answer generation for retrieval-augmented table understanding. | — |
| 2026 | **[Thinking with Tables: Enhancing Multi-Modal Tabular Understanding via Neuro-Symbolic Reasoning](https://arxiv.org/abs/2603.24004)** | arXiv | `TI` `TT` `QA` `REASON` | Combines visual table perception with symbolic operations for interpretable tabular reasoning. | — |
| 2026 | **[V-TableR1: Process-Supervised Multimodal Table Reasoning with Critic-Guided Policy Optimization](https://arxiv.org/abs/2604.20755)** | arXiv | `TI` `QA` `REASON` `RL` | Uses a critic VLM and process-guided policy optimization to supervise intermediate visual-table reasoning. | — |
| 2025 | **[Can GRPO Boost Complex Multimodal Table Understanding?](https://aclanthology.org/2025.emnlp-main.637/)** | EMNLP | `TI` `QA` `TSR` `REASON` `RL` | Table-R1 combines warm-up, TEDS-based perception alignment, and hint-completion GRPO. | — |
| 2025 | **[Enhancing Large Vision-Language Models with Layout Modality for Table Question Answering on Japanese Annual Securities Reports](https://arxiv.org/abs/2505.17625)** | IIAI AAI | `TI` `TT` `QA` `EXTRACT` `REASON` | Adds OCR text and layout features to LVLMs for financial table cell QA in Japanese filings. | — |
| 2025 | **[ExpliCIT-QA: Explainable Code-Based Image Table Question Answering](https://arxiv.org/abs/2507.11694)** | arXiv | `TI` `QA` `REASON` | Produces executable code explanations for arithmetic and logical QA over table images. | — |
| 2025 | **[HIPPO: Enhancing the Table Understanding Capability of LLMs through Hybrid-Modal Preference Optimization](https://arxiv.org/abs/2502.17315)** | arXiv | `TI` `TT` `QA` `REASON` | Aligns preferences across table images and textual table representations. | — |
| 2025 | **[Multimodal Tabular Reasoning with Privileged Structured Information](https://openreview.net/forum?id=AuBSUgFVgq)** | NeurIPS | `TI` `TT` `QA` `REASON` `RL` | Uses table markup only as privileged training supervision while retaining image-only inference. | — |
| 2025 | **[RITT: A Retrieval-Assisted Framework with Image and Text Table Representations for Table Question Answering](https://aclanthology.org/2025.trl-1.8/)** | TRL Workshop | `TI` `TT` `QA` `RETRIEVE` `REASON` | Retrieves a relevant subtable and dynamically selects visual or textual table representations by question type. | — |
| 2025 | **[TableMoE: Neuro-Symbolic Routing for Structured Expert Reasoning in Multimodal Table Understanding](https://arxiv.org/abs/2506.21393)** | arXiv | `TI` `TT` `QA` `REASON` | Routes table questions between neural perception and symbolic execution components. | — |
| 2024 | **[Knowledge-Aware Reasoning over Multimodal Semi-Structured Tables](https://aclanthology.org/2024.findings-emnlp.822/)** | Findings of EMNLP | `IM` `TT` `QA` `REASON` `DATA` | Introduces MMTABQA, where semi-structured tables interleave text cells with image cells. | — |
| 2024 | **[Multimodal Table Understanding](https://aclanthology.org/2024.acl-long.493/)** | ACL | `TI` `TT` `QA` `REASON` `TSR` `DATA` | Defines a broad 24-task setting and introduces MMTab plus Table-LLaVA for recognition and reasoning. | [💻 Code](https://github.com/SpursGoZmy/Table-LLaVA) · [🗃️ Data](https://huggingface.co/datasets/SpursgoZmy/MMTab) |
| 2024 | **[PixT3: Pixel-based Table-to-Text Generation](https://aclanthology.org/2024.acl-long.364/)** | ACL | `TI` `CAPTION` `REASON` | Generates faithful descriptions directly from table pixels without relying on a serialized table input. | — |
| 2024 | **[TabPedia: Towards Comprehensive Visual Table Understanding with Concept Synergy](https://arxiv.org/abs/2406.01326)** | NeurIPS | `TI` `QA` `REASON` `TSR` `DATA` | Couples low-level table recognition with high-level concept reasoning and introduces ComTQA. | [💻 Code](https://github.com/zhaowc-ustc/TabPedia) |
| 2023 | **[M-TBQA: Multimodal Table-Based Question Answering](https://doi.org/10.1145/3650215.3650255)** | ICMLCA | `IM` `TT` `QA` `REASON` | An early task and model for question answering over tables whose cells include both text and images. | — |
| 2022 | **[End-to-End Compound Table Understanding with Multi-Modal Modeling](https://doi.org/10.1145/3503161.3547885)** | ACM Multimedia | `TI` `TT` `TSR` `OCR` `REASON` `DATA` | Introduces the bilingual ComFinTab benchmark and CTUNet for compound table recognition and relation understanding. | [💻 Code](https://github.com/hikopensource/DAVAR-Lab-OCR) |

<p align="right"><a href="#readme-top">⬆️ Back to top</a></p>

<a id="data-generation"></a>
## 🏭 Synthetic data generation and rendering

> Pipelines that synthesize table content or structure, render markup into pixels, generate instructions, or create images directly. **21 papers.**

| Year | Paper | Venue | Input / task tags | Why it matters | Resources |
|---:|---|---|---|---|---|
| 2026 | **[TableNet: A Large-Scale Table Dataset with LLM-Powered Autonomous Generation](https://arxiv.org/abs/2604.13041)** | arXiv | `TT` `SR` `TI` `SYNTH` `RENDER` `TSR` `DATA` | Uses cooperating agents for schema planning, layout construction, and content filling before rendering HTML tables with exact structure labels. | [💻 Code](https://github.com/WenmuZhou/TableGeneration) |
| 2025 | **[CTSyn: A Foundation Model for Cross Tabular Data Generation](https://openreview.net/forum?id=Sh4FOyZRpv)** | ICLR | `TT` `SYNTH` `DATA` | Pretrains a cross-table foundation model for transferable structured-value generation across heterogeneous tables. | — |
| 2025 | **[FlexDoc: Parameterized Sampling for Diverse Multilingual Synthetic Documents for Training Document Understanding Models](https://aclanthology.org/2025.emnlp-industry.105/)** | EMNLP Industry Track | `TT` `SR` `DP` `SYNTH` `RENDER` `EXTRACT` `DATA` | Samples multilingual semi-structured documents from stochastic schemas with parameterized layouts and table-boundary annotations. | — |
| 2025 | **[GRAFT: Generator of Realistic And Formatted Tables](https://arxiv.org/abs/2508.15690)** | arXiv | `SR` `TI` `SYNTH` `RENDER` `QA` `REASON` `EVAL` `DATA` | Programmatically renders controlled table families and generates executable questions with machine-verifiable JSON or YAML answers. | — |
| 2025 | **[Map&Make: Generating & Evaluating Scientific Text-to-Table Data](https://aclanthology.org/2025.acl-long.1460/)** | ACL | `TT` `SYNTH` `EXTRACT` `DATA` | Maps scientific text into atomic propositions and a latent schema before generating grounded tables. | [💻 Code](https://github.com/coral-lab-asu/map-make) · [🌐 Project](https://coral-lab-asu.github.io/map-make) |
| 2025 | **[Scaling Text-Rich Image Understanding via Code-Guided Synthetic Multimodal Data Generation](https://aclanthology.org/2025.acl-long.855/)** | ACL | `TT` `SR` `TI` `DP` `SYNTH` `RENDER` `QA` `REASON` `DATA` | Uses generated Python, HTML, and LaTeX programs to render text-rich images and build 2.7M instruction examples over 400K synthetic images. | [💻 Code](https://github.com/allenai/pixmo-docs) · [🗃️ Data](https://huggingface.co/datasets/allenai/CoSyn-400K) · [🌐 Project](https://yueyang1996.github.io/cosyn/) |
| 2025 | **[SynTab-LLaVA: Enhancing Multimodal Table Understanding with Decoupled Synthesis](https://openaccess.thecvf.com/content/CVPR2025/html/Zhou_SynTab-LLaVA_Enhancing_Multimodal_Table_Understanding_with_Decoupled_Synthesis_CVPR_2025_paper.html)** | CVPR | `TI` `SR` `SYNTH` `RENDER` `QA` `REASON` `DATA` | Decouples table rendering from QA synthesis to build SynTab at large scale with lower generation cost. | [💻 Code](https://github.com/bang123-box/SynTab-LLaVA) |
| 2025 | **[TableDreamer: Synthesizing High-Quality Table Instruction Tuning Data with Pluggable LLMs](https://aclanthology.org/2025.findings-acl.381/)** | Findings of ACL | `TT` `SYNTH` `QA` `REASON` `DATA` | Synthesizes table titles, contents, instructions, and responses with weakness-guided iterative exploration, yielding 27K instruction examples. | [💻 Code](https://github.com/SpursGoZmy/TableDreamer) |
| 2025 | **[TabularMath: Understanding Math Reasoning over Tables with Large Language Models](https://arxiv.org/abs/2505.19563)** | arXiv | `TT` `SR` `SYNTH` `QA` `REASON` `DATA` | AutoT2T converts mathematical word problems into verified table-reasoning tasks and controllably perturbed variants. | [💻 Code](https://github.com/jokersio-tsy/AutoT2T) |
| 2025 | **[Why LLMs Are Bad at Synthetic Table Generation (and what to do about it)](https://arxiv.org/abs/2406.14541)** | arXiv | `TT` `SYNTH` `EVAL` `DATA` | Diagnoses permutation sensitivity in LLM table synthesis and proposes permutation-aided fine-tuning to better preserve functional dependencies. | [💻 Code](https://github.com/ShengzheXu/Permutation-aided-Fine-tuning) |
| 2024 | **[Latent Diffusion for Guided Document Table Generation](https://arxiv.org/abs/2408.09800)** | ICDAR | `SR` `TT` `SYNTH` `RENDER` `DATA` | Uses layout-guided latent diffusion to synthesize document tables for downstream recognition. | — |
| 2024 | **[Mixed-Type Tabular Data Synthesis with Score-based Diffusion in Latent Space](https://openreview.net/forum?id=4Ay23yeuz0)** | ICLR | `TT` `SYNTH` `DATA` | Generates mixed categorical and numerical table contents with score-based diffusion in a learned latent space. | [💻 Code](https://github.com/amazon-science/tabsyn) |
| 2024 | **[Synthesizing Realistic Data for Table Recognition](https://arxiv.org/abs/2404.11100)** | ICDAR | `SR` `TI` `SYNTH` `RENDER` `AUGMENT` `TSR` `DATA` | Generates realistic financial table images to enlarge recognition training data without manual labeling. | [💻 Code](https://github.com/iWudao/Synthesizing-Realistic-Data-for-Table-Recognition) |
| 2024 | **[Text-Tuple-Table: Towards Information Integration in Text-to-Table Generation via Global Tuple Extraction](https://aclanthology.org/2024.emnlp-main.523/)** | EMNLP | `TT` `SYNTH` `EXTRACT` `DATA` | Uses global tuple extraction as an intermediate representation for generating faithful tables from collections of text. | [💻 Code](https://github.com/HKUST-KnowComp/LiveSum-TTT) |
| 2024 | **[μgat: Multimodal Generalized Academic Translator](https://arxiv.org/abs/2408.15646)** | ECCV Workshop | `TT` `SR` `DP` `SYNTH` `RENDER` `OCR` `TSR` `DATA` | Includes a reproducible Markdown and LaTeX table generator that renders paired PDF or PNG pages with source markup. | [💻 Code](https://github.com/aimagelab/mugat) |
| 2023 | **[Diffusion Models for Document Image Generation](https://doi.org/10.1007/978-3-031-41682-8_27)** | ICDAR | `DP` `SR` `SYNTH` `RENDER` `DATA` | Studies unconditional and layout-controlled document image synthesis, providing a direct pixel-generation route for table-bearing pages. | — |
| 2023 | **[Language Models are Realistic Tabular Data Generators](https://openreview.net/forum?id=cEygmQNOeI)** | ICLR | `TT` `SYNTH` `DATA` | GReaT serializes structured rows as natural language and fine-tunes language models to generate realistic table contents. | [💻 Code](https://github.com/tabularis-ai/be_great) |
| 2023 | **[REaLTabFormer: Generating Realistic Relational and Tabular Data using Transformers](https://arxiv.org/abs/2302.02041)** | arXiv | `TT` `SYNTH` `DATA` | Generates single-table and relational structured values while preserving dependencies useful for downstream rendering. | [💻 Code](https://github.com/worldbank/REaLTabFormer) |
| 2023 | **[Table and Image Generation for Investigating Knowledge of Entities in Pre-trained Vision and Language Models](https://aclanthology.org/2023.acl-short.162/)** | ACL | `TT` `IM` `SR` `SYNTH` `RENDER` `DATA` | Builds paired table and image generation data from roughly 200K Wikipedia infoboxes for entity-knowledge studies. | [💻 Code](https://github.com/kamigaito/WikiTIG) |
| 2023 | **[TabuLa: Harnessing Language Models for Tabular Data Synthesis](https://arxiv.org/abs/2310.12746)** | arXiv | `TT` `SYNTH` `DATA` | Adapts language models for efficient synthetic table-content generation with compact table-specific tokenization. | [💻 Code](https://github.com/zhao-zilong/Tabula) |
| 2022 | **[Text-to-Table: A New Way of Information Extraction](https://aclanthology.org/2022.acl-long.180/)** | ACL | `TT` `SYNTH` `EXTRACT` `DATA` | Frames information extraction as generating complex structured tables from text with structure-aware constraints. | — |

<p align="right"><a href="#readme-top">⬆️ Back to top</a></p>

<a id="benchmarks-datasets"></a>
## 🧪 Benchmarks and datasets

> Evaluation suites, training corpora, and diagnostic datasets built around table pixels or multimodal cells. **26 papers.**

| Year | Paper | Venue | Input / task tags | Why it matters | Resources |
|---:|---|---|---|---|---|
| 2026 | **[A Benchmark and Method for Photographed Table Reasoning](https://doi.org/10.1016/j.patcog.2026.113355)** | Pattern Recognition | `TI` `QA` `REASON` `EVAL` `DATA` | Introduces PCTR-16K and structure-aware chain-of-thought for Chinese tables photographed under real conditions. | [💻 Code](https://github.com/PremiLab-Math/PCTR-16k) |
| 2026 | **[INDOTABVQA: A Benchmark for Cross-Lingual Table Understanding in Bahasa Indonesia Documents](https://aclanthology.org/2026.findings-acl.1105/)** | Findings of ACL | `DP` `TI` `QA` `EVAL` `DATA` | Contains 1,593 Indonesian document images and question sets in Indonesian, English, Hindi, and Arabic. | [🗃️ Data](https://huggingface.co/datasets/NusaBharat/INDOTABVQA) |
| 2026 | **[MMFCTUB: Multi-Modal Financial Credit Table Understanding Benchmark](https://arxiv.org/abs/2601.04643)** | arXiv | `TI` `QA` `REASON` `EVAL` `DATA` | A domain benchmark for structure perception, financial knowledge, and calculation across credit tables. | — |
| 2026 | **[MMTableBench: A Multi-level Multimodal Benchmark for Reasoning and Layout Complexity in Table QA](https://doi.org/10.1145/3774904.3792367)** | The Web Conference | `TI` `QA` `REASON` `EVAL` `DATA` | Separates layout complexity from reasoning complexity for fine-grained diagnosis of multimodal TableQA. | [💻 Code](https://github.com/TableBench/MMTableBench) · [🗃️ Data](https://huggingface.co/datasets/Multilingual-Multimodal-NLP/MMTableBench) |
| 2026 | **[MMTabReal: A Real-World Benchmark for Multimodal Table Understanding](https://aclanthology.org/2026.findings-acl.2047/)** | Findings of ACL | `TI` `IM` `QA` `REASON` `EVAL` `DATA` | Provides 500 real-world tables with 4,021 questions spanning embedded graphics, color encodings, and complex layouts. Formerly **MMTBench**. | — |
| 2026 | **[TABLET: A Large-Scale Dataset for Robust Visual Table Understanding](https://openreview.net/forum?id=5UbeQDlYDj)** | ICLR | `TI` `TT` `QA` `TSR` `REASON` `DATA` | Aggregates more than four million examples over 21 tasks while preserving mostly original table visualizations. | [💻 Code](https://github.com/alonsoapp/TABLET) |
| 2026 | **[TableVista: Benchmarking Multimodal Table Reasoning under Visual and Structural Complexity](https://aclanthology.org/2026.findings-acl.1745/)** | Findings of ACL | `TI` `SR` `QA` `REASON` `EVAL` `DATA` | Expands 3,000 reasoning problems into 30,000 controlled visual variants to isolate style, structure, and vision-only failure modes. | — |
| 2026 | **[TABVERSE: Benchmarking Cross-Format Table Understanding in LLMs and VLMs](https://arxiv.org/abs/2606.09578)** | arXiv | `TI` `TT` `QA` `TSR` `REASON` `EVAL` `DATA` | Aligns identical tables across HTML, Markdown, LaTeX, and rendered images to isolate representation effects. | [💻 Code](https://github.com/mbzuai-nlp/TABVERSE) · [🗃️ Data](https://huggingface.co/datasets/MBZUAI/TABVERSE) |
| 2026 | **[UniTabBank: A Large-Scale Multi-Lingual, Multi-Layout, Multi-Type, Multi-Format Dataset for Table Detection](https://openaccess.thecvf.com/content/WACV2026/html/Mondal_UniTabBank_A_Large_Scale_Multi-Lingual_Multi-Layout_Multi-Type_Multi-Format_Dataset_for_WACV_2026_paper.html)** | WACV | `DP` `TI` `DETECT` `DATA` | Broadens table detection coverage across languages, layouts, table types, and file formats. | — |
| 2026 | **[ViTaB-A: Evaluating Multimodal Large Language Models on Visual Table Attribution](https://arxiv.org/abs/2602.15769)** | arXiv | `TI` `TT` `QA` `REASON` `EVAL` | Tests answer attribution across image, Markdown, and JSON table representations. | — |
| 2026 | **[WildTableBench: Benchmarking Multimodal Foundation Models on Table Understanding In the Wild](https://arxiv.org/abs/2605.01018)** | arXiv | `TI` `DP` `QA` `REASON` `EVAL` `DATA` | A manually verified benchmark built from naturally occurring table images rather than template renders. | [💻 Code](https://github.com/hjzhe/WildTableBench) · [🗃️ Data](https://huggingface.co/datasets/jzhuang/WildTableBench) |
| 2025 | **[2Columns1Row: A Benchmark for Textual and Multimodal Table Reasoning in Russian](https://aclanthology.org/2025.findings-emnlp.721/)** | Findings of EMNLP | `TI` `TT` `QA` `REASON` `EVAL` `DATA` | Adds a Russian-language comparison of textual and visual table reasoning. | — |
| 2025 | **[Benchmarking Multimodal Large Language Models on Recognition and Understanding over Chemical Tables](https://arxiv.org/abs/2506.11375)** | arXiv | `TI` `IM` `TT` `TSR` `QA` `EVAL` `DATA` | Evaluates chemical table recognition and reasoning where cells may contain domain-specific molecular graphics. | — |
| 2025 | **[CISOL: An Open and Extensible Dataset for Table Structure Recognition in the Construction Industry](https://openaccess.thecvf.com/content/WACV2025/html/Tschirschwitz_CISOL_An_Open_and_Extensible_Dataset_for_Table_Structure_Recognition_WACV_2025_paper.html)** | WACV | `TI` `DP` `TSR` `DATA` | Provides an extensible recognition dataset designed for broader table layout diversity. | — |
| 2025 | **[Does Table Source Matter? Benchmarking and Improving Multimodal Scientific Table Understanding and Reasoning](https://openreview.net/forum?id=lP5KmjCPXW)** | OpenReview | `TI` `TT` `QA` `REASON` `EVAL` `DATA` | Introduces MMSci and measures how scientific source domains affect visual-table reasoning. | — |
| 2025 | **[EviFiVQA: A Benchmark for Evidence-Grounded Multi-hop Reasoning in Financial VQA](https://doi.org/10.1007/978-3-032-04627-7_34)** | ICDAR | `DP` `TI` `QA` `REASON` `EVAL` `DATA` | Requires numerical multi-hop reasoning, evidence localization, and hierarchical aggregation over irregular financial tables. | — |
| 2025 | **[MTabVQA: Evaluating Multi-Tabular Reasoning of Language Models in Visual Space](https://arxiv.org/abs/2506.11684)** | arXiv | `TI` `QA` `REASON` `EVAL` `DATA` | Evaluates reasoning that requires jointly reading multiple table images. | — |
| 2025 | **[RealHiTBench: A Comprehensive Realistic Hierarchical Table Benchmark](https://arxiv.org/abs/2506.13405)** | arXiv | `TI` `TT` `QA` `REASON` `EVAL` `DATA` | Focuses on realistic hierarchical tables and compares image and text presentation formats. | — |
| 2025 | **[TabComp: A Dataset for Visual Table Reading Comprehension](https://aclanthology.org/2025.findings-naacl.320/)** | Findings of NAACL | `TI` `QA` `REASON` `DATA` | Targets reading comprehension over visual tables with questions tied to table structure and content. | — |
| 2025 | **[TableEval: A Real-World Benchmark for Complex, Multilingual, and Multi-Structured Table Question Answering](https://aclanthology.org/2025.emnlp-main.363/)** | EMNLP | `TI` `TT` `QA` `REASON` `EVAL` `DATA` | Tests multilingual QA over complex real-world tables in both visual and serialized formats. | — |
| 2025 | **[Visual-TableQA: Open-Domain Benchmark for Reasoning over Table Images](https://arxiv.org/abs/2509.07966)** | arXiv | `TI` `SR` `QA` `REASON` `DATA` | Generates open-domain LaTeX-rendered tables, reasoning-heavy questions, rationales, and multi-model verification. | — |
| 2024 | **[TableVQA-Bench: A Visual Question Answering Benchmark on Multiple Table Domains](https://arxiv.org/abs/2404.19205)** | arXiv | `TI` `SR` `QA` `REASON` `EVAL` `DATA` | Renders existing table datasets into images and supplies 1,500 generated QA pairs across domains. | [💻 Code](https://github.com/naver-ai/tablevqabench) |
| 2024 | **[WikiDT: Visual-Based Table Recognition and Question Answering Dataset](https://doi.org/10.1007/978-3-031-70533-5_24)** | ICDAR | `DP` `TI` `QA` `TSR` `DATA` | Contains 70,919 images and 159,905 tables with hierarchical labels supporting both QA and recognition diagnosis. | [🗃️ Data](https://huggingface.co/datasets/AmazonScience/WikiDT) · [🌐 Project](https://www.amazon.science/publications/wikidt-visual-based-table-recognition-and-question-answering-dataset) |
| 2023 | **[A Large-Scale Dataset for End-to-End Table Recognition in the Wild](https://www.nature.com/articles/s41597-023-01909-0)** | Scientific Data | `DP` `TI` `DETECT` `TSR` `OCR` `DATA` | Introduces TabRecSet with 38.1K English and Chinese tables from scanned and camera-captured scenes. | — |
| 2023 | **[WEATHERGOV+: A Table Recognition and Summarization Dataset to Bridge the Gap Between Document Image Analysis and Natural Language Generation](https://doi.org/10.1145/3573128.3604901)** | DocEng | `DP` `TI` `TT` `TSR` `OCR` `CAPTION` `DATA` | Connects document-image table recognition with end-to-end natural-language table summarization. | — |
| 2022 | **[PubTables-1M: Towards Comprehensive Table Extraction From Unstructured Documents](https://openaccess.thecvf.com/content/CVPR2022/html/Smock_PubTables-1M_Towards_Comprehensive_Table_Extraction_From_Unstructured_Documents_CVPR_2022_paper.html)** | CVPR | `DP` `TI` `DETECT` `TSR` `DATA` | A million-table dataset with detailed structure annotations and a DETR-based Table Transformer baseline. | [💻 Code](https://github.com/microsoft/table-transformer) · [🗃️ Data](https://huggingface.co/datasets/bsmock/pubtables-1m) |

<p align="right"><a href="#readme-top">⬆️ Back to top</a></p>

<a id="recognition-extraction"></a>
## 🔎 Recognition, parsing, and extraction

> Table detection, OCR, cell topology, image-to-markup, and end-to-end reconstruction. **72 papers.**

| Year | Paper | Venue | Input / task tags | Why it matters | Resources |
|---:|---|---|---|---|---|
| 2026 | **[CSPO: Alleviating Reward Ambiguity for Structured Table-to-LaTeX Generation](https://arxiv.org/abs/2604.10918)** | ACL | `TI` `TSR` `OCR` `RL` | Optimizes table-to-LaTeX generation with structure-sensitive policy rewards. | — |
| 2026 | **[InstructTable: Improving Table Structure Recognition Through Instructions](https://arxiv.org/abs/2604.02880)** | arXiv | `TI` `SR` `TSR` `DATA` | Uses instruction pretraining and introduces BCDSTab for balanced complex synthetic table evaluation. | — |
| 2026 | **[Tables Decoded: DELTA for Structure, TARQA for Understanding](https://openaccess.thecvf.com/content/WACV2026/html/Rajput_Tables_Decoded_DELTA_for_Structure_TARQA_for_Understanding_WACV_2026_paper.html)** | WACV | `TI` `TSR` `OCR` `QA` | Pairs a modular table extractor using OTSL with a downstream table QA system. | — |
| 2026 | **[TableSeq: Unified Generation of Structure, Content, and Layout](https://arxiv.org/abs/2604.16070)** | arXiv | `TI` `TSR` `OCR` `EXTRACT` | Generates structure, cell content, and layout within a unified sequence formulation. | [💻 Code](https://github.com/hamdilaziz/TableSeq) |
| 2026 | **[TDATR: Improving End-to-End Table Recognition via Table Detail-Aware Learning and Curriculum Learning](https://openaccess.thecvf.com/content/CVPR2026/html/Qin_TDATR_Improving_End-to-End_Table_Recognition_via_Table_Detail-Aware_Learning_and_CVPR_2026_paper.html)** | CVPR | `TI` `TSR` `OCR` `EXTRACT` | Targets fine-grained table details and staged learning for end-to-end structure and content recovery. | — |
| 2026 | **[TRivia: Self-supervised Fine-tuning of Vision-Language Models for Table Recognition](https://openaccess.thecvf.com/content/CVPR2026/html/Zhang_TRivia_Self-supervised_Fine-tuning_of_Vision-Language_Models_for_Table_Recognition_CVPR_2026_paper.html)** | CVPR | `TI` `TSR` `QA` `RL` | Learns from unlabeled table images through consistency sampling and a verifiable QA proxy task. | [💻 Code](https://github.com/opendatalab/TRivia) |
| 2025 | **[A One-Stage Network for Table Structure Recognition](https://arxiv.org/abs/2504.17522)** | arXiv | `TI` `TSR` | Predicts table structure in a single-stage architecture designed to simplify the recognition pipeline. | — |
| 2025 | **[DREAM: Document Reconstruction via End-to-end Autoregressive Model](https://arxiv.org/abs/2507.05805)** | ACM Multimedia | `DP` `TI` `OCR` `TSR` `EXTRACT` | Autoregressively reconstructs document structure and content, including complex tables, in one parsing model. | — |
| 2025 | **[Enhanced Table Structure Recognition with Multi-Modal Approach](https://aclanthology.org/2025.wasp-main.23/)** | WASP | `TI` `TT` `TSR` | Fuses visual and textual streams with separate structure and cell-box decoders. | — |
| 2025 | **[Enhancing Table Recognition with Vision LLMs: Benchmark and Neighbor-Guided Toolchain Reasoner](https://arxiv.org/abs/2412.20662)** | IJCAI | `TI` `TSR` `OCR` `EVAL` | Benchmarks vision LLM recognition and uses neighboring cells plus tools to repair structural predictions. | [💻 Code](https://github.com/lqzxt/NGTR) |
| 2025 | **[From Pixels to Tables: Reconstructing Complex Tables from Document Images](https://doi.org/10.1007/s10032-025-00553-7)** | IJDAR | `DP` `TI` `TSR` `EXTRACT` | Reconstructs complex tabular topology from document pixels with a structure-aware recognition pipeline. | — |
| 2025 | **[LORE++: Logical Location Regression Network for Table Structure Recognition with Pre-training](https://doi.org/10.1016/j.patcog.2024.110816)** | Pattern Recognition | `TI` `TSR` | Extends logical-location regression with table-focused pre-training for stronger structural generalization. | — |
| 2025 | **[RAPTOR: Refined Approach for Product Table Object Recognition](https://openaccess.thecvf.com/content/WACV2025W/VISIONDOCS/html/Thomas_RAPTOR_Refined_Approach_for_Product_Table_Object_Recognition_WACVW_2025_paper.html)** | WACV Workshops | `TI` `IM` `DETECT` `TSR` | Detects and organizes visual objects inside product comparison tables. | — |
| 2025 | **[SepFormer: Coarse-to-Fine Separator Regression for Table Structure Recognition](https://arxiv.org/abs/2506.21920)** | arXiv | `TI` `TSR` | Regresses table separators in coarse-to-fine stages for robust structure recovery. | — |
| 2025 | **[SLANet-1M: A Lightweight and Efficient Model for Table Recognition with Minimal Computational Cost](https://aclanthology.org/2025.swisstext-1.9/)** | SwissText | `TI` `TSR` `OCR` | A roughly one-million-parameter table recognizer designed for fast, CPU-friendly inference. | — |
| 2025 | **[Table2LaTeX-RL: High-Fidelity LaTeX Code Generation from Table Images via Reinforced Multimodal Language Models](https://arxiv.org/abs/2509.17589)** | NeurIPS | `TI` `TSR` `OCR` `RL` | Applies reinforcement learning to structure- and content-faithful table image-to-LaTeX generation. | — |
| 2025 | **[TableStructureFormer: An Improved Masked-Attention Mask Transformer Model with Long-Distance Feature Aggregation and Deep Detail Supervision for Table Structure Recognition](https://doi.org/10.1007/s40747-025-01975-w)** | Complex & Intelligent Systems | `TI` `TSR` | Combines masked attention, long-range aggregation, and detail supervision for row-column segmentation. | — |
| 2025 | **[TABLET: Table Structure Recognition Using Encoder-only Transformers](https://arxiv.org/abs/2506.07015)** | ICDAR | `TI` `TSR` | Formulates structure recognition with an encoder-only transformer rather than an autoregressive decoder. | — |
| 2025 | **[Treading Towards Privacy-Preserving Table Structure Recognition](https://openaccess.thecvf.com/content/WACV2025/html/Raja_Treading_Towards_Privacy-Preserving_Table_Structure_Recognition_WACV_2025_paper.html)** | WACV | `TI` `TSR` | Studies structure recovery when sensitive table content must be protected. | — |
| 2025 | **[TRH2TQA: Table Recognition with Hierarchical Relationships to Table Question-Answering on Business Documents](https://openaccess.thecvf.com/content/WACV2025/html/Jirachanchaisiri_TRH2TQA_Table_Recognition_with_Hierarchical_Relationships_to_Table_Question-Answering_on_WACV_2025_paper.html)** | WACV | `TI` `DP` `TSR` `OCR` `QA` | Connects hierarchical table recognition directly to business-document QA. | — |
| 2024 | **[ClusterTabNet: Supervised Clustering Method for Table Detection and Table Structure Recognition](https://arxiv.org/abs/2402.07502)** | ICDAR | `DP` `TI` `TSR` `EXTRACT` | Casts table and cell grouping as supervised clustering for joint detection and structure recovery. | — |
| 2024 | **[DTSM: Toward Dense Table Structure Recognition with Text Query Encoder and Adjacent Feature Aggregator](https://doi.org/10.1007/978-3-031-70533-5_25)** | ICDAR | `TI` `TT` `TSR` `OCR` | Uses text-conditioned queries and adjacent-cell aggregation for dense table layouts. | — |
| 2024 | **[End to End Table Transformer](https://doi.org/10.1007/978-3-031-70533-5_20)** | ICDAR | `DP` `TI` `DETECT` `TSR` `EXTRACT` | Adapts DETR queries and training for single-model table extraction from document images. | — |
| 2024 | **[Enhancing Table Structure Recognition via Bounding Box Guidance](https://doi.org/10.1007/978-3-031-78498-9_15)** | ICPR | `TI` `TSR` `DATA` | BGTR guides HTML generation with predicted cell boxes and introduces the synthetic SNSTab scene dataset. | — |
| 2024 | **[Enhancing Transformer-Based Table Structure Recognition for Long Tables](https://doi.org/10.1007/978-981-97-8511-7_16)** | PRCV | `TI` `TSR` | Adapts Transformer recognition to extreme aspect ratios and long table sequences. | — |
| 2024 | **[LRATNet: Local-Relationship-Aware Transformer Network for Table Structure Recognition](https://doi.org/10.1007/978-3-031-53308-2_37)** | MMM | `TI` `TSR` | Connects local row, column, and spatial relationships with global Transformer features. | — |
| 2024 | **[Multi-Cell Decoder and Mutual Learning for Table Structure and Character Recognition](https://arxiv.org/abs/2404.13268)** | ICDAR | `TI` `TSR` `OCR` | MuTabNet couples multi-cell structural decoding with character recognition through mutual learning. | — |
| 2024 | **[Multi-Modal Attention Based on 2D Structured Sequence for Table Recognition](https://doi.org/10.1007/978-981-97-8511-7_27)** | PRCV | `TI` `TT` `TSR` `OCR` | Jointly models structure-language sequences and cell boxes with a table-specific 2D attention layer. | — |
| 2024 | **[OmniParser: A Unified Framework for Text Spotting, Key Information Extraction and Table Recognition](https://openaccess.thecvf.com/content/CVPR2024/html/Wan_OmniParser_A_Unified_Framework_for_Text_Spotting_Key_Information_Extraction_CVPR_2024_paper.html)** | CVPR | `DP` `TI` `OCR` `EXTRACT` `TSR` | Uses one prompt-conditioned architecture for three document parsing tasks, including table recognition. | — |
| 2024 | **[RCAM-Transformer: A Novel Approach to Table Reconstruction Using Row-Column Attention Mechanism](https://doi.org/10.1007/978-3-031-70442-0_7)** | DAS | `TI` `TSR` `EXTRACT` | Builds row-column attention and reconstruction logic around the distinct geometry of table axes. | — |
| 2024 | **[RTSR: A Real-Time Table Structure Recognition Approach](https://doi.org/10.3233/FAIA240549)** | ECAI | `TI` `TSR` | Targets low-latency structure recognition while retaining accuracy on complex table layouts. | — |
| 2024 | **[Self-Supervised Pre-Training for Table Structure Recognition Transformer](https://arxiv.org/abs/2402.15578)** | AAAI SDU Workshop | `TI` `TSR` | Shows self-supervised visual pre-training can close the gap between linear-patch and CNN-based TSR encoders. | [💻 Code](https://github.com/poloclub/unitable) |
| 2024 | **[SEMv2: Table Separation Line Detection Based on Instance Segmentation](https://doi.org/10.1016/j.patcog.2024.110279)** | Pattern Recognition | `TI` `TSR` `DATA` | Detects separation lines as instances and introduces iFLYTAB for complex and deformed tables. | [💻 Code](https://github.com/ZZR8066/SEMv2) |
| 2024 | **[SEMv3: A Fast and Robust Approach to Table Separation Line Detection](https://arxiv.org/abs/2405.11862)** | IJCAI | `TI` `TSR` | Regresses offsets from keypoint proposals to recover separators in wireless and deformed tables. | [💻 Code](https://github.com/Chunchunwumu/SEMv3) |
| 2024 | **[SPRINT: Script-Agnostic Structure Recognition in Tables](https://link.springer.com/chapter/10.1007/978-3-031-70549-6_21)** | ICDAR | `TI` `TSR` | Separates structure cues from script-specific text to improve multilingual table parsing. | [💻 Code](https://github.com/IITB-LEAP-OCR/SPRINT) |
| 2024 | **[TableRocket: An Efficient and Effective Framework for Table Reconstruction](https://doi.org/10.1007/978-981-97-8511-7_25)** | PRCV | `TI` `TSR` `EXTRACT` | Provides an efficiency-oriented pipeline for reconstructing complete tables from cell-level predictions. | — |
| 2024 | **[TableStrRec: Framework for Table Structure Recognition in Data Sheet Images](https://doi.org/10.1007/s10032-023-00453-8)** | IJDAR | `DP` `TI` `TSR` `EXTRACT` | Targets irregular structures and heterogeneous layouts in technical data-sheet imagery. | — |
| 2024 | **[TabSniper: Towards Accurate Table Detection and Structure Recognition for Bank Statements](https://arxiv.org/abs/2412.12827)** | CODS-COMAD | `DP` `TI` `DETECT` `TSR` `EXTRACT` `DATA` | Targets long, varied transaction tables and introduces BankTabNet for bank-statement extraction. | — |
| 2024 | **[TC-OCR: TableCraft OCR for Efficient Detection and Recognition of Table Structure and Content](https://arxiv.org/abs/2404.10305)** | arXiv | `TI` `DP` `DETECT` `TSR` `OCR` | Combines table localization, structural parsing, and content recognition in an efficient pipeline. | — |
| 2024 | **[TFLOP: Table Structure Recognition Framework with Layout Pointer Mechanism](https://arxiv.org/abs/2501.11800)** | IJCAI | `TI` `TSR` | Uses layout-aware pointer prediction to recover table structure. | — |
| 2024 | **[UniTable: Towards a Unified Framework for Table Recognition via Self-Supervised Pretraining](https://arxiv.org/abs/2403.04822)** | arXiv | `TI` `TSR` `OCR` `EXTRACT` | Unifies structure, content, and cell-box extraction under a pixel-to-language-modeling objective. | [💻 Code](https://github.com/poloclub/unitable) |
| 2024 | **[UniTabNet: Bridging Vision and Language Models for Enhanced Table Structure Understanding](https://aclanthology.org/2024.findings-emnlp.355/)** | Findings of EMNLP | `TI` `TSR` `OCR` | Aligns visual and linguistic table representations for structure and content recognition. | — |
| 2023 | **[An End-to-End Local Attention Based Model for Table Recognition](https://doi.org/10.1007/978-3-031-41679-8_2)** | ICDAR | `TI` `TSR` `OCR` | Uses local attention for end-to-end table recognition and contributes the PubTabNet250 evaluation set. | — |
| 2023 | **[An End-to-End Multi-Task Learning Model for Image-Based Table Recognition](https://arxiv.org/abs/2303.08648)** | VISIGRAPP | `TI` `TSR` `OCR` | Jointly learns structure and content prediction for image-based table recognition. | — |
| 2023 | **[Divide Rows and Conquer Cells: Towards Structure Recognition for Large Tables](https://www.ijcai.org/proceedings/2023/152)** | IJCAI | `TI` `TSR` | Decomposes large tables row-wise before cell reconstruction to handle dense and oversized structures. | — |
| 2023 | **[Formerge: Recover Spanning Cells in Complex Table Structure Using Transformer Network](https://doi.org/10.1007/978-3-031-41734-4_32)** | ICDAR | `TI` `TSR` | Focuses on recovering row- and column-spanning cells after initial grid prediction. | — |
| 2023 | **[GrabTab: Grab What You Need at Once for Table Recognition](https://arxiv.org/abs/2303.09174)** | IJCAI | `TI` `TSR` | Models table components and their relations jointly to avoid multi-stage error propagation. | — |
| 2023 | **[GridFormer: Towards Accurate Table Structure Recognition via Grid Prediction](https://arxiv.org/abs/2309.14962)** | ACM Multimedia | `TI` `TSR` | Predicts row-column grids and spanning-cell relationships for table reconstruction. | — |
| 2023 | **[High-Performance Transformers for Table Structure Recognition Need Better Relative Positional Encodings](https://arxiv.org/abs/2311.05565)** | arXiv | `TI` `TSR` | Shows that table-aware relative positions materially improve transformer-based structure recognition. | — |
| 2023 | **[Improving Table Structure Recognition with Visual-Alignment Sequential Coordinate Modeling](https://openaccess.thecvf.com/content/CVPR2023/html/Lyu_Improving_Table_Structure_Recognition_With_Visual-Alignment_Sequential_Coordinate_Modeling_CVPR_2023_paper.html)** | CVPR | `TI` `TSR` | Generates markup and aligned cell coordinates to couple sequence decoding with visual location. | — |
| 2023 | **[LORE: Logical Location Regression Network for Table Structure Recognition](https://arxiv.org/abs/2303.03730)** | AAAI | `TI` `TSR` | Regresses logical row and column coordinates and refines them with neighboring-cell constraints. | — |
| 2023 | **[Optimized Table Tokenization for Table Structure Recognition](https://arxiv.org/abs/2305.03393)** | ICDAR | `TI` `TSR` | Introduces OTSL, a compact token language designed to simplify valid structure generation. | — |
| 2023 | **[PyramidTabNet: Transformer-Based Table Recognition in Image-Based Documents](https://doi.org/10.1007/978-3-031-41734-4_26)** | ICDAR | `DP` `TI` `TSR` `EXTRACT` `DATA` | Uses a convolution-free pyramid vision transformer plus generative augmentation for document tables. | [💻 Code](https://github.com/muhd-umer/pyramidtabnet) |
| 2023 | **[Rethinking Detection Based Table Structure Recognition for Visually Rich Document Images](https://arxiv.org/abs/2312.00699)** | arXiv | `DP` `TI` `TSR` | Revisits detection labels and post-processing for visually rich, irregular document tables. | — |
| 2023 | **[Rethinking Image-Based Table Recognition Using Weakly Supervised Methods](https://arxiv.org/abs/2303.07641)** | ICPRAM | `TI` `TSR` `OCR` | Reduces dependence on fully annotated table images through weak supervision. | — |
| 2023 | **[Robust Table Structure Recognition with Dynamic Queries Enhanced Detection Transformer](https://arxiv.org/abs/2303.11615)** | Pattern Recognition | `TI` `TSR` | Introduces dynamically initialized and enhanced queries for detection-based structure recognition. | — |
| 2023 | **[Scene Table Structure Recognition with Segmentation and Key Point Collaboration](https://doi.org/10.1007/978-3-031-41679-8_17)** | ICDAR | `TI` `TSR` `DATA` | Fuses cell segmentation and key points for geometrically distorted scene tables and online data generation. | — |
| 2023 | **[Scene Table Structure Recognition with Segmentation Collaboration and Alignment](https://doi.org/10.1016/j.patrec.2022.12.014)** | Pattern Recognition Letters | `TI` `TSR` | Collaborates and aligns segmentation branches to recover structures from scene-captured tables. | — |
| 2023 | **[Tables to LaTeX: Structure and Content Extraction from Scientific Tables](https://arxiv.org/abs/2210.17246)** | IJDAR | `TI` `TSR` `OCR` `EXTRACT` | Extracts both structure and cell content from scientific table images into LaTeX. | — |
| 2023 | **[TableVLM: Multi-modal Pre-training for Table Structure Recognition](https://aclanthology.org/2023.acl-long.137/)** | ACL | `TI` `TT` `TSR` | Pretrains on aligned visual and textual signals and introduces the million-scale ComplexTable resource. | — |
| 2023 | **[TRACE: Table Reconstruction Aligned to Corner and Edges](https://arxiv.org/abs/2305.00630)** | ICDAR | `TI` `TSR` `EXTRACT` | Aligns predicted table corners and edges to reconstruct cells and spanning structures. | — |
| 2022 | **[A Structure-Focused Deep Learning Approach for Table Recognition from Document Images](https://doi.org/10.1109/COMPSAC54236.2022.00041)** | COMPSAC | `DP` `TI` `TSR` `EXTRACT` | Prioritizes structural reconstruction when extracting tables from heterogeneous document imagery. | — |
| 2022 | **[Complex Table Structure Recognition in the Wild Using Transformer and Identity Matrix-Based Augmentation](https://doi.org/10.1007/978-3-031-21648-0_37)** | ICFHR | `TI` `TSR` `DATA` | Targets camera-based tables and introduces identity-matrix-aware TabSplitter augmentation. | — |
| 2022 | **[GTRNet: A Graph-Based Table Reconstructed Network](https://doi.org/10.1109/ICTAI56018.2022.00079)** | ICTAI | `DP` `TI` `TSR` `EXTRACT` | Groups detected textual components through a graph network to reconstruct table topology. | — |
| 2022 | **[Neural Collaborative Graph Machines for Table Structure Recognition](https://openaccess.thecvf.com/content/CVPR2022/html/Liu_Neural_Collaborative_Graph_Machines_for_Table_Structure_Recognition_CVPR_2022_paper.html)** | CVPR | `TI` `TSR` | Models cell relations with collaborative graph reasoning for complex structures. | — |
| 2022 | **[Split, Embed and Merge: An Accurate Table Structure Recognizer](https://arxiv.org/abs/2107.05214)** | Pattern Recognition | `TI` `TT` `TSR` `OCR` | Introduces the split-embed-merge paradigm and fuses visual and semantic features at the grid level. | [💻 Code](https://github.com/ZZR8066/SEM) |
| 2022 | **[Table Structure Recognition and Form Parsing by End-to-End Object Detection and Relation Parsing](https://doi.org/10.1016/j.patcog.2022.108946)** | Pattern Recognition | `DP` `TI` `TSR` `EXTRACT` | Jointly optimizes region detection and graph relation parsing for tables and template-free forms. | — |
| 2022 | **[Table Structure Recognition with Conditional Attention](https://arxiv.org/abs/2203.03819)** | arXiv | `TI` `TSR` | Conditions sequence decoding on visual structure cues for image-to-markup recognition. | — |
| 2022 | **[TableFormer: Table Structure Understanding with Transformers](https://openaccess.thecvf.com/content/CVPR2022/html/Nassar_TableFormer_Table_Structure_Understanding_With_Transformers_CVPR_2022_paper.html)** | CVPR | `TI` `TT` `TSR` | Generates table structure and regresses cell boxes while leveraging PDF text tokens when available. | — |
| 2022 | **[TRUST: An Accurate and End-to-End Table Structure Recognizer Using Splitting-Based Transformers](https://arxiv.org/abs/2208.14687)** | arXiv | `TI` `TSR` | Uses learned row and column splitting followed by span reconstruction. | — |
| 2022 | **[TSRFormer: Table Structure Recognition with Transformers](https://arxiv.org/abs/2208.04921)** | ACM Multimedia | `TI` `TSR` | Detects table separators with transformers and merges grid cells into spanning structures. | — |
| 2022 | **[Visual Understanding of Complex Table Structures from Document Images](https://openaccess.thecvf.com/content/WACV2022/html/Raja_Visual_Understanding_of_Complex_Table_Structures_From_Document_Images_WACV_2022_paper.html)** | WACV | `DP` `TI` `DETECT` `TSR` `DATA` | Introduces TOD-Net and the TUCD benchmark for complex bordered and borderless tables. | — |

<p align="right"><a href="#readme-top">⬆️ Back to top</a></p>

<a id="analysis-evaluation"></a>
## 📏 Analysis, evaluation, metrics, and surveys

> Controlled comparisons, robustness studies, metrics, uncertainty, reproducibility, and field surveys. **13 papers.**

| Year | Paper | Venue | Input / task tags | Why it matters | Resources |
|---:|---|---|---|---|---|
| 2026 | **[Understanding and Bridging the Modality Gap When Text Is Rendered as Images](https://arxiv.org/abs/2603.09095)** | arXiv | `TI` `DP` `SR` `TT` `EVAL` `REASON` | Diagnoses why models underperform when equivalent textual content is supplied through pixels, including table benchmarks. | — |
| 2026 | **[Zero-Shot Table Extraction in Business Documents: A Unified Benchmark with Realistic Evaluation](https://openaccess.thecvf.com/content/WACV2026/html/Thomas_Zero-Shot_Table_Extraction_in_Business_Documents_A_Unified_Benchmark_with_WACV_2026_paper.html)** | WACV | `DP` `TI` `TSR` `EXTRACT` `EVAL` | Evaluates table detection and structure recognition under a unified zero-shot business-document protocol. | — |
| 2025 | **[Benchmarking Table Extraction: Multimodal LLMs vs Traditional OCR](https://aclanthology.org/2025.xllm-1.2/)** | XLLM Workshop | `TI` `TSR` `OCR` `EXTRACT` `EVAL` | Compares multimodal LLM extraction with Table Transformer plus OCR under structure- and content-aware metrics. | — |
| 2025 | **[Table Understanding and (Multimodal) LLMs: A Cross-Domain Case Study on Scientific vs. Non-Scientific Data](https://aclanthology.org/2025.trl-1.10/)** | TRL Workshop | `TI` `TT` `QA` `EVAL` `DATA` | Introduces a 3,017-table TableEval suite with image, dictionary, HTML, XML, and LaTeX views. | — |
| 2025 | **[Texts or Images? A Fine-Grained Analysis of Multimodal Table Understanding](https://aclanthology.org/2025.findings-acl.117/)** | Findings of ACL | `TI` `TT` `QA` `REASON` `EVAL` | Breaks down when visual or textual table formats help across table properties and reasoning types. | — |
| 2024 | **[A Review on Table Recognition Based on Deep Learning](https://arxiv.org/abs/2312.04808)** | arXiv | `DP` `TI` `DETECT` `TSR` `OCR` `SURVEY` | Reviews end-to-end and modular approaches across table detection, structure, and content recognition. | — |
| 2024 | **[Deep Learning for Table Detection and Structure Recognition: A Survey](https://arxiv.org/abs/2211.08469)** | ACM Computing Surveys | `DP` `TI` `DETECT` `TSR` `SURVEY` | Surveys datasets, architectures, and evaluation practices for table detection and structure recognition. | [💻 Code](https://github.com/abdoelsayed2016/Table-Detection-Structure-Recognition) |
| 2024 | **[Tables as Texts or Images: Evaluating Table Reasoning Ability of LLMs and MLLMs](https://aclanthology.org/2024.findings-acl.23/)** | Findings of ACL | `TI` `TT` `QA` `REASON` `EVAL` | Directly compares equivalent tables supplied as serialized text and rendered images. | — |
| 2024 | **[Uncertainty Quantification in Table Structure Recognition](https://doi.org/10.1109/IRI62200.2024.00014)** | IRI | `TI` `TSR` `EVAL` | Studies predictive uncertainty so recognition systems can surface unreliable table structures. | — |
| 2023 | **[A Study on Reproducibility and Replicability of Table Structure Recognition Methods](https://arxiv.org/abs/2304.10439)** | ICDAR | `TI` `TSR` `EVAL` `DATA` | Reimplements leading methods under controlled settings and releases GenTSR to test generalization. | — |
| 2023 | **[Aligning Benchmark Datasets for Table Structure Recognition](https://arxiv.org/abs/2303.00716)** | ICDAR | `TI` `TSR` `EVAL` `DATA` | Canonicalizes inconsistent annotations across major TSR datasets and measures the effect data alignment has on performance. | [💻 Code](https://github.com/microsoft/table-transformer) |
| 2023 | **[GriTS: Grid Table Similarity Metric for Table Structure Recognition](https://arxiv.org/abs/2203.12555)** | ICDAR | `TI` `TT` `TSR` `EVAL` | Defines factored grid-based metrics for topology, location, and content similarity. | — |
| 2022 | **[Evaluating Table Structure Recognition: A New Perspective](https://arxiv.org/abs/2205.09801)** | DAS | `TI` `TT` `TSR` `EVAL` | Analyzes weaknesses of existing evaluation and proposes geometry-aware TEDS-IOU. | — |

<p align="right"><a href="#readme-top">⬆️ Back to top</a></p>

<a id="adjacent"></a>
## 🧩 Adjacent multimodal and document-table work

> Closely related document, screenshot, retrieval, and cross-modal research with substantive table relevance. **17 papers.**

| Year | Paper | Venue | Input / task tags | Why it matters | Resources |
|---:|---|---|---|---|---|
| 2025 | **[OmniParser V2: Structured-Points-of-Thought for Unified Visual Text Parsing and Its Generality to Multimodal Large Language Models](https://arxiv.org/abs/2502.16161)** | arXiv | `DP` `TI` `OCR` `TSR` `EXTRACT` | Uses structured points-of-thought to unify visual text parsing and transfer document structure skills to MLLMs. | — |
| 2025 | **[Structure- and Semantic-Based Rationale Distillation: Table and Chart Question Answering in Scientific Documents](https://doi.org/10.1145/3769002.3769953)** | RACS | `DP` `TI` `QA` `REASON` | Distills structural and semantic rationales into a compact model for scientific table and chart QA. | — |
| 2025 | **[Table-R1: Region-based Reinforcement Learning for Table Understanding](https://arxiv.org/abs/2505.12415)** | arXiv | `TT` `QA` `REASON` `RL` | Injects relevant table regions into reasoning and optimizes region and answer rewards; input tables are serialized rather than visual. | — |
| 2025 | **[TASER: Table Agents for Schema-guided Extraction and Retrieval](https://arxiv.org/abs/2508.13404)** | arXiv | `DP` `TT` `EXTRACT` `RETRIEVE` | Uses agents to extract fragmented document tables into a target schema and retrieve evidence. | — |
| 2025 | **[Visual Editing as a Chain of Thought for Structured Image Understanding](https://arxiv.org/abs/2505.19455)** | ICML | `TI` `SS` `QA` `REASON` | REFOCUS iteratively edits structured images to expose relevant evidence, including tables and charts. | — |
| 2025 | **[WikiMixQA: A Multimodal Benchmark for Question Answering over Tables and Charts](https://aclanthology.org/2025.findings-acl.1280/)** | Findings of ACL | `DP` `IM` `QA` `REASON` `DATA` | Requires multi-hop reasoning over tables and charts distributed across long Wikipedia pages. | — |
| 2024 | **[Extracting Information from Scientific Literature via Visual Table Question Answering Models](https://doi.org/10.1145/3649601.3698752)** | RACS | `DP` `TI` `QA` `OCR` `TSR` `EXTRACT` | Compares OCR, visual QA, and structure-preserving pipelines for extracting evidence from scientific tables. | — |
| 2024 | **[Leopard: A Vision Language Model for Text-Rich Multi-Image Tasks](https://arxiv.org/abs/2410.01744)** | arXiv | `DP` `TI` `IM` `QA` `REASON` | Handles multiple high-resolution text-rich images, with dedicated multi-table and multi-chart evaluation. | — |
| 2024 | **[mPLUG-DocOwl 1.5: Unified Structure Learning for OCR-free Document Understanding](https://aclanthology.org/2024.findings-emnlp.175/)** | Findings of EMNLP | `DP` `TI` `QA` `OCR` `TSR` | A general document VLM with structure-aware pretraining and substantive table recognition and QA evaluation. | — |
| 2024 | **[Multimodal ArXiv: A Dataset for Improving Scientific Comprehension of Large Vision-Language Models](https://aclanthology.org/2024.acl-long.775/)** | ACL | `DP` `IM` `QA` `CAPTION` `DATA` | Pairs scientific text with figures, tables, and equations for broad document comprehension. | — |
| 2024 | **[Tabular Insights, Visual Impacts: Transferring Expertise from Tables to Images](https://proceedings.mlr.press/v235/jiang24h.html)** | ICML | `TT` `TRANSFER` | Transfers representations learned from tabular features to ordinary image tasks; related multimodal tabular learning, not visual-table reading. | — |
| 2023 | **[ICDAR 2023 Competition on Visual Question Answering on Business Document Images](https://arxiv.org/abs/2303.14935)** | ICDAR | `DP` `QA` `EVAL` `DATA` | A document-image QA benchmark whose pages frequently require reading tables, forms, and receipts. | — |
| 2023 | **[Pix2Struct: Screenshot Parsing as Pretraining for Visual Language Understanding](https://proceedings.mlr.press/v202/lee23g.html)** | ICML | `SS` `TI` `QA` `CAPTION` `EXTRACT` | Pretrains on screenshot-to-HTML parsing and transfers to visually situated language tasks that include tables. | — |
| 2023 | **[UniMMQA: Unifying Multi-Modal Question Answering with Structured Knowledge](https://aclanthology.org/2023.findings-emnlp.626/)** | Findings of EMNLP | `IM` `TT` `QA` `REASON` | Unifies QA over text, tables, and ordinary images represented as heterogeneous knowledge sources. | — |
| 2022 | **[MMCoQA: Conversational Question Answering over Text, Tables, and Images](https://aclanthology.org/2022.acl-long.290/)** | ACL | `IM` `TT` `QA` `RETRIEVE` | Retrieves and answers conversational questions from heterogeneous text, serialized tables, and ordinary images. | — |
| 2022 | **[OCR-Free Document Understanding Transformer](https://www.ecva.net/papers/eccv_2022/papers_ECCV/html/764_ECCV_2022_paper.php)** | ECCV | `DP` `OCR` `EXTRACT` `QA` | A foundational OCR-free document model used by later visual table recognition and document QA systems. | [💻 Code](https://github.com/clovaai/donut) |
| 2022 | **[PP-StructureV2: A Stronger Document Analysis System](https://arxiv.org/abs/2210.05391)** | arXiv | `DP` `TI` `OCR` `TSR` `EXTRACT` | An end-to-end document analysis system whose SLANet component is widely used for table structure recognition. | [💻 Code](https://github.com/PaddlePaddle/PaddleOCR) |

<p align="right"><a href="#readme-top">⬆️ Back to top</a></p>

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
