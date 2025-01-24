/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import type { ConfigurationServiceResource } from "@azure/arm-appplatform";
import { AppPlatformManagementClient } from "@azure/arm-appplatform";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Create the default Application Configuration Service or update the existing Application Configuration Service.
 *
 * @summary Create the default Application Configuration Service or update the existing Application Configuration Service.
 * x-ms-original-file: specification/appplatform/resource-manager/Microsoft.AppPlatform/stable/2023-12-01/examples/ConfigurationServices_CreateOrUpdate.json
 */
async function configurationServicesCreateOrUpdate(): Promise<void> {
  const subscriptionId =
    process.env["APPPLATFORM_SUBSCRIPTION_ID"] || "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = process.env["APPPLATFORM_RESOURCE_GROUP"] || "myResourceGroup";
  const serviceName = "myservice";
  const configurationServiceName = "default";
  const configurationServiceResource: ConfigurationServiceResource = {
    properties: {
      settings: {
        gitProperty: {
          repositories: [
            {
              name: "fake",
              label: "master",
              patterns: ["app/dev"],
              uri: "https://github.com/fake-user/fake-repository",
            },
          ],
        },
      },
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new AppPlatformManagementClient(credential, subscriptionId);
  const result = await client.configurationServices.beginCreateOrUpdateAndWait(
    resourceGroupName,
    serviceName,
    configurationServiceName,
    configurationServiceResource,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await configurationServicesCreateOrUpdate();
}

main().catch(console.error);
