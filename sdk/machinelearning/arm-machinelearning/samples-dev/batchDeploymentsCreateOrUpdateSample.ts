/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import type { BatchDeployment } from "@azure/arm-machinelearning";
import { AzureMachineLearningServicesManagementClient } from "@azure/arm-machinelearning";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Creates/updates a batch inference deployment (asynchronous).
 *
 * @summary Creates/updates a batch inference deployment (asynchronous).
 * x-ms-original-file: specification/machinelearningservices/resource-manager/Microsoft.MachineLearningServices/stable/2024-04-01/examples/Workspace/BatchDeployment/createOrUpdate.json
 */
async function createOrUpdateWorkspaceBatchDeployment() {
  const subscriptionId =
    process.env["MACHINELEARNING_SUBSCRIPTION_ID"] || "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = process.env["MACHINELEARNING_RESOURCE_GROUP"] || "test-rg";
  const workspaceName = "my-aml-workspace";
  const endpointName = "testEndpointName";
  const deploymentName = "testDeploymentName";
  const body: BatchDeployment = {
    identity: {
      type: "SystemAssigned",
      userAssignedIdentities: { string: {} },
    },
    kind: "string",
    location: "string",
    properties: {
      description: "string",
      codeConfiguration: { codeId: "string", scoringScript: "string" },
      compute: "string",
      environmentId: "string",
      environmentVariables: { string: "string" },
      errorThreshold: 1,
      loggingLevel: "Info",
      maxConcurrencyPerInstance: 1,
      miniBatchSize: 1,
      model: { assetId: "string", referenceType: "Id" },
      outputAction: "SummaryOnly",
      outputFileName: "string",
      properties: { string: "string" },
      resources: {
        instanceCount: 1,
        instanceType: "string",
        properties: {
          string: { "cd3c37dc-2876-4ca4-8a54-21bd7619724a": null },
        },
      },
      retrySettings: { maxRetries: 1, timeout: "PT5M" },
    },
    sku: {
      name: "string",
      capacity: 1,
      family: "string",
      size: "string",
      tier: "Free",
    },
    tags: {},
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureMachineLearningServicesManagementClient(credential, subscriptionId);
  const result = await client.batchDeployments.beginCreateOrUpdateAndWait(
    resourceGroupName,
    workspaceName,
    endpointName,
    deploymentName,
    body,
  );
  console.log(result);
}

async function main() {
  await createOrUpdateWorkspaceBatchDeployment();
}

main().catch(console.error);
