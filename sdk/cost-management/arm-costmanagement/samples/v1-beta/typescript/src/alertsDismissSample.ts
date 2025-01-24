/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import {
  DismissAlertPayload,
  CostManagementClient
} from "@azure/arm-costmanagement";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Dismisses the specified alert
 *
 * @summary Dismisses the specified alert
 * x-ms-original-file: specification/cost-management/resource-manager/Microsoft.CostManagement/stable/2022-10-01/examples/DismissResourceGroupAlerts.json
 */
async function patchResourceGroupAlerts(): Promise<void> {
  const scope =
    "subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/ScreenSharingTest-peer";
  const alertId = "22222222-2222-2222-2222-222222222222";
  const parameters: DismissAlertPayload = { status: "Dismissed" };
  const credential = new DefaultAzureCredential();
  const client = new CostManagementClient(credential);
  const result = await client.alerts.dismiss(scope, alertId, parameters);
  console.log(result);
}

/**
 * This sample demonstrates how to Dismisses the specified alert
 *
 * @summary Dismisses the specified alert
 * x-ms-original-file: specification/cost-management/resource-manager/Microsoft.CostManagement/stable/2022-10-01/examples/DismissSubscriptionAlerts.json
 */
async function patchSubscriptionAlerts(): Promise<void> {
  const scope = "subscriptions/00000000-0000-0000-0000-000000000000";
  const alertId = "22222222-2222-2222-2222-222222222222";
  const parameters: DismissAlertPayload = { status: "Dismissed" };
  const credential = new DefaultAzureCredential();
  const client = new CostManagementClient(credential);
  const result = await client.alerts.dismiss(scope, alertId, parameters);
  console.log(result);
}

async function main(): Promise<void> {
  patchResourceGroupAlerts();
  patchSubscriptionAlerts();
}

main().catch(console.error);
