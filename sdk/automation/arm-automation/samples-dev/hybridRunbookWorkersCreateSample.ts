/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import type { HybridRunbookWorkerCreateParameters } from "@azure/arm-automation";
import { AutomationClient } from "@azure/arm-automation";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Create a hybrid runbook worker.
 *
 * @summary Create a hybrid runbook worker.
 * x-ms-original-file: specification/automation/resource-manager/Microsoft.Automation/stable/2021-06-22/examples/putHybridRunbookWorker.json
 */
async function createAV2HybridRunbookWorker(): Promise<void> {
  const subscriptionId = process.env["AUTOMATION_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["AUTOMATION_RESOURCE_GROUP"] || "rg";
  const automationAccountName = "testaccount";
  const hybridRunbookWorkerGroupName = "TestHybridGroup";
  const hybridRunbookWorkerId = "c010ad12-ef14-4a2a-aa9e-ef22c4745ddd";
  const hybridRunbookWorkerCreationParameters: HybridRunbookWorkerCreateParameters = {
    vmResourceId:
      "/subscriptions/vmsubid/resourceGroups/vmrg/providers/Microsoft.Compute/virtualMachines/vmname",
  };
  const credential = new DefaultAzureCredential();
  const client = new AutomationClient(credential, subscriptionId);
  const result = await client.hybridRunbookWorkers.create(
    resourceGroupName,
    automationAccountName,
    hybridRunbookWorkerGroupName,
    hybridRunbookWorkerId,
    hybridRunbookWorkerCreationParameters,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await createAV2HybridRunbookWorker();
}

main().catch(console.error);
