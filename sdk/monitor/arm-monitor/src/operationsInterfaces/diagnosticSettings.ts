/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  DiagnosticSettingsResource,
  DiagnosticSettingsListOptionalParams,
  DiagnosticSettingsGetOptionalParams,
  DiagnosticSettingsGetResponse,
  DiagnosticSettingsCreateOrUpdateOptionalParams,
  DiagnosticSettingsCreateOrUpdateResponse,
  DiagnosticSettingsDeleteOptionalParams,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a DiagnosticSettings. */
export interface DiagnosticSettings {
  /**
   * Gets the active diagnostic settings list for the specified resource.
   * @param resourceUri The identifier of the resource.
   * @param options The options parameters.
   */
  list(
    resourceUri: string,
    options?: DiagnosticSettingsListOptionalParams,
  ): PagedAsyncIterableIterator<DiagnosticSettingsResource>;
  /**
   * Gets the active diagnostic settings for the specified resource.
   * @param resourceUri The identifier of the resource.
   * @param name The name of the diagnostic setting.
   * @param options The options parameters.
   */
  get(
    resourceUri: string,
    name: string,
    options?: DiagnosticSettingsGetOptionalParams,
  ): Promise<DiagnosticSettingsGetResponse>;
  /**
   * Creates or updates diagnostic settings for the specified resource.
   * @param resourceUri The identifier of the resource.
   * @param name The name of the diagnostic setting.
   * @param parameters Parameters supplied to the operation.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceUri: string,
    name: string,
    parameters: DiagnosticSettingsResource,
    options?: DiagnosticSettingsCreateOrUpdateOptionalParams,
  ): Promise<DiagnosticSettingsCreateOrUpdateResponse>;
  /**
   * Deletes existing diagnostic settings for the specified resource.
   * @param resourceUri The identifier of the resource.
   * @param name The name of the diagnostic setting.
   * @param options The options parameters.
   */
  delete(
    resourceUri: string,
    name: string,
    options?: DiagnosticSettingsDeleteOptionalParams,
  ): Promise<void>;
}
