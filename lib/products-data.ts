export type ProductVisual = "wave" | "tetrahedron" | "sphere"

export interface ProductCapability {
  title: string
  description: string
}

export interface ProductStep {
  number: string
  title: string
  description: string
}

export interface Product {
  slug: string
  name: string
  tag: string
  tagline: string
  description: string
  longDescription: string
  visual: ProductVisual
  capabilities: ProductCapability[]
  steps: ProductStep[]
  useCases: string[]
}

export const products: Product[] = [
  {
    slug: "blisswork",
    name: "Blisswork",
    tag: "Workplace Experience",
    tagline: "Where people and productivity thrive together.",
    description:
      "An employee experience platform that brings engagement, wellbeing, and performance into one connected workplace.",
    longDescription:
      "Blisswork is AEIV Global's people-first workplace platform. It brings together engagement surveys, wellbeing check-ins, recognition, and performance workflows so organizations can build cultures where people genuinely want to do their best work. Instead of scattered spreadsheets and disconnected tools, teams get one calm, considered home for the entire employee journey.",
    visual: "wave",
    capabilities: [
      {
        title: "Engagement pulse",
        description: "Lightweight, recurring check-ins that surface how teams are really feeling — without survey fatigue.",
      },
      {
        title: "Recognition & rewards",
        description: "Peer-to-peer recognition tied to company values, visible across the organization.",
      },
      {
        title: "Performance workflows",
        description: "Goal setting, continuous feedback, and review cycles that stay lightweight and human.",
      },
      {
        title: "Wellbeing insights",
        description: "Aggregate, privacy-respecting signals that help leaders act before burnout becomes attrition.",
      },
    ],
    steps: [
      {
        number: "I",
        title: "Onboard your teams",
        description: "Import your org structure and invite teams in minutes — no lengthy setup required.",
      },
      {
        number: "II",
        title: "Run your workplace rhythms",
        description: "Schedule pulse surveys, recognition moments, and review cycles that fit how your teams actually work.",
      },
      {
        number: "III",
        title: "Act on what matters",
        description: "Turn engagement and wellbeing signals into clear, prioritized actions for leadership and HR.",
      },
    ],
    useCases: ["People & HR teams", "Engineering & product orgs", "Distributed and hybrid teams", "Growing enterprises"],
  },
  {
    slug: "grc",
    name: "GRC",
    tag: "Governance, Risk & Compliance",
    tagline: "Governance you can trust. Risk you can see.",
    description:
      "A unified governance, risk, and compliance platform that turns policy, audit, and risk management into a single continuous practice.",
    longDescription:
      "GRC by AEIV Global brings governance, risk, and compliance out of spreadsheets and email threads and into one continuously monitored system of record. Map controls to the frameworks you care about, track risk in real time, run audits without the scramble, and give leadership a clear, defensible view of organizational risk posture at any moment.",
    visual: "tetrahedron",
    capabilities: [
      {
        title: "Control & policy mapping",
        description: "Map internal controls and policies to the frameworks and regulations your business must meet.",
      },
      {
        title: "Risk register",
        description: "A living risk register with ownership, likelihood, impact, and mitigation tracking built in.",
      },
      {
        title: "Audit readiness",
        description: "Centralized evidence collection so internal and external audits stop being fire drills.",
      },
      {
        title: "Executive reporting",
        description: "Board-ready dashboards that translate compliance activity into decisions leadership can act on.",
      },
    ],
    steps: [
      {
        number: "I",
        title: "Map your framework",
        description: "Bring in the regulations, standards, and internal policies relevant to your organization.",
      },
      {
        number: "II",
        title: "Monitor continuously",
        description: "Track control health and risk exposure as it changes, not just at audit time.",
      },
      {
        number: "III",
        title: "Report with confidence",
        description: "Generate audit-ready evidence and board-level reporting in a fraction of the usual time.",
      },
    ],
    useCases: ["Compliance & audit teams", "Risk & internal audit functions", "Regulated enterprises", "Boards & leadership"],
  },
  {
    slug: "wcag",
    name: "WCAG",
    tag: "Digital Accessibility",
    tagline: "Accessible by design, not by accident.",
    description:
      "An accessibility compliance platform that audits, monitors, and helps remediate digital products against WCAG 2.2 standards.",
    longDescription:
      "WCAG by AEIV Global helps organizations make accessibility a continuous practice rather than a one-time audit. Scan websites and applications against WCAG 2.1 and 2.2 success criteria, get prioritized, developer-ready remediation guidance, and monitor compliance over time so every release keeps your digital products usable by everyone.",
    visual: "sphere",
    capabilities: [
      {
        title: "Automated audits",
        description: "Scan pages and components against WCAG 2.2 A, AA, and AAA success criteria.",
      },
      {
        title: "Guided remediation",
        description: "Plain-language, developer-ready guidance for fixing each issue, prioritized by impact.",
      },
      {
        title: "Continuous monitoring",
        description: "Automatic re-checks on every release so accessibility regressions get caught before users do.",
      },
      {
        title: "Compliance reporting",
        description: "Shareable, exportable reports for legal, procurement, and leadership review.",
      },
    ],
    steps: [
      {
        number: "I",
        title: "Scan your product",
        description: "Point WCAG at your website or application and get a full accessibility baseline.",
      },
      {
        number: "II",
        title: "Fix with guidance",
        description: "Work through prioritized, plain-language remediation steps built for real product teams.",
      },
      {
        number: "III",
        title: "Monitor every release",
        description: "Keep compliance continuous with automatic re-scans as your product evolves.",
      },
    ],
    useCases: ["Product & engineering teams", "Public sector & government", "E-commerce & BFSI", "Education & healthcare"],
  },
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug)
}
