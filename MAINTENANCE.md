# Playbook Maintenance

Use this process to turn engagement retrospectives into reusable improvements across the playbook instead of letting lessons stay isolated in `lessons/`.

## Review Cadence

Run a maintenance review **monthly** if the team is actively adding retrospectives, or **quarterly** if retrospective volume is low. Schedule the review before planning new enablement work so guide and template updates can be prioritized alongside new content.

## Review Inputs

Before the review, gather:

- New or updated retrospectives in [`lessons/`](lessons/)
- Recent issues, PR feedback, or field notes that mention playbook gaps
- Any templates, scripts, customer-facing examples, or internal artifacts referenced by retrospectives

## Review Process

1. **Review new retrospectives**
   - Read every retrospective added since the last maintenance review.
   - Capture the outcome, root causes, action items, and artifacts worth saving.
   - Note whether each lesson identifies a playbook update, example, or battle card.

2. **Identify repeated patterns**
   - Group similar failures, successful tactics, customer objections, environment constraints, and escalation triggers.
   - Prioritize patterns that appear across multiple engagements or represent high-impact risk.
   - Distinguish one-off context from reusable guidance.

3. **Update relevant guides and templates**
   - Add or refine guidance in the lifecycle area where the lesson applies, such as `pre-sales/`, `implementation/`, `environments/`, `recovery/`, or `templates/`.
   - Prefer small, practical updates: checklist items, decision points, warning signs, sample language, or validation steps.
   - Link back to supporting lessons when the context helps future readers understand why the guidance exists.

4. **Add new battle cards or examples**
   - Convert repeated objections, failure modes, or recovery patterns into reusable battle cards when a reader needs fast tactical guidance.
   - Convert strong artifacts into examples when they help readers copy, adapt, or compare against real-world output.
   - Keep examples sanitized and product/customer-neutral unless explicit approval exists to share details.

5. **Archive outdated advice**
   - Remove guidance that is no longer accurate, safe, or aligned with current practice.
   - Replace outdated recommendations with current guidance rather than leaving contradictory notes in place.
   - If historical context is still useful, mark it clearly as deprecated and explain what superseded it.

6. **Close the loop**
   - Record which files changed as a result of the review.
   - Open issues for larger improvements that cannot be completed during the review.
   - Update the reviewed retrospectives or review notes so future maintainers can see what was incorporated.

## Maintenance Checklist

Use this checklist during each review:

- [ ] Reviewed all new or changed files in `lessons/` since the last review
- [ ] Identified repeated patterns, risks, objections, and successful tactics
- [ ] Updated relevant guides, templates, or checklists
- [ ] Added or refreshed battle cards/examples where tactical reuse is valuable
- [ ] Archived or replaced outdated advice
- [ ] Created follow-up issues for larger improvements
- [ ] Documented which playbook files changed because of the review

## Suggested Review Output

Capture a short summary in the PR, issue, or review notes:

```markdown
## Maintenance Review: YYYY-MM

Retrospectives reviewed:
- `lessons/example-retro.md`

Patterns found:
- Pattern 1
- Pattern 2

Playbook updates made:
- `path/to/file.md` — what changed and why

Follow-ups:
- [ ] Larger improvement or owner/date
```
