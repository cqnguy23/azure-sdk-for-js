/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import type { PolicyEventsListQueryResultsForSubscriptionLevelPolicyAssignmentOptionalParams } from "@azure/arm-policyinsights";
import { PolicyInsightsClient } from "@azure/arm-policyinsights";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Queries policy events for the subscription level policy assignment.
 *
 * @summary Queries policy events for the subscription level policy assignment.
 * x-ms-original-file: specification/policyinsights/resource-manager/Microsoft.PolicyInsights/stable/2024-10-01/examples/PolicyEvents_QuerySubscriptionLevelPolicyAssignmentScope.json
 */
async function queryAtSubscriptionLevelPolicyAssignmentScope() {
  const policyEventsResource = "default";
  const subscriptionId = "fffedd8f-ffff-fffd-fffd-fffed2f84852";
  const policyAssignmentName = "ec8f9645-8ecb-4abb-9c0b-5292f19d4003";
  const credential = new DefaultAzureCredential();
  const client = new PolicyInsightsClient(credential);
  const resArray = new Array();
  for await (const item of client.policyEvents.listQueryResultsForSubscriptionLevelPolicyAssignment(
    policyEventsResource,
    subscriptionId,
    policyAssignmentName,
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

/**
 * This sample demonstrates how to Queries policy events for the subscription level policy assignment.
 *
 * @summary Queries policy events for the subscription level policy assignment.
 * x-ms-original-file: specification/policyinsights/resource-manager/Microsoft.PolicyInsights/stable/2024-10-01/examples/PolicyEvents_QuerySubscriptionLevelPolicyAssignmentScopeNextLink.json
 */
async function queryAtSubscriptionLevelPolicyAssignmentScopeWithNextLink() {
  const policyEventsResource = "default";
  const subscriptionId = "fffedd8f-ffff-fffd-fffd-fffed2f84852";
  const policyAssignmentName = "ec8f9645-8ecb-4abb-9c0b-5292f19d4003";
  const skipToken = "WpmWfBSvPhkAK6QD";
  const options: PolicyEventsListQueryResultsForSubscriptionLevelPolicyAssignmentOptionalParams = {
    skipToken,
  };
  const credential = new DefaultAzureCredential();
  const client = new PolicyInsightsClient(credential);
  const resArray = new Array();
  for await (const item of client.policyEvents.listQueryResultsForSubscriptionLevelPolicyAssignment(
    policyEventsResource,
    subscriptionId,
    policyAssignmentName,
    options,
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  await queryAtSubscriptionLevelPolicyAssignmentScope();
  await queryAtSubscriptionLevelPolicyAssignmentScopeWithNextLink();
}

main().catch(console.error);
