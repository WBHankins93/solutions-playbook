---
tags:
  - architecture
  - patterns
---

## Data Mesh Patterns

## 📝 Context

A customer's data platform is becoming a bottleneck — a central data team can't keep
up with demand from business domains, ETL pipelines are brittle, and the data warehouse
is a tangle of dependencies. Data mesh is an organizational and architectural approach
that decentralizes data ownership to domain teams while maintaining interoperability
through standards and self-serve infrastructure.

## 📋 Readiness Checklist: Is Data Mesh Right for This Customer?

- [ ] Multiple business domains generate and consume data independently
- [ ] Central data team is a bottleneck for data pipeline requests
- [ ] Domain teams have (or can develop) data engineering capability
- [ ] The organization is willing to invest in self-serve data infrastructure
- [ ] Data governance and quality standards can be enforced through platforms, not just process
- [ ] The organization has enough scale to justify the overhead (typically 50+ engineers)

**If most of these are no:** A well-run centralized data platform is simpler and more
appropriate for smaller organizations or early-stage data maturity.

## 🎯 Core Principles

Data mesh is built on four principles. All four must be present — implementing one
or two without the others creates a mess, not a mesh.

### 1. Domain-Oriented Data Ownership

Each business domain owns its data as a product. The domain team is responsible for
producing, maintaining, and serving that data — not the central data team.

**What this means architecturally:**
- Domain teams own their data pipelines, transformations, and storage
- Data is published through well-defined contracts (schemas, SLAs, documentation)
- Each domain decides its own technology stack within platform constraints
- The central data team becomes a platform team, not a pipeline team

**Example domains:** Customer, Order, Inventory, Payment, Marketing, Logistics

**Anti-pattern:** Renaming the same centralized pipelines as "domain-owned" without
actually distributing ownership, skill, or accountability.

### 2. Data as a Product

Data produced by a domain must be treated with the same rigor as a customer-facing
product:

| Data Product Quality | What It Means |
| --- | --- |
| **Discoverable** | Other teams can find it (data catalog, search) |
| **Addressable** | Consistent naming and access patterns |
| **Trustworthy** | Quality metrics, freshness SLAs, known lineage |
| **Self-describing** | Schema, documentation, sample queries |
| **Interoperable** | Follows organizational standards for formats and protocols |
| **Secure** | Access controls, classification, privacy compliance |

**Data product specification template:**

```markdown
## Data Product: [Name]

**Domain:** [Owner domain]
**Owner:** [Team name]
**Description:** [What this data represents]
**Schema:** [Link to schema definition]
**SLA:** Freshness: [X min/hours], Availability: [X%], Quality: [thresholds]
**Access:** [How to request access, what credentials/roles needed]
**Lineage:** [Source systems, transformation summary]
**Known limitations:** [What this data does NOT represent, caveats]
```

### 3. Self-Serve Data Infrastructure

A platform layer that makes it easy for domain teams to produce and consume data
products without needing deep infrastructure expertise.

**Platform capabilities:**
- Data storage provisioning (data lakes, warehouses, databases)
- Pipeline orchestration tooling (scheduling, monitoring, retry)
- Schema registry and data catalog
- Access control and policy enforcement
- Data quality monitoring
- Cost management and chargeback

**The platform team's job:** Reduce the cognitive load on domain teams. A domain
engineer should be able to publish a new data product in hours, not weeks.

### 4. Federated Computational Governance

Governance is enforced through the platform (automated policies, standards, tooling)
rather than through manual review processes.

**What gets federated:**
- Global interoperability standards (formats, naming conventions, schema standards)
- Security and access control policies
- Data quality thresholds
- Privacy and compliance rules (classification, retention, masking)
- Cost guardrails

**What stays with domains:**
- Schema design within their bounded context
- Pipeline implementation and scheduling
- Technology selection within platform constraints
- Data product roadmap and prioritization

## 🎯 Implementation Approach

### Phase 1: Foundation

- Establish the platform team and initial self-serve capabilities
- Pick 1-2 mature domains to pilot data product ownership
- Define interoperability standards (file formats, schema registry, naming conventions)
- Implement a data catalog for discoverability

### Phase 2: Expand

- Onboard additional domains
- Build out data quality monitoring and SLA tracking
- Implement automated governance policies
- Establish cross-domain data product consumption patterns

### Phase 3: Scale

- All major domains producing data products
- Self-serve infrastructure handles common patterns without platform team involvement
- Governance is primarily automated
- Federated governance council meets regularly to evolve standards

## 🎯 Common Data Mesh Architectures

**Lakehouse per domain:** Each domain has its own lakehouse (Delta Lake, Iceberg) with
a shared catalog layer for cross-domain discovery.

**Domain-owned pipelines with shared warehouse:** Domains own their transformations but
publish to a shared analytical warehouse with domain-scoped schemas.

**Event-driven data products:** Domains publish data as event streams (Kafka topics).
Consumers materialize views for their needs. Strongest decoupling but highest
complexity.

See also: [Event-Driven Patterns](event-driven.md)

## ⚠️ Gotchas

- Data mesh without platform investment — domain teams can't build infrastructure from scratch
- Treating data mesh as a technology choice — it's primarily an organizational change
- Implementing all four principles simultaneously — phase the rollout, starting with ownership and product thinking
- Domains producing data with no consumers — build for actual demand, not theoretical completeness
- No interoperability standards — without standards, you get data islands instead of a mesh
- Underestimating governance — federated governance is harder than centralized governance, not easier
- Small organizations adopting data mesh — the overhead doesn't pay off below a certain scale

## 🔗 Links

- [Event-Driven Patterns](event-driven.md)
- [Microservices Patterns](microservices.md)
- [API Gateway Patterns](api-gateway.md)
- [Design Review](../architecture/design-review.md)
- [Reference Architectures](../architecture/reference-architectures.md)
