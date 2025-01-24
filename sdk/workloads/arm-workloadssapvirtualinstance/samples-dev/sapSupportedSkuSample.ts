/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import { WorkloadsClient } from "@azure/arm-workloadssapvirtualinstance";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Get a list of SAP supported SKUs for ASCS, Application and Database tier.
 *
 * @summary Get a list of SAP supported SKUs for ASCS, Application and Database tier.
 * x-ms-original-file: specification/workloads/resource-manager/Microsoft.Workloads/SAPVirtualInstance/preview/2023-10-01-preview/examples/sapvirtualinstances/SAPSupportedSkus_Distributed.json
 */
async function sapSupportedSkusDistributed(): Promise<void> {
  const subscriptionId =
    process.env["WORKLOADS_SUBSCRIPTION_ID"] || "8e17e36c-42e9-4cd5-a078-7b44883414e0";
  const location = "centralus";
  const credential = new DefaultAzureCredential();
  const client = new WorkloadsClient(credential, subscriptionId);
  const result = await client.sAPSupportedSku(location);
  console.log(result);
}

/**
 * This sample demonstrates how to Get a list of SAP supported SKUs for ASCS, Application and Database tier.
 *
 * @summary Get a list of SAP supported SKUs for ASCS, Application and Database tier.
 * x-ms-original-file: specification/workloads/resource-manager/Microsoft.Workloads/SAPVirtualInstance/preview/2023-10-01-preview/examples/sapvirtualinstances/SAPSupportedSkus_DistributedHA_AvSet.json
 */
async function sapSupportedSkusDistributedHaAvSet(): Promise<void> {
  const subscriptionId =
    process.env["WORKLOADS_SUBSCRIPTION_ID"] || "8e17e36c-42e9-4cd5-a078-7b44883414e0";
  const location = "centralus";
  const credential = new DefaultAzureCredential();
  const client = new WorkloadsClient(credential, subscriptionId);
  const result = await client.sAPSupportedSku(location);
  console.log(result);
}

/**
 * This sample demonstrates how to Get a list of SAP supported SKUs for ASCS, Application and Database tier.
 *
 * @summary Get a list of SAP supported SKUs for ASCS, Application and Database tier.
 * x-ms-original-file: specification/workloads/resource-manager/Microsoft.Workloads/SAPVirtualInstance/preview/2023-10-01-preview/examples/sapvirtualinstances/SAPSupportedSkus_DistributedHA_AvZone.json
 */
async function sapSupportedSkusDistributedHaAvZone(): Promise<void> {
  const subscriptionId =
    process.env["WORKLOADS_SUBSCRIPTION_ID"] || "8e17e36c-42e9-4cd5-a078-7b44883414e0";
  const location = "centralus";
  const credential = new DefaultAzureCredential();
  const client = new WorkloadsClient(credential, subscriptionId);
  const result = await client.sAPSupportedSku(location);
  console.log(result);
}

/**
 * This sample demonstrates how to Get a list of SAP supported SKUs for ASCS, Application and Database tier.
 *
 * @summary Get a list of SAP supported SKUs for ASCS, Application and Database tier.
 * x-ms-original-file: specification/workloads/resource-manager/Microsoft.Workloads/SAPVirtualInstance/preview/2023-10-01-preview/examples/sapvirtualinstances/SAPSupportedSkus_SingleServer.json
 */
async function sapSupportedSkusSingleServer(): Promise<void> {
  const subscriptionId =
    process.env["WORKLOADS_SUBSCRIPTION_ID"] || "8e17e36c-42e9-4cd5-a078-7b44883414e0";
  const location = "centralus";
  const credential = new DefaultAzureCredential();
  const client = new WorkloadsClient(credential, subscriptionId);
  const result = await client.sAPSupportedSku(location);
  console.log(result);
}

async function main(): Promise<void> {
  await sapSupportedSkusDistributed();
  await sapSupportedSkusDistributedHaAvSet();
  await sapSupportedSkusDistributedHaAvZone();
  await sapSupportedSkusSingleServer();
}

main().catch(console.error);
