---
tags:
  - customer-facing
---

# SE Playbook

> **Find the right SE framework in under 60 seconds.**

A field-ready playbook for Solutions Engineers, Technical Sales Engineers, and Customer Success Engineers who need the next best action—not another theory document. Use it to prep a discovery call, scope a POC, recover a demo, handle constrained environments, or send a clean internal update.

[Start with the router](START-HERE.md) · [Browse learning paths](LEARNING-PATHS.md) · [Copy a template](templates/) · [Contribute a pattern](CONTRIBUTING.md)

---

## Quick-start workflows

<table>
  <tr>
    <td width="33%">
      <h3>👋 New customer</h3>
      <p>Get oriented fast, identify stakeholders, and build your first engagement plan.</p>
      <p><a href="engagements/new-customer.md"><strong>Open the workflow →</strong></a></p>
    </td>
    <td width="33%">
      <h3>🔎 Discovery call</h3>
      <p>Prepare the right questions, capture technical context, and turn answers into next steps.</p>
      <p><a href="pre-sales/discovery.md"><strong>Open the workflow →</strong></a></p>
    </td>
    <td width="33%">
      <h3>🎯 POC scoping</h3>
      <p>Define success criteria, boundaries, timeline, owners, and proof points before work starts.</p>
      <p><a href="pre-sales/poc-scoping.md"><strong>Open the workflow →</strong></a></p>
    </td>
  </tr>
  <tr>
    <td width="33%">
      <h3>🧯 Demo recovery</h3>
      <p>Stabilize the room, preserve credibility, and convert a failure into a follow-up plan.</p>
      <p><a href="recovery/demo-recovery.md"><strong>Open the workflow →</strong></a></p>
    </td>
    <td width="33%">
      <h3>🔒 Air-gapped deployment</h3>
      <p>Plan artifacts, transfer paths, offline validation, and operational constraints.</p>
      <p><a href="environments/air-gapped.md"><strong>Open the workflow →</strong></a></p>
    </td>
    <td width="33%">
      <h3>📣 Status update / escalation</h3>
      <p>Send crisp updates, ask for help clearly, and escalate without creating noise.</p>
      <p><a href="internal/status-updates.md"><strong>Status updates →</strong></a><br><a href="recovery/escalation.md"><strong>Escalation →</strong></a></p>
    </td>
  </tr>
</table>

**Need to explain business impact?** → Use the [`business-value/`](business-value/) guides to translate technical progress into executive outcomes

---

## How to use this in a real week

### Monday: You get assigned a new enterprise account

1. Start with [New Customer](engagements/new-customer.md) to build your account brief and identify what you still need to learn.
2. Use [Pre-call Prep](internal/pre-call-prep.md) to align internally before the first customer touchpoint.
3. Pull from [Discovery Questions](templates/discovery-questions.md) so your first call is specific instead of generic.

### Tuesday: Discovery reveals a high-stakes POC

1. Run the [Discovery Call Framework](pre-sales/discovery.md) to turn notes into technical requirements and decision criteria.
2. Move into [POC Scoping](pre-sales/poc-scoping.md) to lock success criteria, timeline, risks, and owner responsibilities.
3. Send a customer-ready update with the [POC Status Update Email](templates/customer/poc-status-update-email.md).

### Wednesday: The environment is more constrained than expected

1. Route the architecture through [Air-Gapped Deployments](environments/air-gapped.md), [Private Clusters](environments/private-cluster.md), or [Firewall-Restricted Environments](environments/firewall-restricted.md).
2. Validate prerequisites with the [Pre-implementation Checklist](templates/technical/pre-implementation-checklist.md).
3. Keep implementation risk visible with the [Status Update Format](templates/status-update-template.md).

### Thursday: Something breaks in front of stakeholders

1. Use [Demo Recovery](recovery/demo-recovery.md) if the issue happened live.
2. Use [Troubleshooting](implementation/troubleshooting.md) if the issue is technical and unresolved.
3. Escalate with [Requesting Help](internal/requesting-help.md) and [Escalation](recovery/escalation.md) when you need executive, product, or engineering support.

### Friday: You need to hand off cleanly

1. Capture decisions, owners, and open risks in the [Handoff Document](templates/handoff-document.md).
2. Use [Implementation Handoff](implementation/handoff.md) for customer-facing transition planning.
3. Run a quick retro with the [Retrospective Template](templates/retrospective.md) so the next engagement starts smarter.

---

## What's inside

