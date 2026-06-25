# Showcase GPT Image Prompt Pack

Use this file to hand off the showcase image set to GPT Image. Paste the
**Global Style Block** plus one **Frame Prompt** at a time. Generate one image per
frame.

After each generation, review against the exact label list. If labels are wrong,
fix by hand only when trivial; otherwise simplify or regenerate.

---

## Global Style Block

Paste this before every frame prompt:

```text
Create a clean modern technical system-architecture diagram in a flat vector
infographic style. The image should look like a polished architecture handoff
or interview reference sheet: crisp, calm, precise, and readable.

Use generous whitespace, precise alignment, and an airy layout on a white
background. Systems should be soft rounded rectangles with thin borders and
very light fills. Group related systems inside labeled boundary containers.
Use simple flat line icons only, one icon per major box at most.

Connectors must be clean thin arrows with short labels. Arrow direction is
meaningful. Do not add arrows that are not requested.

Palette:
- Ink / text: deep navy (#0f1923)
- Primary path: blue (#0b62d6) or teal (#0f766e)
- Success: green (#1a6b35)
- Warning / degraded: amber (#b8860b)
- Failure / blocked: red (#8b1a1a)
- Reliability / control layer: purple (#4b1d7a)
- Soft fills: very light tints of the above

Typography: clean sans-serif. Short bold labels. High contrast. Fully legible
at presentation size. Use title case for box labels.

Do not use photorealism, 3D, heavy gradients, drop-shadow clutter, decorative
noise, fake screenshots, tiny text, or dense paragraphs.

Critical accuracy rule: render every text label exactly as written in the
frame prompt. Do not add extra words, boxes, icons, or arrows. If a label is
unclear, leave it blank rather than guessing.
```

---

## Wave 1

### 1. API Gateway - Request Lifecycle

```text
TITLE: API Gateway - Request Lifecycle
SUBTITLE: One client request, one secure front door, multiple backend services.

Canvas: landscape 16:9.

Layout:
Use three left-to-right boundary containers:
1. Consumers
2. API Gateway
3. Backend Services

Inside "Consumers", stack three boxes:
- Web App
- Mobile App
- Partner API

Inside "API Gateway", create one larger central gateway container with five
stacked concern labels:
- TLS Termination
- Authentication
- Rate Limiting
- Routing & Aggregation
- Cache & Logging

Inside "Backend Services", stack three boxes:
- Order Service
- Product Service
- Loyalty Service

Flow:
- Mobile App -- "one request" --> API Gateway
- API Gateway -- "fan out in parallel" --> Order Service
- API Gateway -- "fan out in parallel" --> Product Service
- API Gateway -- "fan out in parallel" --> Loyalty Service
- Backend Services -- "compose 200 response" --> Mobile App

Use blue or teal for the active request path. Use green for the successful
response path. Include a compact legend at the bottom:
- Blue = active request path
- Green = success

Do not include numeric timeout or latency details inside the image.

Exact label list:
API Gateway - Request Lifecycle
Consumers
API Gateway
Backend Services
Web App
Mobile App
Partner API
TLS Termination
Authentication
Rate Limiting
Routing & Aggregation
Cache & Logging
Order Service
Product Service
Loyalty Service
one request
fan out in parallel
compose 200 response
Blue = active request path
Green = success
```

Caption outside image:
"One client call, fanned out behind a single secure front door. Put exact
timeout or latency numbers in page text, not in the image."

### 2. API Gateway - Response Outcomes

