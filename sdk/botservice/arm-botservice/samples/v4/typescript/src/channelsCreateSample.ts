/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import { BotChannel, AzureBotService } from "@azure/arm-botservice";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Creates a Channel registration for a Bot Service
 *
 * @summary Creates a Channel registration for a Bot Service
 * x-ms-original-file: specification/botservice/resource-manager/Microsoft.BotService/stable/2022-09-15/examples/PutAlexaChannel.json
 */
async function createAlexaChannel() {
  const subscriptionId =
    process.env["BOTSERVICE_SUBSCRIPTION_ID"] || "subscription-id";
  const resourceGroupName =
    process.env["BOTSERVICE_RESOURCE_GROUP"] || "OneResourceGroupName";
  const resourceName = "samplebotname";
  const channelName = "AlexaChannel";
  const parameters: BotChannel = {
    location: "global",
    properties: {
      channelName: "AlexaChannel",
      properties: { alexaSkillId: "XAlexaSkillIdX", isEnabled: true }
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureBotService(credential, subscriptionId);
  const result = await client.channels.create(
    resourceGroupName,
    resourceName,
    channelName,
    parameters
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates a Channel registration for a Bot Service
 *
 * @summary Creates a Channel registration for a Bot Service
 * x-ms-original-file: specification/botservice/resource-manager/Microsoft.BotService/stable/2022-09-15/examples/PutChannel.json
 */
async function createChannel() {
  const subscriptionId =
    process.env["BOTSERVICE_SUBSCRIPTION_ID"] || "subscription-id";
  const resourceGroupName =
    process.env["BOTSERVICE_RESOURCE_GROUP"] || "OneResourceGroupName";
  const resourceName = "samplebotname";
  const channelName = "EmailChannel";
  const parameters: BotChannel = {
    location: "global",
    properties: {
      channelName: "EmailChannel",
      properties: { emailAddress: "a@b.com", isEnabled: true, password: "pwd" }
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureBotService(credential, subscriptionId);
  const result = await client.channels.create(
    resourceGroupName,
    resourceName,
    channelName,
    parameters
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates a Channel registration for a Bot Service
 *
 * @summary Creates a Channel registration for a Bot Service
 * x-ms-original-file: specification/botservice/resource-manager/Microsoft.BotService/stable/2022-09-15/examples/PutDirectLineSpeechChannel.json
 */
async function createDirectLineSpeechChannel() {
  const subscriptionId =
    process.env["BOTSERVICE_SUBSCRIPTION_ID"] || "subscription-id";
  const resourceGroupName =
    process.env["BOTSERVICE_RESOURCE_GROUP"] || "OneResourceGroupName";
  const resourceName = "samplebotname";
  const channelName = "DirectLineSpeechChannel";
  const parameters: BotChannel = {
    location: "global",
    properties: {
      channelName: "DirectLineSpeechChannel",
      properties: {
        cognitiveServiceRegion: "XcognitiveServiceRegionX",
        cognitiveServiceSubscriptionKey: "XcognitiveServiceSubscriptionKeyX",
        isEnabled: true
      }
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureBotService(credential, subscriptionId);
  const result = await client.channels.create(
    resourceGroupName,
    resourceName,
    channelName,
    parameters
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates a Channel registration for a Bot Service
 *
 * @summary Creates a Channel registration for a Bot Service
 * x-ms-original-file: specification/botservice/resource-manager/Microsoft.BotService/stable/2022-09-15/examples/PutEmailChannel.json
 */
async function createEmailChannel() {
  const subscriptionId =
    process.env["BOTSERVICE_SUBSCRIPTION_ID"] || "subscription-id";
  const resourceGroupName =
    process.env["BOTSERVICE_RESOURCE_GROUP"] || "OneResourceGroupName";
  const resourceName = "samplebotname";
  const channelName = "EmailChannel";
  const parameters: BotChannel = {
    location: "global",
    properties: {
      channelName: "EmailChannel",
      properties: {
        authMethod: 1,
        emailAddress: "a@b.com",
        isEnabled: true,
        magicCode: "000000"
      }
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureBotService(credential, subscriptionId);
  const result = await client.channels.create(
    resourceGroupName,
    resourceName,
    channelName,
    parameters
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates a Channel registration for a Bot Service
 *
 * @summary Creates a Channel registration for a Bot Service
 * x-ms-original-file: specification/botservice/resource-manager/Microsoft.BotService/stable/2022-09-15/examples/PutLineChannel.json
 */
async function createLineChannel() {
  const subscriptionId =
    process.env["BOTSERVICE_SUBSCRIPTION_ID"] || "subscription-id";
  const resourceGroupName =
    process.env["BOTSERVICE_RESOURCE_GROUP"] || "OneResourceGroupName";
  const resourceName = "samplebotname";
  const channelName = "LineChannel";
  const parameters: BotChannel = {
    location: "global",
    properties: {
      channelName: "LineChannel",
      properties: {
        lineRegistrations: [
          {
            channelAccessToken: "channelAccessToken",
            channelSecret: "channelSecret"
          }
        ]
      }
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureBotService(credential, subscriptionId);
  const result = await client.channels.create(
    resourceGroupName,
    resourceName,
    channelName,
    parameters
  );
  console.log(result);
}

async function main() {
  createAlexaChannel();
  createChannel();
  createDirectLineSpeechChannel();
  createEmailChannel();
  createLineChannel();
}

main().catch(console.error);