```
se-playbook/
├── engagements/          # New customer, joining existing, inherited handoffs
├── pre-sales/           # Discovery, demos, POCs, technical deep-dives
├── implementation/      # Kickoff, checkpoints, troubleshooting, handoff
├── environments/        # Air-gapped, private, restricted, multi-tenant, hybrid
├── recovery/            # Demo failures, POC recovery, escalation, scope creep
├── internal/            # Team coordination, status updates, requesting help
├── business-value/      # Executive summaries, value recaps, risk narratives
├── templates/           # Customer emails, technical checklists, handoff docs
└── lessons/             # Retrospective templates for continuous improvement
```

Dozens of frameworks, checklists, and templates cover the full SE lifecycle from first discovery call to customer handoff.

---

## Immediate payoff: copy what you need

### Copy-paste templates

- [Discovery Questions](templates/discovery-questions.md) - Question bank organized by infrastructure, security, compliance, and operations
- [Kickoff Agenda](templates/kickoff-agenda.md) - Implementation kickoff call structure
- [POC Status Update Email](templates/customer/poc-status-update-email.md) - Customer-facing communication template
- [Handoff Document](templates/handoff-document.md) - SE-to-SE or SE-to-Customer Success handoff template
- [Status Update Format](templates/status-update-template.md) - Internal status reporting template

### Decision frameworks

- [Discovery Call Framework](pre-sales/discovery.md) - Pre-call checklist, question framework, post-call actions
- [POC Scoping Framework](pre-sales/poc-scoping.md) - Success criteria, in/out of scope, timeline, resources
- [Troubleshooting Framework](implementation/troubleshooting.md) - Structured process for getting unstuck
- [Escalation Framework](recovery/escalation.md) - When and how to escalate strategically

### Environment guides

- [Air-Gapped Deployments](environments/air-gapped.md) - Artifact bundling, transfer mechanisms, offline validation
- [Private Clusters](environments/private-cluster.md) - Network isolation, access patterns, security considerations
- [Firewall-Restricted](environments/firewall-restricted.md) - Port requirements, proxy configurations, egress controls
- [Multi-Tenant](environments/multi-tenant.md) - Isolation strategies, resource quotas, tenant management
- [Hybrid Cloud](environments/hybrid.md) - Cloud and on-prem integration patterns

### Recovery playbooks

- [Demo Recovery](recovery/demo-recovery.md) - What to do when your demo crashes
- [POC Recovery](recovery/poc-recovery.md) - Salvage a failing POC without hiding the risk
- [Scope Creep Management](recovery/scope-creep.md) - Spot expansion early and reset expectations
- [Getting Unstuck](recovery/stuck.md) - Self-assessment and escalation framework

---

## Who this is for

Use this playbook when you are responsible for making a technical customer engagement move forward:

- **Solutions Engineers** who need repeatable discovery, demo, POC, and recovery motions
- **Technical Sales Engineers** who want stronger qualification, scoping, and stakeholder alignment
- **Customer Success Engineers** who inherit complex deployments and need clean handoffs
- **SE leads** who want shared operating patterns for coaching, reviews, and escalations

This is not product documentation or a training manual. It is a routing system and field kit for practical execution.

---

## Why this exists

SE work often gets documented in scattered Slack threads, one-off notes, and old project folders. That makes every new account feel like starting from scratch: rediscovering questions, rebuilding POC plans, improvising escalations, and re-learning environment constraints.

This repo turns those repeated motions into reusable frameworks so you can:

- Run better discovery calls with prepared question sets
- Scope POCs with clear success criteria and guardrails
- Recover from demo failures, blockers, and scope creep with a plan
- Navigate air-gapped, private, restricted, multi-tenant, and hybrid environments
- Coordinate internal teams with reusable updates, handoffs, and escalation formats

---

## Related resources

- [implementation-studio](https://github.com/WBHankins93/implementation-studio) - Technical deployment patterns and hands-on labs for Kubernetes, Helm, air-gapped, and private-cluster scenarios
- [Learning Paths](LEARNING-PATHS.md) - Structured skill development with self-assessment and progress tracking

---

## Engage and contribute

This playbook gets better with real-world feedback.

- Star the repo if it saves you time
- Open an issue for a missing scenario, unclear guide, or template request
- Submit a PR with patterns that have survived real customer work
- Share what worked, what failed, and what should be sharper

**Ready to deliver better results?** Start with [START-HERE.md](START-HERE.md) and find your situation.
