## Firewall-Restricted Environment

## 📝 Context

Customer has strict firewall rules limiting egress/ingress traffic. This is different
from air-gapped - there's connectivity, but it's heavily restricted. Common in
regulated industries or security-conscious organizations.

## 🎯 Discovery Questions

- What egress restrictions exist? (Which domains/IPs are allowed?)
- What ingress restrictions exist? (What can reach the cluster?)
- Is there a proxy or egress gateway we need to configure?
- What's the process for requesting firewall rule changes?
- How long does firewall rule approval take?
- Are there whitelist/allowlist requirements for external services?
- What ports and protocols are allowed?
- Are there restrictions on DNS resolution?

## 🎯 Scoping Considerations

- Add 30-40% time buffer for firewall-restricted deployments
- Account for firewall rule approval time in timeline
- Identify all external dependencies early (container registries, APIs, etc.)
- Plan for proxy configuration if required
- Understand DNS resolution constraints
- Account for potential connectivity testing delays
- Consider alternative artifact delivery methods if needed

## 🎯 Customer Communication

- Set expectations about firewall rule approval timelines
- Establish clear process for requesting rule changes
- Identify who approves firewall changes and their availability
- Discuss whitelist requirements early
- Plan for connectivity validation and testing
- Clarify proxy configuration responsibilities

## ⚠️ Gotchas

- "Firewall-restricted" means different things - get specific rules
- Firewall rule approval can take days or weeks - start early
- Hidden dependencies - you'll discover more as you go
- Proxy configuration can break things silently - test thoroughly
- DNS restrictions can cause unexpected failures - validate early
- Some services require specific IPs, not just domains - clarify requirements
- Firewall rules may change without notice - document what's allowed

## 🔗 Technical Resources

- [implementation-studio](https://github.com/WBHankins93/implementation-studio)

