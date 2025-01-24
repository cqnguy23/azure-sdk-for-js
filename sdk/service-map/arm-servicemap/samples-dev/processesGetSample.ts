/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import type { ProcessesGetOptionalParams } from "@azure/arm-servicemap";
import { ServiceMap } from "@azure/arm-servicemap";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Returns the specified process.
 *
 * @summary Returns the specified process.
 * x-ms-original-file: specification/service-map/resource-manager/Microsoft.OperationalInsights/preview/2015-11-01-preview/examples/Machines/Processes/SMMachinesProcessesGetGet.json
 */
async function smMachinesProcessesGet() {
  const subscriptionId =
    process.env["SERVICE-MAP_SUBSCRIPTION_ID"] || "63BE4E24-FDF0-4E9C-9342-6A5D5A359722";
  const resourceGroupName = process.env["SERVICE-MAP_RESOURCE_GROUP"] || "rg-sm";
  const workspaceName = "D6F79F14-E563-469B-84B5-9286D2803B2F";
  const machineName = "m-36b83664-0822-4fb3-99a3-8332754f3eae";
  const processName = "p-bbf99526b8fc5e7ee4f75568958a040d08489160";
  const timestamp = new Date("2018-01-10T22:45:45.1930000Z");
  const options: ProcessesGetOptionalParams = { timestamp };
  const credential = new DefaultAzureCredential();
  const client = new ServiceMap(credential, subscriptionId);
  const result = await client.processes.get(
    resourceGroupName,
    workspaceName,
    machineName,
    processName,
    options,
  );
  console.log(result);
}

async function main() {
  await smMachinesProcessesGet();
}

main().catch(console.error);
