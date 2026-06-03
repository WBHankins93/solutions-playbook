---
tags:
  - architecture
  - customer-facing
  - compliance
---

## Data Residency

## 📝 Context

The customer has requirements about where data is stored and processed — driven by
regulation (GDPR, data sovereignty laws), customer contracts, or internal policy.
Data residency constraints shape fundamental architecture decisions: region selection,
replication strategy, disaster recovery design, and even which cloud services are usable.

## 📋 Data Residency Checklist

- [ ] Identify which data has residency requirements
- [ ] Determine the geographic constraint — country, region, or specific jurisdiction
- [ ] Understand whether the constraint applies to storage only or also processing
- [ ] Clarify whether backups and DR copies are subject to the same constraint
- [ ] Check whether metadata and logs are in scope
- [ ] Understand the regulatory source of the requirement
- [ ] Identify cloud provider region availability in the required geography
- [ ] Assess impact on latency, DR, and multi-region architecture

## 🎯 Data Residency Framework

### Understanding the Requirement

Data residency requirements vary significantly in scope and strictness:

| Dimension | Question | Impact |
| --- | --- | --- |
| **What data** | All data, or specific categories (PII, health, financial)? | Determines scope of constraints |
| **Where** | Specific country, EU/EEA, continent, or "not X"? | Determines region selection |
| **Storage vs. processing** | Must data be stored in-region, or also processed in-region? | Affects compute placement |
| **Backups and DR** | Are backup copies and DR replicas subject to the same rules? | Constrains DR architecture |
| **Metadata and logs** | Are access logs, metrics, and metadata in scope? | Affects monitoring architecture |
| **Transit** | Can data transit through other regions in network routing? | Affects CDN and traffic routing |
| **Personnel** | Can people outside the region access the data (even for support)? | Affects team structure and access controls |

### Architecture Patterns for Data Residency

**Pattern 1: Region-Locked Deployment**

Everything — compute, storage, database, backups — in a single region.

- Simplest approach, easiest to audit
- Sacrifices multi-region redundancy and DR
- Acceptable when the residency region has multiple availability zones
- Limitations: Single-region outage affects all workloads

**Pattern 2: Regional Primary with Restricted DR**

Primary workload in the residency region. DR in a second region within the same
jurisdiction (e.g., both EU regions for GDPR).

- Provides resilience without violating residency
- Requires that the DR region satisfies the same regulatory requirements
- More complex failover because DR must stay within jurisdiction boundaries

**Pattern 3: Data-Layer Residency with Global Compute**

Regulated data stays in-region. Compute can run globally but must access data
through APIs that enforce residency boundaries.

- Works for applications with global users but localized data
- Introduces latency for out-of-region compute accessing in-region data
- Requires careful API design to prevent data leaking to non-compliant regions
- Must ensure caching and CDN layers don't store regulated data outside the region

**Pattern 4: Multi-Jurisdiction Deployment**

Separate deployments per jurisdiction, each with its own data stores.

- Required when serving customers across multiple data residency regimes
- Most complex to operate — N deployments instead of one
- Data cannot be aggregated across jurisdictions without anonymization or consent
- Each deployment must be independently compliant

### Cloud Provider Region Considerations

When selecting regions for data residency:

- **Region availability:** Not all services are available in all regions. Check that
  the services your architecture requires are available in the required region.
- **Pricing:** Region pricing varies. Some residency-constrained regions carry a premium.
- **Capacity:** Some regions have limited capacity for specific instance types.
- **Compliance certifications:** Provider compliance certifications may vary by region.
- **Edge locations:** CDN and edge services may route through locations outside the
  required region — verify the provider's traffic routing.

### Data Residency Assessment Template

**Data Residency Assessment: [Customer/Workload Name]**

**Data classifications in scope:**

| Data Type | Classification | Residency Requirement | Source of Requirement |
|-----------|---------------|----------------------|----------------------|
| [Type] | [PII/PHI/Financial/etc.] | [Country/Region] | [Regulation/Contract] |

**Region selection:**

| Requirement | Selected Region(s) | Rationale |
|------------|-------------------|-----------|
| Primary | [Region] | [Why] |
| DR | [Region] | [Why — must satisfy same residency rules] |

**Architecture pattern:** [Which pattern above, and why]

**Services validated for region availability:**

| Service | Available in Primary? | Available in DR? | Alternative if Not |
|---------|----------------------|-----------------|-------------------|
| [Service] | [Y/N] | [Y/N] | [Alternative] |

**Residency controls implemented:**

- [ ] Region-locked resource policies (prevent deployment outside allowed regions)
- [ ] Data replication restricted to compliant regions
- [ ] Backup and snapshot policies region-locked
- [ ] CDN and caching verified to not store data outside region
- [ ] Access controls restricting personnel access by location (if required)
- [ ] Monitoring and logging data stored within residency boundary

## ⚠️ Gotchas

- Assuming "EU region" satisfies all EU member state requirements — some countries have additional rules
- Forgetting about backups — data replicated to a backup region outside the jurisdiction violates residency
- CDN caching regulated data — edge caches in other countries may violate residency requirements
- Log and monitoring data — CloudWatch, Datadog, etc. may store data outside the required region by default
- Support access — if your cloud provider's support team accesses data from another country, that may violate requirements
- Not enforcing region constraints in IaC — without guardrails, someone will deploy to the wrong region
- Confusing data residency with data sovereignty — residency is about location, sovereignty is about legal jurisdiction over the data

## 🔗 Links

- [Regulatory Mapping](regulatory-mapping.md)
- [Security Architecture](security-architecture.md)
- [Well-Architected Review](../architecture/well-architected.md)
- [Hybrid Environment Guide](../environments/hybrid.md)
- [Air-Gapped Deployment Guide](../environments/air-gapped.md)
