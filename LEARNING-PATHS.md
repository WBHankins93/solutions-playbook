# SE Operational Learning Paths

An operational skill development guide for Solutions Engineers. This focuses on customer engagement, scoping, communication, and SE processes.

> **Technical Skills:** For hands-on deployment labs and technical patterns, see [implementation-studio](https://github.com/WBHankins93/implementation-studio) and [DevOps-Studio](https://github.com/WBHankins93/devops-studio).

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
- [Integration: Operational + Technical Skills](#integration-operational--technical-skills)
- [Recommended Learning Sequence](#recommended-learning-sequence)
- [Skill Progression Indicators](#skill-progression-indicators)
- [Additional Resources](#additional-resources)
- [Progress Tracking](#progress-tracking)
- [Tips for Effective Learning](#tips-for-effective-learning)

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
- [Environment Guides](environments/) (all of them)

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

**Learn:**

- POC scoping that prevents scope creep
- Execution in constrained environments
- Success criteria definition
- When to say no or push back

**Read:**

- [POC Scoping](pre-sales/poc-scoping.md)
- [POC Execution](pre-sales/poc-execution.md)
- [Scope Creep Management](recovery/scope-creep.md)
- [POC Recovery](recovery/poc-recovery.md)

**Practice:**

- Lead 2-3 POCs end-to-end (scoping to validation)
- Document lessons learned using [Retrospective Template](templates/retrospective.md)
- Handle scope change requests
- Present POC results to stakeholders

**Technical Bridge:**

- Complete [implementation-studio labs](https://github.com/WBHankins93/implementation-studio) that match your POC environments
- Practice deployment patterns you'll use in POCs

**Self-Check:**

- [ ] Can you scope a POC realistically?
- [ ] Do you prevent or manage scope creep effectively?
- [ ] Can you validate success criteria objectively?
- [ ] Do you document learnings for future POCs?

---

### Phase 2: Implementation Excellence (Month 3-4)

**Learn:**

- Implementation planning and kickoff
- Troubleshooting systematically
- Customer handoff and enablement
- Creating production-ready documentation

**Read:**

- [Implementation Kickoff](implementation/kickoff.md)
- [Mid-Implementation Checkpoint](implementation/mid-implementation.md)
- [Troubleshooting](implementation/troubleshooting.md)
- [Customer Handoff](implementation/handoff.md)

**Practice:**

- Lead implementation from kickoff to handoff
- Use [Kickoff Agenda Template](templates/kickoff-agenda.md)
- Create handoff documentation using [Handoff Template](templates/handoff-document.md)
- Practice troubleshooting under time pressure

**Technical Bridge:**

- Work through all [implementation-studio labs](https://github.com/WBHankins93/implementation-studio)
- Focus on labs that match environments you deploy to most

**Self-Check:**

- [ ] Can you plan implementation phases effectively?
- [ ] Do you troubleshoot systematically (not randomly)?
- [ ] Can you enable customers for day-2 operations?
- [ ] Do you create clear, usable documentation?

---

### Phase 3: Environment Specialization (Month 5-6)

**Learn:**

- Deep expertise in 2-3 environment types
- Unique constraints and patterns for each
- How to recognize environment type early in discovery
- Best practices for each scenario

**Read:**

- [Air-Gapped Deployment](environments/air-gapped.md)
- [Private Cluster](environments/private-cluster.md)
- [Firewall-Restricted](environments/firewall-restricted.md)
- [Multi-Tenant](environments/multi-tenant.md)
- [Hybrid Cloud + On-Prem](environments/hybrid.md)

**Practice:**

- Choose 2-3 environments to specialize in
- Lead deployments in each environment type
- Document your own patterns and gotchas
- Build reference implementations

**Technical Bridge:**

- Deep-dive on relevant [implementation-studio labs](https://github.com/WBHankins93/implementation-studio)
- Complete labs multiple times to build muscle memory
- Experiment with variations and edge cases

**Self-Check:**

- [ ] Can you identify environment type quickly in discovery?
- [ ] Do you know the unique constraints for your specializations?
- [ ] Can you adjust your approach based on environment?
- [ ] Have you documented patterns for your specialized environments?

---

## Learning Path 3: Advanced

**Target:** 18+ months SE experience  
**Goal:** Handle enterprise complexity, mentor others, drive process improvements

### Phase 1: Recovery & Escalation Mastery

**Learn:**

- De-escalation techniques
- When to escalate vs. resolve independently
- Maintaining customer trust under pressure
- Strategic communication during crises

**Read:**

- [Demo Recovery](recovery/demo-recovery.md)
- [POC Recovery](recovery/poc-recovery.md)
- [Escalation Management](recovery/escalation.md)
- [Getting Unstuck](recovery/stuck.md)

**Practice:**

- Review past escalations (yours or team's)
- Role-play difficult scenarios
- Lead recovery efforts on troubled engagements
- Document recovery patterns

**Self-Check:**

- [ ] Can you recover from major demo/POC failures?
- [ ] Do you handle escalations professionally?
- [ ] Can you maintain relationships through difficulty?
- [ ] Do you know when to escalate vs. resolve?

---

### Phase 2: Strategic Customer Engagement

**Learn:**

- Understanding business drivers beyond technical needs
- Navigating complex stakeholder landscapes
- Aligning technical solutions with business outcomes
- Building long-term strategic relationships

**Focus Areas:**

- Reading between the lines in discovery
- Identifying political dynamics
- Influencing without authority
- Executive-level communication

**Practice:**

- Lead enterprise-level engagements
- Present to C-level stakeholders
- Drive multi-quarter customer relationships
- Identify business outcomes, not just technical requirements

**Self-Check:**

- [ ] Do you understand customer's business beyond tech?
- [ ] Can you navigate complex political situations?
- [ ] Can you influence without authority?
- [ ] Do you build strategic relationships?

---

### Phase 3: Process & Team Building

**Learn:**

- How to document and systemize SE work
- Mentoring and training junior SEs
- Building SE processes for growing teams
- Identifying and implementing improvements

**Focus Areas:**

- Creating reusable frameworks
- Building team knowledge base
- Effective mentoring techniques
- Process improvement methodologies

**Practice:**

- Mentor 1-2 junior SEs
- Contribute to team playbooks
- Lead process improvement initiatives
- Document lessons learned systematically

**Self-Check:**

- [ ] Can you mentor effectively?
- [ ] Do you document learnings for the team?
- [ ] Have you improved SE processes?
- [ ] Do you contribute to team knowledge base?

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

- "SPIN Selling" by Neil Rackham - Discovery and consultative selling
- "The Challenger Sale" - Understanding customer engagement
- "The Sales Engineer's Handbook" - SE fundamentals (if available)

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

SE work is both art and science. The frameworks in this playbook provide structure, but you'll develop your own style through experience. What matters most is:

- **Listen more than you talk** in discovery
- **Practice more than you think you need** for demos
- **Document more than feels necessary** during implementation
- **Communicate more than seems required** with customers and team
- **Learn from every engagement** - especially the difficult ones

The best SEs combine deep technical knowledge with strong operational skills and excellent communication. This playbook helps you develop the operational side. Keep building the technical side with [implementation-studio](https://github.com/WBHankins93/implementation-studio) and [DevOps-Studio](https://github.com/WBHankins93/devops-studio).

Now go use this stuff.

