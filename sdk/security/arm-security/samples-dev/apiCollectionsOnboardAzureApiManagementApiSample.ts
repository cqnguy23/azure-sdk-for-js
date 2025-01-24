/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import { SecurityCenter } from "@azure/arm-security";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Onboard an Azure API Management API to Microsoft Defender for APIs. The system will start monitoring the operations within the Azure Management API for intrusive behaviors and provide alerts for attacks that have been detected.
 *
 * @summary Onboard an Azure API Management API to Microsoft Defender for APIs. The system will start monitoring the operations within the Azure Management API for intrusive behaviors and provide alerts for attacks that have been detected.
 * x-ms-original-file: specification/security/resource-manager/Microsoft.Security/stable/2023-11-15/examples/ApiCollections/APICollections_OnboardAzureApiManagementApi_example.json
 */
async function onboardAnAzureApiManagementApiToMicrosoftDefenderForApIs() {
  const subscriptionId =
    process.env["SECURITY_SUBSCRIPTION_ID"] || "3fa85f64-5717-4562-b3fc-2c963f66afa6";
  const resourceGroupName = process.env["SECURITY_RESOURCE_GROUP"] || "rg1";
  const serviceName = "apimService1";
  const apiId = "echo-api";
  const credential = new DefaultAzureCredential();
  const client = new SecurityCenter(credential, subscriptionId);
  const result = await client.aPICollections.beginOnboardAzureApiManagementApiAndWait(
    resourceGroupName,
    serviceName,
    apiId,
  );
  console.log(result);
}

async function main() {
  await onboardAnAzureApiManagementApiToMicrosoftDefenderForApIs();
}

main().catch(console.error);
