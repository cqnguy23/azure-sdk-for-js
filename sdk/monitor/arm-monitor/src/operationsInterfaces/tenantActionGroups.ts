/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  TenantActionGroupResource,
  TenantActionGroupsListByManagementGroupIdOptionalParams,
  TenantActionGroupsCreateOrUpdateOptionalParams,
  TenantActionGroupsCreateOrUpdateResponse,
  TenantActionGroupsGetOptionalParams,
  TenantActionGroupsGetResponse,
  TenantActionGroupsDeleteOptionalParams,
  ActionGroupPatchBodyAutoGenerated,
  TenantActionGroupsUpdateOptionalParams,
  TenantActionGroupsUpdateResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a TenantActionGroups. */
export interface TenantActionGroups {
  /**
   * Get a list of all tenant action groups in a management group.
   * @param managementGroupId The management group id.
   * @param xMsClientTenantId The tenant ID of the client making the request.
   * @param options The options parameters.
   */
  listByManagementGroupId(
    managementGroupId: string,
    xMsClientTenantId: string,
    options?: TenantActionGroupsListByManagementGroupIdOptionalParams,
  ): PagedAsyncIterableIterator<TenantActionGroupResource>;
  /**
   * Create a new tenant action group or update an existing one.
   * @param managementGroupId The management group id.
   * @param tenantActionGroupName The name of the action group.
   * @param xMsClientTenantId The tenant ID of the client making the request.
   * @param actionGroup The tenant action group to create or use for the update.
   * @param options The options parameters.
   */
  createOrUpdate(
    managementGroupId: string,
    tenantActionGroupName: string,
    xMsClientTenantId: string,
    actionGroup: TenantActionGroupResource,
    options?: TenantActionGroupsCreateOrUpdateOptionalParams,
  ): Promise<TenantActionGroupsCreateOrUpdateResponse>;
  /**
   * Get a tenant action group.
   * @param managementGroupId The management group id.
   * @param tenantActionGroupName The name of the action group.
   * @param xMsClientTenantId The tenant ID of the client making the request.
   * @param options The options parameters.
   */
  get(
    managementGroupId: string,
    tenantActionGroupName: string,
    xMsClientTenantId: string,
    options?: TenantActionGroupsGetOptionalParams,
  ): Promise<TenantActionGroupsGetResponse>;
  /**
   * Delete a tenant action group.
   * @param managementGroupId The management group id.
   * @param tenantActionGroupName The name of the action group.
   * @param xMsClientTenantId The tenant ID of the client making the request.
   * @param options The options parameters.
   */
  delete(
    managementGroupId: string,
    tenantActionGroupName: string,
    xMsClientTenantId: string,
    options?: TenantActionGroupsDeleteOptionalParams,
  ): Promise<void>;
  /**
   * Updates an existing tenant action group's tags. To update other fields use the CreateOrUpdate
   * method.
   * @param managementGroupId The management group id.
   * @param tenantActionGroupName The name of the action group.
   * @param xMsClientTenantId The tenant ID of the client making the request.
   * @param tenantActionGroupPatch Parameters supplied to the operation.
   * @param options The options parameters.
   */
  update(
    managementGroupId: string,
    tenantActionGroupName: string,
    xMsClientTenantId: string,
    tenantActionGroupPatch: ActionGroupPatchBodyAutoGenerated,
    options?: TenantActionGroupsUpdateOptionalParams,
  ): Promise<TenantActionGroupsUpdateResponse>;
}
