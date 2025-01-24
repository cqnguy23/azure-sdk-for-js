/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import type {
  VirtualMachinePowerOffParameters,
  VirtualMachinesPowerOffOptionalParams,
} from "@azure/arm-networkcloud";
import { NetworkCloud } from "@azure/arm-networkcloud";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Power off the provided virtual machine.
 *
 * @summary Power off the provided virtual machine.
 * x-ms-original-file: specification/networkcloud/resource-manager/Microsoft.NetworkCloud/preview/2024-06-01-preview/examples/VirtualMachines_PowerOff.json
 */
async function powerOffVirtualMachine() {
  const subscriptionId =
    process.env["NETWORKCLOUD_SUBSCRIPTION_ID"] || "123e4567-e89b-12d3-a456-426655440000";
  const resourceGroupName = process.env["NETWORKCLOUD_RESOURCE_GROUP"] || "resourceGroupName";
  const virtualMachineName = "virtualMachineName";
  const virtualMachinePowerOffParameters: VirtualMachinePowerOffParameters = {
    skipShutdown: "True",
  };
  const options: VirtualMachinesPowerOffOptionalParams = {
    virtualMachinePowerOffParameters,
  };
  const credential = new DefaultAzureCredential();
  const client = new NetworkCloud(credential, subscriptionId);
  const result = await client.virtualMachines.beginPowerOffAndWait(
    resourceGroupName,
    virtualMachineName,
    options,
  );
  console.log(result);
}

async function main() {
  await powerOffVirtualMachine();
}

main().catch(console.error);
