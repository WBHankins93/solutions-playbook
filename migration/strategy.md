---
tags:
  - architecture
  - customer-facing
  - migration
---

## Migration Strategy

## 📝 Context

Assessment is done. You know what's moving and roughly how. Now you need a phased
strategy that gets workloads migrated without disrupting business operations. The
strategy defines the sequence, the approach for each wave, and the guardrails that
keep the migration from going sideways.

## 📋 Strategy Pre-Requisites

- [ ] Migration assessment complete with workload dispositions
- [ ] Dependency map validated with application owners
- [ ] Target environment provisioned (or provisioning plan in place)
- [ ] Network connectivity established or planned between source and target
- [ ] Identity and access management configured in target
- [ ] Cost baseline established for current environment
- [ ] Stakeholder alignment on migration goals and constraints

## 🎯 Strategy Framework

### Wave Planning

Organize workloads into migration waves based on:

**Wave 1: Foundation & Quick Wins**
- Low-risk, low-dependency workloads
- Non-production environments (dev, staging, QA)
- Internal tools that can tolerate downtime
- Purpose: build muscle, validate tooling, establish patterns

**Wave 2: Core Services**
- Medium-complexity workloads with manageable dependencies
- Services with clear rollback paths
- Workloads where the team has strong operational knowledge
- Purpose: prove the migration approach at scale

**Wave 3: Complex & Critical**
- High-dependency workloads that require careful coordination
- Customer-facing services with strict SLAs
- Workloads with complex data migration requirements
- Purpose: migrate the hardest workloads with experience from earlier waves

**Wave 4: Cleanup & Optimization**
- Remaining workloads, decommissioning source environment
- Post-migration optimization (right-sizing, reserved capacity)
- Operational handoff and runbook completion
- Purpose: close out the migration and start optimization

### Sequencing Principles

1. **Migrate dependencies before dependents.** If Service A calls Service B, migrate B
   first (or migrate them together).

2. **Start with what you understand best.** Don't learn cloud operations on your most
   critical workload.

3. **Group by team, not just by technology.** A team migrating three services they own
   is more efficient than three teams each migrating one unfamiliar service.

4. **Maintain rollback capability.** Every wave should have a defined rollback path
   that's been tested before the wave begins.

5. **Create a "strangler fig" pattern for tightly coupled systems.** Gradually route
   traffic to the new environment rather than cutting over all at once.

### Data Migration Strategy

Data migration is usually the hardest part. Choose the right approach per workload:

| Approach | Description | When to Use |
| --- | --- | --- |
| **Offline migration** | Stop writes, copy data, start in new environment | Small data sets, tolerance for downtime |
| **Online migration** | Continuous replication with cutover at a point in time | Large data sets, minimal downtime required |
| **Dual-write** | Write to both old and new during transition | Zero-downtime requirement, complex validation needed |
| **Export/import** | Dump and reload | Schema changes required, acceptable downtime window |

**For each data migration, define:**

- Volume to migrate and estimated transfer time
- Acceptable downtime window
- Validation approach (row counts, checksums, application-level verification)
- Rollback approach if validation fails
- Data sync strategy during the transition period

### Network Strategy

- **Hybrid connectivity:** VPN, Direct Connect, or peering between source and target
- **DNS cutover:** How traffic will be redirected (weighted routing, blue-green, etc.)
- **Latency budget:** Which cross-environment calls are acceptable during transition
- **Firewall rules:** What needs to be opened, when, and who approves
- **Certificate management:** TLS certificates for new endpoints

### Testing Strategy

Each wave needs a test plan:

- **Functional testing:** Does the workload work in the new environment?
- **Performance testing:** Does it meet latency and throughput requirements?
- **Integration testing:** Do upstream and downstream dependencies still work?
- **Failover testing:** Does the rollback plan actually work?
- **Security testing:** Are access controls and network policies correctly applied?

### Strategy Document Template

**Migration Strategy: [Customer Name]**

**Migration window:** [Start] to [End]
**Total workloads:** [X]
**Waves planned:** [X]

**Wave Summary:**

| Wave | Timeline | Workloads | Risk Level | Key Milestone |
|------|----------|-----------|------------|---------------|
| 1 | [Dates] | [Count] | Low | [Milestone] |
| 2 | [Dates] | [Count] | Medium | [Milestone] |
| 3 | [Dates] | [Count] | High | [Milestone] |
| 4 | [Dates] | [Count] | Low | [Milestone] |

**Go/No-Go Criteria per Wave:**
- [ ] Target environment validated
- [ ] Rollback plan tested
- [ ] Monitoring and alerting configured
- [ ] Stakeholders briefed
- [ ] On-call coverage arranged for cutover

**Communication Plan:**
- [Frequency and format of status updates]
- [Escalation path for blockers]
- [Stakeholder notification for cutover events]

## ⚠️ Gotchas

- Planning all waves in detail upfront — Wave 1 teaches you things that change Waves 2-4
- Underestimating data migration — it's always bigger, slower, and more complex than expected
- Not testing rollback — a rollback plan you haven't tested is not a plan
- Migrating during business-critical periods — avoid peak seasons, quarter-end, product launches
- Ignoring DNS TTLs — if your TTL is 24 hours, your "instant" cutover takes 24 hours
- Assuming the source environment stays stable during migration — changes to source mid-migration cause drift
- Not decommissioning source after migration — dual running costs add up fast

## 🔗 Links

- [Migration Assessment](assessment.md)
- [Cutover Planning](cutover-planning.md)
- [Migration Risk Framework](risk-framework.md)
- [Implementation Kickoff](../implementation/kickoff.md)
- [Status Updates](../internal/status-updates.md)
