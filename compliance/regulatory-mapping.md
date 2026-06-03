---
tags:
  - architecture
  - customer-facing
  - compliance
---

## Regulatory Mapping

## 📝 Context

A customer's architecture decisions are constrained by regulatory requirements — HIPAA,
FedRAMP, SOC 2, PCI DSS, GDPR, or industry-specific mandates. Your job as an SA is to
translate regulatory requirements into architectural decisions: what the regulation
actually requires, what it doesn't require (but people assume it does), and what
architectural patterns satisfy the requirements without over-engineering.

## 📋 Regulatory Assessment Checklist

- [ ] Identify which regulations apply to this customer and workload
- [ ] Determine the scope — which data and systems are in regulatory scope?
- [ ] Understand the customer's current compliance posture
- [ ] Identify their compliance team and legal counsel 👥
- [ ] Review existing audit reports or compliance documentation
- [ ] Understand their compliance timeline (audit date, certification deadline)
- [ ] Clarify your role — you're an architect, not a compliance auditor or lawyer

## 🎯 Common Regulatory Frameworks

### Quick Reference Matrix

| Regulation | Scope | Key Architectural Requirements | Common Misconceptions |
| --- | --- | --- | --- |
| **HIPAA** | Protected Health Information (PHI) | Encryption at rest and in transit, access controls, audit logging, BAA with providers | Does NOT require on-prem. Cloud is fine with proper controls. |
| **FedRAMP** | Federal government data | Authorized cloud services, continuous monitoring, incident response, boundary controls | Authorization level (Low/Moderate/High) determines controls, not a single standard. |
| **SOC 2** | Service organization controls | Varies by trust criteria selected (security, availability, processing integrity, confidentiality, privacy) | It's an audit report, not a certification. Controls are flexible, not prescribed. |
| **PCI DSS** | Cardholder data | Network segmentation, encryption, access control, logging, vulnerability management | Scope reduction (tokenization, outsourcing payment processing) is usually better than securing everything. |
| **GDPR** | EU personal data | Data minimization, consent management, right to erasure, data protection impact assessment, breach notification | Applies based on data subjects' location, not company location. |
| **ITAR** | Defense articles and technical data | US-person access controls, data stored on US soil, no foreign access | Extremely restrictive — often requires dedicated infrastructure. |
| **CCPA/CPRA** | California consumer personal information | Opt-out mechanisms, data deletion, disclosure of data practices | Applies based on business thresholds, not just California presence. |

### Mapping Regulations to Architecture Decisions

For each regulation, the key architectural decisions typically fall into these buckets:

**Data Classification & Handling**
- What data is in scope?
- Where can it be stored? (geography, provider, encryption requirements)
- How must it be transmitted? (encryption standards, protocol requirements)
- How long must it be retained? How must it be destroyed?

**Access Control**
- Who can access regulated data? (role-based, attribute-based)
- How is access authenticated? (MFA requirements, session management)
- How is privileged access managed? (just-in-time, approval workflows)
- How is access reviewed? (frequency, process)

**Audit & Monitoring**
- What events must be logged?
- How long must logs be retained?
- Who reviews logs and how frequently?
- What constitutes a reportable incident? What's the notification timeline?

**Infrastructure Boundaries**
- Are there data residency requirements? (country, region, specific facilities)
- Must the infrastructure be dedicated or is shared/multi-tenant acceptable?
- Are there specific provider certifications required?
- Are there network isolation requirements?

### Regulatory Architecture Template

**Regulatory Architecture Assessment: [Customer/Workload Name]**

**Applicable regulations:** [List]
**Data in scope:** [Description and classification]
**Compliance deadline:** [Date]

**Control Mapping:**

| Requirement | Regulation Source | Architectural Control | Implementation | Status |
|------------|-----------------|----------------------|----------------|--------|
| Encryption at rest | HIPAA §164.312(a)(2)(iv) | AES-256 KMS-managed keys | [Service/config] | [Implemented/Planned/Gap] |
| Access logging | SOC 2 CC6.1 | CloudTrail + centralized SIEM | [Service/config] | [Implemented/Planned/Gap] |
| Data residency | GDPR Art. 44-49 | Region-locked deployment | [Region selection] | [Implemented/Planned/Gap] |

**Gaps and Remediation:**

| # | Gap | Regulation | Risk | Remediation | Effort | Owner |
|---|-----|-----------|------|-------------|--------|-------|
| 1 | [Gap] | [Source] | [H/M/L] | [Plan] | [S/M/L] | [Name] |

## 🎯 Working with Compliance Teams

**Your role vs. their role:**
- You: Translate regulatory requirements into architectural options with tradeoffs
- Them: Interpret regulatory language, make compliance judgments, accept risk
- Neither of you: Make legal determinations — that's legal counsel

**How to be useful:**
- Come with options, not just requirements. "The regulation requires X. Here are three
  ways to implement it, with these tradeoff profiles."
- Understand the difference between the letter and the spirit of the regulation.
  Compliance teams appreciate architects who understand intent, not just checkboxes.
- Help them scope — reducing the blast radius of regulated data (through tokenization,
  segmentation, or outsourcing) is often cheaper than securing everything.

## ⚠️ Gotchas

- Treating compliance as a technical problem — it's a people, process, AND technology problem
- Over-engineering for compliance — the regulation usually doesn't require what the most conservative reading suggests
- Not scoping the regulated environment — securing everything instead of minimizing what's in scope
- Assuming "cloud-compliant" means your workload is compliant — the provider's compliance covers their controls, not yours
- Designing for one regulation and ignoring overlaps — many controls satisfy multiple regulations
- Not involving compliance early enough — discovering requirements late is the most expensive path
- Providing compliance advice you're not qualified to give — stay in your architectural lane

## 🔗 Links

- [Security Architecture](security-architecture.md)
- [Data Residency](data-residency.md)
- [Well-Architected Review](../architecture/well-architected.md)
- [Design Review](../architecture/design-review.md)
- [Risk Reduction Narratives](../business-value/risk-reduction-narratives.md)
