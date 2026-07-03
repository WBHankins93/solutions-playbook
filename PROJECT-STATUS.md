---
tags:
  - internal
---

# Solutions Playbook — Project Status

> Last updated: 2026-07-02
> Last reviewed: 2026-07-02

## Overall status

✅ **Two-track structure (SE + SA):** Complete
✅ **Entry points & routing:** Complete (Home, START-HERE, CONTENT-INDEX, LEARNING-PATHS)
✅ **Content:** Complete across both tracks plus shared environment, template, and example material
✅ **Visual system:** Applied consistently; SA-track pages follow the depth and imagery standards
✅ **External resources:** Every SA-track guide links to authoritative standards; aggregated on the [External Resources](resources.md) page
✅ **Published site:** VitePress site deployed to GitHub Pages via GitHub Actions
✅ **Markdown inventory:** 111 Markdown files (excluding `node_modules/` and `architecture-diagrams/`)

## Coverage by area

**SE track**

| Area | Files | Status |
| --- | --- | --- |
| Engagements | 3 | ✅ |
| Pre-Sales | 5 | ✅ |
| Implementation | 4 | ✅ |
| Recovery | 5 | ✅ |
| Internal coordination | 6 | ✅ |
| Business value | 4 | ✅ |
| Battle cards | 7 | ✅ |

**SA track**

| Area | Files | Status |
| --- | --- | --- |
| Architecture | 4 | ✅ |
| Patterns | 4 | ✅ |
| CI/CD | 4 | ✅ |
| Migration | 4 | ✅ |
| Compliance | 3 | ✅ |
| Cost modeling | 3 | ✅ |
| Stakeholder management | 3 | ✅ |

**Shared**

| Area | Files | Status |
| --- | --- | --- |
| Environments | 5 | ✅ |
| Templates (root + customer + technical) | 22 | ✅ |
| Examples | 6 | ✅ |
| Lessons | 1 (template) | ✅ |

## Platform & delivery

- **Site generator:** VitePress, published to `https://wbhankins93.github.io/solutions-playbook/`.
- **Navigation:** Path-scoped sidebars adapt to the SE track, SA track, or shared area you're in; the top nav handles cross-track jumps.
- **CI:** Every PR and push to `main` runs `npm run docs:build`, which fails on dead internal links (`ignoreDeadLinks: false`).
- **Deploy:** `.github/workflows/deploy.yml` builds and deploys to GitHub Pages on push to `main`.
- **Discoverability:** `sitemap.xml` is generated at build; pages carry Open Graph / Twitter share metadata.
- **Portability:** Every page has a **Download Markdown** button to pull the source into personal notes or share offline.

## Quality checklist

- ✅ Pages follow the document pattern (Context, Checklist, Framework, Gotchas, Links)
- ✅ SA-track pages include a **📚 Further reading** block linking to primary external standards
- ✅ Visual system and Mermaid diagrams render across the SA track
- ✅ Directory structure matches the README's documented layout
- ✅ Internal cross-links are functional (enforced by CI)
- ✅ Templates reference back to their full-context guides
- ✅ Tone is professional but not corporate

## Maintenance

See [MAINTENANCE.md](MAINTENANCE.md) for the review cadence and [CONTRIBUTING.md](CONTRIBUTING.md)
for how to add guides consistently (including the **📚 Further reading** convention for
linking external standards).
