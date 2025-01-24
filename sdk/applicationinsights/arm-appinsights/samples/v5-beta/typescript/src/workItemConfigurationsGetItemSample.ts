/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import { ApplicationInsightsManagementClient } from "@azure/arm-appinsights";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Gets specified work item configuration for an Application Insights component.
 *
 * @summary Gets specified work item configuration for an Application Insights component.
 * x-ms-original-file: specification/applicationinsights/resource-manager/Microsoft.Insights/stable/2015-05-01/examples/WorkItemConfigGet.json
 */
async function workItemConfigurationsGetDefault() {
  const subscriptionId = "subid";
  const resourceGroupName = "my-resource-group";
  const resourceName = "my-component";
  const workItemConfigId = "Visual Studio Team Services";
  const credential = new DefaultAzureCredential();
  const client = new ApplicationInsightsManagementClient(
    credential,
    subscriptionId
  );
  const result = await client.workItemConfigurations.getItem(
    resourceGroupName,
    resourceName,
    workItemConfigId
  );
  console.log(result);
}

workItemConfigurationsGetDefault().catch(console.error);
