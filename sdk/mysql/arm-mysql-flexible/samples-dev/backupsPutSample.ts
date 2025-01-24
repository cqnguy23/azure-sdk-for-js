/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import { MySQLManagementFlexibleServerClient } from "@azure/arm-mysql-flexible";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Create backup for a given server with specified backup name.
 *
 * @summary Create backup for a given server with specified backup name.
 * x-ms-original-file: specification/mysql/resource-manager/Microsoft.DBforMySQL/Backups/preview/2023-10-01-preview/examples/BackupPut.json
 */
async function createBackupForAServer() {
  const subscriptionId =
    process.env["MYSQL_SUBSCRIPTION_ID"] || "ffffffff-ffff-ffff-ffff-ffffffffffff";
  const resourceGroupName = process.env["MYSQL_RESOURCE_GROUP"] || "TestGroup";
  const serverName = "mysqltestserver";
  const backupName = "mybackup";
  const credential = new DefaultAzureCredential();
  const client = new MySQLManagementFlexibleServerClient(credential, subscriptionId);
  const result = await client.backups.put(resourceGroupName, serverName, backupName);
  console.log(result);
}

async function main() {
  await createBackupForAServer();
}

main().catch(console.error);
