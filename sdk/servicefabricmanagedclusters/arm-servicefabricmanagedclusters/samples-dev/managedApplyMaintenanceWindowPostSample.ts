/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import { ServiceFabricManagedClustersManagementClient } from "@azure/arm-servicefabricmanagedclusters";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Action to Apply Maintenance window on the Service Fabric Managed Clusters, right now. Any pending update will be applied.
 *
 * @summary Action to Apply Maintenance window on the Service Fabric Managed Clusters, right now. Any pending update will be applied.
 * x-ms-original-file: specification/servicefabricmanagedclusters/resource-manager/Microsoft.ServiceFabric/preview/2024-09-01-preview/examples/ManagedApplyMaintenanceWindowPost_example.json
 */
async function maintenanceWindowStatus() {
  const subscriptionId =
    process.env["SERVICEFABRICMANAGEDCLUSTERS_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName =
    process.env["SERVICEFABRICMANAGEDCLUSTERS_RESOURCE_GROUP"] || "resourceGroup1";
  const clusterName = "mycluster1";
  const credential = new DefaultAzureCredential();
  const client = new ServiceFabricManagedClustersManagementClient(credential, subscriptionId);
  const result = await client.managedApplyMaintenanceWindow.post(resourceGroupName, clusterName);
  console.log(result);
}

async function main() {
  await maintenanceWindowStatus();
}

main().catch(console.error);
