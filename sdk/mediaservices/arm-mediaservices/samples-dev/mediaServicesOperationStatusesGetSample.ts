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
 * This sample demonstrates how to Get media service operation status.
 *
 * @summary Get media service operation status.
 * x-ms-original-file: specification/mediaservices/resource-manager/Microsoft.Media/Accounts/stable/2021-11-01/examples/media-service-operation-status-by-id-non-terminal-state-failed.json
 */
async function getStatusOfAsynchronousOperationWhenItIsCompletedWithError() {
  const subscriptionId =
    process.env["MEDIASERVICES_SUBSCRIPTION_ID"] || "00000000-0000-0000-0000-000000000000";
  const locationName = "westus";
  const operationId = "D612C429-2526-49D5-961B-885AE11406FD";
  const credential = new DefaultAzureCredential();
  const client = new AzureMediaServices(credential, subscriptionId);
  const result = await client.mediaServicesOperationStatuses.get(locationName, operationId);
  console.log(result);
}

/**
 * This sample demonstrates how to Get media service operation status.
 *
 * @summary Get media service operation status.
 * x-ms-original-file: specification/mediaservices/resource-manager/Microsoft.Media/Accounts/stable/2021-11-01/examples/media-service-operation-status-by-id-terminal-state.json
 */
async function getStatusOfAsynchronousOperationWhenItIsCompleted() {
  const subscriptionId =
    process.env["MEDIASERVICES_SUBSCRIPTION_ID"] || "00000000-0000-0000-0000-000000000000";
  const locationName = "westus";
  const operationId = "D612C429-2526-49D5-961B-885AE11406FD";
  const credential = new DefaultAzureCredential();
  const client = new AzureMediaServices(credential, subscriptionId);
  const result = await client.mediaServicesOperationStatuses.get(locationName, operationId);
  console.log(result);
}

/**
 * This sample demonstrates how to Get media service operation status.
 *
 * @summary Get media service operation status.
 * x-ms-original-file: specification/mediaservices/resource-manager/Microsoft.Media/Accounts/stable/2021-11-01/examples/media-service-operation-status-by-id-non-terminal-state.json
 */
async function getStatusOfAsynchronousOperationWhenItIsOngoing() {
  const subscriptionId =
    process.env["MEDIASERVICES_SUBSCRIPTION_ID"] || "00000000-0000-0000-0000-000000000000";
  const locationName = "westus";
  const operationId = "D612C429-2526-49D5-961B-885AE11406FD";
  const credential = new DefaultAzureCredential();
  const client = new AzureMediaServices(credential, subscriptionId);
  const result = await client.mediaServicesOperationStatuses.get(locationName, operationId);
  console.log(result);
}

async function main() {
  await getStatusOfAsynchronousOperationWhenItIsCompletedWithError();
  await getStatusOfAsynchronousOperationWhenItIsCompleted();
  await getStatusOfAsynchronousOperationWhenItIsOngoing();
}

main().catch(console.error);