```text
TITLE: API Gateway - Response Outcomes
SUBTITLE: Fail in ways the consumer can act on.

Canvas: landscape 16:9.

Layout:
Place "Request" on the left. Place "API Gateway" in the center as the decision
hub. Place five outcome boxes on the right in a vertical stack.

Outcome boxes:
- 200 OK
- 401 Unauthorized
- 429 Too Many Requests
- 503 Service Unavailable
- 504 Gateway Timeout

Flow:
- Request --> API Gateway
- API Gateway -- "success" --> 200 OK
- API Gateway -- "invalid token" --> 401 Unauthorized
- API Gateway -- "over limit" --> 429 Too Many Requests
- API Gateway -- "circuit open" --> 503 Service Unavailable
- API Gateway -- "backend timeout" --> 504 Gateway Timeout

Color:
- 200 OK in green
- 401 Unauthorized in red
- 429, 503, and 504 in amber

Include a compact legend at the bottom:
- Green = success
- Amber = throttled / degraded
- Red = rejected

Exact label list:
API Gateway - Response Outcomes
Request
API Gateway
200 OK
401 Unauthorized
429 Too Many Requests
503 Service Unavailable
504 Gateway Timeout
success
invalid token
over limit
circuit open
backend timeout
Green = success
Amber = throttled / degraded
Red = rejected
```

Caption outside image:
"Reject early, throttle clearly, and time out deliberately. Detailed retry,
Retry-After, and timeout behavior belongs in the caption or page text."

### 3. Event-Driven Architecture - Order Fan-Out

```text
TITLE: Event-Driven Architecture - Order Fan-Out
SUBTITLE: One event, independent consumers, visible failure handling.

Canvas: landscape 16:9.

Layout:
Use four left-to-right zones:
1. Event Source
2. Event Platform
3. Consumers
4. Reliability Layer

In "Event Source":
- Order System

In "Event Platform":
- Event Topic

In "Consumers", stack three boxes:
- Billing Service
- Inventory Service
- Notification Service

In "Reliability Layer", create a purple band or grouped row with four boxes:
- Idempotency Check
- Retry with Backoff
- Dead Letter Queue
- Alert + Replay

Flow:
- Order System -- "order.created" --> Event Topic
- Event Topic -- "deliver copy" --> Billing Service
- Event Topic -- "deliver copy" --> Inventory Service
- Event Topic -- "deliver copy" --> Notification Service
- Billing Service -- "failure" --> Retry with Backoff
- Inventory Service -- "failure" --> Retry with Backoff
- Notification Service -- "failure" --> Retry with Backoff
- Retry with Backoff -- "max retries" --> Dead Letter Queue
- Dead Letter Queue -- "notify" --> Alert + Replay

Show "Idempotency Check" as a guard attached to the consumer side, not as the
main path.

Color:
- Primary event path in blue or teal
- Reliability layer in purple
- Dead Letter Queue and failure arrows in red
- Retry with Backoff in amber

Exact label list:
Event-Driven Architecture - Order Fan-Out
Event Source
Event Platform
Consumers
Reliability Layer
Order System
Event Topic
Billing Service
Inventory Service
Notification Service
Idempotency Check
Retry with Backoff
Dead Letter Queue
Alert + Replay
order.created
deliver copy
failure
max retries
notify
```

Caption outside image:
"The producer emits one fact and walks away. Consumers process independently,
retry safely, and quarantine failures instead of dropping them silently."

### 4. Microservices - Service Ownership Topology

```text
TITLE: Microservices - Service Ownership Topology
SUBTITLE: Independent teams, independent services, independent data ownership.

Canvas: landscape 16:9.

Layout:
Use four horizontal layers from top to bottom:
1. Consumers
2. API Edge
3. Domain Services
4. Data Ownership

At the top, place:
- Web App
- Mobile App

In "API Edge", place:
- API Gateway

In "Domain Services", place three side-by-side service boxes. Each service box
should have a small owner label:
- Orders Service
- Payments Service
- Inventory Service

Owner labels:
- Team A
- Team B
- Team C

In "Data Ownership", place one cylinder under each service:
- Orders DB
- Payments DB
- Inventory DB

Add a side reliability / operations rail on the right:
- Observability
- CI/CD
- Service Ownership

Flow:
- Web App --> API Gateway
- Mobile App --> API Gateway
- API Gateway --> Orders Service
- API Gateway --> Payments Service
- API Gateway --> Inventory Service
- Orders Service --> Orders DB
- Payments Service --> Payments DB
- Inventory Service --> Inventory DB
- Orders Service -- "event" --> Payments Service
- Orders Service -- "event" --> Inventory Service

Use dashed vertical boundaries around each service plus its database to show
ownership. Do not draw a shared database.

Exact label list:
Microservices - Service Ownership Topology
Consumers
API Edge
Domain Services
Data Ownership
Web App
Mobile App
API Gateway
Orders Service
Payments Service
Inventory Service
Team A
Team B
Team C
Orders DB
Payments DB
Inventory DB
Observability
CI/CD
Service Ownership
event
```

