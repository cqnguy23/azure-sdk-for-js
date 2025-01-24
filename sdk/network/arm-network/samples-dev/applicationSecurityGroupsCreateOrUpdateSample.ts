/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import type { ApplicationSecurityGroup } from "@azure/arm-network";
import { NetworkManagementClient } from "@azure/arm-network";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Creates or updates an application security group.
 *
 * @summary Creates or updates an application security group.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2024-05-01/examples/ApplicationSecurityGroupCreate.json
 */
async function createApplicationSecurityGroup() {
  const subscriptionId = process.env["NETWORK_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["NETWORK_RESOURCE_GROUP"] || "rg1";
  const applicationSecurityGroupName = "test-asg";
  const parameters: ApplicationSecurityGroup = { location: "westus" };
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.applicationSecurityGroups.beginCreateOrUpdateAndWait(
    resourceGroupName,
    applicationSecurityGroupName,
    parameters,
  );
  console.log(result);
}

async function main() {
  await createApplicationSecurityGroup();
}

main().catch(console.error);
