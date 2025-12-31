## Private Cluster

## 📝 Context

Customer is running a private Kubernetes cluster (not managed cloud service like EKS, GKE, AKS).
This could be on-premises, in a private cloud, or self-managed. Different constraints and
operational models than managed services.

## 🎯 Discovery Questions

- What Kubernetes distribution are you running? (OpenShift, Rancher, kubeadm, etc.)
- Who manages the cluster? (Internal team, vendor, managed service?)
- What's the upgrade cadence? (How often, who approves, what's the process?)
- Are there cluster-level policies or restrictions we should know about?
- What's the cluster access model? (VPN, bastion host, direct access?)
- Are there resource quotas or limits at the cluster level?
- What monitoring and logging infrastructure exists?

## 🎯 Scoping Considerations

- Add 20-30% time buffer for private cluster deployments
- Account for cluster management overhead (upgrades, maintenance windows)
- Understand who controls cluster-level resources (storage classes, ingress controllers)
- Plan for potential access delays (VPN, approval processes)
- Consider cluster capacity and resource availability
- Account for any custom networking or security policies

## 🎯 Customer Communication

- Understand their cluster management model and processes
- Set expectations about cluster-level dependencies
- Clarify who needs to be involved for cluster-level changes
- Establish process for upgrades and maintenance coordination
- Discuss monitoring and observability integration

## ⚠️ Gotchas

- "Private cluster" can mean many things - clarify exactly what they mean
- Cluster-level policies can block things silently - ask explicitly
- Upgrade schedules may not align with your timeline - check early
- Access methods can be slow or unreliable - test early
- Resource quotas can cause failures - understand limits upfront
- Cluster admins may have different priorities - align expectations

## 🔗 Technical Resources

- [implementation-studio](https://github.com/WBHankins93/implementation-studio)

