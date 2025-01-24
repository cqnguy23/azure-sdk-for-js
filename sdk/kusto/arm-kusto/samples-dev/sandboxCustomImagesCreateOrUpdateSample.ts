/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import type { SandboxCustomImage } from "@azure/arm-kusto";
import { KustoManagementClient } from "@azure/arm-kusto";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Creates or updates a sandbox custom image.
 *
 * @summary Creates or updates a sandbox custom image.
 * x-ms-original-file: specification/azure-kusto/resource-manager/Microsoft.Kusto/stable/2023-08-15/examples/KustoSandboxCustomImagesCreateOrUpdate.json
 */
async function kustoSandboxCustomImagesCreateOrUpdate() {
  const subscriptionId =
    process.env["KUSTO_SUBSCRIPTION_ID"] || "12345678-1234-1234-1234-123456789098";
  const resourceGroupName = process.env["KUSTO_RESOURCE_GROUP"] || "kustorptest";
  const clusterName = "kustoCluster";
  const sandboxCustomImageName = "customImage8";
  const parameters: SandboxCustomImage = {
    languageVersion: "3.10.8",
    requirementsFileContent: "Requests",
    language: "Python",
  };
  const credential = new DefaultAzureCredential();
  const client = new KustoManagementClient(credential, subscriptionId);
  const result = await client.sandboxCustomImages.beginCreateOrUpdateAndWait(
    resourceGroupName,
    clusterName,
    sandboxCustomImageName,
    parameters,
  );
  console.log(result);
}

async function main() {
  await kustoSandboxCustomImagesCreateOrUpdate();
}

main().catch(console.error);
