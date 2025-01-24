/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import type { TopicUpdateParameters } from "@azure/arm-eventgrid";
import { EventGridManagementClient } from "@azure/arm-eventgrid";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Asynchronously updates a topic with the specified parameters.
 *
 * @summary Asynchronously updates a topic with the specified parameters.
 * x-ms-original-file: specification/eventgrid/resource-manager/Microsoft.EventGrid/preview/2024-06-01-preview/examples/Topics_Update.json
 */
async function topicsUpdate() {
  const subscriptionId =
    process.env["EVENTGRID_SUBSCRIPTION_ID"] || "8f6b6269-84f2-4d09-9e31-1127efcd1e40";
  const resourceGroupName = process.env["EVENTGRID_RESOURCE_GROUP"] || "examplerg";
  const topicName = "exampletopic1";
  const topicUpdateParameters: TopicUpdateParameters = {
    inboundIpRules: [
      { action: "Allow", ipMask: "12.18.30.15" },
      { action: "Allow", ipMask: "12.18.176.1" },
    ],
    publicNetworkAccess: "Enabled",
    tags: { tag1: "value1", tag2: "value2" },
  };
  const credential = new DefaultAzureCredential();
  const client = new EventGridManagementClient(credential, subscriptionId);
  const result = await client.topics.beginUpdateAndWait(
    resourceGroupName,
    topicName,
    topicUpdateParameters,
  );
  console.log(result);
}

async function main() {
  await topicsUpdate();
}

main().catch(console.error);
