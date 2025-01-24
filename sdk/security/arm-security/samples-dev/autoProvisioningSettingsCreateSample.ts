/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import type { AutoProvisioningSetting } from "@azure/arm-security";
import { SecurityCenter } from "@azure/arm-security";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Details of a specific setting
 *
 * @summary Details of a specific setting
 * x-ms-original-file: specification/security/resource-manager/Microsoft.Security/preview/2017-08-01-preview/examples/AutoProvisioningSettings/CreateAutoProvisioningSettingsSubscription_example.json
 */
async function createAutoProvisioningSettingsForSubscription() {
  const subscriptionId =
    process.env["SECURITY_SUBSCRIPTION_ID"] || "20ff7fc3-e762-44dd-bd96-b71116dcdc23";
  const settingName = "default";
  const setting: AutoProvisioningSetting = {
    name: "default",
    type: "Microsoft.Security/autoProvisioningSettings",
    autoProvision: "On",
    id: "/subscriptions/20ff7fc3-e762-44dd-bd96-b71116dcdc23/providers/Microsoft.Security/autoProvisioningSettings/default",
  };
  const credential = new DefaultAzureCredential();
  const client = new SecurityCenter(credential, subscriptionId);
  const result = await client.autoProvisioningSettings.create(settingName, setting);
  console.log(result);
}

async function main() {
  await createAutoProvisioningSettingsForSubscription();
}

main().catch(console.error);
