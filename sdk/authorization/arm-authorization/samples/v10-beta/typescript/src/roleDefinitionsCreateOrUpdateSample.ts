/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import {
  RoleDefinition,
  AuthorizationManagementClient
} from "@azure/arm-authorization";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Creates or updates a role definition.
 *
 * @summary Creates or updates a role definition.
 * x-ms-original-file: specification/authorization/resource-manager/Microsoft.Authorization/preview/2022-05-01-preview/examples/PutRoleDefinition.json
 */
async function createRoleDefinition() {
  const scope = "scope";
  const roleDefinitionId = "roleDefinitionId";
  const roleDefinition: RoleDefinition = {};
  const credential = new DefaultAzureCredential();
  const client = new AuthorizationManagementClient(credential);
  const result = await client.roleDefinitions.createOrUpdate(
    scope,
    roleDefinitionId,
    roleDefinition
  );
  console.log(result);
}

async function main() {
  createRoleDefinition();
}

main().catch(console.error);
