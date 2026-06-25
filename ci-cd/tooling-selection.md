---
tags:
  - architecture
  - ci-cd
---

# CI/CD Tooling Selection

## 📝 Context

Customers ask "what should we use?" The honest answer is rarely a single tool — it's a
*fit* between their environment, team, and constraints. Your value as an SE/SA is framing
the tradeoffs, not declaring a winner. Discovery already asks "what CI/CD tooling are you
using today?" ([Discovery Questions](../templates/discovery-questions.md)); this page turns
that answer into a recommendation.

## 📋 Decision Checklist: What Constrains the Choice?

- [ ] **Hosting** — can they use a SaaS runner, or must it run inside their network?
- [ ] **Environment** — is any of it air-gapped or regulated? (changes everything)
- [ ] **Ecosystem** — already on GitHub / GitLab / AWS? Lean into the native tool
- [ ] **Team maturity** — who operates the CI system, and do they want to?
- [ ] **Deploy model** — push from CI, or pull via GitOps?

## 🎯 CI vs. CD Tools

Two jobs, often two tools. **CI** turns commits into tested artifacts. **CD** gets those
artifacts running in a cluster. GitOps tools (ArgoCD, Flux) specialize in the CD half.

| Tool | Type | Hosting | Best for | Watch out for |
| --- | --- | --- | --- | --- |
| **GitHub Actions** | CI (+ CD) | SaaS or self-hosted runners | Teams already on GitHub; fast start | Self-hosted runners need hardening for sensitive workloads |
| **GitLab CI** | CI + CD | SaaS or self-managed | All-in-one (repo + CI + registry); self-managed installs | Self-managed is a real operational footprint |
| **Jenkins** | CI (+ CD) | Self-hosted | Maximum flexibility; legacy / on-prem estates | Plugin sprawl; you own the upgrades and security |
| **CircleCI** | CI | SaaS (self-hosted runners) | Fast managed CI without GitHub/GitLab lock-in | Another vendor relationship to manage |
| **ArgoCD** | CD (GitOps, pull) | Self-hosted in-cluster | Kubernetes; declarative, auditable deploys | Kubernetes-centric; learning curve |
| **Flux** | CD (GitOps, pull) | Self-hosted in-cluster | Lightweight GitOps; composable controllers | Less UI than ArgoCD; assembled from pieces |

## 🎯 Push vs. Pull (GitOps)

The most consequential architectural fork in CD.

- **Push** — CI builds, then *reaches into* the cluster and deploys (CI holds cluster
  credentials). Simple and familiar, but CI now has production access — a bigger attack
  surface and a credential to protect.
- **Pull (GitOps)** — an in-cluster agent (ArgoCD/Flux) *watches* a Git repo of desired
  state and reconciles the cluster to match. Git is the source of truth, deploys are
  auditable diffs, and **CI never needs cluster credentials.** Stronger for regulated and
  multi-cluster environments.

<div class="sp-say">
  <div class="sp-label">Say it like this</div>
  <p>"With GitOps, your cluster pulls its desired state from Git instead of CI pushing into it. The win is that your build system never holds production credentials, and every deploy is a reviewable Git commit you can audit and revert. For regulated or multi-cluster setups, that's usually the safer model."</p>
</div>

## 🎯 Selection Criteria

| Criterion | Why it decides | Note |
| --- | --- | --- |
| **Managed vs. self-hosted** | Trades operational burden for control | Managed is faster to value; self-hosted is mandatory in some environments |
| **Ecosystem fit** | The native tool removes integration glue | On GitHub? Actions. On GitLab? GitLab CI. On K8s? Add ArgoCD/Flux |
| **Air-gapped support** | Many SaaS runners simply can't operate offline | Self-hosted runners + an internal registry are table stakes (see [Air-Gapped](../environments/air-gapped.md)) |
| **Security & compliance** | Audit trails, OIDC, secret handling vary widely | GitOps gives you Git history as an audit log for free |
| **Cost model** | Per-minute build pricing surprises at scale | Self-hosted shifts cost from per-minute to maintenance |

## ⚠️ Gotchas

- Recommending a tool before understanding the environment — air-gapped kills most SaaS-only options
- "Best tool" thinking — the best tool is usually the one native to where they already live
- Underestimating self-hosted Jenkins — flexible, but you own every plugin CVE and upgrade
- Push deploys in a regulated environment — CI holding prod credentials is a finding waiting to happen
- Ignoring the registry — a CI/CD discussion that skips where artifacts live is half a design

## 🔗 Links

- [Pipeline Design](pipeline-design.md)
- [Pipeline Security](pipeline-security.md)
- [Discovery Questions](../templates/discovery-questions.md)
- [Air-Gapped Environments](../environments/air-gapped.md)
