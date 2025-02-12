/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { InternalNetworks } from "../operationsInterfaces/index.js";
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
  InternalNetwork,
  InternalNetworksListByL3IsolationDomainNextOptionalParams,
  InternalNetworksListByL3IsolationDomainOptionalParams,
  InternalNetworksListByL3IsolationDomainResponse,
  InternalNetworksCreateOptionalParams,
  InternalNetworksCreateResponse,
  InternalNetworksGetOptionalParams,
  InternalNetworksGetResponse,
  InternalNetworkPatch,
  InternalNetworksUpdateOptionalParams,
  InternalNetworksUpdateResponse,
  InternalNetworksDeleteOptionalParams,
  UpdateAdministrativeState,
  InternalNetworksUpdateAdministrativeStateOptionalParams,
  InternalNetworksUpdateAdministrativeStateResponse,
  InternalNetworksUpdateBgpAdministrativeStateOptionalParams,
  InternalNetworksUpdateBgpAdministrativeStateResponse,
  InternalNetworksUpdateStaticRouteBfdAdministrativeStateOptionalParams,
  InternalNetworksUpdateStaticRouteBfdAdministrativeStateResponse,
  InternalNetworksListByL3IsolationDomainNextResponse
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing InternalNetworks operations. */
export class InternalNetworksImpl implements InternalNetworks {
  private readonly client: AzureNetworkFabricManagementServiceAPI;

  /**
   * Initialize a new instance of the class InternalNetworks class.
   * @param client Reference to the service client
   */
  constructor(client: AzureNetworkFabricManagementServiceAPI) {
    this.client = client;
  }

