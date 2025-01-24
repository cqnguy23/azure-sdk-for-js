/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import {
  NotificationHubPatchParameters,
  NotificationHubsManagementClient,
} from "@azure/arm-notificationhubs";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Patch a NotificationHub in a namespace.
 *
 * @summary Patch a NotificationHub in a namespace.
 * x-ms-original-file: specification/notificationhubs/resource-manager/Microsoft.NotificationHubs/preview/2023-10-01-preview/examples/NotificationHubs/Update.json
 */
async function notificationHubsUpdate() {
  const subscriptionId =
    process.env["NOTIFICATIONHUBS_SUBSCRIPTION_ID"] ||
    "29cfa613-cbbc-4512-b1d6-1b3a92c7fa40";
  const resourceGroupName =
    process.env["NOTIFICATIONHUBS_RESOURCE_GROUP"] || "sdkresourceGroup";
  const namespaceName = "nh-sdk-ns";
  const notificationHubName = "sdk-notificationHubs-8708";
  const parameters: NotificationHubPatchParameters = {
    gcmCredential: {
      gcmEndpoint: "https://fcm.googleapis.com/fcm/send",
      googleApiKey: "###################################",
    },
    registrationTtl: "10675199.02:48:05.4775807",
  };
  const credential = new DefaultAzureCredential();
  const client = new NotificationHubsManagementClient(
    credential,
    subscriptionId,
  );
  const result = await client.notificationHubs.update(
    resourceGroupName,
    namespaceName,
    notificationHubName,
    parameters,
  );
  console.log(result);
}

async function main() {
  notificationHubsUpdate();
}

main().catch(console.error);
