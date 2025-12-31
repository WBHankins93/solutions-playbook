## Troubleshooting a Blocker

## 📝 Context

Something isn't working during implementation. You've hit a blocker and need to
systematically troubleshoot it. Don't spin your wheels - follow a process and
know when to ask for help.

## 📋 Before You Start Troubleshooting

- [ ] Can you reproduce the issue consistently?
- [ ] Do you have error messages or logs?
- [ ] What were you trying to do when it failed?
- [ ] What changed recently? (Your changes, environment changes, etc.)
- [ ] Have you checked basic connectivity and access?

## 🎯 Troubleshooting Process

**Step 1: Reproduce and Document**

- Can you reproduce it? If not, gather more information
- What's the exact error message or behavior?
- When does it happen? (Always, sometimes, specific conditions?)
- What were you doing when it occurred?
- Take screenshots, copy logs, note timestamps

**Step 2: Isolate the Problem**

- Is it environment-specific? (Works elsewhere, fails here?)
- Is it configuration-related? (Check your values, settings)
- Is it network-related? (Can you reach required endpoints?)
- Is it permission-related? (Do you have the right access?)
- Is it version-related? (Kubernetes, Helm, dependencies?)

**Step 3: Check the Basics**

- Environment access still working?
- Network connectivity (can you reach what you need?)
- Resource availability (CPU, memory, storage)
- Service status (are required services running?)
- Recent changes (what changed in the last hour/day?)

**Step 4: Search and Research**

- Check documentation for known issues
- Search internal knowledge base or past tickets
- Check GitHub issues or release notes
- Review environment-specific guides
- Look for similar problems in team channels

**Step 5: Timebox Your Debugging**

- Set a time limit ⏱️ 30-60 minutes
- If you're not making progress, stop and ask for help
- Don't spend hours on something others have solved
- Document what you've tried before asking

## 🎯 Common Issue Categories

**Deployment Issues**

- Pods not starting
- Images not pulling
- ConfigMaps/Secrets not mounting
- Services not exposing correctly
- Ingress not routing

**Configuration Issues**

- Wrong values in Helm charts
- Missing environment variables
- Incorrect resource limits
- Network policies blocking traffic
- Storage classes not available

**Access Issues**

- Can't access cluster
- Permissions denied
- Service account issues
- RBAC misconfiguration
- Network policies blocking

**Integration Issues**

- Can't reach external services
- Authentication failures
- API version mismatches
- Data format issues
- Timeout problems

## 🎯 When to Ask for Help

**Ask for help if:**

- You've spent 30-60 minutes without progress
- You've tried the obvious fixes
- The issue is blocking critical path
- You don't have the expertise for this area
- The customer is waiting

**How to ask:**

- Use [Requesting help](../internal/requesting-help.md) framework
- Provide context (what you're trying to do)
- Share what you've tried
- Include error messages and logs
- Note urgency level

## ⚠️ Gotchas

- Not reproducing first - you might be debugging the wrong thing
- Not checking logs - error messages tell you a lot
- Assuming it's your fault - could be environment, network, permissions
- Spending too long - timebox and ask for help
- Not documenting what you tried - wastes time when you ask for help
- Panicking - most issues are solvable with a systematic approach

## 🔗 Links

- [Requesting help](../internal/requesting-help.md)
- [Stuck](../recovery/stuck.md)
- [Environment Guides](../environments/)

