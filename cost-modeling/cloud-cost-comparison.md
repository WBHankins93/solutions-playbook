---
tags:
  - architecture
  - customer-facing
  - cost
---

## Cloud Cost Comparison

## 📝 Context

A customer is evaluating cloud providers, comparing cloud to on-prem, or assessing
whether to stay with their current provider. This guide helps you structure an
apples-to-apples cost comparison that accounts for the real differences between
options — not just the compute hourly rate.

## 📋 Comparison Checklist

- [ ] Define the workload being compared — same workload across options, not abstract pricing
- [ ] Identify the service equivalents across providers (they're never 1:1)
- [ ] Gather actual usage data (not theoretical, not peak)
- [ ] Include networking costs (egress is where cloud bills surprise people)
- [ ] Model with commitment discounts (reserved, savings plans) where applicable
- [ ] Include support costs at the tier the customer actually needs
- [ ] Factor in tooling and operational differences between platforms

## 🎯 Comparison Framework

### Service Mapping

Cloud providers use different names, pricing models, and capability bundles for
equivalent services. Map them explicitly:

| Capability | AWS | Azure | GCP | On-Prem Equivalent |
| --- | --- | --- | --- | --- |
| General compute | EC2 | Virtual Machines | Compute Engine | VMware / bare metal |
| Container orchestration | EKS | AKS | GKE | Self-managed K8s |
| Serverless compute | Lambda | Functions | Cloud Functions | N/A (or OpenFaaS) |
| Managed relational DB | RDS / Aurora | Azure SQL / Cosmos | Cloud SQL / AlloyDB | Self-managed PostgreSQL/MySQL |
| Object storage | S3 | Blob Storage | Cloud Storage | MinIO / NetApp |
| Message queue | SQS / SNS | Service Bus | Pub/Sub | RabbitMQ / Kafka |
| CDN | CloudFront | Azure CDN / Front Door | Cloud CDN | Cloudflare / Akamai |
| Monitoring | CloudWatch | Azure Monitor | Cloud Monitoring | Prometheus / Grafana |
| Identity | IAM / Cognito | Entra ID | IAM / Identity Platform | Active Directory |

**Important:** Service equivalents are approximate. Differences in features, limits,
and pricing granularity mean you can't just swap names — you need to verify each
mapping for the specific workload.

### Cost Dimensions

Structure the comparison across these dimensions:

**Compute**
- Instance type and size for the workload
- On-demand vs. reserved vs. spot pricing
- Auto-scaling behavior and cost implications
- License costs (Windows, RHEL, SQL Server bring-your-own vs. included)

**Storage**
- Storage class (hot, warm, cold, archive)
- IOPS and throughput pricing
- Replication costs (cross-AZ, cross-region)
- Lifecycle management (automatic tiering)

**Networking**
- Data transfer out (egress) — this is often the biggest surprise
- Cross-AZ data transfer
- Cross-region data transfer
- VPN/Direct Connect/Interconnect costs
- Load balancer pricing (per hour + per rule + per GB)

**Database**
- Instance pricing vs. serverless pricing
- Storage and I/O costs
- Backup storage costs
- Read replica costs
- Multi-AZ / high availability surcharge

**Managed Services**
- Kubernetes cluster management fee (EKS charges, AKS doesn't, GKE has tiers)
- Monitoring and logging per-GB ingestion costs
- Secrets management pricing
- Certificate management pricing

**Support**
- Support tier pricing (business, enterprise)
- What's included vs. what's extra
- Response time SLAs per tier

### Hidden Cost Differentiators

These costs are easy to overlook but often material:

| Factor | What to Watch |
| --- | --- |
| Egress pricing | AWS/Azure charge per-GB egress; some providers discount or waive it |
| Cross-AZ traffic | Significant for microservices architectures with many inter-service calls |
| NAT Gateway costs | AWS NAT Gateway charges per-hour + per-GB — adds up fast for private subnets |
| Log ingestion | CloudWatch Logs, Azure Monitor Logs, and Cloud Logging all charge per-GB |
| IP address costs | AWS started charging for public IPv4 addresses in 2024 |
| Data transfer between services | Some providers charge for traffic between their own services |
| Marketplace licensing | Third-party AMIs/images often have hourly surcharges |

### Comparison Template

**Cloud Cost Comparison: [Workload Name]**

**Compared options:** [Option A] vs. [Option B] (vs. [Option C])
**Workload profile:** [Description — compute, storage, network, database requirements]
**Pricing as of:** [Date — cloud pricing changes frequently]

| Cost Category | Option A | Option B | Option C | Notes |
|--------------|----------|----------|----------|-------|
| Compute | $/mo | $/mo | $/mo | [Instance types used] |
| Storage | $/mo | $/mo | $/mo | [Tiers and volumes] |
| Networking | $/mo | $/mo | $/mo | [Egress estimate] |
| Database | $/mo | $/mo | $/mo | [Service and tier] |
| Managed services | $/mo | $/mo | $/mo | [List services] |
| Support | $/mo | $/mo | $/mo | [Tier] |
| **Monthly total** | **$/mo** | **$/mo** | **$/mo** | |
| **Annual total** | **$/yr** | **$/yr** | **$/yr** | |
| With commitments (1yr) | $/yr | $/yr | $/yr | [RI/SP coverage %] |
| With commitments (3yr) | $/yr | $/yr | $/yr | [RI/SP coverage %] |

**Non-price differentiators:**

| Factor | Option A | Option B | Notes |
|--------|----------|----------|-------|
| Feature maturity for this workload | [H/M/L] | [H/M/L] | |
| Team familiarity | [H/M/L] | [H/M/L] | |
| Compliance certifications | [List] | [List] | |
| Regional availability | [Regions] | [Regions] | |
| Existing enterprise agreement | [Y/N] | [Y/N] | |

## ⚠️ Gotchas

- Comparing list prices — negotiated enterprise pricing can be 30-50% lower
- Ignoring egress costs — this is consistently where cloud bills surprise customers
- Using pricing calculators without real usage data — calculators are only as accurate as your inputs
- Not factoring in commitment discounts — on-demand pricing is the worst case, not the baseline
- Comparing managed service to self-hosted without including ops labor — RDS looks expensive until you count DBA hours
- Stale pricing — cloud pricing changes quarterly, sometimes monthly
- Ignoring the switching cost itself — migrating between clouds has real cost

## 🔗 Links

- [TCO Framework](tco-framework.md)
- [Cost Optimization](optimization.md)
- [Migration Assessment](../migration/assessment.md)
- [Well-Architected Review](../architecture/well-architected.md)
