/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import { AzureMediaServices } from "@azure/arm-mediaservices";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Starts an existing streaming endpoint.
 *
 * @summary Starts an existing streaming endpoint.
 * x-ms-original-file: specification/mediaservices/resource-manager/Microsoft.Media/Streaming/stable/2022-08-01/examples/streamingendpoint-start.json
 */
async function startAStreamingEndpoint() {
  const subscriptionId =
    process.env["MEDIASERVICES_SUBSCRIPTION_ID"] || "0a6ec948-5a62-437d-b9df-934dc7c1b722";
  const resourceGroupName = process.env["MEDIASERVICES_RESOURCE_GROUP"] || "mediaresources";
  const accountName = "slitestmedia10";
  const streamingEndpointName = "myStreamingEndpoint1";
  const credential = new DefaultAzureCredential();
  const client = new AzureMediaServices(credential, subscriptionId);
  const result = await client.streamingEndpoints.beginStartAndWait(
    resourceGroupName,
    accountName,
    streamingEndpointName,
  );
  console.log(result);
}

async function main() {
  await startAStreamingEndpoint();
}

main().catch(console.error);
