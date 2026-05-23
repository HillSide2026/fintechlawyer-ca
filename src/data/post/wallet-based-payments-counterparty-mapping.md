---
publishDate: 2026-05-22T00:00:00Z
title: 'Wallet-based payments and counterparty mapping'
excerpt: 'Identifying the counterparty in wallet-based payment flows is an AML obligation, not just a technical question — and hosted and unhosted wallets are treated differently.'
category: Crypto
tags:
  - wallet
  - crypto
  - counterparty
  - MSB
---

Counterparty identification in wallet-based payment flows does not work the same way it does in fiat payment systems. In fiat payments, the receiving account is at a regulated institution that has completed its own KYC on the account holder. In wallet-based payments, the receiving address may be a self-custodied wallet with no institutional counterparty standing behind it. That difference has direct compliance implications for virtual currency MSBs.

## Hosted versus unhosted wallets

A hosted wallet is one where the private key is held by a financial institution or registered MSB on behalf of the user. When a virtual currency MSB sends funds to a hosted wallet at another regulated entity, the compliance obligation on the receiving side is handled by that entity's KYC process. The sending MSB still has obligations with respect to its own customer, but the counterparty at a regulated institution is not an unknown.

An unhosted wallet — also called a self-custodied or non-custodial wallet — is one where the private key is held by the user directly, without an intermediary. There is no regulated institution standing behind an unhosted wallet, and the operator of the unhosted wallet may be anonymous or pseudonymous.

FINTRAC has addressed the treatment of transactions involving unhosted wallets in its guidance. MSBs that process significant transactions involving unhosted wallets need to apply risk-based controls that account for the reduced counterparty transparency. Those controls may include enhanced due diligence for large or unusual unhosted wallet transactions.

## Know-your-client obligations and attribution

FINTRAC requires virtual currency dealers to verify the identity of clients at the time of certain transactions. For transactions that originate from a client's account on the platform to an external wallet address, the sending client is the regulated entity's customer and should be verified. The recipient wallet is the counterparty.

For transactions that arrive at the platform from an external wallet, the incoming transaction involves a counterparty whose identity may or may not be known. If the recipient on the platform is a customer of the MSB, the transaction can be attributed to that customer. The incoming source wallet is the external counterparty.

The attribution challenge arises most acutely in peer-to-peer transaction structures and in platforms that handle transfers between parties who are both customers of the platform but where the source and destination are external wallets rather than platform accounts.

## FINTRAC reporting when the counterparty is a wallet address

Large virtual currency transaction reports and suspicious transaction reports both require information about the counterparty to the transaction. Where the counterparty is a wallet address without a known identity, the report should include the wallet address and any other identifying information available, including any information obtained through blockchain analytics.

FINTRAC's reporting forms accommodate the wallet address format. The inability to identify the human behind a wallet address does not eliminate the reporting obligation — it affects what information is included in the report.

For suspicious transaction reports involving unhosted wallets, the narrative should describe the basis for suspicion with reference to the specific transaction characteristics that raised concern, including any relevant blockchain analytics findings.

## Practical steps for wallet counterparty risk management

Platforms that process transactions involving unhosted wallets should implement risk-based controls that address the counterparty identification gap. Those controls may include blockchain analytics screening of wallet addresses before processing outbound transactions, enhanced due diligence procedures for large or unusual incoming transactions from unhosted wallets, transaction limits for transactions involving unhosted wallets from unverified sources, and documentation of the counterparty risk assessment at the time of each significant transaction.

These controls do not need to be applied uniformly to every wallet transaction. They should be calibrated to the risk profile of the transaction, consistent with the risk-based approach required by FINTRAC.

## Related topics

- [MSB registration in Canada](/msb-registration-canada)
- [FINTRAC compliance in Canada](/fintrac-compliance-canada)
- [Suspicious transaction reports in Canada](/suspicious-transaction-reports-canada)
- [On-chain and off-chain AML visibility](/insights/on-chain-off-chain-aml-visibility)
