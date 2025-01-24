/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import { OracleDatabaseManagementClient } from "@azure/arm-oracledatabase";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to List AutonomousDatabaseBackup resources by AutonomousDatabase
 *
 * @summary List AutonomousDatabaseBackup resources by AutonomousDatabase
 * x-ms-original-file: specification/oracle/resource-manager/Oracle.Database/stable/2023-09-01/examples/autonomousDatabaseBackup_listByParent.json
 */
async function autonomousDatabaseBackupsListByAutonomousDatabase() {
  const subscriptionId =
    process.env["ORACLEDATABASE_SUBSCRIPTION_ID"] || "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = process.env["ORACLEDATABASE_RESOURCE_GROUP"] || "rg000";
  const autonomousdatabasename = "databasedb1";
  const credential = new DefaultAzureCredential();
  const client = new OracleDatabaseManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.autonomousDatabaseBackups.listByAutonomousDatabase(
    resourceGroupName,
    autonomousdatabasename,
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

/**
 * This sample demonstrates how to List AutonomousDatabaseBackup resources by AutonomousDatabase
 *
 * @summary List AutonomousDatabaseBackup resources by AutonomousDatabase
 * x-ms-original-file: specification/oracle/resource-manager/Oracle.Database/stable/2023-09-01/examples/autonomousDatabaseBackup_listByParent.json
 */
async function listAutonomousDatabaseBackupsByAutonomousDatabase() {
  const subscriptionId =
    process.env["ORACLEDATABASE_SUBSCRIPTION_ID"] || "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = process.env["ORACLEDATABASE_RESOURCE_GROUP"] || "rg000";
  const autonomousdatabasename = "databasedb1";
  const credential = new DefaultAzureCredential();
  const client = new OracleDatabaseManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.autonomousDatabaseBackups.listByAutonomousDatabase(
    resourceGroupName,
    autonomousdatabasename,
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  await autonomousDatabaseBackupsListByAutonomousDatabase();
  await listAutonomousDatabaseBackupsByAutonomousDatabase();
}

main().catch(console.error);
