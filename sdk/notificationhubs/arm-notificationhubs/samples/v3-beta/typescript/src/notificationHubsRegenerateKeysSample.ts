/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import {
  PolicyKeyResource,
  NotificationHubsManagementClient,
} from "@azure/arm-notificationhubs";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Regenerates the Primary/Secondary Keys to the NotificationHub Authorization Rule
 *
 * @summary Regenerates the Primary/Secondary Keys to the NotificationHub Authorization Rule
 * x-ms-original-file: specification/notificationhubs/resource-manager/Microsoft.NotificationHubs/preview/2023-10-01-preview/examples/NotificationHubs/AuthorizationRuleRegenerateKey.json
 */
async function notificationHubsRegenerateKeys() {
  const subscriptionId =
    process.env["NOTIFICATIONHUBS_SUBSCRIPTION_ID"] ||
    "29cfa613-cbbc-4512-b1d6-1b3a92c7fa40";
  const resourceGroupName =
    process.env["NOTIFICATIONHUBS_RESOURCE_GROUP"] || "5ktrial";
  const namespaceName = "nh-sdk-ns";
  const notificationHubName = "nh-sdk-hub";
  const authorizationRuleName = "DefaultListenSharedAccessSignature";
  const parameters: PolicyKeyResource = { policyKey: "PrimaryKey" };
  const credential = new DefaultAzureCredential();
  const client = new NotificationHubsManagementClient(
    credential,
    subscriptionId,
  );
  const result = await client.notificationHubs.regenerateKeys(
    resourceGroupName,
    namespaceName,
    notificationHubName,
    authorizationRuleName,
    parameters,
  );
  console.log(result);
}

async function main() {
  notificationHubsRegenerateKeys();
}

main().catch(console.error);
