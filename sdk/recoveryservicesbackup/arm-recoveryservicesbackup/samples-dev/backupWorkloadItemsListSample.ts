/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import type { BackupWorkloadItemsListOptionalParams } from "@azure/arm-recoveryservicesbackup";
import { RecoveryServicesBackupClient } from "@azure/arm-recoveryservicesbackup";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Provides a pageable list of workload item of a specific container according to the query filter and the pagination
parameters.
 *
 * @summary Provides a pageable list of workload item of a specific container according to the query filter and the pagination
parameters.
 * x-ms-original-file: specification/recoveryservicesbackup/resource-manager/Microsoft.RecoveryServices/stable/2024-04-01/examples/AzureWorkload/BackupWorkloadItems_List.json
 */
async function listWorkloadItemsInContainer() {
  const subscriptionId =
    process.env["RECOVERYSERVICESBACKUP_SUBSCRIPTION_ID"] || "00000000-0000-0000-0000-000000000000";
  const vaultName = "suchandr-seacan-rsv";
  const resourceGroupName = process.env["RECOVERYSERVICESBACKUP_RESOURCE_GROUP"] || "testRg";
  const fabricName = "Azure";
  const containerName = "VMAppContainer;Compute;bvtdtestag;sqlserver-1";
  const filter = "backupManagementType eq 'AzureWorkload'";
  const options: BackupWorkloadItemsListOptionalParams = { filter };
  const credential = new DefaultAzureCredential();
  const client = new RecoveryServicesBackupClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.backupWorkloadItems.list(
    vaultName,
    resourceGroupName,
    fabricName,
    containerName,
    options,
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  await listWorkloadItemsInContainer();
}

main().catch(console.error);
