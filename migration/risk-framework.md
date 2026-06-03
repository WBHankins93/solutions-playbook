---
tags:
  - architecture
  - customer-facing
  - migration
---

## Migration Risk Framework

## 📝 Context

Every migration carries risk. The goal isn't to eliminate risk — it's to identify it
early, quantify it honestly, and have a mitigation plan for each item. This framework
helps you build and maintain a migration risk register that keeps stakeholders informed
and prevents surprises.

## 📋 Risk Assessment Checklist

- [ ] Review workload inventory for high-complexity items
- [ ] Identify dependencies with single points of failure during migration
- [ ] Assess team experience with target platform
- [ ] Evaluate data migration volume and complexity
- [ ] Check for compliance or regulatory constraints on data movement
- [ ] Review timeline for conflicts (holidays, peak seasons, other projects)
- [ ] Identify vendor or contract dependencies that could block progress

## 🎯 Risk Assessment Framework

### Risk Categories

**Technical Risks**

| Risk | Description | Likelihood | Impact |
| --- | --- | --- | --- |
| Data loss or corruption | Data integrity compromised during migration | [H/M/L] | [H/M/L] |
| Extended downtime | Cutover exceeds planned window | [H/M/L] | [H/M/L] |
| Performance degradation | Workload runs slower in target environment | [H/M/L] | [H/M/L] |
| Integration breakage | Upstream/downstream systems fail after migration | [H/M/L] | [H/M/L] |
| Incomplete dependency mapping | Undiscovered dependencies cause failures | [H/M/L] | [H/M/L] |
| Rollback failure | Unable to revert to source environment when needed | [H/M/L] | [H/M/L] |

**Organizational Risks**

| Risk | Description | Likelihood | Impact |
| --- | --- | --- | --- |
| Skill gaps | Team lacks expertise in target platform | [H/M/L] | [H/M/L] |
| Key person dependency | Critical knowledge held by one individual | [H/M/L] | [H/M/L] |
| Stakeholder misalignment | Different expectations about scope, timeline, or outcomes | [H/M/L] | [H/M/L] |
| Resource contention | Migration team pulled to other priorities | [H/M/L] | [H/M/L] |
| Change fatigue | Too many concurrent changes reduce team effectiveness | [H/M/L] | [H/M/L] |

**Business Risks**

| Risk | Description | Likelihood | Impact |
| --- | --- | --- | --- |
| Cost overrun | Migration costs exceed budget | [H/M/L] | [H/M/L] |
| Dual-running costs | Source and target running simultaneously longer than planned | [H/M/L] | [H/M/L] |
| Compliance violation | Data handling during migration violates regulations | [H/M/L] | [H/M/L] |
| Revenue impact | Migration disruption affects customer-facing services | [H/M/L] | [H/M/L] |
| Vendor lock-in | Target architecture creates dependencies that limit future flexibility | [H/M/L] | [H/M/L] |

### Risk Scoring

Use a simple likelihood × impact matrix:

|  | **Low Impact** | **Medium Impact** | **High Impact** |
|---|---|---|---|
| **High Likelihood** | 🟡 Medium | 🔴 High | 🔴 Critical |
| **Medium Likelihood** | 🟢 Low | 🟡 Medium | 🔴 High |
| **Low Likelihood** | 🟢 Low | 🟢 Low | 🟡 Medium |

### Risk Mitigation Strategies

For each identified risk, define one of these responses:

- **Avoid:** Change the plan to eliminate the risk entirely. Example: don't migrate
  a workload during peak season.
- **Mitigate:** Reduce likelihood or impact. Example: run a dry-run cutover to
  reduce the risk of extended downtime.
- **Transfer:** Shift the risk to another party. Example: use a managed migration
  service for complex database migrations.
- **Accept:** Acknowledge the risk and monitor it. Example: accept minor performance
  variance during the transition period.

### Risk Register Template

**Migration Risk Register: [Customer Name]**
**Last updated:** [Date]

| # | Risk | Category | Score | Mitigation | Owner | Status |
|---|------|----------|-------|------------|-------|--------|
| 1 | [Risk description] | Technical | 🔴 High | [Mitigation plan] | [Name] | Open |
| 2 | [Risk description] | Organizational | 🟡 Medium | [Mitigation plan] | [Name] | Mitigated |
| 3 | [Risk description] | Business | 🟢 Low | Accept and monitor | [Name] | Accepted |

### Risk Review Cadence

- **Weekly** during active migration waves — review all open risks, update scores
- **Before each wave** — risk assessment specific to the wave's workloads
- **At go/no-go decisions** — all critical and high risks must have active mitigations
- **Post-wave** — retrospective on which risks materialized and which mitigations worked

## 🎯 Common Migration Risks and Mitigations

**"We discovered a dependency we didn't know about mid-migration"**
- Mitigation: Comprehensive dependency mapping during assessment, validated by application owners
- Mitigation: Canary deployment to detect integration failures before full cutover
- Contingency: Rollback plan tested and ready

**"Data migration is taking longer than expected"**
- Mitigation: Dry-run data migration before the real cutover
- Mitigation: Start continuous replication early so cutover only needs final sync
- Contingency: Extended maintenance window with stakeholder pre-approval

**"The team doesn't know how to operate in the new environment"**
- Mitigation: Training program completed before Wave 1
- Mitigation: Run Wave 1 on low-risk workloads to build operational muscle
- Contingency: Vendor support contract for first 90 days post-migration

**"Costs are higher than projected in the new environment"**
- Mitigation: Cost modeling validated with real workload data before migration
- Mitigation: Right-sizing review scheduled 30 days post-migration
- Contingency: Reserved capacity purchases deferred until steady-state is confirmed

## ⚠️ Gotchas

- Risk registers that are never updated — a stale risk register is worse than no risk register
- All risks scored as "medium" — if nothing is critical, you're not being honest
- Mitigations without owners — unowned mitigations don't get done
- Not tracking risks that materialized — this is your most valuable learning data
- Ignoring organizational risks — technical risks get attention, people risks cause failures
- Risk review as a checkbox exercise — the meeting should surface new risks, not just review old ones

## 🔗 Links

- [Migration Assessment](assessment.md)
- [Migration Strategy](strategy.md)
- [Cutover Planning](cutover-planning.md)
- [Escalation](../recovery/escalation.md)
- [Risk Reduction Narratives](../business-value/risk-reduction-narratives.md)
