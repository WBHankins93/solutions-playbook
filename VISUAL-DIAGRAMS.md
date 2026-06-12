---
tags:
  - architecture
  - internal
  - customer-facing
---

# Visual Diagrams

Use this page when you want to explain a concept quickly with boxes, arrows, and tradeoffs. The diagrams are intentionally simple so they can be redrawn on a whiteboard during interviews or customer conversations.

## Architecture Reviews

- [Design Review Framework](architecture/design-review.md#design-review-framework) - How to move from intent to findings to recommendations.
- [Reference Architecture Structure](architecture/reference-architectures.md#structure) - The layers every reference architecture should cover.
- [Well-Architected Pillars](architecture/well-architected.md#well-architected-pillars) - The six-pillar workload view.
- [Well-Architected Review Flow](architecture/well-architected.md#conducting-the-review) - The review process from scope to follow-up.
- [Security Architecture Layers](compliance/security-architecture.md#defense-in-depth) - Identity, network, data, application, and detection layers.

## Migration

- [Migration Assessment Flow](migration/assessment.md#assessment-framework) - Business context through migration grouping.
- [Migration Wave Planning](migration/strategy.md#wave-planning) - Foundation, core services, complex workloads, and cleanup.
- [Data Migration Decision Tree](migration/strategy.md#data-migration-strategy) - Offline, online, or phased data movement.
- [Cutover Sequence](migration/cutover-planning.md#cutover-framework) - Go/no-go, traffic shift, validation, and rollback.

## Architecture Patterns

- [Microservices Decision Tree](patterns/microservices.md#decision-checklist-are-microservices-right) - When microservices are justified and when a modular monolith is better.
- [Event-Driven Decision Tree](patterns/event-driven.md#decision-checklist-is-event-driven-right) - Pub/sub, queue, stream, or synchronous request-response.
- [API Gateway Pattern](patterns/api-gateway.md#decision-checklist-does-this-need-an-api-gateway) - Consumers, gateway responsibilities, and backend services.
- [Data Mesh Operating Model](patterns/data-mesh.md#readiness-checklist-is-data-mesh-right-for-this-customer) - Domain data products with platform and governance support.

## Environments

- [Air-Gapped Delivery Flow](environments/air-gapped.md#context) - Bundle, approve, transfer, deploy, and validate offline.
- [Private Cluster Architecture](environments/private-cluster.md#context) - Access path, control plane, workloads, registry, storage, and DNS.
- [Firewall-Restricted Network Path](environments/firewall-restricted.md#context) - Runtime sources, proxy, firewall, DNS, and external dependencies.
- [Multi-Tenant Cluster Boundaries](environments/multi-tenant.md#context) - Namespace boundaries, quotas, RBAC, policies, and shared services.
- [Hybrid Environment Boundary](environments/hybrid.md#context) - Cloud, on-prem, DNS, connectivity, identity, and failure domains.

## How to Practice

1. Open one diagram and explain what each box owns.
2. Name the highest-risk boundary or handoff.
3. Explain what evidence would prove the design works.
4. State one tradeoff and one simpler alternative.
