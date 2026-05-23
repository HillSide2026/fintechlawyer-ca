---
publishDate: 2026-05-22T00:00:00Z
title: 'On-chain and off-chain AML visibility'
excerpt: 'The gap between what blockchain-based payment flows reveal and what FINTRAC compliance requires is a design problem, not an exemption.'
category: Crypto
tags:
  - blockchain
  - AML
  - monitoring
  - crypto compliance
---

Fintech companies that use blockchain infrastructure for payment flows face an AML monitoring challenge that does not arise in fiat payment systems. On-chain transaction data is transparent in one sense — every transaction is recorded on a public ledger — but that transparency does not map directly to the know-your-client and monitoring obligations that FINTRAC compliance requires.

## What on-chain data shows and what it does not

A blockchain transaction record shows a sending address, a receiving address, an amount, a timestamp, and a transaction identifier. It does not show the identity of the person who controls the sending or receiving address. For pseudonymous wallets — which is the default state for most blockchain addresses — the on-chain record is not connected to an identity without additional information.

FINTRAC's AML obligations require registered MSBs to verify the identity of clients at the time of certain transactions, to know the source of funds in certain circumstances, and to monitor transactions for patterns that suggest money laundering or terrorist financing. Those obligations require identity information that the on-chain record does not provide.

A virtual currency dealer that relies solely on on-chain data for its monitoring function is not running a compliant monitoring program. The monitoring program has to work with the identity and customer information the business collects through its own KYC process, applied to the transaction activity it processes.

## Attribution challenges in wallet-based flows

For MSBs that offer wallet-based services, the attribution challenge is identifying who controls a given address at the time a transaction occurs. Wallet-based platforms that have completed KYC on their users can attribute transactions that originate or terminate within their platform to identified users. They cannot necessarily attribute transactions that pass through their platform from external sources.

Blockchain analytics tools help address this gap by assigning risk scores to wallet addresses based on known associations, transaction history, and source-of-funds analysis. These tools are not a substitute for KYC but they extend the monitoring function to counterparties outside the platform's direct customer base.

The unhosted wallet question — where a user sends to or receives from a wallet they control outside the platform — is one that FINTRAC has addressed in its guidance. MSBs transacting with unhosted wallets need to assess the associated risk and apply appropriate controls, which may include enhanced due diligence for high-value transactions.

## Practical monitoring design for crypto MSBs

A monitoring program for a crypto-adjacent MSB combines the identity and transaction data collected through the platform's own KYC and onboarding processes with blockchain analytics data for counterparty risk assessment. The combination allows the monitoring function to assess transactions against known customer risk profiles while also screening counterparty addresses for known risk indicators.

Documentation of monitoring decisions in this environment requires recording not just the alert and its disposition, but the data sources used, the risk indicators assessed, and the basis for the conclusion. An alert based on a blockchain analytics risk score that is closed without explanation of why the score did not warrant further action is not a documented monitoring outcome.

For high-value transactions involving unhosted wallets, the monitoring program may need to include steps to obtain information about the source of the funds or the identity of the counterparty before the transaction is processed or before settlement occurs.

## What compliance programs should address

A compliance program for a virtual currency MSB that uses blockchain infrastructure needs to address the specific monitoring challenges that arise in that environment. The risk assessment should identify the AML risks associated with pseudonymous transactions, unhosted wallets, cross-chain activity, and the specific blockchain networks the platform uses. The monitoring program should describe how identity data and blockchain analytics data are combined for monitoring purposes. The training program should prepare compliance staff to review alerts in an on-chain context.

## Related topics

- [FINTRAC compliance in Canada](/fintrac-compliance-canada)
- [Suspicious transaction reports in Canada](/suspicious-transaction-reports-canada)
- [Payment structuring in Canada](/payment-structuring-canada)
- [Stablecoin payment flows and Canadian MSB analysis](/insights/stablecoin-payment-flows-msb-analysis)
