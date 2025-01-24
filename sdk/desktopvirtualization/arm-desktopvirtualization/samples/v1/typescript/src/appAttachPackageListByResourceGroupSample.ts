/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import {
  AppAttachPackageListByResourceGroupOptionalParams,
  DesktopVirtualizationAPIClient,
} from "@azure/arm-desktopvirtualization";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to List App Attach packages in resource group.
 *
 * @summary List App Attach packages in resource group.
 * x-ms-original-file: specification/desktopvirtualization/resource-manager/Microsoft.DesktopVirtualization/stable/2024-04-03/examples/AppAttachPackage_ListByResourceGroup.json
 */
async function appAttachPackageListByResourceGroup() {
  const subscriptionId =
    process.env["DESKTOPVIRTUALIZATION_SUBSCRIPTION_ID"] ||
    "daefabc0-95b4-48b3-b645-8a753a63c4fa";
  const resourceGroupName =
    process.env["DESKTOPVIRTUALIZATION_RESOURCE_GROUP"] || "resourceGroup1";
  const filter = "HostPoolName eq 'hostpool1'";
  const options: AppAttachPackageListByResourceGroupOptionalParams = { filter };
  const credential = new DefaultAzureCredential();
  const client = new DesktopVirtualizationAPIClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.appAttachPackageOperations.listByResourceGroup(
    resourceGroupName,
    options,
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  appAttachPackageListByResourceGroup();
}

main().catch(console.error);
