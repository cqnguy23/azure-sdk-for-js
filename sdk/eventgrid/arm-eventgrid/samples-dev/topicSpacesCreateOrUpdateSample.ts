/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import type { TopicSpace } from "@azure/arm-eventgrid";
import { EventGridManagementClient } from "@azure/arm-eventgrid";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Create or update a topic space with the specified parameters.
 *
 * @summary Create or update a topic space with the specified parameters.
 * x-ms-original-file: specification/eventgrid/resource-manager/Microsoft.EventGrid/preview/2024-06-01-preview/examples/TopicSpaces_CreateOrUpdate.json
 */
async function topicSpacesCreateOrUpdate() {
  const subscriptionId =
    process.env["EVENTGRID_SUBSCRIPTION_ID"] || "8f6b6269-84f2-4d09-9e31-1127efcd1e40";
  const resourceGroupName = process.env["EVENTGRID_RESOURCE_GROUP"] || "examplerg";
  const namespaceName = "exampleNamespaceName1";
  const topicSpaceName = "exampleTopicSpaceName1";
  const topicSpaceInfo: TopicSpace = { topicTemplates: ["filter1", "filter2"] };
  const credential = new DefaultAzureCredential();
  const client = new EventGridManagementClient(credential, subscriptionId);
  const result = await client.topicSpaces.beginCreateOrUpdateAndWait(
    resourceGroupName,
    namespaceName,
    topicSpaceName,
    topicSpaceInfo,
  );
  console.log(result);
}

async function main() {
  await topicSpacesCreateOrUpdate();
}

main().catch(console.error);