Caption outside image:
"The key visual rule is database-per-service. Shared data stores are the
fastest path back to a distributed monolith."

### 5. Data Mesh - Domain Data Products

```text
TITLE: Data Mesh - Domain Data Products
SUBTITLE: Domains own data products; the platform makes them discoverable and governed.

Canvas: landscape 16:9.

Layout:
Use three main zones:
1. Business Domains
2. Self-Serve Data Platform
3. Data Consumers

In "Business Domains", create three domain containers:
- Customer Domain
- Orders Domain
- Payments Domain

Inside each domain, place one data product:
- Customer Data Product
- Orders Data Product
- Payments Data Product

In "Self-Serve Data Platform", place three platform capabilities:
- Catalog
- Governance
- Pipeline Tooling

In "Data Consumers", place:
- Analytics
- ML Features
- Operations

Flow:
- Customer Domain --> Customer Data Product
- Orders Domain --> Orders Data Product
- Payments Domain --> Payments Data Product
- Customer Data Product -- "publish" --> Catalog
- Orders Data Product -- "publish" --> Catalog
- Payments Data Product -- "publish" --> Catalog
- Governance -- "standards" --> Customer Data Product
- Governance -- "standards" --> Orders Data Product
- Governance -- "standards" --> Payments Data Product
- Catalog -- "discover" --> Analytics
- Catalog -- "discover" --> ML Features
- Catalog -- "discover" --> Operations

Use green for domain-owned data products, blue or teal for the platform path,
and purple for governance.

Exact label list:
Data Mesh - Domain Data Products
Business Domains
Self-Serve Data Platform
Data Consumers
Customer Domain
Orders Domain
Payments Domain
Customer Data Product
Orders Data Product
Payments Data Product
Catalog
Governance
Pipeline Tooling
Analytics
ML Features
Operations
publish
standards
discover
```

Caption outside image:
"Data mesh is not just tooling. The image should make ownership visible: domain
teams publish data products, while the platform provides catalog, tooling, and
governance."

### 6. Reference Architecture - Logical View

```text
TITLE: Reference Architecture - Logical View
SUBTITLE: Components, responsibilities, data flow, and trust boundaries.

Canvas: landscape 16:9.

Layout:
Use four left-to-right boundary containers:
1. Users
2. Experience Layer
3. Application Layer
4. Data Layer

Place:
In "Users":
- End Users
- Admin Users

In "Experience Layer":
- Web App
- Public API

In "Application Layer":
- Core Service
- Workflow Service
- Integration Service

In "Data Layer":
- Primary Database
- Cache
- Object Storage

Add one dashed vertical line between "Experience Layer" and "Application Layer"
called:
- Trust Boundary

Flow:
- End Users --> Web App
- Admin Users --> Web App
- Web App --> Core Service
- Public API --> Integration Service
- Core Service --> Workflow Service
- Workflow Service --> Integration Service
- Core Service --> Primary Database
- Core Service --> Cache
- Integration Service --> Object Storage

Exact label list:
Reference Architecture - Logical View
Users
Experience Layer
Application Layer
Data Layer
End Users
Admin Users
Web App
Public API
Core Service
Workflow Service
Integration Service
Primary Database
Cache
Object Storage
Trust Boundary
```

