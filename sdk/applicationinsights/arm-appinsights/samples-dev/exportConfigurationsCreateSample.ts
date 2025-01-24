/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import type { ApplicationInsightsComponentExportRequest } from "@azure/arm-appinsights";
import { ApplicationInsightsManagementClient } from "@azure/arm-appinsights";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Create a Continuous Export configuration of an Application Insights component.
 *
 * @summary Create a Continuous Export configuration of an Application Insights component.
 * x-ms-original-file: specification/applicationinsights/resource-manager/Microsoft.Insights/stable/2015-05-01/examples/ExportConfigurationsPost.json
 */
async function exportConfigurationPost(): Promise<void> {
  const subscriptionId = "subid";
  const resourceGroupName = "my-resource-group";
  const resourceName = "my-component";
  const exportProperties: ApplicationInsightsComponentExportRequest = {
    destinationAccountId:
      "/subscriptions/subid/resourceGroups/my-resource-group/providers/Microsoft.ClassicStorage/storageAccounts/mystorageblob",
    destinationAddress:
      "https://mystorageblob.blob.core.windows.net/testexport?sv=2015-04-05&sr=c&sig=token",
    destinationStorageLocationId: "eastus",
    destinationStorageSubscriptionId: "subid",
    destinationType: "Blob",
    isEnabled: "true",
    notificationQueueEnabled: "false",
    notificationQueueUri: "",
    recordTypes:
      "Requests, Event, Exceptions, Metrics, PageViews, PageViewPerformance, Rdd, PerformanceCounters, Availability",
  };
  const credential = new DefaultAzureCredential();
  const client = new ApplicationInsightsManagementClient(credential, subscriptionId);
  const result = await client.exportConfigurations.create(
    resourceGroupName,
    resourceName,
    exportProperties,
  );
  console.log(result);
}

exportConfigurationPost().catch(console.error);
