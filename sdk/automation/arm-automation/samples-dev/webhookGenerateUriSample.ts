/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import { AutomationClient } from "@azure/arm-automation";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Generates a Uri for use in creating a webhook.
 *
 * @summary Generates a Uri for use in creating a webhook.
 * x-ms-original-file: specification/automation/resource-manager/Microsoft.Automation/stable/2015-10-31/examples/webhookGenerateUri.json
 */
async function generateWebhookUri(): Promise<void> {
  const subscriptionId = process.env["AUTOMATION_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["AUTOMATION_RESOURCE_GROUP"] || "rg";
  const automationAccountName = "myAutomationAccount33";
  const credential = new DefaultAzureCredential();
  const client = new AutomationClient(credential, subscriptionId);
  const result = await client.webhookOperations.generateUri(
    resourceGroupName,
    automationAccountName,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await generateWebhookUri();
}

main().catch(console.error);
