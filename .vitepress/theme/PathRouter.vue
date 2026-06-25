<script setup>
import { ref, computed } from 'vue'
import { withBase } from 'vitepress'

const tracks = [
  {
    id: 'se',
    label: 'SE Track',
    blurb: 'Run the engagement: discovery, demos, POCs, implementation, and customer updates.',
    cards: [
      { title: 'Discovery', desc: 'Run calls that produce clear requirements, risks, and next steps.', link: '/pre-sales/discovery' },
      { title: 'POC Scoping', desc: 'Lock success criteria, boundaries, timeline, and owners.', link: '/pre-sales/poc-scoping' },
      { title: 'Demo', desc: 'Prepare and deliver demos tied to customer outcomes.', link: '/pre-sales/demo' },
      { title: 'Implementation Kickoff', desc: 'Align customer and internal teams before delivery starts.', link: '/implementation/kickoff' },
      { title: 'Status Updates', desc: 'Send concise internal updates and trip reports.', link: '/internal/status-updates' },
      { title: 'Business Value', desc: 'Translate technical progress into executive outcomes.', link: '/business-value/technical-to-business-translation' },
    ],
  },
  {
    id: 'sa',
    label: 'SA Track',
    blurb: 'Lead the architecture conversation: reviews, reference designs, migrations, and compliance.',
    cards: [
      { title: 'Design Review', desc: 'Structure architecture reviews and surface tradeoffs.', link: '/architecture/design-review' },
      { title: 'Reference Architectures', desc: 'Reusable patterns for common customer shapes.', link: '/architecture/reference-architectures' },
      { title: 'Migration Strategy', desc: 'Plan waves, sequencing, and cutover.', link: '/migration/strategy' },
      { title: 'Cost Modeling', desc: 'Build a defensible TCO and cloud cost comparison.', link: '/cost-modeling/tco-framework' },
      { title: 'Compliance', desc: 'Map regulatory needs to security architecture.', link: '/compliance/security-architecture' },
      { title: 'Patterns', desc: 'Microservices, event-driven, data mesh, API gateway.', link: '/patterns/microservices' },
    ],
  },
  {
    id: 'situation',
    label: 'By Situation',
    blurb: 'Something is happening right now. Jump to the fastest stabilizing move.',
    cards: [
      { title: 'Call in the next 24 hours', desc: 'Align on attendees, goals, risks, and talk track fast.', link: '/internal/pre-call-prep' },
      { title: 'A POC is off track', desc: 'Diagnose the stall and reset the path to value.', link: '/recovery/poc-recovery' },
      { title: 'Demo broke live', desc: 'Recover credibility and create a follow-up plan.', link: '/recovery/demo-recovery' },
      { title: 'Scope is creeping', desc: 'Contain expanding scope without damaging trust.', link: '/recovery/scope-creep' },
      { title: 'Need to escalate', desc: 'Escalate with clear impact, owners, and timeline.', link: '/recovery/escalation' },
      { title: 'Constrained environment', desc: 'Air-gapped, private cluster, firewall, hybrid, multi-tenant.', link: '/environments/air-gapped' },
    ],
  },
  {
    id: 'templates',
    label: 'Copy-Ready',
    blurb: 'Turn intent into artifacts. Editable, downloadable templates ready to fill in.',
    cards: [
      { title: 'Discovery Questions', desc: 'A structured question bank for discovery calls.', link: '/templates/discovery-questions' },
      { title: 'Kickoff Agenda', desc: 'Run an aligned implementation kickoff.', link: '/templates/kickoff-agenda' },
      { title: 'Handoff Document', desc: 'Transfer ownership with decisions, risks, and next steps.', link: '/templates/handoff-document' },
      { title: 'Status Update', desc: 'A reusable internal status update format.', link: '/templates/status-update-template' },
      { title: 'Environment Validation', desc: 'Validate constrained environments before go-live.', link: '/templates/technical/environment-validation' },
      { title: 'POC Status Email', desc: 'Customer-facing POC progress update.', link: '/templates/customer/poc-status-update-email' },
    ],
  },
]

const active = ref('se')
const current = computed(() => tracks.find((t) => t.id === active.value))
</script>

<template>
  <div class="path-router">
    <div class="path-router__tabs" role="tablist" aria-label="Choose your path">
      <button
        v-for="t in tracks"
        :key="t.id"
        class="path-tab"
        :class="{ 'is-active': active === t.id }"
        role="tab"
        :aria-selected="active === t.id"
        @click="active = t.id"
      >
        {{ t.label }}
      </button>
    </div>

    <p class="path-router__blurb">{{ current.blurb }}</p>

    <div class="route-grid">
      <a
        v-for="card in current.cards"
        :key="card.title"
        class="route-card"
        :href="withBase(card.link)"
      >
        <h3>{{ card.title }}</h3>
        <p>{{ card.desc }}</p>
        <span class="route-card__go" aria-hidden="true">Open →</span>
      </a>
    </div>
  </div>
</template>
