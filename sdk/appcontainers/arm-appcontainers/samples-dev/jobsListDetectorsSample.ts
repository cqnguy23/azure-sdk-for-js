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
 * This sample demonstrates how to Get the list of diagnostics for a Container App Job.
 *
 * @summary Get the list of diagnostics for a Container App Job.
 * x-ms-original-file: specification/app/resource-manager/Microsoft.App/preview/2024-08-02-preview/examples/Job_ListDetectors.json
 */
async function getTheListOfAvailableDiagnosticDataForAContainerAppJob(): Promise<void> {
  const subscriptionId =
    process.env["APPCONTAINERS_SUBSCRIPTION_ID"] || "f07f3711-b45e-40fe-a941-4e6d93f851e6";
  const resourceGroupName =
    process.env["APPCONTAINERS_RESOURCE_GROUP"] || "mikono-workerapp-test-rg";
  const jobName = "mikonojob1";
  const credential = new DefaultAzureCredential();
  const client = new ContainerAppsAPIClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.jobs.listDetectors(resourceGroupName, jobName)) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main(): Promise<void> {
  await getTheListOfAvailableDiagnosticDataForAContainerAppJob();
}

main().catch(console.error);
