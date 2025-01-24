/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import { PrivateDnsManagementClient } from "@azure/arm-privatedns";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Lists the Private DNS zones within a resource group.
 *
 * @summary Lists the Private DNS zones within a resource group.
 * x-ms-original-file: specification/privatedns/resource-manager/Microsoft.Network/stable/2024-06-01/examples/PrivateZoneListInResourceGroup.json
 */
async function getPrivateDnsZoneByResourceGroup() {
  const subscriptionId = process.env["PRIVATEDNS_SUBSCRIPTION_ID"] || "subscriptionId";
  const resourceGroupName = process.env["PRIVATEDNS_RESOURCE_GROUP"] || "resourceGroup1";
  const credential = new DefaultAzureCredential();
  const client = new PrivateDnsManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.privateZones.listByResourceGroup(resourceGroupName)) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  await getPrivateDnsZoneByResourceGroup();
}

main().catch(console.error);
