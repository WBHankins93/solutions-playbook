# Routing Card Pattern

Use this pattern when adding a new situation to [`START-HERE.md`](../START-HERE.md). Keep the field names stable so the Markdown can later be parsed into a docs UI, search card, or lightweight web app route.

## Blank routing card

| Field | Route |
| --- | --- |
| **Situation** | Short user-facing prompt in the user’s words, such as “I have a call in the next 24 hours.” |
| **Use when** | The conditions that make this route the right starting point. |
| **Start here** | One primary playbook link, with optional secondary links only when they clarify the path. |
| **Next artifact** | The checklist, template, update, plan, email, or decision record the user should create next. |
| **Common mistake** | The most likely failure mode to avoid. |

## Copy-paste snippet

```markdown
### “Situation prompt goes here.”

| Field | Route |
| --- | --- |
| **Situation** |  |
| **Use when** |  |
| **Start here** |  |
| **Next artifact** |  |
| **Common mistake** |  |
```

## Authoring guidelines

- Write the `Situation` as a phrase someone would recognize under pressure.
- Keep `Start here` focused on the first playbook to open, not every related document.
- Make `Next artifact` concrete enough that the user knows what to produce before moving on.
- Use `Common mistake` to prevent the behavior that usually creates rework, confusion, or customer risk.
- Prefer relative Markdown links so the routing layer works in GitHub, local editors, generated docs sites, and future UI routes.

## Example

| Field | Route |
| --- | --- |
| **Situation** | “A POC is off track.” |
| **Use when** | Success criteria are slipping, blockers are accumulating, timeline is at risk, or stakeholder confidence is dropping. |
| **Start here** | [POC recovery](../recovery/poc-recovery.md), then update the customer with the [POC status update email](customer/poc-status-update-email.md). |
| **Next artifact** | Recovery plan with blocker list, owner/date for each action, revised success criteria, and communication cadence. |
| **Common mistake** | Waiting until the final readout to acknowledge that the POC is not tracking to plan. |
