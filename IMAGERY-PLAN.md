# Imagery Plan

What needs a visual, what kind, and in what order. Two tracks, run in parallel:

- **Showcase** — generative diagram, governed by `VISUAL-PROMPT-STANDARD.md`, spec + review gated. Expensive. ~10 pages.
- **Mermaid** — inline, governed by `DEPTH-STANDARD.md`, no gate. Cheap. Runs through Code immediately.
- **None** — text-only by purpose. Adding a diagram is padding.

---

## Track A — Showcase diagrams (gated, prioritized)

| Wave | File | What it depicts |
| --- | --- | --- |
| **1** | `patterns/microservices.md` | Service decomposition / topology |
| **1** | `patterns/api-gateway.md` | Request lifecycle through the gateway |
| **1** | `patterns/data-mesh.md` | Domain-oriented ownership topology |
| **1** | `patterns/event-driven.md` | Fan-out + reliability layer (elevates existing mermaid) |
| **1** | `architecture/reference-architectures.md` | 2–3 reference diagrams (page is *about* diagrams) |
| **2** | `pre-sales/technical-deep-dive.md` | Current-state → target-state template |
| **2** | `migration/strategy.md` | Migration pattern (strangler / parallel / big-bang) |
| **2** | `compliance/security-architecture.md` | Defense-in-depth / trust boundaries |
| **2** | `environments/air-gapped.md` | Artifact transfer across the boundary |
| **2** | `environments/hybrid.md` | Hybrid cloud + on-prem topology (page already asks for it) |

> **Note:** ~12 images total (reference-architectures carries a few). That's the whole expensive scope — bounded, not 99.

---

## Track B — Inline mermaid (no gate, batch through Code)

| File | What it depicts |
| --- | --- |
| `patterns/*` (all 4) | Decision trees + flows alongside each showcase |
| `architecture/design-review.md` | Review process flow |
| `architecture/well-architected.md` | Six-pillar framework |
| `migration/assessment.md` | Migration-approach decision tree |
| `migration/cutover-planning.md` | Cutover phase timeline (T-24h → T+24h) |
| `environments/private-cluster.md` | Network topology |
| `environments/firewall-restricted.md` | Network topology |
| `environments/multi-tenant.md` | Tenant isolation model |
| `compliance/data-residency.md` | Cross-region data flow |
| `implementation/troubleshooting.md` | Triage decision tree |
| `pre-sales/poc-scoping.md` | POC phase timeline |

> **Note:** mermaid for topologies is "good enough" here. Promote one to showcase only if it becomes a page you lean on in interviews.

---

## Track C — No imagery (explicit, prevents padding)

`battle-cards/` · `templates/` · `internal/` · `lessons/` · `examples/` · `engagements/` · `recovery/` · `business-value/` · `stakeholder-management/` · `cost-modeling/` · `architecture/adr-template.md` · `pre-sales/discovery.md` · `pre-sales/demo.md` · root meta docs

> **Note:** `cost-modeling/` may want *data charts* later (spend over time, TCO comparison) — that's data-viz, a different system from architecture imagery. Out of scope here.

---

## Sequencing logic

1. **Wave 1 first** — patterns + reference architectures. Highest interview/reputation weight, and the pages that are broken without a diagram.
2. **Wave 2 next** — customer-facing technical surfaces. High value, less foot traffic.
3. **Track B in parallel, anytime** — it's cheap and ungated. Don't queue it behind showcase work.

The rate limiter is the showcase generate→review loop, not the writing. Do one Wave 1 showcase end-to-end (spec → image → my review) before batching the rest, so the prompt and review rhythm is proven before you commit ten of them.
