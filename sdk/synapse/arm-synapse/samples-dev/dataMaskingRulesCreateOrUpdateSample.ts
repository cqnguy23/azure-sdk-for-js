/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import type { DataMaskingRule } from "@azure/arm-synapse";
import { SynapseManagementClient } from "@azure/arm-synapse";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Creates or updates a Sql pool data masking rule.
 *
 * @summary Creates or updates a Sql pool data masking rule.
 * x-ms-original-file: specification/synapse/resource-manager/Microsoft.Synapse/stable/2021-06-01/examples/DataMaskingRuleCreateOrUpdateDefaultMax.json
 */
async function createOrUpdateDataMaskingRuleForDefaultMax() {
  const subscriptionId =
    process.env["SYNAPSE_SUBSCRIPTION_ID"] || "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = process.env["SYNAPSE_RESOURCE_GROUP"] || "sqlcrudtest-6852";
  const workspaceName = "sqlcrudtest-2080";
  const sqlPoolName = "sqlcrudtest-331";
  const dataMaskingRuleName = "rule1";
  const parameters: DataMaskingRule = {
    aliasName: "nickname",
    columnName: "test1",
    maskingFunction: "Default",
    ruleState: "Enabled",
    schemaName: "dbo",
    tableName: "Table_1",
  };
  const credential = new DefaultAzureCredential();
  const client = new SynapseManagementClient(credential, subscriptionId);
  const result = await client.dataMaskingRules.createOrUpdate(
    resourceGroupName,
    workspaceName,
    sqlPoolName,
    dataMaskingRuleName,
    parameters,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or updates a Sql pool data masking rule.
 *
 * @summary Creates or updates a Sql pool data masking rule.
 * x-ms-original-file: specification/synapse/resource-manager/Microsoft.Synapse/stable/2021-06-01/examples/DataMaskingRuleCreateOrUpdateDefaultMin.json
 */
async function createOrUpdateDataMaskingRuleForDefaultMin() {
  const subscriptionId =
    process.env["SYNAPSE_SUBSCRIPTION_ID"] || "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = process.env["SYNAPSE_RESOURCE_GROUP"] || "sqlcrudtest-6852";
  const workspaceName = "sqlcrudtest-2080";
  const sqlPoolName = "sqlcrudtest-331";
  const dataMaskingRuleName = "rule1";
  const parameters: DataMaskingRule = {
    columnName: "test1",
    maskingFunction: "Default",
    schemaName: "dbo",
    tableName: "Table_1",
  };
  const credential = new DefaultAzureCredential();
  const client = new SynapseManagementClient(credential, subscriptionId);
  const result = await client.dataMaskingRules.createOrUpdate(
    resourceGroupName,
    workspaceName,
    sqlPoolName,
    dataMaskingRuleName,
    parameters,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or updates a Sql pool data masking rule.
 *
 * @summary Creates or updates a Sql pool data masking rule.
 * x-ms-original-file: specification/synapse/resource-manager/Microsoft.Synapse/stable/2021-06-01/examples/DataMaskingRuleCreateOrUpdateNumber.json
 */
async function createOrUpdateDataMaskingRuleForNumbers() {
  const subscriptionId =
    process.env["SYNAPSE_SUBSCRIPTION_ID"] || "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = process.env["SYNAPSE_RESOURCE_GROUP"] || "sqlcrudtest-6852";
  const workspaceName = "sqlcrudtest-2080";
  const sqlPoolName = "sqlcrudtest-331";
  const dataMaskingRuleName = "rule1";
  const parameters: DataMaskingRule = {
    columnName: "test1",
    maskingFunction: "Number",
    numberFrom: "0",
    numberTo: "2",
    schemaName: "dbo",
    tableName: "Table_1",
  };
  const credential = new DefaultAzureCredential();
  const client = new SynapseManagementClient(credential, subscriptionId);
  const result = await client.dataMaskingRules.createOrUpdate(
    resourceGroupName,
    workspaceName,
    sqlPoolName,
    dataMaskingRuleName,
    parameters,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or updates a Sql pool data masking rule.
 *
 * @summary Creates or updates a Sql pool data masking rule.
 * x-ms-original-file: specification/synapse/resource-manager/Microsoft.Synapse/stable/2021-06-01/examples/DataMaskingRuleCreateOrUpdateText.json
 */
async function createOrUpdateDataMaskingRuleForText() {
  const subscriptionId =
    process.env["SYNAPSE_SUBSCRIPTION_ID"] || "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = process.env["SYNAPSE_RESOURCE_GROUP"] || "sqlcrudtest-6852";
  const workspaceName = "sqlcrudtest-2080";
  const sqlPoolName = "sqlcrudtest-331";
  const dataMaskingRuleName = "rule1";
  const parameters: DataMaskingRule = {
    columnName: "test1",
    maskingFunction: "Text",
    prefixSize: "1",
    replacementString: "asdf",
    schemaName: "dbo",
    suffixSize: "0",
    tableName: "Table_1",
  };
  const credential = new DefaultAzureCredential();
  const client = new SynapseManagementClient(credential, subscriptionId);
  const result = await client.dataMaskingRules.createOrUpdate(
    resourceGroupName,
    workspaceName,
    sqlPoolName,
    dataMaskingRuleName,
    parameters,
  );
  console.log(result);
}

async function main() {
  await createOrUpdateDataMaskingRuleForDefaultMax();
  await createOrUpdateDataMaskingRuleForDefaultMin();
  await createOrUpdateDataMaskingRuleForNumbers();
  await createOrUpdateDataMaskingRuleForText();
}

main().catch(console.error);
