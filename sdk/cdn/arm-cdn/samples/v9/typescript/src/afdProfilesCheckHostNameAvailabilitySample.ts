/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import {
  CheckHostNameAvailabilityInput,
  CdnManagementClient,
} from "@azure/arm-cdn";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Validates the custom domain mapping to ensure it maps to the correct Azure Front Door endpoint in DNS.
 *
 * @summary Validates the custom domain mapping to ensure it maps to the correct Azure Front Door endpoint in DNS.
 * x-ms-original-file: specification/cdn/resource-manager/Microsoft.Cdn/stable/2024-02-01/examples/AFDProfiles_CheckHostNameAvailability.json
 */
async function afdProfilesCheckHostNameAvailability() {
  const subscriptionId = process.env["CDN_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["CDN_RESOURCE_GROUP"] || "RG";
  const profileName = "profile1";
  const checkHostNameAvailabilityInput: CheckHostNameAvailabilityInput = {
    hostName: "www.someDomain.net",
  };
  const credential = new DefaultAzureCredential();
  const client = new CdnManagementClient(credential, subscriptionId);
  const result = await client.afdProfiles.checkHostNameAvailability(
    resourceGroupName,
    profileName,
    checkHostNameAvailabilityInput,
  );
  console.log(result);
}

async function main() {
  afdProfilesCheckHostNameAvailability();
}

main().catch(console.error);
