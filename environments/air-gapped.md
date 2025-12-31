## Air-Gapped Deployment

## 📝 Context

Customer has disclosed they're air-gapped or network-isolated. This fundamentally
changes how you deliver, deploy, and troubleshoot. Plan extensively - you won't be
able to Google errors or pull images on-demand.

## 🎯 Discovery Questions

- What's the artifact delivery mechanism? (USB, secure file transfer, physical media?)
- Is there any connectivity window for updates? (Scheduled, emergency-only, never?)
- Who handles the physical/secure transfer process? 👥
- What's the approval process for bringing artifacts into the environment?
- How long does the transfer process typically take?
- Are there size limits on transfers?
- Is this completely air-gapped or partially connected?
- Are there internal container registries or artifact repositories?
- What tools are available for troubleshooting? (Can you install new tools?)
- Is there any way to get help from outside? (Phone, secure channel?)

## 🎯 Scoping Considerations

- Add 50% time buffer minimum (often more)
- Account for transfer time and approval process in timeline
- Pre-stage ALL container images before any on-site work
- Map ALL dependencies upfront (you can't discover them later)
- Include transitive dependencies (dependencies of dependencies)
- Prepare all documentation offline (PDFs, markdown, etc.)
- Bundle all tools, scripts, and troubleshooting guides needed
- Plan for offline dependency resolution
- Assume everything takes longer than expected

## 🎯 Customer Communication

- Set expectations early that air-gapped deployments take longer
- Explain why additional time is needed (transfer, approval, offline troubleshooting)
- Discuss transfer mechanism and approval process upfront
- Clarify what "air-gapped" means to them specifically
- Communicate transfer status and timelines regularly
- Be transparent about troubleshooting limitations without internet

## ⚠️ Gotchas

- "Air-gapped" means different things - clarify exactly what they mean
- Dependency chains are longer than you think - map everything upfront
- Transfer approval takes time - start early, don't wait until last minute
- You can't Google errors - prepare comprehensive troubleshooting guides offline
- Missing dependencies discovered late - identify everything before bundling
- Artifact corruption during transfer - always verify checksums
- Tools not available - bundle everything you need (kubectl, Helm, scripts)
- Documentation not offline-readable - use PDFs, markdown, not web-only formats
- Assumptions about what's available - assume nothing, verify everything
- Timeline underestimation - add significant buffer (50%+ minimum)

## 🔗 Technical Resources

- [Lab 02: Air-Gapped Deployment](https://github.com/WBHankins93/implementation-studio/tree/main/labs/02-airgapped-deployment)
- [Air-Gapped Artifact Bundling Checklist](../templates/technical/air-gapped-artifact-bundling.md)
- [Air-Gapped Transfer Decision Matrix](../templates/technical/air-gapped-transfer-matrix.md)
- [Air-Gapped Validation Workflow](../templates/technical/air-gapped-validation.md)
- [Troubleshooting](../implementation/troubleshooting.md)

