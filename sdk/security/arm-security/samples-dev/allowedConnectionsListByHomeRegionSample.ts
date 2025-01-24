/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import { SecurityCenter } from "@azure/arm-security";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Gets the list of all possible traffic between resources for the subscription and location.
 *
 * @summary Gets the list of all possible traffic between resources for the subscription and location.
 * x-ms-original-file: specification/security/resource-manager/Microsoft.Security/stable/2020-01-01/examples/AllowedConnections/GetAllowedConnectionsSubscriptionLocation_example.json
 */
async function getAllowedConnectionsOnASubscriptionFromSecurityDataLocation() {
  const subscriptionId =
    process.env["SECURITY_SUBSCRIPTION_ID"] || "3eeab341-f466-499c-a8be-85427e154bad";
  const ascLocation = "centralus";
  const credential = new DefaultAzureCredential();
  const client = new SecurityCenter(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.allowedConnections.listByHomeRegion(ascLocation)) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  await getAllowedConnectionsOnASubscriptionFromSecurityDataLocation();
}

main().catch(console.error);
