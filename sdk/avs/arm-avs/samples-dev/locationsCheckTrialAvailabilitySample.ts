/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import type { Sku, LocationsCheckTrialAvailabilityOptionalParams } from "@azure/arm-avs";
import { AzureVMwareSolutionAPI } from "@azure/arm-avs";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Return trial status for subscription by region
 *
 * @summary Return trial status for subscription by region
 * x-ms-original-file: specification/vmware/resource-manager/Microsoft.AVS/stable/2023-09-01/examples/Locations_CheckTrialAvailability.json
 */
async function locationsCheckTrialAvailability(): Promise<void> {
  const subscriptionId =
    process.env["AVS_SUBSCRIPTION_ID"] || "00000000-0000-0000-0000-000000000000";
  const location = "eastus";
  const credential = new DefaultAzureCredential();
  const client = new AzureVMwareSolutionAPI(credential, subscriptionId);
  const result = await client.locations.checkTrialAvailability(location);
  console.log(result);
}

/**
 * This sample demonstrates how to Return trial status for subscription by region
 *
 * @summary Return trial status for subscription by region
 * x-ms-original-file: specification/vmware/resource-manager/Microsoft.AVS/stable/2023-09-01/examples/Locations_CheckTrialAvailabilityWithSku.json
 */
async function locationsCheckTrialAvailabilityWithSku(): Promise<void> {
  const subscriptionId =
    process.env["AVS_SUBSCRIPTION_ID"] || "00000000-0000-0000-0000-000000000000";
  const location = "eastus";
  const sku: Sku = { name: "avs52t" };
  const options: LocationsCheckTrialAvailabilityOptionalParams = { sku };
  const credential = new DefaultAzureCredential();
  const client = new AzureVMwareSolutionAPI(credential, subscriptionId);
  const result = await client.locations.checkTrialAvailability(location, options);
  console.log(result);
}

async function main(): Promise<void> {
  await locationsCheckTrialAvailability();
  await locationsCheckTrialAvailabilityWithSku();
}

main().catch(console.error);
