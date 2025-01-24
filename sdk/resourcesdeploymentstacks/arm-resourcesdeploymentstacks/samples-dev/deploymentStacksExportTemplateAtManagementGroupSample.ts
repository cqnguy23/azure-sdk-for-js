/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import { DeploymentStacksClient } from "@azure/arm-resourcesdeploymentstacks";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Exports the template used to create the Deployment stack at Management Group scope.
 *
 * @summary Exports the template used to create the Deployment stack at Management Group scope.
 * x-ms-original-file: specification/resources/resource-manager/Microsoft.Resources/stable/2024-03-01/examples/DeploymentStackManagementGroupExportTemplate.json
 */
async function deploymentStacksManagementGroupExportTemplate() {
  const managementGroupId = "myMg";
  const deploymentStackName = "simpleDeploymentStack";
  const credential = new DefaultAzureCredential();
  const client = new DeploymentStacksClient(credential);
  const result = await client.deploymentStacks.exportTemplateAtManagementGroup(
    managementGroupId,
    deploymentStackName,
  );
  console.log(result);
}

async function main() {
  await deploymentStacksManagementGroupExportTemplate();
}

main().catch(console.error);
