/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { SimplePollerLike, OperationState } from "@azure/core-lro";
import {
  ExportJobsTriggerOptionalParams,
  ExportJobsTriggerResponse,
} from "../models";

/** Interface representing a ExportJobs. */
export interface ExportJobs {
  /**
   * Triggers export of jobs and returns an OperationID to track.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param vaultName The name of the backup vault.
   * @param options The options parameters.
   */
  beginTrigger(
    resourceGroupName: string,
    vaultName: string,
    options?: ExportJobsTriggerOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<ExportJobsTriggerResponse>,
      ExportJobsTriggerResponse
    >
  >;
  /**
   * Triggers export of jobs and returns an OperationID to track.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param vaultName The name of the backup vault.
   * @param options The options parameters.
   */
  beginTriggerAndWait(
    resourceGroupName: string,
    vaultName: string,
    options?: ExportJobsTriggerOptionalParams,
  ): Promise<ExportJobsTriggerResponse>;
}
