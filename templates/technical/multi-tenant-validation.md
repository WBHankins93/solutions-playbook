## Multi-Tenant Validation

> Full context: [environments/multi-tenant.md](../../environments/multi-tenant.md)

### Tenant Boundary

- [ ] Tenant boundary identified: namespace, namespace set, virtual cluster, node pool, or other
- [ ] Namespace labels, annotations, owners, and cost-allocation tags applied
- [ ] Shared services and cluster-scoped dependencies inventoried
- [ ] Tenant support model and escalation path documented
- [ ] Backup/restore responsibility documented for tenant-owned data

### Permissions and Policy

| Subject | Scope | Required Verbs/Actions | Owner | Approved | Tested |
| --- | --- | --- | --- | --- | --- |
| `<deployer>` | `<namespace>` | `<create/update/list/watch>` | `<team>` | `<yes/no>` | `<yes/no>` |

- [ ] Deployer RBAC validated
- [ ] Runtime service account RBAC validated
- [ ] Support user access validated for logs, events, exec/port-forward if approved, and metrics
- [ ] Pod security, SCC, OPA/Gatekeeper, Kyverno, image policy, and admission webhooks tested
- [ ] Cluster-admin-only actions identified with named owners and lead times

### Quota and Capacity

- [ ] ResourceQuota and LimitRange values documented
- [ ] Steady-state CPU, memory, storage, object count, and pod count requirements fit quotas
- [ ] Rollout surge, restart, and failure-recovery requirements fit quotas
- [ ] Quota increase process and approval SLA documented
- [ ] Priority class, preemption, eviction, and noisy-neighbor controls understood

### Network and Shared Services

- [ ] Network policy allows required ingress, egress, DNS, registry, webhook, metrics, and service traffic
- [ ] Ingress class, certificate issuer, service mesh, and DNS patterns validated
- [ ] Storage classes and access modes validated for tenant workloads
- [ ] Registry authentication and image pull behavior tested with runtime service accounts
- [ ] Shared-service SLAs, maintenance windows, and incident notifications documented

### Failure Readiness

- [ ] Failed admission scenario tested or reviewed with platform team
- [ ] Quota exhaustion scenario tested or reviewed with platform team
- [ ] Network policy block scenario tested or reviewed with platform team
- [ ] Tenant-visible troubleshooting commands documented
- [ ] Customer sign-off captured before production cutover
