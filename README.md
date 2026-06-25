# Solutions Playbook

[![CI](https://github.com/WBHankins93/solutions-playbook/actions/workflows/ci.yml/badge.svg)](https://github.com/WBHankins93/solutions-playbook/actions/workflows/ci.yml)

A searchable operating manual for **Solutions Engineers** and **Solutions Architects**: discovery, POCs, implementation, recovery, architecture reviews, migrations, compliance, CI/CD and delivery, and the handoffs that keep real work moving.

Guides are organized into two tracks — an **SE track** (pre-sales → implementation → recovery) and an **SA track** (architecture, patterns, CI/CD, migration, compliance) — plus shared environment, template, and example material. The navigation adapts to whichever track you're in.

The content lives as plain Markdown and is published as an interactive documentation site built with [VitePress](https://vitepress.dev).

## Quick start

```bash
npm install
npm run docs:dev      # local dev server with hot reload
npm run docs:build    # production build into .vitepress/dist
npm run docs:preview  # preview the production build
```

Then open the local URL printed in the terminal.

## How to navigate

| Entry point | Use it when |
| --- | --- |
| [Home](index.md) | You want the interactive path chooser — pick SE track, SA track, by-situation, or copy-ready templates. |
| [Start Here](START-HERE.md) | Something is happening right now and you need the fastest stabilizing move. |
| [Content Index](CONTENT-INDEX.md) | You know what you need to produce but not where it lives. |
| [Learning Paths](LEARNING-PATHS.md) | You want a structured, skill-building sequence. |
| [Visual Diagrams](VISUAL-DIAGRAMS.md) | You want to explain a system on a whiteboard. |
| [Tags](TAGS.md) | You want to browse by topic. |

Every page on the site has a **Download Markdown** button so you can pull any guide into your own notes or share it offline.

## Repository structure

```
architecture/      Design reviews, reference architectures, ADRs (SA track)
battle-cards/      Customer-safe talk tracks for pressure moments
business-value/    Translating technical work into executive outcomes
ci-cd/             Pipeline design, deployment strategies, tooling, pipeline security (SA track)
compliance/        Regulatory mapping, security architecture, data residency
cost-modeling/     TCO, cloud cost comparison, optimization
engagements/       New, joining, and inherited customer playbooks
environments/      Air-gapped, private cluster, firewall, hybrid, multi-tenant
examples/          Filled-in, real-world examples of templates
implementation/    Kickoff through handoff
internal/          Internal coordination and trip reports
lessons/           Reusable field lessons
migration/         Assessment, strategy, cutover, risk (SA track)
patterns/          Microservices, event-driven, data mesh, API gateway
pre-sales/         Discovery, demos, POC scoping and execution
recovery/          Demo/POC recovery, escalation, scope creep
stakeholder-management/  Executive alignment, CTO conversations
templates/         Copy-ready general, customer-facing, and technical templates
assets/diagrams/   Polished architecture diagrams embedded in the SA-track guides
.vitepress/        Site config, theme, and interactive UI components
.github/workflows/ CI build check
```

## Continuous integration

Every pull request and push to `main` runs `npm run docs:build` via GitHub Actions. The
build is the gate: it compiles every page and **fails on dead links** (`ignoreDeadLinks` is
on), so a broken cross-link can't merge. Run the same check locally before opening a PR:

```bash
npm run docs:build
```

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for how to add new guides consistently and
[MAINTENANCE.md](MAINTENANCE.md) for keeping the playbook healthy. SA-track pattern and
architecture pages follow the depth and visual conventions in
[DEPTH-STANDARD.md](DEPTH-STANDARD.md), [IMAGERY-PLAN.md](IMAGERY-PLAN.md), and
[VISUAL-PROMPT-STANDARD.md](VISUAL-PROMPT-STANDARD.md).
