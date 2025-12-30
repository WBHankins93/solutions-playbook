## Discovery Call

## 📝 Context

You have a call scheduled with a prospect or new customer. The goal is to understand
their environment, constraints, timeline, and what success looks like to them -
before you scope or promise anything.

## 📋 Pre-Call Checklist

- [ ] Review any notes from sales (CRM, Slack, email threads)
- [ ] Understand what product/solution they're evaluating
- [ ] Check if there's existing documentation about this customer
- [ ] Know who's on the call and their roles
- [ ] Have your discovery questions ready (don't wing it)
- [ ] Test your screen share and demo environment if applicable
- [ ] Block time after the call for notes ⏱️ 15 min

## 🎯 Discovery Question Framework

**Environment & Infrastructure**

- What does your current deployment environment look like?
- Are you running Kubernetes? If so, what distribution?
- Is this environment air-gapped or network-restricted?
- What are your egress/ingress constraints?
- Do you have a container registry? Can it pull from external sources?
- What CI/CD tooling are you using today?

**Security & Compliance**

- Are there compliance requirements we should know about? (FedRAMP, SOC 2, ITAR, etc.)
- Who approves software for deployment? Is there a review process?
- What's your change management process look like?
- Are there restrictions on tooling or languages?

**Timeline & Stakeholders**

- What's driving the timeline for this evaluation?
- Who else needs to be involved in the decision?
- Is there a specific event or deadline we're working toward?
- Have you evaluated other solutions? What did you like or not like?

**Success Criteria**

- What does a successful POC look like to you?
- What would make you confident enough to move forward?
- Are there specific use cases or workflows you need to validate?
- What's the "must have" vs "nice to have"?

**Operational Readiness**

- Who will own this in production?
- What does your support model look like?
- What monitoring/observability tooling do you use?
- How do you handle upgrades and patching today?

### During the Call

- Let them talk. You're here to learn, not pitch.
- Take notes in real-time (or have someone else do it)
- Repeat back what you hear: "So if I understand correctly..."
- Don't commit to scope or timeline on the call
- Ask "what did I not ask that I should have?"

💡 Tip: Ask "what did I not ask that I should have?" before ending the call.

## 📋 Post-Call Checklist

- [ ] Write up notes within 24 hours
- [ ] Share summary with sales and internal team
- [ ] Identify any blockers or red flags
- [ ] Draft next steps and send follow-up email to customer
- [ ] Update CRM/tracking system

## ⚠️ Gotchas

- The "we're cloud-native" trap - often means constraints exist anyway
- Talking to the wrong person - know who decides vs. who evaluates
- Assuming environment access - always ask explicitly
- Skipping the "why now" - urgency helps you prioritize

## 🔗 Links

- [POC Scoping](poc-scoping.md)
- [Environment Guides](../environments/)
- [Pre-call prep with sales](../internal/pre-call-prep.md)

