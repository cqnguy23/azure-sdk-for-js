/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import type { ServerConfigurationOption } from "@azure/arm-sql";
import { SqlManagementClient } from "@azure/arm-sql";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Updates managed instance server configuration option.
 *
 * @summary Updates managed instance server configuration option.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2022-08-01-preview/examples/ServerConfigurationOptionUpdate.json
 */
async function updatesManagedInstanceServerConfigurationOption() {
  const subscriptionId =
    process.env["SQL_SUBSCRIPTION_ID"] || "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = process.env["SQL_RESOURCE_GROUP"] || "testrg";
  const managedInstanceName = "testinstance";
  const serverConfigurationOptionName = "allowPolybaseExport";
  const parameters: ServerConfigurationOption = {
    serverConfigurationOptionValue: 1,
  };
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const result = await client.serverConfigurationOptions.beginCreateOrUpdateAndWait(
    resourceGroupName,
    managedInstanceName,
    serverConfigurationOptionName,
    parameters,
  );
  console.log(result);
}

async function main() {
  await updatesManagedInstanceServerConfigurationOption();
}

main().catch(console.error);
