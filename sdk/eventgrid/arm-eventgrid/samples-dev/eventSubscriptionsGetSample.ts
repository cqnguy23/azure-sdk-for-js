/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import { EventGridManagementClient } from "@azure/arm-eventgrid";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Get properties of an event subscription.
 *
 * @summary Get properties of an event subscription.
 * x-ms-original-file: specification/eventgrid/resource-manager/Microsoft.EventGrid/preview/2024-06-01-preview/examples/EventSubscriptions_GetForCustomTopic.json
 */
async function eventSubscriptionsGetForCustomTopic() {
  const scope =
    "subscriptions/8f6b6269-84f2-4d09-9e31-1127efcd1e40/resourceGroups/examplerg/providers/Microsoft.EventGrid/topics/exampletopic2";
  const eventSubscriptionName = "examplesubscription1";
  const credential = new DefaultAzureCredential();
  const client = new EventGridManagementClient(credential);
  const result = await client.eventSubscriptions.get(scope, eventSubscriptionName);
  console.log(result);
}

/**
 * This sample demonstrates how to Get properties of an event subscription.
 *
 * @summary Get properties of an event subscription.
 * x-ms-original-file: specification/eventgrid/resource-manager/Microsoft.EventGrid/preview/2024-06-01-preview/examples/EventSubscriptions_GetForCustomTopic_AzureFunctionDestination.json
 */
async function eventSubscriptionsGetForCustomTopicAzureFunctionDestination() {
  const scope =
    "subscriptions/8f6b6269-84f2-4d09-9e31-1127efcd1e40/resourceGroups/examplerg/providers/Microsoft.EventGrid/topics/exampletopic2";
  const eventSubscriptionName = "examplesubscription1";
  const credential = new DefaultAzureCredential();
  const client = new EventGridManagementClient(credential);
  const result = await client.eventSubscriptions.get(scope, eventSubscriptionName);
  console.log(result);
}

/**
 * This sample demonstrates how to Get properties of an event subscription.
 *
 * @summary Get properties of an event subscription.
 * x-ms-original-file: specification/eventgrid/resource-manager/Microsoft.EventGrid/preview/2024-06-01-preview/examples/EventSubscriptions_GetForCustomTopic_EventHubDestination.json
 */
async function eventSubscriptionsGetForCustomTopicEventHubDestination() {
  const scope =
    "subscriptions/8f6b6269-84f2-4d09-9e31-1127efcd1e40/resourceGroups/examplerg/providers/Microsoft.EventGrid/topics/exampletopic2";
  const eventSubscriptionName = "examplesubscription1";
  const credential = new DefaultAzureCredential();
  const client = new EventGridManagementClient(credential);
  const result = await client.eventSubscriptions.get(scope, eventSubscriptionName);
  console.log(result);
}

/**
 * This sample demonstrates how to Get properties of an event subscription.
 *
 * @summary Get properties of an event subscription.
 * x-ms-original-file: specification/eventgrid/resource-manager/Microsoft.EventGrid/preview/2024-06-01-preview/examples/EventSubscriptions_GetForCustomTopic_HybridConnectionDestination.json
 */
async function eventSubscriptionsGetForCustomTopicHybridConnectionDestination() {
  const scope =
    "subscriptions/8f6b6269-84f2-4d09-9e31-1127efcd1e40/resourceGroups/examplerg/providers/Microsoft.EventGrid/topics/exampletopic2";
  const eventSubscriptionName = "examplesubscription1";
  const credential = new DefaultAzureCredential();
  const client = new EventGridManagementClient(credential);
  const result = await client.eventSubscriptions.get(scope, eventSubscriptionName);
  console.log(result);
}

/**
 * This sample demonstrates how to Get properties of an event subscription.
 *
 * @summary Get properties of an event subscription.
 * x-ms-original-file: specification/eventgrid/resource-manager/Microsoft.EventGrid/preview/2024-06-01-preview/examples/EventSubscriptions_GetForCustomTopic_ServiceBusQueueDestination.json
 */
async function eventSubscriptionsGetForCustomTopicServiceBusQueueDestination() {
  const scope =
    "subscriptions/8f6b6269-84f2-4d09-9e31-1127efcd1e40/resourceGroups/examplerg/providers/Microsoft.EventGrid/topics/exampletopic2";
  const eventSubscriptionName = "examplesubscription1";
  const credential = new DefaultAzureCredential();
  const client = new EventGridManagementClient(credential);
  const result = await client.eventSubscriptions.get(scope, eventSubscriptionName);
  console.log(result);
}

/**
 * This sample demonstrates how to Get properties of an event subscription.
 *
 * @summary Get properties of an event subscription.
 * x-ms-original-file: specification/eventgrid/resource-manager/Microsoft.EventGrid/preview/2024-06-01-preview/examples/EventSubscriptions_GetForCustomTopic_ServiceBusTopicDestination.json
 */
