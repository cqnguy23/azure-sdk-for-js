/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import {
  DatadogApiKey,
  MonitorsSetDefaultKeyOptionalParams,
  MicrosoftDatadogClient
} from "@azure/arm-datadog";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Set the default api key.
 *
 * @summary Set the default api key.
 * x-ms-original-file: specification/datadog/resource-manager/Microsoft.Datadog/stable/2023-01-01/examples/ApiKeys_SetDefaultKey.json
 */
async function monitorsSetDefaultKey() {
  const subscriptionId =
    process.env["DATADOG_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName =
    process.env["DATADOG_RESOURCE_GROUP"] || "myResourceGroup";
  const monitorName = "myMonitor";
  const body: DatadogApiKey = { key: "1111111111111111aaaaaaaaaaaaaaaa" };
  const options: MonitorsSetDefaultKeyOptionalParams = { body };
  const credential = new DefaultAzureCredential();
  const client = new MicrosoftDatadogClient(credential, subscriptionId);
  const result = await client.monitors.setDefaultKey(
    resourceGroupName,
    monitorName,
    options
  );
  console.log(result);
}

async function main() {
  monitorsSetDefaultKey();
}

main().catch(console.error);
