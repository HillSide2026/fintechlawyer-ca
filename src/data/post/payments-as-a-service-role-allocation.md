---
publishDate: 2026-05-22T00:00:00Z
title: 'Payments-as-a-Service and role allocation'
excerpt: 'PaaS platforms that enable clients to offer payment functionality need to define clearly whether the platform or the client bears the regulatory obligations that follow from the payment activity.'
category: Infrastructure
tags:
  - PaaS
  - embedded payments
  - role allocation
  - MSB
---

Payments-as-a-Service platforms provide other businesses with the ability to offer payment functionality — payment acceptance, fund disbursement, money movement — without building that infrastructure themselves. The regulatory question for a PaaS platform is not just whether the platform itself is a registered MSB. It is how the MSB obligations that arise from the payment activity are allocated between the platform and its clients.

## What PaaS differs from direct payment processing

A direct payment processor provides payment services directly to end customers and bears the regulatory obligations associated with those services directly. A PaaS platform provides payment services to business clients who then offer those services, or a version of them, to their own customers.

That layered structure creates a role allocation question that direct processing does not. When a PaaS client offers payment functionality to its own customers using the PaaS platform's infrastructure, who is the regulated entity in the relationship with the end customer? The answer depends on the structure of the product, the agreements between the parties, and what each entity actually does in the transaction.

## When the PaaS provider bears MSB obligations

A PaaS provider bears MSB obligations based on the activity it performs, not on the activity its clients perform. If the PaaS provider receives funds from end customers, holds those funds in a platform account, and disburses them based on client instructions, the provider is performing fund transmission activity. Registration as an MSB is required for that activity regardless of the commercial framing of the PaaS product.

A PaaS provider that operates as a pure technology layer — providing APIs and infrastructure through which clients manage their own banking relationships, without the provider touching client funds directly — may not be independently performing regulated activity. That structure is more difficult to implement in practice and requires that the banking and compliance relationships flow to the client rather than through the platform.

## How PaaS platforms allocate regulatory roles to clients

Many PaaS platforms operate under a model where the PaaS provider is the registered MSB and the clients operate under the provider's registration as agents or sub-MSBs. That model can work if the provider's compliance program covers the activities of its clients, the provider conducts appropriate due diligence on its clients, and the agreements between the provider and clients reflect the actual allocation of compliance responsibilities.

The alternative model — where each client is independently registered as an MSB and the platform provides services to registered entities — works for clients that have the scale and operational capacity to maintain their own compliance programs. It is less practical for clients who are smaller businesses using the PaaS platform to access payment functionality they could not otherwise build.

## Contract structure and compliance responsibility

The agreements between a PaaS provider and its clients should reflect the actual regulatory structure. If the provider is the registered MSB and the client is operating under the provider's registration, the agreement should specify what compliance obligations the provider bears and what obligations the client is responsible for.

Common client obligations under a PaaS structure include know-your-customer obligations for the client's own customers, prohibited use restrictions, transaction reporting to the provider, cooperation with the provider's compliance monitoring, and notification of regulatory contact.

Where the agreements do not accurately reflect the regulatory structure, problems arise when a regulator, bank, or counterparty reviews the arrangement. An agreement that describes the client as a technology platform when it is actually operating as a sub-MSB under the provider's registration does not match the regulatory reality.

## Related topics

- [Payment structuring in Canada](/payment-structuring-canada)
- [MSB registration in Canada](/msb-registration-canada)
- [MSB banking risk in Canada](/msb-banking-risk-canada)
- [Embedded payments in SaaS products: MSB risk](/insights/embedded-payments-saas-msb-risk)
