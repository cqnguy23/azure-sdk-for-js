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
 * This sample demonstrates how to The list of billing requests submitted for the invoice section.
 *
 * @summary The list of billing requests submitted for the invoice section.
 * x-ms-original-file: specification/billing/resource-manager/Microsoft.Billing/stable/2024-04-01/examples/billingRequestsListByInvoiceSection.json
 */
async function billingRequestsListByInvoiceSection() {
  const billingAccountName =
    "00000000-0000-0000-0000-000000000000:00000000-0000-0000-0000-000000000000_2019-05-31";
  const billingProfileName = "xxxx-xxxx-xxx-xxx";
  const invoiceSectionName = "yyyy-yyyy-yyy-yyy";
  const credential = new DefaultAzureCredential();
  const client = new BillingManagementClient(credential);
  const resArray = new Array();
  for await (let item of client.billingRequests.listByInvoiceSection(
    billingAccountName,
    billingProfileName,
    invoiceSectionName,
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  billingRequestsListByInvoiceSection();
}

main().catch(console.error);
