/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import { SynapseManagementClient } from "@azure/arm-synapse";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Get list of SQL pool geo backup policies
 *
 * @summary Get list of SQL pool geo backup policies
 * x-ms-original-file: specification/synapse/resource-manager/Microsoft.Synapse/stable/2021-06-01/examples/SqlPoolGeoBackupPolicies_List.json
 */
async function getSqlPoolGeoBackupPolicy() {
  const subscriptionId =
    process.env["SYNAPSE_SUBSCRIPTION_ID"] || "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = process.env["SYNAPSE_RESOURCE_GROUP"] || "sqlcrudtest-4799";
  const workspaceName = "sqlcrudtest-5961";
  const sqlPoolName = "testdw";
  const credential = new DefaultAzureCredential();
  const client = new SynapseManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.sqlPoolGeoBackupPolicies.list(
    resourceGroupName,
    workspaceName,
    sqlPoolName,
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  await getSqlPoolGeoBackupPolicy();
}

main().catch(console.error);
