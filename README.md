<a id="readme-top"></a>

<div align="center">
  <img src="assets/logo.svg" width="116" alt="Awesome Multimodal Table Understanding logo" />
  <h1>Awesome Multimodal Table Understanding</h1>
  <p><strong>A curated research map for understanding tables as visual and multimodal objects.</strong></p>
  <p>Table perception · structure recognition · multimodal reasoning · complex tables · synthetic training data</p>
  <p>
    <a href="https://awesome.re"><img src="https://awesome.re/badge-flat2.svg" alt="Awesome" /></a>
    <img src="https://img.shields.io/badge/papers-175-2F81F7?style=flat-square" alt="175 papers" />
    <img src="https://img.shields.io/badge/code-40-12B886?style=flat-square" alt="40 code links" />
    <img src="https://img.shields.io/badge/data-8-D6336C?style=flat-square" alt="8 data links" />
    <img src="https://img.shields.io/badge/generators-18-E8590C?style=flat-square" alt="18 generation projects" />
    <img src="https://img.shields.io/badge/coverage-2022%E2%80%932026-F59F00?style=flat-square" alt="Coverage 2022 to 2026" />
    <a href="https://github.com/lyc61c/Awesome-Multimodal-Table-Understanding/actions/workflows/validate.yml"><img src="https://github.com/lyc61c/Awesome-Multimodal-Table-Understanding/actions/workflows/validate.yml/badge.svg" alt="Validate" /></a>
  </p>
  <p><a href="#papers">📚 Papers</a> · <a href="#related-work">🔗 Related Work</a></p>
</div>

> **Updated 2026-08-13.** 175 papers · 18 practical generation projects.

<a id="papers"></a>
## 📚 Papers

