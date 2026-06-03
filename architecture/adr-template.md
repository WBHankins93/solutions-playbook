---
tags:
  - architecture
  - template
---

## Architecture Decision Record (ADR) Template

## 📝 Context

Architecture decisions need to be documented, not just made. An ADR captures what was
decided, why, what alternatives were considered, and what tradeoffs were accepted. This
creates a decision log that prevents relitigating settled questions and gives future
team members the context they need to understand why things are the way they are.

## 📋 When to Write an ADR

- [ ] Choosing between technology options (database, message broker, framework)
- [ ] Defining service boundaries or communication patterns
- [ ] Changing deployment strategy or infrastructure approach
- [ ] Making a security or compliance architectural decision
- [ ] Accepting a tradeoff that affects cost, performance, or operational complexity
- [ ] Any decision that would be hard or expensive to reverse

## 🎯 ADR Template

Copy this template for each architectural decision:

```markdown
# ADR-[NUMBER]: [TITLE]

**Status:** [Proposed | Accepted | Deprecated | Superseded by ADR-XXX]
**Date:** [YYYY-MM-DD]
**Decision makers:** [Names and roles]

## Context

What is the situation that requires a decision? What are the forces at play?
Include business requirements, technical constraints, team capabilities,
timeline pressure, and any other factors that shaped the decision space.

## Decision

State the decision clearly in one or two sentences.

## Alternatives Considered

### Option A: [Name]
- **Description:** What this option looks like
- **Pros:** What it does well
- **Cons:** What it does poorly or what risks it introduces
- **Estimated effort:** [S/M/L]
- **Estimated cost:** [Monthly/annual run cost if relevant]

### Option B: [Name]
[Same structure as above]

### Option C: [Name]
[Same structure as above]

## Rationale

Why was this option chosen over the alternatives? Be specific about which
constraints or priorities tipped the decision. If the decision was close,
say so and explain what would make you revisit it.

## Consequences

### What improves
- [Specific benefit with expected impact]

### What gets harder
- [Specific cost, risk, or operational burden accepted]

### What we're deferring
- [Decisions or improvements we're consciously pushing to later]

## Review Triggers

Revisit this decision if:
- [Condition that would change the calculus, e.g., "traffic exceeds 10x current load"]
- [Condition, e.g., "team grows beyond 3 engineers"]
- [Condition, e.g., "compliance requirements change"]
```

## 🎯 ADR Best Practices

**Keep them short.** An ADR should be 1-2 pages. If it's longer, the decision is probably
too broad — split it into smaller decisions.

**Write them at decision time.** Retroactive ADRs are better than nothing, but they lose
the nuance of what was actually discussed. Write while the context is fresh.

**Include rejected alternatives.** The alternatives you didn't pick are as important as the
one you did. They prevent future team members from proposing the same option without
understanding why it was previously rejected.

**Make consequences honest.** Every decision has downsides. Naming them explicitly builds
trust and prevents surprise when those downsides materialize.

**Version them.** When a decision is revisited, don't delete the original ADR. Mark it as
superseded and create a new one that references the original. The history matters.

**Number them sequentially.** ADR-001, ADR-002, etc. The numbering shows how the
architecture evolved over time.

## 🎯 Common ADR Topics in SA Engagements

| Topic | Typical Tension |
| --- | --- |
| Database selection | Managed vs. self-hosted, SQL vs. NoSQL, single vs. polyglot |
| Compute model | Containers vs. serverless vs. VMs, cluster sizing |
| Communication pattern | Sync REST vs. async messaging vs. event streaming |
| Authentication | Centralized IdP vs. per-service auth, token format |
| Data strategy | Single source of truth vs. eventual consistency, CQRS |
| Deployment model | Multi-region vs. single-region, active-active vs. active-passive |
| Cloud strategy | Single cloud vs. multi-cloud, cloud-native vs. portable |
| Build vs. buy | Custom solution vs. managed service vs. open-source |

## ⚠️ Gotchas

- ADRs without alternatives — if you only evaluated one option, it's not a decision, it's an assumption
- Missing consequences — every decision has downsides, and omitting them looks naive
- ADRs that are too abstract — "we decided to use microservices" without specifying service boundaries
- Not updating status — deprecated decisions that still show as "accepted" confuse everyone
- Writing ADRs after the fact to justify what was already built — do it at decision time
- ADRs without review triggers — every decision should state when to revisit it

## 🔗 Links

- [Design Review](design-review.md)
- [Reference Architectures](reference-architectures.md)
- [Well-Architected Review](well-architected.md)
- [Technical Deep-Dive](../pre-sales/technical-deep-dive.md)
