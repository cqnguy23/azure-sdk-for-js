/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import type { EndpointResource } from "@azure/arm-hybridconnectivity";
import { HybridConnectivityManagementAPI } from "@azure/arm-hybridconnectivity";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Create or update the endpoint to the target resource.
 *
 * @summary Create or update the endpoint to the target resource.
 * x-ms-original-file: specification/hybridconnectivity/resource-manager/Microsoft.HybridConnectivity/stable/2023-03-15/examples/EndpointsPutCustom.json
 */
async function hybridConnectivityEndpointsPutCustom() {
  const resourceUri =
    "subscriptions/f5bcc1d9-23af-4ae9-aca1-041d0f593a63/resourceGroups/hybridRG/providers/Microsoft.HybridCompute/machines/testMachine";
  const endpointName = "custom";
  const endpointResource: EndpointResource = {
    properties: {
      type: "custom",
      resourceId:
        "/subscriptions/f5bcc1d9-23af-4ae9-aca1-041d0f593a63/resourceGroups/hybridRG/providers/Microsoft.Relay/namespaces/custom-relay-namespace",
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new HybridConnectivityManagementAPI(credential);
  const result = await client.endpoints.createOrUpdate(resourceUri, endpointName, endpointResource);
  console.log(result);
}

/**
 * This sample demonstrates how to Create or update the endpoint to the target resource.
 *
 * @summary Create or update the endpoint to the target resource.
 * x-ms-original-file: specification/hybridconnectivity/resource-manager/Microsoft.HybridConnectivity/stable/2023-03-15/examples/EndpointsPutDefault.json
 */
async function hybridConnectivityEndpointsPutDefault() {
  const resourceUri =
    "subscriptions/f5bcc1d9-23af-4ae9-aca1-041d0f593a63/resourceGroups/hybridRG/providers/Microsoft.HybridCompute/machines/testMachine";
  const endpointName = "default";
  const endpointResource: EndpointResource = {
    properties: { type: "default" },
  };
  const credential = new DefaultAzureCredential();
  const client = new HybridConnectivityManagementAPI(credential);
  const result = await client.endpoints.createOrUpdate(resourceUri, endpointName, endpointResource);
  console.log(result);
}

async function main() {
  await hybridConnectivityEndpointsPutCustom();
  await hybridConnectivityEndpointsPutDefault();
}

main().catch(console.error);
