/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import type { CalculateModelCapacityOptionalParams } from "@azure/arm-cognitiveservices";
import { CognitiveServicesManagementClient } from "@azure/arm-cognitiveservices";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Model capacity calculator.
 *
 * @summary Model capacity calculator.
 * x-ms-original-file: specification/cognitiveservices/resource-manager/Microsoft.CognitiveServices/stable/2024-10-01/examples/CalculateModelCapacity.json
 */
async function calculateModelCapacity(): Promise<void> {
  const subscriptionId =
    process.env["COGNITIVESERVICES_SUBSCRIPTION_ID"] || "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx";
  const model = { name: "gpt-4", format: "OpenAI", version: "0613" };
  const skuName = "ProvisionedManaged";
  const workloads = [
    {
      requestParameters: { avgGeneratedTokens: 50, avgPromptTokens: 30 },
      requestPerMinute: 10,
    },
    {
      requestParameters: { avgGeneratedTokens: 20, avgPromptTokens: 60 },
      requestPerMinute: 20,
    },
  ];
  const options: CalculateModelCapacityOptionalParams = {
    model,
    skuName,
    workloads,
  };
  const credential = new DefaultAzureCredential();
  const client = new CognitiveServicesManagementClient(credential, subscriptionId);
  const result = await client.calculateModelCapacity(options);
  console.log(result);
}

async function main(): Promise<void> {
  await calculateModelCapacity();
}

main().catch(console.error);
