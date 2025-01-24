/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import {
  CreateJobValidations,
  DataBoxManagementClient
} from "@azure/arm-databox";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to This method does all necessary pre-job creation validation under subscription.
 *
 * @summary This method does all necessary pre-job creation validation under subscription.
 * x-ms-original-file: specification/databox/resource-manager/Microsoft.DataBox/stable/2022-12-01/examples/ValidateInputs.json
 */
async function validateInputs() {
  const subscriptionId =
    process.env["DATABOX_SUBSCRIPTION_ID"] || "YourSubscriptionId";
  const location = "westus";
  const validationRequest: CreateJobValidations = {
    individualRequestDetails: [
      {
        dataImportDetails: [
          {
            accountDetails: {
              dataAccountType: "StorageAccount",
              storageAccountId:
                "/subscriptions/YourSubscriptionId/resourcegroups/YourResourceGroupName/providers/Microsoft.Storage/storageAccounts/YourStorageAccountName"
            }
          }
        ],
        deviceType: "DataBox",
        transferType: "ImportToAzure",
        validationType: "ValidateDataTransferDetails"
      },
      {
        deviceType: "DataBox",
        shippingAddress: {
          addressType: "Commercial",
          city: "XXXX XXXX",
          companyName: "XXXX XXXX",
          country: "XX",
          postalCode: "00000",
          stateOrProvince: "XX",
          streetAddress1: "XXXX XXXX",
          streetAddress2: "XXXX XXXX"
        },
        transportPreferences: { preferredShipmentType: "MicrosoftManaged" },
        validationType: "ValidateAddress"
      },
      { validationType: "ValidateSubscriptionIsAllowedToCreateJob" },
      {
        country: "XX",
        deviceType: "DataBox",
        location: "westus",
        transferType: "ImportToAzure",
        validationType: "ValidateSkuAvailability"
      },
      { deviceType: "DataBox", validationType: "ValidateCreateOrderLimit" },
      {
        deviceType: "DataBox",
        preference: {
          transportPreferences: { preferredShipmentType: "MicrosoftManaged" }
        },
        validationType: "ValidatePreferences"
      }
    ],
    validationCategory: "JobCreationValidation"
  };
  const credential = new DefaultAzureCredential();
  const client = new DataBoxManagementClient(credential, subscriptionId);
  const result = await client.service.validateInputs(
    location,
    validationRequest
  );
  console.log(result);
}

async function main() {
  validateInputs();
}

main().catch(console.error);
