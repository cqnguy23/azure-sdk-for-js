/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import type { CustomAssessmentAutomationRequest } from "@azure/arm-security";
import { SecurityCenter } from "@azure/arm-security";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Creates or updates a custom assessment automation for the provided subscription. Please note that providing an existing custom assessment automation will replace the existing record.
 *
 * @summary Creates or updates a custom assessment automation for the provided subscription. Please note that providing an existing custom assessment automation will replace the existing record.
 * x-ms-original-file: specification/security/resource-manager/Microsoft.Security/preview/2021-07-01-preview/examples/CustomAssessmentAutomations/customAssessmentAutomationCreate_example.json
 */
async function createACustomAssessmentAutomation() {
  const subscriptionId =
    process.env["SECURITY_SUBSCRIPTION_ID"] || "e5d1b86c-3051-44d5-8802-aa65d45a279b";
  const resourceGroupName = process.env["SECURITY_RESOURCE_GROUP"] || "TestResourceGroup";
  const customAssessmentAutomationName = "MyCustomAssessmentAutomation";
  const customAssessmentAutomationBody: CustomAssessmentAutomationRequest = {
    description: "Data should be encrypted",
    compressedQuery:
      "DQAKAEkAYQBtAF8ARwByAG8AdQBwAA0ACgB8ACAAZQB4AHQAZQBuAGQAIABIAGUAYQBsAHQAaABTAHQAYQB0AHUAcwAgAD0AIABpAGYAZgAoAHQAbwBzAHQAcgBpAG4AZwAoAFIAZQBjAG8AcgBkAC4AVQBzAGUAcgBOAGEAbQBlACkAIABjAG8AbgB0AGEAaQBuAHMAIAAnAHUAcwBlAHIAJwAsACAAJwBVAE4ASABFAEEATABUAEgAWQAnACwAIAAnAEgARQBBAEwAVABIAFkAJwApAA0ACgA=",
    displayName: "Password Policy",
    remediationDescription: "Encrypt store by...",
    severity: "Medium",
    supportedCloud: "AWS",
  };
  const credential = new DefaultAzureCredential();
  const client = new SecurityCenter(credential, subscriptionId);
  const result = await client.customAssessmentAutomations.create(
    resourceGroupName,
    customAssessmentAutomationName,
    customAssessmentAutomationBody,
  );
  console.log(result);
}

async function main() {
  await createACustomAssessmentAutomation();
}

main().catch(console.error);