Caption outside image:
"Use this frame to explain what the system does and where responsibilities sit,
before discussing physical infrastructure."

### 7. Reference Architecture - Physical View

```text
TITLE: Reference Architecture - Physical View
SUBTITLE: Regions, networks, compute, storage, and external dependencies.

Canvas: landscape 16:9.

Layout:
Use three large boundary containers:
1. Edge
2. Cloud Region
3. External Services

Inside "Edge", place:
- DNS
- CDN
- WAF

Inside "Cloud Region", create two availability zone columns:
- Zone A
- Zone B

Inside each zone, place:
- Load Balancer
- App Workers

Below the zones, place shared regional services:
- Managed Database
- Object Storage
- Secrets Manager
- Observability

Inside "External Services", place:
- Identity Provider
- Email Provider
- Partner API

Flow:
- DNS --> CDN
- CDN --> WAF
- WAF --> Load Balancer
- Load Balancer --> App Workers
- App Workers --> Managed Database
- App Workers --> Object Storage
- App Workers --> Secrets Manager
- App Workers --> Observability
- App Workers --> Identity Provider
- App Workers --> Email Provider
- App Workers --> Partner API

Exact label list:
Reference Architecture - Physical View
Edge
Cloud Region
External Services
DNS
CDN
WAF
Zone A
Zone B
Load Balancer
App Workers
Managed Database
Object Storage
Secrets Manager
Observability
Identity Provider
Email Provider
Partner API
```

Caption outside image:
"Use this frame after the logical view. It maps logical components to physical
placement without turning into a cloud-provider product catalog."

### 8. Reference Architecture - Operational View

```text
TITLE: Reference Architecture - Operational View
SUBTITLE: How the system is deployed, observed, recovered, and improved.

Canvas: landscape 16:9.

Layout:
Create a circular or left-to-right lifecycle with five operational blocks:
1. Plan Change
2. Deploy
3. Observe
4. Recover
5. Optimize

Add supporting systems below the lifecycle:
- CI/CD Pipeline
- Monitoring
- Backup + Restore
- Incident Runbook
- Cost Review

Flow:
- Plan Change --> Deploy
- Deploy --> Observe
- Observe --> Recover
- Recover --> Optimize
- Optimize --> Plan Change

Support links:
- CI/CD Pipeline --> Deploy
- Monitoring --> Observe
- Backup + Restore --> Recover
- Incident Runbook --> Recover
- Cost Review --> Optimize

Use green for healthy operations, amber for recovery, and blue or teal for the
normal lifecycle.

Exact label list:
Reference Architecture - Operational View
Plan Change
Deploy
Observe
Recover
Optimize
CI/CD Pipeline
Monitoring
Backup + Restore
Incident Runbook
Cost Review
```

Caption outside image:
"A reference architecture is incomplete unless it explains how the customer will
operate it after launch."

---

## Wave 2

### 9. Technical Deep-Dive - Current To Target Canvas

```text
TITLE: Technical Deep-Dive - Current To Target Canvas
SUBTITLE: Map the customer's world before proposing the target design.

Canvas: landscape 16:9.

Layout:
Use five left-to-right sections:
1. Current State
2. Integration Points
3. Constraints + Risks
4. Target State
5. Decision Outputs

Inside "Current State", place:
- Existing Systems
- Current Data Flow
- Pain Points

Inside "Integration Points", place:
- APIs
- Auth Model
- Data Formats

Inside "Constraints + Risks", place:
- Security
- Performance
- Operations

Inside "Target State", place:
- Proposed Architecture
- Validation Plan

Inside "Decision Outputs", place:
- Scope
- Blockers
- Next Steps

Flow:
- Current State --> Integration Points
- Integration Points --> Constraints + Risks
- Constraints + Risks --> Target State
- Target State --> Decision Outputs

Use amber for "Constraints + Risks". Use green for "Decision Outputs".

Exact label list:
Technical Deep-Dive - Current To Target Canvas
Current State
Integration Points
Constraints + Risks
Target State
Decision Outputs
Existing Systems
Current Data Flow
Pain Points
APIs
Auth Model
Data Formats
Security
Performance
Operations
Proposed Architecture
Validation Plan
Scope
Blockers
Next Steps
```

