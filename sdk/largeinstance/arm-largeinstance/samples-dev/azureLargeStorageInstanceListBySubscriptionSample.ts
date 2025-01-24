/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import { LargeInstanceManagementClient } from "@azure/arm-largeinstance";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Gets a list of AzureLargeStorageInstances in the specified subscription. The
operations returns various properties of each Azure LargeStorage instance.
 *
 * @summary Gets a list of AzureLargeStorageInstances in the specified subscription. The
operations returns various properties of each Azure LargeStorage instance.
 * x-ms-original-file: specification/azurelargeinstance/resource-manager/Microsoft.AzureLargeInstance/preview/2023-07-20-preview/examples/AzureLargeStorageInstance_ListBySubscription.json
 */
async function azureLargeStorageInstanceListBySubscription() {
  const subscriptionId =
    process.env["LARGEINSTANCE_SUBSCRIPTION_ID"] || "f0f4887f-d13c-4943-a8ba-d7da28d2a3fd";
  const credential = new DefaultAzureCredential();
  const client = new LargeInstanceManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.azureLargeStorageInstanceOperations.listBySubscription()) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  await azureLargeStorageInstanceListBySubscription();
}

main().catch(console.error);
