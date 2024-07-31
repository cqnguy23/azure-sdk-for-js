/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { AdvancedThreatProtectionSettings } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { MySQLManagementFlexibleServerClient } from "../mySQLManagementFlexibleServerClient";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller,
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl";
import {
  AdvancedThreatProtection,
  AdvancedThreatProtectionSettingsListNextOptionalParams,
  AdvancedThreatProtectionSettingsListOptionalParams,
  AdvancedThreatProtectionSettingsListResponse,
  AdvancedThreatProtectionName,
  AdvancedThreatProtectionSettingsGetOptionalParams,
  AdvancedThreatProtectionSettingsGetResponse,
  AdvancedThreatProtectionForUpdate,
  AdvancedThreatProtectionSettingsUpdateOptionalParams,
  AdvancedThreatProtectionSettingsUpdateResponse,
  AdvancedThreatProtectionSettingsUpdatePutOptionalParams,
  AdvancedThreatProtectionSettingsUpdatePutResponse,
  AdvancedThreatProtectionSettingsListNextResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing AdvancedThreatProtectionSettings operations. */
export class AdvancedThreatProtectionSettingsImpl
  implements AdvancedThreatProtectionSettings
{
  private readonly client: MySQLManagementFlexibleServerClient;

  /**
   * Initialize a new instance of the class AdvancedThreatProtectionSettings class.
   * @param client Reference to the service client
   */
  constructor(client: MySQLManagementFlexibleServerClient) {
    this.client = client;
  }

  /**
   * Gets a list of server's Advanced Threat Protection states.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    serverName: string,
    options?: AdvancedThreatProtectionSettingsListOptionalParams,
  ): PagedAsyncIterableIterator<AdvancedThreatProtection> {
    const iter = this.listPagingAll(resourceGroupName, serverName, options);
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
          serverName,
          options,
          settings,
        );
      },
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    serverName: string,
    options?: AdvancedThreatProtectionSettingsListOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<AdvancedThreatProtection[]> {
    let result: AdvancedThreatProtectionSettingsListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(resourceGroupName, serverName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        serverName,
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
    serverName: string,
    options?: AdvancedThreatProtectionSettingsListOptionalParams,
  ): AsyncIterableIterator<AdvancedThreatProtection> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      serverName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Get a server's Advanced Threat Protection state
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param advancedThreatProtectionName The name of the Advanced Threat Protection state.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serverName: string,
    advancedThreatProtectionName: AdvancedThreatProtectionName,
    options?: AdvancedThreatProtectionSettingsGetOptionalParams,
  ): Promise<AdvancedThreatProtectionSettingsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serverName, advancedThreatProtectionName, options },
      getOperationSpec,
    );
  }

  /**
   * Updates a server's Advanced Threat Protection state.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param advancedThreatProtectionName The name of the Advanced Threat Protection state.
   * @param parameters The server's Advanced Threat Protection body to update.
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    serverName: string,
    advancedThreatProtectionName: AdvancedThreatProtectionName,
    parameters: AdvancedThreatProtectionForUpdate,
    options?: AdvancedThreatProtectionSettingsUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<AdvancedThreatProtectionSettingsUpdateResponse>,
      AdvancedThreatProtectionSettingsUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<AdvancedThreatProtectionSettingsUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ) => {
      let currentRawResponse: coreClient.FullOperationResponse | undefined =
        undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown,
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback,
        },
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON(),
        },
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: {
        resourceGroupName,
        serverName,
        advancedThreatProtectionName,
        parameters,
        options,
      },
      spec: updateOperationSpec,
    });
    const poller = await createHttpPoller<
      AdvancedThreatProtectionSettingsUpdateResponse,
      OperationState<AdvancedThreatProtectionSettingsUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Updates a server's Advanced Threat Protection state.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param advancedThreatProtectionName The name of the Advanced Threat Protection state.
   * @param parameters The server's Advanced Threat Protection body to update.
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    serverName: string,
    advancedThreatProtectionName: AdvancedThreatProtectionName,
    parameters: AdvancedThreatProtectionForUpdate,
    options?: AdvancedThreatProtectionSettingsUpdateOptionalParams,
  ): Promise<AdvancedThreatProtectionSettingsUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      serverName,
      advancedThreatProtectionName,
      parameters,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Updates a server's Advanced Threat Protection state.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param advancedThreatProtectionName The name of the Advanced Threat Protection state.
   * @param parameters The server's Advanced Threat Protection body to update.
   * @param options The options parameters.
   */
  async beginUpdatePut(
    resourceGroupName: string,
    serverName: string,
    advancedThreatProtectionName: AdvancedThreatProtectionName,
    parameters: AdvancedThreatProtection,
    options?: AdvancedThreatProtectionSettingsUpdatePutOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<AdvancedThreatProtectionSettingsUpdatePutResponse>,
      AdvancedThreatProtectionSettingsUpdatePutResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<AdvancedThreatProtectionSettingsUpdatePutResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ) => {
      let currentRawResponse: coreClient.FullOperationResponse | undefined =
        undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown,
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback,
        },
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON(),
        },
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: {
        resourceGroupName,
        serverName,
        advancedThreatProtectionName,
        parameters,
        options,
      },
      spec: updatePutOperationSpec,
    });
    const poller = await createHttpPoller<
      AdvancedThreatProtectionSettingsUpdatePutResponse,
      OperationState<AdvancedThreatProtectionSettingsUpdatePutResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Updates a server's Advanced Threat Protection state.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param advancedThreatProtectionName The name of the Advanced Threat Protection state.
   * @param parameters The server's Advanced Threat Protection body to update.
   * @param options The options parameters.
   */
  async beginUpdatePutAndWait(
    resourceGroupName: string,
    serverName: string,
    advancedThreatProtectionName: AdvancedThreatProtectionName,
    parameters: AdvancedThreatProtection,
    options?: AdvancedThreatProtectionSettingsUpdatePutOptionalParams,
  ): Promise<AdvancedThreatProtectionSettingsUpdatePutResponse> {
    const poller = await this.beginUpdatePut(
      resourceGroupName,
      serverName,
      advancedThreatProtectionName,
      parameters,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Gets a list of server's Advanced Threat Protection states.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    serverName: string,
    options?: AdvancedThreatProtectionSettingsListOptionalParams,
  ): Promise<AdvancedThreatProtectionSettingsListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serverName, options },
      listOperationSpec,
    );
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    serverName: string,
    nextLink: string,
    options?: AdvancedThreatProtectionSettingsListNextOptionalParams,
  ): Promise<AdvancedThreatProtectionSettingsListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serverName, nextLink, options },
      listNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforMySQL/flexibleServers/{serverName}/advancedThreatProtectionSettings/{advancedThreatProtectionName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AdvancedThreatProtection,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.advancedThreatProtectionName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const updateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforMySQL/flexibleServers/{serverName}/advancedThreatProtectionSettings/{advancedThreatProtectionName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.AdvancedThreatProtection,
    },
    201: {
      bodyMapper: Mappers.AdvancedThreatProtection,
    },
    202: {
      bodyMapper: Mappers.AdvancedThreatProtection,
    },
    204: {
      bodyMapper: Mappers.AdvancedThreatProtection,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.parameters12,
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.advancedThreatProtectionName,
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer,
};
const updatePutOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforMySQL/flexibleServers/{serverName}/advancedThreatProtectionSettings/{advancedThreatProtectionName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.AdvancedThreatProtection,
    },
    201: {
      bodyMapper: Mappers.AdvancedThreatProtection,
    },
    202: {
      bodyMapper: Mappers.AdvancedThreatProtection,
    },
    204: {
      bodyMapper: Mappers.AdvancedThreatProtection,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.parameters13,
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.advancedThreatProtectionName,
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer,
};
const listOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforMySQL/flexibleServers/{serverName}/advancedThreatProtectionSettings",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AdvancedThreatProtectionListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AdvancedThreatProtectionListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.nextLink,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
