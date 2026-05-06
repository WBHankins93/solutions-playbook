# 🚨 Start Here: Situation Router

> **This is your guided routing layer.** Pick the prompt that best matches what is happening right now, open the first linked playbook, then create the suggested next artifact. Keep this page in Markdown so each routing card can later become a docs UI tile or lightweight web app route.

## How to use this router

1. **Choose the closest situation.** If more than one applies, start with the most time-sensitive or customer-visible issue.
2. **Open the `Start here` playbook.** Use it to anchor the next conversation, decision, or recovery move.
3. **Create the `Next artifact`.** The artifact makes the route actionable and gives the team something to review.
4. **Avoid the common mistake.** Each route calls out the failure mode that usually makes the situation worse.

> Looking for a complete inventory instead of situational routing? Open the [Content Index](CONTENT-INDEX.md).
>
> Want to add a new route? Copy [`templates/routing-card.md`](templates/routing-card.md) and keep the same field names: `Situation`, `Use when`, `Start here`, `Next artifact`, and `Common mistake`.

---

## 🔥 Urgent workflows

### 1. “I have a customer call in the next 24 hours.”

| Field | Route |
| --- | --- |
| **Situation** | A discovery, demo, technical deep-dive, POC kickoff, or implementation call is imminent. |
| **Use when** | You need fast alignment on attendees, goals, risks, and talk track before joining the call. |
| **Start here** | [Pre-call prep with sales](internal/pre-call-prep.md), then choose the customer-facing guide: [Discovery](pre-sales/discovery.md), [Demo](pre-sales/demo.md), [Technical deep-dive](pre-sales/technical-deep-dive.md), or [Implementation kickoff](implementation/kickoff.md). |
| **Next artifact** | Call plan, discovery questions, demo flow, or kickoff agenda. |
| **Common mistake** | Walking into the call without knowing the desired outcome, customer roles, or known landmines. |

### 2. “I need to prepare for a discovery call.”

| Field | Route |
| --- | --- |
| **Situation** | You are meeting a prospect or customer to understand their environment, constraints, timeline, and success criteria. |
| **Use when** | The opportunity is early, the problem is not fully defined, or you are tempted to start pitching before learning. |
| **Start here** | [Discovery call framework](pre-sales/discovery.md). |
| **Next artifact** | [Discovery questions](templates/discovery-questions.md) and a post-call summary with risks, blockers, and next steps. |
| **Common mistake** | Committing to scope or timeline during discovery before validating constraints and decision criteria. |

### 3. “I need to scope a POC.”

| Field | Route |
| --- | --- |
| **Situation** | Discovery is complete enough to define what the POC will prove, what is in/out of scope, and who must sign off. |
| **Use when** | The customer is asking for a trial, pilot, evaluation, or proof point and you need crisp success criteria. |
| **Start here** | [POC scoping framework](pre-sales/poc-scoping.md). |
| **Next artifact** | POC scope document with objective, success criteria, timeline, assumptions, dependencies, and owners. |
| **Common mistake** | Treating the POC as “try everything” instead of a bounded decision process. |

### 4. “A POC is off track.”

| Field | Route |
| --- | --- |
| **Situation** | Success criteria are slipping, blockers are accumulating, timeline is at risk, or stakeholder confidence is dropping. |
| **Use when** | You need to stabilize the evaluation, reset expectations, or decide whether to narrow scope. |
| **Start here** | [POC recovery](recovery/poc-recovery.md), then update the customer with the [POC status update email](templates/customer/poc-status-update-email.md). |
| **Next artifact** | Recovery plan with blocker list, owner/date for each action, revised success criteria, and communication cadence. |
| **Common mistake** | Waiting until the final readout to acknowledge that the POC is not tracking to plan. |

### 5. “My demo went wrong or is about to go wrong.”

| Field | Route |
| --- | --- |
| **Situation** | The demo failed, the environment is unstable, the customer is disengaged, or you need a fallback path. |
| **Use when** | You need to recover gracefully and preserve trust without pretending nothing happened. |
| **Start here** | [Demo recovery](recovery/demo-recovery.md), then use [Post-call debrief](internal/post-call-debrief.md) to capture lessons. |
| **Next artifact** | Follow-up note that acknowledges the issue, explains the recovery path, and proposes the next proof point. |
| **Common mistake** | Over-explaining the technical failure live instead of redirecting to the customer outcome and next step. |

### 6. “The customer has an environment constraint.”

| Field | Route |
| --- | --- |
| **Situation** | The environment is air-gapped, private, firewall-restricted, multi-tenant, hybrid, or otherwise constrained. |
| **Use when** | Deployment feasibility depends on networking, artifact movement, security approval, cluster access, or operational boundaries. |
| **Start here** | Choose the matching environment guide: [Air-gapped](environments/air-gapped.md), [Private cluster](environments/private-cluster.md), [Firewall-restricted](environments/firewall-restricted.md), [Multi-tenant](environments/multi-tenant.md), or [Hybrid](environments/hybrid.md). |
| **Next artifact** | Environment validation notes, dependency list, transfer plan, or implementation checklist. |
| **Common mistake** | Assuming the customer means the same thing you mean by “restricted” without validating exact access and transfer rules. |

