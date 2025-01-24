/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import type { CustomHttpsConfiguration } from "@azure/arm-frontdoor";
import { FrontDoorManagementClient } from "@azure/arm-frontdoor";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Enables a frontendEndpoint for HTTPS traffic
 *
 * @summary Enables a frontendEndpoint for HTTPS traffic
 * x-ms-original-file: specification/frontdoor/resource-manager/Microsoft.Network/stable/2021-06-01/examples/FrontdoorEnableHttps.json
 */
async function frontendEndpointsEnableHttps() {
  const subscriptionId = process.env["FRONTDOOR_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["FRONTDOOR_RESOURCE_GROUP"] || "rg1";
  const frontDoorName = "frontDoor1";
  const frontendEndpointName = "frontendEndpoint1";
  const customHttpsConfiguration: CustomHttpsConfiguration = {
    certificateSource: "AzureKeyVault",
    minimumTlsVersion: "1.0",
    protocolType: "ServerNameIndication",
    secretName: "secret1",
    secretVersion: "00000000-0000-0000-0000-000000000000",
    vault: {
      id: "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.KeyVault/vaults/vault1",
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new FrontDoorManagementClient(credential, subscriptionId);
  const result = await client.frontendEndpoints.beginEnableHttpsAndWait(
    resourceGroupName,
    frontDoorName,
    frontendEndpointName,
    customHttpsConfiguration,
  );
  console.log(result);
}

async function main() {
  await frontendEndpointsEnableHttps();
}

main().catch(console.error);
