/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import {
  FleetMember,
  ContainerServiceFleetClient,
} from "@azure/arm-containerservicefleet";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Create a FleetMember
 *
 * @summary Create a FleetMember
 * x-ms-original-file: specification/containerservice/resource-manager/Microsoft.ContainerService/fleet/preview/2024-05-02-preview/examples/FleetMembers_Create.json
 */
async function createsAFleetMemberResourceWithALongRunningOperation(): Promise<void> {
  const subscriptionId =
    process.env["CONTAINERSERVICE_SUBSCRIPTION_ID"] || "subid1";
  const resourceGroupName =
    process.env["CONTAINERSERVICE_RESOURCE_GROUP"] || "rg1";
  const fleetName = "fleet1";
  const fleetMemberName = "member-1";
  const resource: FleetMember = {
    clusterResourceId:
      "/subscriptions/subid1/resourcegroups/rg1/providers/Microsoft.ContainerService/managedClusters/cluster-1",
  };
  const credential = new DefaultAzureCredential();
  const client = new ContainerServiceFleetClient(credential, subscriptionId);
  const result = await client.fleetMembers.beginCreateAndWait(
    resourceGroupName,
    fleetName,
    fleetMemberName,
    resource,
  );
  console.log(result);
}

async function main(): Promise<void> {
  createsAFleetMemberResourceWithALongRunningOperation();
}

main().catch(console.error);
