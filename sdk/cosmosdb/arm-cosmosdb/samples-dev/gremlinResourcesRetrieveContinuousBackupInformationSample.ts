/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import type { ContinuousBackupRestoreLocation } from "@azure/arm-cosmosdb";
import { CosmosDBManagementClient } from "@azure/arm-cosmosdb";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Retrieves continuous backup information for a gremlin graph.
 *
 * @summary Retrieves continuous backup information for a gremlin graph.
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/preview/2024-12-01-preview/examples/CosmosDBGremlinGraphBackupInformation.json
 */
async function cosmosDbGremlinGraphBackupInformation(): Promise<void> {
  const subscriptionId = process.env["COSMOSDB_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["COSMOSDB_RESOURCE_GROUP"] || "rgName";
  const accountName = "ddb1";
  const databaseName = "databaseName";
  const graphName = "graphName";
  const location: ContinuousBackupRestoreLocation = {
    location: "North Europe",
  };
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const result = await client.gremlinResources.beginRetrieveContinuousBackupInformationAndWait(
    resourceGroupName,
    accountName,
    databaseName,
    graphName,
    location,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await cosmosDbGremlinGraphBackupInformation();
}

main().catch(console.error);
