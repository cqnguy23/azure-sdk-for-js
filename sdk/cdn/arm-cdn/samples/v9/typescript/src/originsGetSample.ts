/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import { CdnManagementClient } from "@azure/arm-cdn";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Gets an existing origin within an endpoint.
 *
 * @summary Gets an existing origin within an endpoint.
 * x-ms-original-file: specification/cdn/resource-manager/Microsoft.Cdn/stable/2024-02-01/examples/Origins_Get.json
 */
async function originsGet() {
  const subscriptionId = process.env["CDN_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["CDN_RESOURCE_GROUP"] || "RG";
  const profileName = "profile1";
  const endpointName = "endpoint1";
  const originName = "www-someDomain-net";
  const credential = new DefaultAzureCredential();
  const client = new CdnManagementClient(credential, subscriptionId);
  const result = await client.origins.get(
    resourceGroupName,
    profileName,
    endpointName,
    originName,
  );
  console.log(result);
}

async function main() {
  originsGet();
}

main().catch(console.error);
