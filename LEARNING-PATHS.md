---
tags:
  - implementation
  - customer-facing
---

# Solutions Playbook Learning Paths

An operational skill development guide for Solutions Engineers and Solutions Architects. SE paths focus on customer engagement, scoping, communication, and SE processes. The SA path covers architecture design, migration strategy, cost modeling, compliance, and stakeholder management.

> **Technical Skills:** For hands-on deployment labs and technical patterns, see [implementation-studio](https://github.com/WBHankins93/implementation-studio) and [DevOps-Studio](https://github.com/WBHankins93/devops-studio).

---

## Quick Overview

This guide provides structured learning paths for SE operational skills—the "when" and "how" of applying technical knowledge in customer engagements.

**If you're new to SE:** Start with Foundations (8 weeks). Learn discovery, demos, and basic engagement management.

**If you have 6-12 months experience:** Jump to Practitioner. Master POC execution, implementation, and environment specialization.

**If you have 18+ months:** Focus on Advanced. Develop recovery expertise, strategic engagement, and team leadership.

Each path includes playbook resources to read, implementation-studio labs to practice, self-check questions, and time estimates. The full guide is comprehensive (~20 min read), but use it as a reference. Jump to your level using the Table of Contents below.

---

## Table of Contents

- [How This Works](#how-this-works)
- [Self-Assessment](#self-assessment)
- [Learning Path 1: Foundations](#learning-path-1-foundations)
  - [Phase 1: Understanding the SE Role](#phase-1-understanding-the-se-role-week-1-2)
  - [Phase 2: Discovery & Requirements Gathering](#phase-2-discovery--requirements-gathering-week-3-4)
  - [Phase 3: Technical Deep-Dives](#phase-3-technical-deep-dives-week-5-6)
  - [Phase 4: Demos & Presentations](#phase-4-demos--presentations-week-7-8)
- [Learning Path 2: Practitioner](#learning-path-2-practitioner)
  - [Phase 1: POC Mastery](#phase-1-poc-mastery-month-1-2)
  - [Phase 2: Implementation Excellence](#phase-2-implementation-excellence-month-3-4)
  - [Phase 3: Environment Specialization](#phase-3-environment-specialization-month-5-6)
- [Learning Path 3: Advanced](#learning-path-3-advanced)
  - [Phase 1: Recovery & Escalation Mastery](#phase-1-recovery--escalation-mastery)
  - [Phase 2: Strategic Customer Engagement](#phase-2-strategic-customer-engagement)
  - [Phase 3: Process & Team Building](#phase-3-process--team-building)
- [Learning Path 4: Solutions Architect](#learning-path-4-solutions-architect)
  - [Phase 1: Architecture Fundamentals](#phase-1-architecture-fundamentals-month-1-2)
  - [Phase 2: Migration & Cost Strategy](#phase-2-migration--cost-strategy-month-3-4)
  - [Phase 3: Compliance & Patterns](#phase-3-compliance--patterns-month-5-6)
  - [Phase 4: Stakeholder Leadership](#phase-4-stakeholder-leadership-month-7-8)
- [Integration: Operational + Technical Skills](#integration-operational--technical-skills)
- [Recommended Learning Sequence](#recommended-learning-sequence)
- [Skill Progression Indicators](#skill-progression-indicators)
- [Additional Resources](#additional-resources)
- [Progress Tracking](#progress-tracking)
- [Tips for Effective Learning](#tips-for-effective-learning)

---

**Quick Start:**

- [I'm new to SE → Foundations](#learning-path-1-foundations)
- [I have 6-12 months experience → Practitioner](#learning-path-2-practitioner)
- [I have 18+ months experience → Advanced](#learning-path-3-advanced)
- [I'm targeting Solutions Architect roles → SA Path](#learning-path-4-solutions-architect)
- [Show me how playbook + studio work together → Integration Table](#integration-operational--technical-skills)

---

## How This Works

**Two Types of SE Skills:**

1. **Technical Skills** (implementation-studio, DevOps-Studio)
   - How to deploy Kubernetes
   - How to configure Helm
   - How to work with constrained environments
   - Infrastructure and platform engineering

2. **Operational Skills** (this guide)
   - When to apply technical knowledge with customers
   - How to scope engagements
   - How to communicate constraints
   - How to recover from failures

**You need both.** This guide helps you develop the operational side.

---

## Self-Assessment

Rate yourself honestly (1-5) in each area:

- **1:** No experience
- **2:** Have done this 1-2 times with guidance
- **3:** Can do this independently
- **4:** Can handle complex scenarios
- **5:** Can mentor others

### Customer Interaction

- [ ] Running discovery calls
- [ ] Conducting technical architecture reviews
- [ ] Delivering product demos
- [ ] Scoping POCs
- [ ] Executing POCs

### Implementation

- [ ] Planning implementation kickoffs
- [ ] Troubleshooting in customer environments
- [ ] Customer handoff and enablement
- [ ] Creating documentation and runbooks

### Environment Expertise

- [ ] Air-gapped deployments
- [ ] Private cluster scenarios
- [ ] Firewall-restricted environments
- [ ] Multi-tenant architectures
- [ ] Hybrid cloud + on-prem

### Recovery & Communication

- [ ] Demo failure recovery
- [ ] POC recovery
- [ ] Escalation management
- [ ] Scope management
- [ ] Internal coordination (sales, engineering)

**Path Selection:**

- Mostly 1-2: Start with **Foundations Path**
- Mostly 3: Follow **Practitioner Path**
- Mostly 4-5: Focus on **Advanced Path**

---

## Learning Path 1: Foundations

**Target:** New to SE work (0-6 months experience)  
**Goal:** Build confidence in basic customer interactions and SE workflows

### Phase 1: Understanding the SE Role (Week 1-2)

**Learn:**

- What an SE does vs. sales, support, implementation
- The SE engagement lifecycle
- How to prepare for customer interactions

**Read:**

- [New Customer Engagement](engagements/new-customer.md)
- [Joining Existing Engagement](engagements/joining-existing.md)
- [Pre-call Prep](internal/pre-call-prep.md)

**Practice:**

- Shadow 2-3 experienced SEs on calls
- Review past engagement notes in CRM
- Practice with [New Customer Engagement](engagements/new-customer.md) framework

**Self-Check:**

- [ ] Can you explain the SE role to someone outside tech?
- [ ] Do you know when SE gets involved in a deal?
- [ ] Can you identify stakeholders in a typical engagement?

---

### Phase 2: Discovery & Requirements Gathering (Week 3-4)

**Learn:**

- How to run a discovery call
- What questions to ask (and why)
- How to identify red flags early
- How to document findings

**Read:**

- [Discovery Call](pre-sales/discovery.md)
- [Discovery Questions Template](templates/discovery-questions.md)
- [Technical Deep-Dive](pre-sales/technical-deep-dive.md)

**Practice:**

- Use [Discovery Call Framework](pre-sales/discovery.md) in mock scenarios
- Practice asking questions from [Discovery Questions](templates/discovery-questions.md)
- Record yourself doing mock discovery, review critically
- Shadow 3-5 real discovery calls

**Technical Bridge:**

- Complete [DevOps-Studio: Kubernetes Fundamentals](https://github.com/WBHankins93/devops-studio) to understand concepts you'll discuss
- Review [implementation-studio Lab 01](https://github.com/WBHankins93/implementation-studio/tree/main/labs/01-basics) for deployment basics

**Self-Check:**

- [ ] Can you run a 30-minute discovery call confidently?
- [ ] Do you capture technical requirements accurately?
- [ ] Can you identify constraints (air-gapped, private, etc.) during discovery?
- [ ] Do you know when to escalate or ask for help?

---

### Phase 3: Technical Deep-Dives (Week 5-6)

**Learn:**

- How to review customer architecture
- Integration point identification
- Security and compliance considerations
- Mapping customer needs to product capabilities

**Read:**

- [Technical Deep-Dive](pre-sales/technical-deep-dive.md)
- [Environment Guides](CONTENT-INDEX.md#environment-guides) (all of them)

**Practice:**

- Review reference architectures
- Map customer terminology to your product
- Practice creating architecture diagrams
- Identify constraints and dependencies

**Technical Bridge:**

- Deep-dive on [implementation-studio](https://github.com/WBHankins93/implementation-studio) for environment types you'll encounter:
  - [Lab 02: Air-Gapped Deployment](https://github.com/WBHankins93/implementation-studio/tree/main/labs/02-airgapped-deployment)
  - [Lab 03: Private Cluster](https://github.com/WBHankins93/implementation-studio/tree/main/labs/03-private-cluster)
  - [Lab 04: Firewall-Restricted](https://github.com/WBHankins93/implementation-studio/tree/main/labs/04-firewall-restricted)

**Self-Check:**

- [ ] Can you create/review architecture diagrams?
- [ ] Do you understand common integration patterns?
- [ ] Can you identify technical constraints early?
- [ ] Do you know which environment guide applies to each scenario?

---

### Phase 4: Demos & Presentations (Week 7-8)

**Learn:**

- Demo preparation and execution
- How to tailor demos to audience
- Handling questions and objections
- Recovery when things go wrong

**Read:**

- [Demo Framework](pre-sales/demo.md)
- [Demo Recovery](recovery/demo-recovery.md)

**Practice:**

- Practice demo flow 5-10 times
- Record yourself, review critically
- Prepare backup plans (recorded demo, screenshots)
- Practice with different audience types (technical, executive, mixed)

**Self-Check:**

- [ ] Can you demo confidently without reading scripts?
- [ ] Do you tailor demos to audience needs?
- [ ] Do you recover gracefully from failures?
- [ ] Can you handle questions without derailing the demo?

---

## Learning Path 2: Practitioner

**Target:** 6-18 months SE experience  
**Goal:** Handle full engagement cycles independently

### Phase 1: POC Mastery (Month 1-2)

**Focus:** POC scoping and execution without scope creep

**Resources:** [POC Scoping](pre-sales/poc-scoping.md) | [POC Execution](pre-sales/poc-execution.md) | [Scope Creep](recovery/scope-creep.md) | [POC Recovery](recovery/poc-recovery.md)

**Practice:** Lead 2-3 POCs end-to-end, document learnings using [Retrospective Template](templates/retrospective.md), handle scope changes, present results to stakeholders

**Technical Bridge:** [Implementation-studio labs](https://github.com/WBHankins93/implementation-studio) matching your POC environments

**Self-Check:** Can you scope realistically, prevent scope creep, and validate success criteria?

---

### Phase 2: Implementation Excellence (Month 3-4)

**Focus:** Implementation planning, troubleshooting, and customer handoff

**Resources:** [Implementation Kickoff](implementation/kickoff.md) | [Mid-Implementation Checkpoint](implementation/mid-implementation.md) | [Troubleshooting](implementation/troubleshooting.md) | [Customer Handoff](implementation/handoff.md)

**Practice:** Lead implementation from kickoff to handoff, use [Kickoff Agenda Template](templates/kickoff-agenda.md), create [Handoff Documentation](templates/handoff-document.md)

**Technical Bridge:** Work through all [implementation-studio labs](https://github.com/WBHankins93/implementation-studio) matching your deployment environments

**Self-Check:** Can you plan phases effectively, troubleshoot systematically, enable customers for day-2 operations, and create clear documentation?

---

### Phase 3: Environment Specialization (Month 5-6)

**Focus:** Deep expertise in 2-3 environment types, recognizing constraints early, best practices per scenario

**Resources:** [Air-Gapped](environments/air-gapped.md) | [Private Cluster](environments/private-cluster.md) | [Firewall-Restricted](environments/firewall-restricted.md) | [Multi-Tenant](environments/multi-tenant.md) | [Hybrid Cloud](environments/hybrid.md)

**Practice:** Choose 2-3 environments to specialize in, lead deployments in each, document patterns and gotchas

**Technical Bridge:** Deep-dive on relevant [implementation-studio labs](https://github.com/WBHankins93/implementation-studio), complete multiple times, experiment with edge cases

**Self-Check:** Can you identify environment type quickly in discovery, know unique constraints, adjust approach, and document patterns?

---

## Learning Path 3: Advanced

**Target:** 18+ months SE experience  
**Goal:** Handle enterprise complexity, mentor others, drive process improvements

### Phase 1: Recovery & Escalation Mastery

**Focus:** De-escalation techniques, when to escalate vs. resolve, maintaining customer trust under pressure, strategic crisis communication

**Resources:** [Demo Recovery](recovery/demo-recovery.md) | [POC Recovery](recovery/poc-recovery.md) | [Escalation Management](recovery/escalation.md) | [Getting Unstuck](recovery/stuck.md)

**Practice:** Review past escalations, role-play difficult scenarios, lead recovery efforts on troubled engagements, document recovery patterns

**Self-Check:** Can you recover from major failures, handle escalations professionally, maintain relationships through difficulty, and know when to escalate vs. resolve?

---

### Phase 2: Strategic Customer Engagement

**Focus:** Understanding business drivers, navigating stakeholder landscapes, aligning solutions with outcomes, building strategic relationships

**Key Areas:** Reading between the lines in discovery, identifying political dynamics, influencing without authority, executive-level communication

**Practice:** Lead enterprise engagements, present to C-level, drive multi-quarter relationships, identify business outcomes beyond technical requirements

**Self-Check:** Do you understand customer's business beyond tech, navigate complex politics, influence without authority, and build strategic relationships?

---

### Phase 3: Process & Team Building

**Focus:** Documenting and systemizing SE work, mentoring junior SEs, building processes for growing teams, implementing improvements

**Key Areas:** Creating reusable frameworks, building team knowledge base, effective mentoring, process improvement methodologies

**Practice:** Mentor 1-2 junior SEs, contribute to team playbooks, lead process improvements, document lessons systematically

**Self-Check:** Can you mentor effectively, document learnings for the team, improve SE processes, and contribute to team knowledge base?

---

## Learning Path 4: Solutions Architect

**Target:** SE practitioners transitioning to SA, or engineers moving into architecture roles
**Goal:** Lead architecture design, migration strategy, cost optimization, and stakeholder alignment at the executive level

**Prerequisites:** Solid foundation in SE skills (Paths 1-2 minimum), or equivalent engineering experience with customer-facing work.

### Phase 1: Architecture Fundamentals (Month 1-2)

**Focus:** Design reviews, reference architectures, Well-Architected Framework, architecture decision records

**Resources:**

- [Design Review](architecture/design-review.md) — How to evaluate architecture across reliability, security, scalability, cost, and operability
- [Reference Architectures](architecture/reference-architectures.md) — Building opinionated starting points for common patterns
- [Well-Architected Review](architecture/well-architected.md) — Structured assessment across the six pillars
- [ADR Template](architecture/adr-template.md) — Documenting decisions so they don't get relitigated

**Practice:**

- Conduct 2-3 architecture reviews (start with internal systems or open-source projects)
- Write ADRs for 3 non-trivial technology decisions
- Run a Well-Architected review on a system you know well
- Present findings to peers and iterate on your review approach

**Self-Check:**

- [ ] Can you evaluate an architecture across multiple dimensions without fixating on one?
- [ ] Do your recommendations include tradeoffs, not just "best practices"?
- [ ] Can you prioritize findings by business impact, not just technical severity?
- [ ] Do you document decisions with alternatives and rationale?

---

### Phase 2: Migration & Cost Strategy (Month 3-4)

**Focus:** Migration assessment, wave planning, cutover execution, TCO analysis, cloud cost comparison

**Resources:**

- [Migration Assessment](migration/assessment.md) — Inventory, dependency mapping, and the 7 R's
- [Migration Strategy](migration/strategy.md) — Wave planning, data migration, testing
- [Cutover Planning](migration/cutover-planning.md) — Runbooks, go/no-go criteria, rollback
- [Migration Risk Framework](migration/risk-framework.md) — Identifying and mitigating migration risks
- [TCO Framework](cost-modeling/tco-framework.md) — Full cost modeling with sensitivity analysis
- [Cloud Cost Comparison](cost-modeling/cloud-cost-comparison.md) — Apples-to-apples provider comparison
- [Cost Optimization](cost-modeling/optimization.md) — The optimization hierarchy from waste elimination to architecture changes

**Practice:**

- Build a TCO model for a real or hypothetical migration (3-year horizon with sensitivity analysis)
- Create a migration assessment for a multi-workload environment
- Design a wave plan with dependency-based sequencing
- Write a cutover runbook with rollback procedures

**Technical Bridge:**

- AWS Solutions Architect Associate (SAA-C03) — migration, cost optimization, and Well-Architected content aligns directly
- [implementation-studio labs](https://github.com/WBHankins93/implementation-studio) for hands-on environment migration practice

**Self-Check:**

- [ ] Can you build a credible TCO model that executives would use to make a decision?
- [ ] Do you understand the 7 R's and when each migration strategy applies?
- [ ] Can you plan a cutover that has a tested rollback path?
- [ ] Do you present cost analysis with ranges and assumptions, not single numbers?

---

### Phase 3: Compliance & Patterns (Month 5-6)

**Focus:** Regulatory mapping, security architecture, data residency, and core architecture patterns

**Resources:**

- [Regulatory Mapping](compliance/regulatory-mapping.md) — Translating HIPAA, FedRAMP, SOC 2, GDPR, PCI DSS into architecture decisions
- [Security Architecture](compliance/security-architecture.md) — Defense in depth across identity, network, data, application, and detection layers
- [Data Residency](compliance/data-residency.md) — Geographic constraints and their architectural implications
- [Microservices](patterns/microservices.md) — When to decompose, communication patterns, resilience, observability
- [Event-Driven](patterns/event-driven.md) — Messaging patterns, delivery guarantees, technology selection
- [Data Mesh](patterns/data-mesh.md) — Decentralized data ownership and self-serve infrastructure
- [API Gateway](patterns/api-gateway.md) — Routing, aggregation, BFF, versioning, technology selection

**Practice:**

- Map a regulatory requirement (pick one: HIPAA, SOC 2, or GDPR) to concrete architecture controls
- Design a security architecture for a multi-tier application using defense-in-depth
- Evaluate a microservices architecture for distributed monolith smells
- Select and justify a messaging technology for a specific use case

**Self-Check:**

- [ ] Can you translate a regulatory requirement into an architectural decision without over-engineering?
- [ ] Do you understand defense-in-depth well enough to review a customer's security posture?
- [ ] Can you recommend when microservices are NOT the right choice?
- [ ] Do you choose architecture patterns based on constraints, not trends?

---

### Phase 4: Stakeholder Leadership (Month 7-8)

**Focus:** Executive communication, cross-team coordination, CTO-level conversations

**Resources:**

- [Executive Alignment](stakeholder-management/executive-alignment.md) — Framing technical decisions as business decisions
- [Cross-Team Coordination](stakeholder-management/cross-team-coordination.md) — RACI, conflict resolution, meeting facilitation
- [CTO Conversations](stakeholder-management/cto-conversations.md) — Strategic questions, company-stage awareness, building advisory relationships

**Practice:**

- Prepare and deliver an executive brief for an architecture recommendation (use the template)
- Facilitate a cross-team design decision with competing priorities
- Conduct a CTO-level conversation where you lead with strategic questions, not technical details
- Build a stakeholder map for a multi-team initiative and define the RACI

**Self-Check:**

- [ ] Can you present architecture recommendations in business terms (revenue, cost, risk, speed)?
- [ ] Do you lead with a recommendation, not just options?
- [ ] Can you facilitate cross-team alignment without having authority over any team?
- [ ] Do CTOs and VPs treat you as a thinking partner, not just a technical resource?

---

## Skill Progression: SE to SA

You're ready to start the SA path when you can:

- Lead customer engagements end-to-end (SE Practitioner level)
- Think beyond "does our product solve this?" to "what's the right architecture?"
- Translate technical decisions into business impact
- Influence without authority across teams

You've completed the SA path when you can:

- Conduct design reviews that executives act on
- Build migration strategies with credible cost models
- Navigate compliance requirements without over-engineering
- Hold your own in a CTO conversation about technical strategy

---

## Integration: Operational + Technical Skills

This table shows how to combine SE Playbook (operational) with implementation-studio (technical) for common scenarios:

| SE Scenario | Playbook Resource | Implementation-Studio Lab |
|-------------|-------------------|---------------------------|
| Discovery reveals air-gapped environment | [Air-Gapped Guide](environments/air-gapped.md) | [Lab 02: Air-Gapped Deployment](https://github.com/WBHankins93/implementation-studio/tree/main/labs/02-airgapped-deployment) |
| Need to scope POC for private cluster | [POC Scoping](pre-sales/poc-scoping.md) + [Private Cluster](environments/private-cluster.md) | [Lab 03: Private Cluster](https://github.com/WBHankins93/implementation-studio/tree/main/labs/03-private-cluster) |
| Customer has firewall restrictions | [Firewall-Restricted Guide](environments/firewall-restricted.md) | [Lab 04: Firewall-Restricted Environment](https://github.com/WBHankins93/implementation-studio/tree/main/labs/04-firewall-restricted) |
| Planning hybrid cloud + on-prem deployment | [Hybrid Guide](environments/hybrid.md) | [Lab 05: Hybrid Cloud Deployment](https://github.com/WBHankins93/implementation-studio/tree/main/labs/05-hybrid-cloud) |
| Troubleshooting during implementation | [Troubleshooting Framework](implementation/troubleshooting.md) | Relevant lab for environment type |
| Demo breaks during customer call | [Demo Recovery](recovery/demo-recovery.md) | Practice demo in lab environment |

**The Pattern:**

1. **Playbook:** Understand WHEN/WHY (customer context, communication, scoping)
2. **Implementation-Studio:** Learn HOW (technical execution, deployment patterns)
3. **Apply:** Combine both in real customer scenarios

---

## Recommended Learning Sequence

### Month 1: Foundations

**Playbook:**
- Discovery Call framework
- Demo framework
- Pre-call prep

**Technical:**
- DevOps-Studio: Kubernetes basics
- [implementation-studio: Lab 01](https://github.com/WBHankins93/implementation-studio/tree/main/labs/01-basics)

**Practice:**
- Shadow 5+ customer calls
- Practice mock demos

---

### Month 2: POC Skills

**Playbook:**
- POC Scoping
- POC Execution
- Scope Creep Management

**Technical:**
- [implementation-studio: Labs 02-03](https://github.com/WBHankins93/implementation-studio) ([Lab 02: Air-Gapped](https://github.com/WBHankins93/implementation-studio/tree/main/labs/02-airgapped-deployment), [Lab 03: Private Cluster](https://github.com/WBHankins93/implementation-studio/tree/main/labs/03-private-cluster))
- Focus on constrained environments

**Practice:**
- Lead 1-2 POCs with support
- Document lessons learned

---

### Month 3: Implementation

**Playbook:**
- Implementation Kickoff
- Troubleshooting
- Customer Handoff

**Technical:**
- [implementation-studio: Labs 04-05](https://github.com/WBHankins93/implementation-studio) ([Lab 04: Firewall-Restricted](https://github.com/WBHankins93/implementation-studio/tree/main/labs/04-firewall-restricted), [Lab 05: Hybrid Cloud](https://github.com/WBHankins93/implementation-studio/tree/main/labs/05-hybrid-cloud))
- Complex deployment scenarios

**Practice:**
- Lead implementation end-to-end
- Create handoff documentation

---

### Ongoing: Advanced Skills

**Playbook:**
- All Recovery scenarios
- Internal Coordination
- Process improvement

**Technical:**
- Deep-dive on specialized environments
- Create your own reference implementations

**Practice:**
- Mentor junior SEs
- Handle enterprise complexity
- Build team processes

---

## Skill Progression Indicators

### Foundations → Practitioner

You're ready to move from Foundations to Practitioner when you can:

- Run discovery calls independently
- Deliver demos confidently
- Identify environment constraints during discovery
- Handle basic troubleshooting

### Practitioner → Advanced

You're ready to move from Practitioner to Advanced when you can:

- Scope and execute POCs independently
- Lead implementations end-to-end
- Handle recovery scenarios without guidance
- Mentor others effectively

---

## Additional Resources

### Related Learning Platforms

- [implementation-studio](https://github.com/WBHankins93/implementation-studio) - Technical deployment patterns and hands-on labs
- [DevOps-Studio](https://github.com/WBHankins93/devops-studio) - DevOps fundamentals and tooling

### Books (Optional)

**SE Focus:**
- "SPIN Selling" by Neil Rackham - Discovery and consultative selling
- "The Challenger Sale" - Understanding customer engagement
- "The Sales Engineer's Handbook" - SE fundamentals (if available)

**SA Focus:**
- "Fundamentals of Software Architecture" by Richards & Ford - Architecture thinking, patterns, and trade-off analysis
- "Designing Data-Intensive Applications" by Martin Kleppmann - Data systems architecture and distributed systems
- "The Art of Leadership" by Michael Lopp - Influencing without authority, technical leadership
- "Software Architecture: The Hard Parts" by Ford, Richards, Sadalage, Dehghani - Decomposition, integration, and decision-making

### Communities

- r/sysadmin - Infrastructure and SRE perspective
- r/devops - DevOps community discussions
- Solutions Engineering Slack groups
- PreSales Collective communities

### Internal Resources

- Shadow senior SEs on calls
- Review past engagement documentation
- Participate in team retrospectives
- Ask questions in team channels

---

## Progress Tracking

Create a simple tracker to monitor your development:

| Competency | Current Level | Target Level | Next Action | Target Date |
|------------|---------------|--------------|-------------|-------------|
| Discovery Calls | 2 | 4 | Lead 5 discovery calls | Mar 2025 |
| POC Scoping | 3 | 4 | Scope and execute 3 POCs | Jun 2025 |
| Air-Gapped Deployments | 1 | 3 | Complete Lab 02, lead 1 deployment | Apr 2025 |
| Demo Recovery | 2 | 4 | Practice recovery scenarios 10x | Feb 2025 |
| Troubleshooting | 3 | 5 | Mentor 2 junior SEs on troubleshooting | Sep 2025 |

**Review Schedule:**

- Weekly: Check progress on current actions
- Monthly: Update next actions based on learnings
- Quarterly: Reassess levels and adjust targets

---

## Tips for Effective Learning

1. **Apply Immediately**: Use frameworks in real engagements, not just practice
2. **Document Everything**: Keep notes on what works and what doesn't
3. **Get Feedback**: Ask customers and colleagues for honest input
4. **Reflect Regularly**: Use [Retrospective Template](templates/retrospective.md) after each engagement
5. **Teach Others**: Best way to solidify your own understanding
6. **Build Incrementally**: Don't try to master everything at once
7. **Stay Technical**: Keep doing [implementation-studio](https://github.com/WBHankins93/implementation-studio) labs even as you advance

---

## Remember

Solutions work — whether SE or SA — is both art and science. The frameworks in this playbook provide structure, but you'll develop your own style through experience. What matters most is:

- **Listen more than you talk** in discovery
- **Practice more than you think you need** for demos and design reviews
- **Document more than feels necessary** during implementation and architecture decisions
- **Communicate more than seems required** with customers, team, and executives
- **Learn from every engagement** — especially the difficult ones
- **Name the tradeoffs** — the best SAs don't just recommend, they explain what the recommendation costs

The best solutions professionals combine deep technical knowledge with strong operational skills, excellent communication, and the ability to translate technology into business outcomes. This playbook helps you develop all of those dimensions. Keep building the technical side with [implementation-studio](https://github.com/WBHankins93/implementation-studio) and [DevOps-Studio](https://github.com/WBHankins93/devops-studio).

Now go use this stuff.

