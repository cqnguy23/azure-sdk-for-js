/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { DataExports } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { OperationalInsightsManagementClient } from "../operationalInsightsManagementClient.js";
import {
  DataExport,
  DataExportsListByWorkspaceOptionalParams,
  DataExportsListByWorkspaceResponse,
  DataExportsCreateOrUpdateOptionalParams,
  DataExportsCreateOrUpdateResponse,
  DataExportsGetOptionalParams,
  DataExportsGetResponse,
  DataExportsDeleteOptionalParams
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing DataExports operations. */
export class DataExportsImpl implements DataExports {
  private readonly client: OperationalInsightsManagementClient;

  /**
   * Initialize a new instance of the class DataExports class.
   * @param client Reference to the service client
   */
  constructor(client: OperationalInsightsManagementClient) {
    this.client = client;
  }

  /**
   * Lists the data export instances within a workspace.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param options The options parameters.
   */
  public listByWorkspace(
    resourceGroupName: string,
    workspaceName: string,
    options?: DataExportsListByWorkspaceOptionalParams
  ): PagedAsyncIterableIterator<DataExport> {
    const iter = this.listByWorkspacePagingAll(
      resourceGroupName,
      workspaceName,
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
        return this.listByWorkspacePagingPage(
          resourceGroupName,
          workspaceName,
          options,
          settings
        );
      }
    };
  }

  private async *listByWorkspacePagingPage(
    resourceGroupName: string,
    workspaceName: string,
    options?: DataExportsListByWorkspaceOptionalParams,
    _settings?: PageSettings
  ): AsyncIterableIterator<DataExport[]> {
    let result: DataExportsListByWorkspaceResponse;
    result = await this._listByWorkspace(
      resourceGroupName,
      workspaceName,
      options
    );
    yield result.value || [];
  }

  private async *listByWorkspacePagingAll(
    resourceGroupName: string,
    workspaceName: string,
    options?: DataExportsListByWorkspaceOptionalParams
  ): AsyncIterableIterator<DataExport> {
    for await (const page of this.listByWorkspacePagingPage(
      resourceGroupName,
      workspaceName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists the data export instances within a workspace.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param options The options parameters.
   */
  private _listByWorkspace(
    resourceGroupName: string,
    workspaceName: string,
    options?: DataExportsListByWorkspaceOptionalParams
  ): Promise<DataExportsListByWorkspaceResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, options },
      listByWorkspaceOperationSpec
    );
  }

  /**
   * Create or update a data export.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param dataExportName The data export rule name.
   * @param parameters The parameters required to create or update a data export.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    workspaceName: string,
    dataExportName: string,
    parameters: DataExport,
    options?: DataExportsCreateOrUpdateOptionalParams
  ): Promise<DataExportsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, dataExportName, parameters, options },
      createOrUpdateOperationSpec
    );
  }

  /**
   * Gets a data export instance.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param dataExportName The data export rule name.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    workspaceName: string,
    dataExportName: string,
    options?: DataExportsGetOptionalParams
  ): Promise<DataExportsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, dataExportName, options },
      getOperationSpec
    );
  }

  /**
   * Deletes the specified data export in a given workspace..
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param dataExportName The data export rule name.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    workspaceName: string,
    dataExportName: string,
    options?: DataExportsDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, dataExportName, options },
      deleteOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByWorkspaceOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/dataExports",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DataExportListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/dataExports/{dataExportName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.DataExport
    },
    201: {
      bodyMapper: Mappers.DataExport
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters,
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.dataExportName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/dataExports/{dataExportName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DataExport
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.dataExportName1
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/dataExports/{dataExportName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    404: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.dataExportName1
  ],
  headerParameters: [Parameters.accept],
  serializer
};
