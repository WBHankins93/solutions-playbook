import { defineConfig } from 'vitepress'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'

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

const cicd = [
  { text: 'Pipeline Design', link: '/ci-cd/pipeline-design' },
  { text: 'Deployment Strategies', link: '/ci-cd/deployment-strategies' },
  { text: 'Tooling Selection', link: '/ci-cd/tooling-selection' },
  { text: 'Pipeline Security', link: '/ci-cd/pipeline-security' },
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

// Navigation-friendly flat templates list (the sidebar keeps the full nested version).
const templatesNav = [
  { text: 'Discovery Questions', link: '/templates/discovery-questions' },
  { text: 'Kickoff Agenda', link: '/templates/kickoff-agenda' },
  { text: 'Status Update Template', link: '/templates/status-update-template' },
  { text: 'Handoff Document', link: '/templates/handoff-document' },
  { text: 'Retrospective', link: '/templates/retrospective' },
  { text: 'SOW Outline', link: '/templates/sow-outline' },
]

const reference = [
  { text: 'Content Index', link: '/CONTENT-INDEX' },
  { text: 'Learning Paths', link: '/LEARNING-PATHS' },
  { text: 'Tags', link: '/TAGS' },
  { text: 'Visual Diagrams', link: '/VISUAL-DIAGRAMS' },
  { text: 'Contributing', link: '/CONTRIBUTING' },
  { text: 'Project Status', link: '/PROJECT-STATUS' },
]

const referenceGroup = { text: 'Reference', collapsed: true, items: reference }

// Path-scoped sidebars: the sidebar adapts to the section you're in instead of
// showing all ~18 groups on every page. Cross-track jumps happen via the top nav.
const seSidebar = [
  { text: 'Start Here', collapsed: false, items: [{ text: 'Content Index', link: '/CONTENT-INDEX' }, ...startHere] },
  { text: 'Pre-Sales', collapsed: false, items: preSales },
  { text: 'Implementation', collapsed: false, items: implementation },
  { text: 'Recovery', collapsed: false, items: recovery },
  { text: 'Internal Coordination', collapsed: true, items: internalCoordination },
  { text: 'Business Value', collapsed: true, items: businessValue },
  { text: 'Battle Cards', collapsed: true, items: battleCards },
  referenceGroup,
]

const saSidebar = [
  { text: 'Architecture', collapsed: false, items: architecture },
  { text: 'Patterns', collapsed: false, items: patterns },
  { text: 'CI/CD', collapsed: false, items: cicd },
  { text: 'Migration', collapsed: false, items: migration },
  { text: 'Compliance', collapsed: false, items: compliance },
  { text: 'Cost Modeling', collapsed: true, items: costModeling },
  { text: 'Stakeholder Management', collapsed: true, items: stakeholderMgmt },
  referenceGroup,
]

const sharedSidebar = [
  { text: 'Environments', collapsed: false, items: environments },
  { text: 'Templates', collapsed: false, items: templates },
  { text: 'Examples', collapsed: true, items: examples },
  referenceGroup,
]

const homeSidebar = [
  { text: 'Start Here', collapsed: false, items: [{ text: 'Content Index', link: '/CONTENT-INDEX' }, ...startHere] },
  { text: 'SE Track', collapsed: true, items: [
    { text: 'Pre-Sales', link: '/pre-sales/discovery' },
    { text: 'Implementation', link: '/implementation/kickoff' },
    { text: 'Recovery', link: '/recovery/demo-recovery' },
  ] },
  { text: 'SA Track', collapsed: true, items: [
    { text: 'Architecture', link: '/architecture/design-review' },
    { text: 'Patterns', link: '/patterns/microservices' },
    { text: 'CI/CD', link: '/ci-cd/pipeline-design' },
    { text: 'Migration', link: '/migration/assessment' },
    { text: 'Compliance', link: '/compliance/regulatory-mapping' },
    { text: 'Cost Modeling', link: '/cost-modeling/tco-framework' },
    { text: 'Stakeholder Management', link: '/stakeholder-management/executive-alignment' },
  ] },
  { text: 'Shared', collapsed: true, items: [
    { text: 'Environments', link: '/environments/air-gapped' },
    { text: 'Templates', link: '/templates/discovery-questions' },
    { text: 'Examples', link: '/examples/discovery-questions-healthcare-air-gapped-poc' },
  ] },
  referenceGroup,
]

export default defineConfig({
  title: 'Solutions Playbook',
  description: 'A searchable field guide for Solutions Engineers and Solutions Architects.',
  cleanUrls: true,
  lastUpdated: true,
  ignoreDeadLinks: false,
  srcExclude: ['node_modules', 'dist'],
  // Embed each page's raw Markdown so the in-page "Download Markdown" button
  // can hand back the original source. Runs in both dev and build.
  transformPageData(pageData) {
    if (pageData.frontmatter.layout === 'home') return
    try {
      const file = resolve(process.cwd(), pageData.relativePath)
      pageData.frontmatter.rawMarkdown = readFileSync(file, 'utf-8')
    } catch {
      // Source not readable (e.g. virtual page) — button stays hidden.
    }
  },
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
    outline: { level: [2, 3], label: 'On this page' },
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
      {
        text: 'SE Track',
        activeMatch: '^/(pre-sales|implementation|recovery|internal|business-value|battle-cards|engagements)/',
        items: [
          { text: 'Pre-Sales', items: preSales },
          { text: 'Implementation', items: implementation },
          { text: 'Recovery', items: recovery },
          { text: 'Internal Coordination', items: internalCoordination },
          { text: 'Business Value', items: businessValue },
          { text: 'Battle Cards', items: battleCards },
        ],
      },
      {
        text: 'SA Track',
        activeMatch: '^/(architecture|patterns|ci-cd|migration|compliance|cost-modeling|stakeholder-management)/',
        items: [
          { text: 'Architecture', items: architecture },
          { text: 'Patterns', items: patterns },
          { text: 'CI/CD', items: cicd },
          { text: 'Migration', items: migration },
          { text: 'Compliance', items: compliance },
          { text: 'Cost Modeling', items: costModeling },
          { text: 'Stakeholder Management', items: stakeholderMgmt },
        ],
      },
      {
        text: 'Shared',
        activeMatch: '^/(environments|templates|examples)/',
        items: [
          { text: 'Environments', items: environments },
          { text: 'Templates', items: templatesNav },
          { text: 'Examples', items: examples },
        ],
      },
      { text: 'Reference', items: reference },
    ],
    // Path-scoped: each section shows only its track's groups (see *Sidebar consts above).
    sidebar: {
      '/pre-sales/': seSidebar,
      '/implementation/': seSidebar,
      '/recovery/': seSidebar,
      '/internal/': seSidebar,
      '/business-value/': seSidebar,
      '/battle-cards/': seSidebar,
      '/engagements/': seSidebar,
      '/architecture/': saSidebar,
      '/patterns/': saSidebar,
      '/ci-cd/': saSidebar,
      '/migration/': saSidebar,
      '/compliance/': saSidebar,
      '/cost-modeling/': saSidebar,
      '/stakeholder-management/': saSidebar,
      '/environments/': sharedSidebar,
      '/templates/': sharedSidebar,
      '/examples/': sharedSidebar,
      '/': homeSidebar,
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/WBHankins93/solutions-playbook' },
    ],
    footer: {
      message: 'Built as a public field guide for practical Solutions Engineering and Architecture work.',
      copyright: 'Solutions Playbook',
    },
  },
})
