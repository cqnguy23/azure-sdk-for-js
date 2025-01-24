/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import type { KeyVaultInfo } from "@azure/arm-networkanalytics";
import { MicrosoftNetworkAnalytics } from "@azure/arm-networkanalytics";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Initiate key rotation on Data Product.
 *
 * @summary Initiate key rotation on Data Product.
 * x-ms-original-file: specification/networkanalytics/resource-manager/Microsoft.NetworkAnalytics/stable/2023-11-15/examples/DataProducts_RotateKey_MaximumSet_Gen.json
 */
async function dataProductsRotateKeyMaximumSetGen() {
  const subscriptionId =
    process.env["NETWORKANALYTICS_SUBSCRIPTION_ID"] || "00000000-0000-0000-0000-00000000000";
  const resourceGroupName =
    process.env["NETWORKANALYTICS_RESOURCE_GROUP"] || "aoiresourceGroupName";
  const dataProductName = "dataproduct01";
  const body: KeyVaultInfo = {
    keyVaultUrl: "https://myKeyVault.vault.azure.net",
  };
  const credential = new DefaultAzureCredential();
  const client = new MicrosoftNetworkAnalytics(credential, subscriptionId);
  const result = await client.dataProducts.rotateKey(resourceGroupName, dataProductName, body);
  console.log(result);
}

/**
 * This sample demonstrates how to Initiate key rotation on Data Product.
 *
 * @summary Initiate key rotation on Data Product.
 * x-ms-original-file: specification/networkanalytics/resource-manager/Microsoft.NetworkAnalytics/stable/2023-11-15/examples/DataProducts_RotateKey_MinimumSet_Gen.json
 */
async function dataProductsRotateKeyMaximumSetGenGeneratedByMinimumSetRuleMinimumSetGen() {
  const subscriptionId =
    process.env["NETWORKANALYTICS_SUBSCRIPTION_ID"] || "00000000-0000-0000-0000-00000000000";
  const resourceGroupName =
    process.env["NETWORKANALYTICS_RESOURCE_GROUP"] || "aoiresourceGroupName";
  const dataProductName = "dataproduct01";
  const body: KeyVaultInfo = {
    keyVaultUrl: "https://myKeyVault.vault.azure.net",
  };
  const credential = new DefaultAzureCredential();
  const client = new MicrosoftNetworkAnalytics(credential, subscriptionId);
  const result = await client.dataProducts.rotateKey(resourceGroupName, dataProductName, body);
  console.log(result);
}

async function main() {
  await dataProductsRotateKeyMaximumSetGen();
  await dataProductsRotateKeyMaximumSetGenGeneratedByMinimumSetRuleMinimumSetGen();
}

main().catch(console.error);
