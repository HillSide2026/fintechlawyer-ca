import { getPermalink, getBlogPermalink } from '~/utils/permalinks';

export interface PillarSpoke {
  title: string;
  description: string;
  href: string;
  icon: string;
}

export interface PillarConcept {
  title: string;
  description: string;
}

export interface PillarPageData {
  slug: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  spokesTitle: string;
  spokesSubtitle: string;
  spokes: PillarSpoke[];
  conceptsTitle: string;
  conceptsSubtitle: string;
  concepts: PillarConcept[];
  insightsTitle: string;
  ctaTitle: string;
  ctaSubtitle: string;
}

export const pillarPages: Record<string, PillarPageData> = {
  payments: {
    slug: 'payments',
    eyebrow: 'Payments Fintech',
    title: 'Fintech legal intelligence for payment innovators and operators in Canada.',
    subtitle:
      'Practical legal and regulatory information for payment product teams navigating money movement, FINTRAC compliance, Bank of Canada reporting, and banking partnerships in Canada.',
    spokesTitle: 'Topics within this pillar',
    spokesSubtitle:
      'Payments sits at the centre of Canadian fintech regulatory analysis. These topics cover the issues most relevant to payment product teams.',
    spokes: [
      {
        title: 'FINTRAC/MSB Hub',
        description: 'The central map for MSB registration, FINTRAC compliance, and payment regulatory issues.',
        href: getPermalink('/fintrac-compliance'),
        icon: 'tabler:building-bank',
      },
      {
        title: 'MSB Registration',
        description: 'When fintech companies may need to register as a money services business in Canada.',
        href: getPermalink('/msb-registration-canada'),
        icon: 'tabler:clipboard-list',
      },
      {
        title: 'FINTRAC Compliance',
        description: 'AML obligations, controls, records, reporting, and governance for registered MSBs.',
        href: getPermalink('/fintrac-compliance-canada'),
        icon: 'tabler:shield-check',
      },
      {
        title: 'Payment Structuring',
        description: 'How product architecture and fund flows shape Canadian regulatory treatment.',
        href: getPermalink('/payment-structuring-canada'),
        icon: 'tabler:arrows-exchange',
      },
      {
        title: 'MSB Banking Risk',
        description: 'Banking access, sponsor relationships, and de-risking issues for payment companies.',
        href: getPermalink('/msb-banking-risk-canada'),
        icon: 'tabler:alert-triangle',
      },
      {
        title: 'Suspicious Transaction Reports',
        description: 'How STR obligations connect to payment product operations and monitoring.',
        href: getPermalink('/suspicious-transaction-reports-canada'),
        icon: 'tabler:eye',
      },
    ],
    conceptsTitle: 'Payment product models in Canada',
    conceptsSubtitle: 'Regulatory analysis depends on the specific role the product plays in moving or handling funds.',
    concepts: [
      {
        title: 'Wallets and stored value',
        description: 'Products that hold customer funds — even temporarily — often trigger MSB registration and FINTRAC obligations.',
      },
      {
        title: 'Payment processors',
        description: 'Processing or facilitating payments on behalf of others can engage money services business definitions depending on custody and flow.',
      },
      {
        title: 'Embedded payments',
        description: 'Payments integrated into platforms, marketplaces, or SaaS products raise questions about role allocation, fund flows, and who bears regulatory responsibility.',
      },
      {
        title: 'Remittance and cross-border transfers',
        description: 'Foreign exchange dealing and international money transfers are core MSB activities under FINTRAC regulations.',
      },
      {
        title: 'Virtual currency',
        description: 'Dealing in virtual currency is an enumerated MSB activity under PCMLTFA — relevant to crypto products, exchanges, and custody services.',
      },
      {
        title: 'Sponsor bank and BaaS models',
        description: 'Partnership structures involving regulated financial institutions raise questions about liability, diligence, and contractual risk allocation.',
      },
    ],
    insightsTitle: 'Practical analysis on payments',
    ctaTitle: 'Need legal and regulatory clarity on your payment product?',
    ctaSubtitle:
      'Use fintechlawyer.ca to understand the Canadian rules, risks, and market context behind payment products — or request a consultation.',
  },

  lending: {
    slug: 'lending',
    eyebrow: 'Lending Fintech',
    title: 'Fintech legal intelligence for lending innovators and operators in Canada.',
    subtitle:
      'Practical legal and regulatory information for lending product teams navigating consumer credit, business financing, disclosure obligations, and partner structures in Canada.',
    spokesTitle: 'Topics within this pillar',
    spokesSubtitle: 'Lending products touch multiple regulatory frameworks depending on structure, capital source, and borrower interaction.',
    spokes: [
      {
        title: 'Payment Structuring',
        description: 'How fund flows and partner roles can affect regulatory treatment for lending products.',
        href: getPermalink('/payment-structuring-canada'),
        icon: 'tabler:arrows-exchange',
      },
      {
        title: 'MSB Banking Risk',
        description: 'Banking access and de-risking issues relevant to lending platforms with payment components.',
        href: getPermalink('/msb-banking-risk-canada'),
        icon: 'tabler:alert-triangle',
      },
      {
        title: 'FINTRAC/MSB Hub',
        description: 'Where lending intersects with money movement and FINTRAC obligations.',
        href: getPermalink('/fintrac-compliance'),
        icon: 'tabler:building-bank',
      },
      {
        title: 'Insights Hub',
        description: 'Practical analysis on lending structures and Canadian regulatory considerations.',
        href: getBlogPermalink(),
        icon: 'tabler:book',
      },
    ],
    conceptsTitle: 'Lending product models in Canada',
    conceptsSubtitle: 'Regulatory analysis depends on who provides capital, who interfaces with the borrower, and how repayment flows.',
    concepts: [
      {
        title: 'Direct lending',
        description: 'Providing credit directly to consumers or businesses using internal or external capital sources.',
      },
      {
        title: 'Marketplace and platform lending',
        description: 'Connecting borrowers with lenders or investors through a platform raises questions about registration, disclosure, and platform liability.',
      },
      {
        title: 'Embedded credit',
        description: 'Financing integrated into e-commerce, SaaS, or marketplace platforms requires careful allocation of roles and obligations.',
      },
      {
        title: 'Buy now, pay later',
        description: 'Short-term installment products face evolving disclosure and consumer protection requirements across Canadian jurisdictions.',
      },
      {
        title: 'Revenue-based financing',
        description: 'Repayment structures tied to business revenue may be characterized differently depending on jurisdiction and product design.',
      },
      {
        title: 'Credit facilitation',
        description: 'Supporting origination, underwriting, or servicing without acting as the lender raises questions about scope and licensing exposure.',
      },
    ],
    insightsTitle: 'Practical analysis on lending',
    ctaTitle: 'Need legal and regulatory clarity on your lending product?',
    ctaSubtitle:
      'Use fintechlawyer.ca to understand the Canadian rules, risks, and market context behind lending products — or request a consultation.',
  },

  investment: {
    slug: 'investment',
    eyebrow: 'Investment Fintech',
    title: 'Fintech legal intelligence for investment innovators and operators in Canada.',
    subtitle:
      'Practical legal and regulatory information for investment platform teams navigating securities law, registration requirements, custody, and distribution in Canada.',
    spokesTitle: 'Topics within this pillar',
    spokesSubtitle: 'Investment platforms engage provincial securities regimes and, where payments are involved, FINTRAC obligations.',
    spokes: [
      {
        title: 'FINTRAC Compliance',
        description: 'Where investment platforms dealing in virtual currency or foreign exchange engage FINTRAC obligations.',
        href: getPermalink('/fintrac-compliance-canada'),
        icon: 'tabler:shield-check',
      },
      {
        title: 'FINTRAC/MSB Hub',
        description: 'Central map for MSB and FINTRAC analysis relevant to investment products.',
        href: getPermalink('/fintrac-compliance'),
        icon: 'tabler:building-bank',
      },
      {
        title: 'Insights Hub',
        description: 'Practical analysis on investment platforms and Canadian regulatory considerations.',
        href: getBlogPermalink(),
        icon: 'tabler:book',
      },
    ],
    conceptsTitle: 'Investment product models in Canada',
    conceptsSubtitle: 'Regulatory path depends on whether the platform facilitates trading, provides advice, manages assets, or holds client funds.',
    concepts: [
      {
        title: 'Brokerage platforms',
        description: 'Self-directed trading platforms typically require dealer registration with provincial securities regulators.',
      },
      {
        title: 'Robo-advisors',
        description: 'Automated portfolio management products generally require portfolio manager or investment fund manager registration.',
      },
      {
        title: 'Investment marketplaces',
        description: 'Platforms connecting investors with private or alternative investments raise questions about exempt market dealer registration.',
      },
      {
        title: 'Crypto and digital assets',
        description: 'Digital asset trading platforms face both securities law analysis and FINTRAC registration as virtual currency dealers.',
      },
      {
        title: 'Investment infrastructure',
        description: 'API platforms enabling investment functionality may carry regulatory obligations depending on their role in the transaction chain.',
      },
      {
        title: 'Asset management tools',
        description: 'Portfolio construction and monitoring tools raise questions about whether the platform is providing advice or discretionary management.',
      },
    ],
    insightsTitle: 'Practical analysis on investment',
    ctaTitle: 'Need legal and regulatory clarity on your investment product?',
    ctaSubtitle:
      'Use fintechlawyer.ca to understand the Canadian rules, risks, and market context behind investment platforms — or request a consultation.',
  },

  infrastructure: {
    slug: 'infrastructure',
    eyebrow: 'Infrastructure Fintech',
    title: 'Fintech legal intelligence for infrastructure innovators and operators in Canada.',
    subtitle:
      'Practical legal and regulatory information for infrastructure and embedded finance teams navigating role allocation, regulated activity, vendor diligence, and partner risk in Canada.',
    spokesTitle: 'Topics within this pillar',
    spokesSubtitle: 'Infrastructure companies often carry regulatory and contractual risk even when they are not the regulated entity facing customers.',
    spokes: [
      {
        title: 'FINTRAC Compliance',
        description: 'How infrastructure providers may engage FINTRAC obligations depending on their role.',
        href: getPermalink('/fintrac-compliance-canada'),
        icon: 'tabler:shield-check',
      },
      {
        title: 'Payment Structuring',
        description: 'How infrastructure role allocation and fund flows affect regulatory treatment.',
        href: getPermalink('/payment-structuring-canada'),
        icon: 'tabler:arrows-exchange',
      },
      {
        title: 'MSB Banking Risk',
        description: 'Banking and processor diligence issues relevant to infrastructure providers.',
        href: getPermalink('/msb-banking-risk-canada'),
        icon: 'tabler:alert-triangle',
      },
      {
        title: 'FINTRAC/MSB Hub',
        description: 'Central map for MSB and FINTRAC analysis relevant to infrastructure products.',
        href: getPermalink('/fintrac-compliance'),
        icon: 'tabler:building-bank',
      },
    ],
    conceptsTitle: 'Infrastructure models in Canada',
    conceptsSubtitle: 'Responsibilities are distributed across multiple entities — the key question is who bears regulated activity and how.',
    concepts: [
      {
        title: 'Banking as a Service',
        description: 'BaaS platforms enabling non-bank companies to offer banking products raise questions about liability, diligence, and regulatory exposure of each party.',
      },
      {
        title: 'Payments infrastructure',
        description: 'Processing, routing, or managing payments as an infrastructure provider may engage MSB registration analysis depending on custody and fund flow.',
      },
      {
        title: 'API platforms',
        description: 'Enabling developers to integrate financial functionality into applications requires careful consideration of role allocation in the transaction chain.',
      },
      {
        title: 'Embedded finance platforms',
        description: 'Allowing non-financial companies to offer financial products raises questions about who is the regulated entity and how obligations are allocated.',
      },
      {
        title: 'Data and open banking',
        description: 'Financial data access and connectivity raise questions about privacy obligations, data governance, and evolving open banking frameworks.',
      },
      {
        title: 'Custody and safekeeping',
        description: 'Holding or safeguarding financial assets on behalf of others typically engages registration and conduct obligations.',
      },
    ],
    insightsTitle: 'Practical analysis on infrastructure',
    ctaTitle: 'Need legal and regulatory clarity on your infrastructure product?',
    ctaSubtitle:
      'Use fintechlawyer.ca to understand the Canadian rules, risks, and market context behind financial infrastructure — or request a consultation.',
  },

  crypto: {
    slug: 'crypto',
    eyebrow: 'Crypto Fintech',
    title: 'Fintech legal intelligence for crypto innovators and operators in Canada.',
    subtitle:
      'Practical legal and regulatory information for crypto product teams navigating virtual currency rules, FINTRAC obligations, securities law analysis, and banking relationships in Canada.',
    spokesTitle: 'Topics within this pillar',
    spokesSubtitle:
      'Crypto and digital asset businesses engage multiple Canadian regulatory regimes. These topics cover the issues most relevant to crypto product teams.',
    spokes: [
      {
        title: 'FINTRAC/MSB Hub',
        description: 'The central map for MSB registration, FINTRAC compliance, and virtual currency regulatory issues.',
        href: getPermalink('/fintrac-compliance'),
        icon: 'tabler:building-bank',
      },
      {
        title: 'MSB Registration',
        description: 'When crypto companies are required to register as a money services business in Canada.',
        href: getPermalink('/msb-registration-canada'),
        icon: 'tabler:clipboard-list',
      },
      {
        title: 'FINTRAC Compliance',
        description: 'AML obligations, controls, records, reporting, and governance for virtual currency dealers.',
        href: getPermalink('/fintrac-compliance-canada'),
        icon: 'tabler:shield-check',
      },
      {
        title: 'Suspicious Transaction Reports',
        description: 'How STR obligations apply to crypto transactions and exchange operations.',
        href: getPermalink('/suspicious-transaction-reports-canada'),
        icon: 'tabler:eye',
      },
      {
        title: 'MSB Banking Risk',
        description: 'Banking access, processor relationships, and de-risking issues for crypto companies.',
        href: getPermalink('/msb-banking-risk-canada'),
        icon: 'tabler:alert-triangle',
      },
      {
        title: 'Payment Structuring',
        description: 'How fund flows and product architecture affect regulatory treatment for crypto products.',
        href: getPermalink('/payment-structuring-canada'),
        icon: 'tabler:arrows-exchange',
      },
    ],
    conceptsTitle: 'Crypto product models in Canada',
    conceptsSubtitle: 'Regulatory analysis depends on the specific role the product plays — whether it deals in virtual currency, facilitates trading, or holds assets on behalf of others.',
    concepts: [
      {
        title: 'Crypto exchanges',
        description: 'Platforms facilitating the buying, selling, or trading of virtual currency are subject to MSB registration and FINTRAC obligations as virtual currency dealers.',
      },
      {
        title: 'Custody and safekeeping',
        description: 'Holding virtual currency on behalf of clients raises questions about registration, insurance, and operational safeguards.',
      },
      {
        title: 'Stablecoins',
        description: 'Stablecoin issuance and redemption may engage MSB definitions as well as evolving payment and securities frameworks depending on design.',
      },
      {
        title: 'DeFi and protocol products',
        description: 'Decentralized protocols that facilitate financial transactions raise unsettled questions about regulatory perimeter and who bears regulatory responsibility.',
      },
      {
        title: 'NFTs and tokenization',
        description: 'Token-based products vary widely in structure — securities law analysis and FINTRAC treatment depend on the specific design and use case.',
      },
      {
        title: 'Blockchain infrastructure',
        description: 'Infrastructure providers enabling crypto products may carry regulatory exposure depending on their role in the transaction chain and custody of assets.',
      },
    ],
    insightsTitle: 'Practical analysis on crypto',
    ctaTitle: 'Need legal and regulatory clarity on your crypto product?',
    ctaSubtitle:
      'Use fintechlawyer.ca to understand the Canadian rules, risks, and market context behind crypto products — or request a consultation.',
  },
};

export const getPillarPage = (slug: keyof typeof pillarPages): PillarPageData => pillarPages[slug];
