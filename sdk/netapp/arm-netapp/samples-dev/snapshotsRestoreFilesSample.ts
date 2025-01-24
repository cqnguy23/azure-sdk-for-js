/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import type { SnapshotRestoreFiles } from "@azure/arm-netapp";
import { NetAppManagementClient } from "@azure/arm-netapp";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Restore the specified files from the specified snapshot to the active filesystem
 *
 * @summary Restore the specified files from the specified snapshot to the active filesystem
 * x-ms-original-file: specification/netapp/resource-manager/Microsoft.NetApp/preview/2024-07-01-preview/examples/Snapshots_SingleFileRestore.json
 */
async function snapshotsSingleFileRestore() {
  const subscriptionId =
    process.env["NETAPP_SUBSCRIPTION_ID"] || "D633CC2E-722B-4AE1-B636-BBD9E4C60ED9";
  const resourceGroupName = process.env["NETAPP_RESOURCE_GROUP"] || "myRG";
  const accountName = "account1";
  const poolName = "pool1";
  const volumeName = "volume1";
  const snapshotName = "snapshot1";
  const body: SnapshotRestoreFiles = {
    filePaths: ["/dir1/customer1.db", "/dir1/customer2.db"],
  };
  const credential = new DefaultAzureCredential();
  const client = new NetAppManagementClient(credential, subscriptionId);
  const result = await client.snapshots.beginRestoreFilesAndWait(
    resourceGroupName,
    accountName,
    poolName,
    volumeName,
    snapshotName,
    body,
  );
  console.log(result);
}

async function main() {
  await snapshotsSingleFileRestore();
}

main().catch(console.error);
