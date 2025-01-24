/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import { BillingManagementClient } from "@azure/arm-billing";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Lists the role assignments for the caller on a enrollment account. The operation is supported for billing accounts of type Enterprise Agreement.
 *
 * @summary Lists the role assignments for the caller on a enrollment account. The operation is supported for billing accounts of type Enterprise Agreement.
 * x-ms-original-file: specification/billing/resource-manager/Microsoft.Billing/stable/2024-04-01/examples/billingRoleAssignmentListByEnrollmentAccount.json
 */
async function billingRoleAssignmentListByEnrollmentAccount(): Promise<void> {
  const billingAccountName = "6100092";
  const enrollmentAccountName = "123456";
  const credential = new DefaultAzureCredential();
  const client = new BillingManagementClient(credential);
  const resArray = new Array();
  for await (const item of client.billingRoleAssignments.listByEnrollmentAccount(
    billingAccountName,
    enrollmentAccountName,
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main(): Promise<void> {
  await billingRoleAssignmentListByEnrollmentAccount();
}

main().catch(console.error);
