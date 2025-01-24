/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import type { NetworkDevice } from "@azure/arm-managednetworkfabric";
import { AzureNetworkFabricManagementServiceAPI } from "@azure/arm-managednetworkfabric";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Create a Network Device resource
 *
 * @summary Create a Network Device resource
 * x-ms-original-file: specification/managednetworkfabric/resource-manager/Microsoft.ManagedNetworkFabric/stable/2023-06-15/examples/NetworkDevices_Create_MaximumSet_Gen.json
 */
async function networkDevicesCreateMaximumSetGen() {
  const subscriptionId =
    process.env["MANAGEDNETWORKFABRIC_SUBSCRIPTION_ID"] || "1234ABCD-0A1B-1234-5678-123456ABCDEF";
  const resourceGroupName = process.env["MANAGEDNETWORKFABRIC_RESOURCE_GROUP"] || "example-rg";
  const networkDeviceName = "example-device";
  const body: NetworkDevice = {
    annotation: "annotation",
    hostName: "NFA-Device",
    location: "eastuseuap",
    networkDeviceSku: "DeviceSku",
    serialNumber: "Vendor;DCS-7280XXX-24;12.05;JPE2111XXXX",
    tags: { keyID: "KeyValue" },
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureNetworkFabricManagementServiceAPI(credential, subscriptionId);
  const result = await client.networkDevices.beginCreateAndWait(
    resourceGroupName,
    networkDeviceName,
    body,
  );
  console.log(result);
}

async function main() {
  await networkDevicesCreateMaximumSetGen();
}

main().catch(console.error);
