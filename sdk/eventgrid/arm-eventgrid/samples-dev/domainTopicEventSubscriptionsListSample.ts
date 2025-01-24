/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import { EventGridManagementClient } from "@azure/arm-eventgrid";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to List all event subscriptions that have been created for a specific domain topic.
 *
 * @summary List all event subscriptions that have been created for a specific domain topic.
 * x-ms-original-file: specification/eventgrid/resource-manager/Microsoft.EventGrid/preview/2024-06-01-preview/examples/DomainTopicEventSubscriptions_List.json
 */
async function domainTopicEventSubscriptionsList() {
  const subscriptionId =
    process.env["EVENTGRID_SUBSCRIPTION_ID"] || "8f6b6269-84f2-4d09-9e31-1127efcd1e40";
  const resourceGroupName = process.env["EVENTGRID_RESOURCE_GROUP"] || "examplerg";
  const domainName = "exampleDomain1";
  const topicName = "exampleDomainTopic1";
  const credential = new DefaultAzureCredential();
  const client = new EventGridManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.domainTopicEventSubscriptions.list(
    resourceGroupName,
    domainName,
    topicName,
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  await domainTopicEventSubscriptionsList();
}

main().catch(console.error);