Caption outside image:
"This should look like a reusable workshop canvas, not a fake customer system.
Its purpose is to structure the architecture review conversation."

### 10. Migration Strategy - Path Options

```text
TITLE: Migration Strategy - Path Options
SUBTITLE: Choose the safest path per workload, not one strategy for everything.

Canvas: landscape 16:9.

Layout:
Use three main zones from left to right:
1. Source Environment
2. Migration Paths
3. Target Environment

Inside "Source Environment", place:
- Existing Workloads
- Source Database
- Users

Inside "Migration Paths", stack three path options:
- Strangler Route
- Parallel Run
- Offline Cutover

Inside "Target Environment", place:
- Target Services
- Target Database
- Monitoring

Add a bottom gate band with:
- Dependency Sequence
- Validation Gate
- Rollback Plan

Flow:
- Users --> Existing Workloads
- Existing Workloads -- "route slice" --> Strangler Route
- Existing Workloads -- "dual run" --> Parallel Run
- Source Database -- "stop and copy" --> Offline Cutover
- Strangler Route --> Target Services
- Parallel Run --> Target Services
- Offline Cutover --> Target Database
- Target Services --> Monitoring
- Dependency Sequence --> Validation Gate
- Validation Gate --> Rollback Plan

Use blue or teal for normal migration paths, amber for validation, and red for
rollback.

Exact label list:
Migration Strategy - Path Options
Source Environment
Migration Paths
Target Environment
Existing Workloads
Source Database
Users
Strangler Route
Parallel Run
Offline Cutover
Target Services
Target Database
Monitoring
Dependency Sequence
Validation Gate
Rollback Plan
route slice
dual run
stop and copy
```

Caption outside image:
"The main message is sequencing and reversibility: migrate dependencies first,
validate before traffic shifts, and keep rollback explicit."

### 11. Security Architecture - Defense In Depth

```text
TITLE: Security Architecture - Defense In Depth
SUBTITLE: Controls across identity, network, data, application, and detection layers.

Canvas: landscape 16:9.

Layout:
Use a layered stack from top to bottom with five horizontal bands:
1. Identity + Access
2. Network Security
3. Data Protection
4. Application Security
5. Detection + Response

On the left side, place protected subjects:
- Users
- Services
- Sensitive Data
- Workloads
- Incidents

In each layer, place one short control phrase:
- Verify Identity
- Limit Traffic
- Encrypt + Classify
- Harden Workloads
- Detect + Respond

Add dashed vertical boundary markers:
- Public Zone
- Private Zone
- Restricted Zone

Flow / association:
- Identity + Access -- "verifies" --> Users
- Identity + Access -- "verifies" --> Services
- Network Security -- "limits" --> Public Zone
- Data Protection -- "protects" --> Sensitive Data
- Application Security -- "hardens" --> Workloads
- Detection + Response -- "reveals" --> Incidents

Use purple for control layers, red only for incidents, green for protected /
healthy state.

Exact label list:
Security Architecture - Defense In Depth
Identity + Access
Network Security
Data Protection
Application Security
Detection + Response
Users
Services
Sensitive Data
Workloads
Incidents
Verify Identity
Limit Traffic
Encrypt + Classify
Harden Workloads
Detect + Respond
Public Zone
Private Zone
Restricted Zone
verifies
limits
protects
hardens
reveals
```

Caption outside image:
"This should communicate layered security and trust boundaries. Keep control
matrix detail in the page, not inside the image."

### 12. Air-Gapped Deployment - Artifact Transfer Flow

