---
tags:
  - architecture
  - customer-facing
  - cost
---

## Cost Optimization

## 📝 Context

The customer's cloud bill is higher than expected, or they want to reduce costs without
sacrificing reliability or performance. Cost optimization is not a one-time project — it's
an ongoing practice that should be embedded in how architecture decisions are made.

## 📋 Optimization Assessment Checklist

- [ ] Get access to billing data (cost explorer, billing console, or exported reports)
- [ ] Identify the top 10 cost drivers by service
- [ ] Check for idle or underutilized resources
- [ ] Review commitment discount coverage
- [ ] Assess storage lifecycle policies
- [ ] Check for non-production environments running 24/7
- [ ] Review data transfer costs for optimization opportunities
- [ ] Identify tagging gaps that prevent cost attribution

## 🎯 Optimization Framework

### The Optimization Hierarchy

Work through these in order. Each level builds on the previous:

**Level 1: Eliminate Waste (Quick Wins)**

These are resources you're paying for but not using:

- Unattached storage volumes (EBS volumes with no instance)
- Idle load balancers with no targets
- Stopped instances with attached storage still incurring cost
- Old snapshots and AMIs beyond retention period
- Unused Elastic IPs
- Orphaned resources from deleted stacks
- Development/staging environments running 24/7

**Expected savings:** 10-30% of current spend, achievable in days to weeks.

**Level 2: Right-Size (Moderate Effort)**

Resources provisioned larger than needed:

- Instances with sustained utilization below 40%
- Over-provisioned databases (CPU, memory, IOPS)
- Storage volumes with more IOPS than consumed
- Memory-optimized instances running CPU-bound workloads (or vice versa)
- Container resource requests significantly exceeding actual usage

**How to right-size:**
1. Collect 2-4 weeks of utilization metrics (CPU, memory, network, disk)
2. Identify instances where peak utilization is below 50%
3. Model the next-smaller instance type
4. Test in non-production first
5. Implement with monitoring to catch under-sizing

**Expected savings:** 15-40% on compute, achievable in weeks.

**Level 3: Commitment Discounts (Significant Savings)**

Trade flexibility for lower rates:

| Mechanism | Discount Range | Commitment | Best For |
| --- | --- | --- | --- |
| Reserved Instances (1yr) | 30-40% | Specific instance type and region | Stable, predictable workloads |
| Reserved Instances (3yr) | 50-60% | Specific instance type and region | Long-term, unchanging workloads |
| Savings Plans (1yr) | 20-30% | Dollar commitment, flexible usage | Variable workloads across instance families |
| Savings Plans (3yr) | 40-50% | Dollar commitment, flexible usage | Long-term with workload evolution |
| Spot Instances | 60-90% | Can be interrupted | Fault-tolerant batch, stateless workers |

**Commitment strategy:**
- Cover your baseline (always-on) workload with reserved/savings plans
- Use on-demand for variable load above baseline
- Use spot for fault-tolerant and interruptible workloads
- Start with 1-year commitments until you have confidence in workload stability

**Expected savings:** 30-60% on covered compute.

**Level 4: Architecture Changes (Highest Effort, Highest Impact)**

Redesign for cost efficiency:

- Move to serverless for intermittent workloads (pay-per-invocation vs. pay-per-hour)
- Implement caching to reduce database load and compute requirements
- Use event-driven processing instead of polling
- Consolidate microservices that don't need independent scaling
- Move infrequently accessed data to cheaper storage tiers
- Reduce cross-AZ traffic by co-locating tightly coupled services
- Use CDN to offload origin compute and reduce egress

**Expected savings:** Varies widely, but can be 50%+ for specific workloads.

### Cost Governance

Optimization isn't sustainable without governance:

**Tagging strategy:**
Every resource should be tagged with at minimum:
- `environment` (production, staging, development)
- `team` or `owner` (who's responsible)
- `project` or `workload` (what business function)
- `cost-center` (for chargeback/showback)

**Budget alerts:**
- Set budgets per environment, team, and workload
- Alert at 50%, 80%, 100%, and 120% of budget
- Assign owners to each budget who are responsible for action

**Regular reviews:**
- Weekly: Automated anomaly detection alerts reviewed
- Monthly: Top cost drivers reviewed, right-sizing recommendations assessed
- Quarterly: Commitment coverage reviewed and adjusted
- Annually: Architecture-level optimization opportunities evaluated

### Optimization Report Template

**Cost Optimization Assessment: [Customer Name]**

**Current monthly spend:** $X
**Projected optimized spend:** $X
**Estimated savings:** $X ([X]%)

**Findings by Priority:**

| # | Finding | Category | Monthly Savings | Effort | Risk |
|---|---------|----------|----------------|--------|------|
| 1 | [Finding] | Waste elimination | $X | Low | Low |
| 2 | [Finding] | Right-sizing | $X | Medium | Low |
| 3 | [Finding] | Commitments | $X | Low | Medium |
| 4 | [Finding] | Architecture | $X | High | Medium |

**Implementation Roadmap:**

| Phase | Timeline | Target Savings | Key Actions |
|-------|----------|---------------|-------------|
| Quick wins | Week 1-2 | $X/mo | Delete waste, schedule non-prod |
| Right-sizing | Week 3-6 | $X/mo | Resize top 10 instances |
| Commitments | Month 2 | $X/mo | Purchase RI/SP for baseline |
| Architecture | Month 3-6 | $X/mo | Implement caching, serverless |

## ⚠️ Gotchas

- Optimizing before understanding the workload — right-sizing a workload you're about to decommission is wasted effort
- Buying 3-year reservations for workloads that might change — start with 1-year until stable
- Cutting costs that affect reliability — don't remove redundancy to save money
- Ignoring data transfer optimization — egress and cross-AZ costs are often 10-20% of the bill
- Not tracking savings against baseline — if you can't measure it, you can't prove it
- One-time optimization without governance — costs drift back up without ongoing attention
- Optimizing in isolation — cost optimization should be part of architecture decisions, not a separate activity

## 🔗 Links

- [TCO Framework](tco-framework.md)
- [Cloud Cost Comparison](cloud-cost-comparison.md)
- [Well-Architected Review](../architecture/well-architected.md)
- [Executive Summary Template](../business-value/executive-summary-template.md)
