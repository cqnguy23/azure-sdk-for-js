/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  env,
  Recorder,
  RecorderStartOptions,
  delay,
  isPlaybackMode,
} from "@azure-tools/test-recorder";
import { createTestCredential } from "@azure-tools/test-credential";
import { Cluster, ClustersGetOptionalParams, ClustersListOptionalParams, ClusterUpdate, KustoManagementClient } from "../src";
import { assert } from "chai";
import { Context } from "mocha";

const replaceableVariables: Record<string, string> = {
  AZURE_CLIENT_ID: "azure_client_id",
  AZURE_CLIENT_SECRET: "azure_client_secret",
  AZURE_TENANT_ID: "88888888-8888-8888-8888-888888888888",
  SUBSCRIPTION_ID: "azure_subscription_id"
};

const recorderOptions: RecorderStartOptions = {
  envSetupForPlayback: replaceableVariables
};

export const testPollingOptions = {
  updateIntervalInMs: isPlaybackMode() ? 0 : undefined,
};

describe("KustoManagementClient", () => {
  let recorder: Recorder;
  let subscriptionId: string;
  let client: KustoManagementClient;
  let resourceGroup: string;
  let clusterName_1: string;

  beforeEach(async function (this: Context) {
    recorder = new Recorder(this.currentTest);
    await recorder.start(recorderOptions);
    subscriptionId = env.SUBSCRIPTION_ID || '';
    // This is an example of how the environment variables are used
    const credential = createTestCredential();
    client = new KustoManagementClient(credential, subscriptionId, recorder.configureClientOptions({}));
    resourceGroup = "myjstest";
    clusterName_1 = "mytestclustername5";
  });

  afterEach(async function () {
    await recorder.stop();
  });

  //kusto_client.clusters.beginCreateOrUpdateAndWait
  it("could create clusters", async function () {
    let res = await client.clusters.beginCreateOrUpdateAndWait(resourceGroup, clusterName_1,
      {
        location: "eastus",
        sku: { name: "Standard_L16as_v3", capacity: 2, tier: "Standard" },
        identity: {
          type: "SystemAssigned"
        },
        languageExtensions: {
          value: [
            {
              languageExtensionImageName: "Python3_10_8",
              languageExtensionName: "PYTHON",
            },
          ],
        },
      }, testPollingOptions);
    assert.strictEqual(res.name, clusterName_1);
  }).timeout(7200000);

  //kusto_client.clusters.beginUpdateAndWait
  // it("could update tags in cluster", async () => {
  //   const updateParams: ClusterUpdate = {
  //     tags: {
  //       key1: "value1",
  //       key2: "value2",
  //     }
  //   };
  //   const res = await client.clusters.beginUpdateAndWait(resourceGroup, clusterName_2, updateParams, testPollingOptions);
  //   if (!isPlaybackMode()) {
  //     await delay(600000);
  //   }
  //   assert.equal(res.name, clusterName_2);
  // });

  //kusto_client.clusters.get
  it("could get cluster", async () => {
    const res = await client.clusters.get(resourceGroup, clusterName_1);
    assert.strictEqual(res.name, clusterName_1);
  });

  //kusto_client.clusters.list
  it("could list cluster filtered by resource group", async () => {
    const resArray = new Array();
    for await (const item of client.clusters.listByResourceGroup(resourceGroup)) {
      resArray.push(item);
    }
    assert.equal(resArray.length, 1);
  });

  //kusto_client.clusters.beginDeleteAndWait
  it("could delete clusters", async () => {
    let res = await client.clusters.beginDeleteAndWait(resourceGroup, clusterName_1, testPollingOptions);
    const resArray = new Array();
    for await (const item of client.clusters.listByResourceGroup(resourceGroup)) {
      resArray.push(item);
    }
    assert.equal(resArray.length, 0);
  });

});
