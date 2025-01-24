/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import type { NotifyParameters } from "@azure/arm-devtestlabs";
import { DevTestLabsClient } from "@azure/arm-devtestlabs";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Send notification to provided channel.
 *
 * @summary Send notification to provided channel.
 * x-ms-original-file: specification/devtestlabs/resource-manager/Microsoft.DevTestLab/stable/2018-09-15/examples/NotificationChannels_Notify.json
 */
async function notificationChannelsNotify(): Promise<void> {
  const subscriptionId = "{subscriptionId}";
  const resourceGroupName = "resourceGroupName";
  const labName = "{labName}";
  const name = "{notificationChannelName}";
  const notifyParameters: NotifyParameters = {
    eventName: "AutoShutdown",
    jsonPayload:
      '{"eventType":"AutoShutdown","subscriptionId":"{subscriptionId}","resourceGroupName":"resourceGroupName","labName":"{labName}"}',
  };
  const credential = new DefaultAzureCredential();
  const client = new DevTestLabsClient(credential, subscriptionId);
  const result = await client.notificationChannels.notify(
    resourceGroupName,
    labName,
    name,
    notifyParameters,
  );
  console.log(result);
}

notificationChannelsNotify().catch(console.error);
