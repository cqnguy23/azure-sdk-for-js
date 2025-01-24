/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import type { DiscoverProtectableItemRequest } from "@azure/arm-recoveryservices-siterecovery";
import { SiteRecoveryManagementClient } from "@azure/arm-recoveryservices-siterecovery";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to The operation to a add a protectable item to a protection container(Add physical server).
 *
 * @summary The operation to a add a protectable item to a protection container(Add physical server).
 * x-ms-original-file: specification/recoveryservicessiterecovery/resource-manager/Microsoft.RecoveryServices/stable/2023-08-01/examples/ReplicationProtectionContainers_DiscoverProtectableItem.json
 */
async function addsAProtectableItemToTheReplicationProtectionContainer() {
  const subscriptionId =
    process.env["RECOVERYSERVICESSITERECOVERY_SUBSCRIPTION_ID"] ||
    "7c943c1b-5122-4097-90c8-861411bdd574";
  const resourceName = "MadhaviVault";
  const resourceGroupName =
    process.env["RECOVERYSERVICESSITERECOVERY_RESOURCE_GROUP"] || "MadhaviVRG";
  const fabricName = "V2A-W2K12-660";
  const protectionContainerName = "cloud_7328549c-5c37-4459-a3c2-e35f9ef6893c";
  const discoverProtectableItemRequest: DiscoverProtectableItemRequest = {
    properties: {
      friendlyName: "Test",
      ipAddress: "10.150.2.3",
      osType: "Windows",
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new SiteRecoveryManagementClient(credential, subscriptionId);
  const result = await client.replicationProtectionContainers.beginDiscoverProtectableItemAndWait(
    resourceName,
    resourceGroupName,
    fabricName,
    protectionContainerName,
    discoverProtectableItemRequest,
  );
  console.log(result);
}

async function main() {
  await addsAProtectableItemToTheReplicationProtectionContainer();
}

main().catch(console.error);
