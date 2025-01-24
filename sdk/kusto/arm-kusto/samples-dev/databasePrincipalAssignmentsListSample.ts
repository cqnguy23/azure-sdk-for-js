/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import { KustoManagementClient } from "@azure/arm-kusto";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Lists all Kusto cluster database principalAssignments.
 *
 * @summary Lists all Kusto cluster database principalAssignments.
 * x-ms-original-file: specification/azure-kusto/resource-manager/Microsoft.Kusto/stable/2023-08-15/examples/KustoDatabasePrincipalAssignmentsList.json
 */
async function kustoPrincipalAssignmentsList() {
  const subscriptionId =
    process.env["KUSTO_SUBSCRIPTION_ID"] || "12345678-1234-1234-1234-123456789098";
  const resourceGroupName = process.env["KUSTO_RESOURCE_GROUP"] || "kustorptest";
  const clusterName = "kustoCluster";
  const databaseName = "Kustodatabase8";
  const credential = new DefaultAzureCredential();
  const client = new KustoManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.databasePrincipalAssignments.list(
    resourceGroupName,
    clusterName,
    databaseName,
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  await kustoPrincipalAssignmentsList();
}

main().catch(console.error);
