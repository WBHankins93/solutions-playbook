# Showcase Spec — `patterns/api-gateway.md`

Governed by [`VISUAL-PROMPT-STANDARD.md`](../VISUAL-PROMPT-STANDARD.md). The spec is the record; the image is disposable.
Status: **awaiting Second Review** (do not generate until approved).

**Density resolution:** split into **two frames** + numeric annotations moved to **captions** (per the standard's
"split the diagram / render as a caption" guidance). Each frame is ~13–18 labels — the reliable zone — instead of one ~30-label frame.

---

## Frame 1 — Request Lifecycle (happy path)

```
TITLE:        API Gateway — Request Lifecycle
SUBTITLE:     (in caption, not in image)

BOUNDARIES:   Consumers | API Gateway | Backend Services

SYSTEMS:
  Web app                — consumer        — Consumers
  Mobile app             — consumer        — Consumers
  Partner API            — consumer        — Consumers
  TLS Termination        — gateway concern — API Gateway   (stacked list, top→bottom)
  Authentication         — gateway concern — API Gateway
  Rate Limiting          — gateway concern — API Gateway
  Routing & Aggregation  — gateway concern — API Gateway
  Cache & Logging        — gateway concern — API Gateway
  Order Service          — backend         — Backend Services
  Product Service        — backend         — Backend Services
  Loyalty Service        — backend         — Backend Services

FLOW (ordered):
  Mobile app        --[one request]-->         API Gateway
  API Gateway       --[fan out in parallel]--> Order Service
  API Gateway       --[fan out in parallel]--> Product Service
  API Gateway       --[fan out in parallel]--> Loyalty Service
  Backend Services  --[compose 200 response]-> Mobile app

LEGEND:       Teal = active request path   ·   Green = success

CAPTION (below image, plain text):
  "One client call, fanned out behind a single secure front door.
   Gateway overhead ~1–5ms per hop (illustrative).
   AWS API Gateway default integration timeout: 29s (verified)."

EXACT LABEL LIST (Frame 1):
  API Gateway — Request Lifecycle ·
  Consumers · API Gateway · Backend Services ·
  Web app · Mobile app · Partner API ·
  TLS Termination · Authentication · Rate Limiting · Routing & Aggregation · Cache & Logging ·
  Order Service · Product Service · Loyalty Service ·
  one request · fan out in parallel · compose 200 response
```

> Dropped from v1: `validate token` / `check limit` edge labels (the Authentication / Rate Limiting boxes already carry that meaning). Merged `Cache` + `Access Logs & Metrics` → `Cache & Logging`. ~18 labels.

---

## Frame 2 — Status-Code Outcomes (failure handling)

```
TITLE:        API Gateway — Response Outcomes

NODES:
  Request          — entry
  API Gateway      — decision hub
  200 OK           — success outcome
  401 Unauthorized — rejected outcome
  429 Too Many Requests — throttled outcome
  503 Service Unavailable — degraded outcome
  504 Gateway Timeout — degraded outcome

FLOW:
  Request      --[ ]-->                     API Gateway
  API Gateway  --[success]-->               200 OK
  API Gateway  --[invalid token]-->         401 Unauthorized
  API Gateway  --[over limit]-->            429 Too Many Requests
  API Gateway  --[circuit open]-->          503 Service Unavailable
  API Gateway  --[backend timeout]-->       504 Gateway Timeout

LEGEND:       Green = success  ·  Amber = throttled / degraded (429, 503, 504)  ·  Red = rejected (401)

CAPTION (below image, plain text):
  "Fail in ways the consumer can act on — reject early, never hang.
   429 returns a Retry-After header (verified).
   Circuit breaker opens after N consecutive failures (illustrative).
   504 fires at the 29s default integration timeout (verified)."

EXACT LABEL LIST (Frame 2):
  API Gateway — Response Outcomes ·
  Request · API Gateway ·
  200 OK · 401 Unauthorized · 429 Too Many Requests · 503 Service Unavailable · 504 Gateway Timeout ·
  success · invalid token · over limit · circuit open · backend timeout
```

> ~13 labels. `Retry-After` detail moved to caption so the node reads cleanly as `429 Too Many Requests`.

---

## Assembled prompts (Style Preamble + Frame — paste one at a time)

### Frame 1 prompt

```
Clean modern technical system-architecture diagram, flat vector infographic style.
Generous whitespace, precise alignment, airy spacing. White background.
Systems as soft rounded rectangles with thin borders and very light fills.
Group related systems inside labeled boundary containers.
Connectors are clean thin arrows with short labels; arrow direction is meaningful.
Simple flat line icons only, minimal and consistent. No photorealism, no 3D,
no heavy gradients, no drop-shadow clutter, no decorative noise.

Palette:
- Ink / text: deep navy (#0f1923)
- Primary accent / active path: teal (#0f766e)
- Success: green (#1a6b35)   - Warning: amber (#b8860b)   - Failure: red (#8b1a1a)
- Soft fills: very light tints of the above

Typography: clean sans-serif. Short bold labels. High contrast, fully legible.

CRITICAL: render every text label EXACTLY as written — correct spelling, no added words,
no invented boxes, no extra arrows. If a label is unclear, leave it blank rather than guessing.

TITLE: API Gateway — Request Lifecycle
Three left-to-right boundary containers: "Consumers", "API Gateway", "Backend Services".
In "Consumers": Web app, Mobile app, Partner API (stacked).
In "API Gateway", a vertical stack of concern labels: TLS Termination, Authentication,
Rate Limiting, Routing & Aggregation, Cache & Logging.
In "Backend Services": Order Service, Product Service, Loyalty Service (stacked).
Teal path: Mobile app --"one request"--> API Gateway; API Gateway --"fan out in parallel"-->
Order Service, Product Service, Loyalty Service; then --"compose 200 response"--> back to Mobile app (green).
Legend: teal = active request path, green = success.
```

### Frame 2 prompt

```
[same Style Preamble + palette + CRITICAL block as Frame 1]

TITLE: API Gateway — Response Outcomes
Center node "API Gateway" with an entry arrow from "Request".
Five outcome boxes, each reached by one labeled arrow from API Gateway:
  --"success"--> "200 OK" (green)
  --"invalid token"--> "401 Unauthorized" (red)
  --"over limit"--> "429 Too Many Requests" (amber)
  --"circuit open"--> "503 Service Unavailable" (amber)
  --"backend timeout"--> "504 Gateway Timeout" (amber)
Legend: green = success, amber = throttled/degraded, red = rejected.
```

---

## Self-Review (gate per frame before sending to Second Review)

- [ ] All systems/nodes present, in correct boundary
- [ ] All arrows present, correct direction
- [ ] Every string in that frame's EXACT LABEL LIST appears, spelled right
- [ ] Nothing invented — no extra boxes/labels/arrows
- [ ] Numbers live only in captions; none fabricated inside the image
- [ ] Palette/style match the preamble; legend correct

> If a label still drops after 3 passes on a frame: hand-fix if trivial, else simplify that frame further. Don't fight the model past three tries.
