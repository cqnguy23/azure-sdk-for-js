/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import { StreamAnalyticsManagementClient } from "@azure/arm-streamanalytics";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Retrieves the subscription's current quota information in a particular region.
 *
 * @summary Retrieves the subscription's current quota information in a particular region.
 * x-ms-original-file: specification/streamanalytics/resource-manager/Microsoft.StreamAnalytics/preview/2021-10-01-preview/examples/Subscription_ListQuotas.json
 */
async function listSubscriptionQuotaInformationInWestUs() {
  const subscriptionId =
    process.env["STREAMANALYTICS_SUBSCRIPTION_ID"] || "56b5e0a9-b645-407d-99b0-c64f86013e3d";
  const location = "West US";
  const credential = new DefaultAzureCredential();
  const client = new StreamAnalyticsManagementClient(credential, subscriptionId);
  const result = await client.subscriptions.listQuotas(location);
  console.log(result);
}

async function main() {
  await listSubscriptionQuotaInformationInWestUs();
}

main().catch(console.error);