- [🔎 1. Visual Table Perception & Recognition](#visual-table-perception-recognition)
  - [Table Detection](#table-detection)
  - [Table Structure Recognition](#table-structure-recognition)
  - [Cell & Content Recognition](#cell-content-recognition)
  - [End-to-End Reconstruction / Image-to-Markup](#end-to-end-reconstruction)
- [🧠 2. Multimodal Table Understanding & Reasoning](#multimodal-table-understanding-reasoning)
  - [Table Question Answering](#table-question-answering)
  - [Numerical & Symbolic Reasoning](#numerical-symbolic-reasoning)
  - [Hybrid Visual–Textual Reasoning](#hybrid-visual-textual-reasoning)
  - [Retrieval & RAG](#retrieval-rag)
  - [Grounding & Attribution](#grounding-attribution)
  - [Image / Graphic Cells](#image-graphic-cells)
- [🏭 3. Multimodal Table Data Generation](#multimodal-table-data-generation)
  - [Structured Content Generation](#structured-content-generation)
  - [Schema & Layout Generation](#schema-layout-generation)
  - [Markup-to-Image Rendering](#markup-to-image-rendering)
  - [Direct Image Generation](#direct-image-generation)
  - [QA / Instruction Generation](#qa-instruction-generation)
  - [Augmentation & Validation](#augmentation-validation)
- [🧪 4. Benchmarks & Datasets](#benchmarks-datasets)
  - [Recognition](#benchmark-recognition)
  - [Understanding & Reasoning](#benchmark-understanding-reasoning)
  - [Real-world / Robustness](#benchmark-real-world-robustness)
  - [Multimodal Tables](#benchmark-multimodal-tables)
- [📏 5. Evaluation & Analysis](#evaluation-analysis)
  - [Metrics](#metrics)
  - [Evaluation Protocols](#evaluation-protocols)
  - [Representation Analysis](#representation-analysis)
  - [Robustness / Generalization](#robustness-generalization)
- [📖 6. Surveys](#surveys)
  - [Surveys](#survey)
- [🔗 Related Work](#related-work)

<a id="visual-table-perception-recognition"></a>
## 🔎 1. Visual Table Perception & Recognition

> Methods that locate tables, recover topology, recognize cell content, or reconstruct structured markup from pixels. **72 papers.**

<a id="table-detection"></a>
### Table Detection

| Year | Paper | Venue | Why it matters | Resources |
|---:|---|---|---|---|
| 2025 | **[RAPTOR: Refined Approach for Product Table Object Recognition](https://openaccess.thecvf.com/content/WACV2025W/VISIONDOCS/html/Thomas_RAPTOR_Refined_Approach_for_Product_Table_Object_Recognition_WACVW_2025_paper.html)** | WACV Workshops | Detects and organizes visual objects inside product comparison tables. | — |
| 2024 | **[TabSniper: Towards Accurate Table Detection and Structure Recognition for Bank Statements](https://arxiv.org/abs/2412.12827)** | CODS-COMAD | Targets long, varied transaction tables and introduces BankTabNet for bank-statement extraction. | — |
| 2024 | **[TC-OCR: TableCraft OCR for Efficient Detection and Recognition of Table Structure and Content](https://arxiv.org/abs/2404.10305)** | arXiv | Combines table localization, structural parsing, and content recognition in an efficient pipeline. | — |
| 2022 | **[Visual Understanding of Complex Table Structures from Document Images](https://openaccess.thecvf.com/content/WACV2022/html/Raja_Visual_Understanding_of_Complex_Table_Structures_From_Document_Images_WACV_2022_paper.html)** | WACV | Introduces TOD-Net and the TUCD benchmark for complex bordered and borderless tables. | — |

<a id="table-structure-recognition"></a>
### Table Structure Recognition

| Year | Paper | Venue | Why it matters | Resources |
|---:|---|---|---|---|
| 2026 | **[InstructTable: Improving Table Structure Recognition Through Instructions](https://arxiv.org/abs/2604.02880)** | arXiv | Uses instruction pretraining and introduces BCDSTab for balanced complex synthetic table evaluation. | — |
| 2026 | **[TRivia: Self-supervised Fine-tuning of Vision-Language Models for Table Recognition](https://openaccess.thecvf.com/content/CVPR2026/html/Zhang_TRivia_Self-supervised_Fine-tuning_of_Vision-Language_Models_for_Table_Recognition_CVPR_2026_paper.html)** | CVPR | Learns from unlabeled table images through consistency sampling and a verifiable QA proxy task. | [💻 Code](https://github.com/opendatalab/TRivia) |
| 2025 | **[A One-Stage Network for Table Structure Recognition](https://arxiv.org/abs/2504.17522)** | arXiv | Predicts table structure in a single-stage architecture designed to simplify the recognition pipeline. | — |
| 2025 | **[Enhanced Table Structure Recognition with Multi-Modal Approach](https://aclanthology.org/2025.wasp-main.23/)** | WASP | Fuses visual and textual streams with separate structure and cell-box decoders. | — |
| 2025 | **[Enhancing Table Recognition with Vision LLMs: Benchmark and Neighbor-Guided Toolchain Reasoner](https://arxiv.org/abs/2412.20662)** | IJCAI | Benchmarks vision LLM recognition and uses neighboring cells plus tools to repair structural predictions. | [💻 Code](https://github.com/lqzxt/NGTR) |
| 2025 | **[From Pixels to Tables: Reconstructing Complex Tables from Document Images](https://doi.org/10.1007/s10032-025-00553-7)** | IJDAR | Reconstructs complex tabular topology from document pixels with a structure-aware recognition pipeline. | — |
| 2025 | **[LORE++: Logical Location Regression Network for Table Structure Recognition with Pre-training](https://doi.org/10.1016/j.patcog.2024.110816)** | Pattern Recognition | Extends logical-location regression with table-focused pre-training for stronger structural generalization. | — |
| 2025 | **[SepFormer: Coarse-to-Fine Separator Regression for Table Structure Recognition](https://arxiv.org/abs/2506.21920)** | arXiv | Regresses table separators in coarse-to-fine stages for robust structure recovery. | — |
| 2025 | **[SLANet-1M: A Lightweight and Efficient Model for Table Recognition with Minimal Computational Cost](https://aclanthology.org/2025.swisstext-1.9/)** | SwissText | A roughly one-million-parameter table recognizer designed for fast, CPU-friendly inference. | — |
| 2025 | **[TableStructureFormer: An Improved Masked-Attention Mask Transformer Model with Long-Distance Feature Aggregation and Deep Detail Supervision for Table Structure Recognition](https://doi.org/10.1007/s40747-025-01975-w)** | Complex & Intelligent Systems | Combines masked attention, long-range aggregation, and detail supervision for row-column segmentation. | — |
| 2025 | **[TABLET: Table Structure Recognition Using Encoder-only Transformers](https://arxiv.org/abs/2506.07015)** | ICDAR | Formulates structure recognition with an encoder-only transformer rather than an autoregressive decoder. | — |
| 2025 | **[Treading Towards Privacy-Preserving Table Structure Recognition](https://openaccess.thecvf.com/content/WACV2025/html/Raja_Treading_Towards_Privacy-Preserving_Table_Structure_Recognition_WACV_2025_paper.html)** | WACV | Studies structure recovery when sensitive table content must be protected. | — |
| 2025 | **[TRH2TQA: Table Recognition with Hierarchical Relationships to Table Question-Answering on Business Documents](https://openaccess.thecvf.com/content/WACV2025/html/Jirachanchaisiri_TRH2TQA_Table_Recognition_with_Hierarchical_Relationships_to_Table_Question-Answering_on_WACV_2025_paper.html)** | WACV | Connects hierarchical table recognition directly to business-document QA. | — |
| 2024 | **[ClusterTabNet: Supervised Clustering Method for Table Detection and Table Structure Recognition](https://arxiv.org/abs/2402.07502)** | ICDAR | Casts table and cell grouping as supervised clustering for joint detection and structure recovery. | — |
| 2024 | **[DTSM: Toward Dense Table Structure Recognition with Text Query Encoder and Adjacent Feature Aggregator](https://doi.org/10.1007/978-3-031-70533-5_25)** | ICDAR | Uses text-conditioned queries and adjacent-cell aggregation for dense table layouts. | — |
| 2024 | **[End to End Table Transformer](https://doi.org/10.1007/978-3-031-70533-5_20)** | ICDAR | Adapts DETR queries and training for single-model table extraction from document images. | — |
| 2024 | **[Enhancing Transformer-Based Table Structure Recognition for Long Tables](https://doi.org/10.1007/978-981-97-8511-7_16)** | PRCV | Adapts Transformer recognition to extreme aspect ratios and long table sequences. | — |
| 2024 | **[LRATNet: Local-Relationship-Aware Transformer Network for Table Structure Recognition](https://doi.org/10.1007/978-3-031-53308-2_37)** | MMM | Connects local row, column, and spatial relationships with global Transformer features. | — |
| 2024 | **[Multi-Modal Attention Based on 2D Structured Sequence for Table Recognition](https://doi.org/10.1007/978-981-97-8511-7_27)** | PRCV | Jointly models structure-language sequences and cell boxes with a table-specific 2D attention layer. | — |
| 2024 | **[RTSR: A Real-Time Table Structure Recognition Approach](https://doi.org/10.3233/FAIA240549)** | ECAI | Targets low-latency structure recognition while retaining accuracy on complex table layouts. | — |
| 2024 | **[Self-Supervised Pre-Training for Table Structure Recognition Transformer](https://arxiv.org/abs/2402.15578)** | AAAI SDU Workshop | Shows self-supervised visual pre-training can close the gap between linear-patch and CNN-based TSR encoders. | [💻 Code](https://github.com/poloclub/unitable) |
| 2024 | **[SEMv2: Table Separation Line Detection Based on Instance Segmentation](https://doi.org/10.1016/j.patcog.2024.110279)** | Pattern Recognition | Detects separation lines as instances and introduces iFLYTAB for complex and deformed tables. | [💻 Code](https://github.com/ZZR8066/SEMv2) |
| 2024 | **[SEMv3: A Fast and Robust Approach to Table Separation Line Detection](https://arxiv.org/abs/2405.11862)** | IJCAI | Regresses offsets from keypoint proposals to recover separators in wireless and deformed tables. | [💻 Code](https://github.com/Chunchunwumu/SEMv3) |
| 2024 | **[SPRINT: Script-Agnostic Structure Recognition in Tables](https://link.springer.com/chapter/10.1007/978-3-031-70549-6_21)** | ICDAR | Separates structure cues from script-specific text to improve multilingual table parsing. | [💻 Code](https://github.com/IITB-LEAP-OCR/SPRINT) |
| 2024 | **[TableStrRec: Framework for Table Structure Recognition in Data Sheet Images](https://doi.org/10.1007/s10032-023-00453-8)** | IJDAR | Targets irregular structures and heterogeneous layouts in technical data-sheet imagery. | — |
| 2024 | **[TFLOP: Table Structure Recognition Framework with Layout Pointer Mechanism](https://arxiv.org/abs/2501.11800)** | IJCAI | Uses layout-aware pointer prediction to recover table structure. | — |
| 2023 | **[Formerge: Recover Spanning Cells in Complex Table Structure Using Transformer Network](https://doi.org/10.1007/978-3-031-41734-4_32)** | ICDAR | Focuses on recovering row- and column-spanning cells after initial grid prediction. | — |
| 2023 | **[GrabTab: Grab What You Need at Once for Table Recognition](https://arxiv.org/abs/2303.09174)** | IJCAI | Models table components and their relations jointly to avoid multi-stage error propagation. | — |
| 2023 | **[High-Performance Transformers for Table Structure Recognition Need Better Relative Positional Encodings](https://arxiv.org/abs/2311.05565)** | arXiv | Shows that table-aware relative positions materially improve transformer-based structure recognition. | — |
| 2023 | **[Improving Table Structure Recognition with Visual-Alignment Sequential Coordinate Modeling](https://openaccess.thecvf.com/content/CVPR2023/html/Lyu_Improving_Table_Structure_Recognition_With_Visual-Alignment_Sequential_Coordinate_Modeling_CVPR_2023_paper.html)** | CVPR | Generates markup and aligned cell coordinates to couple sequence decoding with visual location. | — |
| 2023 | **[LORE: Logical Location Regression Network for Table Structure Recognition](https://arxiv.org/abs/2303.03730)** | AAAI | Regresses logical row and column coordinates and refines them with neighboring-cell constraints. | — |
| 2023 | **[Optimized Table Tokenization for Table Structure Recognition](https://arxiv.org/abs/2305.03393)** | ICDAR | Introduces OTSL, a compact token language designed to simplify valid structure generation. | — |
| 2023 | **[PyramidTabNet: Transformer-Based Table Recognition in Image-Based Documents](https://doi.org/10.1007/978-3-031-41734-4_26)** | ICDAR | Uses a convolution-free pyramid vision transformer plus generative augmentation for document tables. | [💻 Code](https://github.com/muhd-umer/pyramidtabnet) |
| 2023 | **[Rethinking Detection Based Table Structure Recognition for Visually Rich Document Images](https://arxiv.org/abs/2312.00699)** | arXiv | Revisits detection labels and post-processing for visually rich, irregular document tables. | — |
| 2023 | **[Rethinking Image-Based Table Recognition Using Weakly Supervised Methods](https://arxiv.org/abs/2303.07641)** | ICPRAM | Reduces dependence on fully annotated table images through weak supervision. | — |
| 2023 | **[Robust Table Structure Recognition with Dynamic Queries Enhanced Detection Transformer](https://arxiv.org/abs/2303.11615)** | Pattern Recognition | Introduces dynamically initialized and enhanced queries for detection-based structure recognition. | — |
| 2023 | **[Scene Table Structure Recognition with Segmentation and Key Point Collaboration](https://doi.org/10.1007/978-3-031-41679-8_17)** | ICDAR | Fuses cell segmentation and key points for geometrically distorted scene tables and online data generation. | — |
| 2023 | **[Scene Table Structure Recognition with Segmentation Collaboration and Alignment](https://doi.org/10.1016/j.patrec.2022.12.014)** | Pattern Recognition Letters | Collaborates and aligns segmentation branches to recover structures from scene-captured tables. | — |
| 2023 | **[TableVLM: Multi-modal Pre-training for Table Structure Recognition](https://aclanthology.org/2023.acl-long.137/)** | ACL | Pretrains on aligned visual and textual signals and introduces the million-scale ComplexTable resource. | — |
| 2022 | **[Complex Table Structure Recognition in the Wild Using Transformer and Identity Matrix-Based Augmentation](https://doi.org/10.1007/978-3-031-21648-0_37)** | ICFHR | Targets camera-based tables and introduces identity-matrix-aware TabSplitter augmentation. | — |
| 2022 | **[Neural Collaborative Graph Machines for Table Structure Recognition](https://openaccess.thecvf.com/content/CVPR2022/html/Liu_Neural_Collaborative_Graph_Machines_for_Table_Structure_Recognition_CVPR_2022_paper.html)** | CVPR | Models cell relations with collaborative graph reasoning for complex structures. | — |
| 2022 | **[Split, Embed and Merge: An Accurate Table Structure Recognizer](https://arxiv.org/abs/2107.05214)** | Pattern Recognition | Introduces the split-embed-merge paradigm and fuses visual and semantic features at the grid level. | [💻 Code](https://github.com/ZZR8066/SEM) |
| 2022 | **[TableFormer: Table Structure Understanding with Transformers](https://openaccess.thecvf.com/content/CVPR2022/html/Nassar_TableFormer_Table_Structure_Understanding_With_Transformers_CVPR_2022_paper.html)** | CVPR | Generates table structure and regresses cell boxes while leveraging PDF text tokens when available. | — |
| 2022 | **[TSRFormer: Table Structure Recognition with Transformers](https://arxiv.org/abs/2208.04921)** | ACM Multimedia | Detects table separators with transformers and merges grid cells into spanning structures. | — |

<a id="cell-content-recognition"></a>
### Cell & Content Recognition

| Year | Paper | Venue | Why it matters | Resources |
|---:|---|---|---|---|
| 2024 | **[Multi-Cell Decoder and Mutual Learning for Table Structure and Character Recognition](https://arxiv.org/abs/2404.13268)** | ICDAR | MuTabNet couples multi-cell structural decoding with character recognition through mutual learning. | — |
| 2024 | **[UniTabNet: Bridging Vision and Language Models for Enhanced Table Structure Understanding](https://aclanthology.org/2024.findings-emnlp.355/)** | Findings of EMNLP | Aligns visual and linguistic table representations for structure and content recognition. | — |

<a id="end-to-end-reconstruction"></a>
### End-to-End Reconstruction / Image-to-Markup

| Year | Paper | Venue | Why it matters | Resources |
|---:|---|---|---|---|
| 2026 | **[CSPO: Alleviating Reward Ambiguity for Structured Table-to-LaTeX Generation](https://arxiv.org/abs/2604.10918)** | ACL | Optimizes table-to-LaTeX generation with structure-sensitive policy rewards. | — |
| 2026 | **[Tables Decoded: DELTA for Structure, TARQA for Understanding](https://openaccess.thecvf.com/content/WACV2026/html/Rajput_Tables_Decoded_DELTA_for_Structure_TARQA_for_Understanding_WACV_2026_paper.html)** | WACV | Pairs a modular table extractor using OTSL with a downstream table QA system. | — |
| 2026 | **[TableSeq: Unified Generation of Structure, Content, and Layout](https://arxiv.org/abs/2604.16070)** | arXiv | Generates structure, cell content, and layout within a unified sequence formulation. | [💻 Code](https://github.com/hamdilaziz/TableSeq) |
| 2026 | **[TDATR: Improving End-to-End Table Recognition via Table Detail-Aware Learning and Curriculum Learning](https://openaccess.thecvf.com/content/CVPR2026/html/Qin_TDATR_Improving_End-to-End_Table_Recognition_via_Table_Detail-Aware_Learning_and_CVPR_2026_paper.html)** | CVPR | Targets fine-grained table details and staged learning for end-to-end structure and content recovery. | — |
| 2025 | **[DREAM: Document Reconstruction via End-to-end Autoregressive Model](https://arxiv.org/abs/2507.05805)** | ACM Multimedia | Autoregressively reconstructs document structure and content, including complex tables, in one parsing model. | — |
| 2025 | **[Table2LaTeX-RL: High-Fidelity LaTeX Code Generation from Table Images via Reinforced Multimodal Language Models](https://arxiv.org/abs/2509.17589)** | NeurIPS | Applies reinforcement learning to structure- and content-faithful table image-to-LaTeX generation. | — |
| 2024 | **[Enhancing Table Structure Recognition via Bounding Box Guidance](https://doi.org/10.1007/978-3-031-78498-9_15)** | ICPR | BGTR guides HTML generation with predicted cell boxes and introduces the synthetic SNSTab scene dataset. | — |
| 2024 | **[OmniParser: A Unified Framework for Text Spotting, Key Information Extraction and Table Recognition](https://openaccess.thecvf.com/content/CVPR2024/html/Wan_OmniParser_A_Unified_Framework_for_Text_Spotting_Key_Information_Extraction_CVPR_2024_paper.html)** | CVPR | Uses one prompt-conditioned architecture for three document parsing tasks, including table recognition. | — |
| 2024 | **[RCAM-Transformer: A Novel Approach to Table Reconstruction Using Row-Column Attention Mechanism](https://doi.org/10.1007/978-3-031-70442-0_7)** | DAS | Builds row-column attention and reconstruction logic around the distinct geometry of table axes. | — |
| 2024 | **[TableRocket: An Efficient and Effective Framework for Table Reconstruction](https://doi.org/10.1007/978-981-97-8511-7_25)** | PRCV | Provides an efficiency-oriented pipeline for reconstructing complete tables from cell-level predictions. | — |
| 2024 | **[UniTable: Towards a Unified Framework for Table Recognition via Self-Supervised Pretraining](https://arxiv.org/abs/2403.04822)** | arXiv | Unifies structure, content, and cell-box extraction under a pixel-to-language-modeling objective. | [💻 Code](https://github.com/poloclub/unitable) |
| 2023 | **[An End-to-End Local Attention Based Model for Table Recognition](https://doi.org/10.1007/978-3-031-41679-8_2)** | ICDAR | Uses local attention for end-to-end table recognition and contributes the PubTabNet250 evaluation set. | — |
| 2023 | **[An End-to-End Multi-Task Learning Model for Image-Based Table Recognition](https://arxiv.org/abs/2303.08648)** | VISIGRAPP | Jointly learns structure and content prediction for image-based table recognition. | — |
| 2023 | **[Divide Rows and Conquer Cells: Towards Structure Recognition for Large Tables](https://www.ijcai.org/proceedings/2023/152)** | IJCAI | Decomposes large tables row-wise before cell reconstruction to handle dense and oversized structures. | — |
| 2023 | **[GridFormer: Towards Accurate Table Structure Recognition via Grid Prediction](https://arxiv.org/abs/2309.14962)** | ACM Multimedia | Predicts row-column grids and spanning-cell relationships for table reconstruction. | — |
| 2023 | **[Tables to LaTeX: Structure and Content Extraction from Scientific Tables](https://arxiv.org/abs/2210.17246)** | IJDAR | Extracts both structure and cell content from scientific table images into LaTeX. | — |
| 2023 | **[TRACE: Table Reconstruction Aligned to Corner and Edges](https://arxiv.org/abs/2305.00630)** | ICDAR | Aligns predicted table corners and edges to reconstruct cells and spanning structures. | — |
| 2022 | **[A Structure-Focused Deep Learning Approach for Table Recognition from Document Images](https://doi.org/10.1109/COMPSAC54236.2022.00041)** | COMPSAC | Prioritizes structural reconstruction when extracting tables from heterogeneous document imagery. | — |
| 2022 | **[GTRNet: A Graph-Based Table Reconstructed Network](https://doi.org/10.1109/ICTAI56018.2022.00079)** | ICTAI | Groups detected textual components through a graph network to reconstruct table topology. | — |
| 2022 | **[Table Structure Recognition and Form Parsing by End-to-End Object Detection and Relation Parsing](https://doi.org/10.1016/j.patcog.2022.108946)** | Pattern Recognition | Jointly optimizes region detection and graph relation parsing for tables and template-free forms. | — |
| 2022 | **[Table Structure Recognition with Conditional Attention](https://arxiv.org/abs/2203.03819)** | arXiv | Conditions sequence decoding on visual structure cues for image-to-markup recognition. | — |
| 2022 | **[TRUST: An Accurate and End-to-End Table Structure Recognizer Using Splitting-Based Transformers](https://arxiv.org/abs/2208.14687)** | arXiv | Uses learned row and column splitting followed by span reconstruction. | — |

<p align="right"><a href="#readme-top">⬆️ Back to top</a></p>

<a id="multimodal-table-understanding-reasoning"></a>
## 🧠 2. Multimodal Table Understanding & Reasoning

> Visual and multimodal methods for answering, calculating, retrieving, grounding, and reasoning over standard and complex tables. **21 papers.**

<a id="table-question-answering"></a>
### Table Question Answering

| Year | Paper | Venue | Why it matters | Resources |
|---:|---|---|---|---|
| 2026 | **[Multimodal Table Understanding with Difficulty-aware Reinforcement Learning](https://ojs.aaai.org/index.php/AAAI/article/view/37042)** | AAAI | Introduces MM-Table-R1 with task- and data-level curricula based on table complexity. | — |
| 2026 | **[V-TableR1: Process-Supervised Multimodal Table Reasoning with Critic-Guided Policy Optimization](https://arxiv.org/abs/2604.20755)** | arXiv | Uses a critic VLM and process-guided policy optimization to supervise intermediate visual-table reasoning. | — |
| 2025 | **[Can GRPO Boost Complex Multimodal Table Understanding?](https://aclanthology.org/2025.emnlp-main.637/)** | EMNLP | Table-R1 combines warm-up, TEDS-based perception alignment, and hint-completion GRPO. | — |
| 2024 | **[PixT3: Pixel-based Table-to-Text Generation](https://aclanthology.org/2024.acl-long.364/)** | ACL | Generates faithful descriptions directly from table pixels without relying on a serialized table input. | — |
| 2024 | **[TabPedia: Towards Comprehensive Visual Table Understanding with Concept Synergy](https://arxiv.org/abs/2406.01326)** | NeurIPS | Couples low-level table recognition with high-level concept reasoning and introduces ComTQA. | [💻 Code](https://github.com/zhaowc-ustc/TabPedia) |
| 2022 | **[End-to-End Compound Table Understanding with Multi-Modal Modeling](https://doi.org/10.1145/3503161.3547885)** | ACM Multimedia | Introduces the bilingual ComFinTab benchmark and CTUNet for compound table recognition and relation understanding. | [💻 Code](https://github.com/hikopensource/DAVAR-Lab-OCR) |

<a id="numerical-symbolic-reasoning"></a>
### Numerical & Symbolic Reasoning

| Year | Paper | Venue | Why it matters | Resources |
|---:|---|---|---|---|
| 2026 | **[CoReTab: Improving Multimodal Table Understanding with Code-driven Reasoning](https://aclanthology.org/2026.eacl-long.306/)** | EACL | Builds verified code-grounded traces and combines pretraining, supervised tuning, and GRPO. | — |
| 2025 | **[ExpliCIT-QA: Explainable Code-Based Image Table Question Answering](https://arxiv.org/abs/2507.11694)** | arXiv | Produces executable code explanations for arithmetic and logical QA over table images. | — |

<a id="hybrid-visual-textual-reasoning"></a>
### Hybrid Visual–Textual Reasoning

| Year | Paper | Venue | Why it matters | Resources |
|---:|---|---|---|---|
| 2026 | **[TableDART: Dynamic Adaptive Multi-Modal Routing for Table Understanding](https://arxiv.org/abs/2509.14671)** | ICLR 2026 | Routes between visual and serialized table representations according to example difficulty. | [💻 Code](https://github.com/xiaobo-xing/TableDART) |
| 2026 | **[TABQAWORLD: Optimizing Multimodal Reasoning for Multi-Turn Table Question Answering](https://arxiv.org/abs/2604.03393)** | arXiv | Dynamically selects visual or textual table state representations during multi-turn reasoning. | — |
| 2026 | **[Thinking with Tables: Enhancing Multi-Modal Tabular Understanding via Neuro-Symbolic Reasoning](https://arxiv.org/abs/2603.24004)** | arXiv | Combines visual table perception with symbolic operations for interpretable tabular reasoning. | — |
| 2025 | **[Enhancing Large Vision-Language Models with Layout Modality for Table Question Answering on Japanese Annual Securities Reports](https://arxiv.org/abs/2505.17625)** | IIAI AAI | Adds OCR text and layout features to LVLMs for financial table cell QA in Japanese filings. | — |
| 2025 | **[HIPPO: Enhancing the Table Understanding Capability of LLMs through Hybrid-Modal Preference Optimization](https://arxiv.org/abs/2502.17315)** | arXiv | Aligns preferences across table images and textual table representations. | — |
| 2025 | **[Multimodal Tabular Reasoning with Privileged Structured Information](https://openreview.net/forum?id=AuBSUgFVgq)** | NeurIPS | Uses table markup only as privileged training supervision while retaining image-only inference. | — |
| 2025 | **[TableMoE: Neuro-Symbolic Routing for Structured Expert Reasoning in Multimodal Table Understanding](https://arxiv.org/abs/2506.21393)** | arXiv | Routes table questions between neural perception and symbolic execution components. | — |
| 2024 | **[Multimodal Table Understanding](https://aclanthology.org/2024.acl-long.493/)** | ACL | Defines a broad 24-task setting and introduces MMTab plus Table-LLaVA for recognition and reasoning. | [💻 Code](https://github.com/SpursGoZmy/Table-LLaVA) · [🗃️ Data](https://huggingface.co/datasets/SpursgoZmy/MMTab) |

<a id="retrieval-rag"></a>
### Retrieval & RAG

| Year | Paper | Venue | Why it matters | Resources |
|---:|---|---|---|---|
| 2026 | **[TabRAG: Efficient Table Retrieval and Understanding with Multimodal Large Language Models](https://arxiv.org/abs/2602.07642)** | arXiv | Unifies visual table reranking and answer generation for retrieval-augmented table understanding. | — |
| 2025 | **[RITT: A Retrieval-Assisted Framework with Image and Text Table Representations for Table Question Answering](https://aclanthology.org/2025.trl-1.8/)** | TRL Workshop | Retrieves a relevant subtable and dynamically selects visual or textual table representations by question type. | — |

<a id="grounding-attribution"></a>
### Grounding & Attribution

| Year | Paper | Venue | Why it matters | Resources |
|---:|---|---|---|---|
| 2026 | **[Decoupling Skeleton and Flesh: Efficient Multimodal Table Reasoning with Disentangled Alignment and Structure-aware Guidance](https://arxiv.org/abs/2602.03491)** | arXiv | Separates structural abstraction from semantic grounding and adds structure-aware inference guidance. | — |

<a id="image-graphic-cells"></a>
### Image / Graphic Cells

| Year | Paper | Venue | Why it matters | Resources |
|---:|---|---|---|---|
| 2024 | **[Knowledge-Aware Reasoning over Multimodal Semi-Structured Tables](https://aclanthology.org/2024.findings-emnlp.822/)** | Findings of EMNLP | Introduces MMTABQA, where semi-structured tables interleave text cells with image cells. | — |
| 2023 | **[M-TBQA: Multimodal Table-Based Question Answering](https://doi.org/10.1145/3650215.3650255)** | ICMLCA | An early task and model for question answering over tables whose cells include both text and images. | — |

<p align="right"><a href="#readme-top">⬆️ Back to top</a></p>

<a id="multimodal-table-data-generation"></a>
## 🏭 3. Multimodal Table Data Generation

> Pipelines and tools for creating table contents, schemas, rendered pixels, instructions, and validated synthetic training data. **21 papers.**

<a id="structured-content-generation"></a>
### Structured Content Generation

| Year | Paper | Venue | Why it matters | Resources |
|---:|---|---|---|---|
| 2025 | **[CTSyn: A Foundation Model for Cross Tabular Data Generation](https://openreview.net/forum?id=Sh4FOyZRpv)** | ICLR | Pretrains a cross-table foundation model for transferable structured-value generation across heterogeneous tables. | — |
| 2024 | **[Mixed-Type Tabular Data Synthesis with Score-based Diffusion in Latent Space](https://openreview.net/forum?id=4Ay23yeuz0)** | ICLR | Generates mixed categorical and numerical table contents with score-based diffusion in a learned latent space. | [💻 Code](https://github.com/amazon-science/tabsyn) |
| 2023 | **[Language Models are Realistic Tabular Data Generators](https://openreview.net/forum?id=cEygmQNOeI)** | ICLR | GReaT serializes structured rows as natural language and fine-tunes language models to generate realistic table contents. | [💻 Code](https://github.com/tabularis-ai/be_great) |
| 2023 | **[REaLTabFormer: Generating Realistic Relational and Tabular Data using Transformers](https://arxiv.org/abs/2302.02041)** | arXiv | Generates single-table and relational structured values while preserving dependencies useful for downstream rendering. | [💻 Code](https://github.com/worldbank/REaLTabFormer) |
| 2023 | **[TabuLa: Harnessing Language Models for Tabular Data Synthesis](https://arxiv.org/abs/2310.12746)** | arXiv | Adapts language models for efficient synthetic table-content generation with compact table-specific tokenization. | [💻 Code](https://github.com/zhao-zilong/Tabula) |

<a id="schema-layout-generation"></a>
### Schema & Layout Generation

| Year | Paper | Venue | Why it matters | Resources |
|---:|---|---|---|---|
| 2026 | **[TableNet: A Large-Scale Table Dataset with LLM-Powered Autonomous Generation](https://arxiv.org/abs/2604.13041)** | arXiv | Uses cooperating agents for schema planning, layout construction, and content filling before rendering HTML tables with exact structure labels. | [💻 Code](https://github.com/WenmuZhou/TableGeneration) |
| 2025 | **[Map&Make: Generating & Evaluating Scientific Text-to-Table Data](https://aclanthology.org/2025.acl-long.1460/)** | ACL | Maps scientific text into atomic propositions and a latent schema before generating grounded tables. | [💻 Code](https://github.com/coral-lab-asu/map-make) · [🌐 Project](https://coral-lab-asu.github.io/map-make) |
| 2024 | **[Text-Tuple-Table: Towards Information Integration in Text-to-Table Generation via Global Tuple Extraction](https://aclanthology.org/2024.emnlp-main.523/)** | EMNLP | Uses global tuple extraction as an intermediate representation for generating faithful tables from collections of text. | [💻 Code](https://github.com/HKUST-KnowComp/LiveSum-TTT) |
| 2022 | **[Text-to-Table: A New Way of Information Extraction](https://aclanthology.org/2022.acl-long.180/)** | ACL | Frames information extraction as generating complex structured tables from text with structure-aware constraints. | — |

<a id="markup-to-image-rendering"></a>
### Markup-to-Image Rendering

| Year | Paper | Venue | Why it matters | Resources |
|---:|---|---|---|---|
| 2025 | **[FlexDoc: Parameterized Sampling for Diverse Multilingual Synthetic Documents for Training Document Understanding Models](https://aclanthology.org/2025.emnlp-industry.105/)** | EMNLP Industry Track | Samples multilingual semi-structured documents from stochastic schemas with parameterized layouts and table-boundary annotations. | — |
| 2025 | **[Scaling Text-Rich Image Understanding via Code-Guided Synthetic Multimodal Data Generation](https://aclanthology.org/2025.acl-long.855/)** | ACL | Uses generated Python, HTML, and LaTeX programs to render text-rich images and build 2.7M instruction examples over 400K synthetic images. | [💻 Code](https://github.com/allenai/pixmo-docs) · [🗃️ Data](https://huggingface.co/datasets/allenai/CoSyn-400K) · [🌐 Project](https://yueyang1996.github.io/cosyn/) |
| 2024 | **[μgat: Multimodal Generalized Academic Translator](https://arxiv.org/abs/2408.15646)** | ECCV Workshop | Includes a reproducible Markdown and LaTeX table generator that renders paired PDF or PNG pages with source markup. | [💻 Code](https://github.com/aimagelab/mugat) |

<a id="direct-image-generation"></a>
### Direct Image Generation

| Year | Paper | Venue | Why it matters | Resources |
|---:|---|---|---|---|
| 2024 | **[Latent Diffusion for Guided Document Table Generation](https://arxiv.org/abs/2408.09800)** | ICDAR | Uses layout-guided latent diffusion to synthesize document tables for downstream recognition. | — |
| 2024 | **[Synthesizing Realistic Data for Table Recognition](https://arxiv.org/abs/2404.11100)** | ICDAR | Generates realistic financial table images to enlarge recognition training data without manual labeling. | [💻 Code](https://github.com/iWudao/Synthesizing-Realistic-Data-for-Table-Recognition) |
| 2023 | **[Diffusion Models for Document Image Generation](https://doi.org/10.1007/978-3-031-41682-8_27)** | ICDAR | Studies unconditional and layout-controlled document image synthesis, providing a direct pixel-generation route for table-bearing pages. | — |
| 2023 | **[Table and Image Generation for Investigating Knowledge of Entities in Pre-trained Vision and Language Models](https://aclanthology.org/2023.acl-short.162/)** | ACL | Builds paired table and image generation data from roughly 200K Wikipedia infoboxes for entity-knowledge studies. | [💻 Code](https://github.com/kamigaito/WikiTIG) |

<a id="qa-instruction-generation"></a>
### QA / Instruction Generation

| Year | Paper | Venue | Why it matters | Resources |
|---:|---|---|---|---|
| 2025 | **[SynTab-LLaVA: Enhancing Multimodal Table Understanding with Decoupled Synthesis](https://openaccess.thecvf.com/content/CVPR2025/html/Zhou_SynTab-LLaVA_Enhancing_Multimodal_Table_Understanding_with_Decoupled_Synthesis_CVPR_2025_paper.html)** | CVPR | Decouples table rendering from QA synthesis to build SynTab at large scale with lower generation cost. | [💻 Code](https://github.com/bang123-box/SynTab-LLaVA) |
| 2025 | **[TableDreamer: Synthesizing High-Quality Table Instruction Tuning Data with Pluggable LLMs](https://aclanthology.org/2025.findings-acl.381/)** | Findings of ACL | Synthesizes table titles, contents, instructions, and responses with weakness-guided iterative exploration, yielding 27K instruction examples. | [💻 Code](https://github.com/SpursGoZmy/TableDreamer) |
| 2025 | **[TabularMath: Understanding Math Reasoning over Tables with Large Language Models](https://arxiv.org/abs/2505.19563)** | arXiv | AutoT2T converts mathematical word problems into verified table-reasoning tasks and controllably perturbed variants. | [💻 Code](https://github.com/jokersio-tsy/AutoT2T) |

<a id="augmentation-validation"></a>
### Augmentation & Validation

| Year | Paper | Venue | Why it matters | Resources |
|---:|---|---|---|---|
| 2025 | **[GRAFT: Generator of Realistic And Formatted Tables](https://arxiv.org/abs/2508.15690)** | arXiv | Programmatically renders controlled table families and generates executable questions with machine-verifiable JSON or YAML answers. | — |
| 2025 | **[Why LLMs Are Bad at Synthetic Table Generation (and what to do about it)](https://arxiv.org/abs/2406.14541)** | arXiv | Diagnoses permutation sensitivity in LLM table synthesis and proposes permutation-aided fine-tuning to better preserve functional dependencies. | [💻 Code](https://github.com/ShengzheXu/Permutation-aided-Fine-tuning) |

<a id="generation-tools"></a>
### Practical Generators & Toolkits

Projects are grouped under the same production stages as the papers above, so the literature and runnable resources stay in one place.

#### Structured Content Generation — Practical generators & toolkits

| Project | Produces | Best used for |
|---|---|---|
| **[TableDreamer](https://github.com/SpursGoZmy/TableDreamer)**<br><sub>official paper code</sub> | Table titles, contents, instructions, and responses | Weakness-guided table instruction synthesis with pluggable LLMs |
| **[Map&Make](https://github.com/coral-lab-asu/map-make)**<br><sub>official paper code</sub> | Grounded scientific tables from unstructured text | Text-to-table data with proposition and schema intermediates |
| **[Synthetic Data Vault](https://github.com/sdv-dev/SDV)**<br><sub>production toolkit</sub> | Synthetic single-table, multi-table, and sequential values | Producing statistically coherent cell contents before rendering |
| **[GReaT](https://github.com/tabularis-ai/be_great)**<br><sub>official paper code</sub> | Language-model-generated structured rows | Domain-adapted table content generation from small seed datasets |
| **[REaLTabFormer](https://github.com/worldbank/REaLTabFormer)**<br><sub>official paper code</sub> | Synthetic relational and single-table values | Preserving dependencies across linked tables before visual rendering |
| **[TabSyn](https://github.com/amazon-science/tabsyn)**<br><sub>official paper code</sub> | Diffusion-generated mixed-type table rows | High-fidelity numerical and categorical content synthesis |
| **[SDGX](https://github.com/hitsz-ids/synthetic-data-generator)**<br><sub>production toolkit</sub> | Pluggable synthetic structured datasets | Composing privacy, quality, and generator modules in production pipelines |

#### Markup-to-Image Rendering — Practical generators & toolkits

| Project | Produces | Best used for |
|---|---|---|
| **[TableGeneration](https://github.com/WenmuZhou/TableGeneration)**<br><sub>official paper code</sub> | HTML tables, rendered images, and exact TSR labels | Autonomous schema, layout, and content generation with reproducible supervision |
| **[μgat dataset generator](https://github.com/aimagelab/mugat)**<br><sub>official paper code</sub> | Markdown/LaTeX source paired with PDF and PNG pages | Academic-style tables with controlled templates and source markup |
| **[Great Tables](https://github.com/posit-dev/great-tables)**<br><sub>production toolkit</sub> | Styled HTML tables and exportable table images | Programmatic DataFrame-to-pixel rendering with rich styling |
| **[DoGe Document Generator](https://github.com/Travvy88/DocumentGenerator_DoGe)**<br><sub>community project</sub> | Synthetic document pages with tables, text, and bounding boxes | Generating table-bearing page layouts and detection annotations |
| **[Synthetic OCR Image Generator](https://github.com/junyeong-nero/synthetic-ocr-image-generator)**<br><sub>community project</sub> | Table images with Markdown and JSON ground truth | Quick OCR and TSR corpus generation from configurable templates |

#### Direct Image Generation — Practical generators & toolkits

| Project | Produces | Best used for |
|---|---|---|
| **[WikiTIG](https://github.com/kamigaito/WikiTIG)**<br><sub>official paper code</sub> | Entity-conditioned table and image generation pairs | Bootstrapping generation data from Wikipedia infoboxes |

#### QA / Instruction Generation — Practical generators & toolkits

| Project | Produces | Best used for |
|---|---|---|
| **[CoSyn / pixmo-docs](https://github.com/allenai/pixmo-docs)**<br><sub>official paper code</sub> | Python/HTML/LaTeX renders plus QA and reasoning instructions | Scaling code-guided text-rich multimodal instruction data |
| **[SynTab-LLaVA](https://github.com/bang123-box/SynTab-LLaVA)**<br><sub>official paper code</sub> | Rendered table images and synthesized visual-table QA | Decoupled, large-scale multimodal table instruction construction |
| **[AutoT2T](https://github.com/jokersio-tsy/AutoT2T)**<br><sub>official paper code</sub> | Verified mathematical table tasks and controlled perturbations | Generating executable numerical reasoning examples |

#### Augmentation & Validation — Practical generators & toolkits

| Project | Produces | Best used for |
|---|---|---|
| **[Realistic Table Recognition Synthesizer](https://github.com/iWudao/Synthesizing-Realistic-Data-for-Table-Recognition)**<br><sub>official paper code</sub> | Realistic financial table images and recognition labels | Draw-and-paste synthesis that retains complex real structures |
| **[TableVQA-Bench](https://github.com/naver-ai/tablevqabench)**<br><sub>official paper code</sub> | Controlled table visualizations and visual QA evaluations | Testing whether synthetic styles preserve content and reasoning difficulty |

<p align="right"><a href="#readme-top">⬆️ Back to top</a></p>

<a id="benchmarks-datasets"></a>
## 🧪 4. Benchmarks & Datasets

> Datasets and benchmark suites for recognition, understanding, robustness, and multimodal table settings. **26 papers.**

<a id="benchmark-recognition"></a>
### Recognition

| Year | Paper | Venue | Why it matters | Resources |
|---:|---|---|---|---|
| 2026 | **[UniTabBank: A Large-Scale Multi-Lingual, Multi-Layout, Multi-Type, Multi-Format Dataset for Table Detection](https://openaccess.thecvf.com/content/WACV2026/html/Mondal_UniTabBank_A_Large_Scale_Multi-Lingual_Multi-Layout_Multi-Type_Multi-Format_Dataset_for_WACV_2026_paper.html)** | WACV | Broadens table detection coverage across languages, layouts, table types, and file formats. | — |
| 2025 | **[CISOL: An Open and Extensible Dataset for Table Structure Recognition in the Construction Industry](https://openaccess.thecvf.com/content/WACV2025/html/Tschirschwitz_CISOL_An_Open_and_Extensible_Dataset_for_Table_Structure_Recognition_WACV_2025_paper.html)** | WACV | Provides an extensible recognition dataset designed for broader table layout diversity. | — |
| 2023 | **[WEATHERGOV+: A Table Recognition and Summarization Dataset to Bridge the Gap Between Document Image Analysis and Natural Language Generation](https://doi.org/10.1145/3573128.3604901)** | DocEng | Connects document-image table recognition with end-to-end natural-language table summarization. | — |
| 2022 | **[PubTables-1M: Towards Comprehensive Table Extraction From Unstructured Documents](https://openaccess.thecvf.com/content/CVPR2022/html/Smock_PubTables-1M_Towards_Comprehensive_Table_Extraction_From_Unstructured_Documents_CVPR_2022_paper.html)** | CVPR | A million-table dataset with detailed structure annotations and a DETR-based Table Transformer baseline. | [💻 Code](https://github.com/microsoft/table-transformer) · [🗃️ Data](https://huggingface.co/datasets/bsmock/pubtables-1m) |

<a id="benchmark-understanding-reasoning"></a>
### Understanding & Reasoning

| Year | Paper | Venue | Why it matters | Resources |
|---:|---|---|---|---|
| 2026 | **[INDOTABVQA: A Benchmark for Cross-Lingual Table Understanding in Bahasa Indonesia Documents](https://aclanthology.org/2026.findings-acl.1105/)** | Findings of ACL | Contains 1,593 Indonesian document images and question sets in Indonesian, English, Hindi, and Arabic. | [🗃️ Data](https://huggingface.co/datasets/NusaBharat/INDOTABVQA) |
| 2026 | **[MMFCTUB: Multi-Modal Financial Credit Table Understanding Benchmark](https://arxiv.org/abs/2601.04643)** | arXiv | A domain benchmark for structure perception, financial knowledge, and calculation across credit tables. | — |
| 2026 | **[TABVERSE: Benchmarking Cross-Format Table Understanding in LLMs and VLMs](https://arxiv.org/abs/2606.09578)** | arXiv | Aligns identical tables across HTML, Markdown, LaTeX, and rendered images to isolate representation effects. | [💻 Code](https://github.com/mbzuai-nlp/TABVERSE) · [🗃️ Data](https://huggingface.co/datasets/MBZUAI/TABVERSE) |
| 2026 | **[ViTaB-A: Evaluating Multimodal Large Language Models on Visual Table Attribution](https://arxiv.org/abs/2602.15769)** | arXiv | Tests answer attribution across image, Markdown, and JSON table representations. | — |
| 2025 | **[Does Table Source Matter? Benchmarking and Improving Multimodal Scientific Table Understanding and Reasoning](https://openreview.net/forum?id=lP5KmjCPXW)** | OpenReview | Introduces MMSci and measures how scientific source domains affect visual-table reasoning. | — |
| 2025 | **[EviFiVQA: A Benchmark for Evidence-Grounded Multi-hop Reasoning in Financial VQA](https://doi.org/10.1007/978-3-032-04627-7_34)** | ICDAR | Requires numerical multi-hop reasoning, evidence localization, and hierarchical aggregation over irregular financial tables. | — |
| 2025 | **[MTabVQA: Evaluating Multi-Tabular Reasoning of Language Models in Visual Space](https://arxiv.org/abs/2506.11684)** | arXiv | Evaluates reasoning that requires jointly reading multiple table images. | — |
| 2025 | **[TabComp: A Dataset for Visual Table Reading Comprehension](https://aclanthology.org/2025.findings-naacl.320/)** | Findings of NAACL | Targets reading comprehension over visual tables with questions tied to table structure and content. | — |
| 2025 | **[Visual-TableQA: Open-Domain Benchmark for Reasoning over Table Images](https://arxiv.org/abs/2509.07966)** | arXiv | Generates open-domain LaTeX-rendered tables, reasoning-heavy questions, rationales, and multi-model verification. | — |
| 2024 | **[TableVQA-Bench: A Visual Question Answering Benchmark on Multiple Table Domains](https://arxiv.org/abs/2404.19205)** | arXiv | Renders existing table datasets into images and supplies 1,500 generated QA pairs across domains. | [💻 Code](https://github.com/naver-ai/tablevqabench) |
| 2024 | **[WikiDT: Visual-Based Table Recognition and Question Answering Dataset](https://doi.org/10.1007/978-3-031-70533-5_24)** | ICDAR | Contains 70,919 images and 159,905 tables with hierarchical labels supporting both QA and recognition diagnosis. | [🗃️ Data](https://huggingface.co/datasets/AmazonScience/WikiDT) · [🌐 Project](https://www.amazon.science/publications/wikidt-visual-based-table-recognition-and-question-answering-dataset) |

<a id="benchmark-real-world-robustness"></a>
### Real-world / Robustness

| Year | Paper | Venue | Why it matters | Resources |
|---:|---|---|---|---|
| 2026 | **[A Benchmark and Method for Photographed Table Reasoning](https://doi.org/10.1016/j.patcog.2026.113355)** | Pattern Recognition | Introduces PCTR-16K and structure-aware chain-of-thought for Chinese tables photographed under real conditions. | [💻 Code](https://github.com/PremiLab-Math/PCTR-16k) |
| 2026 | **[TABLET: A Large-Scale Dataset for Robust Visual Table Understanding](https://openreview.net/forum?id=5UbeQDlYDj)** | ICLR | Aggregates more than four million examples over 21 tasks while preserving mostly original table visualizations. | [💻 Code](https://github.com/alonsoapp/TABLET) |
| 2026 | **[WildTableBench: Benchmarking Multimodal Foundation Models on Table Understanding In the Wild](https://arxiv.org/abs/2605.01018)** | arXiv | A manually verified benchmark built from naturally occurring table images rather than template renders. | [💻 Code](https://github.com/hjzhe/WildTableBench) · [🗃️ Data](https://huggingface.co/datasets/jzhuang/WildTableBench) |
| 2025 | **[RealHiTBench: A Comprehensive Realistic Hierarchical Table Benchmark](https://arxiv.org/abs/2506.13405)** | arXiv | Focuses on realistic hierarchical tables and compares image and text presentation formats. | — |
| 2025 | **[TableEval: A Real-World Benchmark for Complex, Multilingual, and Multi-Structured Table Question Answering](https://aclanthology.org/2025.emnlp-main.363/)** | EMNLP | Tests multilingual QA over complex real-world tables in both visual and serialized formats. | — |
| 2023 | **[A Large-Scale Dataset for End-to-End Table Recognition in the Wild](https://www.nature.com/articles/s41597-023-01909-0)** | Scientific Data | Introduces TabRecSet with 38.1K English and Chinese tables from scanned and camera-captured scenes. | — |

<a id="benchmark-multimodal-tables"></a>
### Multimodal Tables

| Year | Paper | Venue | Why it matters | Resources |
|---:|---|---|---|---|
| 2026 | **[MMTableBench: A Multi-level Multimodal Benchmark for Reasoning and Layout Complexity in Table QA](https://doi.org/10.1145/3774904.3792367)** | The Web Conference | Separates layout complexity from reasoning complexity for fine-grained diagnosis of multimodal TableQA. | [💻 Code](https://github.com/TableBench/MMTableBench) · [🗃️ Data](https://huggingface.co/datasets/Multilingual-Multimodal-NLP/MMTableBench) |
| 2026 | **[MMTabReal: A Real-World Benchmark for Multimodal Table Understanding](https://aclanthology.org/2026.findings-acl.2047/)** | Findings of ACL | Provides 500 real-world tables with 4,021 questions spanning embedded graphics, color encodings, and complex layouts. Formerly **MMTBench**. | — |
| 2026 | **[TableVista: Benchmarking Multimodal Table Reasoning under Visual and Structural Complexity](https://aclanthology.org/2026.findings-acl.1745/)** | Findings of ACL | Expands 3,000 reasoning problems into 30,000 controlled visual variants to isolate style, structure, and vision-only failure modes. | — |
| 2025 | **[2Columns1Row: A Benchmark for Textual and Multimodal Table Reasoning in Russian](https://aclanthology.org/2025.findings-emnlp.721/)** | Findings of EMNLP | Adds a Russian-language comparison of textual and visual table reasoning. | — |
| 2025 | **[Benchmarking Multimodal Large Language Models on Recognition and Understanding over Chemical Tables](https://arxiv.org/abs/2506.11375)** | arXiv | Evaluates chemical table recognition and reasoning where cells may contain domain-specific molecular graphics. | — |

<p align="right"><a href="#readme-top">⬆️ Back to top</a></p>

<a id="evaluation-analysis"></a>
## 📏 5. Evaluation & Analysis

> Metrics, controlled evaluations, representation studies, and analyses of robustness and generalization. **11 papers.**

<a id="metrics"></a>
### Metrics

| Year | Paper | Venue | Why it matters | Resources |
|---:|---|---|---|---|
| 2025 | **[Benchmarking Table Extraction: Multimodal LLMs vs Traditional OCR](https://aclanthology.org/2025.xllm-1.2/)** | XLLM Workshop | Compares multimodal LLM extraction with Table Transformer plus OCR under structure- and content-aware metrics. | — |
| 2024 | **[Uncertainty Quantification in Table Structure Recognition](https://doi.org/10.1109/IRI62200.2024.00014)** | IRI | Studies predictive uncertainty so recognition systems can surface unreliable table structures. | — |
| 2023 | **[GriTS: Grid Table Similarity Metric for Table Structure Recognition](https://arxiv.org/abs/2203.12555)** | ICDAR | Defines factored grid-based metrics for topology, location, and content similarity. | — |
| 2022 | **[Evaluating Table Structure Recognition: A New Perspective](https://arxiv.org/abs/2205.09801)** | DAS | Analyzes weaknesses of existing evaluation and proposes geometry-aware TEDS-IOU. | — |

<a id="evaluation-protocols"></a>
### Evaluation Protocols

| Year | Paper | Venue | Why it matters | Resources |
|---:|---|---|---|---|
| 2026 | **[Zero-Shot Table Extraction in Business Documents: A Unified Benchmark with Realistic Evaluation](https://openaccess.thecvf.com/content/WACV2026/html/Thomas_Zero-Shot_Table_Extraction_in_Business_Documents_A_Unified_Benchmark_with_WACV_2026_paper.html)** | WACV | Evaluates table detection and structure recognition under a unified zero-shot business-document protocol. | — |

<a id="representation-analysis"></a>
### Representation Analysis

| Year | Paper | Venue | Why it matters | Resources |
|---:|---|---|---|---|
| 2026 | **[Understanding and Bridging the Modality Gap When Text Is Rendered as Images](https://arxiv.org/abs/2603.09095)** | arXiv | Diagnoses why models underperform when equivalent textual content is supplied through pixels, including table benchmarks. | — |
| 2025 | **[Table Understanding and (Multimodal) LLMs: A Cross-Domain Case Study on Scientific vs. Non-Scientific Data](https://aclanthology.org/2025.trl-1.10/)** | TRL Workshop | Introduces a 3,017-table TableEval suite with image, dictionary, HTML, XML, and LaTeX views. | — |
| 2025 | **[Texts or Images? A Fine-Grained Analysis of Multimodal Table Understanding](https://aclanthology.org/2025.findings-acl.117/)** | Findings of ACL | Breaks down when visual or textual table formats help across table properties and reasoning types. | — |
| 2024 | **[Tables as Texts or Images: Evaluating Table Reasoning Ability of LLMs and MLLMs](https://aclanthology.org/2024.findings-acl.23/)** | Findings of ACL | Directly compares equivalent tables supplied as serialized text and rendered images. | — |

<a id="robustness-generalization"></a>
### Robustness / Generalization

| Year | Paper | Venue | Why it matters | Resources |
|---:|---|---|---|---|
| 2023 | **[A Study on Reproducibility and Replicability of Table Structure Recognition Methods](https://arxiv.org/abs/2304.10439)** | ICDAR | Reimplements leading methods under controlled settings and releases GenTSR to test generalization. | — |
| 2023 | **[Aligning Benchmark Datasets for Table Structure Recognition](https://arxiv.org/abs/2303.00716)** | ICDAR | Canonicalizes inconsistent annotations across major TSR datasets and measures the effect data alignment has on performance. | [💻 Code](https://github.com/microsoft/table-transformer) |

<p align="right"><a href="#readme-top">⬆️ Back to top</a></p>

<a id="surveys"></a>
## 📖 6. Surveys

> Surveys of table recognition, table pre-training, table reasoning, TableQA, and LLM/VLM-based table processing. **7 papers.**

<a id="survey"></a>
### Surveys

| Year | Paper | Venue | Why it matters | Resources |
|---:|---|---|---|---|
| 2025 | **[Large Language Model for Table Processing: A Survey](https://doi.org/10.1007/s11704-024-40763-6)** | Frontiers of Computer Science | Surveys LLM- and VLM-based table processing across question answering, image-table extraction, spreadsheet manipulation, training, prompting, and agents. | — |
| 2025 | **[Table Question Answering in the Era of Large Language Models: A Comprehensive Survey of Tasks, Methods, and Evaluation](https://arxiv.org/abs/2510.09671)** | arXiv | Reviews TableQA task formulations, benchmarks, reasoning challenges, LLM methods, evaluation practices, and emerging reinforcement-learning directions. | — |
| 2025 | **[Tabular Data Understanding with LLMs: A Survey of Recent Advances and Challenges](https://arxiv.org/abs/2508.00217)** | arXiv | Organizes tabular representations and understanding tasks while highlighting complex structures, multimodal inputs, long tables, and multi-table reasoning. | — |
| 2024 | **[A Review on Table Recognition Based on Deep Learning](https://arxiv.org/abs/2312.04808)** | arXiv | Reviews end-to-end and modular approaches across table detection, structure, and content recognition. | — |
| 2024 | **[A Survey of Table Reasoning with Large Language Models](https://arxiv.org/abs/2402.08259)** | arXiv | Surveys LLM-era table reasoning techniques, analyzes why LLMs improve tabular reasoning, and outlines methodological and application-oriented research directions. | — |
| 2024 | **[Deep Learning for Table Detection and Structure Recognition: A Survey](https://arxiv.org/abs/2211.08469)** | ACM Computing Surveys | Surveys datasets, architectures, and evaluation practices for table detection and structure recognition. | [💻 Code](https://github.com/abdoelsayed2016/Table-Detection-Structure-Recognition) |
| 2022 | **[Table Pre-training: A Survey on Model Architectures, Pre-training Objectives, and Downstream Tasks](https://www.ijcai.org/proceedings/2022/761)** | IJCAI Survey Track | Reviews table pre-training architectures, objectives, and downstream tasks including question answering, table search, relation classification, and formula prediction. | — |

<p align="right"><a href="#readme-top">⬆️ Back to top</a></p>

<a id="related-work"></a>
## 🔗 Related Work

Useful adjacent literature is kept directly in the main README for completeness while remaining visually separated from the core taxonomy. **17 papers.**

| Year | Paper | Venue | Why it matters | Resources |
|---:|---|---|---|---|
| 2025 | **[OmniParser V2: Structured-Points-of-Thought for Unified Visual Text Parsing and Its Generality to Multimodal Large Language Models](https://arxiv.org/abs/2502.16161)** | arXiv | Uses structured points-of-thought to unify visual text parsing and transfer document structure skills to MLLMs. | — |
| 2025 | **[Structure- and Semantic-Based Rationale Distillation: Table and Chart Question Answering in Scientific Documents](https://doi.org/10.1145/3769002.3769953)** | RACS | Distills structural and semantic rationales into a compact model for scientific table and chart QA. | — |
| 2025 | **[Table-R1: Region-based Reinforcement Learning for Table Understanding](https://arxiv.org/abs/2505.12415)** | arXiv | Injects relevant table regions into reasoning and optimizes region and answer rewards; input tables are serialized rather than visual. | — |
| 2025 | **[TASER: Table Agents for Schema-guided Extraction and Retrieval](https://arxiv.org/abs/2508.13404)** | arXiv | Uses agents to extract fragmented document tables into a target schema and retrieve evidence. | — |
| 2025 | **[Visual Editing as a Chain of Thought for Structured Image Understanding](https://arxiv.org/abs/2505.19455)** | ICML | REFOCUS iteratively edits structured images to expose relevant evidence, including tables and charts. | — |
| 2025 | **[WikiMixQA: A Multimodal Benchmark for Question Answering over Tables and Charts](https://aclanthology.org/2025.findings-acl.1280/)** | Findings of ACL | Requires multi-hop reasoning over tables and charts distributed across long Wikipedia pages. | — |
| 2024 | **[Extracting Information from Scientific Literature via Visual Table Question Answering Models](https://doi.org/10.1145/3649601.3698752)** | RACS | Compares OCR, visual QA, and structure-preserving pipelines for extracting evidence from scientific tables. | — |
| 2024 | **[Leopard: A Vision Language Model for Text-Rich Multi-Image Tasks](https://arxiv.org/abs/2410.01744)** | arXiv | Handles multiple high-resolution text-rich images, with dedicated multi-table and multi-chart evaluation. | — |
| 2024 | **[mPLUG-DocOwl 1.5: Unified Structure Learning for OCR-free Document Understanding](https://aclanthology.org/2024.findings-emnlp.175/)** | Findings of EMNLP | A general document VLM with structure-aware pretraining and substantive table recognition and QA evaluation. | — |
| 2024 | **[Multimodal ArXiv: A Dataset for Improving Scientific Comprehension of Large Vision-Language Models](https://aclanthology.org/2024.acl-long.775/)** | ACL | Pairs scientific text with figures, tables, and equations for broad document comprehension. | — |
| 2024 | **[Tabular Insights, Visual Impacts: Transferring Expertise from Tables to Images](https://proceedings.mlr.press/v235/jiang24h.html)** | ICML | Transfers representations learned from tabular features to ordinary image tasks; related multimodal tabular learning, not visual-table reading. | — |
| 2023 | **[ICDAR 2023 Competition on Visual Question Answering on Business Document Images](https://arxiv.org/abs/2303.14935)** | ICDAR | A document-image QA benchmark whose pages frequently require reading tables, forms, and receipts. | — |
| 2023 | **[Pix2Struct: Screenshot Parsing as Pretraining for Visual Language Understanding](https://proceedings.mlr.press/v202/lee23g.html)** | ICML | Pretrains on screenshot-to-HTML parsing and transfers to visually situated language tasks that include tables. | — |
| 2023 | **[UniMMQA: Unifying Multi-Modal Question Answering with Structured Knowledge](https://aclanthology.org/2023.findings-emnlp.626/)** | Findings of EMNLP | Unifies QA over text, tables, and ordinary images represented as heterogeneous knowledge sources. | — |
| 2022 | **[MMCoQA: Conversational Question Answering over Text, Tables, and Images](https://aclanthology.org/2022.acl-long.290/)** | ACL | Retrieves and answers conversational questions from heterogeneous text, serialized tables, and ordinary images. | — |
| 2022 | **[OCR-Free Document Understanding Transformer](https://www.ecva.net/papers/eccv_2022/papers_ECCV/html/764_ECCV_2022_paper.php)** | ECCV | A foundational OCR-free document model used by later visual table recognition and document QA systems. | [💻 Code](https://github.com/clovaai/donut) |
| 2022 | **[PP-StructureV2: A Stronger Document Analysis System](https://arxiv.org/abs/2210.05391)** | arXiv | An end-to-end document analysis system whose SLANet component is widely used for table structure recognition. | [💻 Code](https://github.com/PaddlePaddle/PaddleOCR) |

### Related Lists

- [Awesome-Tabular-LLMs](https://github.com/SpursGoZmy/Awesome-Tabular-LLMs) — broad table + LLM coverage.
- [Awesome-LLM-Table-Mining](https://github.com/USTCAGI/Awesome-LLM-Table-Mining) — table mining with language models.
- [Curated Table Structure Recognition](https://github.com/qyhou/curated-table-structure-recognition) — focused TSR bibliography.
- [Awesome Table Structure Recognition](https://github.com/Tan-Junwen/awesome-table-structure-recognition) — TSR papers, datasets, and implementations.

<div align="center"><a href="#readme-top">⬆️ Back to top</a></div>
