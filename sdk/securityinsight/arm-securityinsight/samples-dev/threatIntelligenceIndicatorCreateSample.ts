/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import type { ThreatIntelligenceIndicatorModel } from "@azure/arm-securityinsight";
import { SecurityInsights } from "@azure/arm-securityinsight";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Update a threat Intelligence indicator.
 *
 * @summary Update a threat Intelligence indicator.
 * x-ms-original-file: specification/securityinsights/resource-manager/Microsoft.SecurityInsights/preview/2022-09-01-preview/examples/threatintelligence/UpdateThreatIntelligence.json
 */
async function updateAThreatIntelligenceIndicator() {
  const subscriptionId =
    process.env["SECURITYINSIGHT_SUBSCRIPTION_ID"] || "bd794837-4d29-4647-9105-6339bfdb4e6a";
  const resourceGroupName = process.env["SECURITYINSIGHT_RESOURCE_GROUP"] || "myRg";
  const workspaceName = "myWorkspace";
  const name = "d9cd6f0b-96b9-3984-17cd-a779d1e15a93";
  const threatIntelligenceProperties: ThreatIntelligenceIndicatorModel = {
    description: "debugging indicators",
    confidence: 78,
    createdByRef: "contoso@contoso.com",
    displayName: "new schema",
    externalReferences: [],
    granularMarkings: [],
    killChainPhases: [],
    kind: "indicator",
    labels: [],
    modified: "",
    pattern: "[url:value = 'https://www.contoso.com']",
    patternType: "url",
    revoked: false,
    source: "Azure Sentinel",
    threatIntelligenceTags: ["new schema"],
    threatTypes: ["compromised"],
    validFrom: "2020-04-15T17:44:00.114052Z",
    validUntil: "",
  };
  const credential = new DefaultAzureCredential();
  const client = new SecurityInsights(credential, subscriptionId);
  const result = await client.threatIntelligenceIndicator.create(
    resourceGroupName,
    workspaceName,
    name,
    threatIntelligenceProperties,
  );
  console.log(result);
}

async function main() {
  await updateAThreatIntelligenceIndicator();
}

main().catch(console.error);
