# Example: POC Status Update Email for Telecom Hybrid Deployment

> Based on: [POC Status Update Email Template](../../templates/customer/poc-status-update-email.md)  
> Scenario: Sanitized telecom provider validating a hybrid deployment across on-prem Kubernetes and public cloud services.

**Subject:** POC Status Update - Northstar Telecom - 2026-04-17

Hi Priya,

Quick update on our POC progress:

**What We've Completed:**
- Confirmed VPN connectivity between the on-prem lab cluster and the cloud control plane.
- Deployed the agent components into the `network-ops-poc` namespace.
- Validated authentication through your internal identity provider using the POC user group.

**Current Focus:**
- Testing event ingestion from the sanitized network telemetry feed.
- Expected completion: 2026-04-22

**Success Criteria Progress:**
- ✅ Hybrid connectivity established - VPN and DNS resolution validated from both sides.
- ✅ Role-based access validated - POC users can access assigned workflows only.
- 🟡 Telemetry ingestion - Initial events received; volume test starts after firewall rule update.
- ⏳ Operational runbook - Draft scheduled for review during the next working session.

**Blockers/Issues:**
- Firewall rule `NST-4432` is pending approval to allow the telemetry collector to reach the cloud endpoint. Current impact is limited to volume testing; all other workstreams are continuing.

**Next Steps:**
- Approve firewall rule `NST-4432` - Owner: Northstar Network Security - Due: 2026-04-21
- Run telemetry volume test - Owner: Solutions Engineering - Due: 2026-04-22
- Review draft operational runbook - Owner: Northstar Platform Operations and Solutions Engineering - Due: 2026-04-24

**Questions/Help Needed:**
- Can you confirm whether the operations team wants the runbook organized by incident type or by component owner?

We're on track to complete the POC by 2026-04-30 if the firewall update is approved by 2026-04-21. Let me know if you have any questions or concerns.

Best regards,  
Solutions Engineering Team
