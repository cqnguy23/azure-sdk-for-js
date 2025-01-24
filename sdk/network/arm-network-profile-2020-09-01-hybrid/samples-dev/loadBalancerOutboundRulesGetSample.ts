/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import { NetworkManagementClient } from "@azure/arm-network-profile-2020-09-01-hybrid";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Gets the specified load balancer outbound rule.
 *
 * @summary Gets the specified load balancer outbound rule.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2018-11-01/examples/LoadBalancerOutboundRuleGet.json
 */
async function loadBalancerOutboundRuleGet() {
  const subscriptionId = process.env["NETWORK_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["NETWORK_RESOURCE_GROUP"] || "testrg";
  const loadBalancerName = "lb1";
  const outboundRuleName = "rule1";
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.loadBalancerOutboundRules.get(
    resourceGroupName,
    loadBalancerName,
    outboundRuleName,
  );
  console.log(result);
}

async function main() {
  await loadBalancerOutboundRuleGet();
}

main().catch(console.error);
