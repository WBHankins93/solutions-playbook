## Starting Implementation

## 📝 Context

You're kicking off an implementation with a customer. The goal is to establish a
clear starting point, confirm assumptions from discovery, and set up for success.

## 📋 Before You Start Checklist

**Confirm the basics:**

- [ ] Do you have access to the customer's environment?
- [ ] Is the environment ready? (Cluster exists, namespaces created, permissions granted)
- [ ] Are artifacts available? (Container images accessible or need transfer)
- [ ] Do you have a primary point of contact on the customer side?
- [ ] Is there a communication channel established?
- [ ] Do you have documented scope and success criteria?

**Validate assumptions:**

- [ ] Re-confirm environment constraints
- [ ] Verify versions (Kubernetes, Helm, dependencies)
- [ ] Check for any changes since discovery

## 🎯 Kickoff Call Agenda

1. **Introductions** (if new people) ⏱️ 5 min
2. **Recap scope and success criteria** ⏱️ 5 min
3. **Environment walkthrough** ⏱️ 10-15 min
4. **Communication and cadence** ⏱️ 5 min
5. **Timeline and milestones** ⏱️ 5-10 min
6. **Questions and concerns** ⏱️ 5 min

## 🎯 Implementation Phases

**Phase 1: Environment Validation**

- Confirm cluster access
- Verify networking
- Check storage classes, ingress controllers, DNS
- Document deviations from expected setup

**Phase 2: Artifact Staging**

- Transfer container images if air-gapped
- Deploy Helm charts or manifests
- Configure environment-specific values

**Phase 3: Core Deployment**

- Deploy the application
- Validate basic functionality
- Run smoke tests

**Phase 4: Integration**

- Connect to customer systems
- Configure for specific use cases
- Test end-to-end workflows

**Phase 5: Validation & Handoff**

- Run through success criteria with customer
- Document what was deployed and how
- Create runbooks for day-2 operations
- Conduct handoff session

### During Implementation

- Communicate proactively - don't go silent
- Document as you go
- Timebox troubleshooting ⏱️ ask for help after 30-60 minutes
- Validate incrementally

## ⚠️ Gotchas

- "It worked in my environment" - customer environments differ
- Permissions gaps - discover this early
- Undocumented dependencies - ask what else is running
- Scope creep - know when to say "let's add that to a follow-up"
- Customer availability - build buffer into timeline

## 🔗 Links

- [Environment Guides](../environments/)
- [Troubleshooting](troubleshooting.md)
- [Handoff](handoff.md)
- [implementation-studio Labs](https://github.com/WBHankins93/implementation-studio)

