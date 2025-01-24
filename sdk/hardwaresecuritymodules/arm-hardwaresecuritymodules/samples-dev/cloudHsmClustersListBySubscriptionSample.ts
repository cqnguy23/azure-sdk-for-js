/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import { AzureHSMResourceProvider } from "@azure/arm-hardwaresecuritymodules";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to The List operation gets information about the Cloud HSM Clusters associated with the subscription.
 *
 * @summary The List operation gets information about the Cloud HSM Clusters associated with the subscription.
 * x-ms-original-file: specification/hardwaresecuritymodules/resource-manager/Microsoft.HardwareSecurityModules/preview/2024-06-30-preview/examples/CloudHsmCluster_ListBySubscription_MaximumSet_Gen.json
 */
async function cloudHsmClusterListBySubscriptionMaximumSetGen() {
  const subscriptionId =
    process.env["HARDWARESECURITYMODULES_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const credential = new DefaultAzureCredential();
  const client = new AzureHSMResourceProvider(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.cloudHsmClusters.listBySubscription()) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  await cloudHsmClusterListBySubscriptionMaximumSetGen();
}

main().catch(console.error);
