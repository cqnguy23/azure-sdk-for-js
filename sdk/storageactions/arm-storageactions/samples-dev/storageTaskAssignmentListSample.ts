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
 * This sample demonstrates how to Lists all the storage tasks available under the given resource group.
 *
 * @summary Lists all the storage tasks available under the given resource group.
 * x-ms-original-file: specification/storageactions/resource-manager/Microsoft.StorageActions/stable/2023-01-01/examples/storageTasksList/ListStorageTaskAssignmentIds.json
 */
async function listStorageTaskAssignmentsByResourceGroup() {
  const subscriptionId =
    process.env["STORAGEACTIONS_SUBSCRIPTION_ID"] || "1f31ba14-ce16-4281-b9b4-3e78da6e1616";
  const resourceGroupName = process.env["STORAGEACTIONS_RESOURCE_GROUP"] || "rgroup1";
  const storageTaskName = "mytask1";
  const credential = new DefaultAzureCredential();
  const client = new StorageActionsManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.storageTaskAssignmentOperations.list(
    resourceGroupName,
    storageTaskName,
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  await listStorageTaskAssignmentsByResourceGroup();
}

main().catch(console.error);
