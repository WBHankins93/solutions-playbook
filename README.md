# SE Playbook

**Battle-tested operational frameworks for Solutions Engineers who need to deliver results, not just read docs.**

This is your "what to do right now" playbook. Open it when you get assigned a customer, need to prep for a call in 30 minutes, or hit a blocker during implementation. No theory. Just frameworks, checklists, and templates you can use immediately.

---

## 🔨 Why I Built This

After years of SE work across healthcare, energy, telecom, tech and enterprise clients, I was repeating the same patterns but documenting them differently each time.

**The problem:** Frameworks scattered across Slack messages, Google Drive docs, and local notes. Discovery questions improvised on every call. POC scope creep because I didn't have consistent frameworks. Recovery strategies reinvented when things broke.

**Without this repo:** Searching old Slack threads for "what questions did I ask?" Re-learning POC scoping patterns between clients. Improvising recovery strategies when demos crash or POCs fail.

**With this repo:** Run better discovery calls with battle-tested question frameworks. Scope POCs that actually win with clear success criteria. Recover from failures with proven strategies. Handle complex environments (air-gapped, private clusters) without reinventing the wheel.

**What you get:** 42 frameworks, checklists, and templates covering the full SE lifecycle—from first discovery call to customer handoff. Copy-paste ready discovery questions, POC scoping templates, environment-specific guides, and recovery strategies tested in enterprise implementations where mistakes are expensive.

---

## 🗺️ Quick Navigation

> **🚨 Need help right now?** → **[START-HERE.md](START-HERE.md)** - Find your situation and get routed to the exact guide you need in seconds.

**New to a situation?** → [START-HERE.md](START-HERE.md) - Find your scenario and get routed to the right guide

**Want to level up?** → [LEARNING-PATHS.md](LEARNING-PATHS.md) - Structured skill development from Foundations to Advanced

**Need a template?** → Browse the [`templates/`](templates/) directory for copy-paste ready artifacts

### 🔥 Top 5 Urgent Workflows

