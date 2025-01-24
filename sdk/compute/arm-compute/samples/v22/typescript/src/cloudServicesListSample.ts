/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import { ComputeManagementClient } from "@azure/arm-compute";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Gets a list of all cloud services under a resource group. Use nextLink property in the response to get the next page of Cloud Services. Do this till nextLink is null to fetch all the Cloud Services.
 *
 * @summary Gets a list of all cloud services under a resource group. Use nextLink property in the response to get the next page of Cloud Services. Do this till nextLink is null to fetch all the Cloud Services.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/CloudserviceRP/stable/2024-11-04/examples/CloudService_List_ByResourceGroup.json
 */
async function listCloudServicesInAResourceGroup(): Promise<void> {
  const subscriptionId =
    process.env["COMPUTE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName =
    process.env["COMPUTE_RESOURCE_GROUP"] || "ConstosoRG";
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.cloudServices.list(resourceGroupName)) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main(): Promise<void> {
  listCloudServicesInAResourceGroup();
}

main().catch(console.error);
