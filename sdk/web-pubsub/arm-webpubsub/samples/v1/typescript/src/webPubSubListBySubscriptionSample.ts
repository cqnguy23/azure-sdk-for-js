/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import { WebPubSubManagementClient } from "@azure/arm-webpubsub";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Handles requests to list all resources in a subscription.
 *
 * @summary Handles requests to list all resources in a subscription.
 * x-ms-original-file: specification/webpubsub/resource-manager/Microsoft.SignalRService/stable/2024-03-01/examples/WebPubSub_ListBySubscription.json
 */
async function webPubSubListBySubscription(): Promise<void> {
  const subscriptionId =
    process.env["WEB-PUBSUB_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const credential = new DefaultAzureCredential();
  const client = new WebPubSubManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.webPubSub.listBySubscription()) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main(): Promise<void> {
  webPubSubListBySubscription();
}

main().catch(console.error);
