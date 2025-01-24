/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import {
  ApplicationPatch,
  ApplicationsUpdateOptionalParams,
  DesktopVirtualizationAPIClient,
} from "@azure/arm-desktopvirtualization";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Update an application.
 *
 * @summary Update an application.
 * x-ms-original-file: specification/desktopvirtualization/resource-manager/Microsoft.DesktopVirtualization/stable/2024-04-03/examples/Application_Update.json
 */
async function applicationUpdate() {
  const subscriptionId =
    process.env["DESKTOPVIRTUALIZATION_SUBSCRIPTION_ID"] ||
    "daefabc0-95b4-48b3-b645-8a753a63c4fa";
  const resourceGroupName =
    process.env["DESKTOPVIRTUALIZATION_RESOURCE_GROUP"] || "resourceGroup1";
  const applicationGroupName = "applicationGroup1";
  const applicationName = "application1";
  const application: ApplicationPatch = {
    description: "des1",
    applicationType: "InBuilt",
    commandLineArguments: "arguments",
    commandLineSetting: "Allow",
    filePath: "path",
    friendlyName: "friendly",
    iconIndex: 1,
    iconPath: "icon",
    msixPackageApplicationId: undefined,
    msixPackageFamilyName: undefined,
    showInPortal: true,
  };
  const options: ApplicationsUpdateOptionalParams = { application };
  const credential = new DefaultAzureCredential();
  const client = new DesktopVirtualizationAPIClient(credential, subscriptionId);
  const result = await client.applications.update(
    resourceGroupName,
    applicationGroupName,
    applicationName,
    options,
  );
  console.log(result);
}

async function main() {
  applicationUpdate();
}

main().catch(console.error);
