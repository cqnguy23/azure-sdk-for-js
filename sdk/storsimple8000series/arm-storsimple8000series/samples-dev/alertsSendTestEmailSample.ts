/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import type { SendTestAlertEmailRequest } from "@azure/arm-storsimple8000series";
import { StorSimple8000SeriesManagementClient } from "@azure/arm-storsimple8000series";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Sends a test alert email.
 *
 * @summary Sends a test alert email.
 * x-ms-original-file: specification/storsimple8000series/resource-manager/Microsoft.StorSimple/stable/2017-06-01/examples/AlertsSendTestEmail.json
 */
async function alertsSendTestEmail() {
  const subscriptionId = "4385cf00-2d3a-425a-832f-f4285b1c9dce";
  const deviceName = "Device05ForSDKTest";
  const resourceGroupName = "ResourceGroupForSDKTest";
  const managerName = "ManagerForSDKTest1";
  const parameters: SendTestAlertEmailRequest = {
    emailList: ["testemailid@contoso.com"],
  };
  const credential = new DefaultAzureCredential();
  const client = new StorSimple8000SeriesManagementClient(credential, subscriptionId);
  const result = await client.alerts.sendTestEmail(
    deviceName,
    resourceGroupName,
    managerName,
    parameters,
  );
  console.log(result);
}

alertsSendTestEmail().catch(console.error);
