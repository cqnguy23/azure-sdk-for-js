/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import { AuthorizationManagementClient } from "@azure/arm-authorization";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Get the specified role assignment schedule for a resource scope
 *
 * @summary Get the specified role assignment schedule for a resource scope
 * x-ms-original-file: specification/authorization/resource-manager/Microsoft.Authorization/preview/2020-10-01-preview/examples/GetRoleAssignmentScheduleByName.json
 */
async function getRoleAssignmentScheduleByName(): Promise<void> {
  const scope =
    "providers/Microsoft.Subscription/subscriptions/dfa2a084-766f-4003-8ae1-c4aeb893a99f";
  const roleAssignmentScheduleName = "c9e264ff-3133-4776-a81a-ebc7c33c8ec6";
  const credential = new DefaultAzureCredential();
  const client = new AuthorizationManagementClient(credential);
  const result = await client.roleAssignmentSchedules.get(scope, roleAssignmentScheduleName);
  console.log(result);
}

async function main(): Promise<void> {
  await getRoleAssignmentScheduleByName();
}

main().catch(console.error);
