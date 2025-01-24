/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import { AppPlatformManagementClient } from "@azure/arm-appplatform";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to List supported APM types for a Service.
 *
 * @summary List supported APM types for a Service.
 * x-ms-original-file: specification/appplatform/resource-manager/Microsoft.AppPlatform/stable/2023-12-01/examples/Services_ListSupportedApmTypes.json
 */
async function servicesListSupportedApmTypes() {
  const subscriptionId =
    process.env["APPPLATFORM_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName =
    process.env["APPPLATFORM_RESOURCE_GROUP"] || "myResourceGroup";
  const serviceName = "myservice";
  const credential = new DefaultAzureCredential();
  const client = new AppPlatformManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.services.listSupportedApmTypes(
    resourceGroupName,
    serviceName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  servicesListSupportedApmTypes();
}

main().catch(console.error);
