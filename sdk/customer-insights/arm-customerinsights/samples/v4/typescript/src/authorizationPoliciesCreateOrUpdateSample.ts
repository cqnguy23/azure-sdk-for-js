/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import {
  AuthorizationPolicyResourceFormat,
  CustomerInsightsManagementClient
} from "@azure/arm-customerinsights";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Creates an authorization policy or updates an existing authorization policy.
 *
 * @summary Creates an authorization policy or updates an existing authorization policy.
 * x-ms-original-file: specification/customer-insights/resource-manager/Microsoft.CustomerInsights/stable/2017-04-26/examples/AuthorizationPoliciesCreateOrUpdate.json
 */
async function authorizationPoliciesCreateOrUpdate(): Promise<void> {
  const subscriptionId = "subid";
  const resourceGroupName = "TestHubRG";
  const hubName = "azSdkTestHub";
  const authorizationPolicyName = "testPolicy4222";
  const parameters: AuthorizationPolicyResourceFormat = {
    permissions: ["Read", "Write", "Manage"]
  };
  const credential = new DefaultAzureCredential();
  const client = new CustomerInsightsManagementClient(
    credential,
    subscriptionId
  );
  const result = await client.authorizationPolicies.createOrUpdate(
    resourceGroupName,
    hubName,
    authorizationPolicyName,
    parameters
  );
  console.log(result);
}

authorizationPoliciesCreateOrUpdate().catch(console.error);
