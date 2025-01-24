/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import {
  AzureBackupFindRestorableTimeRangesRequest,
  DataProtectionClient,
} from "@azure/arm-dataprotection";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to
 *
 * @summary
 * x-ms-original-file: specification/dataprotection/resource-manager/Microsoft.DataProtection/stable/2024-04-01/examples/BackupInstanceOperations/FindRestorableTimeRanges.json
 */
async function findRestorableTimeRanges() {
  const subscriptionId =
    process.env["DATAPROTECTION_SUBSCRIPTION_ID"] ||
    "04cf684a-d41f-4550-9f70-7708a3a2283b";
  const resourceGroupName =
    process.env["DATAPROTECTION_RESOURCE_GROUP"] || "Blob-Backup";
  const vaultName = "ZBlobBackupVaultBVTD3";
  const backupInstanceName = "zblobbackuptestsa58";
  const parameters: AzureBackupFindRestorableTimeRangesRequest = {
    endTime: "2021-02-24T00:35:17.6829685Z",
    sourceDataStoreType: "OperationalStore",
    startTime: "2020-10-17T23:28:17.6829685Z",
  };
  const credential = new DefaultAzureCredential();
  const client = new DataProtectionClient(credential, subscriptionId);
  const result = await client.restorableTimeRanges.find(
    resourceGroupName,
    vaultName,
    backupInstanceName,
    parameters,
  );
  console.log(result);
}

async function main() {
  findRestorableTimeRanges();
}

main().catch(console.error);
