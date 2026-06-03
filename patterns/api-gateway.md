---
tags:
  - architecture
  - patterns
---

## API Gateway Patterns

## 📝 Context

The customer needs a strategy for exposing services to consumers — internal teams,
external partners, or public developers. An API gateway sits at the boundary between
consumers and backend services, handling cross-cutting concerns like authentication,
rate limiting, routing, and observability so individual services don't have to.

## 📋 Decision Checklist: Does This Need an API Gateway?

- [ ] Multiple backend services behind a single consumer-facing API
- [ ] Cross-cutting concerns (auth, rate limiting, logging) duplicated across services
- [ ] Need to present a stable API surface while backends evolve
- [ ] Multiple consumer types (web, mobile, partner, internal) with different API needs
- [ ] API versioning, deprecation, or lifecycle management required

**If this is a single service with one consumer type:** A gateway adds unnecessary
infrastructure. Handle auth and rate limiting in the service directly.

## 🎯 Core Patterns

### Gateway Routing

The gateway routes requests to the appropriate backend service based on path, headers,
or other request attributes.

```
Consumer → Gateway → /users/* → User Service
                   → /orders/* → Order Service
                   → /products/* → Product Service
```

**Benefits:** Single entry point, simplified consumer configuration, backend services
can be moved or scaled independently.

**Risks:** Gateway becomes a single point of failure. Ensure high availability
(multi-AZ, auto-scaling).

### Gateway Aggregation

The gateway composes responses from multiple backend services into a single response
for the consumer. Useful when a single screen or operation requires data from multiple
services.

**When to use:**
- Mobile clients with latency sensitivity (one call better than five)
- Composing a view that spans multiple domains
- Reducing chattiness between consumer and backend

**When to avoid:**
- Complex business logic in the aggregation — that belongs in a service
- Aggregation requires transactional consistency — gateway can't manage transactions

### Backend for Frontend (BFF)

Separate gateway instances (or configurations) for different consumer types. Each BFF
is tailored to its consumer's needs.

```
Web App → Web BFF → Backend Services
Mobile App → Mobile BFF → Backend Services
Partner API → Partner BFF → Backend Services
```

**Why:** Web, mobile, and partner APIs have different payload requirements, authentication
flows, and rate limits. A single gateway trying to serve all of them becomes bloated.

**Tradeoff:** Multiple gateways to maintain. Justified when consumer needs genuinely diverge.

### Gateway Offloading

Move cross-cutting concerns from individual services to the gateway:

| Concern | Gateway Handles | Service Handles |
| --- | --- | --- |
| **Authentication** | Token validation, identity extraction | Authorization (what this user can do) |
| **Rate limiting** | Per-consumer or per-API-key throttling | Business-level quotas if needed |
| **TLS termination** | External TLS, certificate management | Internal mTLS (service mesh) if required |
| **Request logging** | Access logs, latency metrics | Business event logging |
| **CORS** | Preflight handling, header management | Nothing (gateway handles it) |
| **Request/response transformation** | Header injection, format conversion | Business logic transformation |
| **Caching** | Response caching for idempotent GETs | Cache invalidation signals |

### API Versioning

How to evolve APIs without breaking existing consumers:

| Strategy | Mechanism | Tradeoff |
| --- | --- | --- |
| **URI versioning** | `/v1/users`, `/v2/users` | Explicit, easy to route. Clutters URI space. |
| **Header versioning** | `Accept: application/vnd.api.v2+json` | Clean URIs. Less discoverable, harder to test. |
| **Query parameter** | `/users?version=2` | Simple. Looks like a filter, not a version. |
| **No versioning (additive only)** | New fields added, old fields never removed | Simplest. Only works if you never break compatibility. |

**Recommendation:** URI versioning for external/partner APIs (explicitness wins).
Header versioning or additive-only for internal APIs (less ceremony).

## 🎯 Technology Selection

| Technology | Type | Best For | Considerations |
| --- | --- | --- | --- |
| **AWS API Gateway** | Managed | REST and WebSocket APIs on AWS | Per-request pricing, 29-sec timeout, deep AWS integration |
| **Kong** | Self-managed or cloud | Plugin-rich, multi-cloud | Lua-based plugins, active community, operational overhead if self-managed |
| **Envoy** | Proxy / Service mesh | High-performance, L4/L7, gRPC-native | Often paired with Istio, steep learning curve |
| **NGINX** | Proxy | Simple routing, TLS termination, static config | Lightweight, proven. Limited dynamic routing without Plus. |
| **Azure API Management** | Managed | Azure-native APIs, developer portal | Policy-based transformation, built-in developer portal |
| **Google Apigee** | Managed | Enterprise API management, monetization | Full API lifecycle management, complex feature set |
| **Traefik** | Proxy | Kubernetes-native, auto-discovery | Integrates with K8s ingress, good for container environments |

### Selection Criteria

- **Managed vs. self-managed:** Managed reduces operational burden but limits customization
- **Protocol support:** REST-only, or do you need gRPC, WebSocket, GraphQL?
- **Plugin ecosystem:** Can you extend it for custom auth, transformation, or validation?
- **Performance:** What's the latency overhead? (typically 1-5ms for well-configured gateways)
- **Multi-environment:** Can it run consistently across dev, staging, production?

## 🎯 API Design Principles for SA Engagements

When reviewing or designing APIs at the gateway layer:

- **Consistency over cleverness** — consistent naming, error formats, pagination across all APIs
- **Consumer-first design** — design the API the consumer wants to call, then figure out the backend routing
- **Versioning strategy decided upfront** — retrofitting versioning is painful
- **Documentation as code** — OpenAPI specs generated from code, not maintained separately
- **Rate limiting with clear communication** — return `429` with `Retry-After` header, document limits in developer portal

## ⚠️ Gotchas

- Gateway as the place for business logic — routing and cross-cutting concerns only
- Single gateway for all consumer types — BFF pattern exists for a reason
- No health checks on backends — gateway routes to a dead service, consumers get errors
- TLS termination at gateway without internal encryption — data is unencrypted inside the network
- Rate limits too aggressive for legitimate use — instrument first, then set limits based on real usage
- Gateway configuration drift between environments — treat gateway config as code, deploy through CI/CD
- Ignoring gateway latency in SLA calculations — every hop adds latency

## 🔗 Links

- [Microservices Patterns](microservices.md)
- [Event-Driven Patterns](event-driven.md)
- [Data Mesh Patterns](data-mesh.md)
- [Security Architecture](../compliance/security-architecture.md)
- [Design Review](../architecture/design-review.md)
