/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import type { NameAvailabilityParameters } from "@azure/arm-communication";
import { CommunicationServiceManagementClient } from "@azure/arm-communication";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Checks that the CommunicationService name is valid and is not already in use.
 *
 * @summary Checks that the CommunicationService name is valid and is not already in use.
 * x-ms-original-file: specification/communication/resource-manager/Microsoft.Communication/stable/2023-04-01/examples/communicationServices/checkNameAvailabilityAvailable.json
 */
async function checkNameAvailabilityAvailable(): Promise<void> {
  const subscriptionId =
    process.env["COMMUNICATION_SUBSCRIPTION_ID"] || "11112222-3333-4444-5555-666677778888";
  const nameAvailabilityParameters: NameAvailabilityParameters = {
    name: "MyCommunicationService",
    type: "Microsoft.Communication/CommunicationServices",
  };
  const credential = new DefaultAzureCredential();
  const client = new CommunicationServiceManagementClient(credential, subscriptionId);
  const result = await client.communicationServices.checkNameAvailability(
    nameAvailabilityParameters,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Checks that the CommunicationService name is valid and is not already in use.
 *
 * @summary Checks that the CommunicationService name is valid and is not already in use.
 * x-ms-original-file: specification/communication/resource-manager/Microsoft.Communication/stable/2023-04-01/examples/communicationServices/checkNameAvailabilityUnavailable.json
 */
async function checkNameAvailabilityUnavailable(): Promise<void> {
  const subscriptionId =
    process.env["COMMUNICATION_SUBSCRIPTION_ID"] || "11112222-3333-4444-5555-666677778888";
  const nameAvailabilityParameters: NameAvailabilityParameters = {
    name: "MyCommunicationService",
    type: "Microsoft.Communication/CommunicationServices",
  };
  const credential = new DefaultAzureCredential();
  const client = new CommunicationServiceManagementClient(credential, subscriptionId);
  const result = await client.communicationServices.checkNameAvailability(
    nameAvailabilityParameters,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await checkNameAvailabilityAvailable();
  await checkNameAvailabilityUnavailable();
}

main().catch(console.error);
