---
publishDate: 2026-05-22T00:00:00Z
title: 'Stablecoin treasury products and Canadian AML risk'
excerpt: 'Companies using stablecoins for treasury operations need to assess whether the activity engaged constitutes dealing in virtual currency under Canadian law.'
category: Crypto
tags:
  - stablecoin
  - treasury
  - AML
  - MSB
---

Corporate treasury operations that use stablecoins to hold cash equivalents, optimize yield, or facilitate cross-border payments are increasingly common. The regulatory question those operations create in Canada is not primarily about investment law or securities regulation. It is about whether the activity constitutes dealing in virtual currency under FINTRAC's MSB framework.

## Holding stablecoins versus operating stablecoin infrastructure

There is a distinction between a company that holds stablecoins as part of its own treasury operations and a company that operates stablecoin infrastructure on behalf of others. That distinction matters for the MSB analysis.

A company that holds stablecoins in its own treasury, without providing exchange, transfer, or custody services to third parties, is generally not engaged in dealing in virtual currency in the MSB sense. The virtual currency dealer definition requires that the activity be performed on behalf of another person, or in a commercial capacity, not merely that a company holds virtual currency for its own account.

That picture changes when the treasury operation involves services provided to clients, counterparties, or employees. A company that holds stablecoins on behalf of clients, exchanges stablecoins for fiat for clients, or transfers stablecoins at the direction of clients is performing activity that may engage the MSB definition, regardless of how the product is described.

## When treasury operations create MSB questions

Several treasury product designs create MSB exposure that is not immediately obvious from the product description.

A Treasury-as-a-Service product that holds client funds in stablecoin form and disburses them on client instruction is holding and transferring virtual currency on behalf of another person. That activity engages the virtual currency dealer definition.

A yield product that receives fiat from clients, converts it to stablecoin to earn yield on DeFi or CeFi platforms, and returns fiat to clients upon redemption involves exchange of virtual currency for funds at the conversion points. Each conversion is potential MSB activity for the entity that performs it.

A cross-border payment product that uses stablecoins as a settlement rail, converting fiat to stablecoin in the source country and stablecoin to fiat in the destination country, involves multiple exchange transactions. If a single entity performs or facilitates both conversions, the MSB analysis applies to that entity.

## Counterparty monitoring and sanctions-adjacent risk

AML monitoring for stablecoin treasury operations involves specific challenges that differ from fiat payment monitoring. The counterparties in stablecoin transactions are often identified by wallet addresses rather than by name, and on-chain transaction data requires blockchain analytics tools to interpret.

Sanctions screening in a stablecoin context requires checking wallet addresses against sanctions lists maintained by the Office of Foreign Assets Control and the Canadian government, not just entity names. Wallet addresses associated with sanctioned persons or entities, or that have received funds from sanctioned sources, create exposure for the entity transacting with them.

For stablecoin treasury operations that transact with counterparties across multiple jurisdictions, the sanctions screening program needs to address the full range of counterparties in the flow, including the issuers, exchanges, custodians, and blockchain protocols involved.

## What treasury product operators should assess

Before launching a stablecoin treasury product for clients, the operator should assess whether any entity in the product structure is performing exchange or transfer activity that constitutes dealing in virtual currency, whether any entity performing that activity is registered as an MSB, and whether the AML compliance program addresses the specific risks of the stablecoin activity.

Legal analysis of the product structure before launch is more efficient than restructuring a live product to address gaps identified in regulatory review or partner diligence.

## Related topics

- [MSB registration in Canada](/msb-registration-canada)
- [FINTRAC compliance in Canada](/fintrac-compliance-canada)
- [Payment structuring in Canada](/payment-structuring-canada)
- [Stablecoin payment flows and Canadian MSB analysis](/insights/stablecoin-payment-flows-msb-analysis)
