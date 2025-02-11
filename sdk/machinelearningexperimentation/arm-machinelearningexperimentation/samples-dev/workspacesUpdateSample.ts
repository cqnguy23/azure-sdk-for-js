/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import type { WorkspaceUpdateParameters } from "@azure/arm-machinelearningexperimentation";
import { MLTeamAccountManagementClient } from "@azure/arm-machinelearningexperimentation";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Updates a machine learning workspace with the specified parameters.
 *
 * @summary Updates a machine learning workspace with the specified parameters.
 * x-ms-original-file: specification/machinelearningexperimentation/resource-manager/Microsoft.MachineLearningExperimentation/preview/2017-05-01-preview/examples/WorkspaceUpdate.json
 */
async function workspaceUpdate(): Promise<void> {
  const subscriptionId =
    process.env["MACHINELEARNINGEXPERIMENTATION_SUBSCRIPTION_ID"] ||
    "00000000-1111-2222-3333-444444444444";
  const resourceGroupName =
    process.env["MACHINELEARNINGEXPERIMENTATION_RESOURCE_GROUP"] || "accountcrud-1234";
  const accountName = "accountcrud5678";
  const workspaceName = "testworkspace";
  const parameters: WorkspaceUpdateParameters = { friendlyName: "testNameNew" };
  const credential = new DefaultAzureCredential();
  const client = new MLTeamAccountManagementClient(credential, subscriptionId);
  const result = await client.workspaces.update(
    resourceGroupName,
    accountName,
    workspaceName,
    parameters,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await workspaceUpdate();
}

main().catch(console.error);
