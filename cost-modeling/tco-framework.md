---
tags:
  - architecture
  - customer-facing
  - cost
---

## Total Cost of Ownership (TCO) Framework

## 📝 Context

A customer needs to understand the full cost of a solution — not just the sticker price
on compute, but the operational, staffing, migration, and opportunity costs that determine
whether the investment makes sense over time. TCO analysis is how you turn "this seems
expensive" into a data-driven comparison.

## 📋 TCO Analysis Checklist

- [ ] Define the comparison — what are you comparing against what? (current vs. proposed, Option A vs. Option B)
- [ ] Agree on the time horizon — 1 year, 3 years, 5 years
- [ ] Identify all cost categories (see framework below)
- [ ] Gather current-state cost data from the customer
- [ ] Model projected costs with realistic assumptions
- [ ] Document assumptions explicitly — every number should have a source or rationale
- [ ] Include sensitivity analysis for key variables

## 🎯 TCO Framework

### Cost Categories

A complete TCO analysis includes these categories. Not all apply to every analysis — scope
to what's material.

**Infrastructure Costs (Direct)**

| Category | Current State | Proposed State | Notes |
| --- | --- | --- | --- |
| Compute (VMs, containers, serverless) | $ | $ | |
| Storage (block, object, file) | $ | $ | |
| Networking (bandwidth, load balancers, VPN) | $ | $ | |
| Database (licenses, managed service fees) | $ | $ | |
| Monitoring and observability tooling | $ | $ | |
| Security tooling (WAF, SIEM, scanning) | $ | $ | |
| Backup and disaster recovery | $ | $ | |
| Licenses (OS, middleware, third-party) | $ | $ | |
| **Subtotal** | **$** | **$** | |

**Operational Costs (People)**

| Category | Current State | Proposed State | Notes |
| --- | --- | --- | --- |
| FTEs to operate (ops, SRE, DBA) | $ | $ | Fully loaded cost |
| On-call burden | $ | $ | If outsourced or compensated |
| Incident response time | $ | $ | Average hours × incidents × rate |
| Maintenance and patching | $ | $ | Hours per month × rate |
| Training and certification | $ | $ | Upskilling for new platform |
| **Subtotal** | **$** | **$** | |

**Migration/Transition Costs (One-Time)**

| Category | Cost | Notes |
| --- | --- | --- |
| Migration planning and execution | $ | Internal or consultant hours |
| Data migration tooling and bandwidth | $ | |
| Application refactoring | $ | If replatforming or refactoring |
| Dual-running costs during transition | $ | Source + target simultaneously |
| Testing and validation | $ | |
| Training | $ | |
| **Subtotal** | **$** | |

**Opportunity Costs (Often Overlooked)**

| Category | Current State | Proposed State | Notes |
| --- | --- | --- | --- |
| Time-to-market for new features | [Estimate] | [Estimate] | Developer velocity impact |
| Revenue impact of downtime | $ | $ | Based on SLA and historical incidents |
| Cost of not scaling | $ | $ | Lost business during peak periods |
| Technical debt accumulation | [Qualitative] | [Qualitative] | Future cost of deferred maintenance |

### Modeling Assumptions

Every TCO model is only as credible as its assumptions. Document each one:

```markdown
## Assumptions

| # | Assumption | Value | Source | Sensitivity |
|---|-----------|-------|--------|-------------|
| 1 | Traffic growth rate | 20% YoY | Customer provided | High — 10% vs. 30% changes compute cost by $X |
| 2 | Average compute utilization | 40% | Monitoring data | Medium — affects right-sizing savings |
| 3 | FTE fully loaded cost | $150K/yr | Customer HR | Low — varies ±10% |
| 4 | Discount rate | 10% | Industry standard | Low |
| 5 | Reserved instance coverage | 70% | Optimization target | High — affects Year 2-3 costs significantly |
```

### Sensitivity Analysis

Identify the 3-5 variables that most affect the outcome and show how the TCO
changes as those variables move:

| Variable | Low Estimate | Base Case | High Estimate | TCO Impact |
| --- | --- | --- | --- | --- |
| Traffic growth | 10% YoY | 20% YoY | 40% YoY | $X - $Y range |
| Compute utilization | 30% | 40% | 60% | $X - $Y range |
| Migration duration | 3 months | 6 months | 12 months | $X - $Y range |

**Why this matters:** A TCO analysis that presents a single number looks precise but is
actually fragile. Showing ranges builds credibility and helps stakeholders understand
which assumptions matter most.

### TCO Summary Template

**TCO Analysis: [Project/Migration Name]**

**Comparison:** [Current state] vs. [Proposed state]
**Time horizon:** [X] years
**Prepared by:** [Name]
**Date:** [Date]

**Executive Summary:**

| | Year 1 | Year 2 | Year 3 | 3-Year Total |
|---|---|---|---|---|
| Current state | $X | $X | $X | $X |
| Proposed state | $X | $X | $X | $X |
| Net savings (cost) | $X | $X | $X | $X |
| Migration cost (one-time) | $X | — | — | $X |
| **Net position** | **$X** | **$X** | **$X** | **$X** |

**Break-even point:** [Month X]

**Key assumptions:** [Top 3 that most affect the result]

**Recommendation:** [What to do and why, including which assumptions would change the recommendation]

## ⚠️ Gotchas

- Comparing sticker prices instead of total cost — managed services look expensive until you factor in ops labor
- Ignoring migration costs — the transition itself has real cost that affects ROI timeline
- Using list prices when negotiated pricing is available — always model with realistic pricing
- Not accounting for growth — a cost comparison at current scale may flip at 2x scale
- Presenting a single number — ranges and sensitivity analysis are more honest and more useful
- Forgetting opportunity cost — "what could the team build if they weren't maintaining this?"
- Not revisiting the model — TCO should be recalculated 6-12 months post-migration against actuals

## 🔗 Links

- [Cloud Cost Comparison](cloud-cost-comparison.md)
- [Cost Optimization](optimization.md)
- [Migration Assessment](../migration/assessment.md)
- [Executive Summary Template](../business-value/executive-summary-template.md)
- [Well-Architected Review](../architecture/well-architected.md)
