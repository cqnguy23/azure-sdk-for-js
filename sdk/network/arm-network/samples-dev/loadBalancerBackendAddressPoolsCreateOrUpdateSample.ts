/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import type { BackendAddressPool } from "@azure/arm-network";
import { NetworkManagementClient } from "@azure/arm-network";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Creates or updates a load balancer backend address pool.
 *
 * @summary Creates or updates a load balancer backend address pool.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2024-05-01/examples/LBBackendAddressPoolWithBackendAddressesPut.json
 */
async function updateLoadBalancerBackendPoolWithBackendAddressesContainingVirtualNetworkAndIPAddress() {
  const subscriptionId = process.env["NETWORK_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["NETWORK_RESOURCE_GROUP"] || "testrg";
  const loadBalancerName = "lb";
  const backendAddressPoolName = "backend";
  const parameters: BackendAddressPool = {
    loadBalancerBackendAddresses: [
      {
        name: "address1",
        ipAddress: "10.0.0.4",
        virtualNetwork: {
          id: "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualNetworks/vnetlb",
        },
      },
      {
        name: "address2",
        ipAddress: "10.0.0.5",
        virtualNetwork: {
          id: "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualNetworks/vnetlb",
        },
      },
    ],
  };
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.loadBalancerBackendAddressPools.beginCreateOrUpdateAndWait(
    resourceGroupName,
    loadBalancerName,
    backendAddressPoolName,
    parameters,
  );
  console.log(result);
}

async function main() {
  await updateLoadBalancerBackendPoolWithBackendAddressesContainingVirtualNetworkAndIPAddress();
}

main().catch(console.error);
