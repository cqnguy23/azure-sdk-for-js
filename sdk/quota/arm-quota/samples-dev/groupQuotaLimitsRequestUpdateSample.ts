/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import type {
  GroupQuotaLimitList,
  GroupQuotaLimitsRequestUpdateOptionalParams,
} from "@azure/arm-quota";
import { AzureQuotaExtensionAPI } from "@azure/arm-quota";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Create the GroupQuota requests for a specific ResourceProvider/Location/Resource. The resourceName properties are specified in the request body. Only 1 resource quota can be requested. Please note that patch request creates a new groupQuota request.
Use the polling API - OperationsStatus URI specified in Azure-AsyncOperation header field, with retry-after duration in seconds to check the intermediate status. This API provides the finals status with the request details and status.
 *
 * @summary Create the GroupQuota requests for a specific ResourceProvider/Location/Resource. The resourceName properties are specified in the request body. Only 1 resource quota can be requested. Please note that patch request creates a new groupQuota request.
Use the polling API - OperationsStatus URI specified in Azure-AsyncOperation header field, with retry-after duration in seconds to check the intermediate status. This API provides the finals status with the request details and status.
 * x-ms-original-file: specification/quota/resource-manager/Microsoft.Quota/preview/2024-12-18-preview/examples/GroupQuotaLimitsRequests/PatchGroupQuotaLimitsRequests-Compute.json
 */
async function groupQuotaLimitsRequestsUpdate(): Promise<void> {
  const managementGroupId = "E7EC67B3-7657-4966-BFFC-41EFD36BAA09";
  const groupQuotaName = "groupquota1";
  const resourceProviderName = "Microsoft.Compute";
  const location = "westus";
  const groupQuotaRequest: GroupQuotaLimitList = {
    properties: {
      value: [
        {
          properties: {
            comment: "Contoso requires more quota.",
            limit: 110,
            resourceName: "standardddv4family",
          },
        },
        {
          properties: {
            comment: "Contoso requires more quota.",
            limit: 110,
            resourceName: "standardav2family",
          },
        },
      ],
    },
  };
  const options: GroupQuotaLimitsRequestUpdateOptionalParams = {
    groupQuotaRequest,
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureQuotaExtensionAPI(credential);
  const result = await client.groupQuotaLimitsRequest.beginUpdateAndWait(
    managementGroupId,
    groupQuotaName,
    resourceProviderName,
    location,
    options,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await groupQuotaLimitsRequestsUpdate();
}

main().catch(console.error);
