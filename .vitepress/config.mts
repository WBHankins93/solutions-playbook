import { defineConfig } from 'vitepress'

const startHere = [
  { text: 'Start Here', link: '/START-HERE' },
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
  ] },
]

export default defineConfig({
  title: 'Solutions Playbook',
  description: 'Operational frameworks, checklists, and templates for Solutions Engineers and Solutions Architects.',
  cleanUrls: true,
  lastUpdated: true,
  ignoreDeadLinks: false,
  srcExclude: ['node_modules', 'dist'],
  markdown: {
    theme: {
      light: 'github-light',
      dark: 'github-dark',
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
      { text: 'Start Here', items: startHere },
      {
        text: 'SE Track',
        items: [
          { text: 'Pre-Sales', items: preSales },
          { text: 'Implementation', items: implementation },
          { text: 'Recovery', items: recovery },
        ],
      },
      {
        text: 'SA Track',
        items: [
          { text: 'Architecture', items: architecture },
          { text: 'Migration', items: migration },
          { text: 'Cost Modeling', items: costModeling },
          { text: 'Compliance', items: compliance },
          { text: 'Patterns', items: patterns },
          { text: 'Stakeholder Management', items: stakeholderMgmt },
        ],
      },
      {
        text: 'Shared',
        items: [
          { text: 'Environments', items: environments },
          { text: 'Internal Coordination', items: internalCoordination },
          { text: 'Templates', items: templates },
        ],
      },
      { text: 'Learning Paths', link: '/LEARNING-PATHS' },
      { text: 'Tags', link: '/TAGS' },
    ],
    sidebar: [
      { text: 'Start Here', collapsed: false, items: startHere },
      { text: '— SE Track —', collapsed: false, items: [] },
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
      { text: 'Battle Cards', collapsed: true, items: [
        { text: 'Overview', link: '/battle-cards/' },
      ] },
      { text: 'Templates', collapsed: true, items: templates },
      { text: 'Learning Paths', collapsed: false, items: [
        { text: 'Learning Paths', link: '/LEARNING-PATHS' },
      ] },
      { text: 'Reference', collapsed: true, items: [
        { text: 'Tags', link: '/TAGS' },
        { text: 'Contributing', link: '/CONTRIBUTING' },
        { text: 'Project Status', link: '/PROJECT-STATUS' },
      ] },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/WBHankins93/solutions-playbook' },
    ],
  },
})
