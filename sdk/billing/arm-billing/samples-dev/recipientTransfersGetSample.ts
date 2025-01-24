/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import { BillingManagementClient } from "@azure/arm-billing";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Gets a transfer request by ID. The caller must be the recipient of the transfer request.
 *
 * @summary Gets a transfer request by ID. The caller must be the recipient of the transfer request.
 * x-ms-original-file: specification/billing/resource-manager/Microsoft.Billing/stable/2024-04-01/examples/recipientTransfersGet.json
 */
async function recipientTransferGet(): Promise<void> {
  const transferName = "aabb123";
  const credential = new DefaultAzureCredential();
  const client = new BillingManagementClient(credential);
  const result = await client.recipientTransfers.get(transferName);
  console.log(result);
}

async function main(): Promise<void> {
  await recipientTransferGet();
}

main().catch(console.error);
