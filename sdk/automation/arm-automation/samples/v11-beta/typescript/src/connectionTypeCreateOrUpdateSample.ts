/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import {
  ConnectionTypeCreateOrUpdateParameters,
  AutomationClient
} from "@azure/arm-automation";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Create a connection type.
 *
 * @summary Create a connection type.
 * x-ms-original-file: specification/automation/resource-manager/Microsoft.Automation/preview/2020-01-13-preview/examples/createOrUpdateConnectionType.json
 */
async function createOrUpdateConnectionType() {
  const subscriptionId = process.env["AUTOMATION_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["AUTOMATION_RESOURCE_GROUP"] || "rg";
  const automationAccountName = "myAutomationAccount22";
  const connectionTypeName = "myCT";
  const parameters: ConnectionTypeCreateOrUpdateParameters = {
    name: "myCT",
    fieldDefinitions: {
      myBoolField: { type: "bool", isEncrypted: false, isOptional: false },
      myStringField: { type: "string", isEncrypted: false, isOptional: false },
      myStringFieldEncrypted: {
        type: "string",
        isEncrypted: true,
        isOptional: false
      }
    },
    isGlobal: false
  };
  const credential = new DefaultAzureCredential();
  const client = new AutomationClient(credential, subscriptionId);
  const result = await client.connectionTypeOperations.createOrUpdate(
    resourceGroupName,
    automationAccountName,
    connectionTypeName,
    parameters
  );
  console.log(result);
}

async function main() {
  createOrUpdateConnectionType();
}

main().catch(console.error);