```text
TITLE: Air-Gapped Deployment - Artifact Transfer Flow
SUBTITLE: Build connected, approve transfer, deploy and validate offline.

Canvas: landscape 16:9.

Layout:
Use three left-to-right boundary containers:
1. Connected Environment
2. Transfer Boundary
3. Offline Environment

Inside "Connected Environment", place:
- Build Environment
- Artifact Bundle
- Offline Docs
- Tools + Scripts

Inside "Transfer Boundary", place:
- Customer Approval
- Secure Transfer
- Checksum Verification

Inside "Offline Environment", place:
- Internal Registry
- Package Repo
- Offline Deployment
- Validation Evidence

Flow:
- Build Environment --> Artifact Bundle
- Artifact Bundle --> Customer Approval
- Offline Docs --> Customer Approval
- Tools + Scripts --> Customer Approval
- Customer Approval --> Secure Transfer
- Secure Transfer --> Checksum Verification
- Checksum Verification --> Internal Registry
- Checksum Verification --> Package Repo
- Internal Registry --> Offline Deployment
- Package Repo --> Offline Deployment
- Offline Deployment --> Validation Evidence

Use amber for approval and transfer steps. Use green for validation evidence.
Use a strong dashed vertical boundary around "Transfer Boundary".

Exact label list:
Air-Gapped Deployment - Artifact Transfer Flow
Connected Environment
Transfer Boundary
Offline Environment
Build Environment
Artifact Bundle
Offline Docs
Tools + Scripts
Customer Approval
Secure Transfer
Checksum Verification
Internal Registry
Package Repo
Offline Deployment
Validation Evidence
```

Caption outside image:
"The image should make the boundary visible. Air-gapped work succeeds when
dependencies, docs, tools, checksums, and validation evidence move together."

### 13. Hybrid Environment - Cloud And On-Prem Boundary

```text
TITLE: Hybrid Environment - Cloud And On-Prem Boundary
SUBTITLE: Two failure domains connected by network, DNS, identity, and trust.

Canvas: landscape 16:9.

Layout:
Use three large left-to-right boundary containers:
1. Cloud Environment
2. Boundary Services
3. On-Prem Environment

Inside "Cloud Environment", place:
- Cloud Services
- Cloud Observability
- Cloud Data

Inside "Boundary Services", place:
- Split DNS
- VPN / Dedicated Link
- Identity Trust
- Certificate Trust

Inside "On-Prem Environment", place:
- On-Prem Services
- System Of Record
- Local Observability

Flow:
- Cloud Services <--> VPN / Dedicated Link
- VPN / Dedicated Link <--> On-Prem Services
- Cloud Services <--> Split DNS
- On-Prem Services <--> Split DNS
- Cloud Services <--> Identity Trust
- On-Prem Services <--> Identity Trust
- Cloud Services <--> Certificate Trust
- On-Prem Services <--> Certificate Trust
- On-Prem Services --> System Of Record
- Cloud Services --> Cloud Observability
- On-Prem Services --> Local Observability

Add two small failure-domain badges:
- Cloud Failure Domain
- On-Prem Failure Domain

Use blue or teal for healthy bidirectional paths. Use amber around "Boundary
Services" to indicate coordination risk.

Exact label list:
Hybrid Environment - Cloud And On-Prem Boundary
Cloud Environment
Boundary Services
On-Prem Environment
Cloud Services
Cloud Observability
Cloud Data
Split DNS
VPN / Dedicated Link
Identity Trust
Certificate Trust
On-Prem Services
System Of Record
Local Observability
Cloud Failure Domain
On-Prem Failure Domain
```

Caption outside image:
"Hybrid deployments fail most often at the boundary between teams and networks.
This visual should make ownership, trust, and failure domains impossible to miss."

---

## Review Checklist For Every Image

- All exact labels are present and spelled correctly.
- No extra systems, arrows, or labels were invented.
- Arrows point in the requested direction.
- Boundaries are visually clear.
- Label count is still readable.
- Captions were not crammed into the image.
- Colors match the shared language: blue/teal path, green success, amber warning,
  red failure, purple controls.
