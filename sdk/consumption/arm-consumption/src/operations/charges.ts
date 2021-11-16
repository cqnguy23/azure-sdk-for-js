/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { Charges } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ConsumptionManagementClientContext } from "../consumptionManagementClientContext";
import { ChargesListOptionalParams, ChargesListResponse } from "../models";

/** Class containing Charges operations. */
export class ChargesImpl implements Charges {
  private readonly client: ConsumptionManagementClientContext;

  /**
   * Initialize a new instance of the class Charges class.
   * @param client Reference to the service client
   */
  constructor(client: ConsumptionManagementClientContext) {
    this.client = client;
  }

  /**
   * Lists the charges based for the defined scope.
   * @param scope The scope associated with charges operations. This includes
   *              '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/departments/{departmentId}' for
   *              Department scope, and
   *              '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/enrollmentAccounts/{enrollmentAccountId}'
   *              for EnrollmentAccount scope. For department and enrollment accounts, you can also add billing period
   *              to the scope using '/providers/Microsoft.Billing/billingPeriods/{billingPeriodName}'. For e.g. to
   *              specify billing period at department scope use
   *              '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/departments/{departmentId}/providers/Microsoft.Billing/billingPeriods/{billingPeriodName}'.
   *              Also, Modern Commerce Account scopes are
   *              '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}' for billingAccount scope,
   *              '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}'
   *              for billingProfile scope,
   *              'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}/invoiceSections/{invoiceSectionId}'
   *              for invoiceSection scope, and
   *              'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/customers/{customerId}' specific for
   *              partners.
   * @param options The options parameters.
   */
  list(
    scope: string,
    options?: ChargesListOptionalParams
  ): Promise<ChargesListResponse> {
    return this.client.sendOperationRequest(
      { scope, options },
      listOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path: "/{scope}/providers/Microsoft.Consumption/charges",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ChargesListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [
    Parameters.filter,
    Parameters.apiVersion,
    Parameters.startDate,
    Parameters.endDate,
    Parameters.apply
  ],
  urlParameters: [Parameters.$host, Parameters.scope],
  headerParameters: [Parameters.accept],
  serializer
};
