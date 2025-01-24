/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import type { GlobalRulestackListPredefinedUrlCategoriesOptionalParams } from "@azure/arm-paloaltonetworksngfw";
import { PaloAltoNetworksCloudngfw } from "@azure/arm-paloaltonetworksngfw";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to List predefined URL categories for rulestack
 *
 * @summary List predefined URL categories for rulestack
 * x-ms-original-file: specification/paloaltonetworks/resource-manager/PaloAltoNetworks.Cloudngfw/stable/2023-09-01/examples/GlobalRulestack_listPredefinedUrlCategories_MaximumSet_Gen.json
 */
async function globalRulestackListPredefinedUrlCategoriesMaximumSetGen() {
  const globalRulestackName = "praval";
  const skip = "a6a321";
  const top = 20;
  const options: GlobalRulestackListPredefinedUrlCategoriesOptionalParams = {
    skip,
    top,
  };
  const credential = new DefaultAzureCredential();
  const client = new PaloAltoNetworksCloudngfw(credential);
  const result = await client.globalRulestack.listPredefinedUrlCategories(
    globalRulestackName,
    options,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to List predefined URL categories for rulestack
 *
 * @summary List predefined URL categories for rulestack
 * x-ms-original-file: specification/paloaltonetworks/resource-manager/PaloAltoNetworks.Cloudngfw/stable/2023-09-01/examples/GlobalRulestack_listPredefinedUrlCategories_MinimumSet_Gen.json
 */
async function globalRulestackListPredefinedUrlCategoriesMinimumSetGen() {
  const globalRulestackName = "praval";
  const credential = new DefaultAzureCredential();
  const client = new PaloAltoNetworksCloudngfw(credential);
  const result = await client.globalRulestack.listPredefinedUrlCategories(globalRulestackName);
  console.log(result);
}

async function main() {
  await globalRulestackListPredefinedUrlCategoriesMaximumSetGen();
  await globalRulestackListPredefinedUrlCategoriesMinimumSetGen();
}

main().catch(console.error);
