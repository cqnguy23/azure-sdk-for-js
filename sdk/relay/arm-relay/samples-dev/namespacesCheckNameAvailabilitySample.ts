/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import type { CheckNameAvailability } from "@azure/arm-relay";
import { RelayAPI } from "@azure/arm-relay";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Check the specified namespace name availability.
 *
 * @summary Check the specified namespace name availability.
 * x-ms-original-file: specification/relay/resource-manager/Microsoft.Relay/stable/2017-04-01/examples/NameSpaces/RelayNameSpaceCheckNameAvailability.json
 */
async function relayCheckNameAvailability() {
  const subscriptionId =
    process.env["RELAY_SUBSCRIPTION_ID"] || "ffffffff-ffff-ffff-ffff-ffffffffffff";
  const parameters: CheckNameAvailability = { name: "sdk-Namespace1321" };
  const credential = new DefaultAzureCredential();
  const client = new RelayAPI(credential, subscriptionId);
  const result = await client.namespaces.checkNameAvailability(parameters);
  console.log(result);
}

async function main() {
  await relayCheckNameAvailability();
}

main().catch(console.error);
