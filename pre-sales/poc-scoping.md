## POC Scoping

## 📝 Context

You've done discovery and technical deep-dive. Now you need to define what the POC
will cover, what success looks like, and how long it will take. This is where you
set expectations and avoid scope creep.

## 📋 Pre-Scoping Checklist

- [ ] Review discovery and technical deep-dive notes
- [ ] Understand their success criteria
- [ ] Identify must-have vs. nice-to-have features
- [ ] Know their timeline and decision drivers
- [ ] Understand environment constraints
- [ ] Check with engineering on feasibility

## 🎯 Scoping Framework

**Define Success Criteria**

- What does "success" mean to them? (Get specific)
- What use cases must be validated?
- What are the acceptance criteria?
- How will they measure success?
- Who needs to sign off?

**In Scope**

- Core use case(s) to validate
- Key integrations required
- Performance requirements (if applicable)
- Security/compliance validation
- Day-1 operational tasks

**Out of Scope**

- Production deployment
- Full integration with all systems
- Custom development
- Training and documentation (unless specified)
- Long-term operations

**Timeline**

- How long do they need? (Be realistic)
- What's their decision timeline?
- Account for environment setup time
- Buffer for troubleshooting ⏱️ add 20-30%
- Include validation and sign-off time
- 💡 **Technical Effort Estimation:** Use [implementation-studio POC Sprint lab](https://github.com/WBHankins93/implementation-studio/tree/main/labs/poc-sprint) to validate deployment patterns and estimate technical effort before committing to timelines

**Resources Required**

- Customer 👥 Who needs to be involved? How much time?
- Environment: Do they have it ready? Access granted?
- Artifacts: Container images, charts, documentation
- Support: Who's available for questions?

**Assumptions & Dependencies**

- What are you assuming about their environment?
- What do they need to provide? (credentials, access, data)
- What external dependencies exist?
- What could block progress?

### Scoping Document Template

**POC Scope: [Customer Name]**

**Objective:** [One sentence - what are we proving?]

**Success Criteria:**
- [ ] Criterion 1
- [ ] Criterion 2
- [ ] Criterion 3

**In Scope:**
- [List what's included]

**Out of Scope:**
- [List what's explicitly excluded]

**Timeline:** [Start date] to [End date] ([X] weeks)

**Resources:**
- Customer: [Names, roles, time commitment]
- Environment: [Description, access requirements]
- Artifacts: [What we're providing]

**Assumptions:**
- [List assumptions]

**Next Steps:**
- [ ] Customer approval of scope
- [ ] Environment access granted
- [ ] Kickoff call scheduled

## ⚠️ Gotchas

- Scope creep - "just one more thing" adds up fast
- Unrealistic timelines - customer pressure vs. reality
- Missing dependencies - discover them early
- Vague success criteria - get specific or you'll never "win"
- Assuming environment is ready - it rarely is
- Not documenting out-of-scope - leads to expectations issues

## 🔗 Links

- [Discovery Call](discovery.md)
- [POC Execution](poc-execution.md)
- [POC Recovery](../recovery/poc-recovery.md)
- [Scope Creep](../recovery/scope-creep.md)
- [implementation-studio: POC Sprint Lab](https://github.com/WBHankins93/implementation-studio/tree/main/labs/poc-sprint) - Technical effort estimation and deployment pattern validation

