/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import type { WorkloadNetworkSegment } from "@azure/arm-avs";
import { AzureVMwareSolutionAPI } from "@azure/arm-avs";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Update a WorkloadNetworkSegment
 *
 * @summary Update a WorkloadNetworkSegment
 * x-ms-original-file: specification/vmware/resource-manager/Microsoft.AVS/stable/2023-09-01/examples/WorkloadNetworks_UpdateSegments.json
 */
async function workloadNetworksUpdateSegments(): Promise<void> {
  const subscriptionId =
    process.env["AVS_SUBSCRIPTION_ID"] || "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = process.env["AVS_RESOURCE_GROUP"] || "group1";
  const privateCloudName = "cloud1";
  const segmentId = "segment1";
  const workloadNetworkSegment: WorkloadNetworkSegment = {
    connectedGateway: "/infra/tier-1s/gateway",
    revision: 1,
    subnet: {
      dhcpRanges: ["40.20.0.0-40.20.0.1"],
      gatewayAddress: "40.20.20.20/16",
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureVMwareSolutionAPI(credential, subscriptionId);
  const result = await client.workloadNetworks.beginUpdateSegmentsAndWait(
    resourceGroupName,
    privateCloudName,
    segmentId,
    workloadNetworkSegment,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await workloadNetworksUpdateSegments();
}

main().catch(console.error);
