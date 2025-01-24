/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import type {
  ScaleStreamingJobParameters,
  StreamingJobsScaleOptionalParams,
} from "@azure/arm-streamanalytics";
import { StreamAnalyticsManagementClient } from "@azure/arm-streamanalytics";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Scales a streaming job when the job is running.
 *
 * @summary Scales a streaming job when the job is running.
 * x-ms-original-file: specification/streamanalytics/resource-manager/Microsoft.StreamAnalytics/preview/2021-10-01-preview/examples/StreamingJob_Scale.json
 */
async function scaleAStreamingJob() {
  const subscriptionId =
    process.env["STREAMANALYTICS_SUBSCRIPTION_ID"] || "56b5e0a9-b645-407d-99b0-c64f86013e3d";
  const resourceGroupName = process.env["STREAMANALYTICS_RESOURCE_GROUP"] || "sjrg";
  const jobName = "sjName";
  const scaleJobParameters: ScaleStreamingJobParameters = {
    streamingUnits: 36,
  };
  const options: StreamingJobsScaleOptionalParams = { scaleJobParameters };
  const credential = new DefaultAzureCredential();
  const client = new StreamAnalyticsManagementClient(credential, subscriptionId);
  const result = await client.streamingJobs.beginScaleAndWait(resourceGroupName, jobName, options);
  console.log(result);
}

async function main() {
  await scaleAStreamingJob();
}

main().catch(console.error);
