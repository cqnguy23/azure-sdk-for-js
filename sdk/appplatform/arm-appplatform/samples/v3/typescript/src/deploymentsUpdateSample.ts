/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import {
  DeploymentResource,
  AppPlatformManagementClient
} from "@azure/arm-appplatform";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Operation to update an exiting Deployment.
 *
 * @summary Operation to update an exiting Deployment.
 * x-ms-original-file: specification/appplatform/resource-manager/Microsoft.AppPlatform/stable/2023-12-01/examples/Deployments_Update.json
 */
async function deploymentsUpdate() {
  const subscriptionId =
    process.env["APPPLATFORM_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName =
    process.env["APPPLATFORM_RESOURCE_GROUP"] || "myResourceGroup";
  const serviceName = "myservice";
  const appName = "myapp";
  const deploymentName = "mydeployment";
  const deploymentResource: DeploymentResource = {
    properties: {
      instances: [],
      source: {
        type: "Source",
        artifactSelector: "sub-module-1",
        relativePath:
          "resources/a172cedcae47474b615c54d510a5d84a8dea3032e958587430b413538be3f333-2019082605-e3095339-1723-44b7-8b5e-31b1003978bc",
        version: "1.0"
      }
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new AppPlatformManagementClient(credential, subscriptionId);
  const result = await client.deployments.beginUpdateAndWait(
    resourceGroupName,
    serviceName,
    appName,
    deploymentName,
    deploymentResource
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Operation to update an exiting Deployment.
 *
 * @summary Operation to update an exiting Deployment.
 * x-ms-original-file: specification/appplatform/resource-manager/Microsoft.AppPlatform/stable/2023-12-01/examples/Deployments_Update_CustomContainer.json
 */
async function deploymentsUpdateCustomContainer() {
  const subscriptionId =
    process.env["APPPLATFORM_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName =
    process.env["APPPLATFORM_RESOURCE_GROUP"] || "myResourceGroup";
  const serviceName = "myservice";
  const appName = "myapp";
  const deploymentName = "mydeployment";
  const deploymentResource: DeploymentResource = {
    properties: {
      instances: [],
      source: {
        type: "Container",
        customContainer: {
          args: ["-c", "while true; do echo hello; sleep 10;done"],
          command: ["/bin/sh"],
          containerImage: "myNewContainerImage:v1",
          imageRegistryCredential: {
            password: "<myNewPassword>",
            username: "myNewUsername"
          },
          server: "mynewacr.azurecr.io"
        }
      }
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new AppPlatformManagementClient(credential, subscriptionId);
  const result = await client.deployments.beginUpdateAndWait(
    resourceGroupName,
    serviceName,
    appName,
    deploymentName,
    deploymentResource
  );
  console.log(result);
}

async function main() {
  deploymentsUpdate();
  deploymentsUpdateCustomContainer();
}

main().catch(console.error);
