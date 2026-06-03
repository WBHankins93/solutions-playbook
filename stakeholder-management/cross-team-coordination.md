---
tags:
  - architecture
  - customer-facing
  - stakeholder
---

## Cross-Team Coordination

## 📝 Context

Architecture decisions rarely live inside one team. A migration touches infrastructure,
application, security, and data teams. A new service needs buy-in from the teams it
will depend on. Your job as an SA is to coordinate across these teams without having
authority over any of them — influencing through clarity, credibility, and making
the path forward obvious.

## 📋 Coordination Checklist

- [ ] Identify all teams affected by the architectural change
- [ ] Understand each team's priorities, constraints, and capacity
- [ ] Map the decision points — who needs to agree to what, and when?
- [ ] Identify potential conflicts between team interests
- [ ] Establish a communication cadence and format
- [ ] Define what "done" looks like so teams know when they're finished

## 🎯 Coordination Framework

### Stakeholder Mapping

Before coordinating, understand who you're coordinating:

| Team | Stake in Decision | Concern | Influence | Engagement Level |
| --- | --- | --- | --- | --- |
| Platform / Infrastructure | Must provision and support new environment | Operational burden, timeline | High | Active partner |
| Application / Product | Must adapt their services | Scope creep, velocity impact | High | Active partner |
| Security | Must approve architecture | Risk, compliance | High (veto power) | Consulted early |
| Data / Analytics | Must adapt pipelines | Schema changes, data availability | Medium | Informed and consulted |
| QA / Testing | Must validate in new environment | Test environment parity, timeline | Medium | Active in later phases |
| Finance | Must approve budget | Cost, ROI | Medium | Informed, approves budget |
| Legal / Compliance | Must confirm regulatory compliance | Data handling, vendor agreements | Low frequency, high impact | Consulted when needed |

### The RACI for Architecture Decisions

For each major decision, make it explicit:

| Decision | Responsible (does the work) | Accountable (owns the outcome) | Consulted (input required) | Informed (kept in the loop) |
| --- | --- | --- | --- | --- |
| [Decision] | [Team/Person] | [Team/Person] | [Teams] | [Teams] |

**Common SA mistake:** Being accountable for everything. Your job is to facilitate
decisions and provide architectural guidance. The teams doing the work are responsible;
their leadership is accountable.

### Coordination Patterns

**Architecture Review Board (ARB)**
- Regular forum where architectural decisions are presented, reviewed, and approved
- Best for organizations with multiple teams making independent architecture decisions
- Risk: Becomes a bottleneck if every small decision requires ARB review
- Mitigation: Define thresholds — only decisions above a certain scope or risk level require ARB

**Design Document Review**
- Asynchronous review of written design documents by relevant stakeholders
- Best for decisions that need input from multiple teams but don't require real-time discussion
- Risk: Documents sit unreviewed, blocking progress
- Mitigation: Set review deadlines and escalation path for non-response

**Working Group**
- Temporary cross-team group formed for a specific initiative (migration, platform change)
- Best for multi-month efforts that require sustained coordination
- Risk: Meetings without action items, working group that never disbands
- Mitigation: Clear charter with exit criteria

**Office Hours**
- SA holds regular open sessions where any team can bring architectural questions
- Best for ongoing advisory relationships where questions arise continuously
- Risk: Low attendance, or becoming a dumping ground for decisions teams should make themselves
- Mitigation: Publish topics in advance, redirect decisions to the right owner

### Running Effective Cross-Team Meetings

**Before:**
- Send a one-paragraph summary of what needs to be decided
- Name the specific decision or alignment needed
- List pre-read materials (keep them short)
- Invite only people who have a role in the decision

**During:**
- State the decision needed in the first 60 seconds
- Present 2-3 options with tradeoffs (not 1 option for rubber-stamping)
- Ask each team for their constraints explicitly
- Capture decisions and action items in real time
- End with: "Here's what was decided, here's who does what by when"

**After:**
- Send written summary within 24 hours
- Track action items and follow up before the next meeting
- Escalate blockers — don't let them fester

### Handling Inter-Team Conflicts

Conflicts typically arise from:

**Competing priorities:** Team A needs something from Team B, but Team B is focused on
their own roadmap.
- Resolution: Escalate to shared leadership to align on priority. Come with data
  (timeline impact, business risk), not opinions.

**Technical disagreement:** Teams prefer different approaches.
- Resolution: Frame as tradeoffs, not right-vs-wrong. Use ADRs to document the
  decision rationale. The SA recommends; the accountable party decides.

**Scope disputes:** "That's not our responsibility."
- Resolution: Make ownership explicit in the RACI. If there's a gap, surface it to
  leadership as a gap, not as one team's failure.

**Timeline mismatch:** Teams have different expectations about when things will be done.
- Resolution: Build a shared timeline with dependencies visible. When Team A's
  deadline depends on Team B's delivery, both teams need to see that dependency.

## ⚠️ Gotchas

- Coordinating without a written plan — verbal agreements evaporate
- Assuming alignment when you have attendance — people in the room doesn't mean they agree
- Not identifying the real decision-maker — in many organizations, the loudest voice isn't the decision-maker
- Over-meeting — weekly status meetings when async updates would suffice
- Under-communicating — teams working in parallel without visibility into each other's progress
- Being the bottleneck — the SA should facilitate coordination, not be the single point of contact for all cross-team communication
- Ignoring organizational politics — technical correctness doesn't override organizational dynamics

## 🔗 Links

- [Executive Alignment](executive-alignment.md)
- [CTO Conversations](cto-conversations.md)
- [Status Updates](../internal/status-updates.md)
- [Pre-Call Prep](../internal/pre-call-prep.md)
- [Escalation](../recovery/escalation.md)
