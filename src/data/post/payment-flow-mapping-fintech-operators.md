---
publishDate: 2026-05-22T00:00:00Z
title: 'Payment flow mapping for fintech operators'
excerpt: 'The regulatory classification of a payment product follows from how funds actually move, not from how the product is described.'
category: Payments
tags:
  - payment flow
  - MSB
  - fund flow
  - fintech
---

The most common source of regulatory surprise in fintech payment products is not a misunderstanding of the law. It is a failure to map the actual flow of funds before making architecture and partner decisions. Regulatory classification under FINTRAC's MSB framework, banking relationship requirements, and processor onboarding diligence all depend on who receives, controls, moves, and settles funds at each step. The map is the analysis.

## What a payment flow map needs to capture

A payment flow map for regulatory purposes is not an engineering diagram. It is an account of who has custody or control of funds at each point in the process, and what each party does with those funds.

The map should answer these questions for every step in the flow: Who receives funds from the customer? Into what account are those funds deposited? Who controls the disposition of those funds? Who instructs movement to the next step? Who holds funds between steps, and for how long? Who settles to the ultimate recipient? What is the basis for each party's authority to receive or move the funds?

Each party that appears in the answers to those questions needs to be assessed for regulatory status. A party that receives customer funds may be an MSB. A party that instructs fund movement may be engaged in fund transmission. A party that holds funds pending settlement may be holding client funds in a regulated capacity.

The map should also capture what the customer-facing terms say about each of these steps, because a mismatch between the terms and the actual flow can create problems independently of the regulatory classification.

## How the map determines regulatory classification

Under the PCMLTFA, certain activities trigger MSB registration regardless of how the company characterizes them. Transmitting funds on behalf of another person, dealing in foreign exchange, dealing in virtual currency, issuing or redeeming money orders, and dealing in prepaid payment products in prescribed circumstances are each enumerated MSB activities.

The map is the tool for applying these definitions to a specific product. A product that receives customer funds and transmits them to a recipient is likely engaged in fund transmission. A product that exchanges one currency for another at any step in the flow, even if that exchange is incidental to the primary product feature, may be dealing in foreign exchange. A product that holds virtual currency on behalf of users may be dealing in virtual currency.

The presence of a licensed intermediary in the flow does not automatically resolve the classification question for other parties. Banks, licensed payment processors, and registered MSBs each have their own regulatory status, but their participation does not transfer that status to other entities in the chain.

## Common mapping mistakes

The most common mistake is mapping the intended flow rather than the actual flow. How funds move in production — through which accounts, under whose control, in what sequence — may differ from the architecture as originally designed. The regulatory analysis has to follow the actual flow.

A related mistake is treating the payment processor relationship as a complete answer. Working with a licensed processor or a bank partner does not mean that the platform itself is not also performing MSB activity. The question is what the platform does, not which counterparties it uses.

Omitting intermediate holding steps is another common error. If funds sit in a platform account between receipt from the customer and disbursement to the recipient, that holding step may affect the analysis. How funds are characterized during that period, and under what legal basis the platform holds them, matters.

Treating the customer-facing product description as the basis for the regulatory analysis is a category error. Describing a product as a "software platform" or a "technology service" does not affect whether the activity it performs constitutes regulated financial activity.

## When the map creates questions that need answers

A payment flow map is not itself a legal opinion. It is the input to a legal opinion. Once the map exists, the questions it generates are: which entities in the flow are performing regulated activity? Which of those entities are registered or licensed? Which are not? What steps, if any, need to be taken before the product operates as mapped?

Those questions are worth answering before launch, before signing a banking or processor agreement, and before partner onboarding diligence begins. Counterparties conducting diligence will ask for the flow, and the answers the map generates are the answers those conversations require.

## What to do with the map

The map has several uses beyond the initial regulatory analysis. It is the foundation for the AML risk assessment that MSBs are required to maintain. It is the document that explains to banking and processor partners what the product does. It is the baseline against which future product changes can be assessed. And it is the reference point for customer-facing terms to ensure that what the terms say matches what the product does.

Keeping the map current as the product evolves is as important as building it in the first place. A product that changes its payment architecture, adds a new currency, changes processors, or expands into a new market should be remapped before the change goes live.

## Related topics

- [Payment structuring in Canada](/payment-structuring-canada)
- [MSB registration in Canada](/msb-registration-canada)
- [MSB banking risk in Canada](/msb-banking-risk-canada)
- [FINTRAC and MSB compliance hub](/fintrac-compliance)
