/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import { NetworkConnectionUpdate, DevCenterClient } from "@azure/arm-devcenter";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Partially updates a Network Connection
 *
 * @summary Partially updates a Network Connection
 * x-ms-original-file: specification/devcenter/resource-manager/Microsoft.DevCenter/stable/2024-02-01/examples/NetworkConnections_Patch.json
 */
async function networkConnectionsUpdate() {
  const subscriptionId =
    process.env["DEVCENTER_SUBSCRIPTION_ID"] ||
    "0ac520ee-14c0-480f-b6c9-0a90c58ffff";
  const resourceGroupName = process.env["DEVCENTER_RESOURCE_GROUP"] || "rg1";
  const networkConnectionName = "uswest3network";
  const body: NetworkConnectionUpdate = {
    domainPassword: "New Password value for user",
  };
  const credential = new DefaultAzureCredential();
  const client = new DevCenterClient(credential, subscriptionId);
  const result = await client.networkConnections.beginUpdateAndWait(
    resourceGroupName,
    networkConnectionName,
    body,
  );
  console.log(result);
}

async function main() {
  networkConnectionsUpdate();
}

main().catch(console.error);
