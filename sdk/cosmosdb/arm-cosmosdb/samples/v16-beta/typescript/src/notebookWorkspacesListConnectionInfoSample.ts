/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import { CosmosDBManagementClient } from "@azure/arm-cosmosdb";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Retrieves the connection info for the notebook workspace
 *
 * @summary Retrieves the connection info for the notebook workspace
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/preview/2024-12-01-preview/examples/CosmosDBNotebookWorkspaceListConnectionInfo.json
 */
async function cosmosDbNotebookWorkspaceListConnectionInfo() {
  const subscriptionId = process.env["COSMOSDB_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["COSMOSDB_RESOURCE_GROUP"] || "rg1";
  const accountName = "ddb1";
  const notebookWorkspaceName = "default";
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const result = await client.notebookWorkspaces.listConnectionInfo(
    resourceGroupName,
    accountName,
    notebookWorkspaceName,
  );
  console.log(result);
}

async function main() {
  cosmosDbNotebookWorkspaceListConnectionInfo();
}

main().catch(console.error);