  /**
   * Displays InternalNetworks list by resource group GET method.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param l3IsolationDomainName Name of the L3 Isolation Domain.
   * @param options The options parameters.
   */
  public listByL3IsolationDomain(
    resourceGroupName: string,
    l3IsolationDomainName: string,
    options?: InternalNetworksListByL3IsolationDomainOptionalParams
  ): PagedAsyncIterableIterator<InternalNetwork> {
    const iter = this.listByL3IsolationDomainPagingAll(
      resourceGroupName,
      l3IsolationDomainName,
      options
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
        return this.listByL3IsolationDomainPagingPage(
          resourceGroupName,
          l3IsolationDomainName,
          options,
          settings
        );
      }
    };
  }

  private async *listByL3IsolationDomainPagingPage(
    resourceGroupName: string,
    l3IsolationDomainName: string,
    options?: InternalNetworksListByL3IsolationDomainOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<InternalNetwork[]> {
    let result: InternalNetworksListByL3IsolationDomainResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByL3IsolationDomain(
        resourceGroupName,
        l3IsolationDomainName,
        options
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByL3IsolationDomainNext(
        resourceGroupName,
        l3IsolationDomainName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByL3IsolationDomainPagingAll(
    resourceGroupName: string,
    l3IsolationDomainName: string,
    options?: InternalNetworksListByL3IsolationDomainOptionalParams
  ): AsyncIterableIterator<InternalNetwork> {
    for await (const page of this.listByL3IsolationDomainPagingPage(
      resourceGroupName,
      l3IsolationDomainName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Creates InternalNetwork PUT method.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param l3IsolationDomainName Name of the L3 Isolation Domain.
   * @param internalNetworkName Name of the Internal Network.
   * @param body Request payload.
   * @param options The options parameters.
   */
  async beginCreate(
    resourceGroupName: string,
    l3IsolationDomainName: string,
    internalNetworkName: string,
    body: InternalNetwork,
    options?: InternalNetworksCreateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<InternalNetworksCreateResponse>,
      InternalNetworksCreateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<InternalNetworksCreateResponse> => {
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
      args: {
        resourceGroupName,
        l3IsolationDomainName,
        internalNetworkName,
        body,
        options
      },
      spec: createOperationSpec
    });
    const poller = await createHttpPoller<
      InternalNetworksCreateResponse,
      OperationState<InternalNetworksCreateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "azure-async-operation"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Creates InternalNetwork PUT method.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param l3IsolationDomainName Name of the L3 Isolation Domain.
   * @param internalNetworkName Name of the Internal Network.
   * @param body Request payload.
   * @param options The options parameters.
   */
  async beginCreateAndWait(
    resourceGroupName: string,
    l3IsolationDomainName: string,
    internalNetworkName: string,
    body: InternalNetwork,
    options?: InternalNetworksCreateOptionalParams
  ): Promise<InternalNetworksCreateResponse> {
    const poller = await this.beginCreate(
      resourceGroupName,
      l3IsolationDomainName,
      internalNetworkName,
      body,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Gets a InternalNetworks.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param l3IsolationDomainName Name of the L3 Isolation Domain.
   * @param internalNetworkName Name of the Internal Network.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    l3IsolationDomainName: string,
    internalNetworkName: string,
    options?: InternalNetworksGetOptionalParams
  ): Promise<InternalNetworksGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        l3IsolationDomainName,
        internalNetworkName,
        options
      },
      getOperationSpec
    );
  }

  /**
   * Updates a InternalNetworks.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param l3IsolationDomainName Name of the L3 Isolation Domain.
   * @param internalNetworkName Name of the Internal Network.
   * @param body InternalNetwork properties to update. Only annotations are supported.
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    l3IsolationDomainName: string,
    internalNetworkName: string,
    body: InternalNetworkPatch,
    options?: InternalNetworksUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<InternalNetworksUpdateResponse>,
      InternalNetworksUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<InternalNetworksUpdateResponse> => {
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
      args: {
        resourceGroupName,
        l3IsolationDomainName,
        internalNetworkName,
        body,
        options
      },
      spec: updateOperationSpec
    });
    const poller = await createHttpPoller<
      InternalNetworksUpdateResponse,
      OperationState<InternalNetworksUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Updates a InternalNetworks.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param l3IsolationDomainName Name of the L3 Isolation Domain.
   * @param internalNetworkName Name of the Internal Network.
   * @param body InternalNetwork properties to update. Only annotations are supported.
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    l3IsolationDomainName: string,
    internalNetworkName: string,
    body: InternalNetworkPatch,
    options?: InternalNetworksUpdateOptionalParams
  ): Promise<InternalNetworksUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      l3IsolationDomainName,
      internalNetworkName,
      body,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Implements InternalNetworks DELETE method.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param l3IsolationDomainName Name of the L3 Isolation Domain.
   * @param internalNetworkName Name of the Internal Network.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    l3IsolationDomainName: string,
    internalNetworkName: string,
    options?: InternalNetworksDeleteOptionalParams
  ): Promise<SimplePollerLike<OperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
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
      args: {
        resourceGroupName,
        l3IsolationDomainName,
        internalNetworkName,
        options
      },
      spec: deleteOperationSpec
    });
    const poller = await createHttpPoller<void, OperationState<void>>(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Implements InternalNetworks DELETE method.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param l3IsolationDomainName Name of the L3 Isolation Domain.
   * @param internalNetworkName Name of the Internal Network.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    l3IsolationDomainName: string,
    internalNetworkName: string,
    options?: InternalNetworksDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      l3IsolationDomainName,
      internalNetworkName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Displays InternalNetworks list by resource group GET method.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param l3IsolationDomainName Name of the L3 Isolation Domain.
   * @param options The options parameters.
   */
  private _listByL3IsolationDomain(
    resourceGroupName: string,
    l3IsolationDomainName: string,
    options?: InternalNetworksListByL3IsolationDomainOptionalParams
  ): Promise<InternalNetworksListByL3IsolationDomainResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, l3IsolationDomainName, options },
      listByL3IsolationDomainOperationSpec
    );
  }

  /**
   * Update Administrative state of  InternalNetworks on resources referred by their resource ids.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param l3IsolationDomainName Name of the L3 Isolation Domain.
   * @param internalNetworkName Name of the Internal Network.
   * @param body Request payload.
   * @param options The options parameters.
   */
  async beginUpdateAdministrativeState(
    resourceGroupName: string,
    l3IsolationDomainName: string,
    internalNetworkName: string,
    body: UpdateAdministrativeState,
    options?: InternalNetworksUpdateAdministrativeStateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<InternalNetworksUpdateAdministrativeStateResponse>,
      InternalNetworksUpdateAdministrativeStateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<InternalNetworksUpdateAdministrativeStateResponse> => {
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
      args: {
        resourceGroupName,
        l3IsolationDomainName,
        internalNetworkName,
        body,
        options
      },
      spec: updateAdministrativeStateOperationSpec
    });
    const poller = await createHttpPoller<
      InternalNetworksUpdateAdministrativeStateResponse,
      OperationState<InternalNetworksUpdateAdministrativeStateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Update Administrative state of  InternalNetworks on resources referred by their resource ids.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param l3IsolationDomainName Name of the L3 Isolation Domain.
   * @param internalNetworkName Name of the Internal Network.
   * @param body Request payload.
   * @param options The options parameters.
   */
  async beginUpdateAdministrativeStateAndWait(
    resourceGroupName: string,
    l3IsolationDomainName: string,
    internalNetworkName: string,
    body: UpdateAdministrativeState,
    options?: InternalNetworksUpdateAdministrativeStateOptionalParams
  ): Promise<InternalNetworksUpdateAdministrativeStateResponse> {
    const poller = await this.beginUpdateAdministrativeState(
      resourceGroupName,
      l3IsolationDomainName,
      internalNetworkName,
      body,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Update BGP state for internalNetwork. Allowed only on edge devices.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param l3IsolationDomainName Name of the L3 Isolation Domain.
   * @param internalNetworkName Name of the Internal Network.
   * @param body Request payload.
   * @param options The options parameters.
   */
  async beginUpdateBgpAdministrativeState(
    resourceGroupName: string,
    l3IsolationDomainName: string,
    internalNetworkName: string,
    body: UpdateAdministrativeState,
    options?: InternalNetworksUpdateBgpAdministrativeStateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<InternalNetworksUpdateBgpAdministrativeStateResponse>,
      InternalNetworksUpdateBgpAdministrativeStateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<InternalNetworksUpdateBgpAdministrativeStateResponse> => {
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
      args: {
        resourceGroupName,
        l3IsolationDomainName,
        internalNetworkName,
        body,
        options
      },
      spec: updateBgpAdministrativeStateOperationSpec
    });
    const poller = await createHttpPoller<
      InternalNetworksUpdateBgpAdministrativeStateResponse,
      OperationState<InternalNetworksUpdateBgpAdministrativeStateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Update BGP state for internalNetwork. Allowed only on edge devices.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param l3IsolationDomainName Name of the L3 Isolation Domain.
   * @param internalNetworkName Name of the Internal Network.
   * @param body Request payload.
   * @param options The options parameters.
   */
  async beginUpdateBgpAdministrativeStateAndWait(
    resourceGroupName: string,
    l3IsolationDomainName: string,
    internalNetworkName: string,
    body: UpdateAdministrativeState,
    options?: InternalNetworksUpdateBgpAdministrativeStateOptionalParams
  ): Promise<InternalNetworksUpdateBgpAdministrativeStateResponse> {
    const poller = await this.beginUpdateBgpAdministrativeState(
      resourceGroupName,
      l3IsolationDomainName,
      internalNetworkName,
      body,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Update Static Route BFD administrative state for internalNetwork.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param l3IsolationDomainName Name of the L3 Isolation Domain.
   * @param internalNetworkName Name of the Internal Network.
   * @param body Request payload.
   * @param options The options parameters.
   */
  async beginUpdateStaticRouteBfdAdministrativeState(
    resourceGroupName: string,
    l3IsolationDomainName: string,
    internalNetworkName: string,
    body: UpdateAdministrativeState,
    options?: InternalNetworksUpdateStaticRouteBfdAdministrativeStateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<
        InternalNetworksUpdateStaticRouteBfdAdministrativeStateResponse
      >,
      InternalNetworksUpdateStaticRouteBfdAdministrativeStateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<InternalNetworksUpdateStaticRouteBfdAdministrativeStateResponse> => {
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
      args: {
        resourceGroupName,
        l3IsolationDomainName,
        internalNetworkName,
        body,
        options
      },
      spec: updateStaticRouteBfdAdministrativeStateOperationSpec
    });
    const poller = await createHttpPoller<
      InternalNetworksUpdateStaticRouteBfdAdministrativeStateResponse,
      OperationState<
        InternalNetworksUpdateStaticRouteBfdAdministrativeStateResponse
      >
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Update Static Route BFD administrative state for internalNetwork.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param l3IsolationDomainName Name of the L3 Isolation Domain.
   * @param internalNetworkName Name of the Internal Network.
   * @param body Request payload.
   * @param options The options parameters.
   */
  async beginUpdateStaticRouteBfdAdministrativeStateAndWait(
    resourceGroupName: string,
    l3IsolationDomainName: string,
    internalNetworkName: string,
    body: UpdateAdministrativeState,
    options?: InternalNetworksUpdateStaticRouteBfdAdministrativeStateOptionalParams
  ): Promise<InternalNetworksUpdateStaticRouteBfdAdministrativeStateResponse> {
    const poller = await this.beginUpdateStaticRouteBfdAdministrativeState(
      resourceGroupName,
      l3IsolationDomainName,
      internalNetworkName,
      body,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * ListByL3IsolationDomainNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param l3IsolationDomainName Name of the L3 Isolation Domain.
   * @param nextLink The nextLink from the previous successful call to the ListByL3IsolationDomain
   *                 method.
   * @param options The options parameters.
   */
  private _listByL3IsolationDomainNext(
    resourceGroupName: string,
    l3IsolationDomainName: string,
    nextLink: string,
    options?: InternalNetworksListByL3IsolationDomainNextOptionalParams
  ): Promise<InternalNetworksListByL3IsolationDomainNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, l3IsolationDomainName, nextLink, options },
      listByL3IsolationDomainNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/l3IsolationDomains/{l3IsolationDomainName}/internalNetworks/{internalNetworkName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.InternalNetwork
    },
    201: {
      bodyMapper: Mappers.InternalNetwork
    },
    202: {
      bodyMapper: Mappers.InternalNetwork
    },
    204: {
      bodyMapper: Mappers.InternalNetwork
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.body17,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.l3IsolationDomainName,
    Parameters.internalNetworkName
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/l3IsolationDomains/{l3IsolationDomainName}/internalNetworks/{internalNetworkName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.InternalNetwork
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
    Parameters.l3IsolationDomainName,
    Parameters.internalNetworkName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/l3IsolationDomains/{l3IsolationDomainName}/internalNetworks/{internalNetworkName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.InternalNetwork
    },
    201: {
      bodyMapper: Mappers.InternalNetwork
    },
    202: {
      bodyMapper: Mappers.InternalNetwork
    },
    204: {
      bodyMapper: Mappers.InternalNetwork
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.body18,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.l3IsolationDomainName,
    Parameters.internalNetworkName
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/l3IsolationDomains/{l3IsolationDomainName}/internalNetworks/{internalNetworkName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.l3IsolationDomainName,
    Parameters.internalNetworkName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByL3IsolationDomainOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/l3IsolationDomains/{l3IsolationDomainName}/internalNetworks",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.InternalNetworksList
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
    Parameters.l3IsolationDomainName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const updateAdministrativeStateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/l3IsolationDomains/{l3IsolationDomainName}/internalNetworks/{internalNetworkName}/updateAdministrativeState",
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
    Parameters.l3IsolationDomainName,
    Parameters.internalNetworkName
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const updateBgpAdministrativeStateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/l3IsolationDomains/{l3IsolationDomainName}/internalNetworks/{internalNetworkName}/updateBgpAdministrativeState",
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
    Parameters.l3IsolationDomainName,
    Parameters.internalNetworkName
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const updateStaticRouteBfdAdministrativeStateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/l3IsolationDomains/{l3IsolationDomainName}/internalNetworks/{internalNetworkName}/updateStaticRouteBfdAdministrativeState",
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
    Parameters.l3IsolationDomainName,
    Parameters.internalNetworkName
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const listByL3IsolationDomainNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.InternalNetworksList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.nextLink,
    Parameters.l3IsolationDomainName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
