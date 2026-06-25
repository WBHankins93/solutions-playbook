# Imagery & Depth — Progress Tracker

Anti-drift ledger for the depth + imagery update. One row per imagery-relevant file.
Governed by [`DEPTH-STANDARD.md`](./DEPTH-STANDARD.md), [`VISUAL-PROMPT-STANDARD.md`](./VISUAL-PROMPT-STANDARD.md), [`IMAGERY-PLAN.md`](./IMAGERY-PLAN.md).

> **Working discipline:** re-read `DEPTH-STANDARD.md` at the **start of each file**, not once per session. That is what keeps a long batch from drifting.

## Legend

- **Tier** — depth tier from `DEPTH-STANDARD.md`: **A** = all five moves (`patterns/`, `architecture/`); **B** = moves 1·2·4 + 3/5 where relevant; **C** = leave lean (no entry below).
- **Depth** — Five Moves applied. ✅ done · 🔄 in progress · ⬜ todo
- **Mermaid** — inline diagram(s) present per `IMAGERY-PLAN.md` Track B. Number = fences currently in file; ⬜ = none yet.
- **Showcase** — gated generative diagram (Track A). `W1`/`W2` = wave; ✅ shipped; — = not a showcase page.
- **Spec** — Content Spec written per `VISUAL-PROMPT-STANDARD.md` (the record; image is disposable).
- **Image** — generated image received from ChatGPT and placed.

---

## Track A — Showcase diagrams (gated: spec → image → review)

| File | Tier | Depth | Mermaid | Showcase | Spec | Image | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `patterns/event-driven.md` | A | ✅ | 3 | W1 | ⬜ | ⬜ | Depth done this update. CSS lifted to `custom.css`. |
| `patterns/api-gateway.md` | A | ✅ | 3 | W1 (2 frames) | ✅ | ⬜ | Depth done. Spec at `visual-specs/api-gateway-showcase.md` — split into 2 frames + captions. **Awaiting Second Review**. |
| `patterns/microservices.md` | A | ⬜ | 1 | W1 | ⬜ | ⬜ | Has decision-tree mermaid already. |
| `patterns/data-mesh.md` | A | ⬜ | 1 | W1 | ⬜ | ⬜ | Domain-ownership topology. |
| `architecture/reference-architectures.md` | A | ⬜ | 1 | W1 | ⬜ | ⬜ | Carries 2–3 diagrams (page is *about* diagrams). |
| `pre-sales/technical-deep-dive.md` | B | ⬜ | ⬜ | W2 | ⬜ | ⬜ | Current-state → target-state template. Needs mermaid too. |
| `migration/strategy.md` | B | ⬜ | 2 | W2 | ⬜ | ⬜ | Strangler / parallel / big-bang. |
| `compliance/security-architecture.md` | B | ⬜ | 1 | W2 | ⬜ | ⬜ | Defense-in-depth / trust boundaries. |
| `environments/air-gapped.md` | B | ⬜ | 1 | W2 | ⬜ | ⬜ | Artifact transfer across the boundary. |
| `environments/hybrid.md` | B | ⬜ | 1 | W2 | ⬜ | ⬜ | Hybrid cloud + on-prem topology. |
| `ci-cd/pipeline-design.md` | A | ✅ | 2 | W3 | ✅ | ⬜ | Depth done this update. Spec at `visual-specs/ci-cd-pipeline-showcase.md` — **awaiting Second Review**. |

> ~14 showcase frames total across 11 pages (`api-gateway` has 2 frames; `reference-architectures` has 3; CI/CD pipeline is Wave 3). Do **one** showcase end-to-end before batching the rest.

---

## Track B — Inline mermaid only (no gate, batch through Code)

| File | Tier | Depth | Mermaid | Showcase | Notes |
| --- | --- | --- | --- | --- | --- |
| `architecture/design-review.md` | A | ⬜ | 1 | — | Review process flow. |
| `architecture/well-architected.md` | A | ⬜ | 2 | — | Six-pillar framework. |
| `migration/assessment.md` | B | ⬜ | 1 | — | Migration-approach decision tree. |
| `migration/cutover-planning.md` | B | ⬜ | 1 | — | Cutover timeline (T-24h → T+24h). |
| `environments/private-cluster.md` | B | ⬜ | 1 | — | Network topology. |
| `environments/firewall-restricted.md` | B | ⬜ | 1 | — | Network topology. |
| `environments/multi-tenant.md` | B | ⬜ | 1 | — | Tenant isolation model. |
| `compliance/data-residency.md` | B | ⬜ | ⬜ | — | Cross-region data flow. Needs mermaid. |
| `implementation/troubleshooting.md` | B | ⬜ | ⬜ | — | Triage decision tree. Needs mermaid. |
| `pre-sales/poc-scoping.md` | B | ⬜ | ⬜ | — | POC phase timeline. Needs mermaid. |

> Track B is cheap and ungated — don't queue it behind showcase work.

---

## Track C — No imagery (explicit, prevents padding)

`battle-cards/` · `templates/` · `internal/` · `lessons/` · `examples/` · `engagements/` · `recovery/` · `business-value/` · `stakeholder-management/` · `cost-modeling/` · `architecture/adr-template.md` · `pre-sales/discovery.md` · `pre-sales/demo.md` · root meta docs

> `cost-modeling/` may later want **data charts** (spend over time, TCO) — that's data-viz, a separate system. Out of scope here.

---

## The 10 showcase pages / ~13 showcase frames (created in ChatGPT, brought back)

**Wave 1:** microservices · api-gateway · data-mesh · event-driven · reference-architectures (2–3).
**Wave 2:** technical-deep-dive · migration/strategy · security-architecture · air-gapped · hybrid.
