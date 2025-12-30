## Air-Gapped Deployment

## 📝 Context

Customer has disclosed they're air-gapped or network-isolated.

## 🎯 Discovery Questions

- What's the artifact delivery mechanism? (USB, secure file transfer, etc.)
- Is there any connectivity window for updates?
- Who handles the physical/secure transfer process?

## 🎯 Scoping Considerations

- Add 50% time buffer minimum
- Pre-stage all container images before any on-site work
- Assume you won't have internet access to troubleshoot

## 🎯 Customer Communication

- Set expectations early that air-gapped deployments take longer
- Establish clear handoff process for artifacts

## ⚠️ Gotchas

- "Air-gapped" means different things to different customers - clarify exactly
- Dependency chains are longer than you think

## 🔗 Technical Resources

- [Lab 02: Air-Gapped Deployment](https://github.com/WBHankins93/implementation-studio/tree/main/labs/02-airgapped-deployment)

