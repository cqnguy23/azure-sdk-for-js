/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import { ServiceFabricMeshManagementClient } from "@azure/arm-servicefabricmesh";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Gets the information about all gateway resources in a given resource group. The information include the description and other properties of the gateway.
 *
 * @summary Gets the information about all gateway resources in a given resource group. The information include the description and other properties of the gateway.
 * x-ms-original-file: specification/servicefabricmesh/resource-manager/Microsoft.ServiceFabricMesh/preview/2018-09-01-preview/examples/gateways/list_bySubscriptionId.json
 */
async function listGatewaysBySubscriptionId() {
  const subscriptionId =
    process.env["SERVICEFABRICMESH_SUBSCRIPTION_ID"] || "00000000-0000-0000-0000-000000000000";
  const credential = new DefaultAzureCredential();
  const client = new ServiceFabricMeshManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.gateway.listBySubscription()) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  await listGatewaysBySubscriptionId();
}

main().catch(console.error);
