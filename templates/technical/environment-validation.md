## Environment Validation

> Full context: [implementation/kickoff.md](../implementation/kickoff.md)

### Cluster Access

- [ ] `kubectl` access verified
- [ ] Can list namespaces: `kubectl get namespaces`
- [ ] Can access target namespace: `kubectl get pods -n <namespace>`
- [ ] Service account permissions tested
- [ ] Cluster version verified: `kubectl version`

### Networking

- [ ] Pod-to-pod communication tested
- [ ] Service discovery working: `kubectl get svc`
- [ ] External connectivity verified (if required)
- [ ] Network policies reviewed (if applicable)
- [ ] Firewall rules confirmed (if applicable)

### Storage

- [ ] Storage classes available: `kubectl get storageclass`
- [ ] Default storage class identified
- [ ] PVC creation tested
- [ ] Storage capacity sufficient
- [ ] Backup/restore process understood (if applicable)

### DNS / Ingress

- [ ] DNS resolution working: `nslookup <service>`
- [ ] Ingress controller installed and accessible
- [ ] Ingress class identified: `kubectl get ingressclass`
- [ ] TLS certificates available (if required)
- [ ] External DNS configured (if required)

### Resource Availability

- [ ] Node resources sufficient: `kubectl top nodes`
- [ ] Namespace quotas reviewed: `kubectl describe quota -n <namespace>`
- [ ] Resource limits understood
- [ ] Cluster autoscaling configured (if applicable)

### Security

- [ ] Image pull secrets configured (if required)
- [ ] Network policies reviewed
- [ ] RBAC policies verified
- [ ] Security context requirements understood
- [ ] Compliance requirements documented

