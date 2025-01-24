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
 * This sample demonstrates how to Description for Gets the details of the user provided function apps registered with a static site build
 *
 * @summary Description for Gets the details of the user provided function apps registered with a static site build
 * x-ms-original-file: specification/web/resource-manager/Microsoft.Web/stable/2023-12-01/examples/GetUserProvidedFunctionAppsForStaticSiteBuild.json
 */
async function getDetailsOfTheUserProvidedFunctionAppsRegisteredWithAStaticSiteBuild() {
  const subscriptionId =
    process.env["APPSERVICE_SUBSCRIPTION_ID"] ||
    "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName = process.env["APPSERVICE_RESOURCE_GROUP"] || "rg";
  const name = "testStaticSite0";
  const environmentName = "default";
  const credential = new DefaultAzureCredential();
  const client = new WebSiteManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.staticSites.listUserProvidedFunctionAppsForStaticSiteBuild(
    resourceGroupName,
    name,
    environmentName,
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  getDetailsOfTheUserProvidedFunctionAppsRegisteredWithAStaticSiteBuild();
}

main().catch(console.error);
