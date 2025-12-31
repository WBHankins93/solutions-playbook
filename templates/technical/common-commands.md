## Common Commands

> Quick reference for common Kubernetes and Helm commands

### Kubernetes - Basic Operations

```bash
# Check cluster access
kubectl cluster-info
kubectl get nodes

# Namespace operations
kubectl get namespaces
kubectl create namespace <name>
kubectl get pods -n <namespace>

# Pod operations
kubectl get pods
kubectl describe pod <pod-name>
kubectl logs <pod-name>
kubectl exec -it <pod-name> -- /bin/sh

# Service operations
kubectl get svc
kubectl get endpoints
```

### Kubernetes - Debugging

```bash
# View pod logs
kubectl logs <pod-name> -n <namespace>
kubectl logs <pod-name> -f  # follow logs
kubectl logs <pod-name> --previous  # previous container instance

# Describe resources
kubectl describe pod <pod-name>
kubectl describe svc <service-name>
kubectl describe ingress <ingress-name>

# Get events
kubectl get events --sort-by='.lastTimestamp'
kubectl get events -n <namespace>

# Check resource usage
kubectl top pods
kubectl top nodes
```

### Helm - Basic Operations

```bash
# List releases
helm list
helm list -n <namespace>

# Install/Upgrade
helm install <release-name> <chart>
helm upgrade <release-name> <chart>
helm upgrade <release-name> <chart> --values <values-file>

# Status and information
helm status <release-name>
helm get values <release-name>
helm get manifest <release-name>

# Uninstall
helm uninstall <release-name>
```

### Helm - Debugging

```bash
# Dry run to see what would be deployed
helm install <release-name> <chart> --dry-run --debug

# Template rendering
helm template <release-name> <chart>
helm template <release-name> <chart> --values <values-file>

# Check for issues
helm lint <chart>
helm test <release-name>
```

### Useful One-Liners

```bash
# Watch pods
kubectl get pods -w

# Get all resources in namespace
kubectl get all -n <namespace>

# Port forward to local machine
kubectl port-forward <pod-name> <local-port>:<pod-port>

# Copy files to/from pod
kubectl cp <pod-name>:/path/to/file ./local-file
kubectl cp ./local-file <pod-name>:/path/to/file
```

