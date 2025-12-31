## Hybrid (Cloud + On-Prem) Environment

## 📝 Context

Customer has a hybrid deployment with components in both cloud and on-premises
environments. This introduces connectivity, data flow, and operational complexity
beyond single-environment deployments.

## 🎯 Discovery Questions

- What components run in cloud vs. on-premises?
- How do the environments connect? (VPN, dedicated link, public internet?)
- What's the data flow between environments?
- Are there latency or bandwidth constraints between environments?
- What's the failover or disaster recovery model?
- Are there different compliance requirements for each environment?
- Who manages each environment? (Same team or different?)
- What's the network topology between environments?

## 🎯 Scoping Considerations

- Add 30-40% time buffer for hybrid deployments
- Account for connectivity setup and validation time
- Plan for cross-environment testing and validation
- Understand data residency and compliance requirements
- Consider latency and bandwidth implications
- Account for coordination between environment teams
- Plan for potential connectivity issues during deployment

## 🎯 Customer Communication

- Understand the hybrid architecture and data flow
- Clarify which components go where and why
- Set expectations about cross-environment connectivity
- Discuss latency and performance implications
- Establish process for coordinating between environments
- Clarify compliance and data residency requirements

## ⚠️ Gotchas

- Connectivity between environments can be unreliable - test early
- Latency can cause unexpected issues - understand constraints
- Different teams may manage different environments - coordinate early
- Data residency requirements may dictate placement - clarify early
- Network topology can be complex - get diagrams
- Failover scenarios may not be tested - understand the model
- Compliance requirements may differ - understand each environment

## 🔗 Technical Resources

- [implementation-studio](https://github.com/WBHankins93/implementation-studio)

