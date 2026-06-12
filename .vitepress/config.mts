import { defineConfig } from 'vitepress'

const startHere = [
  { text: 'Start Here', link: '/START-HERE' },
  { text: 'Visual Diagrams', link: '/VISUAL-DIAGRAMS' },
  { text: 'New Customer Engagement', link: '/engagements/new-customer' },
  { text: 'Joining Existing Engagement', link: '/engagements/joining-existing' },
  { text: 'Inherited Customer', link: '/engagements/inherited-customer' },
]

const preSales = [
  { text: 'Discovery', link: '/pre-sales/discovery' },
  { text: 'Technical Deep Dive', link: '/pre-sales/technical-deep-dive' },
  { text: 'Demo', link: '/pre-sales/demo' },
  { text: 'POC Scoping', link: '/pre-sales/poc-scoping' },
  { text: 'POC Execution', link: '/pre-sales/poc-execution' },
]

const implementation = [
  { text: 'Kickoff', link: '/implementation/kickoff' },
  { text: 'Mid-Implementation', link: '/implementation/mid-implementation' },
  { text: 'Troubleshooting', link: '/implementation/troubleshooting' },
  { text: 'Handoff', link: '/implementation/handoff' },
]

const environments = [
  { text: 'Air-Gapped', link: '/environments/air-gapped' },
  { text: 'Private Cluster', link: '/environments/private-cluster' },
  { text: 'Firewall-Restricted', link: '/environments/firewall-restricted' },
  { text: 'Multi-Tenant', link: '/environments/multi-tenant' },
  { text: 'Hybrid', link: '/environments/hybrid' },
]

const recovery = [
  { text: 'Demo Recovery', link: '/recovery/demo-recovery' },
  { text: 'POC Recovery', link: '/recovery/poc-recovery' },
  { text: 'Escalation', link: '/recovery/escalation' },
  { text: 'Scope Creep', link: '/recovery/scope-creep' },
  { text: 'Stuck', link: '/recovery/stuck' },
]


const businessValue = [
  { text: 'Technical to Business Translation', link: '/business-value/technical-to-business-translation' },
  { text: 'Risk Reduction Narratives', link: '/business-value/risk-reduction-narratives' },
  { text: 'POC Value Recap', link: '/business-value/poc-value-recap' },
  { text: 'Executive Summary Template', link: '/business-value/executive-summary-template' },
]

const battleCards = [
  { text: 'Overview', link: '/battle-cards/' },
  { text: 'Air-Gapped Expectation Setting', link: '/battle-cards/air-gapped-expectation-setting' },
  { text: 'Demo Failure Response', link: '/battle-cards/demo-failure-response' },
  { text: 'POC Success Criteria', link: '/battle-cards/poc-success-criteria' },
  { text: 'Scope Creep Objection', link: '/battle-cards/scope-creep-objection' },
  { text: 'Security Review Pushback', link: '/battle-cards/security-review-pushback' },
  { text: 'Timeline Pressure', link: '/battle-cards/timeline-pressure' },
]

const examples = [
  { text: 'POC Status Update - Telecom Hybrid', link: '/examples/customer/poc-status-update-email-telecom-hybrid' },
  { text: 'Discovery - Healthcare Air-Gapped', link: '/examples/discovery-questions-healthcare-air-gapped-poc' },
  { text: 'Handoff - Financial Private Cluster', link: '/examples/handoff-document-financial-private-cluster' },
  { text: 'Status Update - SaaS Multi-Tenant', link: '/examples/status-update-template-saas-multi-tenant' },
  { text: 'Environment Validation - Healthcare Air-Gapped', link: '/examples/technical/environment-validation-healthcare-air-gapped' },
  { text: 'Retrospective - Telecom Hybrid POC', link: '/examples/lessons/retrospective-telecom-hybrid-poc' },
]

const internalCoordination = [
  { text: 'Pre-Call Prep', link: '/internal/pre-call-prep' },
  { text: 'Post-Call Debrief', link: '/internal/post-call-debrief' },
  { text: 'Status Updates', link: '/internal/status-updates' },
  { text: 'Requesting Help', link: '/internal/requesting-help' },
  { text: 'SE Handoff', link: '/internal/handoff-to-se' },
  { text: 'Tracking Impact', link: '/internal/tracking-impact' },
]

