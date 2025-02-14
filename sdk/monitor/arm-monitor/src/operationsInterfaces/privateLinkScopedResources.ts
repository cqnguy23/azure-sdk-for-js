/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { SimplePollerLike, OperationState } from "@azure/core-lro";
import {
  ScopedResource,
  PrivateLinkScopedResourcesListByPrivateLinkScopeOptionalParams,
  PrivateLinkScopedResourcesGetOptionalParams,
  PrivateLinkScopedResourcesGetResponse,
  PrivateLinkScopedResourcesCreateOrUpdateOptionalParams,
  PrivateLinkScopedResourcesCreateOrUpdateResponse,
  PrivateLinkScopedResourcesDeleteOptionalParams,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a PrivateLinkScopedResources. */
export interface PrivateLinkScopedResources {
  /**
   * Gets all private endpoint connections on a private link scope.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param scopeName The name of the Azure Monitor PrivateLinkScope resource.
   * @param options The options parameters.
   */
  listByPrivateLinkScope(
    resourceGroupName: string,
    scopeName: string,
    options?: PrivateLinkScopedResourcesListByPrivateLinkScopeOptionalParams,
  ): PagedAsyncIterableIterator<ScopedResource>;
  /**
   * Gets a scoped resource in a private link scope.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param scopeName The name of the Azure Monitor PrivateLinkScope resource.
   * @param name The name of the scoped resource object.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    scopeName: string,
    name: string,
    options?: PrivateLinkScopedResourcesGetOptionalParams,
  ): Promise<PrivateLinkScopedResourcesGetResponse>;
  /**
   * Approve or reject a private endpoint connection with a given name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param scopeName The name of the Azure Monitor PrivateLinkScope resource.
   * @param name The name of the scoped resource object.
   * @param parameters A private link scoped resource
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    scopeName: string,
    name: string,
    parameters: ScopedResource,
    options?: PrivateLinkScopedResourcesCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<PrivateLinkScopedResourcesCreateOrUpdateResponse>,
      PrivateLinkScopedResourcesCreateOrUpdateResponse
    >
  >;
  /**
   * Approve or reject a private endpoint connection with a given name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param scopeName The name of the Azure Monitor PrivateLinkScope resource.
   * @param name The name of the scoped resource object.
   * @param parameters A private link scoped resource
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    scopeName: string,
    name: string,
    parameters: ScopedResource,
    options?: PrivateLinkScopedResourcesCreateOrUpdateOptionalParams,
  ): Promise<PrivateLinkScopedResourcesCreateOrUpdateResponse>;
  /**
   * Deletes a private endpoint connection with a given name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param scopeName The name of the Azure Monitor PrivateLinkScope resource.
   * @param name The name of the scoped resource object.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    scopeName: string,
    name: string,
    options?: PrivateLinkScopedResourcesDeleteOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Deletes a private endpoint connection with a given name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param scopeName The name of the Azure Monitor PrivateLinkScope resource.
   * @param name The name of the scoped resource object.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    scopeName: string,
    name: string,
    options?: PrivateLinkScopedResourcesDeleteOptionalParams,
  ): Promise<void>;
}
