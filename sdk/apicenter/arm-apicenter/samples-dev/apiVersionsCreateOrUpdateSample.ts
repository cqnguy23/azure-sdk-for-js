/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import type { ApiVersion } from "@azure/arm-apicenter";
import { AzureAPICenter } from "@azure/arm-apicenter";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Creates new or updates existing API version.
 *
 * @summary Creates new or updates existing API version.
 * x-ms-original-file: specification/apicenter/resource-manager/Microsoft.ApiCenter/stable/2024-03-01/examples/ApiVersions_CreateOrUpdate.json
 */
async function apiVersionsCreateOrUpdate(): Promise<void> {
  const subscriptionId =
    process.env["APICENTER_SUBSCRIPTION_ID"] || "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = process.env["APICENTER_RESOURCE_GROUP"] || "contoso-resources";
  const serviceName = "contoso";
  const workspaceName = "default";
  const apiName = "echo-api";
  const versionName = "2023-01-01";
  const payload: ApiVersion = {
    properties: { lifecycleStage: "production", title: "2023-01-01" },
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureAPICenter(credential, subscriptionId);
  const result = await client.apiVersions.createOrUpdate(
    resourceGroupName,
    serviceName,
    workspaceName,
    apiName,
    versionName,
    payload,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await apiVersionsCreateOrUpdate();
}

main().catch(console.error);
