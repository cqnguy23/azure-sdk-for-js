/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import {
  LtrPreBackupRequest,
  PostgreSQLManagementFlexibleServerClient,
} from "@azure/arm-postgresql-flexible";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to PreBackup operation performs all the checks that are needed for the subsequent long term retention backup operation to succeed.
 *
 * @summary PreBackup operation performs all the checks that are needed for the subsequent long term retention backup operation to succeed.
 * x-ms-original-file: specification/postgresql/resource-manager/Microsoft.DBforPostgreSQL/stable/2024-08-01/examples/LongTermRetentionPreBackup.json
 */
async function samplePrebackup() {
  const subscriptionId =
    process.env["POSTGRESQL_SUBSCRIPTION_ID"] ||
    "ffffffff-ffff-ffff-ffff-ffffffffffff";
  const resourceGroupName =
    process.env["POSTGRESQL_RESOURCE_GROUP"] || "rgLongTermRetention";
  const serverName = "pgsqlltrtestserver";
  const parameters: LtrPreBackupRequest = {
    backupSettings: { backupName: "backup1" },
  };
  const credential = new DefaultAzureCredential();
  const client = new PostgreSQLManagementFlexibleServerClient(
    credential,
    subscriptionId,
  );
  const result = await client.flexibleServer.triggerLtrPreBackup(
    resourceGroupName,
    serverName,
    parameters,
  );
  console.log(result);
}

async function main() {
  samplePrebackup();
}

main().catch(console.error);
