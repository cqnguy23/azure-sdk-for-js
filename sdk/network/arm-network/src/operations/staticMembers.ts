/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { StaticMembers } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { NetworkManagementClient } from "../networkManagementClient";
import {
  StaticMember,
  StaticMembersListNextOptionalParams,
  StaticMembersListOptionalParams,
  StaticMembersListResponse,
  StaticMembersGetOptionalParams,
  StaticMembersGetResponse,
  StaticMembersCreateOrUpdateOptionalParams,
  StaticMembersCreateOrUpdateResponse,
  StaticMembersDeleteOptionalParams,
  StaticMembersListNextResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing StaticMembers operations. */
export class StaticMembersImpl implements StaticMembers {
  private readonly client: NetworkManagementClient;

  /**
   * Initialize a new instance of the class StaticMembers class.
   * @param client Reference to the service client
   */
  constructor(client: NetworkManagementClient) {
    this.client = client;
  }

  /**
   * Lists the specified static member.
   * @param resourceGroupName The name of the resource group.
   * @param networkManagerName The name of the network manager.
   * @param networkGroupName The name of the network group.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    networkManagerName: string,
    networkGroupName: string,
    options?: StaticMembersListOptionalParams,
  ): PagedAsyncIterableIterator<StaticMember> {
    const iter = this.listPagingAll(
      resourceGroupName,
      networkManagerName,
      networkGroupName,
      options,
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listPagingPage(
          resourceGroupName,
          networkManagerName,
          networkGroupName,
          options,
          settings,
        );
      },
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    networkManagerName: string,
    networkGroupName: string,
    options?: StaticMembersListOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<StaticMember[]> {
    let result: StaticMembersListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(
        resourceGroupName,
        networkManagerName,
        networkGroupName,
        options,
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        networkManagerName,
        networkGroupName,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    resourceGroupName: string,
    networkManagerName: string,
    networkGroupName: string,
    options?: StaticMembersListOptionalParams,
  ): AsyncIterableIterator<StaticMember> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      networkManagerName,
      networkGroupName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Gets the specified static member.
   * @param resourceGroupName The name of the resource group.
   * @param networkManagerName The name of the network manager.
   * @param networkGroupName The name of the network group.
   * @param staticMemberName The name of the static member.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    networkManagerName: string,
    networkGroupName: string,
    staticMemberName: string,
    options?: StaticMembersGetOptionalParams,
  ): Promise<StaticMembersGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        networkManagerName,
        networkGroupName,
        staticMemberName,
        options,
      },
      getOperationSpec,
    );
  }

  /**
   * Creates or updates a static member.
   * @param resourceGroupName The name of the resource group.
   * @param networkManagerName The name of the network manager.
   * @param networkGroupName The name of the network group.
   * @param staticMemberName The name of the static member.
   * @param parameters Parameters supplied to the specify the static member to create
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    networkManagerName: string,
    networkGroupName: string,
    staticMemberName: string,
    parameters: StaticMember,
    options?: StaticMembersCreateOrUpdateOptionalParams,
  ): Promise<StaticMembersCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        networkManagerName,
        networkGroupName,
        staticMemberName,
        parameters,
        options,
      },
      createOrUpdateOperationSpec,
    );
  }

  /**
   * Deletes a static member.
   * @param resourceGroupName The name of the resource group.
   * @param networkManagerName The name of the network manager.
   * @param networkGroupName The name of the network group.
   * @param staticMemberName The name of the static member.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    networkManagerName: string,
    networkGroupName: string,
    staticMemberName: string,
    options?: StaticMembersDeleteOptionalParams,
  ): Promise<void> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        networkManagerName,
        networkGroupName,
        staticMemberName,
        options,
      },
      deleteOperationSpec,
    );
  }

  /**
   * Lists the specified static member.
   * @param resourceGroupName The name of the resource group.
   * @param networkManagerName The name of the network manager.
   * @param networkGroupName The name of the network group.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    networkManagerName: string,
    networkGroupName: string,
    options?: StaticMembersListOptionalParams,
  ): Promise<StaticMembersListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, networkManagerName, networkGroupName, options },
      listOperationSpec,
    );
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group.
   * @param networkManagerName The name of the network manager.
   * @param networkGroupName The name of the network group.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    networkManagerName: string,
    networkGroupName: string,
    nextLink: string,
    options?: StaticMembersListNextOptionalParams,
  ): Promise<StaticMembersListNextResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        networkManagerName,
        networkGroupName,
        nextLink,
        options,
      },
      listNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkManagers/{networkManagerName}/networkGroups/{networkGroupName}/staticMembers/{staticMemberName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.StaticMember,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.networkManagerName,
    Parameters.networkGroupName,
    Parameters.staticMemberName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkManagers/{networkManagerName}/networkGroups/{networkGroupName}/staticMembers/{staticMemberName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.StaticMember,
    },
    201: {
      bodyMapper: Mappers.StaticMember,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  requestBody: Parameters.parameters40,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.networkManagerName,
    Parameters.networkGroupName,
    Parameters.staticMemberName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkManagers/{networkManagerName}/networkGroups/{networkGroupName}/staticMembers/{staticMemberName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.networkManagerName,
    Parameters.networkGroupName,
    Parameters.staticMemberName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkManagers/{networkManagerName}/networkGroups/{networkGroupName}/staticMembers",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.StaticMemberListResult,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.top,
    Parameters.skipToken1,
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.networkManagerName,
    Parameters.networkGroupName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.StaticMemberListResult,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.networkManagerName,
    Parameters.networkGroupName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
