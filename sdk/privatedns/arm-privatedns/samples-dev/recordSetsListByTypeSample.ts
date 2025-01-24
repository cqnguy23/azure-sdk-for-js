/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import { PrivateDnsManagementClient } from "@azure/arm-privatedns";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Lists the record sets of a specified type in a Private DNS zone.
 *
 * @summary Lists the record sets of a specified type in a Private DNS zone.
 * x-ms-original-file: specification/privatedns/resource-manager/Microsoft.Network/stable/2024-06-01/examples/RecordSetAList.json
 */
async function getPrivateDnsZoneARecordSets() {
  const subscriptionId = process.env["PRIVATEDNS_SUBSCRIPTION_ID"] || "subscriptionId";
  const resourceGroupName = process.env["PRIVATEDNS_RESOURCE_GROUP"] || "resourceGroup1";
  const privateZoneName = "privatezone1.com";
  const recordType = "A";
  const credential = new DefaultAzureCredential();
  const client = new PrivateDnsManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.recordSets.listByType(
    resourceGroupName,
    privateZoneName,
    recordType,
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

/**
 * This sample demonstrates how to Lists the record sets of a specified type in a Private DNS zone.
 *
 * @summary Lists the record sets of a specified type in a Private DNS zone.
 * x-ms-original-file: specification/privatedns/resource-manager/Microsoft.Network/stable/2024-06-01/examples/RecordSetAAAAList.json
 */
async function getPrivateDnsZoneAaaaRecordSets() {
  const subscriptionId = process.env["PRIVATEDNS_SUBSCRIPTION_ID"] || "subscriptionId";
  const resourceGroupName = process.env["PRIVATEDNS_RESOURCE_GROUP"] || "resourceGroup1";
  const privateZoneName = "privatezone1.com";
  const recordType = "AAAA";
  const credential = new DefaultAzureCredential();
  const client = new PrivateDnsManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.recordSets.listByType(
    resourceGroupName,
    privateZoneName,
    recordType,
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

/**
 * This sample demonstrates how to Lists the record sets of a specified type in a Private DNS zone.
 *
 * @summary Lists the record sets of a specified type in a Private DNS zone.
 * x-ms-original-file: specification/privatedns/resource-manager/Microsoft.Network/stable/2024-06-01/examples/RecordSetCNAMEList.json
 */
async function getPrivateDnsZoneCnameRecordSets() {
  const subscriptionId = process.env["PRIVATEDNS_SUBSCRIPTION_ID"] || "subscriptionId";
  const resourceGroupName = process.env["PRIVATEDNS_RESOURCE_GROUP"] || "resourceGroup1";
  const privateZoneName = "privatezone1.com";
  const recordType = "CNAME";
  const credential = new DefaultAzureCredential();
  const client = new PrivateDnsManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.recordSets.listByType(
    resourceGroupName,
    privateZoneName,
    recordType,
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

/**
 * This sample demonstrates how to Lists the record sets of a specified type in a Private DNS zone.
 *
 * @summary Lists the record sets of a specified type in a Private DNS zone.
 * x-ms-original-file: specification/privatedns/resource-manager/Microsoft.Network/stable/2024-06-01/examples/RecordSetMXList.json
 */
async function getPrivateDnsZoneMxRecordSets() {
  const subscriptionId = process.env["PRIVATEDNS_SUBSCRIPTION_ID"] || "subscriptionId";
  const resourceGroupName = process.env["PRIVATEDNS_RESOURCE_GROUP"] || "resourceGroup1";
  const privateZoneName = "privatezone1.com";
  const recordType = "MX";
  const credential = new DefaultAzureCredential();
  const client = new PrivateDnsManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.recordSets.listByType(
    resourceGroupName,
    privateZoneName,
    recordType,
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

/**
 * This sample demonstrates how to Lists the record sets of a specified type in a Private DNS zone.
 *
 * @summary Lists the record sets of a specified type in a Private DNS zone.
 * x-ms-original-file: specification/privatedns/resource-manager/Microsoft.Network/stable/2024-06-01/examples/RecordSetPTRList.json
 */
async function getPrivateDnsZonePtrRecordSets() {
  const subscriptionId = process.env["PRIVATEDNS_SUBSCRIPTION_ID"] || "subscriptionId";
  const resourceGroupName = process.env["PRIVATEDNS_RESOURCE_GROUP"] || "resourceGroup1";
  const privateZoneName = "0.0.127.in-addr.arpa";
  const recordType = "PTR";
  const credential = new DefaultAzureCredential();
  const client = new PrivateDnsManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.recordSets.listByType(
    resourceGroupName,
    privateZoneName,
    recordType,
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

/**
 * This sample demonstrates how to Lists the record sets of a specified type in a Private DNS zone.
 *
 * @summary Lists the record sets of a specified type in a Private DNS zone.
 * x-ms-original-file: specification/privatedns/resource-manager/Microsoft.Network/stable/2024-06-01/examples/RecordSetSOAList.json
 */
async function getPrivateDnsZoneSoaRecordSets() {
  const subscriptionId = process.env["PRIVATEDNS_SUBSCRIPTION_ID"] || "subscriptionId";
  const resourceGroupName = process.env["PRIVATEDNS_RESOURCE_GROUP"] || "resourceGroup1";
  const privateZoneName = "privatezone1.com";
  const recordType = "SOA";
  const credential = new DefaultAzureCredential();
  const client = new PrivateDnsManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.recordSets.listByType(
    resourceGroupName,
    privateZoneName,
    recordType,
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

/**
 * This sample demonstrates how to Lists the record sets of a specified type in a Private DNS zone.
 *
 * @summary Lists the record sets of a specified type in a Private DNS zone.
 * x-ms-original-file: specification/privatedns/resource-manager/Microsoft.Network/stable/2024-06-01/examples/RecordSetSRVList.json
 */
async function getPrivateDnsZoneSrvRecordSets() {
  const subscriptionId = process.env["PRIVATEDNS_SUBSCRIPTION_ID"] || "subscriptionId";
  const resourceGroupName = process.env["PRIVATEDNS_RESOURCE_GROUP"] || "resourceGroup1";
  const privateZoneName = "privatezone1.com";
  const recordType = "SRV";
  const credential = new DefaultAzureCredential();
  const client = new PrivateDnsManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.recordSets.listByType(
    resourceGroupName,
    privateZoneName,
    recordType,
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

/**
 * This sample demonstrates how to Lists the record sets of a specified type in a Private DNS zone.
 *
 * @summary Lists the record sets of a specified type in a Private DNS zone.
 * x-ms-original-file: specification/privatedns/resource-manager/Microsoft.Network/stable/2024-06-01/examples/RecordSetTXTList.json
 */
async function getPrivateDnsZoneTxtRecordSets() {
  const subscriptionId = process.env["PRIVATEDNS_SUBSCRIPTION_ID"] || "subscriptionId";
  const resourceGroupName = process.env["PRIVATEDNS_RESOURCE_GROUP"] || "resourceGroup1";
  const privateZoneName = "privatezone1.com";
  const recordType = "TXT";
  const credential = new DefaultAzureCredential();
  const client = new PrivateDnsManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.recordSets.listByType(
    resourceGroupName,
    privateZoneName,
    recordType,
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  await getPrivateDnsZoneARecordSets();
  await getPrivateDnsZoneAaaaRecordSets();
  await getPrivateDnsZoneCnameRecordSets();
  await getPrivateDnsZoneMxRecordSets();
  await getPrivateDnsZonePtrRecordSets();
  await getPrivateDnsZoneSoaRecordSets();
  await getPrivateDnsZoneSrvRecordSets();
  await getPrivateDnsZoneTxtRecordSets();
}

main().catch(console.error);
