/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import { PolicyAssignment, PolicyClient } from "@azure/arm-policy";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to  This operation creates or updates a policy assignment with the given scope and name. Policy assignments apply to all resources contained within their scope. For example, when you assign a policy at resource group scope, that policy applies to all resources in the group.
 *
 * @summary  This operation creates or updates a policy assignment with the given scope and name. Policy assignments apply to all resources contained within their scope. For example, when you assign a policy at resource group scope, that policy applies to all resources in the group.
 * x-ms-original-file: specification/resources/resource-manager/Microsoft.Authorization/stable/2021-06-01/examples/createPolicyAssignment.json
 */
async function createOrUpdateAPolicyAssignment() {
  const subscriptionId =
    process.env["POLICY_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const scope = "subscriptions/ae640e6b-ba3e-4256-9d62-2993eecfa6f2";
  const policyAssignmentName = "EnforceNaming";
  const parameters: PolicyAssignment = {
    description:
      "Force resource names to begin with given DeptA and end with -LC",
    displayName: "Enforce resource naming rules",
    metadata: { assignedBy: "Special Someone" },
    nonComplianceMessages: [
      { message: "Resource names must start with 'DeptA' and end with '-LC'." }
    ],
    parameters: { prefix: { value: "DeptA" }, suffix: { value: "-LC" } },
    policyDefinitionId:
      "/subscriptions/ae640e6b-ba3e-4256-9d62-2993eecfa6f2/providers/Microsoft.Authorization/policyDefinitions/ResourceNaming"
  };
  const credential = new DefaultAzureCredential();
  const client = new PolicyClient(credential, subscriptionId);
  const result = await client.policyAssignments.create(
    scope,
    policyAssignmentName,
    parameters
  );
  console.log(result);
}

/**
 * This sample demonstrates how to  This operation creates or updates a policy assignment with the given scope and name. Policy assignments apply to all resources contained within their scope. For example, when you assign a policy at resource group scope, that policy applies to all resources in the group.
 *
 * @summary  This operation creates or updates a policy assignment with the given scope and name. Policy assignments apply to all resources contained within their scope. For example, when you assign a policy at resource group scope, that policy applies to all resources in the group.
 * x-ms-original-file: specification/resources/resource-manager/Microsoft.Authorization/stable/2021-06-01/examples/createPolicyAssignmentWithIdentity.json
 */
async function createOrUpdateAPolicyAssignmentWithASystemAssignedIdentity() {
  const subscriptionId =
    process.env["POLICY_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const scope = "subscriptions/ae640e6b-ba3e-4256-9d62-2993eecfa6f2";
  const policyAssignmentName = "EnforceNaming";
  const parameters: PolicyAssignment = {
    description:
      "Force resource names to begin with given DeptA and end with -LC",
    displayName: "Enforce resource naming rules",
    enforcementMode: "Default",
    identity: { type: "SystemAssigned" },
    location: "eastus",
    metadata: { assignedBy: "Foo Bar" },
    parameters: { prefix: { value: "DeptA" }, suffix: { value: "-LC" } },
    policyDefinitionId:
      "/subscriptions/ae640e6b-ba3e-4256-9d62-2993eecfa6f2/providers/Microsoft.Authorization/policyDefinitions/ResourceNaming"
  };
  const credential = new DefaultAzureCredential();
  const client = new PolicyClient(credential, subscriptionId);
  const result = await client.policyAssignments.create(
    scope,
    policyAssignmentName,
    parameters
  );
  console.log(result);
}

/**
 * This sample demonstrates how to  This operation creates or updates a policy assignment with the given scope and name. Policy assignments apply to all resources contained within their scope. For example, when you assign a policy at resource group scope, that policy applies to all resources in the group.
 *
 * @summary  This operation creates or updates a policy assignment with the given scope and name. Policy assignments apply to all resources contained within their scope. For example, when you assign a policy at resource group scope, that policy applies to all resources in the group.
 * x-ms-original-file: specification/resources/resource-manager/Microsoft.Authorization/stable/2021-06-01/examples/createPolicyAssignmentWithUserAssignedIdentity.json
 */
async function createOrUpdateAPolicyAssignmentWithAUserAssignedIdentity() {
  const subscriptionId =
    process.env["POLICY_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const scope = "subscriptions/ae640e6b-ba3e-4256-9d62-2993eecfa6f2";
  const policyAssignmentName = "EnforceNaming";
  const parameters: PolicyAssignment = {
    description:
      "Force resource names to begin with given DeptA and end with -LC",
    displayName: "Enforce resource naming rules",
    enforcementMode: "Default",
    identity: {
      type: "UserAssigned",
      userAssignedIdentities: {
        "/subscriptions/ae640e6bBa3e42569d622993eecfa6f2/resourceGroups/testResourceGroup/providers/MicrosoftManagedIdentity/userAssignedIdentities/testIdentity": {}
      }
    },
    location: "eastus",
    metadata: { assignedBy: "Foo Bar" },
    parameters: { prefix: { value: "DeptA" }, suffix: { value: "-LC" } },
    policyDefinitionId:
      "/subscriptions/ae640e6b-ba3e-4256-9d62-2993eecfa6f2/providers/Microsoft.Authorization/policyDefinitions/ResourceNaming"
  };
  const credential = new DefaultAzureCredential();
  const client = new PolicyClient(credential, subscriptionId);
  const result = await client.policyAssignments.create(
    scope,
    policyAssignmentName,
    parameters
  );
  console.log(result);
}

/**
 * This sample demonstrates how to  This operation creates or updates a policy assignment with the given scope and name. Policy assignments apply to all resources contained within their scope. For example, when you assign a policy at resource group scope, that policy applies to all resources in the group.
 *
 * @summary  This operation creates or updates a policy assignment with the given scope and name. Policy assignments apply to all resources contained within their scope. For example, when you assign a policy at resource group scope, that policy applies to all resources in the group.
 * x-ms-original-file: specification/resources/resource-manager/Microsoft.Authorization/stable/2021-06-01/examples/createPolicyAssignmentNonComplianceMessages.json
 */
async function createOrUpdateAPolicyAssignmentWithMultipleNonComplianceMessages() {
  const subscriptionId =
    process.env["POLICY_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const scope = "subscriptions/ae640e6b-ba3e-4256-9d62-2993eecfa6f2";
  const policyAssignmentName = "securityInitAssignment";
  const parameters: PolicyAssignment = {
    displayName: "Enforce security policies",
    nonComplianceMessages: [
      {
        message:
          "Resources must comply with all internal security policies. See <internal site URL> for more info."
      },
      {
        message: "Resource names must start with 'DeptA' and end with '-LC'.",
        policyDefinitionReferenceId: "10420126870854049575"
      },
      {
        message: "Storage accounts must have firewall rules configured.",
        policyDefinitionReferenceId: "8572513655450389710"
      }
    ],
    policyDefinitionId:
      "/subscriptions/ae640e6b-ba3e-4256-9d62-2993eecfa6f2/providers/Microsoft.Authorization/policySetDefinitions/securityInitiative"
  };
  const credential = new DefaultAzureCredential();
  const client = new PolicyClient(credential, subscriptionId);
  const result = await client.policyAssignments.create(
    scope,
    policyAssignmentName,
    parameters
  );
  console.log(result);
}

/**
 * This sample demonstrates how to  This operation creates or updates a policy assignment with the given scope and name. Policy assignments apply to all resources contained within their scope. For example, when you assign a policy at resource group scope, that policy applies to all resources in the group.
 *
 * @summary  This operation creates or updates a policy assignment with the given scope and name. Policy assignments apply to all resources contained within their scope. For example, when you assign a policy at resource group scope, that policy applies to all resources in the group.
 * x-ms-original-file: specification/resources/resource-manager/Microsoft.Authorization/stable/2021-06-01/examples/createPolicyAssignmentWithoutEnforcement.json
 */
async function createOrUpdateAPolicyAssignmentWithoutEnforcingPolicyEffectDuringResourceCreationOrUpdate() {
  const subscriptionId =
    process.env["POLICY_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const scope = "subscriptions/ae640e6b-ba3e-4256-9d62-2993eecfa6f2";
  const policyAssignmentName = "EnforceNaming";
  const parameters: PolicyAssignment = {
    description:
      "Force resource names to begin with given DeptA and end with -LC",
    displayName: "Enforce resource naming rules",
    enforcementMode: "DoNotEnforce",
    metadata: { assignedBy: "Special Someone" },
    parameters: { prefix: { value: "DeptA" }, suffix: { value: "-LC" } },
    policyDefinitionId:
      "/subscriptions/ae640e6b-ba3e-4256-9d62-2993eecfa6f2/providers/Microsoft.Authorization/policyDefinitions/ResourceNaming"
  };
  const credential = new DefaultAzureCredential();
  const client = new PolicyClient(credential, subscriptionId);
  const result = await client.policyAssignments.create(
    scope,
    policyAssignmentName,
    parameters
  );
  console.log(result);
}

async function main() {
  createOrUpdateAPolicyAssignment();
  createOrUpdateAPolicyAssignmentWithASystemAssignedIdentity();
  createOrUpdateAPolicyAssignmentWithAUserAssignedIdentity();
  createOrUpdateAPolicyAssignmentWithMultipleNonComplianceMessages();
  createOrUpdateAPolicyAssignmentWithoutEnforcingPolicyEffectDuringResourceCreationOrUpdate();
}

main().catch(console.error);
