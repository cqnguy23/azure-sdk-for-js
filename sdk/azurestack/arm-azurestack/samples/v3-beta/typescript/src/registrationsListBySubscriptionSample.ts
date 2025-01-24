/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import { AzureStackManagementClient } from "@azure/arm-azurestack";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Returns a list of all registrations under current subscription.
 *
 * @summary Returns a list of all registrations under current subscription.
 * x-ms-original-file: specification/azurestack/resource-manager/Microsoft.AzureStack/preview/2020-06-01-preview/examples/Registration/ListBySubscription.json
 */
async function returnsAListOfAllRegistrationsUnderCurrentSubscription() {
  const subscriptionId = "dd8597b4-8739-4467-8b10-f8679f62bfbf";
  const credential = new DefaultAzureCredential();
  const client = new AzureStackManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.registrations.listBySubscription()) {
    resArray.push(item);
  }
  console.log(resArray);
}

returnsAListOfAllRegistrationsUnderCurrentSubscription().catch(console.error);
