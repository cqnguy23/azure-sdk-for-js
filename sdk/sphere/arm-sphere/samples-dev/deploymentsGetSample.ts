/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import { AzureSphereManagementClient } from "@azure/arm-sphere";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Get a Deployment. '.default' and '.unassigned' are system defined values and cannot be used for product or device group name.
 *
 * @summary Get a Deployment. '.default' and '.unassigned' are system defined values and cannot be used for product or device group name.
 * x-ms-original-file: specification/sphere/resource-manager/Microsoft.AzureSphere/stable/2024-04-01/examples/GetDeployment.json
 */
async function deploymentsGet() {
  const subscriptionId =
    process.env["SPHERE_SUBSCRIPTION_ID"] || "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = process.env["SPHERE_RESOURCE_GROUP"] || "MyResourceGroup1";
  const catalogName = "MyCatalog1";
  const productName = "MyProduct1";
  const deviceGroupName = "myDeviceGroup1";
  const deploymentName = "MyDeployment1";
  const credential = new DefaultAzureCredential();
  const client = new AzureSphereManagementClient(credential, subscriptionId);
  const result = await client.deployments.get(
    resourceGroupName,
    catalogName,
    productName,
    deviceGroupName,
    deploymentName,
  );
  console.log(result);
}

async function main() {
  await deploymentsGet();
}

main().catch(console.error);
