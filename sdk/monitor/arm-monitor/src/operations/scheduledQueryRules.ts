/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { ScheduledQueryRules } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { MonitorClient } from "../monitorClient.js";
import {
  ScheduledQueryRuleResource,
  ScheduledQueryRulesListBySubscriptionNextOptionalParams,
  ScheduledQueryRulesListBySubscriptionOptionalParams,
  ScheduledQueryRulesListBySubscriptionResponse,
  ScheduledQueryRulesListByResourceGroupNextOptionalParams,
  ScheduledQueryRulesListByResourceGroupOptionalParams,
  ScheduledQueryRulesListByResourceGroupResponse,
  ScheduledQueryRulesGetOptionalParams,
  ScheduledQueryRulesGetResponse,
  ScheduledQueryRulesCreateOrUpdateOptionalParams,
  ScheduledQueryRulesCreateOrUpdateResponse,
  ScheduledQueryRuleResourcePatch,
  ScheduledQueryRulesUpdateOptionalParams,
  ScheduledQueryRulesUpdateResponse,
  ScheduledQueryRulesDeleteOptionalParams,
  ScheduledQueryRulesListBySubscriptionNextResponse,
  ScheduledQueryRulesListByResourceGroupNextResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing ScheduledQueryRules operations. */
export class ScheduledQueryRulesImpl implements ScheduledQueryRules {
  private readonly client: MonitorClient;

  /**
   * Initialize a new instance of the class ScheduledQueryRules class.
   * @param client Reference to the service client
   */
  constructor(client: MonitorClient) {
    this.client = client;
  }

  /**
   * Retrieve a scheduled query rule definitions in a subscription.
   * @param options The options parameters.
   */
  public listBySubscription(
    options?: ScheduledQueryRulesListBySubscriptionOptionalParams,
  ): PagedAsyncIterableIterator<ScheduledQueryRuleResource> {
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
      },
    };
  }

  private async *listBySubscriptionPagingPage(
    options?: ScheduledQueryRulesListBySubscriptionOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<ScheduledQueryRuleResource[]> {
    let result: ScheduledQueryRulesListBySubscriptionResponse;
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
    options?: ScheduledQueryRulesListBySubscriptionOptionalParams,
  ): AsyncIterableIterator<ScheduledQueryRuleResource> {
    for await (const page of this.listBySubscriptionPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Retrieve scheduled query rule definitions in a resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: ScheduledQueryRulesListByResourceGroupOptionalParams,
  ): PagedAsyncIterableIterator<ScheduledQueryRuleResource> {
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
          settings,
        );
      },
    };
  }

  private async *listByResourceGroupPagingPage(
    resourceGroupName: string,
    options?: ScheduledQueryRulesListByResourceGroupOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<ScheduledQueryRuleResource[]> {
    let result: ScheduledQueryRulesListByResourceGroupResponse;
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
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByResourceGroupPagingAll(
    resourceGroupName: string,
    options?: ScheduledQueryRulesListByResourceGroupOptionalParams,
  ): AsyncIterableIterator<ScheduledQueryRuleResource> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Retrieve a scheduled query rule definitions in a subscription.
   * @param options The options parameters.
   */
  private _listBySubscription(
    options?: ScheduledQueryRulesListBySubscriptionOptionalParams,
  ): Promise<ScheduledQueryRulesListBySubscriptionResponse> {
    return this.client.sendOperationRequest(
      { options },
      listBySubscriptionOperationSpec,
    );
  }

  /**
   * Retrieve scheduled query rule definitions in a resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: ScheduledQueryRulesListByResourceGroupOptionalParams,
  ): Promise<ScheduledQueryRulesListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listByResourceGroupOperationSpec,
    );
  }

  /**
   * Retrieve an scheduled query rule definition.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param ruleName The name of the rule.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    ruleName: string,
    options?: ScheduledQueryRulesGetOptionalParams,
  ): Promise<ScheduledQueryRulesGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, ruleName, options },
      getOperationSpec,
    );
  }

  /**
   * Creates or updates a scheduled query rule.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param ruleName The name of the rule.
   * @param parameters The parameters of the rule to create or update.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    ruleName: string,
    parameters: ScheduledQueryRuleResource,
    options?: ScheduledQueryRulesCreateOrUpdateOptionalParams,
  ): Promise<ScheduledQueryRulesCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, ruleName, parameters, options },
      createOrUpdateOperationSpec,
    );
  }

  /**
   * Update a scheduled query rule.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param ruleName The name of the rule.
   * @param parameters The parameters of the rule to update.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    ruleName: string,
    parameters: ScheduledQueryRuleResourcePatch,
    options?: ScheduledQueryRulesUpdateOptionalParams,
  ): Promise<ScheduledQueryRulesUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, ruleName, parameters, options },
      updateOperationSpec,
    );
  }

  /**
   * Deletes a scheduled query rule.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param ruleName The name of the rule.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    ruleName: string,
    options?: ScheduledQueryRulesDeleteOptionalParams,
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, ruleName, options },
      deleteOperationSpec,
    );
  }

  /**
   * ListBySubscriptionNext
   * @param nextLink The nextLink from the previous successful call to the ListBySubscription method.
   * @param options The options parameters.
   */
  private _listBySubscriptionNext(
    nextLink: string,
    options?: ScheduledQueryRulesListBySubscriptionNextOptionalParams,
  ): Promise<ScheduledQueryRulesListBySubscriptionNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listBySubscriptionNextOperationSpec,
    );
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
    options?: ScheduledQueryRulesListByResourceGroupNextOptionalParams,
  ): Promise<ScheduledQueryRulesListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options },
      listByResourceGroupNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listBySubscriptionOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.Insights/scheduledQueryRules",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ScheduledQueryRuleResourceCollection,
    },
    default: {
      bodyMapper: Mappers.ErrorContract,
    },
  },
  queryParameters: [Parameters.apiVersion10],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByResourceGroupOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/scheduledQueryRules",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ScheduledQueryRuleResourceCollection,
    },
    default: {
      bodyMapper: Mappers.ErrorContract,
    },
  },
  queryParameters: [Parameters.apiVersion10],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/scheduledQueryRules/{ruleName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ScheduledQueryRuleResource,
    },
    default: {
      bodyMapper: Mappers.ErrorContract,
    },
  },
  queryParameters: [Parameters.apiVersion10],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.ruleName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/scheduledQueryRules/{ruleName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ScheduledQueryRuleResource,
    },
    201: {
      bodyMapper: Mappers.ScheduledQueryRuleResource,
    },
    default: {
      bodyMapper: Mappers.ErrorContract,
    },
  },
  requestBody: Parameters.parameters6,
  queryParameters: [Parameters.apiVersion10],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.ruleName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const updateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/scheduledQueryRules/{ruleName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.ScheduledQueryRuleResource,
    },
    default: {
      bodyMapper: Mappers.ErrorContract,
    },
  },
  requestBody: Parameters.parameters7,
  queryParameters: [Parameters.apiVersion10],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.ruleName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/scheduledQueryRules/{ruleName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorContract,
    },
  },
  queryParameters: [Parameters.apiVersion10],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.ruleName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listBySubscriptionNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ScheduledQueryRuleResourceCollection,
    },
    default: {
      bodyMapper: Mappers.ErrorContract,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByResourceGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ScheduledQueryRuleResourceCollection,
    },
    default: {
      bodyMapper: Mappers.ErrorContract,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.nextLink,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
