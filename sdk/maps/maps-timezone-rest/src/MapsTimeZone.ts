// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ClientOptions } from "@azure-rest/core-client";
import {
  AzureKeyCredential,
  AzureSASCredential,
  isSASCredential,
  isTokenCredential,
  TokenCredential,
} from "@azure/core-auth";
import { bearerTokenAuthenticationPolicy } from "@azure/core-rest-pipeline";
import { createMapsClientIdPolicy } from "@azure/maps-common";
import { MapsTimeZoneClient } from "../generated";
import createClient from "../generated/mapsTimeZoneClient";

/**
 * Creates an instance of MapsTimeZoneClient from a subscription key.
 *
 * @example
 * ```ts
 * import MapsTimeZone from "@azure-rest/maps-timezone";
 *
 * const credential = new AzureKeyCredential("<subscription-key>");
 * const client = MapsTimeZone(credential);
 *```
 *
 * @param credential - An AzureKeyCredential instance used to authenticate requests to the service
 * @param options - Options used to configure the TimeZone Client
 */
export default function MapsTimeZone(
  credential: AzureKeyCredential,
  options?: ClientOptions
): MapsTimeZoneClient;
/**
 * Creates an instance of MapsTimeZone from an Azure Identity `TokenCredential`.
 *
 * @example
 * ```ts
 * import MapsTimeZoneClient from "@azure-rest/maps-timezone";
 * import { DefaultAzureCredential } from "@azure/identity";
 *
 * const credential = new DefaultAzureCredential();
 * const client = MapsTimeZone(credential, "<maps-account-client-id>");
 *```
 *
 * @param credential - An TokenCredential instance used to authenticate requests to the service
 * @param mapsAccountClientId - The Azure Maps client id of a specific map resource
 * @param options - Options used to configure the TimeZone Client
 */
export default function MapsTimeZone(
  credential: TokenCredential,
  mapsAccountClientId: string,
  options?: ClientOptions
): MapsTimeZoneClient;
/**
 * Creates an instance of MapsTimeZone from an Azure Identity `AzureSASCredential`.
 *
 * @example
 * ```ts
 * import MapsTimeZone from "@azure-rest/maps-timezone";
 * import { AzureSASCredential } from "@azure/core-auth";
 *
 * const credential = new AzureSASCredential("<SAS Token>");
 * const client = MapsTimeZone(credential);
 * ```
 *
 * @param credential - An AzureSASCredential instance used to authenticate requests to the service
 * @param options - Options used to configure the TimeZone Client
 */
export default function MapsTimeZone(
  credential: AzureSASCredential,
  options?: ClientOptions
): MapsTimeZoneClient;
export default function MapsTimeZone(
  credential: TokenCredential | AzureKeyCredential | AzureSASCredential,
  clientIdOrOptions: string | ClientOptions = {},
  maybeOptions: ClientOptions = {}
): MapsTimeZoneClient {
  const options = typeof clientIdOrOptions === "string" ? maybeOptions : clientIdOrOptions;

  /**
   * maps service requires a header "ms-x-client-id", which is different from the standard Microsoft Entra ID.
   * So we need to do our own implementation.
   * This customized authentication is following by this guide: https://github.com/Azure/azure-sdk-for-js/blob/main/documentation/RLC-customization.md#custom-authentication
   */
  if (isTokenCredential(credential)) {
    const clientId = typeof clientIdOrOptions === "string" ? clientIdOrOptions : "";
    if (!clientId) {
      throw Error("Client id is needed for TokenCredential");
    }
    const client = createClient(undefined as any, options);
    client.pipeline.addPolicy(
      bearerTokenAuthenticationPolicy({
        credential,
        scopes: "https://atlas.microsoft.com/.default",
      })
    );
    client.pipeline.addPolicy(createMapsClientIdPolicy(clientId));
    return client;
  }

  if (isSASCredential(credential)) {
    const client = createClient(undefined as any, options);
    client.pipeline.addPolicy({
      name: "mapsSASCredentialPolicy",
      async sendRequest(request, next) {
        request.headers.set("Authorization", `jwt-sas ${credential.signature}`);
        return next(request);
      },
    });
    return client;
  }

  return createClient(credential, options);
}
