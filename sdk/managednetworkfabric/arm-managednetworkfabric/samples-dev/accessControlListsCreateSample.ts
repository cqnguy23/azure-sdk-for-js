/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import type { AccessControlList } from "@azure/arm-managednetworkfabric";
import { AzureNetworkFabricManagementServiceAPI } from "@azure/arm-managednetworkfabric";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Implements Access Control List PUT method.
 *
 * @summary Implements Access Control List PUT method.
 * x-ms-original-file: specification/managednetworkfabric/resource-manager/Microsoft.ManagedNetworkFabric/stable/2023-06-15/examples/AccessControlLists_Create_MaximumSet_Gen.json
 */
async function accessControlListsCreateMaximumSetGen() {
  const subscriptionId =
    process.env["MANAGEDNETWORKFABRIC_SUBSCRIPTION_ID"] || "1234ABCD-0A1B-1234-5678-123456ABCDEF";
  const resourceGroupName = process.env["MANAGEDNETWORKFABRIC_RESOURCE_GROUP"] || "example-rg";
  const accessControlListName = "example-acl";
  const body: AccessControlList = {
    aclsUrl: "https://ACL-Storage-URL",
    annotation: "annotation",
    configurationType: "File",
    dynamicMatchConfigurations: [
      {
        ipGroups: [
          {
            name: "example-ipGroup",
            ipAddressType: "IPv4",
            ipPrefixes: ["10.20.3.1/20"],
          },
        ],
        portGroups: [{ name: "example-portGroup", ports: ["100-200"] }],
        vlanGroups: [{ name: "example-vlanGroup", vlans: ["20-30"] }],
      },
    ],
    location: "eastUs",
    matchConfigurations: [
      {
        actions: [{ type: "Count", counterName: "example-counter" }],
        ipAddressType: "IPv4",
        matchConditions: [
          {
            dscpMarkings: ["32"],
            etherTypes: ["0x1"],
            fragments: ["0xff00-0xffff"],
            ipCondition: {
              type: "SourceIP",
              ipGroupNames: ["example-ipGroup"],
              ipPrefixValues: ["10.20.20.20/12"],
              prefixType: "Prefix",
            },
            ipLengths: ["4094-9214"],
            portCondition: {
              flags: ["established"],
              layer4Protocol: "TCP",
              portGroupNames: ["example-portGroup"],
              portType: "SourcePort",
              ports: ["1-20"],
            },
            protocolTypes: ["TCP"],
            ttlValues: ["23"],
            vlanMatchCondition: {
              innerVlans: ["30"],
              vlanGroupNames: ["example-vlanGroup"],
              vlans: ["20-30"],
            },
          },
        ],
        matchConfigurationName: "example-match",
        sequenceNumber: 123,
      },
    ],
    tags: { keyID: "KeyValue" },
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureNetworkFabricManagementServiceAPI(credential, subscriptionId);
  const result = await client.accessControlLists.beginCreateAndWait(
    resourceGroupName,
    accessControlListName,
    body,
  );
  console.log(result);
}

async function main() {
  await accessControlListsCreateMaximumSetGen();
}

main().catch(console.error);
