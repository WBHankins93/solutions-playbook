# Solutions Playbook

A searchable operating manual for **Solutions Engineers** and **Solutions Architects**: discovery, POCs, implementation, recovery, architecture reviews, migrations, compliance, and the handoffs that keep real work moving.

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
.vitepress/        Site config, theme, and interactive UI components
```

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for how to add new patterns consistently, and [MAINTENANCE.md](MAINTENANCE.md) for keeping the playbook healthy.
