# Engagement Retrospective: Northstar Telecom Hybrid POC

> Based on: [Engagement Retrospective Template](../../lessons/TEMPLATE.md)  
> Date: 2026-05-01  
> Duration: 2026-04-01 to 2026-04-30  
> Type: POC  
> Environment: Hybrid

---

## Summary

Northstar Telecom completed a hybrid POC connecting an on-prem Kubernetes lab to cloud-hosted control services. The POC met its primary success criteria for connectivity, identity integration, and telemetry ingestion, but firewall approval delays compressed the final validation window.

---

## What Went Well

- Weekly customer-facing status emails kept the platform, network, and operations teams aligned.
- The early environment validation checklist surfaced DNS and certificate gaps before deployment week.
- Using sanitized telemetry data let the customer validate workflows without waiting for production data approvals.

---

## What Could Have Gone Better

- Firewall requests were submitted after kickoff instead of during pre-kickoff planning.
- The runbook owner was unclear until the final week.
- Load testing depended on a single network engineer being available for packet capture validation.

---

## Root Causes

- We treated network approvals as implementation tasks instead of long-lead prerequisites.
- Success criteria named technical outcomes but did not assign operational artifact owners.
- The customer had separate platform and network teams, but our project plan assumed one infrastructure workstream.

---

## Action Items

| Action | Apply To |
|--------|----------|
| Add firewall and DNS approval dates to the POC plan before kickoff. | Hybrid and firewall-restricted POCs |
| Assign an owner for each operational artifact during kickoff. | All implementations |
| Identify backup approvers for network validation tasks. | Telecom and other matrixed infrastructure teams |

---

## Artifacts Worth Saving

- Sanitized telemetry replay script used for ingestion validation.
- Hybrid connectivity test checklist.
- Customer-facing runbook outline for operations handoff.

---

## Notes

The customer responded well to concise written summaries with explicit owner and due-date fields. Continue using a weekly email cadence even when Slack is active.
