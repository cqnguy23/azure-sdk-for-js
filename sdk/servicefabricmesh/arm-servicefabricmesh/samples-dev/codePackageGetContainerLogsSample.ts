/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import { ServiceFabricMeshManagementClient } from "@azure/arm-servicefabricmesh";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Gets the logs for the container of the specified code package of the service replica.
 *
 * @summary Gets the logs for the container of the specified code package of the service replica.
 * x-ms-original-file: specification/servicefabricmesh/resource-manager/Microsoft.ServiceFabricMesh/preview/2018-09-01-preview/examples/applications/services/replicas/codepackages/get_logs.json
 */
async function getContainerLogs() {
  const subscriptionId =
    process.env["SERVICEFABRICMESH_SUBSCRIPTION_ID"] || "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = process.env["SERVICEFABRICMESH_RESOURCE_GROUP"] || "sbz_demo";
  const applicationResourceName = "sbzDocApp";
  const serviceResourceName = "sbzDocService";
  const replicaName = "0";
  const codePackageName = "sbzDocCode";
  const credential = new DefaultAzureCredential();
  const client = new ServiceFabricMeshManagementClient(credential, subscriptionId);
  const result = await client.codePackage.getContainerLogs(
    resourceGroupName,
    applicationResourceName,
    serviceResourceName,
    replicaName,
    codePackageName,
  );
  console.log(result);
}

async function main() {
  await getContainerLogs();
}

main().catch(console.error);