const architecture = [
  { text: 'Design Review', link: '/architecture/design-review' },
  { text: 'Reference Architectures', link: '/architecture/reference-architectures' },
  { text: 'Well-Architected Review', link: '/architecture/well-architected' },
  { text: 'ADR Template', link: '/architecture/adr-template' },
]

const migration = [
  { text: 'Assessment', link: '/migration/assessment' },
  { text: 'Strategy', link: '/migration/strategy' },
  { text: 'Cutover Planning', link: '/migration/cutover-planning' },
  { text: 'Risk Framework', link: '/migration/risk-framework' },
]

const costModeling = [
  { text: 'TCO Framework', link: '/cost-modeling/tco-framework' },
  { text: 'Cloud Cost Comparison', link: '/cost-modeling/cloud-cost-comparison' },
  { text: 'Cost Optimization', link: '/cost-modeling/optimization' },
]

const compliance = [
  { text: 'Regulatory Mapping', link: '/compliance/regulatory-mapping' },
  { text: 'Security Architecture', link: '/compliance/security-architecture' },
  { text: 'Data Residency', link: '/compliance/data-residency' },
]

const patterns = [
  { text: 'Microservices', link: '/patterns/microservices' },
  { text: 'Event-Driven', link: '/patterns/event-driven' },
  { text: 'Data Mesh', link: '/patterns/data-mesh' },
  { text: 'API Gateway', link: '/patterns/api-gateway' },
]

const stakeholderMgmt = [
  { text: 'Executive Alignment', link: '/stakeholder-management/executive-alignment' },
  { text: 'Cross-Team Coordination', link: '/stakeholder-management/cross-team-coordination' },
  { text: 'CTO Conversations', link: '/stakeholder-management/cto-conversations' },
]

const templates = [
  { text: 'Discovery Questions', link: '/templates/discovery-questions' },
  { text: 'Kickoff Agenda', link: '/templates/kickoff-agenda' },
  { text: 'Status Update Template', link: '/templates/status-update-template' },
  { text: 'Handoff Document', link: '/templates/handoff-document' },
  { text: 'Retrospective', link: '/templates/retrospective' },
  { text: 'SOW Outline', link: '/templates/sow-outline' },
  { text: 'Customer-Facing', items: [
    { text: 'POC Status Update Email', link: '/templates/customer/poc-status-update-email' },
    { text: 'Deployment Schedule Communication', link: '/templates/customer/deployment-schedule-communication' },
    { text: 'Escalation Response', link: '/templates/customer/escalation-response' },
    { text: 'Post-Implementation Follow-Up', link: '/templates/customer/post-implementation-follow-up' },
  ] },
  { text: 'Technical', items: [
    { text: 'Pre-Implementation Checklist', link: '/templates/technical/pre-implementation-checklist' },
    { text: 'Environment Validation', link: '/templates/technical/environment-validation' },
    { text: 'Common Commands', link: '/templates/technical/common-commands' },
    { text: 'Air-Gapped Artifact Bundling', link: '/templates/technical/air-gapped-artifact-bundling' },
    { text: 'Air-Gapped Transfer Matrix', link: '/templates/technical/air-gapped-transfer-matrix' },
    { text: 'Air-Gapped Validation', link: '/templates/technical/air-gapped-validation' },
    { text: 'Air-Gapped Troubleshooting', link: '/templates/technical/air-gapped-troubleshooting' },
    { text: 'Firewall-Restricted Validation', link: '/templates/technical/firewall-restricted-validation' },
    { text: 'Hybrid Validation', link: '/templates/technical/hybrid-validation' },
    { text: 'Multi-Tenant Validation', link: '/templates/technical/multi-tenant-validation' },
    { text: 'Private Cluster Validation', link: '/templates/technical/private-cluster-validation' },
  ] },
]

