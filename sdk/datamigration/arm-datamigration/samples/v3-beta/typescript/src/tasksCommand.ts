/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
/**
 * This sample demonstrates how to The tasks resource is a nested, proxy-only resource representing work performed by a DMS instance. This method executes a command on a running task.
 *
 * @summary The tasks resource is a nested, proxy-only resource representing work performed by a DMS instance. This method executes a command on a running task.
 * x-ms-original-file: specification/datamigration/resource-manager/Microsoft.DataMigration/preview/2021-10-30-preview/examples/Tasks_Command.json
 */
import {
  MigrateSyncCompleteCommandProperties,
  DataMigrationManagementClient
} from "@azure/arm-datamigration";
import { DefaultAzureCredential } from "@azure/identity";

async function tasksCommand() {
  const subscriptionId = "fc04246f-04c5-437e-ac5e-206a19e7193f";
  const groupName = "DmsSdkRg";
  const serviceName = "DmsSdkService";
  const projectName = "DmsSdkProject";
  const taskName = "DmsSdkTask";
  const parameters: MigrateSyncCompleteCommandProperties = {
    commandType: "Migrate.Sync.Complete.Database",
    input: { databaseName: "TestDatabase" }
  };
  const credential = new DefaultAzureCredential();
  const client = new DataMigrationManagementClient(credential, subscriptionId);
  const result = await client.tasks.command(
    groupName,
    serviceName,
    projectName,
    taskName,
    parameters
  );
  console.log(result);
}

tasksCommand().catch(console.error);
