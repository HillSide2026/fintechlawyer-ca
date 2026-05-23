---
publishDate: 2026-05-22T00:00:00Z
title: 'Stablecoin payment flows and Canadian MSB analysis'
excerpt: 'Stablecoin payment infrastructure in Canada engages the virtual currency dealer definition under FINTRAC rules, and the analysis turns on custody, role, and fund flow.'
category: Crypto
tags:
  - stablecoin
  - MSB
  - virtual currency
  - payments
---

Stablecoins are used in payment infrastructure in ways that their issuers did not always design for and that their operators do not always recognize as regulated activity. In Canada, the relevant question is not whether the asset is technically a stablecoin. The question is whether the activity performed with that asset engages the virtual currency dealer definition under the Proceeds of Crime (Money Laundering) and Terrorist Financing Act.

## The virtual currency dealer definition and stablecoins

FINTRAC's MSB framework designates dealing in virtual currency as an enumerated MSB activity. Virtual currency is broadly defined and includes digital representations of value that can be used for payment or investment purposes or that are readily exchangeable for funds. Stablecoins issued for use as a medium of exchange, including those pegged to fiat currencies, generally fall within this definition.

An entity deals in virtual currency when it exchanges virtual currency for funds, for other virtual currency, or for a prescribed product or service, or when it transfers virtual currency at the direction of another person. Those activities are common in stablecoin payment infrastructure, and they engage MSB registration requirements for the entity performing them.

## On-ramp and off-ramp design

On-ramp and off-ramp design — how fiat currency is converted into stablecoin and back into fiat — is where the Canadian regulatory analysis most clearly applies to stablecoin payment operations.

An entity that receives fiat currency from a customer and returns stablecoin, or that receives stablecoin and returns fiat currency, is engaged in an exchange of virtual currency for funds. That exchange is dealing in virtual currency under the PCMLTFA. Registration as an MSB is required before that exchange activity can be performed in Canada or for Canadian customers.

The on-ramp and off-ramp entity is often a distinct company from the entity that operates the stablecoin payment network or provides the user wallet. But even if roles are separated, each entity that performs exchange activity needs to be assessed for registration requirements independently.

## Custody, wallet, and counterparty roles

Stablecoin payment infrastructure often involves custody services, meaning an entity holds stablecoin on behalf of users in a wallet or account. The custody role is relevant to the MSB analysis in two ways.

First, an entity that holds virtual currency on behalf of others and transfers it at their direction may itself be performing virtual currency dealing activity. The direction to transfer stablecoin from one wallet to another, processed by a platform that holds the stablecoin on behalf of both parties, engages the transfer-at-direction definition.

Second, custody raises AML questions about the basis on which the custodian knows its counterparties. FINTRAC's know-your-client and record-keeping obligations for virtual currency dealers apply to the entities performing the regulated activity, which includes custodians that hold stablecoin for users. Knowing who owns the stablecoin, and verifying that, is part of the compliance obligation that attaches to the custody role.

## AML obligations for stablecoin operators

MSBs that deal in virtual currency, including stablecoin operators, are subject to FINTRAC's full AML compliance framework. That framework includes a written compliance program, a risk assessment specific to the business and its customer base, training for all relevant staff, a transaction monitoring system, suspicious transaction reporting, and large virtual currency transaction reporting.

Large virtual currency transaction reporting applies to virtual currency transactions equivalent to C$10,000 or more in a single transaction. For stablecoin payment platforms that process high volumes of individual transactions, the aggregation question is important. FINTRAC's guidance addresses how transactions by the same client within a 24-hour period should be treated for reporting purposes.

Sanctions screening is a separate obligation from the AML program but applies to stablecoin payment operators as it applies to any financial service provider. The cross-border nature of many stablecoin flows, and the pseudonymous nature of on-chain counterparties, creates challenges in sanctions screening that operators need to address in their compliance design.

## What stablecoin payment operators should assess

Operators building stablecoin payment infrastructure for use by Canadian users or for processing Canadian transactions should assess the following before launch: which entities in their structure exchange stablecoin for fiat or vice versa; which entities hold stablecoin on behalf of users; whether any entity in the structure is already registered as an MSB; and what the AML compliance program for the stablecoin-related activity looks like.

That assessment should be current as of the product design, not conducted retrospectively after the product is operating. Banking and processor partners supporting stablecoin payment flows will ask for registration status and compliance program documentation during onboarding.

## Related topics

- [MSB registration in Canada](/msb-registration-canada)
- [FINTRAC compliance in Canada](/fintrac-compliance-canada)
- [Payment structuring in Canada](/payment-structuring-canada)
- [FINTRAC and MSB compliance hub](/fintrac-compliance)
