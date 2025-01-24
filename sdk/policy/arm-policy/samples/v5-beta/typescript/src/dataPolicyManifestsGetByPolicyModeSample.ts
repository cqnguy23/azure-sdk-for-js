/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import { PolicyClient } from "@azure/arm-policy";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to This operation retrieves the data policy manifest with the given policy mode.
 *
 * @summary This operation retrieves the data policy manifest with the given policy mode.
 * x-ms-original-file: specification/resources/resource-manager/Microsoft.Authorization/stable/2020-09-01/examples/getDataPolicyManifest.json
 */
async function retrieveADataPolicyManifestByPolicyMode() {
  const subscriptionId =
    process.env["POLICY_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const policyMode = "Microsoft.KeyVault.Data";
  const credential = new DefaultAzureCredential();
  const client = new PolicyClient(credential, subscriptionId);
  const result = await client.dataPolicyManifests.getByPolicyMode(policyMode);
  console.log(result);
}

async function main() {
  retrieveADataPolicyManifestByPolicyMode();
}

main().catch(console.error);
