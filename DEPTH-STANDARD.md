# Depth Standard

How a generic playbook entry becomes a concrete, worked, talk-track-equipped page.
Hand this to the implementation agent. Apply it per file, not in bulk.

---

## The Five Moves

1. **Worked scenario** — run one concrete, named case end-to-end with a drawn flow. Not "source → destination."
2. **State the numbers** — replace "use retries / back off" with the actual policy (counts, delays, status-code handling).
3. **Failure path** — the flow shows happy path *and* failure (retry → backoff → DLQ), not just success.
4. **Talk track** — a "Say it like this" box at each key decision. The literal sentence said on a call.
5. **Audience lens** — a "who sees what" view (eng / CS / customer) wherever observability applies.

---

## File Tiers — what gets applied where

| Tier | Folders | Moves |
| --- | --- | --- |
| **A — Full** | `patterns/`, `architecture/`, `ci-cd/` | All five |
| **B — Partial** | `pre-sales/`, `implementation/`, `migration/`, `environments/`, `compliance/`, `cost-modeling/` | 1, 2, 4 (add 3 + 5 where relevant) |
| **C — Leave lean** | `battle-cards/`, `templates/`, `internal/`, `lessons/`, `examples/`, `business-value/`, `stakeholder-management/`, `engagements/`, `recovery/` | None — do not pad |

> **Note:** Tier C is deliberate. A worked scenario on a one-page objection card or a talk-track box on a copy-paste template breaks its purpose. Move a folder between tiers only on a conscious call.

---

## Format Rules

- **Tables:** markdown tables by default. They inherit the theme and are dark-mode safe.
- **Custom HTML:** only for what markdown can't do — `.sp-say` (talk track), `.sp-band` (scenario steps), `.sp-pill` (status tags). Nothing else.
- **Flows:** mermaid, in a ` ```mermaid ` fence.
- **Colors:** VitePress CSS variables only. Never hardcode hex — it breaks dark mode.
- **CSS:** the `.sp-*` block lives once in `.vitepress/theme/custom.css`. Do not repeat it per file.

> **Note (mermaid runs in `securityLevel: 'strict'`):** no HTML in node labels, no `<br>`, no click handlers. Keep labels short and single-line.

---

## Accuracy Rule

Reputation artifact. Wrong specifics are worse than vague ones.

- **Universal / verifiable facts** (HTTP status semantics, "backoff doubles each attempt", SQS 14-day max) → state directly.
- **Context-dependent values** (retry counts, rate limits, latency targets, costs) → mark illustrative (`~1s`, `e.g. 1s→2s→4s`) **or** verify against official docs before stating.
- Never invent a specific number and present it as authoritative.

---

## Canonical Example Cast

Reuse the same systems across files so the playbook reads authored, not assembled.

- CRM / system of record → **Salesforce**
- E-commerce → **Shopify**
- ERP → **NetSuite**
- Payments → **Stripe**
- Warehouse → **Snowflake**
- Destination → **internal SaaS product** / **internal CRM**
- CI / build → **GitHub Actions**
- Artifact registry → **Amazon ECR**
- GitOps CD → **ArgoCD**

> **Note:** names are illustrations of a *category*, not endorsements. The page stays vendor-neutral; the example is concrete.

---

## Voice — "Say it like this" boxes

Outcome-first, warm but direct, one clean line. Sound like the author, not a neutral model.
Feed `Ben_Hankins_Voice_Content_Feb26` / voice context to the agent so these come out in register.

---

## Per-File Checklist

- [ ] Tier identified, correct moves applied
- [ ] One worked scenario with a drawn flow (Tier A/B)
- [ ] Numbers stated or marked illustrative — none invented
- [ ] Failure path shown (Tier A)
- [ ] Talk track(s) in author voice
- [ ] Tables in markdown; HTML only for `.sp-*`
- [ ] No per-file `<style>` block once CSS is in `custom.css`

---

## Appendix — exact markup

**CSS (lives in `custom.css`):**

```css
.sp-say { border-left: 3px solid var(--vp-c-brand-1); background: var(--vp-c-brand-soft); border-radius: 0 8px 8px 0; padding: 12px 16px; margin: 14px 0; }
.sp-say .sp-label { font-size: .7rem; font-weight: 700; text-transform: uppercase; letter-spacing: .07em; color: var(--vp-c-brand-1); margin-bottom: 4px; }
.sp-say p { margin: 0; font-style: italic; color: var(--vp-c-text-1); }
.sp-band { display: flex; flex-wrap: wrap; gap: 8px; margin: 14px 0; }
.sp-band .sp-step { flex: 1 1 150px; border: 1px solid var(--vp-c-divider); border-radius: 8px; padding: 10px 12px; background: var(--vp-c-bg-soft); }
.sp-band .sp-step .sp-h { font-weight: 700; font-size: .82rem; color: var(--vp-c-text-1); margin-bottom: 2px; }
.sp-band .sp-step .sp-d { font-size: .78rem; color: var(--vp-c-text-2); }
.sp-pill { display: inline-block; font-size: .72rem; font-weight: 600; padding: 1px 8px; border-radius: 20px; background: var(--vp-c-default-soft); color: var(--vp-c-text-2); }
.sp-pill.ok { background: var(--vp-c-tip-soft); color: var(--vp-c-tip-1); }
.sp-pill.warn { background: var(--vp-c-warning-soft); color: var(--vp-c-warning-1); }
.sp-pill.bad { background: var(--vp-c-danger-soft); color: var(--vp-c-danger-1); }
```

**Talk track:**

```html
<div class="sp-say">
  <div class="sp-label">Say it like this</div>
  <p>"..."</p>
</div>
```

**Scenario band (repeat `.sp-step` per step):**

```html
<div class="sp-band">
  <div class="sp-step"><div class="sp-h">1 · Emit</div><div class="sp-d">...</div></div>
</div>
```

**Status pill:** `<span class="sp-pill warn">429</span>` — `ok` / `warn` / `bad`.
