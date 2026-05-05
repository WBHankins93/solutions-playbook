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
  title: 'SE Playbook',
  description: 'Operational frameworks, checklists, and templates for Solutions Engineers.',
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
      { text: 'Pre-Sales', items: preSales },
      { text: 'Implementation', items: implementation },
      { text: 'Environments', items: environments },
      { text: 'Recovery', items: recovery },
      { text: 'Internal Coordination', items: internalCoordination },
      { text: 'Templates', items: templates },
      { text: 'Learning Paths', link: '/LEARNING-PATHS' },
      { text: 'Tags', link: '/TAGS' },
    ],
    sidebar: [
      { text: 'Start Here', collapsed: false, items: startHere },
      { text: 'Pre-Sales', collapsed: false, items: preSales },
      { text: 'Implementation', collapsed: false, items: implementation },
      { text: 'Environments', collapsed: false, items: environments },
      { text: 'Recovery', collapsed: false, items: recovery },
      { text: 'Internal Coordination', collapsed: false, items: internalCoordination },
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
