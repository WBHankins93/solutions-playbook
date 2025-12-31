## Air-Gapped Deployment

## 📝 Context

Customer has disclosed they're air-gapped or network-isolated. This fundamentally
changes how you deliver, deploy, and troubleshoot. Plan extensively - you won't be
able to Google errors or pull images on-demand.

## 🎯 Discovery Questions

**Connectivity & Transfer**

- What's the artifact delivery mechanism? (USB, secure file transfer, physical media?)
- Is there any connectivity window for updates? (Scheduled, emergency-only, never?)
- Who handles the physical/secure transfer process? 👥
- What's the approval process for bringing artifacts into the environment?
- How long does the transfer process typically take?
- Are there size limits on transfers?

**Environment Details**

- Is this completely air-gapped or partially connected?
- Can you access internal documentation or knowledge bases?
- Are there internal container registries or artifact repositories?
- What tools are available for troubleshooting? (Can you install new tools?)
- Is there any way to get help from outside? (Phone, secure channel?)

**Operational Model**

- Who approves software for deployment?
- What's the change management process?
- How do they handle updates and patches?
- What's their backup and recovery process?
- How do they handle troubleshooting without internet?

## 🎯 Scoping Considerations

**Timeline**

- Add 50% time buffer minimum (often more)
- Account for transfer time in timeline
- Plan for multiple transfer cycles if needed
- Build in extra time for offline troubleshooting
- Assume everything takes longer than expected

**Resources**

- Pre-stage ALL container images before any on-site work
- Prepare all documentation offline (PDFs, markdown, etc.)
- Bundle all tools and scripts needed
- Prepare troubleshooting guides and runbooks
- Have backup plans for everything

**Dependencies**

