/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import type { ConfigurationGroupValue } from "@azure/arm-hybridnetwork";
import { HybridNetworkManagementClient } from "@azure/arm-hybridnetwork";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Creates or updates a hybrid configuration group value.
 *
 * @summary Creates or updates a hybrid configuration group value.
 * x-ms-original-file: specification/hybridnetwork/resource-manager/Microsoft.HybridNetwork/stable/2023-09-01/examples/ConfigurationGroupValueCreate.json
 */
async function createOrUpdateConfigurationGroupValue() {
  const subscriptionId = process.env["HYBRIDNETWORK_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["HYBRIDNETWORK_RESOURCE_GROUP"] || "rg1";
  const configurationGroupValueName = "testConfigurationGroupValue";
  const parameters: ConfigurationGroupValue = {
    location: "eastus",
    properties: {
      configurationGroupSchemaResourceReference: {
        id: "/subscriptions/subid/resourcegroups/testRG/providers/microsoft.hybridnetwork/publishers/testPublisher/configurationGroupSchemas/testConfigurationGroupSchemaName",
        idType: "Open",
      },
      configurationType: "Open",
      configurationValue:
        '{"interconnect-groups":{"stripe-one":{"name":"Stripe one","international-interconnects":["france","germany"],"domestic-interconnects":["birmingham","edinburgh"]},"stripe-two":{"name":"Stripe two","international-interconnects":["germany","italy"],"domestic-interconnects":["edinburgh","london"]}},"interconnect-group-assignments":{"ssc-one":{"ssc":"SSC 1","interconnects":"stripe-one"},"ssc-two":{"ssc":"SSC 2","interconnects":"stripe-two"}}}',
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new HybridNetworkManagementClient(credential, subscriptionId);
  const result = await client.configurationGroupValues.beginCreateOrUpdateAndWait(
    resourceGroupName,
    configurationGroupValueName,
    parameters,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or updates a hybrid configuration group value.
 *
 * @summary Creates or updates a hybrid configuration group value.
 * x-ms-original-file: specification/hybridnetwork/resource-manager/Microsoft.HybridNetwork/stable/2023-09-01/examples/ConfigurationGroupValueCreateSecret.json
 */
async function createOrUpdateConfigurationGroupValueWithSecrets() {
  const subscriptionId = process.env["HYBRIDNETWORK_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["HYBRIDNETWORK_RESOURCE_GROUP"] || "rg1";
  const configurationGroupValueName = "testConfigurationGroupValue";
  const parameters: ConfigurationGroupValue = {
    location: "eastus",
    properties: {
      configurationGroupSchemaResourceReference: {
        id: "/subscriptions/subid/resourcegroups/testRG/providers/microsoft.hybridnetwork/publishers/testPublisher/configurationGroupSchemas/testConfigurationGroupSchemaName",
        idType: "Open",
      },
      configurationType: "Secret",
      secretConfigurationValue:
        '{"interconnect-groups":{"stripe-one":{"name":"Stripe one","international-interconnects":["france","germany"],"domestic-interconnects":["birmingham","edinburgh"]},"stripe-two":{"name":"Stripe two","international-interconnects":["germany","italy"],"domestic-interconnects":["edinburgh","london"]}},"interconnect-group-assignments":{"ssc-one":{"ssc":"SSC 1","interconnects":"stripe-one"},"ssc-two":{"ssc":"SSC 2","interconnects":"stripe-two"}}}',
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new HybridNetworkManagementClient(credential, subscriptionId);
  const result = await client.configurationGroupValues.beginCreateOrUpdateAndWait(
    resourceGroupName,
    configurationGroupValueName,
    parameters,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or updates a hybrid configuration group value.
 *
 * @summary Creates or updates a hybrid configuration group value.
 * x-ms-original-file: specification/hybridnetwork/resource-manager/Microsoft.HybridNetwork/stable/2023-09-01/examples/ConfigurationGroupValueFirstPartyCreate.json
 */
async function createOrUpdateFirstPartyConfigurationGroupValue() {
  const subscriptionId = process.env["HYBRIDNETWORK_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["HYBRIDNETWORK_RESOURCE_GROUP"] || "rg1";
  const configurationGroupValueName = "testConfigurationGroupValue";
  const parameters: ConfigurationGroupValue = {
    location: "eastus",
    properties: {
      configurationGroupSchemaResourceReference: {
        id: "/subscriptions/subid/resourcegroups/testRG/providers/microsoft.hybridnetwork/publishers/testPublisher/configurationGroupSchemas/testConfigurationGroupSchemaName",
        idType: "Secret",
      },
      configurationType: "Open",
      configurationValue:
        '{"interconnect-groups":{"stripe-one":{"name":"Stripe one","international-interconnects":["france","germany"],"domestic-interconnects":["birmingham","edinburgh"]},"stripe-two":{"name":"Stripe two","international-interconnects":["germany","italy"],"domestic-interconnects":["edinburgh","london"]}},"interconnect-group-assignments":{"ssc-one":{"ssc":"SSC 1","interconnects":"stripe-one"},"ssc-two":{"ssc":"SSC 2","interconnects":"stripe-two"}}}',
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new HybridNetworkManagementClient(credential, subscriptionId);
  const result = await client.configurationGroupValues.beginCreateOrUpdateAndWait(
    resourceGroupName,
    configurationGroupValueName,
    parameters,
  );
  console.log(result);
}

async function main() {
  await createOrUpdateConfigurationGroupValue();
  await createOrUpdateConfigurationGroupValueWithSecrets();
  await createOrUpdateFirstPartyConfigurationGroupValue();
}

main().catch(console.error);
