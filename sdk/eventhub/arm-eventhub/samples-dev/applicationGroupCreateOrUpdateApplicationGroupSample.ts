/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import type { ApplicationGroup } from "@azure/arm-eventhub";
import { EventHubManagementClient } from "@azure/arm-eventhub";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Creates or updates an ApplicationGroup for a Namespace.
 *
 * @summary Creates or updates an ApplicationGroup for a Namespace.
 * x-ms-original-file: specification/eventhub/resource-manager/Microsoft.EventHub/stable/2024-01-01/examples/ApplicationGroup/ApplicationGroupCreate.json
 */
async function applicationGroupCreate() {
  const subscriptionId =
    process.env["EVENTHUB_SUBSCRIPTION_ID"] || "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = process.env["EVENTHUB_RESOURCE_GROUP"] || "contosotest";
  const namespaceName = "contoso-ua-test-eh-system-1";
  const applicationGroupName = "appGroup1";
  const parameters: ApplicationGroup = {
    clientAppGroupIdentifier: "SASKeyName=KeyName",
    isEnabled: true,
    policies: [
      {
        name: "ThrottlingPolicy1",
        type: "ThrottlingPolicy",
        metricId: "IncomingMessages",
        rateLimitThreshold: 7912,
      },
      {
        name: "ThrottlingPolicy2",
        type: "ThrottlingPolicy",
        metricId: "IncomingBytes",
        rateLimitThreshold: 3951729,
      },
      {
        name: "ThrottlingPolicy3",
        type: "ThrottlingPolicy",
        metricId: "OutgoingBytes",
        rateLimitThreshold: 245175,
      },
    ],
  };
  const credential = new DefaultAzureCredential();
  const client = new EventHubManagementClient(credential, subscriptionId);
  const result = await client.applicationGroupOperations.createOrUpdateApplicationGroup(
    resourceGroupName,
    namespaceName,
    applicationGroupName,
    parameters,
  );
  console.log(result);
}

async function main() {
  await applicationGroupCreate();
}

main().catch(console.error);
