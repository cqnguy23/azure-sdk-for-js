/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import { AuthorizationManagementClient } from "@azure/arm-authorization-profile-2020-09-01-hybrid";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Gets provider operations metadata for all resource providers.
 *
 * @summary Gets provider operations metadata for all resource providers.
 * x-ms-original-file: specification/authorization/resource-manager/Microsoft.Authorization/stable/2015-07-01/examples/GetAllProviderOperations.json
 */
async function listProviderOperationsMetadataForAllResourceProviders() {
  const subscriptionId =
    process.env["AUTHORIZATION_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const credential = new DefaultAzureCredential();
  const client = new AuthorizationManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.providerOperationsMetadataOperations.list()) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  listProviderOperationsMetadataForAllResourceProviders();
}

main().catch(console.error);
