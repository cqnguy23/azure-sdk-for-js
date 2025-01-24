/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import type { PartnerTopic } from "@azure/arm-eventgrid";
import { EventGridManagementClient } from "@azure/arm-eventgrid";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Asynchronously creates a new partner topic with the specified parameters.
 *
 * @summary Asynchronously creates a new partner topic with the specified parameters.
 * x-ms-original-file: specification/eventgrid/resource-manager/Microsoft.EventGrid/preview/2024-06-01-preview/examples/PartnerTopics_CreateOrUpdate.json
 */
async function partnerTopicsCreateOrUpdate() {
  const subscriptionId =
    process.env["EVENTGRID_SUBSCRIPTION_ID"] || "8f6b6269-84f2-4d09-9e31-1127efcd1e40";
  const resourceGroupName = process.env["EVENTGRID_RESOURCE_GROUP"] || "examplerg";
  const partnerTopicName = "examplePartnerTopicName1";
  const partnerTopicInfo: PartnerTopic = {
    expirationTimeIfNotActivatedUtc: new Date("2022-03-23T23:06:13.109Z"),
    location: "westus2",
    messageForActivation: "Example message for activation",
    partnerRegistrationImmutableId: "6f541064-031d-4cc8-9ec3-a3b4fc0f7185",
    partnerTopicFriendlyDescription: "Example description",
    source: "ContosoCorp.Accounts.User1",
  };
  const credential = new DefaultAzureCredential();
  const client = new EventGridManagementClient(credential, subscriptionId);
  const result = await client.partnerTopics.createOrUpdate(
    resourceGroupName,
    partnerTopicName,
    partnerTopicInfo,
  );
  console.log(result);
}

async function main() {
  await partnerTopicsCreateOrUpdate();
}

main().catch(console.error);
