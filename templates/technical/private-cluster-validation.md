## Private Cluster Validation

> Full context: [environments/private-cluster.md](../../environments/private-cluster.md)

### Cluster Capability Inventory

| Capability | Current Value | Owner | Required by Solution | Validated |
| --- | --- | --- | --- | --- |
| Kubernetes distribution/version | `<distribution/version>` | `<team>` | `<yes/no>` | `<yes/no>` |
| CNI | `<plugin>` | `<team>` | `<yes/no>` | `<yes/no>` |
| CSI/storage | `<classes>` | `<team>` | `<yes/no>` | `<yes/no>` |
| Ingress/load balancer | `<controller>` | `<team>` | `<yes/no>` | `<yes/no>` |
| Registry/image policy | `<registry/policy>` | `<team>` | `<yes/no>` | `<yes/no>` |

### Access and Permissions

- [ ] API access tested through approved VPN, bastion, or private access path
- [ ] Kubeconfig issuance, expiry, MFA, and session recording requirements documented
- [ ] Deployer permissions validated
- [ ] Runtime service account permissions validated
- [ ] Cluster-admin-only tasks identified with named owners and approval lead time
- [ ] Break-glass or emergency support path documented

### Platform Services

- [ ] Required namespaces, storage classes, ingress classes, and DNS zones exist
- [ ] Persistent volume provisioning, expansion, snapshot, backup, and restore behavior tested
- [ ] Private registry authentication, image pull secrets, scanning, and signing policies validated
- [ ] DNS resolution tested from nodes, pods, bastions, and support workstations
- [ ] TLS certificate issuance, trust chain, and rotation ownership documented
- [ ] Network policy and pod security/admission controls tested against required manifests

### Observability and Operations

- [ ] Logs, metrics, Kubernetes events, traces, and audit events are accessible to implementation/support users
- [ ] Retention periods and export paths documented
- [ ] Maintenance windows, upgrade cadence, change approval, and freeze periods documented
- [ ] Rollback process documented for namespace-level and cluster-level changes
- [ ] Cluster incident escalation path and vendor support path documented

### Cutover Readiness

- [ ] Distribution/version support confirmed
- [ ] Capacity and quota headroom confirmed for steady-state and rollout surge
- [ ] Ingress/TLS path validated from expected source networks
- [ ] Backup/restore and rollback process reviewed with customer
- [ ] Customer sign-off captured before production cutover
