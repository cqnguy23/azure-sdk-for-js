/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import type { TriggerResource } from "@azure/arm-datafactory";
import { DataFactoryManagementClient } from "@azure/arm-datafactory";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Creates or updates a trigger.
 *
 * @summary Creates or updates a trigger.
 * x-ms-original-file: specification/datafactory/resource-manager/Microsoft.DataFactory/stable/2018-06-01/examples/Triggers_Create.json
 */
async function triggersCreate(): Promise<void> {
  const subscriptionId =
    process.env["DATAFACTORY_SUBSCRIPTION_ID"] || "12345678-1234-1234-1234-12345678abc";
  const resourceGroupName = process.env["DATAFACTORY_RESOURCE_GROUP"] || "exampleResourceGroup";
  const factoryName = "exampleFactoryName";
  const triggerName = "exampleTrigger";
  const trigger: TriggerResource = {
    properties: {
      type: "ScheduleTrigger",
      pipelines: [
        {
          parameters: { outputBlobNameList: ["exampleoutput.csv"] },
          pipelineReference: {
            type: "PipelineReference",
            referenceName: "examplePipeline",
          },
        },
      ],
      recurrence: {
        endTime: new Date("2018-06-16T00:55:13.8441801Z"),
        frequency: "Minute",
        interval: 4,
        startTime: new Date("2018-06-16T00:39:13.8441801Z"),
        timeZone: "UTC",
      },
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new DataFactoryManagementClient(credential, subscriptionId);
  const result = await client.triggers.createOrUpdate(
    resourceGroupName,
    factoryName,
    triggerName,
    trigger,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or updates a trigger.
 *
 * @summary Creates or updates a trigger.
 * x-ms-original-file: specification/datafactory/resource-manager/Microsoft.DataFactory/stable/2018-06-01/examples/Triggers_Update.json
 */
async function triggersUpdate(): Promise<void> {
  const subscriptionId =
    process.env["DATAFACTORY_SUBSCRIPTION_ID"] || "12345678-1234-1234-1234-12345678abc";
  const resourceGroupName = process.env["DATAFACTORY_RESOURCE_GROUP"] || "exampleResourceGroup";
  const factoryName = "exampleFactoryName";
  const triggerName = "exampleTrigger";
  const trigger: TriggerResource = {
    properties: {
      type: "ScheduleTrigger",
      description: "Example description",
      pipelines: [
        {
          parameters: { outputBlobNameList: ["exampleoutput.csv"] },
          pipelineReference: {
            type: "PipelineReference",
            referenceName: "examplePipeline",
          },
        },
      ],
      recurrence: {
        endTime: new Date("2018-06-16T00:55:14.905167Z"),
        frequency: "Minute",
        interval: 4,
        startTime: new Date("2018-06-16T00:39:14.905167Z"),
        timeZone: "UTC",
      },
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new DataFactoryManagementClient(credential, subscriptionId);
  const result = await client.triggers.createOrUpdate(
    resourceGroupName,
    factoryName,
    triggerName,
    trigger,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await triggersCreate();
  await triggersUpdate();
}

main().catch(console.error);
