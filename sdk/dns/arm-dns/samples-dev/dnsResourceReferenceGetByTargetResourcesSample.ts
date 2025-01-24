/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import type { DnsResourceReferenceRequest } from "@azure/arm-dns";
import { DnsManagementClient } from "@azure/arm-dns";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Returns the DNS records specified by the referencing targetResourceIds.
 *
 * @summary Returns the DNS records specified by the referencing targetResourceIds.
 * x-ms-original-file: specification/dns/resource-manager/Microsoft.Network/preview/2023-07-01-preview/examples/GetDnsResourceReference.json
 */
async function getDnsResourceReference() {
  const subscriptionId = process.env["DNS_SUBSCRIPTION_ID"] || "subid";
  const parameters: DnsResourceReferenceRequest = {
    targetResources: [
      {
        id: "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/trafficManagerProfiles/testpp2",
      },
    ],
  };
  const credential = new DefaultAzureCredential();
  const client = new DnsManagementClient(credential, subscriptionId);
  const result = await client.dnsResourceReferenceOperations.getByTargetResources(parameters);
  console.log(result);
}

async function main() {
  await getDnsResourceReference();
}

main().catch(console.error);
