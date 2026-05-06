---
tags:
  - implementation
  - customer-facing
---

## Private Cluster

## 📝 Context

Customer is running a private Kubernetes cluster (not a fully managed cloud service like
EKS, GKE, or AKS). This could be on-premises, in a private cloud, or self-managed.
Expect different access, networking, storage, security, upgrade, and support models than
managed services. Confirm what the customer means by "private" before scoping.

## 🎯 Discovery Questions

- What Kubernetes distribution are you running? (OpenShift, Rancher, kubeadm, etc.)
- Who manages the cluster? (Internal team, vendor, managed service?)
- What's the upgrade cadence? (How often, who approves, what's the process?)
- Are there cluster-level policies or restrictions we should know about?
- What's the cluster access model? (VPN, bastion host, direct access?)
- Are there resource quotas or limits at the cluster level?
- What monitoring and logging infrastructure exists?
- Which CNI, CSI, ingress, load balancer, DNS, and certificate components are installed?
- Is the cluster connected to the internet, routed through a proxy, or fully private?
- What is the support process for cluster-level incidents during implementation?
- Are there maintenance windows, freeze periods, or approval boards for cluster changes?

## 🏗️ Architecture Questions

- Which Kubernetes distribution, version, and support lifecycle apply to the cluster?
- How are API server access, bastion access, kubeconfig issuance, and session recording handled?
- What CNI is used, and are network policies enforced consistently?
- What ingress controller, load balancer, route, or service exposure pattern is approved?
- What storage classes are available, and do they support required access modes and expansion?
- How are private registries, image pull secrets, and image scanning/signing integrated?
- How are cluster DNS, external DNS, and internal naming zones configured?
- What pod security, SCC, admission controller, or policy engine constraints apply?
- What observability stack exists, and how long are logs, metrics, traces, and audit events retained?
- What backup/restore and disaster recovery tooling protects cluster resources and persistent volumes?

## 🎯 Scoping Considerations

- Add 20-30% time buffer for private cluster deployments
- Account for cluster management overhead (upgrades, maintenance windows)
- Understand who controls cluster-level resources (storage classes, ingress controllers)
- Plan for potential access delays (VPN, approval processes)
- Consider cluster capacity and resource availability
- Account for any custom networking or security policies
- Include time to validate distribution-specific behavior and version compatibility
- Build in lead time for cluster-admin tasks, policy exceptions, and certificate/DNS requests
- Confirm whether implementation support is available during customer maintenance windows

## ✅ Validation Checklist

- [ ] Kubernetes distribution and version are supported by the solution
- [ ] API access works through the approved path, including bastion/VPN/session controls
- [ ] Deployer permissions are sufficient, and cluster-admin-only tasks are identified
- [ ] Required namespaces, storage classes, ingress classes, load balancers, and DNS zones exist
- [ ] Private registry access, image pull secrets, and image policy controls are tested
- [ ] Network policies, pod security, and admission controls allow the required manifests
- [ ] Persistent volume provisioning, resizing, backup, and restore behavior are tested
- [ ] Ingress/TLS path is validated from the expected user and system source networks
- [ ] Logs, metrics, events, and audit data are accessible to the implementation/support team
- [ ] Upgrade, maintenance, rollback, and escalation processes are documented

## 🎯 Customer Communication

- Understand their cluster management model and processes
- Set expectations about cluster-level dependencies
- Clarify who needs to be involved for cluster-level changes
- Establish process for upgrades and maintenance coordination
- Discuss monitoring and observability integration
- Explain that private clusters often require distribution-specific validation
- Confirm when cluster admins, network owners, storage owners, and security approvers are available

## ⚠️ Gotchas

- "Private cluster" can mean many things - clarify exactly what they mean
- Cluster-level policies can block things silently - ask explicitly
- Upgrade schedules may not align with your timeline - check early
- Access methods can be slow or unreliable - test early
- Resource quotas can cause failures - understand limits upfront
- Cluster admins may have different priorities - align expectations

## 🚨 Common Failure Modes

- Distribution-specific admission or security policies reject standard Kubernetes examples
- Private registry authentication works for one namespace but not for all runtime service accounts
- Storage classes exist but do not support required access modes, expansion, or performance needs
- Ingress works internally but not from the user, partner, or support networks that need access
- Cluster DNS forwards some zones incorrectly or blocks external resolution required by dependencies
- API access depends on a bastion/VPN path that is not available during the deployment window
- Observability tools are present but implementation/support users lack access to the relevant data
- Customer upgrade or patch windows restart components during validation without notice

## 📊 Required Diagrams / Artifacts

- Cluster architecture diagram showing control plane, workers, ingress/load balancer, storage, registry, and DNS
- Access path diagram for API, bastion, VPN, support users, automation, and break-glass access
- Cluster capability inventory covering Kubernetes version, CNI, CSI, ingress, registry, policy, and observability tools
- Permissions matrix distinguishing deployer, runtime service accounts, support users, and cluster admins
- Storage and backup worksheet with classes, access modes, retention, restore process, and owners
- Network exposure matrix for ingress, egress, DNS, registry, webhooks, and observability endpoints
- Maintenance and escalation runbook with owner, approval process, change window, rollback, and support contacts

## 🗣️ Customer Expectation-Setting Language

> Private clusters vary significantly by distribution and by how the platform team operates them. We need to validate the actual cluster capabilities and policies rather than assuming managed-service defaults.

> Any cluster-scoped dependency needs a named owner and approval path before implementation starts. If those owners are unavailable, cluster-level blockers can pause the deployment.

> Access, observability, and rollback paths must be tested before production changes. Troubleshooting is much slower if we discover during an incident that the right logs or permissions are unavailable.

## 🔗 Technical Resources

- [Private Cluster Validation Template](../templates/technical/private-cluster-validation.md)
- [Environment Validation](../templates/technical/environment-validation.md)
- [implementation-studio](https://github.com/WBHankins93/implementation-studio)
