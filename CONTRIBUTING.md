# Contributing

Thank you for helping make this bibliography more complete and more precise.

## Inclusion criteria

A core entry must use table pixels, document-page pixels, screenshots, or visual elements embedded in/alongside a table. Text-only table reasoning belongs in `RELATED.md` unless the same paper contains a substantive visual-input setting.

Prefer the canonical publisher, conference, ACL Anthology, CVF Open Access, OpenReview, or arXiv URL. Add an official code or dataset URL when one exists. Do not link to search results, paper aggregators, or unauthorized copies.

## Add a paper

1. Edit `data/papers.json`; do not hand-edit generated paper tables in `README.md` or `RELATED.md`.
2. Use a stable lowercase `id`, the peer-reviewed publication year (or first preprint year when unpublished), the strongest confirmed venue, modality tags, task tags, and a one-sentence factual note.
3. Choose the closest existing source category. The README generator maps that metadata into the public seven-part taxonomy and assigns every paper exactly one primary home.
4. Run `npm run build` and `npm run check`.
5. Submit the JSON change together with the regenerated `README.md` and `RELATED.md`.

If a preprint is later accepted, update its venue and canonical paper URL rather than adding a duplicate. If a benchmark changes its name, keep one entry and record the former name in `alias`.

## Taxonomy principle

The public README is organized around seven research views: visual perception and recognition; multimodal understanding and reasoning; multimodal and complex tables; data generation; benchmarks and datasets; evaluation and analysis; and surveys.

A paper has one **primary home** in the main bibliography. Training paradigms such as SFT, RL, GRPO, distillation, and preference optimization remain metadata rather than top-level categories. Adjacent document AI, text-only table reasoning, and broader heterogeneous multimodal work are preserved in `RELATED.md` instead of being mixed into the core list.

## Quality bar

- Verify title, year, and venue against a primary source.
- Describe the actual contribution, not a marketing claim.
- Keep tags specific and notes under roughly 25 words.
- Separate a table image from an image merely shown elsewhere in a document.
- Do not duplicate a paper across multiple taxonomy sections; use metadata to express secondary properties.
