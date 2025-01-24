/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import { AzureMachineLearningServicesManagementClient } from "@azure/arm-machinelearning";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Delete Inference Endpoint Deployment (asynchronous).
 *
 * @summary Delete Inference Endpoint Deployment (asynchronous).
 * x-ms-original-file: specification/machinelearningservices/resource-manager/Microsoft.MachineLearningServices/stable/2024-04-01/examples/Workspace/OnlineDeployment/delete.json
 */
async function deleteWorkspaceOnlineDeployment() {
  const subscriptionId =
    process.env["MACHINELEARNING_SUBSCRIPTION_ID"] || "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = process.env["MACHINELEARNING_RESOURCE_GROUP"] || "testrg123";
  const workspaceName = "workspace123";
  const endpointName = "testEndpoint";
  const deploymentName = "testDeployment";
  const credential = new DefaultAzureCredential();
  const client = new AzureMachineLearningServicesManagementClient(credential, subscriptionId);
  const result = await client.onlineDeployments.beginDeleteAndWait(
    resourceGroupName,
    workspaceName,
    endpointName,
    deploymentName,
  );
  console.log(result);
}

async function main() {
  await deleteWorkspaceOnlineDeployment();
}

main().catch(console.error);
