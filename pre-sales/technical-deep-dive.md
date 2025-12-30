## Technical Deep-Dive / Architecture Review

### Context

You're past the initial discovery call and need to understand their technical architecture,
integration points, and constraints in detail. This happens before scoping a POC or
implementation - you're mapping their world to ours.

### Pre-Call Checklist

- [ ] Review discovery notes and identify gaps
- [ ] Understand what they're trying to solve (the "why")
- [ ] Know who's attending - architects, engineers, security?
- [ ] Prepare architecture diagrams or reference materials
- [ ] Have integration questions ready
- [ ] Block time after for notes and follow-up

### Architecture Review Framework

**Current State**

- What does their current architecture look like? (Ask for diagrams)
- What are the key components and how do they interact?
- What's the data flow? Where does data originate and where does it go?
- What are the performance requirements? (latency, throughput, scale)
- What's the current pain point they're trying to solve?

**Integration Points**

- What systems need to integrate with this solution?
- Are there APIs we need to consume or expose?
- What's the authentication/authorization model?
- Are there data format requirements? (schemas, protocols)
- What's the expected transaction volume or load?

**Infrastructure Details**

- Kubernetes version and distribution (if applicable)
- Network topology - what can talk to what?
- Storage requirements and constraints
- Resource limits (CPU, memory, quotas)
- Monitoring and observability stack

**Security & Compliance**

- What security controls are in place?
- Are there network policies or service mesh requirements?
- What's the data classification? (PII, PHI, etc.)
- Are there audit or logging requirements?
- Who needs to approve architecture changes?

**Operational Model**

- How do they deploy today? (CI/CD, manual, etc.)
- What's their change management process?
- Who's on-call? What's the escalation path?
- How do they handle rollbacks?
- What's their backup and disaster recovery strategy?

### During the Call

- Ask for architecture diagrams - visual is better than verbal
- Map their terminology to ours ("So when you say X, that's like our Y?")
- Identify constraints early - don't discover them during POC
- Ask "what happens if..." questions to understand failure modes
- Note any red flags or concerns they raise

### Post-Call Checklist

- [ ] Document architecture and integration points
- [ ] Identify technical risks or blockers
- [ ] Map their requirements to our capabilities
- [ ] Share findings with sales and engineering
- [ ] Determine if POC is feasible and what it should cover

### Gotchas

- "It's standard Kubernetes" - dig deeper, distributions differ significantly
- Missing integration requirements - ask explicitly about every system that touches this
- Performance assumptions - get numbers, not "it needs to be fast"
- Security theater vs. real requirements - understand what's policy vs. actual need
- Architecture diagrams are outdated - verify what's actually running

### Links

- [Discovery Call](discovery.md)
- [POC Scoping](poc-scoping.md)
- [Environment Guides](../environments/)

