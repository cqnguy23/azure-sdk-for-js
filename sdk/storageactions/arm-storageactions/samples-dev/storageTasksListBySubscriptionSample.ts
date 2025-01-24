/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import { StorageActionsManagementClient } from "@azure/arm-storageactions";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Lists all the storage tasks available under the subscription.
 *
 * @summary Lists all the storage tasks available under the subscription.
 * x-ms-original-file: specification/storageactions/resource-manager/Microsoft.StorageActions/stable/2023-01-01/examples/storageTasksList/ListStorageTasksBySubscription.json
 */
async function listStorageTasksBySubscription() {
  const subscriptionId =
    process.env["STORAGEACTIONS_SUBSCRIPTION_ID"] || "1f31ba14-ce16-4281-b9b4-3e78da6e1616";
  const credential = new DefaultAzureCredential();
  const client = new StorageActionsManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.storageTasks.listBySubscription()) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  await listStorageTasksBySubscription();
}

main().catch(console.error);
