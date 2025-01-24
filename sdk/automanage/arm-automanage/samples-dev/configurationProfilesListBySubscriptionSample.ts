/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import { AutomanageClient } from "@azure/arm-automanage";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Retrieve a list of configuration profile within a subscription
 *
 * @summary Retrieve a list of configuration profile within a subscription
 * x-ms-original-file: specification/automanage/resource-manager/Microsoft.Automanage/stable/2022-05-04/examples/listConfigurationProfilesBySubscription.json
 */
async function listConfigurationProfilesBySubscription(): Promise<void> {
  const subscriptionId = process.env["AUTOMANAGE_SUBSCRIPTION_ID"] || "mySubscriptionId";
  const credential = new DefaultAzureCredential();
  const client = new AutomanageClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.configurationProfiles.listBySubscription()) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main(): Promise<void> {
  await listConfigurationProfilesBySubscription();
}

main().catch(console.error);
