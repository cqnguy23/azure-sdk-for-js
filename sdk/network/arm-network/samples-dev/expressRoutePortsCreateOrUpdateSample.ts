/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import type { ExpressRoutePort } from "@azure/arm-network";
import { NetworkManagementClient } from "@azure/arm-network";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Creates or updates the specified ExpressRoutePort resource.
 *
 * @summary Creates or updates the specified ExpressRoutePort resource.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2024-05-01/examples/ExpressRoutePortCreate.json
 */
async function expressRoutePortCreate() {
  const subscriptionId = process.env["NETWORK_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["NETWORK_RESOURCE_GROUP"] || "rg1";
  const expressRoutePortName = "portName";
  const parameters: ExpressRoutePort = {
    bandwidthInGbps: 100,
    billingType: "UnlimitedData",
    encapsulation: "QinQ",
    location: "westus",
    peeringLocation: "peeringLocationName",
  };
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.expressRoutePorts.beginCreateOrUpdateAndWait(
    resourceGroupName,
    expressRoutePortName,
    parameters,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or updates the specified ExpressRoutePort resource.
 *
 * @summary Creates or updates the specified ExpressRoutePort resource.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2024-05-01/examples/ExpressRoutePortUpdateLink.json
 */
async function expressRoutePortUpdateLink() {
  const subscriptionId = process.env["NETWORK_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["NETWORK_RESOURCE_GROUP"] || "rg1";
  const expressRoutePortName = "portName";
  const parameters: ExpressRoutePort = {
    bandwidthInGbps: 100,
    billingType: "UnlimitedData",
    encapsulation: "QinQ",
    links: [{ name: "link1", adminState: "Enabled" }],
    location: "westus",
    peeringLocation: "peeringLocationName",
  };
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.expressRoutePorts.beginCreateOrUpdateAndWait(
    resourceGroupName,
    expressRoutePortName,
    parameters,
  );
  console.log(result);
}

async function main() {
  await expressRoutePortCreate();
  await expressRoutePortUpdateLink();
}

main().catch(console.error);
