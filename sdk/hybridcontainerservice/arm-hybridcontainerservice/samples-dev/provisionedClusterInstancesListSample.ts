/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import { HybridContainerServiceClient } from "@azure/arm-hybridcontainerservice";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Lists the ProvisionedClusterInstance resource associated with the ConnectedCluster
 *
 * @summary Lists the ProvisionedClusterInstance resource associated with the ConnectedCluster
 * x-ms-original-file: specification/hybridaks/resource-manager/Microsoft.HybridContainerService/stable/2024-01-01/examples/ListProvisionedClusterInstances.json
 */
async function listProvisionedClusterInstances() {
  const connectedClusterResourceUri =
    "subscriptions/fd3c3665-1729-4b7b-9a38-238e83b0f98b/resourceGroups/testrg/providers/Microsoft.Kubernetes/connectedClusters/test-hybridakscluster";
  const credential = new DefaultAzureCredential();
  const client = new HybridContainerServiceClient(credential);
  const resArray = new Array();
  for await (const item of client.provisionedClusterInstances.list(connectedClusterResourceUri)) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  await listProvisionedClusterInstances();
}

main().catch(console.error);
