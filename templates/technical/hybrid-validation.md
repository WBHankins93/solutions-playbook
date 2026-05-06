## Hybrid Environment Validation

> Full context: [environments/hybrid.md](../../environments/hybrid.md)

### Architecture Snapshot

- [ ] Cloud components documented with owner, region/account/subscription, and lifecycle stage
- [ ] On-prem components documented with owner, site/datacenter, and lifecycle stage
- [ ] Control-plane and data-plane placement decisions documented
- [ ] System-of-record decisions documented for configuration, identity, and data
- [ ] Current-state and target-state diagrams attached

### Connectivity Matrix

| Source | Destination | Direction | Port/Protocol | DNS Name | Expected Latency | Owner | Validated |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `<cloud component>` | `<on-prem component>` | `<cloud-to-on-prem>` | `<tcp/443>` | `<fqdn>` | `<ms>` | `<team>` | `<yes/no>` |

### Boundary Services

- [ ] DNS resolution validated from cloud workloads, on-prem workloads, bastions, and support workstations
- [ ] TLS trust chain validated in both directions
- [ ] NAT, proxy, firewall, service mesh, or private endpoint behavior documented
- [ ] Identity federation or token exchange tested for human and workload identities
- [ ] Certificate issuance and rotation ownership documented

### Performance and Resiliency

- [ ] Baseline latency, bandwidth, packet loss, and MTU captured
- [ ] Timeout, retry, queue, and backoff settings reviewed against measured network behavior
- [ ] Link outage test completed or tabletop exercise documented
- [ ] One-sided service outage test completed or tabletop exercise documented
- [ ] DR/failover RTO and RPO expectations documented

### Operations and Support

- [ ] Logs, metrics, traces, and audit records visible across the full transaction path
- [ ] Cloud, on-prem, network, security, and application contacts listed
- [ ] Maintenance windows and change approval process documented for each side
- [ ] Rollback path documented for cross-environment changes
- [ ] Customer sign-off captured before production cutover
