/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import { WebSiteManagementClient } from "@azure/arm-appservice";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Description for Get metric definitions for a specific instance of a multi-role pool of an App Service Environment.
 *
 * @summary Description for Get metric definitions for a specific instance of a multi-role pool of an App Service Environment.
 * x-ms-original-file: specification/web/resource-manager/Microsoft.Web/stable/2023-12-01/examples/AppServiceEnvironments_ListMultiRolePoolInstanceMetricDefinitions.json
 */
async function getMetricDefinitionsForASpecificInstanceOfAMultiRolePoolOfAnAppServiceEnvironment() {
  const subscriptionId =
    process.env["APPSERVICE_SUBSCRIPTION_ID"] ||
    "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName =
    process.env["APPSERVICE_RESOURCE_GROUP"] || "test-rg";
  const name = "test-ase";
  const instance = "10.7.1.8";
  const credential = new DefaultAzureCredential();
  const client = new WebSiteManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.appServiceEnvironments.listMultiRolePoolInstanceMetricDefinitions(
    resourceGroupName,
    name,
    instance,
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  getMetricDefinitionsForASpecificInstanceOfAMultiRolePoolOfAnAppServiceEnvironment();
}

main().catch(console.error);
