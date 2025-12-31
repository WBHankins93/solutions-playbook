## Air-Gapped Troubleshooting Guide

> Full context: [environments/air-gapped.md](../../environments/air-gapped.md)

### Preparation

- Bundle comprehensive troubleshooting guides
- Include common error solutions
- Prepare diagnostic scripts
- Document known issues and fixes
- Have escalation process defined

### Diagnostic Process

1. **Check logs** - Use kubectl logs, describe, events
2. **Verify configuration** - Review values, manifests, configs
3. **Test connectivity** - Pod-to-pod, service-to-service
4. **Check resources** - CPU, memory, storage availability
5. **Review documentation** - Offline troubleshooting guides

### Common Issues & Solutions

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

### When You're Stuck

- Document everything you've tried
- Capture all logs and error messages
- Use [Requesting help](../../internal/requesting-help.md) framework
- Escalate if needed (may require secure channel)
- Consider bringing in additional expertise

### Offline Dependency Resolution

**Identify All Dependencies**
- Container image dependencies (base images, layers)
- Helm chart dependencies
- System package dependencies
- Library and runtime dependencies
- Network service dependencies
- External API dependencies

**Resolution Strategies**
- Pre-bundle everything - include all dependencies in artifact bundle
- Use internal registries - if customer has internal registry, use it
- Dependency mapping - create dependency tree/diagram
- Fallback plans - have alternative approaches if dependencies unavailable

