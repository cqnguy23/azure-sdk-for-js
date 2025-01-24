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
 * This sample demonstrates how to List all quota rules associated with the volume
 *
 * @summary List all quota rules associated with the volume
 * x-ms-original-file: specification/netapp/resource-manager/Microsoft.NetApp/preview/2024-07-01-preview/examples/VolumeQuotaRules_List.json
 */
async function volumeQuotaRulesList() {
  const subscriptionId =
    process.env["NETAPP_SUBSCRIPTION_ID"] || "5275316f-a498-48d6-b324-2cbfdc4311b9";
  const resourceGroupName = process.env["NETAPP_RESOURCE_GROUP"] || "myRG";
  const accountName = "account-9957";
  const poolName = "pool-5210";
  const volumeName = "volume-6387";
  const credential = new DefaultAzureCredential();
  const client = new NetAppManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.volumeQuotaRules.listByVolume(
    resourceGroupName,
    accountName,
    poolName,
    volumeName,
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  await volumeQuotaRulesList();
}

main().catch(console.error);
