/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import type { RegistrationParameter } from "@azure/arm-azurestack";
import { AzureStackManagementClient } from "@azure/arm-azurestack";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Create or update an Azure Stack registration.
 *
 * @summary Create or update an Azure Stack registration.
 * x-ms-original-file: specification/azurestack/resource-manager/Microsoft.AzureStack/preview/2020-06-01-preview/examples/Registration/Put.json
 */
async function createOrUpdateAnAzureStackRegistration(): Promise<void> {
  const subscriptionId = "dd8597b4-8739-4467-8b10-f8679f62bfbf";
  const resourceGroup = "azurestack";
  const registrationName = "testregistration";
  const token: RegistrationParameter = {
    location: "global",
    registrationToken:
      "EyjIAWXSAw5nTw9KZWWiOiJeZxZlbg9wBwvUdCiSIM9iaMVjdeLkijoinwIzyJa2Ytgtowm2yy00OdG4lTlLyJmtztHjZGfJZTC0NZK1iIWiY2XvdWRJzCi6iJy5nDy0oDk1LTNHmWeTnDUwyS05oDI0LTrINzYwoGq5mjAzziIsim1HCmtldHBsYwnLu3LuZGljYXrpB25FBmfIbgVkIJp0CNvLLCJOYXJkd2FYzuLUZM8iOlt7IM51bunvcMVZiJoYlCjcaw9ZiJPBIjNkzDJHmda3yte5ndqZMdq4YmZkZmi5oDM3OTY3ZwNMIL0SIM5PyYI6WyJLZTy0ztJJMwZKy2m0OWNLODDLMwm2zTm0ymzKyjmWySisiJA3njlHmtdlY2q4NjRjnwFIZtC1YZi5ZGyZodM3Y2vjIl0siMnwDsi6wyi2oDUZoTbiY2RhNDa0ymrKoWe4YtK5otblzWrJzGyzNCISIjmYnzC4M2vmnZdIoDRKM2i5ytfkmJlhnDc1zdhLzWm1il0sim5HBwuiOijIqzF1MTvhmDIXmIIsimrpc2SiolsioWNlZjVhnZM1otQ0nDu3NmjlN2M3zmfjzmyZMTJhZtiiLcjLZjLmmZJhmWVhytG0NTu0OTqZNWu1Mda0MZbIYtfjyijdLCj1DWlKijoinwM5Mwu3NjytMju5Os00oTIwlWi0OdmTnGzHotiWm2RjyTCxIIwiBWvTb3J5ijPbijAYZDA3M2fjNzu0YTRMZTfhodkxzDnkogY5ZtAWzdyXIiwINZcWzThLnDQ4otrJndAzZGI5MGzlYtY1ZJA5ZdfiNMQIXX1DlcJpC3n1zxiiOijZb21lB25LIIWIdmVyC2LVbiI6IJeuMcJ9",
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureStackManagementClient(credential, subscriptionId);
  const result = await client.registrations.createOrUpdate(resourceGroup, registrationName, token);
  console.log(result);
}

createOrUpdateAnAzureStackRegistration().catch(console.error);
