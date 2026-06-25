# Imagery Plan

What needs a visual, what kind, what detail belongs in the image, and what should
stay in page text. This plan has two jobs:

1. Identify the diagrams worth creating as polished visuals.
2. Prevent visual drift as Mermaid diagrams are replaced over time.

Use the three reference images as the quality bar: crisp technical infographic,
strong hierarchy, short labels, lots of whitespace, consistent icon language,
clear boundaries, and no decorative filler. Consistency matters more than novelty.

---

## Visual quality bar

Every generated or hand-built image should follow these rules before it ships:

- **One job per image.** Teach one architecture concept, one flow, or one decision surface.
- **Readable at a glance.** Target 10-18 in-image labels. Split anything denser into multiple frames.
- **Boundaries first.** Show ownership zones, trust zones, environments, or system boundaries before adding arrows.
- **Short labels only.** Put long explanations, caveats, numbers, and talk tracks in the caption or page text.
- **Directional arrows matter.** Label only the arrows that clarify intent: event, request, response, retry, approval, transfer.
- **Use status colors deliberately.** Green = success/approved, amber = degraded/warning/manual step, red = failure/blocker, purple = reliability/control layer, blue/teal = primary path.
- **Use consistent shapes.** Rounded rectangles for systems/processes, cylinders for data stores, dashed containers for boundaries, hexagons or side blocks for external services, numbered circles for ordered steps.
- **Keep icons supportive.** One simple line icon per major box is useful; icon-heavy diagrams become noisy.
- **No fake specificity.** If a number is illustrative, label it as illustrative in the caption, not as fact inside the image.

Reference style cues:

- Cheat-sheet image: good for dense summary pages with numbered sections and compact callouts.
- Architectural-breakdown image: good for multi-boundary system maps with sidebars for legend, key points, and goals.
- Prismatic skeleton image: good for one concrete flow with success, retry, and DLQ branches.

---

## Mermaid replacement policy

Mermaid stays useful for cheap diagrams, draft thinking, and process flows. Replace a
Mermaid diagram only when one of these is true:

- The page is hard to understand without the diagram.
- The diagram is likely to be reused in interviews, customer calls, or portfolio material.
- The Mermaid contains architecture boundaries, data flow, trust boundaries, or failure paths that benefit from visual hierarchy.
- The diagram is already acting like a flagship image, not a quick sketch.

Do not replace Mermaid just because it exists. Decision trees, timelines, and review
processes can stay Mermaid until they become recurring teaching artifacts.

---

## Track A — Showcase diagrams (gated, prioritized)

These are the visuals to create first. Each one needs a content spec under
`visual-specs/` before the image is generated or drawn.

For implementation handoff, use [`visual-specs/showcase-gpt-image-prompts.md`](visual-specs/showcase-gpt-image-prompts.md).

| Wave | File | Image brief | Must show | Keep out of image |
| --- | --- | --- | --- | --- |
| **1** | `patterns/api-gateway.md` | Two-frame gateway explainer. Frame 1: happy-path request lifecycle. Frame 2: status-code outcomes. | Consumers, gateway boundary, gateway responsibilities, backend services, success path, 401/429/503/504 outcomes. | Long timeout/rate-limit explanations; keep exact numbers in captions. |
| **1** | `patterns/event-driven.md` | Order fan-out plus production reliability layer. | Order system, event topic, billing/inventory/notification consumers, retries, idempotency, DLQ, alert/replay path. | Full technology comparison table; delivery-guarantee nuance belongs in text. |
| **1** | `patterns/microservices.md` | Service decomposition and ownership topology. | API edge, domain services, database-per-service, async messaging option, observability layer, ownership boundaries. | Full decision checklist and every resilience pattern; use caption for tradeoff summary. |
| **1** | `patterns/data-mesh.md` | Domain-owned data product operating model. | Customer/orders/payments domains, data products, self-serve platform, catalog, governance standards, consumers. | All six data-product quality attributes; put them in page table or caption. |
| **1** | `architecture/reference-architectures.md` | Three reference frames: logical view, physical view, operational view. | Logical: components + data/trust flow. Physical: regions/network/compute/stores. Operational: deploy/monitor/backup/scale. | A universal architecture that tries to include every pattern. These should be templates. |
| **2** | `pre-sales/technical-deep-dive.md` | Current-state to target-state workshop canvas. | Current state, integration points, constraints/risks, target state, validation questions, decision outputs. | A fake customer architecture; this should be reusable as a facilitation template. |
| **2** | `migration/strategy.md` | Migration strategy map with three path options. | Source, target, waves, dependency sequencing, strangler route, parallel run, big-bang/offline option, validation/rollback gate. | Every migration checklist item; keep detailed runbook steps in text. |
| **2** | `compliance/security-architecture.md` | Defense-in-depth plus trust-boundary view. | Identity, network, data, application, detection/response layers; users/services; sensitive data; trust boundaries; logs/alerts. | A full control matrix; keep maturity scoring in the template. |
| **2** | `environments/air-gapped.md` | Connected-to-offline artifact transfer flow. | Connected build environment, artifact bundle, approval/transfer, internal registry/package repo, offline deploy, validation evidence, offline docs/tools. | Every discovery question and full dependency checklist. |
| **2** | `environments/hybrid.md` | Cloud/on-prem boundary and failure-domain map. | Cloud environment, on-prem environment, boundary services, VPN/dedicated link, split DNS, identity/cert trust, observability, system of record. | Complete traffic matrix; use caption to mention latency/bandwidth validation. |

