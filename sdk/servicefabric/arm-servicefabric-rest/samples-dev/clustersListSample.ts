/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import ServiceFabricManagementClient from "@azure-rest/arm-servicefabric";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Gets all Service Fabric cluster resources created or in the process of being created in the subscription.
 *
 * @summary Gets all Service Fabric cluster resources created or in the process of being created in the subscription.
 * x-ms-original-file: specification/servicefabric/resource-manager/Microsoft.ServiceFabric/stable/2021-06-01/examples/ClusterListOperation_example.json
 */
async function listClusters(): Promise<void> {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const credential = new DefaultAzureCredential();
  const client = ServiceFabricManagementClient(credential);
  const result = await client
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.ServiceFabric/clusters",
      subscriptionId,
    )
    .get();
  console.log(result);
}

listClusters().catch(console.error);
