---
tags:
  - implementation
  - customer-facing
---

## Firewall-Restricted Environment

## 📝 Context

Customer has strict firewall rules limiting egress/ingress traffic. This is different
from air-gapped - there's connectivity, but it's heavily restricted. Common in
regulated industries or security-conscious organizations. Success depends on discovering
all required traffic flows early, translating them into the customer's firewall request
format, and validating them from the actual source networks.

## 🎯 Discovery Questions

- What egress restrictions exist? (Which domains/IPs are allowed?)
- What ingress restrictions exist? (What can reach the cluster?)
- Is there a proxy or egress gateway we need to configure?
- What's the process for requesting firewall rule changes?
- How long does firewall rule approval take?
- Are there whitelist/allowlist requirements for external services?
- What ports and protocols are allowed?
- Are there restrictions on DNS resolution?
- Are rules based on FQDN, IP, CIDR, SNI, URL path, user identity, or application identity?
- Is TLS inspection, outbound proxy authentication, or certificate re-signing in place?
- Are firewall rules different by environment, subnet, namespace, node pool, or workload identity?

## 🏗️ Architecture Questions

- What are every required ingress, egress, and east-west traffic flow for install, runtime, and support?
- Which source IPs or subnets will traffic originate from after NAT, proxy, or egress gateway traversal?
- Which dependencies require static IPs versus FQDN allowlisting, and how are IP changes handled?
- How does DNS resolution work from nodes, pods, bastions, CI/CD runners, and support workstations?
- Is there an approved proxy configuration for containers, package managers, CLIs, and webhooks?
- Are container registry, chart repository, license, telemetry, update, and identity endpoints reachable?
- What TLS inspection behavior should be expected, and which trust stores need the customer CA?
- How are firewall logs accessed during validation and troubleshooting?
- What is the emergency process if a missing rule blocks a production deployment or rollback?

## 🎯 Scoping Considerations

- Add 30-40% time buffer for firewall-restricted deployments
- Account for firewall rule approval time in timeline
- Identify all external dependencies early (container registries, APIs, etc.)
- Plan for proxy configuration if required
- Understand DNS resolution constraints
- Account for potential connectivity testing delays
- Consider alternative artifact delivery methods if needed
- Build a source/destination/port/protocol matrix before implementation begins
- Include separate validation for install-time, runtime, upgrade-time, and support-time connectivity
- Reserve time for iterative firewall requests when hidden dependencies are discovered

## ✅ Validation Checklist

- [ ] Complete traffic matrix is reviewed by customer network/security owners
- [ ] Firewall requests are submitted in the customer's required format with lead time confirmed
- [ ] DNS resolution is tested from nodes, pods, bastion hosts, CI/CD runners, and support workstations
- [ ] Required container registries, package repositories, chart repositories, and API endpoints are reachable
- [ ] Proxy configuration is tested for CLIs, containers, init containers, webhooks, and package managers
- [ ] TLS trust is validated when inspection or private CAs are used
- [ ] Ingress is tested from all expected user, system, partner, and support source networks
- [ ] Firewall logs are available during validation, with a named person able to read them
- [ ] Failure behavior is documented for blocked DNS, blocked egress, blocked ingress, and proxy auth failure
- [ ] Approved rules are captured as evidence and linked to the implementation runbook

## 🎯 Customer Communication

- Set expectations about firewall rule approval timelines
- Establish clear process for requesting rule changes
- Identify who approves firewall changes and their availability
- Discuss whitelist requirements early
- Plan for connectivity validation and testing
- Clarify proxy configuration responsibilities
- Explain that allowlisting must cover installation, runtime, upgrades, telemetry, and support workflows
- Confirm whether emergency firewall changes are possible during production cutover

## ⚠️ Gotchas

- "Firewall-restricted" means different things - get specific rules
- Firewall rule approval can take days or weeks - start early
- Hidden dependencies - you'll discover more as you go
- Proxy configuration can break things silently - test thoroughly
- DNS restrictions can cause unexpected failures - validate early
- Some services require specific IPs, not just domains - clarify requirements
- Firewall rules may change without notice - document what's allowed

## 🚨 Common Failure Modes

- Rules allow node egress but not pod egress because the source NAT path differs
- FQDN allowlisting fails when services use redirects, CDNs, regional endpoints, or rotating IPs
- TLS inspection causes CLIs, SDKs, webhooks, or containers to reject certificates
- Proxy variables are configured for the main container but not init containers or jobs
- DNS queries are blocked or return split-horizon records that differ from the approved rule set
- Installation works from a bastion, but runtime workloads cannot reach the same endpoints
- Firewall logs are inaccessible during validation, delaying root-cause analysis
- Upgrade, license, or telemetry endpoints were omitted because only first-install flows were documented

## 📊 Required Diagrams / Artifacts

- Traffic matrix with source, destination, FQDN/IP/CIDR, port, protocol, direction, phase, and business justification
- Network path diagram showing nodes, pods, NAT, proxy, egress gateway, firewall, DNS, and external dependencies
- Firewall request tracker with request IDs, owners, approval status, implementation date, and validation evidence
- Proxy configuration worksheet for operating system, Kubernetes, container runtime, Helm, CLIs, SDKs, and workloads
- DNS resolution evidence from every relevant source network and runtime context
- TLS trust inventory showing inspection points, private CAs, trust stores, and certificate rotation owner
- Connectivity troubleshooting runbook with commands, log sources, escalation contacts, and rollback options

## 🗣️ Customer Expectation-Setting Language

> Firewall-restricted deployments require a complete traffic matrix before implementation. We should expect at least one review cycle with network/security owners before the environment is ready.

> Connectivity needs to be validated from the actual workloads, not only from a laptop or bastion host. NAT, proxy, DNS, and TLS inspection can make those paths behave differently.

> If a required rule is missing during cutover, progress depends on the customer's firewall change process. We should confirm normal and emergency approval paths before scheduling production work.

## 🔗 Technical Resources

- [Firewall-Restricted Validation Template](../templates/technical/firewall-restricted-validation.md)
- [Environment Validation](../templates/technical/environment-validation.md)
- [implementation-studio](https://github.com/WBHankins93/implementation-studio)
