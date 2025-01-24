/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import type { PrivateEndpointConnection } from "@azure/arm-hardwaresecuritymodules";
import { AzureHSMResourceProvider } from "@azure/arm-hardwaresecuritymodules";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Creates or updates the private endpoint connection for the Cloud Hsm Cluster.
 *
 * @summary Creates or updates the private endpoint connection for the Cloud Hsm Cluster.
 * x-ms-original-file: specification/hardwaresecuritymodules/resource-manager/Microsoft.HardwareSecurityModules/preview/2024-06-30-preview/examples/CloudHsmClusterPrivateEndpointConnection_Create_MaximumSet_Gen.json
 */
async function cloudHsmClusterPrivateEndpointConnectionCreateMaximumSetGen() {
  const subscriptionId =
    process.env["HARDWARESECURITYMODULES_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = process.env["HARDWARESECURITYMODULES_RESOURCE_GROUP"] || "rgcloudhsm";
  const cloudHsmClusterName = "chsm1";
  const peConnectionName = "sample-pec";
  const properties: PrivateEndpointConnection = {
    privateLinkServiceConnectionState: {
      description: "My name is Joe and I'm approving this.",
      status: "Approved",
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureHSMResourceProvider(credential, subscriptionId);
  const result = await client.cloudHsmClusterPrivateEndpointConnections.create(
    resourceGroupName,
    cloudHsmClusterName,
    peConnectionName,
    properties,
  );
  console.log(result);
}

async function main() {
  await cloudHsmClusterPrivateEndpointConnectionCreateMaximumSetGen();
}

main().catch(console.error);
