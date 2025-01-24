/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import { ContainerAppsAPIClient } from "@azure/arm-appcontainers";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to List BuildResource resources by BuilderResource
 *
 * @summary List BuildResource resources by BuilderResource
 * x-ms-original-file: specification/app/resource-manager/Microsoft.App/preview/2024-08-02-preview/examples/Builds_ListByBuilderResource.json
 */
async function buildsListByBuilderResource0(): Promise<void> {
  const subscriptionId =
    process.env["APPCONTAINERS_SUBSCRIPTION_ID"] || "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = process.env["APPCONTAINERS_RESOURCE_GROUP"] || "rg";
  const builderName = "testBuilder";
  const credential = new DefaultAzureCredential();
  const client = new ContainerAppsAPIClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.buildsByBuilderResource.list(resourceGroupName, builderName)) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main(): Promise<void> {
  await buildsListByBuilderResource0();
}

main().catch(console.error);
