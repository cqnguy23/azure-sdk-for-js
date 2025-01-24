/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import {
  UserAccessPolicy,
  DataFactoryManagementClient,
} from "@azure/arm-datafactory";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Get Data Plane access.
 *
 * @summary Get Data Plane access.
 * x-ms-original-file: specification/datafactory/resource-manager/Microsoft.DataFactory/stable/2018-06-01/examples/Factories_GetDataPlaneAccess.json
 */
async function factoriesGetDataPlaneAccess() {
  const subscriptionId =
    process.env["DATAFACTORY_SUBSCRIPTION_ID"] ||
    "12345678-1234-1234-1234-12345678abc";
  const resourceGroupName =
    process.env["DATAFACTORY_RESOURCE_GROUP"] || "exampleResourceGroup";
  const factoryName = "exampleFactoryName";
  const policy: UserAccessPolicy = {
    accessResourcePath: "",
    expireTime: "2018-11-10T09:46:20.2659347Z",
    permissions: "r",
    profileName: "DefaultProfile",
    startTime: "2018-11-10T02:46:20.2659347Z",
  };
  const credential = new DefaultAzureCredential();
  const client = new DataFactoryManagementClient(credential, subscriptionId);
  const result = await client.factories.getDataPlaneAccess(
    resourceGroupName,
    factoryName,
    policy,
  );
  console.log(result);
}

async function main() {
  factoriesGetDataPlaneAccess();
}

main().catch(console.error);
