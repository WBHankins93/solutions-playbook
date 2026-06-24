# Visual Prompt Standard

System for generating showcase architecture diagrams at consistent style and verified accuracy.
Spec first, image second, review mandatory. The image is disposable; the spec is the record.

---

## Workflow

1. Write the **Content Spec** (below). This is ground truth.
2. Assemble the prompt: **Style Preamble** + Content Spec.
3. Generate. Expect 2–4 passes — dense labels are the hardest case for image models.
4. Run **Self-Review** against the spec.
5. Send spec + image for **Second Review** before it ships.

---

## Style Preamble (paste on every prompt, unchanged)

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

CRITICAL: render every text label EXACTLY as written in the spec — correct spelling,
no added words, no invented boxes, no extra arrows. If a label is unclear, leave it
blank rather than guessing.
```

> **Note:** the accent is set to the site teal so diagrams match the playbook. Swap `#0f766e` → `#0b62d6` (blue) only if the image is a standalone reference, not embedded in a page.

---

## Content Spec (fill before generating)

```
TITLE:            <one line>
SUBTITLE:         <optional one line>
BOUNDARIES:       <left to right, e.g. Source System | Prismatic | Destination>
SYSTEMS:          <name — role — which boundary>  (one per line)
FLOW (ordered):   <from> --[label]--> <to>        (one per line)
ERROR / ALT PATHS:<from> --[condition]--> <to>     (e.g. failure --> Dead Letter Queue)
ANNOTATIONS:      <numbers / policies, mark each (verified) or (illustrative)>
LEGEND:           <what success/warning/failure colors mean here>
EXACT LABEL LIST: <flat list of every text string that must appear, spelled correctly>
```

> **Note:** the EXACT LABEL LIST is the accountability anchor. Both reviews check the image against it, item by item.

---

## Self-Review (your gate)

- [ ] Every system in the spec is present
- [ ] Every arrow points the correct direction
- [ ] Every string in EXACT LABEL LIST appears and is spelled right
- [ ] Nothing invented — no extra boxes, labels, or arrows
- [ ] Numbers match spec; illustrative ones acceptable, none fabricated
- [ ] Palette and style match the preamble
- [ ] Legend is correct

If any box fails → fix the label by hand if trivial, otherwise regenerate. Don't ship a near-miss.

---

## Second Review (my gate)

Send me both: the filled **Content Spec** and the **generated image**.

I check:
- Image vs spec — same label-by-label pass as above
- Architecture soundness — does the flow make sense, are error paths right
- Number accuracy — flag anything stated as fact that's actually context-dependent or wrong

I return: pass, or a specific list of what's wrong and whether it's a hand-fix or a regen.

> **Note:** I can only verify against the spec you send. No spec, no real review — I'd just be guessing intent.

---

## When a label keeps failing

If one label misses across 3+ generations: reduce total label count, split the diagram into two, or render that label as a caption beside the image instead of inside it. Don't fight the model past three tries.
