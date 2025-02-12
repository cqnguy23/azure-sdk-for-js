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
  IpCommunity,
  IpCommunitiesListByResourceGroupOptionalParams,
  IpCommunitiesListBySubscriptionOptionalParams,
  IpCommunitiesCreateOptionalParams,
  IpCommunitiesCreateResponse,
  IpCommunitiesGetOptionalParams,
  IpCommunitiesGetResponse,
  IpCommunityPatch,
  IpCommunitiesUpdateOptionalParams,
  IpCommunitiesUpdateResponse,
  IpCommunitiesDeleteOptionalParams,
  IpCommunitiesDeleteResponse
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a IpCommunities. */
export interface IpCommunities {
  /**
   * Implements IP Communities list by resource group GET method.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: IpCommunitiesListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<IpCommunity>;
  /**
   * Implements IP Communities list by subscription GET method.
   * @param options The options parameters.
   */
  listBySubscription(
    options?: IpCommunitiesListBySubscriptionOptionalParams
  ): PagedAsyncIterableIterator<IpCommunity>;
  /**
   * Implements an IP Community PUT method.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param ipCommunityName Name of the IP Community.
   * @param body Request payload.
   * @param options The options parameters.
   */
  beginCreate(
    resourceGroupName: string,
    ipCommunityName: string,
    body: IpCommunity,
    options?: IpCommunitiesCreateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<IpCommunitiesCreateResponse>,
      IpCommunitiesCreateResponse
    >
  >;
  /**
   * Implements an IP Community PUT method.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param ipCommunityName Name of the IP Community.
   * @param body Request payload.
   * @param options The options parameters.
   */
  beginCreateAndWait(
    resourceGroupName: string,
    ipCommunityName: string,
    body: IpCommunity,
    options?: IpCommunitiesCreateOptionalParams
  ): Promise<IpCommunitiesCreateResponse>;
  /**
   * Implements an IP Community GET method.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param ipCommunityName Name of the IP Community.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    ipCommunityName: string,
    options?: IpCommunitiesGetOptionalParams
  ): Promise<IpCommunitiesGetResponse>;
  /**
   * API to update certain properties of the IP Community resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param ipCommunityName Name of the IP Community.
   * @param body IP Community properties to update.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    ipCommunityName: string,
    body: IpCommunityPatch,
    options?: IpCommunitiesUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<IpCommunitiesUpdateResponse>,
      IpCommunitiesUpdateResponse
    >
  >;
  /**
   * API to update certain properties of the IP Community resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param ipCommunityName Name of the IP Community.
   * @param body IP Community properties to update.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    ipCommunityName: string,
    body: IpCommunityPatch,
    options?: IpCommunitiesUpdateOptionalParams
  ): Promise<IpCommunitiesUpdateResponse>;
  /**
   * Implements IP Community DELETE method.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param ipCommunityName Name of the IP Community.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    ipCommunityName: string,
    options?: IpCommunitiesDeleteOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<IpCommunitiesDeleteResponse>,
      IpCommunitiesDeleteResponse
    >
  >;
  /**
   * Implements IP Community DELETE method.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param ipCommunityName Name of the IP Community.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    ipCommunityName: string,
    options?: IpCommunitiesDeleteOptionalParams
  ): Promise<IpCommunitiesDeleteResponse>;
}
