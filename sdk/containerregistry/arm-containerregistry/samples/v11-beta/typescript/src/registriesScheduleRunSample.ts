/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import {
  DockerBuildRequest,
  EncodedTaskRunRequest,
  FileTaskRunRequest,
  TaskRunRequest,
  ContainerRegistryManagementClient
} from "@azure/arm-containerregistry";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Schedules a new run based on the request parameters and add it to the run queue.
 *
 * @summary Schedules a new run based on the request parameters and add it to the run queue.
 * x-ms-original-file: specification/containerregistry/resource-manager/Microsoft.ContainerRegistry/preview/2019-06-01-preview/examples/RegistriesScheduleRun.json
 */
async function registriesScheduleRun(): Promise<void> {
  const subscriptionId =
    process.env["CONTAINERREGISTRY_SUBSCRIPTION_ID"] ||
    "4385cf00-2d3a-425a-832f-f4285b1c9dce";
  const resourceGroupName =
    process.env["CONTAINERREGISTRY_RESOURCE_GROUP"] || "myResourceGroup";
  const registryName = "myRegistry";
  const runRequest: DockerBuildRequest = {
    type: "DockerBuildRequest",
    agentConfiguration: { cpu: 2 },
    arguments: [
      { name: "mytestargument", isSecret: false, value: "mytestvalue" },
      {
        name: "mysecrettestargument",
        isSecret: true,
        value: "mysecrettestvalue"
      }
    ],
    dockerFilePath: "DockerFile",
    imageNames: ["azurerest:testtag"],
    isArchiveEnabled: true,
    isPushEnabled: true,
    noCache: true,
    platform: { architecture: "amd64", os: "Linux" },
    sourceLocation:
      "https://myaccount.blob.core.windows.net/sascontainer/source.zip?sv=2015-04-05&st=2015-04-29T22%3A18%3A26Z&se=2015-04-30T02%3A23%3A26Z&sr=b&sp=rw&sip=168.1.5.60-168.1.5.70&spr=https&sig=Z%2FRHIX5Xcg0Mq2rqI3OlWTjEg2tYkboXr1P9ZUXDtkk%3D"
  };
  const credential = new DefaultAzureCredential();
  const client = new ContainerRegistryManagementClient(
    credential,
    subscriptionId
  );
  const result = await client.registries.beginScheduleRunAndWait(
    resourceGroupName,
    registryName,
    runRequest
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Schedules a new run based on the request parameters and add it to the run queue.
 *
 * @summary Schedules a new run based on the request parameters and add it to the run queue.
 * x-ms-original-file: specification/containerregistry/resource-manager/Microsoft.ContainerRegistry/preview/2019-06-01-preview/examples/RegistriesScheduleRun_EncodedTaskRun.json
 */
async function registriesScheduleRunEncodedTaskRun(): Promise<void> {
  const subscriptionId =
    process.env["CONTAINERREGISTRY_SUBSCRIPTION_ID"] ||
    "4385cf00-2d3a-425a-832f-f4285b1c9dce";
  const resourceGroupName =
    process.env["CONTAINERREGISTRY_RESOURCE_GROUP"] || "myResourceGroup";
  const registryName = "myRegistry";
  const runRequest: EncodedTaskRunRequest = {
    type: "EncodedTaskRunRequest",
    agentConfiguration: { cpu: 2 },
    encodedTaskContent:
      "c3RlcHM6Cnt7IGlmIFZhbHVlcy5lbnZpcm9ubWVudCA9PSAncHJvZCcgfX0KICAtIHJ1bjogcHJvZCBzZXR1cAp7eyBlbHNlIGlmIFZhbHVlcy5lbnZpcm9ubWVudCA9PSAnc3RhZ2luZycgfX0KICAtIHJ1bjogc3RhZ2luZyBzZXR1cAp7eyBlbHNlIH19CiAgLSBydW46IGRlZmF1bHQgc2V0dXAKe3sgZW5kIH19CgogIC0gcnVuOiBidWlsZCAtdCBGYW5jeVRoaW5nOnt7LlZhbHVlcy5lbnZpcm9ubWVudH19LXt7LlZhbHVlcy52ZXJzaW9ufX0gLgoKcHVzaDogWydGYW5jeVRoaW5nOnt7LlZhbHVlcy5lbnZpcm9ubWVudH19LXt7LlZhbHVlcy52ZXJzaW9ufX0nXQ==",
    encodedValuesContent: "ZW52aXJvbm1lbnQ6IHByb2QKdmVyc2lvbjogMQ==",
    platform: { os: "Linux" },
    values: [
      { name: "mytestargument", isSecret: false, value: "mytestvalue" },
      {
        name: "mysecrettestargument",
        isSecret: true,
        value: "mysecrettestvalue"
      }
    ]
  };
  const credential = new DefaultAzureCredential();
  const client = new ContainerRegistryManagementClient(
    credential,
    subscriptionId
  );
  const result = await client.registries.beginScheduleRunAndWait(
    resourceGroupName,
    registryName,
    runRequest
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Schedules a new run based on the request parameters and add it to the run queue.
 *
 * @summary Schedules a new run based on the request parameters and add it to the run queue.
 * x-ms-original-file: specification/containerregistry/resource-manager/Microsoft.ContainerRegistry/preview/2019-06-01-preview/examples/RegistriesScheduleRun_FileTaskRun.json
 */
async function registriesScheduleRunFileTaskRun(): Promise<void> {
  const subscriptionId =
    process.env["CONTAINERREGISTRY_SUBSCRIPTION_ID"] ||
    "4385cf00-2d3a-425a-832f-f4285b1c9dce";
  const resourceGroupName =
    process.env["CONTAINERREGISTRY_RESOURCE_GROUP"] || "myResourceGroup";
  const registryName = "myRegistry";
  const runRequest: FileTaskRunRequest = {
    type: "FileTaskRunRequest",
    agentConfiguration: { cpu: 2 },
    platform: { os: "Linux" },
    sourceLocation:
      "https://myaccount.blob.core.windows.net/sascontainer/source.zip?sv=2015-04-05&st=2015-04-29T22%3A18%3A26Z&se=2015-04-30T02%3A23%3A26Z&sr=b&sp=rw&sip=168.1.5.60-168.1.5.70&spr=https&sig=Z%2FRHIX5Xcg0Mq2rqI3OlWTjEg2tYkboXr1P9ZUXDtkk%3D",
    taskFilePath: "acb.yaml",
    values: [
      { name: "mytestargument", isSecret: false, value: "mytestvalue" },
      {
        name: "mysecrettestargument",
        isSecret: true,
        value: "mysecrettestvalue"
      }
    ],
    valuesFilePath: "prod-values.yaml"
  };
  const credential = new DefaultAzureCredential();
  const client = new ContainerRegistryManagementClient(
    credential,
    subscriptionId
  );
  const result = await client.registries.beginScheduleRunAndWait(
    resourceGroupName,
    registryName,
    runRequest
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Schedules a new run based on the request parameters and add it to the run queue.
 *
 * @summary Schedules a new run based on the request parameters and add it to the run queue.
 * x-ms-original-file: specification/containerregistry/resource-manager/Microsoft.ContainerRegistry/preview/2019-06-01-preview/examples/RegistriesScheduleRun_Task.json
 */
async function registriesScheduleRunTask(): Promise<void> {
  const subscriptionId =
    process.env["CONTAINERREGISTRY_SUBSCRIPTION_ID"] ||
    "4385cf00-2d3a-425a-832f-f4285b1c9dce";
  const resourceGroupName =
    process.env["CONTAINERREGISTRY_RESOURCE_GROUP"] || "myResourceGroup";
  const registryName = "myRegistry";
  const runRequest: TaskRunRequest = {
    type: "TaskRunRequest",
    overrideTaskStepProperties: {
      arguments: [
        { name: "mytestargument", isSecret: false, value: "mytestvalue" },
        {
          name: "mysecrettestargument",
          isSecret: true,
          value: "mysecrettestvalue"
        }
      ],
      file: "overriddenDockerfile",
      target: "build",
      updateTriggerToken: "aGVsbG8gd29ybGQ=",
      values: [
        { name: "mytestname", isSecret: false, value: "mytestvalue" },
        { name: "mysecrettestname", isSecret: true, value: "mysecrettestvalue" }
      ]
    },
    taskId: "myTask"
  };
  const credential = new DefaultAzureCredential();
  const client = new ContainerRegistryManagementClient(
    credential,
    subscriptionId
  );
  const result = await client.registries.beginScheduleRunAndWait(
    resourceGroupName,
    registryName,
    runRequest
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Schedules a new run based on the request parameters and add it to the run queue.
 *
 * @summary Schedules a new run based on the request parameters and add it to the run queue.
 * x-ms-original-file: specification/containerregistry/resource-manager/Microsoft.ContainerRegistry/preview/2019-06-01-preview/examples/RegistriesScheduleRun_FileTask_WithCustomCredentials.json
 */
async function registriesScheduleRunTaskWithCustomCredentials(): Promise<void> {
  const subscriptionId =
    process.env["CONTAINERREGISTRY_SUBSCRIPTION_ID"] ||
    "4385cf00-2d3a-425a-832f-f4285b1c9dce";
  const resourceGroupName =
    process.env["CONTAINERREGISTRY_RESOURCE_GROUP"] || "myResourceGroup";
  const registryName = "myRegistry";
  const runRequest: FileTaskRunRequest = {
    type: "FileTaskRunRequest",
    credentials: {
      customRegistries: {
        myregistryAzurecrIo: {
          password: { type: "Opaque", value: "***" },
          userName: { type: "Opaque", value: "reg1" }
        }
      },
      sourceRegistry: { loginMode: "Default" }
    },
    platform: { os: "Linux" },
    taskFilePath: "acb.yaml",
    values: [
      { name: "mytestargument", isSecret: false, value: "mytestvalue" },
      {
        name: "mysecrettestargument",
        isSecret: true,
        value: "mysecrettestvalue"
      }
    ]
  };
  const credential = new DefaultAzureCredential();
  const client = new ContainerRegistryManagementClient(
    credential,
    subscriptionId
  );
  const result = await client.registries.beginScheduleRunAndWait(
    resourceGroupName,
    registryName,
    runRequest
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Schedules a new run based on the request parameters and add it to the run queue.
 *
 * @summary Schedules a new run based on the request parameters and add it to the run queue.
 * x-ms-original-file: specification/containerregistry/resource-manager/Microsoft.ContainerRegistry/preview/2019-06-01-preview/examples/RegistriesScheduleRun_WithCustomCredentials.json
 */
async function registriesScheduleRunWithCustomCredentials(): Promise<void> {
  const subscriptionId =
    process.env["CONTAINERREGISTRY_SUBSCRIPTION_ID"] ||
    "4385cf00-2d3a-425a-832f-f4285b1c9dce";
  const resourceGroupName =
    process.env["CONTAINERREGISTRY_RESOURCE_GROUP"] || "myResourceGroup";
  const registryName = "myRegistry";
  const runRequest: DockerBuildRequest = {
    type: "DockerBuildRequest",
    agentConfiguration: { cpu: 2 },
    arguments: [
      { name: "mytestargument", isSecret: false, value: "mytestvalue" },
      {
        name: "mysecrettestargument",
        isSecret: true,
        value: "mysecrettestvalue"
      }
    ],
    credentials: {
      customRegistries: {
        myregistryAzurecrIo: {
          password: { type: "Opaque", value: "***" },
          userName: { type: "Opaque", value: "reg1" }
        },
        myregistry2AzurecrIo: {
          password: { type: "Opaque", value: "***" },
          userName: { type: "Opaque", value: "reg2" }
        }
      },
      sourceRegistry: { loginMode: "Default" }
    },
    dockerFilePath: "DockerFile",
    imageNames: ["azurerest:testtag"],
    isArchiveEnabled: true,
    isPushEnabled: true,
    noCache: true,
    platform: { architecture: "amd64", os: "Linux" },
    sourceLocation:
      "https://myaccount.blob.core.windows.net/sascontainer/source.zip?sv=2015-04-05&st=2015-04-29T22%3A18%3A26Z&se=2015-04-30T02%3A23%3A26Z&sr=b&sp=rw&sip=168.1.5.60-168.1.5.70&spr=https&sig=Z%2FRHIX5Xcg0Mq2rqI3OlWTjEg2tYkboXr1P9ZUXDtkk%3D",
    target: "stage1"
  };
  const credential = new DefaultAzureCredential();
  const client = new ContainerRegistryManagementClient(
    credential,
    subscriptionId
  );
  const result = await client.registries.beginScheduleRunAndWait(
    resourceGroupName,
    registryName,
    runRequest
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Schedules a new run based on the request parameters and add it to the run queue.
 *
 * @summary Schedules a new run based on the request parameters and add it to the run queue.
 * x-ms-original-file: specification/containerregistry/resource-manager/Microsoft.ContainerRegistry/preview/2019-06-01-preview/examples/RegistriesScheduleRun_WithLogTemplate.json
 */
async function registriesScheduleRunWithLogTemplate(): Promise<void> {
  const subscriptionId =
    process.env["CONTAINERREGISTRY_SUBSCRIPTION_ID"] ||
    "4385cf00-2d3a-425a-832f-f4285b1c9dce";
  const resourceGroupName =
    process.env["CONTAINERREGISTRY_RESOURCE_GROUP"] || "myResourceGroup";
  const registryName = "myRegistry";
  const runRequest: DockerBuildRequest = {
    type: "DockerBuildRequest",
    agentConfiguration: { cpu: 2 },
    arguments: [
      { name: "mytestargument", isSecret: false, value: "mytestvalue" },
      {
        name: "mysecrettestargument",
        isSecret: true,
        value: "mysecrettestvalue"
      }
    ],
    dockerFilePath: "DockerFile",
    imageNames: ["azurerest:testtag"],
    isArchiveEnabled: true,
    isPushEnabled: true,
    logTemplate: "acr/tasks:{{.Run.OS}}",
    noCache: true,
    platform: { architecture: "amd64", os: "Linux" },
    sourceLocation:
      "https://myaccount.blob.core.windows.net/sascontainer/source.zip?sv=2015-04-05&st=2015-04-29T22%3A18%3A26Z&se=2015-04-30T02%3A23%3A26Z&sr=b&sp=rw&sip=168.1.5.60-168.1.5.70&spr=https&sig=Z%2FRHIX5Xcg0Mq2rqI3OlWTjEg2tYkboXr1P9ZUXDtkk%3D"
  };
  const credential = new DefaultAzureCredential();
  const client = new ContainerRegistryManagementClient(
    credential,
    subscriptionId
  );
  const result = await client.registries.beginScheduleRunAndWait(
    resourceGroupName,
    registryName,
    runRequest
  );
  console.log(result);
}

async function main(): Promise<void> {
  registriesScheduleRun();
  registriesScheduleRunEncodedTaskRun();
  registriesScheduleRunFileTaskRun();
  registriesScheduleRunTask();
  registriesScheduleRunTaskWithCustomCredentials();
  registriesScheduleRunWithCustomCredentials();
  registriesScheduleRunWithLogTemplate();
}

main().catch(console.error);
