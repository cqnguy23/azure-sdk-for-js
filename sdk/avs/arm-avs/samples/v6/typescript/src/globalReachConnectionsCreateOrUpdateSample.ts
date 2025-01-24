/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import { GlobalReachConnection, AzureVMwareSolutionAPI } from "@azure/arm-avs";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Create a GlobalReachConnection
 *
 * @summary Create a GlobalReachConnection
 * x-ms-original-file: specification/vmware/resource-manager/Microsoft.AVS/stable/2023-09-01/examples/GlobalReachConnections_CreateOrUpdate.json
 */
async function globalReachConnectionsCreateOrUpdate() {
  const subscriptionId =
    process.env["AVS_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = process.env["AVS_RESOURCE_GROUP"] || "group1";
  const privateCloudName = "cloud1";
  const globalReachConnectionName = "connection1";
  const globalReachConnection: GlobalReachConnection = {
    authorizationKey: "01010101-0101-0101-0101-010101010101",
    peerExpressRouteCircuit:
      "/subscriptions/12341234-1234-1234-1234-123412341234/resourceGroups/mygroup/providers/Microsoft.Network/expressRouteCircuits/mypeer",
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureVMwareSolutionAPI(credential, subscriptionId);
  const result = await client.globalReachConnections.beginCreateOrUpdateAndWait(
    resourceGroupName,
    privateCloudName,
    globalReachConnectionName,
    globalReachConnection,
  );
  console.log(result);
}

async function main() {
  globalReachConnectionsCreateOrUpdate();
}

main().catch(console.error);
