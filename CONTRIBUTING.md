---
tags:
  - internal
---

# Contributing

## How to Contribute

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit with clear messages (`git commit -m 'Add amazing feature'`)
5. Push to your branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

## Pull Request Guidelines

- Describe what you're changing and why
- Reference any related issues
- Ensure all validation scripts pass
- Update documentation if needed
- If your change adds or updates a retrospective in `lessons/`, use the [maintenance process](MAINTENANCE.md) to decide whether guides, templates, examples, or battle cards should also change

## Page conventions

New guides should follow the established document pattern: **Context → Checklist →
Framework → Gotchas → Links**. SA-track pattern and architecture pages additionally follow
the depth and visual conventions in [DEPTH-STANDARD.md](DEPTH-STANDARD.md),
[IMAGERY-PLAN.md](IMAGERY-PLAN.md), and [VISUAL-PROMPT-STANDARD.md](VISUAL-PROMPT-STANDARD.md).

### Linking external standards (📚 Further reading)

Keep internal and external links separate:

- **`## 🔗 Links`** — cross-links to *other pages in this playbook* only.
- **`## 📚 Further reading`** — links to *authoritative external sources* (standards bodies,
  vendor framework docs, canonical articles). Add this section whenever a page teaches a
  practice that has a primary source — don't paraphrase a standard without linking it.

Guidelines for external links:

- Prefer the **primary source** (the standards body, the framework's own docs, the original
  article) over blog restatements.
- Give each link a short "what it is / why click" note, not just a bare title.
- Add the same links to the aggregated [External Resources](resources.md) hub so they stay
  discoverable in one place.
- External URLs are **not** checked by CI (only internal links are), so verify them by hand.

## Code of Conduct

Be respectful, constructive, and professional.