/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import { SecurityCenter } from "@azure/arm-security";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Returns a monitored GitLab Project resource for a given fully-qualified group name and project name.
 *
 * @summary Returns a monitored GitLab Project resource for a given fully-qualified group name and project name.
 * x-ms-original-file: specification/security/resource-manager/Microsoft.Security/preview/2023-09-01-preview/examples/SecurityConnectorsDevOps/GetGitLabProjects_example.json
 */
async function getGitLabProjects() {
  const subscriptionId =
    process.env["SECURITY_SUBSCRIPTION_ID"] || "0806e1cd-cfda-4ff8-b99c-2b0af42cffd3";
  const resourceGroupName = process.env["SECURITY_RESOURCE_GROUP"] || "myRg";
  const securityConnectorName = "mySecurityConnectorName";
  const groupFQName = "myGitLabGroup$mySubGroup";
  const projectName = "myGitLabProject";
  const credential = new DefaultAzureCredential();
  const client = new SecurityCenter(credential, subscriptionId);
  const result = await client.gitLabProjects.get(
    resourceGroupName,
    securityConnectorName,
    groupFQName,
    projectName,
  );
  console.log(result);
}

async function main() {
  await getGitLabProjects();
}

main().catch(console.error);
