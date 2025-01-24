/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import { NetAppManagementClient } from "@azure/arm-netapp";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Update the network features of the specified network sibling set.
 *
 * @summary Update the network features of the specified network sibling set.
 * x-ms-original-file: specification/netapp/resource-manager/Microsoft.NetApp/preview/2024-07-01-preview/examples/NetworkSiblingSet_Update.json
 */
async function networkFeaturesUpdate() {
  const subscriptionId =
    process.env["NETAPP_SUBSCRIPTION_ID"] || "D633CC2E-722B-4AE1-B636-BBD9E4C60ED9";
  const location = "eastus";
  const networkSiblingSetId = "9760acf5-4638-11e7-9bdb-020073ca3333";
  const subnetId =
    "/subscriptions/9760acf5-4638-11e7-9bdb-020073ca7778/resourceGroups/myRP/providers/Microsoft.Network/virtualNetworks/testVnet/subnets/testSubnet";
  const networkSiblingSetStateId = "12345_44420.8001578125";
  const networkFeatures = "Standard";
  const credential = new DefaultAzureCredential();
  const client = new NetAppManagementClient(credential, subscriptionId);
  const result = await client.netAppResource.beginUpdateNetworkSiblingSetAndWait(
    location,
    networkSiblingSetId,
    subnetId,
    networkSiblingSetStateId,
    networkFeatures,
  );
  console.log(result);
}

async function main() {
  await networkFeaturesUpdate();
}

main().catch(console.error);
