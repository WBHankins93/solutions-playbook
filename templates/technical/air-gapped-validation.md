## Air-Gapped Validation Workflow

> Full context: [environments/air-gapped.md](../../environments/air-gapped.md)

### Pre-Transfer Validation

- [ ] All artifacts bundled and verified
- [ ] Checksums generated and documented
- [ ] Artifact list documented
- [ ] Transfer mechanism confirmed
- [ ] Customer approval obtained

### Post-Transfer Validation

- [ ] Verify all artifacts transferred successfully
- [ ] Validate checksums match
- [ ] Confirm artifact list complete
- [ ] Test artifact loading process
- [ ] Verify no corruption

### Pre-Deployment Validation

- [ ] Environment access confirmed
- [ ] Kubernetes cluster accessible
- [ ] Required tools available
- [ ] Dependencies resolved
- [ ] Network policies understood

### Deployment Validation

- [ ] Images load successfully
- [ ] Helm charts deploy without errors
- [ ] Pods start and run
- [ ] Services accessible
- [ ] Basic functionality works

### Post-Deployment Validation

- [ ] All components running
- [ ] Health checks passing
- [ ] Integration points working
- [ ] Performance acceptable
- [ ] Success criteria met