> **Bounded scope:** ~13 showcase images total because `patterns/api-gateway.md` is two frames and `architecture/reference-architectures.md` is three frames. Create one Wave 1 showcase end-to-end before batching the rest.

---

## Track B — Inline Mermaid now, candidate replacement later

These diagrams can stay Mermaid while the showcase set is built. If one becomes a
recurring customer/interview artifact, promote it using the suggested visual brief.

| File | Current diagram purpose | If promoted, create this image |
| --- | --- | --- |
| `architecture/design-review.md` | Review process flow. | A review lifecycle canvas: intent, evidence, risk findings, recommendations, owner follow-up. |
| `architecture/well-architected.md` | Six-pillar framework and review flow. | A compact six-pillar scorecard with review inputs and remediation outputs. |
| `migration/assessment.md` | Migration disposition decision tree. | A workload assessment funnel: business context, inventory, dependency map, 7 Rs, readiness score. |
| `migration/cutover-planning.md` | Cutover timeline. | A T-24h to T+24h command-center timeline with go/no-go, traffic shift, validation, rollback. |
| `environments/private-cluster.md` | Private cluster topology. | A cluster access and runtime map: users/support, VPN/bastion, API, control plane, workers, ingress, storage, registry, DNS. |
| `environments/firewall-restricted.md` | Network path topology. | A traffic path diagram: pods/nodes/bastion through NAT/proxy/firewall to DNS, registry, APIs, IdP, with evidence logging. |
| `environments/multi-tenant.md` | Tenant isolation model. | A tenant boundary diagram: namespaces/virtual clusters, quotas, RBAC, policies, shared services, noisy-neighbor controls. |
| `compliance/data-residency.md` | Cross-region data flow. | A regional boundary map: primary region, restricted data, allowed replicas, backups, observability metadata, blocked flows. |
| `implementation/troubleshooting.md` | Triage decision tree. | A blocker triage flow: reproduce, scope blast radius, inspect recent changes, isolate layer, escalate with evidence. |
| `pre-sales/poc-scoping.md` | POC phase timeline. | A POC lifecycle timeline: scope, success criteria, build, validate, decision, handoff. |

> **Promotion rule:** environment topologies are the strongest Track B candidates after Wave 2 because they are boundary-heavy and visually reusable.

---

## Track C — No imagery (explicit, prevents padding)

`battle-cards/` · `templates/` · `internal/` · `lessons/` · `examples/` · `engagements/` · `recovery/` · `business-value/` · `stakeholder-management/` · `cost-modeling/` · `architecture/adr-template.md` · `pre-sales/discovery.md` · `pre-sales/demo.md` · root meta docs

> **Note:** `cost-modeling/` may want *data charts* later (spend over time, TCO comparison) — that's data-viz, a different system from architecture imagery. Out of scope here.

---

## Sequencing logic

1. **Finish the existing API Gateway spec first.** It already proves the split-frame pattern.
2. **Wave 1 next** — patterns + reference architectures. Highest interview/reputation weight, and the pages that are weakest without visuals.
3. **Wave 2 after that** — customer-facing technical surfaces where boundaries, transfers, or trust zones matter.
4. **Track B in parallel, anytime** — cheap and ungated. Do not queue it behind showcase work.

The rate limiter is the showcase generate→review loop, not the writing. For each
showcase image, create the spec, generate or draw the image, self-review against the
exact labels, then send the spec and image for second review.
