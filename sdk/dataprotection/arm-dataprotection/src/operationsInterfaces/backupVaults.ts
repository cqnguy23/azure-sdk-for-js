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
  BackupVaultResource,
  BackupVaultsGetInSubscriptionOptionalParams,
  BackupVaultsGetInResourceGroupOptionalParams,
  BackupVaultsGetOptionalParams,
  BackupVaultsGetResponse,
  BackupVaultsCreateOrUpdateOptionalParams,
  BackupVaultsCreateOrUpdateResponse,
  BackupVaultsDeleteOptionalParams,
  PatchResourceRequestInput,
  BackupVaultsUpdateOptionalParams,
  BackupVaultsUpdateResponse,
  CheckNameAvailabilityRequest,
  BackupVaultsCheckNameAvailabilityOptionalParams,
  BackupVaultsCheckNameAvailabilityResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a BackupVaults. */
export interface BackupVaults {
  /**
   * Returns resource collection belonging to a subscription.
   * @param options The options parameters.
   */
  listInSubscription(
    options?: BackupVaultsGetInSubscriptionOptionalParams,
  ): PagedAsyncIterableIterator<BackupVaultResource>;
  /**
   * Returns resource collection belonging to a resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  listInResourceGroup(
    resourceGroupName: string,
    options?: BackupVaultsGetInResourceGroupOptionalParams,
  ): PagedAsyncIterableIterator<BackupVaultResource>;
  /**
   * Returns a resource belonging to a resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param vaultName The name of the backup vault.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    vaultName: string,
    options?: BackupVaultsGetOptionalParams,
  ): Promise<BackupVaultsGetResponse>;
  /**
   * Creates or updates a BackupVault resource belonging to a resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param vaultName The name of the backup vault.
   * @param parameters Request body for operation
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    vaultName: string,
    parameters: BackupVaultResource,
    options?: BackupVaultsCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<BackupVaultsCreateOrUpdateResponse>,
      BackupVaultsCreateOrUpdateResponse
    >
  >;
  /**
   * Creates or updates a BackupVault resource belonging to a resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param vaultName The name of the backup vault.
   * @param parameters Request body for operation
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    vaultName: string,
    parameters: BackupVaultResource,
    options?: BackupVaultsCreateOrUpdateOptionalParams,
  ): Promise<BackupVaultsCreateOrUpdateResponse>;
  /**
   * Deletes a BackupVault resource from the resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param vaultName The name of the backup vault.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    vaultName: string,
    options?: BackupVaultsDeleteOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Deletes a BackupVault resource from the resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param vaultName The name of the backup vault.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    vaultName: string,
    options?: BackupVaultsDeleteOptionalParams,
  ): Promise<void>;
  /**
   * Updates a BackupVault resource belonging to a resource group. For example, updating tags for a
   * resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param vaultName The name of the backup vault.
   * @param parameters Request body for operation
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    vaultName: string,
    parameters: PatchResourceRequestInput,
    options?: BackupVaultsUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<BackupVaultsUpdateResponse>,
      BackupVaultsUpdateResponse
    >
  >;
  /**
   * Updates a BackupVault resource belonging to a resource group. For example, updating tags for a
   * resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param vaultName The name of the backup vault.
   * @param parameters Request body for operation
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    vaultName: string,
    parameters: PatchResourceRequestInput,
    options?: BackupVaultsUpdateOptionalParams,
  ): Promise<BackupVaultsUpdateResponse>;
  /**
   * API to check for resource name availability
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param location The location in which uniqueness will be verified.
   * @param parameters Check name availability request
   * @param options The options parameters.
   */
  checkNameAvailability(
    resourceGroupName: string,
    location: string,
    parameters: CheckNameAvailabilityRequest,
    options?: BackupVaultsCheckNameAvailabilityOptionalParams,
  ): Promise<BackupVaultsCheckNameAvailabilityResponse>;
}
