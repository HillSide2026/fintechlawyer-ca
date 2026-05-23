---
publishDate: 2026-05-22T00:00:00Z
title: 'Stablecoin settlement and fiat conversion'
excerpt: 'The points where stablecoins are converted to fiat currency are where Canadian MSB registration analysis concentrates for settlement infrastructure.'
category: Crypto
tags:
  - stablecoin
  - settlement
  - fiat
  - MSB
---

Stablecoin payment infrastructure often uses stablecoins as a settlement rail between fiat entry and fiat exit points. The stablecoin portion of the flow may be efficient, programmable, and fast, but the conversion points — where fiat becomes stablecoin and where stablecoin becomes fiat — are where Canadian regulatory analysis concentrates.

## Where conversion creates MSB exposure

The exchange of a fiat currency for a virtual currency, or of a virtual currency for a fiat currency, is dealing in virtual currency under FINTRAC's MSB framework. That definition applies regardless of whether the virtual currency is a volatile cryptocurrency or a stablecoin pegged to fiat. The asset class is not the relevant variable. The exchange activity is.

An entity that receives Canadian dollars from a payer and delivers a corresponding stablecoin amount is exchanging fiat for virtual currency. An entity that receives stablecoin from a sender and delivers fiat currency to a recipient is exchanging virtual currency for fiat. Both of those activities engage the virtual currency dealer definition.

In stablecoin settlement infrastructure, these conversion transactions happen at the on-ramp and off-ramp. The entities that perform the on-ramp and off-ramp conversions — whether exchanges, custodians, or purpose-built settlement infrastructure operators — are the entities that bear the MSB registration obligation for those conversion activities.

## The role of exchanges and custodians

Stablecoin settlement infrastructure for payment products often relies on regulated cryptocurrency exchanges to handle the on-ramp and off-ramp conversions. If the exchange is registered as an MSB and is performing the conversion as principal, the registration question for the exchange is resolved by its own registration.

But the structure of the relationship between the exchange and the payment platform affects whether the payment platform also bears independent MSB obligations. A payment platform that simply routes customers to an exchange for conversion, without itself holding or converting virtual currency, may not be independently performing MSB activity. A payment platform that receives fiat from customers and then sends it to an exchange for conversion, holding a position at the exchange on behalf of multiple customers, may be performing activity that extends beyond simply using the exchange's services.

## Settlement risk and fund custody at conversion

The conversion points in stablecoin settlement infrastructure are also where settlement risk concentrates. Conversion from fiat to stablecoin may not occur at the same moment that the fiat is received from the payer. Conversion from stablecoin to fiat may not occur at the same moment that the stablecoin arrives at the settlement account. During those intervals, one party holds either the fiat or the stablecoin on behalf of another party, and the basis for that custody matters for both the regulatory analysis and the commercial relationship.

Custody of fiat pending conversion and custody of stablecoin pending fiat redemption are each positions that need to be defined in the agreements between the parties involved in the settlement infrastructure.

## How conversion design affects MSB classification

The design of the conversion mechanism affects the MSB analysis for each entity in the settlement chain. A settlement structure that minimizes the number of entities that directly perform conversion transactions — by routing all conversion through a single registered MSB counterparty — can reduce the overall regulatory complexity of the infrastructure. A structure that spreads conversion functions across multiple entities, or where multiple entities simultaneously hold positions in stablecoin and fiat, creates more points of analysis.

Before building stablecoin settlement infrastructure, mapping which entity performs each conversion transaction and assessing the MSB status of each of those entities is the foundational step in the regulatory design.

## Related topics

- [Payment structuring in Canada](/payment-structuring-canada)
- [MSB registration in Canada](/msb-registration-canada)
- [MSB banking risk in Canada](/msb-banking-risk-canada)
- [Stablecoin payment flows and Canadian MSB analysis](/insights/stablecoin-payment-flows-msb-analysis)
