---
tags:
  - architecture
  - customer-facing
  - stakeholder
---

## CTO Conversations

## 📝 Context

You're meeting with a CTO, VP Engineering, or Chief Architect. These conversations are
different from engineer-level technical deep-dives. CTOs think in terms of organizational
capability, technical strategy, and risk portfolio — not individual service design. The
goal is to establish yourself as a peer who understands their world, not just the technology.

## 📋 Pre-Conversation Checklist

- [ ] Research the company — recent funding, product launches, public tech blog posts, conference talks
- [ ] Understand their engineering organization — team size, structure, key hires/departures
- [ ] Know their tech stack (from job postings, blog posts, or prior discovery)
- [ ] Prepare 2-3 strategic questions, not tactical ones
- [ ] Have a point of view — CTOs want advisors with opinions, not just listeners
- [ ] Know what you're there to accomplish (advisory, sales, design review, relationship)

## 🎯 Conversation Framework

### CTO Concerns by Company Stage

CTOs' priorities shift dramatically based on company stage. Frame your conversation
around the right concerns:

**Early Stage (Seed – Series A, <30 engineers)**

| Priority | What They're Thinking | How to Be Useful |
| --- | --- | --- |
| Speed | "How do I ship faster?" | Simplify architecture, reduce decisions, recommend defaults |
| Hiring | "Can I find people who can work with this stack?" | Recommend popular, well-documented technologies |
| Cost | "How do I keep infrastructure costs under $X/month?" | Serverless, managed services, cost-efficient patterns |
| Foundations | "What do I need to get right now vs. later?" | Help distinguish load-bearing decisions from reversible ones |

**Growth Stage (Series B-C, 30-200 engineers)**

| Priority | What They're Thinking | How to Be Useful |
| --- | --- | --- |
| Scaling | "What breaks at 10x?" | Identify bottlenecks, recommend scaling patterns |
| Team structure | "How do I organize teams around the architecture?" | Conway's Law, domain-driven design, service ownership |
| Platform | "Should we build a platform team?" | Platform strategy, buy vs. build for internal tooling |
| Tech debt | "How much debt can we carry?" | Quantify debt impact, prioritize paydown |

**Enterprise (200+ engineers)**

| Priority | What They're Thinking | How to Be Useful |
| --- | --- | --- |
| Governance | "How do I maintain consistency across 50 teams?" | Architecture standards, review processes, inner source |
| Migration | "How do I modernize without stopping everything?" | Strangler fig, phased migration, parallel-run strategies |
| Compliance | "How do I satisfy regulators without crippling velocity?" | Compliance-as-code, automated controls, architecture patterns that satisfy requirements |
| Vendor strategy | "Am I too dependent on one vendor?" | Multi-cloud strategy, portability assessment, lock-in analysis |

### Strategic Questions to Ask

These questions demonstrate SA-level thinking and surface real architectural needs:

**About architecture:**
- "What's the one thing in your architecture that keeps you up at night?"
- "Where is the boundary between what your platform team owns and what product teams own?"
- "If you could redesign one part of your system from scratch, what would it be and why?"

**About organization:**
- "How do your teams decide on technology choices? Is there a review process?"
- "Where are the handoff points that create the most friction?"
- "What does on-call look like for your teams?"

**About strategy:**
- "What does your infrastructure need to support 18 months from now that it can't today?"
- "What's your biggest technical risk — not the one that's likely, but the one that would hurt the most?"
- "Where are you spending engineering time that you wish you weren't?"

### Topics CTOs Want to Discuss (But Rarely Get To)

Most people talk to CTOs about features and timelines. Few talk to them about:

- **Organizational architecture** — how team structure and system architecture interact
  (Conway's Law in practice, not theory)
- **Decision-making frameworks** — how to make technology decisions at scale when you
  can't be in every room
- **Technical risk portfolio** — which risks to accept, which to mitigate, which to
  transfer, and how to communicate that to the board
- **Build vs. buy at the strategic level** — not individual tools, but the philosophy
  of where custom engineering creates competitive advantage vs. where it's overhead
- **Talent strategy** — which technologies attract and retain the engineers they need,
  which ones create hiring friction

### Presenting Architecture Recommendations to CTOs

**Do:**
- Lead with the strategic problem, not the technical solution
- Present options with tradeoffs, including organizational tradeoffs (team structure, hiring, operational burden)
- Quantify when possible — time saved, cost reduced, incidents prevented
- Acknowledge what you don't know about their specific context
- Have a recommendation and be willing to defend it

**Don't:**
- Talk about technology for technology's sake
- Present a solution without understanding their constraints
- Assume they want the most technically sophisticated option
- Ignore organizational feasibility — a perfect architecture their team can't build or operate is useless
- Name-drop other customers or "industry best practices" without connecting them to this CTO's specific situation

## 🎯 Building Long-Term CTO Relationships

The SA-CTO relationship is the highest-leverage relationship in a customer engagement:

**Be a thinking partner, not a vendor.** Share relevant articles, case studies, or
perspectives unprompted. Send a note when you see something relevant to their challenges.

**Be honest about limitations.** Admitting what you don't know or what your platform
can't do builds more trust than overselling.

**Follow through.** If you say you'll research something and get back to them, do it
within 48 hours. Reliability compounds.

**Bring the network.** Connect them with peers at other companies facing similar
challenges (with permission). CTOs value peer perspectives.

## ⚠️ Gotchas

- Treating a CTO conversation like a technical deep-dive — they want strategy, not implementation details
- Having no point of view — "it depends" without a recommendation wastes their time
- Not researching the company beforehand — CTOs can tell when you're winging it
- Talking about your product when they want to talk about their problems — lead with their context
- Oversimplifying for "the business audience" — CTOs are technical, they just think at a different altitude
- Not following up — the CTO conversation that doesn't lead to action items is a missed opportunity

## 🔗 Links

- [Executive Alignment](executive-alignment.md)
- [Cross-Team Coordination](cross-team-coordination.md)
- [Design Review](../architecture/design-review.md)
- [Well-Architected Review](../architecture/well-architected.md)
- [Technical-to-Business Translation](../business-value/technical-to-business-translation.md)
