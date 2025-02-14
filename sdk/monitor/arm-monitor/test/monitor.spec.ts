/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import type { RecorderStartOptions } from "@azure-tools/test-recorder";
import { env, Recorder, isPlaybackMode } from "@azure-tools/test-recorder";
import { createTestCredential } from "@azure-tools/test-credential";
import { MonitorClient } from "../src/monitorClient.js";
import { LogicManagementClient } from "@azure/arm-logic";
import { StorageManagementClient } from "@azure/arm-storage";
import { EventHubManagementClient } from "@azure/arm-eventhub";
import { OperationalInsightsManagementClient } from "@azure/arm-operationalinsights";
import { describe, it, assert, beforeEach, afterEach } from "vitest";

const replaceableVariables: Record<string, string> = {
  SUBSCRIPTION_ID: "azure_subscription_id",
};

const recorderOptions: RecorderStartOptions = {
  envSetupForPlayback: replaceableVariables,
  removeCentralSanitizers: [
    "AZSDK3493", // .name in the body is not a secret and is listed below in the beforeEach section
    "AZSDK3430", // .id in the body is not a secret and is listed below in the beforeEach section
  ],
};

export const testPollingOptions = {
  updateIntervalInMs: isPlaybackMode() ? 0 : undefined,
};

describe("Monitor test", () => {
  let recorder: Recorder;
  let subscriptionId: string;
  let client: MonitorClient;
  let location: string;
  let resourceGroup: string;
  let workflowName: string;
  let storageAccountName: string;
  let namespaceName: string;
  let authorizationRuleName: string;
  let eventhubName: string;
  let workspaceName: string;
  let logProfileName: string;
  let diagnosticName: string;
  let logic_client: LogicManagementClient;
  let storage_client: StorageManagementClient;
  let eventhub_client: EventHubManagementClient;
  let op_client: OperationalInsightsManagementClient;
  let workflowsId: string;
  let storageId: string;
  let authorizationId: string;
  let workspaceId: string;
  let azureMonitorWorkspaceName: string;

  beforeEach(async (ctx) => {
    recorder = new Recorder(ctx);
    await recorder.start(recorderOptions);
    subscriptionId = env.SUBSCRIPTION_ID || "";
    // This is an example of how the environment variables are used
    const credential = createTestCredential();
    client = new MonitorClient(credential, subscriptionId, recorder.configureClientOptions({}));
    logic_client = new LogicManagementClient(
      credential,
      subscriptionId,
      recorder.configureClientOptions({}),
    );
    storage_client = new StorageManagementClient(
      credential,
      subscriptionId,
      recorder.configureClientOptions({}),
    );
    eventhub_client = new EventHubManagementClient(
      credential,
      subscriptionId,
      recorder.configureClientOptions({}),
    );
    op_client = new OperationalInsightsManagementClient(
      credential,
      subscriptionId,
      recorder.configureClientOptions({}),
    );
    location = "eastus";
    resourceGroup = "myjstest";
    workflowName = "myworkflowxxx";
    storageAccountName = "mystorageaccountyyy1";
    namespaceName = "mynamespacexxx";
    eventhubName = "myeventhubxxx";
    workspaceName = "myworkspacexxx";
    authorizationRuleName = "myauthorizationRulexxx";
    logProfileName = "mylogProfilexxx";
    diagnosticName = "mydiagnosticxxxx";
    azureMonitorWorkspaceName = "myAzureMonitorWorkspace";
  });

  afterEach(async () => {
    await recorder.stop();
  });

  it("create parameters for diagnosticSettings", async () => {
    // workflows.createOrUpdate
    const res = await logic_client.workflows.createOrUpdate(resourceGroup, workflowName, {
      location: location,
      definition: {
        $schema:
          "https://schema.management.azure.com/providers/Microsoft.Logic/schemas/2016-06-01/workflowdefinition.json#",
        contentVersion: "1.0.0.0",
        parameters: {},
        triggers: {},
        actions: {},
        outputs: {},
      },
    });
    workflowsId = (res.id || "/").substring(1);

    // storageAccounts.beginCreateAndWait
    const storageaccount = await storage_client.storageAccounts.beginCreateAndWait(
      resourceGroup,
      storageAccountName,
      {
        sku: {
          name: "Standard_GRS",
        },
        kind: "StorageV2",
        location: "eastus",
        encryption: {
          services: {
            file: {
              keyType: "Account",
              enabled: true,
            },
            blob: {
              keyType: "Account",
              enabled: true,
            },
          },
          keySource: "Microsoft.Storage",
        },
        tags: {
          key1: "value1",
          key2: "value2",
        },
      },
      testPollingOptions,
    );
    storageId = storageaccount.id || "";

    // namespaces.beginCreateOrUpdateAndWait
    // namespaces.createOrUpdateAuthorizationRule
    const authorization = await eventhub_client.namespaces.createOrUpdateAuthorizationRule(
      resourceGroup,
      namespaceName,
      authorizationRuleName,
      { rights: ["Listen", "Send", "Manage"] },
    );
    authorizationId = authorization.id || "";

    // workspaces.beginCreateOrUpdateAndWait
    const workspace = await op_client.workspaces.beginCreateOrUpdateAndWait(
      resourceGroup,
      workspaceName,
      {
        sku: {
          name: "PerNode",
        },
        retentionInDays: 30,
        location: location,
        tags: {
          tag1: "value1",
        },
      },
      testPollingOptions,
    );
    workspaceId = workspace.id || "";
  });
  // skip this case as no data plane write permissions
  it.skip("eventhub create test", async () => {
    // eventHubs.createOrUpdate
  });

  it("diagnosticSettings create test", async () => {
    workflowsId = (
      (await logic_client.workflows.get(resourceGroup, workflowName)).id || "/"
    ).substring(1);
    storageId =
      (await storage_client.storageAccounts.getProperties(resourceGroup, storageAccountName)).id ||
      "";
    authorizationId =
      (
        await eventhub_client.namespaces.getAuthorizationRule(
          resourceGroup,
          namespaceName,
          authorizationRuleName,
        )
      ).id || "";
    workspaceId = (await op_client.workspaces.get(resourceGroup, workspaceName)).id || "";
    const res = await client.diagnosticSettings.createOrUpdate(workflowsId, diagnosticName, {
      storageAccountId: storageId,
      workspaceId: workspaceId,
      eventHubAuthorizationRuleId: authorizationId,
      eventHubName: eventhubName,
      metrics: [],
      logs: [
        {
          category: "WorkflowRuntime",
          enabled: true,
          retentionPolicy: {
            enabled: false,
            days: 0,
          },
        },
      ],
    });
    assert.equal(res.name, diagnosticName);
  });

  it("diagnosticSettings get test", async () => {
    const res = await client.diagnosticSettings.get(workflowsId, diagnosticName);
    assert.equal(res.name, diagnosticName);
  });

  it("diagnosticSettings list test", async () => {});

  it("diagnosticSettings delete test", async () => {});

  it("logProfiles create test", async () => {
    // delete sample logfile
    const resArray = new Array();
    for await (const item of client.logProfiles.list()) {
      resArray.push(item);
    }
    if (resArray.length >= 1) {
      await client.logProfiles.delete("sample-log-profile");
    }
    const res = await client.logProfiles.createOrUpdate(logProfileName, {
      location: "",
      locations: ["global"],
      categories: ["Write", "Delete", "Action"],
      retentionPolicy: {
        enabled: true,
        days: 3,
      },
      storageAccountId: storageId,
    });
    assert.equal(res.name, logProfileName);
  });

  it("logProfiles get test", async () => {
    const res = await client.logProfiles.get(logProfileName);
    assert.equal(res.name, logProfileName);
  });

  it("logProfiles list test", async () => {
    const resArray = new Array();
    for await (const item of client.logProfiles.list()) {
      resArray.push(item);
    }
    assert.equal(resArray.length, 1);
  });

  it("workspace create test", async () => {
    const res = await client.azureMonitorWorkspaces.create(
      resourceGroup,
      azureMonitorWorkspaceName,
      {
        location,
      },
    );
    assert.equal(res.name, azureMonitorWorkspaceName);
  });

  it("workspace get test", async () => {
    const res = await client.azureMonitorWorkspaces.get(resourceGroup, azureMonitorWorkspaceName);
    assert.equal(res.name, azureMonitorWorkspaceName);
  });

  it("workspace list test", async () => {
    const resArray = new Array();
    for await (const item of client.azureMonitorWorkspaces.listByResourceGroup(resourceGroup)) {
      resArray.push(item);
    }
    assert.equal(resArray.length, 1);
  });

  it("workspace delete test", async () => {
    const resArray = new Array();
    for await (const item of client.azureMonitorWorkspaces.listByResourceGroup(resourceGroup)) {
      resArray.push(item);
    }
    assert.equal(resArray.length, 0);
  });

  it("metric listAtSubscriptionScope test", async () => {});

  it("metric list test", async () => {});

  it("delete parameters for diagnosticSettings", async () => {});

  it("logProfiles delete test", async () => {
    const resArray = new Array();
    for await (const item of client.logProfiles.list()) {
      resArray.push(item);
    }
    assert.equal(resArray.length, 1); // still exist sample logfile
  });
});
