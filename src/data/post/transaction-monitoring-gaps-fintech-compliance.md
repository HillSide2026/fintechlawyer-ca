---
publishDate: 2026-05-22T00:00:00Z
title: 'Transaction monitoring gaps in fintech compliance'
excerpt: 'The monitoring gaps most likely to produce FINTRAC findings are not technology failures — they are documentation and design failures.'
category: FINTRAC
tags:
  - transaction monitoring
  - AML
  - FINTRAC
  - compliance
---

Transaction monitoring is the operational core of an MSB compliance program. It is also the element most likely to produce findings in a FINTRAC examination because the gap between what the monitoring program is supposed to do and what it can actually demonstrate is often significant. Most of those gaps are not technology problems. They are documentation and design problems.

## What transaction monitoring is supposed to accomplish

Transaction monitoring is the process of reviewing transactions on an ongoing basis to identify patterns or characteristics that may indicate money laundering or terrorist financing. For fintech companies, that process needs to be calibrated to the specific transactions the business processes, the customers it serves, and the risk profile established in the AML risk assessment.

A transaction monitoring program that flags the same alert types regardless of the risk profile of the business is not a calibrated program. A crypto exchange that monitors the same way a remittance platform does is not applying the risk-based approach that FINTRAC requires. The monitoring design should follow the risk assessment.

## What fintech products can and cannot see

Fintech payment platforms often have visibility into the initiation of a transaction, the customer account it comes from, and the destination account it goes to. They may have limited visibility into what happens at the destination, who controls the destination account, or what the purpose of the transfer is from the recipient's perspective.

That visibility gap is not an excuse for incomplete monitoring. It is a compliance design problem to be addressed. Where a platform cannot see through to the ultimate recipient, it needs to apply enhanced scrutiny to the transaction characteristics it can see, and its risk assessment needs to account for the visibility limitation.

Partner-dependent platforms — those that rely on a processor, bank, or other intermediary to execute transactions — may have access to transaction data that varies depending on what the partner provides. A monitoring program designed around the data the platform actually receives is more defensible than one designed around the data the platform wished it had.

## Documentation of monitoring decisions

The most common transaction monitoring gap is not a failure to run the monitoring program. It is a failure to document that monitoring decisions were made and why they were made.

An alert that is reviewed and closed without a written record of who reviewed it, what they found, and why they concluded no further action was needed is not a documented monitoring outcome. From a FINTRAC examination perspective, an undocumented decision is an absent decision.

This gap is particularly common in platforms that use automated monitoring tools and assume that the tool's records are the compliance record. In most cases, automated tool logs show that an alert was generated and closed. They do not show the human analysis that determined the outcome. The human analysis, and its documentation, is the compliance record.

## Attribution challenges in fintech monitoring

Fintech payment flows often involve multiple parties between the originating customer and the ultimate recipient. Embedded payment platforms, marketplace operators, and infrastructure providers may process transactions on behalf of clients without direct knowledge of the end users involved.

Where a fintech company is processing transactions on behalf of clients, and those clients have their own customer relationships, the question of who bears monitoring responsibility for the underlying transactions needs to be resolved. The answer depends on who is the regulated entity in the chain, what the agreements say about compliance responsibilities, and what visibility each party actually has.

A platform that accepts that it has no monitoring responsibility because a downstream client is the regulated entity may be taking a position that does not hold under examination if the platform itself is also performing regulated activity.

## Calibration and the risk-based approach

FINTRAC does not specify the technology or methodology for transaction monitoring. It requires an approach that is appropriate for the risk profile of the business. That requirement creates flexibility, but it also requires that the monitoring program can be shown to be calibrated to actual risk.

Showing that calibration means being able to explain why the monitoring thresholds, alert types, and escalation criteria are set the way they are, by reference to the business's risk assessment and transaction profile. A monitoring program that applies default settings from an off-the-shelf tool without customization is not necessarily wrong, but it needs to be demonstrated that the default settings are appropriate for the business.

## Related topics

- [FINTRAC compliance in Canada](/fintrac-compliance-canada)
- [Suspicious transaction reports in Canada](/suspicious-transaction-reports-canada)
- [FINTRAC audits and penalties](/fintrac-audit-penalties)
- [Common AML program failures for Canadian MSBs](/insights/common-aml-program-failures-canadian-msbs)
