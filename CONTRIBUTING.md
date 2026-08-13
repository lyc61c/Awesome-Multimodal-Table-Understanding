# Contributing

Thank you for helping make this bibliography more complete and more precise.

## Inclusion criteria

A core entry must use table pixels, document-page pixels, screenshots, or visual elements embedded in/alongside a table. Text-only table reasoning belongs in an adjacent list unless the same paper contains a substantive visual-input setting.

Prefer the canonical publisher, conference, ACL Anthology, CVF Open Access, OpenReview, or arXiv URL. Add an official code or dataset URL when one exists. Do not link to search results, paper aggregators, or unauthorized copies.

## Add a paper

1. Edit `data/papers.json`; do not hand-edit the generated paper tables in `README.md`.
2. Use a stable lowercase `id`, the peer-reviewed publication year (or first preprint year when unpublished), the strongest confirmed venue, modality tags, task tags, and a one-sentence factual note.
3. Run `npm run build` and `npm run check`.
4. Submit both the JSON change and regenerated README.

If a preprint is later accepted, update its venue and canonical paper URL rather than adding a duplicate. If a benchmark changes its name, keep one entry and record the former name in `alias`.

## Quality bar

- Verify title, year, and venue against a primary source.
- Describe the actual contribution, not a marketing claim.
- Keep tags specific and notes under roughly 25 words.
- Separate a table image from an image merely shown elsewhere in a document.
