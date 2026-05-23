---
publishDate: 2026-05-22T00:00:00Z
title: 'Stablecoin infrastructure and regulated activity'
excerpt: 'Infrastructure providers that enable stablecoin payment flows can engage Canadian MSB registration requirements depending on their role in custody, settlement, and transfer.'
category: Crypto
tags:
  - stablecoin
  - infrastructure
  - MSB
  - regulated activity
---

Stablecoin infrastructure providers often describe themselves as software companies, protocol developers, or technology platforms. That description may be accurate in terms of what the company builds. It does not determine whether the activity the infrastructure enables, or that the infrastructure company performs in operating the system, constitutes regulated financial activity under Canadian law.

## When infrastructure stops being software

Software that enables financial transactions is not itself performing those transactions. A company that builds payment APIs, provides smart contract infrastructure, or develops wallet software is generally not, by virtue of that development work, dealing in virtual currency under FINTRAC's MSB framework.

The analysis changes when the infrastructure company operates the infrastructure in a way that involves the company performing regulated activity directly. An infrastructure company that holds stablecoin on behalf of users, that processes transfers of stablecoin between parties, or that performs exchange transactions as part of operating the infrastructure is doing more than building software. It is performing activity.

The test is not how the company describes what it does. The test is what the company actually does in operating the infrastructure. If running the system requires the company to hold virtual currency on behalf of others, to instruct its transfer, or to exchange it for fiat at any point, those activities engage the virtual currency dealer definition.

## Custody and the infrastructure layer

Custody is the most direct path from infrastructure provision to MSB activity. An infrastructure company that holds the private keys to wallets used by customers, or that holds a pool of stablecoin from which customer positions are allocated, is holding virtual currency on behalf of others.

This structure arises frequently in stablecoin payment infrastructure. A platform may issue wallet addresses to users and hold the corresponding stablecoins in an omnibus account, allocating balances to individual users on its books. That structure places the platform in a custodial position even if the platform describes the accounts as user-controlled.

The custody question is important for banking and processor onboarding as well. Banks and processors providing fiat payment services to stablecoin infrastructure providers will ask how user stablecoin is held, who controls the keys, and whether the custody arrangement creates MSB obligations for the platform.

## Settlement and payment facilitation

A stablecoin infrastructure provider that facilitates the settlement of transactions between parties — by receiving stablecoin from one party and delivering it to another — may be performing transfer activity that constitutes dealing in virtual currency. The facilitation of the transfer, rather than the ownership of the stablecoin being transferred, is what matters.

This analysis applies to settlement networks, payment routing infrastructure, and stablecoin clearing systems that process transactions between participants. If the infrastructure provider's system matches, clears, or settles stablecoin transfers between parties, the regulatory question is whether the provider is performing that activity on behalf of the parties or merely providing the technology on which they perform it themselves.

## Role allocation between issuer, custodian, exchange, and platform

Stablecoin payment ecosystems typically involve multiple entities: the stablecoin issuer, a custodian for the reserve assets, one or more exchanges that provide liquidity, and one or more platforms that offer user-facing products. Each of these entities may have distinct regulatory obligations depending on the activity each performs.

Role allocation in the agreements between these entities should reflect what each actually does. An agreement that describes an entity as a technology provider when it is functioning as a custodian does not match the operating reality and will not resolve the regulatory question. The compliance program for each entity in the ecosystem needs to be based on the activity that entity performs, not on the label the agreements use.

## What infrastructure operators should assess before launch

Before an infrastructure operator makes its stablecoin system available for use, it should identify every function the operator itself performs in running the system, assess whether any of those functions constitute dealing in virtual currency under FINTRAC's framework, determine whether the operator or any entity in the ecosystem is required to register as an MSB, and ensure that the compliance program addresses the specific activities the operator performs.

This assessment should be conducted at the design stage, not after the system is operating. The activity the infrastructure performs is most easily characterized and structured at the design stage, when architectural decisions can still be made with the regulatory analysis in hand.

## Related topics

- [MSB registration in Canada](/msb-registration-canada)
- [Payment structuring in Canada](/payment-structuring-canada)
- [FINTRAC compliance in Canada](/fintrac-compliance-canada)
- [Stablecoin payment flows and Canadian MSB analysis](/insights/stablecoin-payment-flows-msb-analysis)
