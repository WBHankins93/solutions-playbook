## Firewall-Restricted Validation

> Full context: [environments/firewall-restricted.md](../../environments/firewall-restricted.md)

### Traffic Matrix

| Phase | Source | Destination | FQDN/IP/CIDR | Port/Protocol | Direction | Business Justification | Rule ID | Validated |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `<install/runtime/upgrade/support>` | `<source>` | `<destination>` | `<fqdn>` | `<tcp/443>` | `<egress>` | `<why needed>` | `<ticket>` | `<yes/no>` |

### Firewall Change Tracking

- [ ] Network/security owner reviewed the complete traffic matrix
- [ ] Rule requests submitted in customer-required format
- [ ] Approval SLA and implementation date documented for each request
- [ ] Emergency firewall change path documented
- [ ] Implemented rule IDs linked to validation evidence

### DNS, Proxy, and TLS

- [ ] DNS resolution tested from nodes, pods, bastions, CI/CD runners, and support workstations
- [ ] Proxy settings validated for OS tools, CLIs, Helm, package managers, init containers, jobs, and workloads
- [ ] No-proxy entries documented for internal services, cluster CIDRs, and metadata endpoints
- [ ] TLS inspection behavior documented
- [ ] Private CA certificates installed in required host, container, CLI, and application trust stores

### Connectivity Validation

- [ ] Container registry and chart/package repository access tested from the deployment path
- [ ] Runtime API endpoints tested from workload pods
- [ ] Identity, license, telemetry, update, webhook, and support endpoints tested if required
- [ ] Ingress tested from expected user, system, partner, and support source networks
- [ ] Firewall logs available during test windows with named log owner

### Failure Readiness

- [ ] Blocked DNS failure behavior documented
- [ ] Blocked egress failure behavior documented
- [ ] Blocked ingress failure behavior documented
- [ ] Proxy authentication or certificate failure behavior documented
- [ ] Troubleshooting commands and escalation contacts documented
- [ ] Customer sign-off captured before production cutover
