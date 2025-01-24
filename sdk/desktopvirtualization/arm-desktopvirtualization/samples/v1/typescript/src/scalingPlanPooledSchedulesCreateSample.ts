/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import {
  ScalingPlanPooledSchedule,
  DesktopVirtualizationAPIClient,
} from "@azure/arm-desktopvirtualization";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Create or update a ScalingPlanPooledSchedule.
 *
 * @summary Create or update a ScalingPlanPooledSchedule.
 * x-ms-original-file: specification/desktopvirtualization/resource-manager/Microsoft.DesktopVirtualization/stable/2024-04-03/examples/ScalingPlanPooledSchedule_Create.json
 */
async function scalingPlanPooledSchedulesCreate() {
  const subscriptionId =
    process.env["DESKTOPVIRTUALIZATION_SUBSCRIPTION_ID"] ||
    "daefabc0-95b4-48b3-b645-8a753a63c4fa";
  const resourceGroupName =
    process.env["DESKTOPVIRTUALIZATION_RESOURCE_GROUP"] || "resourceGroup1";
  const scalingPlanName = "scalingPlan1";
  const scalingPlanScheduleName = "scalingPlanScheduleWeekdays1";
  const scalingPlanSchedule: ScalingPlanPooledSchedule = {
    daysOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    offPeakLoadBalancingAlgorithm: "DepthFirst",
    offPeakStartTime: { hour: 20, minute: 0 },
    peakLoadBalancingAlgorithm: "BreadthFirst",
    peakStartTime: { hour: 8, minute: 0 },
    rampDownCapacityThresholdPct: 50,
    rampDownForceLogoffUsers: true,
    rampDownLoadBalancingAlgorithm: "DepthFirst",
    rampDownMinimumHostsPct: 20,
    rampDownNotificationMessage: "message",
    rampDownStartTime: { hour: 18, minute: 0 },
    rampDownWaitTimeMinutes: 30,
    rampUpCapacityThresholdPct: 80,
    rampUpLoadBalancingAlgorithm: "DepthFirst",
    rampUpMinimumHostsPct: 20,
    rampUpStartTime: { hour: 6, minute: 0 },
  };
  const credential = new DefaultAzureCredential();
  const client = new DesktopVirtualizationAPIClient(credential, subscriptionId);
  const result = await client.scalingPlanPooledSchedules.create(
    resourceGroupName,
    scalingPlanName,
    scalingPlanScheduleName,
    scalingPlanSchedule,
  );
  console.log(result);
}

async function main() {
  scalingPlanPooledSchedulesCreate();
}

main().catch(console.error);
