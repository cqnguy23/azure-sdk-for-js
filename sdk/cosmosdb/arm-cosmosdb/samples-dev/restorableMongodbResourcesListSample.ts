/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import type { RestorableMongodbResourcesListOptionalParams } from "@azure/arm-cosmosdb";
import { CosmosDBManagementClient } from "@azure/arm-cosmosdb";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Return a list of database and collection combo that exist on the account at the given timestamp and location. This helps in scenarios to validate what resources exist at given timestamp and location. This API requires 'Microsoft.DocumentDB/locations/restorableDatabaseAccounts/.../read' permission.
 *
 * @summary Return a list of database and collection combo that exist on the account at the given timestamp and location. This helps in scenarios to validate what resources exist at given timestamp and location. This API requires 'Microsoft.DocumentDB/locations/restorableDatabaseAccounts/.../read' permission.
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/preview/2024-12-01-preview/examples/CosmosDBRestorableMongodbResourceList.json
 */
async function cosmosDbRestorableMongodbResourceList(): Promise<void> {
  const subscriptionId =
    process.env["COSMOSDB_SUBSCRIPTION_ID"] || "2296c272-5d55-40d9-bc05-4d56dc2d7588";
  const location = "WestUS";
  const instanceId = "d9b26648-2f53-4541-b3d8-3044f4f9810d";
  const restoreLocation = "WestUS";
  const restoreTimestampInUtc = "06/01/2022 4:56";
  const options: RestorableMongodbResourcesListOptionalParams = {
    restoreLocation,
    restoreTimestampInUtc,
  };
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.restorableMongodbResources.list(location, instanceId, options)) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main(): Promise<void> {
  await cosmosDbRestorableMongodbResourceList();
}

main().catch(console.error);
