/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import type { LoggerContract } from "@azure/arm-apimanagement";
import { ApiManagementClient } from "@azure/arm-apimanagement";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Creates or Updates a logger.
 *
 * @summary Creates or Updates a logger.
 * x-ms-original-file: specification/apimanagement/resource-manager/Microsoft.ApiManagement/stable/2022-08-01/examples/ApiManagementCreateAILogger.json
 */
async function apiManagementCreateAiLogger(): Promise<void> {
  const subscriptionId = process.env["APIMANAGEMENT_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["APIMANAGEMENT_RESOURCE_GROUP"] || "rg1";
  const serviceName = "apimService1";
  const loggerId = "loggerId";
  const parameters: LoggerContract = {
    description: "adding a new logger",
    credentials: { instrumentationKey: "11................a1" },
    loggerType: "applicationInsights",
  };
  const credential = new DefaultAzureCredential();
  const client = new ApiManagementClient(credential, subscriptionId);
  const result = await client.logger.createOrUpdate(
    resourceGroupName,
    serviceName,
    loggerId,
    parameters,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or Updates a logger.
 *
 * @summary Creates or Updates a logger.
 * x-ms-original-file: specification/apimanagement/resource-manager/Microsoft.ApiManagement/stable/2022-08-01/examples/ApiManagementCreateEHLogger.json
 */
async function apiManagementCreateEhLogger(): Promise<void> {
  const subscriptionId = process.env["APIMANAGEMENT_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["APIMANAGEMENT_RESOURCE_GROUP"] || "rg1";
  const serviceName = "apimService1";
  const loggerId = "eh1";
  const parameters: LoggerContract = {
    description: "adding a new logger",
    credentials: {
      name: "hydraeventhub",
      connectionString:
        "Endpoint=sb://hydraeventhub-ns.servicebus.windows.net/;SharedAccessKeyName=RootManageSharedAccessKey;SharedAccessKey=********=",
    },
    loggerType: "azureEventHub",
  };
  const credential = new DefaultAzureCredential();
  const client = new ApiManagementClient(credential, subscriptionId);
  const result = await client.logger.createOrUpdate(
    resourceGroupName,
    serviceName,
    loggerId,
    parameters,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await apiManagementCreateAiLogger();
  await apiManagementCreateEhLogger();
}

main().catch(console.error);
