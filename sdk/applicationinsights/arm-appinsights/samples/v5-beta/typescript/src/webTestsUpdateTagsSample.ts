/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import {
  TagsResource,
  ApplicationInsightsManagementClient
} from "@azure/arm-appinsights";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Creates or updates an Application Insights web test definition.
 *
 * @summary Creates or updates an Application Insights web test definition.
 * x-ms-original-file: specification/applicationinsights/resource-manager/Microsoft.Insights/stable/2015-05-01/examples/WebTestUpdateTagsOnly.json
 */
async function webTestUpdateTags() {
  const subscriptionId = "subid";
  const resourceGroupName = "my-resource-group";
  const webTestName = "my-webtest-my-component";
  const webTestTags: TagsResource = {
    tags: {
      color: "AzureBlue",
      customField01: "This is a random value",
      systemType: "A08",
      "hiddenLink:/subscriptions/subid/resourceGroups/myResourceGroup/providers/MicrosoftInsights/components/myComponent":
        "Resource",
      "hiddenLink:/subscriptions/subid/resourceGroups/myResourceGroup/providers/MicrosoftWeb/sites/mytestwebapp":
        "Resource"
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new ApplicationInsightsManagementClient(
    credential,
    subscriptionId
  );
  const result = await client.webTests.updateTags(
    resourceGroupName,
    webTestName,
    webTestTags
  );
  console.log(result);
}

webTestUpdateTags().catch(console.error);
