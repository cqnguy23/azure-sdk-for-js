/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import type { Endpoint } from "@azure/arm-trafficmanager";
import { TrafficManagerManagementClient } from "@azure/arm-trafficmanager";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Create or update a Traffic Manager endpoint.
 *
 * @summary Create or update a Traffic Manager endpoint.
 * x-ms-original-file: specification/trafficmanager/resource-manager/Microsoft.Network/stable/2022-04-01/examples/Endpoint-PUT-External-WithAlwaysServe.json
 */
async function endpointPutExternalWithAlwaysServe() {
  const subscriptionId = process.env["TRAFFICMANAGER_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName =
    process.env["TRAFFICMANAGER_RESOURCE_GROUP"] || "azuresdkfornetautoresttrafficmanager1421";
  const profileName = "azsmnet6386";
  const endpointType = "ExternalEndpoints";
  const endpointName = "azsmnet7187";
  const parameters: Endpoint = {
    name: "azsmnet7187",
    type: "Microsoft.network/TrafficManagerProfiles/ExternalEndpoints",
    alwaysServe: "Enabled",
    endpointLocation: "North Europe",
    endpointStatus: "Enabled",
    target: "foobar.contoso.com",
  };
  const credential = new DefaultAzureCredential();
  const client = new TrafficManagerManagementClient(credential, subscriptionId);
  const result = await client.endpoints.createOrUpdate(
    resourceGroupName,
    profileName,
    endpointType,
    endpointName,
    parameters,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Create or update a Traffic Manager endpoint.
 *
 * @summary Create or update a Traffic Manager endpoint.
 * x-ms-original-file: specification/trafficmanager/resource-manager/Microsoft.Network/stable/2022-04-01/examples/Endpoint-PUT-External-WithCustomHeaders.json
 */
async function endpointPutExternalWithCustomHeaders() {
  const subscriptionId = process.env["TRAFFICMANAGER_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName =
    process.env["TRAFFICMANAGER_RESOURCE_GROUP"] || "azuresdkfornetautoresttrafficmanager1421";
  const profileName = "azsmnet6386";
  const endpointType = "ExternalEndpoints";
  const endpointName = "azsmnet7187";
  const parameters: Endpoint = {
    name: "azsmnet7187",
    type: "Microsoft.network/TrafficManagerProfiles/ExternalEndpoints",
    customHeaders: [
      { name: "header-1", value: "value-1" },
      { name: "header-2", value: "value-2" },
    ],
    endpointLocation: "North Europe",
    endpointStatus: "Enabled",
    target: "foobar.contoso.com",
  };
  const credential = new DefaultAzureCredential();
  const client = new TrafficManagerManagementClient(credential, subscriptionId);
  const result = await client.endpoints.createOrUpdate(
    resourceGroupName,
    profileName,
    endpointType,
    endpointName,
    parameters,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Create or update a Traffic Manager endpoint.
 *
 * @summary Create or update a Traffic Manager endpoint.
 * x-ms-original-file: specification/trafficmanager/resource-manager/Microsoft.Network/stable/2022-04-01/examples/Endpoint-PUT-External-WithGeoMapping.json
 */
async function endpointPutExternalWithGeoMapping() {
  const subscriptionId = process.env["TRAFFICMANAGER_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName =
    process.env["TRAFFICMANAGER_RESOURCE_GROUP"] || "azuresdkfornetautoresttrafficmanager2191";
  const profileName = "azuresdkfornetautoresttrafficmanager8224";
  const endpointType = "ExternalEndpoints";
  const endpointName = "My%20external%20endpoint";
  const parameters: Endpoint = {
    name: "My external endpoint",
    type: "Microsoft.network/TrafficManagerProfiles/ExternalEndpoints",
    endpointStatus: "Enabled",
    geoMapping: ["GEO-AS", "GEO-AF"],
    target: "foobar.contoso.com",
  };
  const credential = new DefaultAzureCredential();
  const client = new TrafficManagerManagementClient(credential, subscriptionId);
  const result = await client.endpoints.createOrUpdate(
    resourceGroupName,
    profileName,
    endpointType,
    endpointName,
    parameters,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Create or update a Traffic Manager endpoint.
 *
 * @summary Create or update a Traffic Manager endpoint.
 * x-ms-original-file: specification/trafficmanager/resource-manager/Microsoft.Network/stable/2022-04-01/examples/Endpoint-PUT-External-WithLocation.json
 */
async function endpointPutExternalWithLocation() {
  const subscriptionId = process.env["TRAFFICMANAGER_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName =
    process.env["TRAFFICMANAGER_RESOURCE_GROUP"] || "azuresdkfornetautoresttrafficmanager1421";
  const profileName = "azsmnet6386";
  const endpointType = "ExternalEndpoints";
  const endpointName = "azsmnet7187";
  const parameters: Endpoint = {
    name: "azsmnet7187",
    type: "Microsoft.network/TrafficManagerProfiles/ExternalEndpoints",
    endpointLocation: "North Europe",
    endpointStatus: "Enabled",
    target: "foobar.contoso.com",
  };
  const credential = new DefaultAzureCredential();
  const client = new TrafficManagerManagementClient(credential, subscriptionId);
  const result = await client.endpoints.createOrUpdate(
    resourceGroupName,
    profileName,
    endpointType,
    endpointName,
    parameters,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Create or update a Traffic Manager endpoint.
 *
 * @summary Create or update a Traffic Manager endpoint.
 * x-ms-original-file: specification/trafficmanager/resource-manager/Microsoft.Network/stable/2022-04-01/examples/Endpoint-PUT-External-WithSubnetMapping.json
 */
async function endpointPutExternalWithSubnetMapping() {
  const subscriptionId = process.env["TRAFFICMANAGER_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName =
    process.env["TRAFFICMANAGER_RESOURCE_GROUP"] || "azuresdkfornetautoresttrafficmanager2191";
  const profileName = "azuresdkfornetautoresttrafficmanager8224";
  const endpointType = "ExternalEndpoints";
  const endpointName = "My%20external%20endpoint";
  const parameters: Endpoint = {
    name: "My external endpoint",
    type: "Microsoft.network/TrafficManagerProfiles/ExternalEndpoints",
    endpointStatus: "Enabled",
    subnets: [
      { first: "1.2.3.0", scope: 24 },
      { first: "25.26.27.28", last: "29.30.31.32" },
    ],
    target: "foobar.contoso.com",
  };
  const credential = new DefaultAzureCredential();
  const client = new TrafficManagerManagementClient(credential, subscriptionId);
  const result = await client.endpoints.createOrUpdate(
    resourceGroupName,
    profileName,
    endpointType,
    endpointName,
    parameters,
  );
  console.log(result);
}

async function main() {
  await endpointPutExternalWithAlwaysServe();
  await endpointPutExternalWithCustomHeaders();
  await endpointPutExternalWithGeoMapping();
  await endpointPutExternalWithLocation();
  await endpointPutExternalWithSubnetMapping();
}

main().catch(console.error);
