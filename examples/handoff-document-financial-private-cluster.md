# Example: Financial Services Private Cluster Handoff

> Based on: [Handoff Document](../templates/handoff-document.md)  
> Scenario: Sanitized financial services implementation on a private Kubernetes cluster.

## Apex Banking Group Handoff

### Engagement Overview

- Start date: 2026-03-09
- Current status: Production readiness validation in progress; core services deployed in the private cluster and awaiting final security sign-off.
- Key stakeholders:
  - Executive sponsor: VP, Digital Platforms
  - Technical owner: Director, Platform Engineering
  - Security approver: Cloud Security Architecture Lead
  - Day-two owner: SRE Manager

### What's Been Done

- Completed implementation kickoff and confirmed success criteria with platform, security, and SRE teams.
- Validated private cluster access, namespace model, RBAC boundaries, storage classes, and ingress path.
- Deployed baseline application stack into `abg-prod-candidate` namespace using internal GitOps workflow.
- Configured private registry image pulls, internal certificate chain, and approved ingress class.
- Completed initial failover test for the stateless service tier.

### What's In Progress

- Security team is reviewing final network policy changes for east-west traffic restrictions.
- SRE team is adding dashboards to the internal observability workspace.
- Customer is scheduling the production change window for 2026-05-14.

### Open Issues / Risks

- Network policy review could delay production promotion by one week if security requests additional segmentation.
- Backup validation is complete for configuration data, but restore timing still needs to be documented by the database team.
- The customer prefers email for formal decisions, even when alignment happens in Slack.

### Key Contacts

- Customer: Director, Platform Engineering — primary implementation owner
- Customer: Cloud Security Architecture Lead — required approver for network and certificate changes
- Customer: SRE Manager — day-two operations owner
- Internal: Account Executive — commercial owner
- Internal: Solutions Architect — escalation support for private cluster patterns

### Important Context

- The platform team is technically strong and values concise, evidence-based updates.
- Security requires explicit before/after diffs for policy changes.
- Avoid proposing managed cloud alternatives; the private cluster decision is already approved by governance.
- The customer has a strict Thursday change advisory board cutoff for the following week's deployments.

### Where to Find Things

- Docs: Internal customer workspace, `Apex Banking Group / Implementation`
- Code/configs: Internal Git repository, `platform/apex-banking/deployment-overlays`
- Slack channel: `#cust-apex-banking-implementation`
- CRM record: `ABG-2026-Private-Cluster-Implementation`
