/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import type { VariableUpdateParameters } from "@azure/arm-automation";
import { AutomationClient } from "@azure/arm-automation";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Update a variable.
 *
 * @summary Update a variable.
 * x-ms-original-file: specification/automation/resource-manager/Microsoft.Automation/preview/2020-01-13-preview/examples/updateVariable_patch.json
 */
async function updateAVariable(): Promise<void> {
  const subscriptionId = process.env["AUTOMATION_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["AUTOMATION_RESOURCE_GROUP"] || "rg";
  const automationAccountName = "sampleAccount9";
  const variableName = "sampleVariable";
  const parameters: VariableUpdateParameters = {
    name: "sampleVariable",
    value: '"ComputerName3.domain.com"',
  };
  const credential = new DefaultAzureCredential();
  const client = new AutomationClient(credential, subscriptionId);
  const result = await client.variableOperations.update(
    resourceGroupName,
    automationAccountName,
    variableName,
    parameters,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await updateAVariable();
}

main().catch(console.error);
