/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import {
  ScalingPlanPooledSchedulePatch,
  ScalingPlanPooledSchedulesUpdateOptionalParams,
  DesktopVirtualizationAPIClient,
} from "@azure/arm-desktopvirtualization";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Update a ScalingPlanPooledSchedule.
 *
 * @summary Update a ScalingPlanPooledSchedule.
 * x-ms-original-file: specification/desktopvirtualization/resource-manager/Microsoft.DesktopVirtualization/stable/2024-04-03/examples/ScalingPlanPooledSchedule_Update.json
 */
async function scalingPlanPooledSchedulesUpdate() {
  const subscriptionId =
    process.env["DESKTOPVIRTUALIZATION_SUBSCRIPTION_ID"] ||
    "daefabc0-95b4-48b3-b645-8a753a63c4fa";
  const resourceGroupName =
    process.env["DESKTOPVIRTUALIZATION_RESOURCE_GROUP"] || "resourceGroup1";
  const scalingPlanName = "scalingPlan1";
  const scalingPlanScheduleName = "scalingPlanScheduleWeekdays1";
  const scalingPlanSchedule: ScalingPlanPooledSchedulePatch = {
    daysOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    peakStartTime: { hour: 8, minute: 0 },
    rampDownLoadBalancingAlgorithm: "DepthFirst",
    rampDownMinimumHostsPct: 20,
    rampDownWaitTimeMinutes: 30,
    rampUpCapacityThresholdPct: 80,
    rampUpLoadBalancingAlgorithm: "DepthFirst",
  };
  const options: ScalingPlanPooledSchedulesUpdateOptionalParams = {
    scalingPlanSchedule,
  };
  const credential = new DefaultAzureCredential();
  const client = new DesktopVirtualizationAPIClient(credential, subscriptionId);
  const result = await client.scalingPlanPooledSchedules.update(
    resourceGroupName,
    scalingPlanName,
    scalingPlanScheduleName,
    options,
  );
  console.log(result);
}

async function main() {
  scalingPlanPooledSchedulesUpdate();
}

main().catch(console.error);
