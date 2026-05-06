---
tags:
  - implementation
  - customer-facing
---

## Hybrid (Cloud + On-Prem) Environment

## 📝 Context

Customer has a hybrid deployment with components in both cloud and on-premises
environments. This introduces connectivity, data flow, ownership, identity, and
operational complexity beyond single-environment deployments. Treat the cloud and
on-prem sides as separate failure domains that must be validated independently and
then together.

## 🎯 Discovery Questions

- What components run in cloud vs. on-premises?
- How do the environments connect? (VPN, dedicated link, public internet?)
- What's the data flow between environments?
- Are there latency or bandwidth constraints between environments?
- What's the failover or disaster recovery model?
- Are there different compliance requirements for each environment?
- Who manages each environment? (Same team or different?)
- What's the network topology between environments?
- Which side owns identity, secrets, certificate issuance, DNS, and observability?
- Are there maintenance windows or change freezes on either side?
- Which environment is considered the system of record for configuration and data?

## 🏗️ Architecture Questions

- Where is the control plane for the solution, and where are the data-plane components?
- Which traffic flows are synchronous and user-facing versus asynchronous or batch?
- What are the expected round-trip latency, packet loss, MTU, and bandwidth numbers between sites?
- Does traffic traverse NAT, TLS inspection, private endpoints, service mesh gateways, or proxies?
- How are DNS zones split between cloud and on-prem, and who owns records in each zone?
- How are certificates issued and rotated across environments?
- What identity provider, service account, workload identity, or trust federation pattern is used?
- Which logs, metrics, traces, and audit events must cross the boundary?
- What happens if the cloud side is healthy but the on-prem side is unreachable, and vice versa?
- Are there active-active, active-passive, or manual recovery expectations?

## 🎯 Scoping Considerations

- Add 30-40% time buffer for hybrid deployments
- Account for connectivity setup and validation time
- Plan for cross-environment testing and validation
- Understand data residency and compliance requirements
- Consider latency and bandwidth implications
- Account for coordination between environment teams
- Plan for potential connectivity issues during deployment
- Include time for DNS, certificate, routing, proxy, and identity changes
- Schedule validation windows when both cloud and on-prem owners are available
- Document dependencies that require synchronized change approvals

## ✅ Validation Checklist

- [ ] Cloud-side cluster or services are reachable from the approved access path
- [ ] On-prem-side cluster or services are reachable from the approved access path
- [ ] Required cloud-to-on-prem and on-prem-to-cloud ports/protocols are tested
- [ ] DNS resolution works from both sides for every required hostname
- [ ] TLS trust chain validates from both sides, including intermediate certificates
- [ ] Identity/token exchange works across the boundary, if required
- [ ] Baseline latency, bandwidth, and packet loss are measured and documented
- [ ] Retry, timeout, and queue settings match the measured network behavior
- [ ] Logs, metrics, traces, and audit events arrive in the agreed destination
- [ ] Failure-mode tests are run for link outage, DNS failure, and one-sided service outage
- [ ] Runbooks identify the cloud owner, on-prem owner, network owner, and escalation path

## 🎯 Customer Communication

- Understand the hybrid architecture and data flow
- Clarify which components go where and why
- Set expectations about cross-environment connectivity
- Discuss latency and performance implications
- Establish process for coordinating between environments
- Clarify compliance and data residency requirements
- Explain that a successful deployment requires both sides to be available for validation
- Confirm who can approve emergency routing, DNS, firewall, or certificate changes

## ⚠️ Gotchas

- Connectivity between environments can be unreliable - test early
- Latency can cause unexpected issues - understand constraints
- Different teams may manage different environments - coordinate early
- Data residency requirements may dictate placement - clarify early
- Network topology can be complex - get diagrams
- Failover scenarios may not be tested - understand the model
- Compliance requirements may differ - understand each environment

## 🚨 Common Failure Modes

- DNS resolves differently in cloud and on-prem, causing traffic to use the wrong path
- NAT or overlapping CIDR ranges break return traffic or service discovery
- TLS inspection or a private CA causes certificate validation failures
- VPN or dedicated-link MTU issues show up as intermittent large-payload failures
- Identity federation works for humans but not workload/service accounts
- Observability is split, so neither team has a full view of a failed transaction
- Disaster recovery assumptions are documented but not actually tested
- One environment changes routing, certificates, or firewall rules without notifying the other team

## 📊 Required Diagrams / Artifacts

- Current-state and target-state network diagrams with cloud, on-prem, and boundary devices
- Data-flow diagram showing direction, protocol, port, hostname, and data classification
- Component placement matrix showing cloud vs. on-prem ownership and dependencies
- DNS and certificate inventory, including zones, issuers, trust stores, and rotation owners
- Connectivity test matrix with source, destination, port, protocol, result, and evidence
- Failure-mode runbook covering link outage, one-sided outage, credential failure, and rollback
- RACI or escalation map for cloud, on-prem, network, security, and application teams

## 🗣️ Customer Expectation-Setting Language

> Hybrid deployments fail most often at the boundary between teams and networks, not in the application itself. We should plan a dedicated validation window where cloud, on-prem, network, security, and application owners can make and verify changes together.

> We can proceed only after the required traffic flows, DNS records, certificates, and ownership model are documented. Without that, troubleshooting becomes guesswork across two environments.

> Performance will be limited by the real latency, bandwidth, and reliability between sites. We will measure those numbers early and use them to set realistic success criteria.

## 🔗 Technical Resources

- [Hybrid Environment Validation Template](../templates/technical/hybrid-validation.md)
- [Environment Validation](../templates/technical/environment-validation.md)
- [implementation-studio](https://github.com/WBHankins93/implementation-studio)
