/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import { ContainerServiceClient } from "@azure/arm-containerservice";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Upgrading the node image version of an agent pool applies the newest OS and runtime updates to the nodes. AKS provides one new image per week with the latest updates. For more details on node image versions, see: https://learn.microsoft.com/azure/aks/node-image-upgrade
 *
 * @summary Upgrading the node image version of an agent pool applies the newest OS and runtime updates to the nodes. AKS provides one new image per week with the latest updates. For more details on node image versions, see: https://learn.microsoft.com/azure/aks/node-image-upgrade
 * x-ms-original-file: specification/containerservice/resource-manager/Microsoft.ContainerService/aks/preview/2024-09-02-preview/examples/AgentPoolsUpgradeNodeImageVersion.json
 */
async function upgradeAgentPoolNodeImageVersion(): Promise<void> {
  const subscriptionId =
    process.env["CONTAINERSERVICE_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName =
    process.env["CONTAINERSERVICE_RESOURCE_GROUP"] || "rg1";
  const resourceName = "clustername1";
  const agentPoolName = "agentpool1";
  const credential = new DefaultAzureCredential();
  const client = new ContainerServiceClient(credential, subscriptionId);
  const result = await client.agentPools.beginUpgradeNodeImageVersionAndWait(
    resourceGroupName,
    resourceName,
    agentPoolName,
  );
  console.log(result);
}

async function main(): Promise<void> {
  upgradeAgentPoolNodeImageVersion();
}

main().catch(console.error);