- **Discovery call prep** → [START-HERE route](START-HERE.md#2-i-need-to-prepare-for-a-discovery-call) → [Discovery call framework](pre-sales/discovery.md)
- **POC scoping** → [START-HERE route](START-HERE.md#3-i-need-to-scope-a-poc) → [POC scoping framework](pre-sales/poc-scoping.md)
- **Demo recovery** → [START-HERE route](START-HERE.md#5-my-demo-went-wrong-or-is-about-to-go-wrong) → [Demo recovery](recovery/demo-recovery.md)
- **Air-gapped deployment** → [START-HERE route](START-HERE.md#6-the-customer-has-an-environment-constraint) → [Air-gapped deployment](environments/air-gapped.md)
- **Internal escalation / requesting help** → [Leadership update route](START-HERE.md#7-i-need-to-update-leadership) or [internal help route](START-HERE.md#8-im-stuck-and-need-internal-help) → [Requesting help from engineering](internal/requesting-help.md)

---

## 🎯 Who This Is For

**If you're a Solutions Engineer, Technical Sales Engineer, or Customer Success Engineer**, this repo helps you:

- **Run better discovery calls** with battle-tested question frameworks
- **Scope POCs that actually win** with clear success criteria and scope management
- **Handle complex environments** (air-gapped, private clusters, firewall-restricted) without reinventing the wheel
- **Recover from failures** (demo crashes, POC blockers, scope creep) with proven strategies
- **Coordinate internally** with templates for handoffs, status updates, and escalation
- **Level up your skills** with structured learning paths from Foundations to Advanced

**This is not a training manual or product documentation.** It's a routing system and collection of practical frameworks for getting things done.

**This playbook scales with you, from first-year SE to technical lead.**

---

## ⚡ Immediate Payoff: What You Can Steal Right Now

### 📋 Copy-Paste Ready Templates

- **[Discovery Questions](templates/discovery-questions.md)** - 50+ questions organized by category (infrastructure, security, compliance, operations)
- **[Kickoff Agenda](templates/kickoff-agenda.md)** - Complete implementation kickoff call structure
- **[POC Status Update Email](templates/customer/poc-status-update-email.md)** - Customer-facing communication template
- **[Handoff Document](templates/handoff-document.md)** - SE-to-SE or SE-to-Customer Success handoff template
- **[Status Update Format](templates/status-update-template.md)** - Internal status reporting template

### 🎯 Decision Frameworks

- **[Discovery Call Framework](pre-sales/discovery.md)** - Pre-call checklist, question framework, post-call actions
- **[POC Scoping Framework](pre-sales/poc-scoping.md)** - Define success criteria, in/out of scope, timeline, resources
- **[Troubleshooting Framework](implementation/troubleshooting.md)** - 5-step process for getting unstuck
- **[Escalation Framework](recovery/escalation.md)** - When and how to escalate strategically

### 🚀 Environment-Specific Guides

- **[Air-Gapped Deployments](environments/air-gapped.md)** - Artifact bundling, transfer mechanisms, offline validation
- **[Private Clusters](environments/private-cluster.md)** - Network isolation, access patterns, security considerations
- **[Firewall-Restricted](environments/firewall-restricted.md)** - Port requirements, proxy configurations, egress controls
- **[Multi-Tenant](environments/multi-tenant.md)** - Isolation strategies, resource quotas, tenant management
- **[Hybrid Cloud](environments/hybrid.md)** - Cloud + on-prem integration patterns

### 🔧 Recovery Strategies

- **[Demo Recovery](recovery/demo-recovery.md)** - What to do when your demo crashes
- **[POC Recovery](recovery/poc-recovery.md)** - 5-step framework for salvaging failing POCs
- **[Scope Creep Management](recovery/scope-creep.md)** - Early warning signs and how to say no gracefully
- **[Getting Unstuck](recovery/stuck.md)** - Self-assessment and escalation framework

---

## 📚 What's Inside

```
se-playbook/
├── engagements/          # New customer, joining existing, inherited handoffs
├── pre-sales/           # Discovery, demos, POCs, technical deep-dives
├── implementation/      # Kickoff, mid-point checkpoints, troubleshooting, handoff
├── environments/        # Air-gapped, private, restricted, multi-tenant, hybrid
├── recovery/            # Demo failures, POC recovery, escalation, scope creep
├── internal/            # Team coordination, status updates, requesting help
├── templates/           # Customer emails, technical checklists, handoff docs
└── lessons/             # Retrospective templates for continuous improvement
```

**42 complete guides and templates** covering the full SE lifecycle from first discovery call to customer handoff.

---

## 🏆 Social Proof

**Built from real enterprise implementations** - These frameworks have been battle-tested in:
- Complex air-gapped environments with strict security requirements
- Multi-tenant SaaS deployments with resource constraints
- Enterprise POCs with tight timelines and high stakes
- Hybrid cloud integrations spanning on-prem and public cloud

**Patterns used in production** - Every framework here has been refined through actual customer engagements, not theoretical exercises.

---

## 🚀 Get Started

1. **New customer assignment?** → [START-HERE.md](START-HERE.md) → `engagements/new-customer.md`
2. **Discovery call tomorrow?** → [pre-sales/discovery.md](pre-sales/discovery.md)
3. **POC starting next week?** → [pre-sales/poc-scoping.md](pre-sales/poc-scoping.md)
4. **Something broke?** → [START-HERE.md](START-HERE.md) → Find your recovery scenario

---

## 🤝 Engage & Contribute

**This playbook gets better with real-world feedback.**

- ⭐ **Star this repo** if you find it useful
- 🐛 **Open an issue** if you want a pattern added or have feedback
- 🔧 **PRs welcome** for real-world additions from your own engagements
- 💬 **Share your experience** - What worked? What didn't? What's missing?

**Looking for technical implementation patterns?** Check out [implementation-studio](https://github.com/WBHankins93/implementation-studio) for hands-on deployment labs and technical reference implementations.

---

## 📖 Related Resources

- **[implementation-studio](https://github.com/WBHankins93/implementation-studio)** - Technical deployment patterns and hands-on labs (Kubernetes, Helm, air-gapped, private clusters)
- **[LEARNING-PATHS.md](LEARNING-PATHS.md)** - Structured skill development with self-assessment and progress tracking

---

**Ready to deliver better results?** Start with [START-HERE.md](START-HERE.md) and find your situation.
