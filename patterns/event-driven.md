---
tags:
  - architecture
  - patterns
---

## Event-Driven Architecture Patterns

## 📝 Context

The customer is considering or already using an event-driven architecture — systems
that communicate through events rather than direct calls. Event-driven patterns enable
loose coupling, scalability, and real-time reactivity. They also introduce complexity
in debugging, ordering, and consistency that must be deliberately managed.

## 📋 Decision Checklist: Should This Be Event-Driven?

- [ ] Producers and consumers have different availability or scaling requirements
- [ ] Multiple consumers need to react to the same event independently
- [ ] The system needs to handle bursty or unpredictable load
- [ ] Temporal decoupling is valuable (producer doesn't need to wait for consumer)
- [ ] An audit trail of all events is valuable
- [ ] Eventual consistency is acceptable for this use case

**If most of these are no:** Synchronous request-response is simpler and easier to debug.
Don't add event infrastructure for a system that's fundamentally request-response.

## 🎯 Core Patterns

### Event Types

Not all events are the same. Clarify which type you're working with:

| Type | Description | Example | Consumer Behavior |
| --- | --- | --- | --- |
| **Notification** | Something happened. Minimal data. | "Order 123 was placed" | Consumer fetches details from source if needed |
| **Event-carried state transfer** | Something happened, and here's all the data you need. | "Order 123 was placed: {items, total, customer}" | Consumer can act without calling back to source |
| **Domain event** | A meaningful business occurrence in a bounded context. | "InventoryReserved" | Triggers downstream business logic |
| **Command** | A request for action disguised as a message. | "ProcessPayment" | Receiver is expected to act — this is async RPC, not pure event-driven |

### Messaging Patterns

**Publish-Subscribe**
- Producer publishes events to a topic
- Multiple consumers subscribe and receive independently
- Consumers don't know about each other
- Best for: Fan-out scenarios, multiple teams reacting to the same event

**Point-to-Point Queue**
- Producer sends messages to a queue
- One consumer processes each message
- Messages are consumed once
- Best for: Task distribution, work queues, ordered processing

**Event Streaming**
- Events written to an append-only log (Kafka, Kinesis, Pulsar)
- Consumers read from a position (offset) and can replay
- Log retains events for a configurable duration
- Best for: Audit trails, event sourcing, multiple consumers at different speeds

### Processing Patterns

**Simple event processing:** One event triggers one action. "Order placed" → "Send confirmation email."

**Event correlation:** Multiple events are combined to trigger an action. "Payment received" + "Inventory reserved" → "Ship order." Requires a correlation mechanism (saga, process manager).

**Complex event processing (CEP):** Pattern detection across event streams. "More than 5 failed logins in 60 seconds from the same IP" → "Block IP." Requires a streaming processor (Flink, KSQL, Spark Streaming).

### Delivery Guarantees

| Guarantee | Meaning | Implementation Cost | When Required |
| --- | --- | --- | --- |
| **At-most-once** | Message may be lost, never duplicated | Lowest — fire and forget | Metrics, analytics where loss is acceptable |
| **At-least-once** | Message will arrive, possibly more than once | Medium — requires acknowledgment and retry | Most business events — consumer must be idempotent |
| **Exactly-once** | Message arrives exactly once | Highest — requires transactions or deduplication | Financial transactions, inventory counts |

**Default to at-least-once with idempotent consumers.** Exactly-once is expensive and
fragile. Making consumers handle duplicates gracefully is almost always cheaper than
achieving exactly-once delivery.

### Error Handling

**Dead letter queue (DLQ):** Messages that fail processing after retry attempts are moved
to a DLQ for investigation. Every queue should have a DLQ. Every DLQ should have
monitoring and alerting.

**Poison message handling:** A message that always fails processing (malformed, references
missing data) must be detected and quarantined to prevent it from blocking the queue.

**Compensating actions:** When a downstream step in a saga fails, earlier steps need to
be reversed. Design compensating actions for every step in a multi-service workflow.

**Replay capability:** Store events durably enough to replay from a point in time. This
is invaluable for recovery, debugging, and populating new consumers.

## 🎯 Technology Selection

| Technology | Pattern | Ordering | Retention | Best For |
| --- | --- | --- | --- | --- |
| **AWS SQS** | Queue | Per-queue (FIFO) or best-effort | 14 days max | Simple work queues, decoupled processing |
| **AWS SNS** | Pub-sub | No ordering guarantee | No retention | Fan-out notifications |
| **Apache Kafka** | Streaming | Per-partition | Configurable (days to indefinite) | High-throughput streaming, event sourcing |
| **AWS Kinesis** | Streaming | Per-shard | 1-365 days | AWS-native streaming alternative to Kafka |
| **RabbitMQ** | Queue + Pub-sub | Per-queue | Until consumed | Flexible routing, complex topologies |
| **Azure Service Bus** | Queue + Pub-sub | Per-queue (sessions) | Configurable | Enterprise messaging with transactions |
| **Google Pub/Sub** | Pub-sub | Per-subscription (ordering key) | 31 days | GCP-native event distribution |

### Selection Criteria

- **Throughput:** How many events per second? Kafka and Kinesis handle millions. SQS handles
  tens of thousands.
- **Ordering:** Do events need to be processed in order? Kafka guarantees per-partition
  order. SQS FIFO guarantees per-group.
- **Retention:** Do you need to replay events? Kafka retains indefinitely. SQS discards
  after consumption.
- **Operational burden:** Managed services (SQS, SNS, Pub/Sub) vs. self-managed (Kafka).
  Kafka is powerful but operationally expensive.
- **Ecosystem:** Does your team already run Kafka? Don't add SQS. Already on AWS? Don't
  add Kafka for simple queuing.

## ⚠️ Gotchas

- Treating everything as an event — synchronous calls are fine when you need an immediate response
- No dead letter queue — failed messages disappear silently, data is lost
- Ordering assumptions — most messaging systems don't guarantee global ordering, only per-partition/group
- Consumer lag going unmonitored — a consumer falling behind is a ticking time bomb
- Not making consumers idempotent — at-least-once delivery means duplicates happen
- Event schemas without versioning — schema changes break consumers if not managed
- "We'll just use Kafka" for simple queuing — SQS handles simple cases with zero operational overhead
- No replay strategy — when something goes wrong, you want to reprocess from a known point

## 🔗 Links

- [Microservices Patterns](microservices.md)
- [API Gateway Patterns](api-gateway.md)
- [Data Mesh Patterns](data-mesh.md)
- [Design Review](../architecture/design-review.md)
- [Reference Architectures](../architecture/reference-architectures.md)
