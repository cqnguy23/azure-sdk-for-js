/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { AccessControlLists } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { AzureNetworkFabricManagementServiceAPI } from "../azureNetworkFabricManagementServiceAPI.js";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl.js";
import {
  AccessControlList,
  AccessControlListsListByResourceGroupNextOptionalParams,
  AccessControlListsListByResourceGroupOptionalParams,
  AccessControlListsListByResourceGroupResponse,
  AccessControlListsListBySubscriptionNextOptionalParams,
  AccessControlListsListBySubscriptionOptionalParams,
  AccessControlListsListBySubscriptionResponse,
  AccessControlListsCreateOptionalParams,
  AccessControlListsCreateResponse,
  AccessControlListsGetOptionalParams,
  AccessControlListsGetResponse,
  AccessControlListPatch,
  AccessControlListsUpdateOptionalParams,
  AccessControlListsUpdateResponse,
  AccessControlListsDeleteOptionalParams,
  AccessControlListsDeleteResponse,
  UpdateAdministrativeState,
  AccessControlListsUpdateAdministrativeStateOptionalParams,
  AccessControlListsUpdateAdministrativeStateResponse,
  AccessControlListsResyncOptionalParams,
  AccessControlListsResyncResponse,
  AccessControlListsValidateConfigurationOptionalParams,
  AccessControlListsValidateConfigurationResponse,
  AccessControlListsListByResourceGroupNextResponse,
  AccessControlListsListBySubscriptionNextResponse
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing AccessControlLists operations. */
export class AccessControlListsImpl implements AccessControlLists {
  private readonly client: AzureNetworkFabricManagementServiceAPI;

  /**
   * Initialize a new instance of the class AccessControlLists class.
   * @param client Reference to the service client
   */
  constructor(client: AzureNetworkFabricManagementServiceAPI) {
    this.client = client;
  }

  /**
   * Implements AccessControlLists list by resource group GET method.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: AccessControlListsListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<AccessControlList> {
    const iter = this.listByResourceGroupPagingAll(resourceGroupName, options);
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
        return this.listByResourceGroupPagingPage(
          resourceGroupName,
          options,
          settings
        );
      }
    };
  }

  private async *listByResourceGroupPagingPage(
    resourceGroupName: string,
    options?: AccessControlListsListByResourceGroupOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<AccessControlList[]> {
    let result: AccessControlListsListByResourceGroupResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByResourceGroup(resourceGroupName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByResourceGroupNext(
        resourceGroupName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByResourceGroupPagingAll(
    resourceGroupName: string,
    options?: AccessControlListsListByResourceGroupOptionalParams
  ): AsyncIterableIterator<AccessControlList> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Implements AccessControlLists list by subscription GET method.
   * @param options The options parameters.
   */
  public listBySubscription(
    options?: AccessControlListsListBySubscriptionOptionalParams
  ): PagedAsyncIterableIterator<AccessControlList> {
    const iter = this.listBySubscriptionPagingAll(options);
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
        return this.listBySubscriptionPagingPage(options, settings);
      }
    };
  }

  private async *listBySubscriptionPagingPage(
    options?: AccessControlListsListBySubscriptionOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<AccessControlList[]> {
    let result: AccessControlListsListBySubscriptionResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listBySubscription(options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listBySubscriptionNext(continuationToken, options);
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listBySubscriptionPagingAll(
    options?: AccessControlListsListBySubscriptionOptionalParams
  ): AsyncIterableIterator<AccessControlList> {
    for await (const page of this.listBySubscriptionPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Implements Access Control List PUT method.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accessControlListName Name of the Access Control List.
   * @param body Request payload.
   * @param options The options parameters.
   */
  async beginCreate(
    resourceGroupName: string,
    accessControlListName: string,
    body: AccessControlList,
    options?: AccessControlListsCreateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<AccessControlListsCreateResponse>,
      AccessControlListsCreateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<AccessControlListsCreateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: { resourceGroupName, accessControlListName, body, options },
      spec: createOperationSpec
    });
    const poller = await createHttpPoller<
      AccessControlListsCreateResponse,
      OperationState<AccessControlListsCreateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "azure-async-operation"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Implements Access Control List PUT method.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accessControlListName Name of the Access Control List.
   * @param body Request payload.
   * @param options The options parameters.
   */
  async beginCreateAndWait(
    resourceGroupName: string,
    accessControlListName: string,
    body: AccessControlList,
    options?: AccessControlListsCreateOptionalParams
  ): Promise<AccessControlListsCreateResponse> {
    const poller = await this.beginCreate(
      resourceGroupName,
      accessControlListName,
      body,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Implements Access Control List GET method.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accessControlListName Name of the Access Control List.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    accessControlListName: string,
    options?: AccessControlListsGetOptionalParams
  ): Promise<AccessControlListsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accessControlListName, options },
      getOperationSpec
    );
  }

  /**
   * API to update certain properties of the Access Control List resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accessControlListName Name of the Access Control List.
   * @param body Access Control List properties to update.
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    accessControlListName: string,
    body: AccessControlListPatch,
    options?: AccessControlListsUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<AccessControlListsUpdateResponse>,
      AccessControlListsUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<AccessControlListsUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: { resourceGroupName, accessControlListName, body, options },
      spec: updateOperationSpec
    });
    const poller = await createHttpPoller<
      AccessControlListsUpdateResponse,
      OperationState<AccessControlListsUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location"
    });
    await poller.poll();
    return poller;
  }

  /**
   * API to update certain properties of the Access Control List resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accessControlListName Name of the Access Control List.
   * @param body Access Control List properties to update.
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    accessControlListName: string,
    body: AccessControlListPatch,
    options?: AccessControlListsUpdateOptionalParams
  ): Promise<AccessControlListsUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      accessControlListName,
      body,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Implements Access Control List DELETE method.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accessControlListName Name of the Access Control List.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    accessControlListName: string,
    options?: AccessControlListsDeleteOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<AccessControlListsDeleteResponse>,
      AccessControlListsDeleteResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<AccessControlListsDeleteResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: { resourceGroupName, accessControlListName, options },
      spec: deleteOperationSpec
    });
    const poller = await createHttpPoller<
      AccessControlListsDeleteResponse,
      OperationState<AccessControlListsDeleteResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "azure-async-operation"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Implements Access Control List DELETE method.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accessControlListName Name of the Access Control List.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    accessControlListName: string,
    options?: AccessControlListsDeleteOptionalParams
  ): Promise<AccessControlListsDeleteResponse> {
    const poller = await this.beginDelete(
      resourceGroupName,
      accessControlListName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Implements AccessControlLists list by resource group GET method.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: AccessControlListsListByResourceGroupOptionalParams
  ): Promise<AccessControlListsListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listByResourceGroupOperationSpec
    );
  }

  /**
   * Implements AccessControlLists list by subscription GET method.
   * @param options The options parameters.
   */
  private _listBySubscription(
    options?: AccessControlListsListBySubscriptionOptionalParams
  ): Promise<AccessControlListsListBySubscriptionResponse> {
    return this.client.sendOperationRequest(
      { options },
      listBySubscriptionOperationSpec
    );
  }

  /**
   * Implements the operation to the underlying resources.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accessControlListName Name of the Access Control List.
   * @param body Request payload.
   * @param options The options parameters.
   */
  async beginUpdateAdministrativeState(
    resourceGroupName: string,
    accessControlListName: string,
    body: UpdateAdministrativeState,
    options?: AccessControlListsUpdateAdministrativeStateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<AccessControlListsUpdateAdministrativeStateResponse>,
      AccessControlListsUpdateAdministrativeStateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<AccessControlListsUpdateAdministrativeStateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: { resourceGroupName, accessControlListName, body, options },
      spec: updateAdministrativeStateOperationSpec
    });
    const poller = await createHttpPoller<
      AccessControlListsUpdateAdministrativeStateResponse,
      OperationState<AccessControlListsUpdateAdministrativeStateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Implements the operation to the underlying resources.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accessControlListName Name of the Access Control List.
   * @param body Request payload.
   * @param options The options parameters.
   */
  async beginUpdateAdministrativeStateAndWait(
    resourceGroupName: string,
    accessControlListName: string,
    body: UpdateAdministrativeState,
    options?: AccessControlListsUpdateAdministrativeStateOptionalParams
  ): Promise<AccessControlListsUpdateAdministrativeStateResponse> {
    const poller = await this.beginUpdateAdministrativeState(
      resourceGroupName,
      accessControlListName,
      body,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Implements the operation to the underlying resources.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accessControlListName Name of the Access Control List.
   * @param options The options parameters.
   */
  async beginResync(
    resourceGroupName: string,
    accessControlListName: string,
    options?: AccessControlListsResyncOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<AccessControlListsResyncResponse>,
      AccessControlListsResyncResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<AccessControlListsResyncResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: { resourceGroupName, accessControlListName, options },
      spec: resyncOperationSpec
    });
    const poller = await createHttpPoller<
      AccessControlListsResyncResponse,
      OperationState<AccessControlListsResyncResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Implements the operation to the underlying resources.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accessControlListName Name of the Access Control List.
   * @param options The options parameters.
   */
  async beginResyncAndWait(
    resourceGroupName: string,
    accessControlListName: string,
    options?: AccessControlListsResyncOptionalParams
  ): Promise<AccessControlListsResyncResponse> {
    const poller = await this.beginResync(
      resourceGroupName,
      accessControlListName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Implements the operation to the underlying resources.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accessControlListName Name of the Access Control List.
   * @param options The options parameters.
   */
  async beginValidateConfiguration(
    resourceGroupName: string,
    accessControlListName: string,
    options?: AccessControlListsValidateConfigurationOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<AccessControlListsValidateConfigurationResponse>,
      AccessControlListsValidateConfigurationResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<AccessControlListsValidateConfigurationResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: { resourceGroupName, accessControlListName, options },
      spec: validateConfigurationOperationSpec
    });
    const poller = await createHttpPoller<
      AccessControlListsValidateConfigurationResponse,
      OperationState<AccessControlListsValidateConfigurationResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Implements the operation to the underlying resources.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accessControlListName Name of the Access Control List.
   * @param options The options parameters.
   */
  async beginValidateConfigurationAndWait(
    resourceGroupName: string,
    accessControlListName: string,
    options?: AccessControlListsValidateConfigurationOptionalParams
  ): Promise<AccessControlListsValidateConfigurationResponse> {
    const poller = await this.beginValidateConfiguration(
      resourceGroupName,
      accessControlListName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * ListByResourceGroupNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
   * @param options The options parameters.
   */
  private _listByResourceGroupNext(
    resourceGroupName: string,
    nextLink: string,
    options?: AccessControlListsListByResourceGroupNextOptionalParams
  ): Promise<AccessControlListsListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options },
      listByResourceGroupNextOperationSpec
    );
  }

  /**
   * ListBySubscriptionNext
   * @param nextLink The nextLink from the previous successful call to the ListBySubscription method.
   * @param options The options parameters.
   */
  private _listBySubscriptionNext(
    nextLink: string,
    options?: AccessControlListsListBySubscriptionNextOptionalParams
  ): Promise<AccessControlListsListBySubscriptionNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listBySubscriptionNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/accessControlLists/{accessControlListName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.AccessControlList
    },
    201: {
      bodyMapper: Mappers.AccessControlList
    },
    202: {
      bodyMapper: Mappers.AccessControlList
    },
    204: {
      bodyMapper: Mappers.AccessControlList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.body,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accessControlListName
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/accessControlLists/{accessControlListName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AccessControlList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accessControlListName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/accessControlLists/{accessControlListName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.AccessControlList
    },
    201: {
      bodyMapper: Mappers.AccessControlList
    },
    202: {
      bodyMapper: Mappers.AccessControlList
    },
    204: {
      bodyMapper: Mappers.AccessControlList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.body1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accessControlListName
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/accessControlLists/{accessControlListName}",
  httpMethod: "DELETE",
  responses: {
    200: {
      headersMapper: Mappers.AccessControlListsDeleteHeaders
    },
    201: {
      headersMapper: Mappers.AccessControlListsDeleteHeaders
    },
    202: {
      headersMapper: Mappers.AccessControlListsDeleteHeaders
    },
    204: {
      headersMapper: Mappers.AccessControlListsDeleteHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accessControlListName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/accessControlLists",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AccessControlListsListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listBySubscriptionOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.ManagedNetworkFabric/accessControlLists",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AccessControlListsListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const updateAdministrativeStateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/accessControlLists/{accessControlListName}/updateAdministrativeState",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.CommonPostActionResponseForStateUpdate
    },
    201: {
      bodyMapper: Mappers.CommonPostActionResponseForStateUpdate
    },
    202: {
      bodyMapper: Mappers.CommonPostActionResponseForStateUpdate
    },
    204: {
      bodyMapper: Mappers.CommonPostActionResponseForStateUpdate
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.body2,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accessControlListName
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const resyncOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/accessControlLists/{accessControlListName}/resync",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.CommonPostActionResponseForStateUpdate
    },
    201: {
      bodyMapper: Mappers.CommonPostActionResponseForStateUpdate
    },
    202: {
      bodyMapper: Mappers.CommonPostActionResponseForStateUpdate
    },
    204: {
      bodyMapper: Mappers.CommonPostActionResponseForStateUpdate
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accessControlListName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const validateConfigurationOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/accessControlLists/{accessControlListName}/validateConfiguration",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.ValidateConfigurationResponse
    },
    201: {
      bodyMapper: Mappers.ValidateConfigurationResponse
    },
    202: {
      bodyMapper: Mappers.ValidateConfigurationResponse
    },
    204: {
      bodyMapper: Mappers.ValidateConfigurationResponse
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accessControlListName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AccessControlListsListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listBySubscriptionNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AccessControlListsListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