async function eventSubscriptionsGetForCustomTopicServiceBusTopicDestination() {
  const scope =
    "subscriptions/8f6b6269-84f2-4d09-9e31-1127efcd1e40/resourceGroups/examplerg/providers/Microsoft.EventGrid/topics/exampletopic2";
  const eventSubscriptionName = "examplesubscription1";
  const credential = new DefaultAzureCredential();
  const client = new EventGridManagementClient(credential);
  const result = await client.eventSubscriptions.get(scope, eventSubscriptionName);
  console.log(result);
}

/**
 * This sample demonstrates how to Get properties of an event subscription.
 *
 * @summary Get properties of an event subscription.
 * x-ms-original-file: specification/eventgrid/resource-manager/Microsoft.EventGrid/preview/2024-06-01-preview/examples/EventSubscriptions_GetForCustomTopic_StorageQueueDestination.json
 */
async function eventSubscriptionsGetForCustomTopicStorageQueueDestination() {
  const scope =
    "subscriptions/8f6b6269-84f2-4d09-9e31-1127efcd1e40/resourceGroups/examplerg/providers/Microsoft.EventGrid/topics/exampletopic2";
  const eventSubscriptionName = "examplesubscription1";
  const credential = new DefaultAzureCredential();
  const client = new EventGridManagementClient(credential);
  const result = await client.eventSubscriptions.get(scope, eventSubscriptionName);
  console.log(result);
}

/**
 * This sample demonstrates how to Get properties of an event subscription.
 *
 * @summary Get properties of an event subscription.
 * x-ms-original-file: specification/eventgrid/resource-manager/Microsoft.EventGrid/preview/2024-06-01-preview/examples/EventSubscriptions_GetForCustomTopic_WebhookDestination.json
 */
async function eventSubscriptionsGetForCustomTopicWebhookDestination() {
  const scope =
    "subscriptions/8f6b6269-84f2-4d09-9e31-1127efcd1e40/resourceGroups/examplerg/providers/Microsoft.EventGrid/topics/exampletopic2";
  const eventSubscriptionName = "examplesubscription1";
  const credential = new DefaultAzureCredential();
  const client = new EventGridManagementClient(credential);
  const result = await client.eventSubscriptions.get(scope, eventSubscriptionName);
  console.log(result);
}

/**
 * This sample demonstrates how to Get properties of an event subscription.
 *
 * @summary Get properties of an event subscription.
 * x-ms-original-file: specification/eventgrid/resource-manager/Microsoft.EventGrid/preview/2024-06-01-preview/examples/EventSubscriptions_GetForResource.json
 */
async function eventSubscriptionsGetForResource() {
  const scope =
    "subscriptions/8f6b6269-84f2-4d09-9e31-1127efcd1e40/resourceGroups/examplerg/providers/Microsoft.EventHub/namespaces/examplenamespace1";
  const eventSubscriptionName = "examplesubscription1";
  const credential = new DefaultAzureCredential();
  const client = new EventGridManagementClient(credential);
  const result = await client.eventSubscriptions.get(scope, eventSubscriptionName);
  console.log(result);
}

/**
 * This sample demonstrates how to Get properties of an event subscription.
 *
 * @summary Get properties of an event subscription.
 * x-ms-original-file: specification/eventgrid/resource-manager/Microsoft.EventGrid/preview/2024-06-01-preview/examples/EventSubscriptions_GetForResourceGroup.json
 */
async function eventSubscriptionsGetForResourceGroup() {
  const scope = "subscriptions/8f6b6269-84f2-4d09-9e31-1127efcd1e40/resourceGroups/examplerg";
  const eventSubscriptionName = "examplesubscription2";
  const credential = new DefaultAzureCredential();
  const client = new EventGridManagementClient(credential);
  const result = await client.eventSubscriptions.get(scope, eventSubscriptionName);
  console.log(result);
}

/**
 * This sample demonstrates how to Get properties of an event subscription.
 *
 * @summary Get properties of an event subscription.
 * x-ms-original-file: specification/eventgrid/resource-manager/Microsoft.EventGrid/preview/2024-06-01-preview/examples/EventSubscriptions_GetForSubscription.json
 */
async function eventSubscriptionsGetForSubscription() {
  const scope = "subscriptions/8f6b6269-84f2-4d09-9e31-1127efcd1e40";
  const eventSubscriptionName = "examplesubscription3";
  const credential = new DefaultAzureCredential();
  const client = new EventGridManagementClient(credential);
  const result = await client.eventSubscriptions.get(scope, eventSubscriptionName);
  console.log(result);
}

async function main() {
  await eventSubscriptionsGetForCustomTopic();
  await eventSubscriptionsGetForCustomTopicAzureFunctionDestination();
  await eventSubscriptionsGetForCustomTopicEventHubDestination();
  await eventSubscriptionsGetForCustomTopicHybridConnectionDestination();
  await eventSubscriptionsGetForCustomTopicServiceBusQueueDestination();
  await eventSubscriptionsGetForCustomTopicServiceBusTopicDestination();
  await eventSubscriptionsGetForCustomTopicStorageQueueDestination();
  await eventSubscriptionsGetForCustomTopicWebhookDestination();
  await eventSubscriptionsGetForResource();
  await eventSubscriptionsGetForResourceGroup();
  await eventSubscriptionsGetForSubscription();
}

main().catch(console.error);
