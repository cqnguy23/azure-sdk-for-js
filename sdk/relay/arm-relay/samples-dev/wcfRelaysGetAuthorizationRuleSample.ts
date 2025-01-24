/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import { RelayAPI } from "@azure/arm-relay";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Get authorizationRule for a WCF relay by name.
 *
 * @summary Get authorizationRule for a WCF relay by name.
 * x-ms-original-file: specification/relay/resource-manager/Microsoft.Relay/stable/2017-04-01/examples/Relay/RelayAutorizationRuleGet.json
 */
async function relayAutorizationRuleGet() {
  const subscriptionId =
    process.env["RELAY_SUBSCRIPTION_ID"] || "ffffffff-ffff-ffff-ffff-ffffffffffff";
  const resourceGroupName = process.env["RELAY_RESOURCE_GROUP"] || "resourcegroup";
  const namespaceName = "example-RelayNamespace-01";
  const relayName = "example-Relay-wcf-01";
  const authorizationRuleName = "example-RelayAuthRules-01";
  const credential = new DefaultAzureCredential();
  const client = new RelayAPI(credential, subscriptionId);
  const result = await client.wCFRelays.getAuthorizationRule(
    resourceGroupName,
    namespaceName,
    relayName,
    authorizationRuleName,
  );
  console.log(result);
}

async function main() {
  await relayAutorizationRuleGet();
}

main().catch(console.error);
