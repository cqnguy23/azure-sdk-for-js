/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import type { MapsKeySpecification } from "@azure/arm-maps";
import { AzureMapsManagementClient } from "@azure/arm-maps";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Regenerate either the primary or secondary key for use with the Maps APIs. The old key will stop working immediately.
 *
 * @summary Regenerate either the primary or secondary key for use with the Maps APIs. The old key will stop working immediately.
 * x-ms-original-file: specification/maps/resource-manager/Microsoft.Maps/stable/2023-06-01/examples/RegenerateKey.json
 */
async function regenerateKey() {
  const subscriptionId =
    process.env["MAPS_SUBSCRIPTION_ID"] || "21a9967a-e8a9-4656-a70b-96ff1c4d05a0";
  const resourceGroupName = process.env["MAPS_RESOURCE_GROUP"] || "myResourceGroup";
  const accountName = "myMapsAccount";
  const keySpecification: MapsKeySpecification = { keyType: "primary" };
  const credential = new DefaultAzureCredential();
  const client = new AzureMapsManagementClient(credential, subscriptionId);
  const result = await client.accounts.regenerateKeys(
    resourceGroupName,
    accountName,
    keySpecification,
  );
  console.log(result);
}

async function main() {
  await regenerateKey();
}

main().catch(console.error);