- Map ALL dependencies upfront (you can't discover them later)
- Include transitive dependencies (dependencies of dependencies)
- Account for base images, system packages, libraries
- Plan for dependency resolution offline

## 🎯 Artifact Bundling Checklist

**Container Images**

- [ ] All required container images identified
- [ ] Images exported to tar files
- [ ] Image manifests documented
- [ ] Image digests/shas recorded
- [ ] Base images included
- [ ] All image layers accounted for
- [ ] Images tested in similar environment first

**Helm Charts / Manifests**

- [ ] Helm charts packaged and versioned
- [ ] All chart dependencies included
- [ ] Values files prepared for their environment
- [ ] Kubernetes manifests ready
- [ ] ConfigMaps and Secrets templates prepared
- [ ] RBAC manifests included

**Documentation**

- [ ] Installation guide (offline-readable format)
- [ ] Configuration guide
- [ ] Troubleshooting guide
- [ ] Architecture diagrams (PNG/PDF)
- [ ] API documentation
- [ ] Runbooks for operations
- [ ] All docs in formats that don't require internet

**Tools & Scripts**

- [ ] kubectl binary (compatible version)
- [ ] Helm binary (compatible version)
- [ ] Any custom scripts needed
- [ ] Image loading scripts
- [ ] Validation scripts
- [ ] Troubleshooting utilities

**Dependencies**

- [ ] All system package dependencies listed
- [ ] All library dependencies documented
- [ ] Network policy requirements
- [ ] Storage class requirements
- [ ] Ingress controller requirements
- [ ] DNS requirements

**Verification**

- [ ] Artifact bundle tested in similar environment
- [ ] Transfer mechanism tested
- [ ] Loading process validated
- [ ] Documentation reviewed for offline use
- [ ] Checksums generated for all artifacts

## 🎯 Transfer Mechanism Decision Matrix

**USB / Physical Media**

**When to Use:**
- Small to medium artifact sizes (< 50GB)
- High security requirements
- No network connectivity available
- One-time or infrequent transfers

**Considerations:**
- Size limitations
- Approval process for physical media
- Encryption requirements
- Transfer time

**Secure File Transfer (SFTP/SCP)**

**When to Use:**
- Medium to large artifact sizes
- Scheduled connectivity windows
- Regular update requirements
- Network path available

**Considerations:**
- Connectivity window timing
- Bandwidth limitations
- Transfer verification
- Approval process

**Secure Network Transfer (VPN/Dedicated Link)**

**When to Use:**
- Large artifact sizes
- Frequent updates needed
- Real-time troubleshooting support
- Dedicated secure connection

**Considerations:**
- Setup time and approval
- Bandwidth and latency
- Security requirements
- Ongoing maintenance

**Decision Factors:**

- Artifact size → Larger = Network transfer preferred
- Frequency → More frequent = Network transfer preferred
- Security level → Higher = Physical media preferred
- Timeline → Tighter = Physical media (faster approval)
- Update needs → Frequent updates = Network transfer

## 🎯 Offline Dependency Resolution

**Identify All Dependencies**

- Container image dependencies (base images, layers)
- Helm chart dependencies
- System package dependencies
- Library and runtime dependencies
- Network service dependencies
- External API dependencies

**Resolution Strategies**

**Pre-bundle Everything**
- Include all dependencies in artifact bundle
- Don't assume anything is available
- Test dependency resolution offline

**Use Internal Registries**
- If customer has internal registry, use it
- Pre-load images to their registry
- Understand their registry capabilities

**Dependency Mapping**
- Create dependency tree/diagram
- Document all transitive dependencies
- Test dependency loading process

**Fallback Plans**
- Have alternative approaches if dependencies unavailable
- Plan for missing dependencies
- Know what's critical vs. optional

## 🎯 Validation Workflow

**Pre-Transfer Validation**

- [ ] All artifacts bundled and verified
- [ ] Checksums generated and documented
- [ ] Artifact list documented
- [ ] Transfer mechanism confirmed
- [ ] Customer approval obtained

**Post-Transfer Validation**

- [ ] Verify all artifacts transferred successfully
- [ ] Validate checksums match
- [ ] Confirm artifact list complete
- [ ] Test artifact loading process
- [ ] Verify no corruption

**Pre-Deployment Validation**

- [ ] Environment access confirmed
- [ ] Kubernetes cluster accessible
- [ ] Required tools available
- [ ] Dependencies resolved
- [ ] Network policies understood

**Deployment Validation**

- [ ] Images load successfully
- [ ] Helm charts deploy without errors
- [ ] Pods start and run
- [ ] Services accessible
- [ ] Basic functionality works

**Post-Deployment Validation**

- [ ] All components running
- [ ] Health checks passing
- [ ] Integration points working
- [ ] Performance acceptable
- [ ] Success criteria met

## 🎯 Troubleshooting Without Internet

**Preparation**

- Bundle comprehensive troubleshooting guides
- Include common error solutions
- Prepare diagnostic scripts
- Document known issues and fixes
- Have escalation process defined

**Diagnostic Process**

1. **Check logs** - Use kubectl logs, describe, events
2. **Verify configuration** - Review values, manifests, configs
3. **Test connectivity** - Pod-to-pod, service-to-service
4. **Check resources** - CPU, memory, storage availability
5. **Review documentation** - Offline troubleshooting guides

**Common Issues & Solutions**

**Image Pull Errors**
- Verify images loaded to registry
- Check image names and tags
- Verify registry access
- Check image pull secrets

**Pod Startup Failures**
- Check resource limits and quotas
- Verify storage classes available
- Review init container logs
- Check network policies

**Service Connectivity Issues**
- Verify service endpoints
- Check network policies
- Test DNS resolution
- Review ingress configuration

**When You're Stuck**

- Document everything you've tried
- Capture all logs and error messages
- Use [Requesting help](../internal/requesting-help.md) framework
- Escalate if needed (may require secure channel)
- Consider bringing in additional expertise

## 🎯 Customer Communication

**Pre-Engagement**

- Set expectations early that air-gapped deployments take longer
- Explain why additional time is needed
- Discuss transfer mechanism and approval process
- Clarify what "air-gapped" means to them specifically

**During Engagement**

- Communicate transfer status and timelines
- Set expectations about troubleshooting limitations
- Be transparent about challenges
- Update on progress regularly

**Artifact Handoff**

- Provide clear artifact manifest
- Document transfer process
- Include verification steps
- Set expectations for loading time

**Troubleshooting**

- Be upfront about limitations without internet
- Communicate what you can and can't do
- Set realistic expectations for resolution time
- Use secure channels if available for help

## ⚠️ Gotchas

- "Air-gapped" means different things - clarify exactly what they mean
- Dependency chains are longer than you think - map everything
- Transfer approval takes time - start early
- You can't Google errors - prepare troubleshooting guides
- Missing dependencies discovered late - identify everything upfront
- Artifact corruption during transfer - always verify checksums
- Tools not available - bundle everything you need
- Documentation not offline-readable - use PDFs, markdown
- Assumptions about what's available - assume nothing
- Timeline underestimation - add significant buffer

## 🔗 Technical Resources

- [Lab 02: Air-Gapped Deployment](https://github.com/WBHankins93/implementation-studio/tree/main/labs/02-airgapped-deployment)
- [Troubleshooting](../implementation/troubleshooting.md)
- [Requesting help](../internal/requesting-help.md)
- [Kickoff](../implementation/kickoff.md)

