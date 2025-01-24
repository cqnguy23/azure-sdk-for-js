/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import { ServiceBusManagementClient } from "@azure/arm-servicebus";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Gets all migrationConfigurations
 *
 * @summary Gets all migrationConfigurations
 * x-ms-original-file: specification/servicebus/resource-manager/Microsoft.ServiceBus/preview/2022-10-01-preview/examples/Migrationconfigurations/SBMigrationconfigurationList.json
 */
async function migrationConfigurationsList() {
  const subscriptionId = process.env["SERVICEBUS_SUBSCRIPTION_ID"] || "SubscriptionId";
  const resourceGroupName = process.env["SERVICEBUS_RESOURCE_GROUP"] || "ResourceGroup";
  const namespaceName = "sdk-Namespace-9259";
  const credential = new DefaultAzureCredential();
  const client = new ServiceBusManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.migrationConfigs.list(resourceGroupName, namespaceName)) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  await migrationConfigurationsList();
}

main().catch(console.error);
