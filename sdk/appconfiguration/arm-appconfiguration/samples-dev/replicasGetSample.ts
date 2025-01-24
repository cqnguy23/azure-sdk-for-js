/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import { AppConfigurationManagementClient } from "@azure/arm-appconfiguration";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Gets the properties of the specified replica.
 *
 * @summary Gets the properties of the specified replica.
 * x-ms-original-file: specification/appconfiguration/resource-manager/Microsoft.AppConfiguration/stable/2024-05-01/examples/ConfigurationStoresGetReplica.json
 */
async function replicasGet(): Promise<void> {
  const subscriptionId =
    process.env["APPCONFIGURATION_SUBSCRIPTION_ID"] || "c80fb759-c965-4c6a-9110-9b2b2d038882";
  const resourceGroupName = process.env["APPCONFIGURATION_RESOURCE_GROUP"] || "myResourceGroup";
  const configStoreName = "contoso";
  const replicaName = "myReplicaEus";
  const credential = new DefaultAzureCredential();
  const client = new AppConfigurationManagementClient(credential, subscriptionId);
  const result = await client.replicas.get(resourceGroupName, configStoreName, replicaName);
  console.log(result);
}

async function main(): Promise<void> {
  await replicasGet();
}

main().catch(console.error);
