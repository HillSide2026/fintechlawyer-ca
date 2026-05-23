---
publishDate: 2026-05-22T00:00:00Z
title: 'Embedded payments in SaaS products: MSB risk'
excerpt: 'SaaS platforms that embed payment functionality need to assess whether their role in the fund flow creates MSB exposure independent of their payment partners.'
category: Payments
tags:
  - embedded payments
  - SaaS
  - MSB
  - fintech
---

SaaS companies that add payment functionality to their products often assume that working with a licensed payment processor resolves all regulatory questions. It does not. The platform's own role in the fund flow determines whether it is independently subject to MSB registration, regardless of which processors or banking partners it uses.

## What embedded payments means in regulatory terms

Embedded payments describes a product design where payment functionality is integrated into a non-payment product, so the user experiences the payment as part of the primary product rather than as a separate step. From a regulatory perspective, the integration of payment functionality into a SaaS product does not change what the payment activity is or who is performing it.

The regulatory analysis for embedded payments follows the same fund flow framework that applies to any payment product. Who receives customer funds? Who holds them? Who instructs their movement? Who settles to the final recipient? The SaaS wrapper around those steps does not affect the answers.

## When SaaS platforms bear MSB exposure

A SaaS platform that merely facilitates the initiation of a payment through a licensed processor, without receiving, holding, or controlling customer funds at any point, is generally not performing MSB activity independently. The processor handles the regulated activity and the platform provides the interface.

That structure breaks down when the platform holds funds in its own account before disbursing them, when the platform makes decisions about when and how to disburse funds, when the platform aggregates payments from multiple sources before settlement, or when the platform quotes exchange rates or performs currency conversion as part of the payment flow.

Each of those variations introduces a step where the platform may be performing regulated activity directly, not merely providing access to a processor's regulated activity.

## Role allocation between platform, processor, and bank

The agreements between a SaaS platform, its payment processor, and any banking partners should accurately reflect what each party does and who bears regulatory responsibility for each activity. An agreement that describes the platform as a technology provider while the platform is actually holding customer funds does not match the operating reality and will not protect the platform if a regulatory question arises.

Role allocation also affects the processor and bank diligence process. Processors and banks will assess the platform's activity during onboarding and on an ongoing basis. A platform that represents itself as a technology provider but operates as a fund holder will create inconsistencies that emerge during diligence.

## Customer-facing terms and compliance design

Customer-facing terms for SaaS products with embedded payments should describe accurately what happens to customer funds. If funds are held by the platform before disbursement, the terms should say so. If a third-party processor or bank holds the funds, the terms should identify that relationship.

Terms that describe the payment feature in vague or generic terms without explaining the actual fund flow create risk if the regulatory classification is later questioned. The terms should match the actual operation.

Compliance design for embedded payment features also needs to address the AML implications of the payment activity the platform is involved in. Even where a platform is not the registered MSB, the MSB partner's compliance requirements will include obligations that flow through to the platform by contract.

## Related topics

- [Payment structuring in Canada](/payment-structuring-canada)
- [MSB registration in Canada](/msb-registration-canada)
- [MSB banking risk in Canada](/msb-banking-risk-canada)
- [Marketplace payments and MSB registration](/insights/marketplace-payments-msb-registration)
