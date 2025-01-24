/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import type { GenerateAutonomousDatabaseWalletDetails } from "@azure/arm-oracledatabase";
import { OracleDatabaseManagementClient } from "@azure/arm-oracledatabase";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Generate wallet action on Autonomous Database
 *
 * @summary Generate wallet action on Autonomous Database
 * x-ms-original-file: specification/oracle/resource-manager/Oracle.Database/stable/2023-09-01/examples/autonomousDatabase_generateWallet.json
 */
async function generateWalletActionOnAutonomousDatabase() {
  const subscriptionId =
    process.env["ORACLEDATABASE_SUBSCRIPTION_ID"] || "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = process.env["ORACLEDATABASE_RESOURCE_GROUP"] || "rg000";
  const autonomousdatabasename = "databasedb1";
  const body: GenerateAutonomousDatabaseWalletDetails = {
    generateType: "Single",
    isRegional: false,
    password: "SecretPlaceholder",
  };
  const credential = new DefaultAzureCredential();
  const client = new OracleDatabaseManagementClient(credential, subscriptionId);
  const result = await client.autonomousDatabases.generateWallet(
    resourceGroupName,
    autonomousdatabasename,
    body,
  );
  console.log(result);
}

async function main() {
  await generateWalletActionOnAutonomousDatabase();
}

main().catch(console.error);
