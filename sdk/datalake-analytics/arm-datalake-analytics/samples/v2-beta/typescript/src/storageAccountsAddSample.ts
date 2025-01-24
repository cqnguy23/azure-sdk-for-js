/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import {
  AddStorageAccountParameters,
  DataLakeAnalyticsAccountManagementClient
} from "@azure/arm-datalake-analytics";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Updates the specified Data Lake Analytics account to add an Azure Storage account.
 *
 * @summary Updates the specified Data Lake Analytics account to add an Azure Storage account.
 * x-ms-original-file: specification/datalake-analytics/resource-manager/Microsoft.DataLakeAnalytics/preview/2019-11-01-preview/examples/StorageAccounts_Add.json
 */
async function addsAnAzureStorageAccount() {
  const subscriptionId = "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName = "contosorg";
  const accountName = "contosoadla";
  const storageAccountName = "test_storage";
  const parameters: AddStorageAccountParameters = {
    accessKey: "34adfa4f-cedf-4dc0-ba29-b6d1a69ab346",
    suffix: "test_suffix"
  };
  const credential = new DefaultAzureCredential();
  const client = new DataLakeAnalyticsAccountManagementClient(
    credential,
    subscriptionId
  );
  const result = await client.storageAccounts.add(
    resourceGroupName,
    accountName,
    storageAccountName,
    parameters
  );
  console.log(result);
}

addsAnAzureStorageAccount().catch(console.error);
