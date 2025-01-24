/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import {
  HybridRunbookWorkerMoveParameters,
  AutomationClient
} from "@azure/arm-automation";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Move a hybrid worker to a different group.
 *
 * @summary Move a hybrid worker to a different group.
 * x-ms-original-file: specification/automation/resource-manager/Microsoft.Automation/stable/2021-06-22/examples/moveHybridRunbookWorker.json
 */
async function moveAV2HybridWorkerToADifferentGroup() {
  const subscriptionId = process.env["AUTOMATION_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["AUTOMATION_RESOURCE_GROUP"] || "rg";
  const automationAccountName = "testaccount";
  const hybridRunbookWorkerGroupName = "TestHybridGroup";
  const hybridRunbookWorkerId = "c010ad12-ef14-4a2a-aa9e-ef22c4745ddd";
  const hybridRunbookWorkerMoveParameters: HybridRunbookWorkerMoveParameters = {
    hybridRunbookWorkerGroupName: "TestHybridGroup2"
  };
  const credential = new DefaultAzureCredential();
  const client = new AutomationClient(credential, subscriptionId);
  const result = await client.hybridRunbookWorkers.move(
    resourceGroupName,
    automationAccountName,
    hybridRunbookWorkerGroupName,
    hybridRunbookWorkerId,
    hybridRunbookWorkerMoveParameters
  );
  console.log(result);
}

async function main() {
  moveAV2HybridWorkerToADifferentGroup();
}

main().catch(console.error);
