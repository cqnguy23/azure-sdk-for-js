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
 * This sample demonstrates how to Lists the associated tenants that can collaborate with the billing account on commerce activities like viewing and downloading invoices, managing payments, making purchases, and managing or provisioning licenses.
 *
 * @summary Lists the associated tenants that can collaborate with the billing account on commerce activities like viewing and downloading invoices, managing payments, making purchases, and managing or provisioning licenses.
 * x-ms-original-file: specification/billing/resource-manager/Microsoft.Billing/stable/2024-04-01/examples/associatedTenantsListByBillingAccount.json
 */
async function associatedTenantsListByBillingAccount() {
  const billingAccountName =
    "00000000-0000-0000-0000-000000000000:00000000-0000-0000-0000-000000000000_2019-05-31";
  const credential = new DefaultAzureCredential();
  const client = new BillingManagementClient(credential);
  const resArray = new Array();
  for await (let item of client.associatedTenants.listByBillingAccount(
    billingAccountName,
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  associatedTenantsListByBillingAccount();
}

main().catch(console.error);
