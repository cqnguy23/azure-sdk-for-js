/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import type { ArmDisasterRecovery } from "@azure/arm-servicebus";
import { ServiceBusManagementClient } from "@azure/arm-servicebus";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Creates or updates a new Alias(Disaster Recovery configuration)
 *
 * @summary Creates or updates a new Alias(Disaster Recovery configuration)
 * x-ms-original-file: specification/servicebus/resource-manager/Microsoft.ServiceBus/preview/2022-10-01-preview/examples/disasterRecoveryConfigs/SBAliasCreate.json
 */
async function sbAliasCreate() {
  const subscriptionId =
    process.env["SERVICEBUS_SUBSCRIPTION_ID"] || "5f750a97-50d9-4e36-8081-c9ee4c0210d4";
  const resourceGroupName = process.env["SERVICEBUS_RESOURCE_GROUP"] || "ardsouzatestRG";
  const namespaceName = "sdk-Namespace-8860";
  const alias = "sdk-Namespace-8860";
  const parameters: ArmDisasterRecovery = {
    alternateName: "alternameforAlias-Namespace-8860",
    partnerNamespace: "sdk-Namespace-37",
  };
  const credential = new DefaultAzureCredential();
  const client = new ServiceBusManagementClient(credential, subscriptionId);
  const result = await client.disasterRecoveryConfigs.createOrUpdate(
    resourceGroupName,
    namespaceName,
    alias,
    parameters,
  );
  console.log(result);
}

async function main() {
  await sbAliasCreate();
}

main().catch(console.error);
