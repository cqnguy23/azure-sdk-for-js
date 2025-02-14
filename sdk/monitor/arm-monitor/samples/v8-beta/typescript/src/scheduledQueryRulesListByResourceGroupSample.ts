/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { MonitorClient } from "@azure/arm-monitor";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Retrieve scheduled query rule definitions in a resource group.
 *
 * @summary Retrieve scheduled query rule definitions in a resource group.
 * x-ms-original-file: specification/monitor/resource-manager/Microsoft.Insights/stable/2023-12-01/examples/listScheduledQueryRulesByResourceGroup.json
 */
async function listScheduledQueryRulesByResourceGroup(): Promise<void> {
  const subscriptionId =
    process.env["MONITOR_SUBSCRIPTION_ID"] ||
    "dd4bfc94-a096-412b-9c43-4bd13e35afbc";
  const resourceGroupName =
    process.env["MONITOR_RESOURCE_GROUP"] || "QueryResourceGroupName";
  const credential = new DefaultAzureCredential();
  const client = new MonitorClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.scheduledQueryRules.listByResourceGroup(
    resourceGroupName,
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main(): Promise<void> {
  listScheduledQueryRulesByResourceGroup();
}

main().catch(console.error);
