/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import { SpringAppDiscoveryManagementClient } from "@azure/arm-springappdiscovery";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Delete a springbootsites resource.
 *
 * @summary Delete a springbootsites resource.
 * x-ms-original-file: specification/offazurespringboot/resource-manager/Microsoft.OffAzureSpringBoot/preview/2023-01-01-preview/examples/springbootsites_Delete_MaximumSet_Gen.json
 */
async function springbootsitesDeleteMaximumSetGen() {
  const subscriptionId =
    process.env["SPRINGAPPDISCOVERY_SUBSCRIPTION_ID"] || "chshxczdscjpcyvyethat";
  const resourceGroupName = process.env["SPRINGAPPDISCOVERY_RESOURCE_GROUP"] || "rgspringbootsites";
  const springbootsitesName = "xrmzlavpewxtfeitghdrj";
  const credential = new DefaultAzureCredential();
  const client = new SpringAppDiscoveryManagementClient(credential, subscriptionId);
  const result = await client.springbootsites.beginDeleteAndWait(
    resourceGroupName,
    springbootsitesName,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Delete a springbootsites resource.
 *
 * @summary Delete a springbootsites resource.
 * x-ms-original-file: specification/offazurespringboot/resource-manager/Microsoft.OffAzureSpringBoot/preview/2023-01-01-preview/examples/springbootsites_Delete_MinimumSet_Gen.json
 */
async function springbootsitesDeleteMinimumSetGen() {
  const subscriptionId =
    process.env["SPRINGAPPDISCOVERY_SUBSCRIPTION_ID"] || "chshxczdscjpcyvyethat";
  const resourceGroupName = process.env["SPRINGAPPDISCOVERY_RESOURCE_GROUP"] || "rgspringbootsites";
  const springbootsitesName = "xrmzlavpewxtfeitghdrj";
  const credential = new DefaultAzureCredential();
  const client = new SpringAppDiscoveryManagementClient(credential, subscriptionId);
  const result = await client.springbootsites.beginDeleteAndWait(
    resourceGroupName,
    springbootsitesName,
  );
  console.log(result);
}

async function main() {
  await springbootsitesDeleteMaximumSetGen();
  await springbootsitesDeleteMinimumSetGen();
}

main().catch(console.error);
