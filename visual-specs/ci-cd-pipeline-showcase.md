# Showcase Spec — `ci-cd/pipeline-design.md`

Governed by [`VISUAL-PROMPT-STANDARD.md`](../VISUAL-PROMPT-STANDARD.md). The spec is the record; the image is disposable.
Status: **awaiting Second Review** (do not generate until approved).

**Density resolution:** single frame, ~17 labels (within the reliable zone). All numbers live in the
caption, not in the image.

---

## Frame — Commit to Production

```
TITLE:        CI/CD Pipeline — Commit to Production
SUBTITLE:     (in caption, not in image)

BOUNDARIES:   Source | CI (build + test) | Registry | CD (promote) | Environments

SYSTEMS:
  Commit             — source            — Source
  GitHub Actions     — build + test      — CI
  Amazon ECR         — artifact registry — Registry
  ArgoCD             — GitOps deploy      — CD
  Staging            — environment        — Environments
  Production         — environment        — Environments

FLOW (ordered):
  Commit          --[merge to main]-->      GitHub Actions
  GitHub Actions  --[push image]-->         Amazon ECR
  Amazon ECR      --[same artifact]-->      ArgoCD
  ArgoCD          --[deploy]-->             Staging
  Staging         --[gate: smoke tests]-->  Production

ERROR / ALT PATHS:
  Staging     --[tests fail]-->        Block promotion
  Production  --[error rate breach]--> Rollback to previous

LEGEND:       Teal = promotion path  ·  Green = passed gate  ·  Red = blocked / rollback

CAPTION (below image, plain text):
  "Build the artifact once; promote that same image through staging to production.
   Illustrative: build ~6 min, tests ~4 min, image ~120 MB, rollback < 5 min.
   Gates and rollback thresholds are set from the customer's SLOs (illustrative)."

EXACT LABEL LIST:
  CI/CD Pipeline — Commit to Production ·
  Source · CI · Registry · CD · Environments ·
  Commit · GitHub Actions · Amazon ECR · ArgoCD · Staging · Production ·
  merge to main · push image · same artifact · deploy · gate: smoke tests ·
  Block promotion · Rollback to previous
```

> ~17 labels. Keep all timing/size numbers in the caption so node labels read cleanly.

---

## Self-Review (gate before Second Review)

- [ ] All systems present, in the correct boundary
- [ ] Promotion path is one continuous teal flow Commit → … → Production
- [ ] Both alt paths shown: tests-fail → Block promotion; error-rate → Rollback
- [ ] Every string in EXACT LABEL LIST appears, spelled right
- [ ] Nothing invented — no extra boxes/labels/arrows
- [ ] Numbers live only in the caption; none fabricated inside the image
- [ ] Palette/style match the preamble; legend correct

> If a label still drops after 3 passes: hand-fix if trivial, else split Source/CI from CD/Environments into two frames. Don't fight the model past three tries.
