# Example: Environment Validation for Healthcare Air-Gapped POC

> Based on: [Environment Validation](../../templates/technical/environment-validation.md)  
> Scenario: Sanitized healthcare provider validating an isolated Kubernetes lab before a POC.

### Cluster Access

- [x] `kubectl` access verified through the approved jump host.
- [x] Can list namespaces: `kubectl get namespaces`
- [x] Can access target namespace: `kubectl get pods -n clinical-analytics-poc`
- [x] Service account permissions tested with least-privilege deployment role.
- [x] Cluster version verified: Kubernetes 1.28.x on approved enterprise distribution.

### Networking

- [x] Pod-to-pod communication tested inside `clinical-analytics-poc` namespace.
- [x] Service discovery working: `kubectl get svc -n clinical-analytics-poc`
- [x] External connectivity verified as intentionally blocked for application pods.
- [x] Network policies reviewed with security engineering.
- [x] Firewall rules confirmed for jump host, registry, logging, and internal identity provider only.

### Storage

- [x] Storage classes available: `fast-encrypted` and `standard-encrypted`.
- [x] Default storage class identified as `standard-encrypted`.
- [x] PVC creation tested with encrypted test volume.
- [x] Storage capacity sufficient for POC dataset and logs.
- [ ] Backup/restore process understood; database team to provide restore runbook by 2026-04-10.

### DNS / Ingress

- [x] DNS resolution working for internal services from test pod.
- [x] Ingress controller installed and accessible from the clinical lab network.
- [x] Ingress class identified: `internal-nginx`.
- [x] TLS certificates available from the internal CA.
- [x] External DNS not required; internal zone entry created for POC hostname.

### Resource Availability

- [x] Node resources sufficient: peak requested capacity is under 55% of allocatable CPU and memory.
- [x] Namespace quotas reviewed: `kubectl describe quota -n clinical-analytics-poc`
- [x] Resource limits understood and documented in the deployment values file.
- [ ] Cluster autoscaling not configured; platform team confirmed static capacity is acceptable for POC.

### Security

- [x] Image pull secrets configured for the offline registry.
- [x] Network policies reviewed and deny-by-default baseline applied.
- [x] RBAC policies verified with platform security.
- [x] Security context requirements documented: non-root containers, read-only root filesystem where supported.
- [x] Compliance requirements documented: HIPAA-aligned audit logging, no external telemetry, approved artifact import process.
