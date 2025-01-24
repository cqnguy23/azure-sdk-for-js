/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import type { Cloud } from "@azure/arm-scvmm";
import { ScVmm } from "@azure/arm-scvmm";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Onboards the ScVmm fabric cloud as an Azure cloud resource.
 *
 * @summary Onboards the ScVmm fabric cloud as an Azure cloud resource.
 * x-ms-original-file: specification/scvmm/resource-manager/Microsoft.ScVmm/stable/2023-10-07/examples/Clouds_CreateOrUpdate_MaximumSet_Gen.json
 */
async function cloudsCreateOrUpdateMaximumSet() {
  const subscriptionId =
    process.env["SCVMM_SUBSCRIPTION_ID"] || "79332E5A-630B-480F-A266-A941C015AB19";
  const resourceGroupName = process.env["SCVMM_RESOURCE_GROUP"] || "rgscvmm";
  const cloudResourceName = "2";
  const resource: Cloud = {
    extendedLocation: {
      name: "/subscriptions/12345678-1234-1234-1234-12345678abc/resourceGroups/exampleResourceGroup/providers/Microsoft.ExtendedLocation/customLocations/customLocationName",
      type: "customLocation",
    },
    location: "khwsdmaxfhmbu",
    properties: {
      cloudCapacity: {},
      inventoryItemId: "qjd",
      uuid: "12345678-1234-1234-1234-12345678abcd",
      vmmServerId:
        "/subscriptions/12345678-1234-1234-1234-12345678abc/resourceGroups/exampleResourceGroup/providers/Microsoft.ScVmm/vmmServers/vmmServerName",
    },
    tags: { key4295: "wngosgcbdifaxdobufuuqxtho" },
  };
  const credential = new DefaultAzureCredential();
  const client = new ScVmm(credential, subscriptionId);
  const result = await client.clouds.beginCreateOrUpdateAndWait(
    resourceGroupName,
    cloudResourceName,
    resource,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Onboards the ScVmm fabric cloud as an Azure cloud resource.
 *
 * @summary Onboards the ScVmm fabric cloud as an Azure cloud resource.
 * x-ms-original-file: specification/scvmm/resource-manager/Microsoft.ScVmm/stable/2023-10-07/examples/Clouds_CreateOrUpdate_MinimumSet_Gen.json
 */
async function cloudsCreateOrUpdateMinimumSet() {
  const subscriptionId =
    process.env["SCVMM_SUBSCRIPTION_ID"] || "79332E5A-630B-480F-A266-A941C015AB19";
  const resourceGroupName = process.env["SCVMM_RESOURCE_GROUP"] || "rgscvmm";
  const cloudResourceName = "-";
  const resource: Cloud = { extendedLocation: {}, location: "khwsdmaxfhmbu" };
  const credential = new DefaultAzureCredential();
  const client = new ScVmm(credential, subscriptionId);
  const result = await client.clouds.beginCreateOrUpdateAndWait(
    resourceGroupName,
    cloudResourceName,
    resource,
  );
  console.log(result);
}

async function main() {
  await cloudsCreateOrUpdateMaximumSet();
  await cloudsCreateOrUpdateMinimumSet();
}

main().catch(console.error);
