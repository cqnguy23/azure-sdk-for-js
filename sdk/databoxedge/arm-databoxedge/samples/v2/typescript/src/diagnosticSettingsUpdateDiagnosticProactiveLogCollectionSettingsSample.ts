/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import {
  DiagnosticProactiveLogCollectionSettings,
  DataBoxEdgeManagementClient
} from "@azure/arm-databoxedge";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Updates the proactive log collection settings on a Data Box Edge/Data Box Gateway device.
 *
 * @summary Updates the proactive log collection settings on a Data Box Edge/Data Box Gateway device.
 * x-ms-original-file: specification/databoxedge/resource-manager/Microsoft.DataBoxEdge/stable/2021-06-01/examples/UpdateDiagnosticProactiveLogCollectionSettings.json
 */
async function updateDiagnosticProactiveLogCollectionSettings() {
  const subscriptionId = "4385cf00-2d3a-425a-832f-f4285b1c9dce";
  const deviceName = "testedgedevice";
  const resourceGroupName = "GroupForEdgeAutomation";
  const proactiveLogCollectionSettings: DiagnosticProactiveLogCollectionSettings = {
    userConsent: "Enabled"
  };
  const credential = new DefaultAzureCredential();
  const client = new DataBoxEdgeManagementClient(credential, subscriptionId);
  const result = await client.diagnosticSettings.beginUpdateDiagnosticProactiveLogCollectionSettingsAndWait(
    deviceName,
    resourceGroupName,
    proactiveLogCollectionSettings
  );
  console.log(result);
}

updateDiagnosticProactiveLogCollectionSettings().catch(console.error);
