/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import {
  CassandraKeyspaceCreateUpdateParameters,
  CosmosDBManagementClient,
} from "@azure/arm-cosmosdb";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Create or update an Azure Cosmos DB Cassandra keyspace
 *
 * @summary Create or update an Azure Cosmos DB Cassandra keyspace
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/preview/2024-12-01-preview/examples/CosmosDBCassandraKeyspaceCreateUpdate.json
 */
async function cosmosDbCassandraKeyspaceCreateUpdate() {
  const subscriptionId = process.env["COSMOSDB_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["COSMOSDB_RESOURCE_GROUP"] || "rg1";
  const accountName = "ddb1";
  const keyspaceName = "keyspaceName";
  const createUpdateCassandraKeyspaceParameters: CassandraKeyspaceCreateUpdateParameters =
    {
      location: "West US",
      options: {},
      resource: { id: "keyspaceName" },
      tags: {},
    };
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const result =
    await client.cassandraResources.beginCreateUpdateCassandraKeyspaceAndWait(
      resourceGroupName,
      accountName,
      keyspaceName,
      createUpdateCassandraKeyspaceParameters,
    );
  console.log(result);
}

async function main() {
  cosmosDbCassandraKeyspaceCreateUpdate();
}

main().catch(console.error);
