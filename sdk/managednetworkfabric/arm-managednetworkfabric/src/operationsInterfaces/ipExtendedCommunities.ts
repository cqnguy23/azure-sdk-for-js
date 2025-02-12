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
  IpExtendedCommunity,
  IpExtendedCommunitiesListByResourceGroupOptionalParams,
  IpExtendedCommunitiesListBySubscriptionOptionalParams,
  IpExtendedCommunitiesCreateOptionalParams,
  IpExtendedCommunitiesCreateResponse,
  IpExtendedCommunitiesGetOptionalParams,
  IpExtendedCommunitiesGetResponse,
  IpExtendedCommunityPatch,
  IpExtendedCommunitiesUpdateOptionalParams,
  IpExtendedCommunitiesUpdateResponse,
  IpExtendedCommunitiesDeleteOptionalParams,
  IpExtendedCommunitiesDeleteResponse
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a IpExtendedCommunities. */
export interface IpExtendedCommunities {
  /**
   * Implements IpExtendedCommunities list by resource group GET method.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: IpExtendedCommunitiesListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<IpExtendedCommunity>;
  /**
   * Implements IpExtendedCommunities list by subscription GET method.
   * @param options The options parameters.
   */
  listBySubscription(
    options?: IpExtendedCommunitiesListBySubscriptionOptionalParams
  ): PagedAsyncIterableIterator<IpExtendedCommunity>;
  /**
   * Implements IP Extended Community PUT method.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param ipExtendedCommunityName Name of the IP Extended Community.
   * @param body Request payload.
   * @param options The options parameters.
   */
  beginCreate(
    resourceGroupName: string,
    ipExtendedCommunityName: string,
    body: IpExtendedCommunity,
    options?: IpExtendedCommunitiesCreateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<IpExtendedCommunitiesCreateResponse>,
      IpExtendedCommunitiesCreateResponse
    >
  >;
  /**
   * Implements IP Extended Community PUT method.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param ipExtendedCommunityName Name of the IP Extended Community.
   * @param body Request payload.
   * @param options The options parameters.
   */
  beginCreateAndWait(
    resourceGroupName: string,
    ipExtendedCommunityName: string,
    body: IpExtendedCommunity,
    options?: IpExtendedCommunitiesCreateOptionalParams
  ): Promise<IpExtendedCommunitiesCreateResponse>;
  /**
   * Implements IP Extended Community GET method.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param ipExtendedCommunityName Name of the IP Extended Community.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    ipExtendedCommunityName: string,
    options?: IpExtendedCommunitiesGetOptionalParams
  ): Promise<IpExtendedCommunitiesGetResponse>;
  /**
   * API to update certain properties of the IP Extended Community resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param ipExtendedCommunityName Name of the IP Extended Community.
   * @param body IP Extended Community properties to update.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    ipExtendedCommunityName: string,
    body: IpExtendedCommunityPatch,
    options?: IpExtendedCommunitiesUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<IpExtendedCommunitiesUpdateResponse>,
      IpExtendedCommunitiesUpdateResponse
    >
  >;
  /**
   * API to update certain properties of the IP Extended Community resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param ipExtendedCommunityName Name of the IP Extended Community.
   * @param body IP Extended Community properties to update.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    ipExtendedCommunityName: string,
    body: IpExtendedCommunityPatch,
    options?: IpExtendedCommunitiesUpdateOptionalParams
  ): Promise<IpExtendedCommunitiesUpdateResponse>;
  /**
   * Implements IP Extended Community DELETE method.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param ipExtendedCommunityName Name of the IP Extended Community.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    ipExtendedCommunityName: string,
    options?: IpExtendedCommunitiesDeleteOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<IpExtendedCommunitiesDeleteResponse>,
      IpExtendedCommunitiesDeleteResponse
    >
  >;
  /**
   * Implements IP Extended Community DELETE method.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param ipExtendedCommunityName Name of the IP Extended Community.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    ipExtendedCommunityName: string,
    options?: IpExtendedCommunitiesDeleteOptionalParams
  ): Promise<IpExtendedCommunitiesDeleteResponse>;
}
