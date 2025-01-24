/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import { InformaticaDataManagement } from "@azure/arm-informaticadatamanagement";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Starts a failed runtime resource
 *
 * @summary Starts a failed runtime resource
 * x-ms-original-file: specification/informatica/resource-manager/Informatica.DataManagement/stable/2024-05-08/examples/ServerlessRuntimes_StartFailedServerlessRuntime_MaximumSet_Gen.json
 */
async function serverlessRuntimesStartFailedServerlessRuntime() {
  const subscriptionId =
    process.env["INFORMATICA_SUBSCRIPTION_ID"] || "3599DA28-E346-4D9F-811E-189C0445F0FE";
  const resourceGroupName = process.env["INFORMATICA_RESOURCE_GROUP"] || "rgopenapi";
  const organizationName = "9M4";
  const serverlessRuntimeName = "-25-G_";
  const credential = new DefaultAzureCredential();
  const client = new InformaticaDataManagement(credential, subscriptionId);
  const result = await client.serverlessRuntimes.startFailedServerlessRuntime(
    resourceGroupName,
    organizationName,
    serverlessRuntimeName,
  );
  console.log(result);
}

async function main() {
  await serverlessRuntimesStartFailedServerlessRuntime();
}

main().catch(console.error);