### 7. “I need to update leadership.”

| Field | Route |
| --- | --- |
| **Situation** | Leadership needs a concise status update, risk summary, decision, escalation context, or ask for help. |
| **Use when** | There is executive visibility, deal risk, a customer escalation, or a blocker that needs authority/resources. |
| **Start here** | [Status updates / trip reports](internal/status-updates.md) for routine updates; [Escalation framework](recovery/escalation.md) for at-risk customer situations. |
| **Next artifact** | [Status update](templates/status-update-template.md) with summary, progress, risks, next steps, and explicit help needed. |
| **Common mistake** | Sending a long narrative without a clear ask, impact, owner, or due date. |

### 8. “I’m stuck and need internal help.”

| Field | Route |
| --- | --- |
| **Situation** | You cannot resolve a blocker alone and need engineering, product, another SE, or leadership to engage. |
| **Use when** | You have tried the basics, gathered evidence, and need a specific answer, debug session, exception, or decision. |
| **Start here** | [Requesting help from engineering](internal/requesting-help.md), then use [Getting unstuck](recovery/stuck.md) if the path is still unclear. |
| **Next artifact** | Help request with customer context, reproduction details, logs/screenshots, what you tried, urgency, and requested outcome. |
| **Common mistake** | Asking broadly for help without enough context for someone else to take the next action. |

---

## 🧭 Lifecycle routes

### “I just got assigned something new.”

- New customer engagement → [engagements/new-customer.md](engagements/new-customer.md)
- Joining an engagement mid-stream → [engagements/joining-existing.md](engagements/joining-existing.md)
- Inherited a customer from another SE → [engagements/inherited-customer.md](engagements/inherited-customer.md)

### “I need to prepare for a customer interaction.”

- Discovery call → [pre-sales/discovery.md](pre-sales/discovery.md)
- Technical deep-dive / architecture review → [pre-sales/technical-deep-dive.md](pre-sales/technical-deep-dive.md)
- Demo → [pre-sales/demo.md](pre-sales/demo.md)
- POC scoping → [pre-sales/poc-scoping.md](pre-sales/poc-scoping.md)
- POC execution → [pre-sales/poc-execution.md](pre-sales/poc-execution.md)
- Implementation kickoff call → [implementation/kickoff.md](implementation/kickoff.md)

### “I’m implementing.”

- Starting implementation → [implementation/kickoff.md](implementation/kickoff.md)
- Mid-implementation checkpoint → [implementation/mid-implementation.md](implementation/mid-implementation.md)
- Troubleshooting a blocker → [implementation/troubleshooting.md](implementation/troubleshooting.md)
- Handoff to customer / success team → [implementation/handoff.md](implementation/handoff.md)

### “Something went wrong.”

- Demo failed → [recovery/demo-recovery.md](recovery/demo-recovery.md)
- POC isn't working → [recovery/poc-recovery.md](recovery/poc-recovery.md)
- Customer is frustrated or escalating → [recovery/escalation.md](recovery/escalation.md)
- Scope is creeping → [recovery/scope-creep.md](recovery/scope-creep.md)
- I’m stuck and don't know the path forward → [recovery/stuck.md](recovery/stuck.md)

## I need a quick customer-safe response

- Browse all battle cards → [battle-cards/README.md](battle-cards/README.md)
- Scope creep objection → [battle-cards/scope-creep-objection.md](battle-cards/scope-creep-objection.md)
- Security review pushback → [battle-cards/security-review-pushback.md](battle-cards/security-review-pushback.md)
- POC success criteria → [battle-cards/poc-success-criteria.md](battle-cards/poc-success-criteria.md)
- Demo failure response → [battle-cards/demo-failure-response.md](battle-cards/demo-failure-response.md)
- Timeline pressure → [battle-cards/timeline-pressure.md](battle-cards/timeline-pressure.md)
- Air-gapped expectation setting → [battle-cards/air-gapped-expectation-setting.md](battle-cards/air-gapped-expectation-setting.md)

## Internal team coordination

- Pre-call prep with sales/team → [internal/pre-call-prep.md](internal/pre-call-prep.md)
- Post-call debrief → [internal/post-call-debrief.md](internal/post-call-debrief.md)
- Status updates / trip reports → [internal/status-updates.md](internal/status-updates.md)
- Requesting help from engineering → [internal/requesting-help.md](internal/requesting-help.md)
- Handing off to another SE → [internal/handoff-to-se.md](internal/handoff-to-se.md)

### “I want to level up.”

- Structured skill development → [LEARNING-PATHS.md](LEARNING-PATHS.md)
