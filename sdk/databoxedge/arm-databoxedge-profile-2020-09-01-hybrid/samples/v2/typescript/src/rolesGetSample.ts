/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import { DataBoxEdgeManagementClient } from "@azure/arm-databoxedge-profile-2020-09-01-hybrid";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Gets a specific role by name.
 *
 * @summary Gets a specific role by name.
 * x-ms-original-file: specification/databoxedge/resource-manager/Microsoft.DataBoxEdge/stable/2019-08-01/examples/RoleGet.json
 */
async function roleGet() {
  const subscriptionId =
    process.env["DATABOXEDGE_SUBSCRIPTION_ID"] ||
    "4385cf00-2d3a-425a-832f-f4285b1c9dce";
  const deviceName = "testedgedevice";
  const name = "IoTRole1";
  const resourceGroupName =
    process.env["DATABOXEDGE_RESOURCE_GROUP"] || "GroupForEdgeAutomation";
  const credential = new DefaultAzureCredential();
  const client = new DataBoxEdgeManagementClient(credential, subscriptionId);
  const result = await client.roles.get(deviceName, name, resourceGroupName);
  console.log(result);
}

async function main() {
  roleGet();
}

main().catch(console.error);
