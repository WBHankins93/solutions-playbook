## Air-Gapped Artifact Bundling Checklist

> Full context: [environments/air-gapped.md](../../environments/air-gapped.md)

### Container Images

- [ ] All required container images identified
- [ ] Images exported to tar files
- [ ] Image manifests documented
- [ ] Image digests/shas recorded
- [ ] Base images included
- [ ] All image layers accounted for
- [ ] Images tested in similar environment first

### Helm Charts / Manifests

- [ ] Helm charts packaged and versioned
- [ ] All chart dependencies included
- [ ] Values files prepared for their environment
- [ ] Kubernetes manifests ready
- [ ] ConfigMaps and Secrets templates prepared
- [ ] RBAC manifests included

### Documentation

- [ ] Installation guide (offline-readable format)
- [ ] Configuration guide
- [ ] Troubleshooting guide
- [ ] Architecture diagrams (PNG/PDF)
- [ ] API documentation
- [ ] Runbooks for operations
- [ ] All docs in formats that don't require internet

### Tools & Scripts

- [ ] kubectl binary (compatible version)
- [ ] Helm binary (compatible version)
- [ ] Any custom scripts needed
- [ ] Image loading scripts
- [ ] Validation scripts
- [ ] Troubleshooting utilities

### Dependencies

- [ ] All system package dependencies listed
- [ ] All library dependencies documented
- [ ] Network policy requirements
- [ ] Storage class requirements
- [ ] Ingress controller requirements
- [ ] DNS requirements

### Verification

- [ ] Artifact bundle tested in similar environment
- [ ] Transfer mechanism tested
- [ ] Loading process validated
- [ ] Documentation reviewed for offline use
- [ ] Checksums generated for all artifacts

