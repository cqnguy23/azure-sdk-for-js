/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import type { Site } from "@azure/arm-appservice";
import { WebSiteManagementClient } from "@azure/arm-appservice";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Description for Creates a new web, mobile, or API app in an existing resource group, or updates an existing app.
 *
 * @summary Description for Creates a new web, mobile, or API app in an existing resource group, or updates an existing app.
 * x-ms-original-file: specification/web/resource-manager/Microsoft.Web/stable/2023-12-01/examples/CloneWebApp.json
 */
async function cloneWebApp(): Promise<void> {
  const subscriptionId =
    process.env["APPSERVICE_SUBSCRIPTION_ID"] || "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName = process.env["APPSERVICE_RESOURCE_GROUP"] || "testrg123";
  const name = "sitef6141";
  const siteEnvelope: Site = {
    cloningInfo: {
      appSettingsOverrides: { setting1: "NewValue1", setting3: "NewValue5" },
      cloneCustomHostNames: true,
      cloneSourceControl: true,
      configureLoadBalancing: false,
      hostingEnvironment:
        "/subscriptions/34adfa4f-cedf-4dc0-ba29-b6d1a69ab345/resourceGroups/testrg456/providers/Microsoft.Web/hostingenvironments/aseforsites",
      overwrite: false,
      sourceWebAppId:
        "/subscriptions/34adfa4f-cedf-4dc0-ba29-b6d1a69ab345/resourceGroups/testrg456/providers/Microsoft.Web/sites/srcsiteg478",
      sourceWebAppLocation: "West Europe",
    },
    kind: "app",
    location: "East US",
  };
  const credential = new DefaultAzureCredential();
  const client = new WebSiteManagementClient(credential, subscriptionId);
  const result = await client.webApps.beginCreateOrUpdateAndWait(
    resourceGroupName,
    name,
    siteEnvelope,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Description for Creates a new web, mobile, or API app in an existing resource group, or updates an existing app.
 *
 * @summary Description for Creates a new web, mobile, or API app in an existing resource group, or updates an existing app.
 * x-ms-original-file: specification/web/resource-manager/Microsoft.Web/stable/2023-12-01/examples/CreateOrUpdateFunctionAppFlexConsumption.json
 */
async function createOrUpdateFlexConsumptionFunctionApp(): Promise<void> {
  const subscriptionId =
    process.env["APPSERVICE_SUBSCRIPTION_ID"] || "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName = process.env["APPSERVICE_RESOURCE_GROUP"] || "testrg123";
  const name = "sitef6141";
  const siteEnvelope: Site = {
    functionAppConfig: {
      deployment: {
        storage: {
          type: "blobContainer",
          authentication: {
            type: "StorageAccountConnectionString",
            storageAccountConnectionStringName: "TheAppSettingName",
          },
          value: "https://storageAccountName.blob.core.windows.net/containername",
        },
      },
      runtime: { name: "python", version: "3.11" },
      scaleAndConcurrency: {
        instanceMemoryMB: 2048,
        maximumInstanceCount: 100,
      },
    },
    kind: "functionapp,linux",
    location: "East US",
    siteConfig: {
      appSettings: [
        {
          name: "AzureWebJobsStorage",
          value:
            "DefaultEndpointsProtocol=https;AccountName=StorageAccountName;AccountKey=Sanitized;EndpointSuffix=core.windows.net",
        },
        {
          name: "APPLICATIONINSIGHTS_CONNECTION_STRING",
          value: "InstrumentationKey=Sanitized;IngestionEndpoint=Sanitized;LiveEndpoint=Sanitized",
        },
      ],
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new WebSiteManagementClient(credential, subscriptionId);
  const result = await client.webApps.beginCreateOrUpdateAndWait(
    resourceGroupName,
    name,
    siteEnvelope,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Description for Creates a new web, mobile, or API app in an existing resource group, or updates an existing app.
 *
 * @summary Description for Creates a new web, mobile, or API app in an existing resource group, or updates an existing app.
 * x-ms-original-file: specification/web/resource-manager/Microsoft.Web/stable/2023-12-01/examples/CreateOrUpdateFunctionAppFlexConsumptionWithDetails.json
 */
async function createOrUpdateFlexConsumptionFunctionAppWithDetails(): Promise<void> {
  const subscriptionId =
    process.env["APPSERVICE_SUBSCRIPTION_ID"] || "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName = process.env["APPSERVICE_RESOURCE_GROUP"] || "testrg123";
  const name = "sitef6141";
  const siteEnvelope: Site = {
    functionAppConfig: {
      deployment: {
        storage: {
          type: "blobContainer",
          authentication: {
            type: "StorageAccountConnectionString",
            storageAccountConnectionStringName: "TheAppSettingName",
          },
          value: "https://storageAccountName.blob.core.windows.net/containername",
        },
      },
      runtime: { name: "python", version: "3.11" },
      scaleAndConcurrency: {
        alwaysReady: [{ name: "http", instanceCount: 2 }],
        instanceMemoryMB: 2048,
        maximumInstanceCount: 100,
        triggers: { http: { perInstanceConcurrency: 16 } },
      },
    },
    kind: "functionapp,linux",
    location: "East US",
    siteConfig: {
      appSettings: [
        {
          name: "AzureWebJobsStorage",
          value:
            "DefaultEndpointsProtocol=https;AccountName=StorageAccountName;AccountKey=Sanitized;EndpointSuffix=core.windows.net",
        },
        {
          name: "APPLICATIONINSIGHTS_CONNECTION_STRING",
          value: "InstrumentationKey=Sanitized;IngestionEndpoint=Sanitized;LiveEndpoint=Sanitized",
        },
      ],
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new WebSiteManagementClient(credential, subscriptionId);
  const result = await client.webApps.beginCreateOrUpdateAndWait(
    resourceGroupName,
    name,
    siteEnvelope,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Description for Creates a new web, mobile, or API app in an existing resource group, or updates an existing app.
 *
 * @summary Description for Creates a new web, mobile, or API app in an existing resource group, or updates an existing app.
 * x-ms-original-file: specification/web/resource-manager/Microsoft.Web/stable/2023-12-01/examples/CreateOrUpdateWebApp.json
 */
async function createOrUpdateWebApp(): Promise<void> {
  const subscriptionId =
    process.env["APPSERVICE_SUBSCRIPTION_ID"] || "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName = process.env["APPSERVICE_RESOURCE_GROUP"] || "testrg123";
  const name = "sitef6141";
  const siteEnvelope: Site = {
    kind: "app",
    location: "East US",
    serverFarmId:
      "/subscriptions/34adfa4f-cedf-4dc0-ba29-b6d1a69ab345/resourceGroups/testrg123/providers/Microsoft.Web/serverfarms/DefaultAsp",
  };
  const credential = new DefaultAzureCredential();
  const client = new WebSiteManagementClient(credential, subscriptionId);
  const result = await client.webApps.beginCreateOrUpdateAndWait(
    resourceGroupName,
    name,
    siteEnvelope,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await cloneWebApp();
  await createOrUpdateFlexConsumptionFunctionApp();
  await createOrUpdateFlexConsumptionFunctionAppWithDetails();
  await createOrUpdateWebApp();
}

main().catch(console.error);