export default defineConfig({
  title: 'Solutions Playbook',
  description: 'A searchable field guide for Solutions Engineers and Solutions Architects.',
  cleanUrls: true,
  lastUpdated: true,
  ignoreDeadLinks: false,
  srcExclude: ['node_modules', 'dist'],
  head: [
    ['meta', { name: 'theme-color', content: '#14342f' }],
    ['meta', { property: 'og:title', content: 'Solutions Playbook' }],
    ['meta', { property: 'og:description', content: 'Field-tested systems for technical customer work.' }],
    ['meta', { property: 'og:type', content: 'website' }],
  ],
  markdown: {
    theme: {
      light: 'github-light',
      dark: 'github-dark',
    },
    config(md) {
      const defaultFence = md.renderer.rules.fence

      md.renderer.rules.fence = (tokens, idx, options, env, self) => {
        const token = tokens[idx]
        const language = token.info.trim().split(/\s+/)[0]

        if (language === 'mermaid') {
          return `<pre class="mermaid">${md.utils.escapeHtml(token.content)}</pre>`
        }

        return defaultFence
          ? defaultFence(tokens, idx, options, env, self)
          : self.renderToken(tokens, idx, options)
      }
    },
  },
  themeConfig: {
    logo: { light: '/logo.svg', dark: '/logo.svg' },
    search: {
      provider: 'local',
      options: {
        detailedView: true,
        miniSearch: {
          searchOptions: {
            boost: { title: 4, text: 2, titles: 1 },
            fuzzy: 0.2,
            prefix: true,
          },
        },
      },
    },
    nav: [
      { text: 'Start Here', items: [
        { text: 'Content Index', link: '/CONTENT-INDEX' },
        ...startHere,
      ] },
      { text: 'SE Track', items: [
        { text: 'Pre-Sales', items: preSales },
        { text: 'Implementation', items: implementation },
        { text: 'Recovery', items: recovery },
      ] },
      { text: 'SA Track', items: [
        { text: 'Architecture', items: architecture },
        { text: 'Migration', items: migration },
        { text: 'Compliance', items: compliance },
        { text: 'Patterns', items: patterns },
      ] },
      { text: 'Diagrams', link: '/VISUAL-DIAGRAMS' },
      { text: 'Environments', items: environments },
      { text: 'Templates', items: templates },
      { text: 'Learning Paths', link: '/LEARNING-PATHS' },
    ],
    sidebar: [
      { text: 'Start Here', collapsed: false, items: [
        { text: 'Content Index', link: '/CONTENT-INDEX' },
        ...startHere,
      ] },
      { text: 'Pre-Sales', collapsed: false, items: preSales },
      { text: 'Implementation', collapsed: false, items: implementation },
      { text: 'Recovery', collapsed: false, items: recovery },
      { text: '— SA Track —', collapsed: false, items: [] },
      { text: 'Architecture', collapsed: false, items: architecture },
      { text: 'Migration', collapsed: false, items: migration },
      { text: 'Cost Modeling', collapsed: false, items: costModeling },
      { text: 'Compliance', collapsed: false, items: compliance },
      { text: 'Patterns', collapsed: false, items: patterns },
      { text: 'Stakeholder Management', collapsed: false, items: stakeholderMgmt },
      { text: '— Shared —', collapsed: false, items: [] },
      { text: 'Environments', collapsed: false, items: environments },
      { text: 'Internal Coordination', collapsed: false, items: internalCoordination },
      { text: 'Business Value', collapsed: false, items: businessValue },
      { text: 'Battle Cards', collapsed: true, items: battleCards },
      { text: 'Templates', collapsed: true, items: templates },
      { text: 'Examples', collapsed: true, items: examples },
      { text: 'Learning Paths', collapsed: false, items: [
        { text: 'Learning Paths', link: '/LEARNING-PATHS' },
      ] },
      { text: 'Reference', collapsed: true, items: [
        { text: 'Content Index', link: '/CONTENT-INDEX' },
        { text: 'Visual Diagrams', link: '/VISUAL-DIAGRAMS' },
        { text: 'Tags', link: '/TAGS' },
        { text: 'Contributing', link: '/CONTRIBUTING' },
        { text: 'Project Status', link: '/PROJECT-STATUS' },
      ] },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/WBHankins93/solutions-playbook' },
    ],
    footer: {
      message: 'Built as a public field guide for practical Solutions Engineering and Architecture work.',
      copyright: 'Solutions Playbook',
    },
  },
})
