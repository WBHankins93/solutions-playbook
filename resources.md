---
tags:
  - reference
---

# External Resources

A curated map of the **authoritative, primary sources** behind the frameworks in this
playbook. The guides teach the working shape of each practice; these links are where you go
to verify the detail, cite the standard, or go deeper. Each in-guide page also carries its
own **📚 Further reading** section — this page is the aggregated index.

> These are external, third-party resources. They change over time; treat the playbook's
> summaries as the durable part and these as the living source of truth.

## Architecture & well-architected

- [AWS Well-Architected Framework](https://aws.amazon.com/architecture/well-architected/) — the six-pillar model
- [AWS Well-Architected Tool](https://aws.amazon.com/well-architected-tool/) — run and track a structured review
- [Azure Well-Architected Framework](https://learn.microsoft.com/azure/well-architected/) — pillars plus assessment checklists
- [Google Cloud Architecture Framework](https://cloud.google.com/architecture/framework) — cross-pillar guidance
- [AWS Architecture Center](https://aws.amazon.com/architecture/) · [Azure Architecture Center](https://learn.microsoft.com/azure/architecture/) · [Google Cloud Architecture Center](https://cloud.google.com/architecture) — reference designs
- [adr.github.io](https://adr.github.io/) · [MADR](https://adr.github.io/madr/) — architecture decision records
- [CNCF Cloud Native Landscape](https://landscape.cncf.io/) — the cloud-native building blocks

## Architecture patterns

- [microservices.io](https://microservices.io/) — Chris Richardson's pattern catalog
- [Microservices — Fowler & Lewis](https://martinfowler.com/articles/microservices.html) · [MonolithFirst](https://martinfowler.com/bliki/MonolithFirst.html)
- [The Twelve-Factor App](https://12factor.net/) — baseline service properties
- [Event-Driven — Fowler](https://martinfowler.com/articles/201701-event-driven.html) · [Event Sourcing](https://martinfowler.com/eaaDev/EventSourcing.html) · [Saga pattern](https://microservices.io/patterns/data/saga.html)
- [Apache Kafka docs](https://kafka.apache.org/documentation/) · [AWS Event-Driven Architecture](https://aws.amazon.com/event-driven-architecture/)
- [Data Mesh Principles — Dehghani](https://martinfowler.com/articles/data-mesh-principles.html) · [Data Mesh Learning](https://www.datameshlearning.com/)
- [API Gateway pattern](https://microservices.io/patterns/apigateway.html) · [Backends for Frontends](https://samnewman.io/patterns/architectural/bff/) · [Envoy Proxy](https://www.envoyproxy.io/docs)

## CI/CD & delivery

- [DORA (DevOps Research & Assessment)](https://dora.dev/) — the four key delivery metrics
- [Google Cloud DevOps / DORA capabilities](https://cloud.google.com/devops)
- [Continuous Integration — Fowler](https://martinfowler.com/articles/continuousIntegration.html) · [continuousdelivery.com](https://continuousdelivery.com/)
- [BlueGreenDeployment](https://martinfowler.com/bliki/BlueGreenDeployment.html) · [CanaryRelease](https://martinfowler.com/bliki/CanaryRelease.html) · [Feature Toggles](https://martinfowler.com/articles/feature-toggles.html)
- [OpenGitOps](https://opengitops.dev/) · [Argo CD](https://argo-cd.readthedocs.io/) · [Argo Rollouts](https://argoproj.github.io/rollouts/)

## Supply-chain & pipeline security

- [SLSA](https://slsa.dev/) — supply-chain levels for software artifacts
- [OWASP Top 10 CI/CD Security Risks](https://owasp.org/www-project-top-10-ci-cd-security-risks/)
- [NIST SSDF (SP 800-218)](https://csrc.nist.gov/pubs/sp/800/218/final) — secure software development framework
- [CISA — SBOM](https://www.cisa.gov/sbom) · [Sigstore](https://www.sigstore.dev/) · [OpenSSF Scorecard](https://securityscorecards.dev/)

## Security architecture

- [OWASP ASVS](https://owasp.org/www-project-application-security-verification-standard/) · [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [NIST Cybersecurity Framework](https://www.nist.gov/cyberframework) · [NIST Zero Trust (SP 800-207)](https://csrc.nist.gov/pubs/sp/800/207/final)
- [CIS Controls](https://www.cisecurity.org/controls) · [CIS Benchmarks](https://www.cisecurity.org/cis-benchmarks)

## Compliance & regulation

- [HHS — HIPAA Security Rule](https://www.hhs.gov/hipaa/for-professionals/security/index.html)
- [FedRAMP](https://www.fedramp.gov/) · [NIST SP 800-53](https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final)
- [PCI Security Standards Council](https://www.pcisecuritystandards.org/)
- [GDPR — full text (EUR-Lex)](https://eur-lex.europa.eu/eli/reg/2016/679/oj) · [EU Standard Contractual Clauses](https://commission.europa.eu/law/law-topic/data-protection/international-dimension-data-protection/standard-contractual-clauses-scc_en)
- [AICPA — SOC 2](https://www.aicpa-cima.com/topic/audit-assurance/audit-and-assurance-greater-than-soc-2)

## Migration

- [AWS — 6 Strategies for Migrating (the 6 R's)](https://aws.amazon.com/blogs/enterprise-strategy/6-strategies-for-migrating-applications-to-the-cloud/)
- [AWS Migration Hub](https://aws.amazon.com/migration-hub/) · [AWS Prescriptive Guidance](https://docs.aws.amazon.com/prescriptive-guidance/)
- [Azure Cloud Adoption Framework](https://learn.microsoft.com/azure/cloud-adoption-framework/) · [Google Cloud Migration Center](https://cloud.google.com/migration-center/docs)
- [StranglerFigApplication — Fowler](https://martinfowler.com/bliki/StranglerFigApplication.html)

## Cost & FinOps

- [FinOps Foundation — Framework](https://www.finops.org/framework/)
- [AWS Pricing Calculator](https://calculator.aws/) · [Azure Pricing Calculator](https://azure.microsoft.com/pricing/calculator/) · [Google Cloud Pricing Calculator](https://cloud.google.com/products/calculator)
- [AWS Well-Architected — Cost Optimization Pillar](https://docs.aws.amazon.com/wellarchitected/latest/cost-optimization-pillar/welcome.html)

## Reliability & risk

- [Google SRE Books](https://sre.google/books/) — SLOs, error budgets, release engineering
- [NIST Risk Management Framework](https://csrc.nist.gov/projects/risk-management/about-rmf) · [NIST SP 800-30](https://csrc.nist.gov/pubs/sp/800/30/r1/final)
- [ISO 31000 — Risk Management](https://www.iso.org/iso-31000-risk-management.html)
- [AWS Well-Architected — Reliability Pillar](https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/welcome.html)

## 🔗 Related in this playbook

- [Content Index](CONTENT-INDEX.md) — the full internal inventory
- [Learning Paths](LEARNING-PATHS.md) — structured skill-building sequences
- [Visual Diagrams](VISUAL-DIAGRAMS.md) — whiteboard-ready diagrams
