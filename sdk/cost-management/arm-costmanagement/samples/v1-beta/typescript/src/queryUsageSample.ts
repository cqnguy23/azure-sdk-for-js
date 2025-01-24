/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import {
  QueryDefinition,
  CostManagementClient
} from "@azure/arm-costmanagement";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Query the usage data for scope defined.
 *
 * @summary Query the usage data for scope defined.
 * x-ms-original-file: specification/cost-management/resource-manager/Microsoft.CostManagement/stable/2022-10-01/examples/BillingAccountQuery.json
 */
async function billingAccountQueryLegacy(): Promise<void> {
  const scope = "providers/Microsoft.Billing/billingAccounts/70664866";
  const parameters: QueryDefinition = {
    type: "Usage",
    dataset: {
      filter: {
        and: [
          {
            or: [
              {
                dimensions: {
                  name: "ResourceLocation",
                  operator: "In",
                  values: ["East US", "West Europe"]
                }
              },
              {
                tags: {
                  name: "Environment",
                  operator: "In",
                  values: ["UAT", "Prod"]
                }
              }
            ]
          },
          {
            dimensions: {
              name: "ResourceGroup",
              operator: "In",
              values: ["API"]
            }
          }
        ]
      },
      granularity: "Daily"
    },
    timeframe: "MonthToDate"
  };
  const credential = new DefaultAzureCredential();
  const client = new CostManagementClient(credential);
  const result = await client.query.usage(scope, parameters);
  console.log(result);
}

/**
 * This sample demonstrates how to Query the usage data for scope defined.
 *
 * @summary Query the usage data for scope defined.
 * x-ms-original-file: specification/cost-management/resource-manager/Microsoft.CostManagement/stable/2022-10-01/examples/MCABillingAccountQuery.json
 */
async function billingAccountQueryMca(): Promise<void> {
  const scope = "providers/Microsoft.Billing/billingAccounts/12345:6789";
  const parameters: QueryDefinition = {
    type: "Usage",
    dataset: {
      filter: {
        and: [
          {
            or: [
              {
                dimensions: {
                  name: "ResourceLocation",
                  operator: "In",
                  values: ["East US", "West Europe"]
                }
              },
              {
                tags: {
                  name: "Environment",
                  operator: "In",
                  values: ["UAT", "Prod"]
                }
              }
            ]
          },
          {
            dimensions: {
              name: "ResourceGroup",
              operator: "In",
              values: ["API"]
            }
          }
        ]
      },
      granularity: "Daily"
    },
    timeframe: "MonthToDate"
  };
  const credential = new DefaultAzureCredential();
  const client = new CostManagementClient(credential);
  const result = await client.query.usage(scope, parameters);
  console.log(result);
}

/**
 * This sample demonstrates how to Query the usage data for scope defined.
 *
 * @summary Query the usage data for scope defined.
 * x-ms-original-file: specification/cost-management/resource-manager/Microsoft.CostManagement/stable/2022-10-01/examples/BillingAccountQueryGrouping.json
 */
async function billingAccountQueryGroupingLegacy(): Promise<void> {
  const scope = "providers/Microsoft.Billing/billingAccounts/70664866";
  const parameters: QueryDefinition = {
    type: "Usage",
    dataset: {
      aggregation: { totalCost: { name: "PreTaxCost", function: "Sum" } },
      granularity: "None",
      grouping: [{ name: "ResourceGroup", type: "Dimension" }]
    },
    timeframe: "TheLastMonth"
  };
  const credential = new DefaultAzureCredential();
  const client = new CostManagementClient(credential);
  const result = await client.query.usage(scope, parameters);
  console.log(result);
}

/**
 * This sample demonstrates how to Query the usage data for scope defined.
 *
 * @summary Query the usage data for scope defined.
 * x-ms-original-file: specification/cost-management/resource-manager/Microsoft.CostManagement/stable/2022-10-01/examples/MCABillingAccountQueryGrouping.json
 */
async function billingAccountQueryGroupingMca(): Promise<void> {
  const scope = "providers/Microsoft.Billing/billingAccounts/12345:6789";
  const parameters: QueryDefinition = {
    type: "Usage",
    dataset: {
      aggregation: { totalCost: { name: "PreTaxCost", function: "Sum" } },
      granularity: "None",
      grouping: [{ name: "ResourceGroup", type: "Dimension" }]
    },
    timeframe: "TheLastMonth"
  };
  const credential = new DefaultAzureCredential();
  const client = new CostManagementClient(credential);
  const result = await client.query.usage(scope, parameters);
  console.log(result);
}

/**
 * This sample demonstrates how to Query the usage data for scope defined.
 *
 * @summary Query the usage data for scope defined.
 * x-ms-original-file: specification/cost-management/resource-manager/Microsoft.CostManagement/stable/2022-10-01/examples/MCABillingProfileQuery.json
 */
async function billingProfileQueryMca(): Promise<void> {
  const scope =
    "providers/Microsoft.Billing/billingAccounts/12345:6789/billingProfiles/13579";
  const parameters: QueryDefinition = {
    type: "Usage",
    dataset: {
      filter: {
        and: [
          {
            or: [
              {
                dimensions: {
                  name: "ResourceLocation",
                  operator: "In",
                  values: ["East US", "West Europe"]
                }
              },
              {
                tags: {
                  name: "Environment",
                  operator: "In",
                  values: ["UAT", "Prod"]
                }
              }
            ]
          },
          {
            dimensions: {
              name: "ResourceGroup",
              operator: "In",
              values: ["API"]
            }
          }
        ]
      },
      granularity: "Daily"
    },
    timeframe: "MonthToDate"
  };
  const credential = new DefaultAzureCredential();
  const client = new CostManagementClient(credential);
  const result = await client.query.usage(scope, parameters);
  console.log(result);
}

/**
 * This sample demonstrates how to Query the usage data for scope defined.
 *
 * @summary Query the usage data for scope defined.
 * x-ms-original-file: specification/cost-management/resource-manager/Microsoft.CostManagement/stable/2022-10-01/examples/MCABillingProfileQueryGrouping.json
 */
async function billingProfileQueryGroupingMca(): Promise<void> {
  const scope =
    "providers/Microsoft.Billing/billingAccounts/12345:6789/billingProfiles/13579";
  const parameters: QueryDefinition = {
    type: "Usage",
    dataset: {
      aggregation: { totalCost: { name: "PreTaxCost", function: "Sum" } },
      granularity: "None",
      grouping: [{ name: "ResourceGroup", type: "Dimension" }]
    },
    timeframe: "TheLastMonth"
  };
  const credential = new DefaultAzureCredential();
  const client = new CostManagementClient(credential);
  const result = await client.query.usage(scope, parameters);
  console.log(result);
}

/**
 * This sample demonstrates how to Query the usage data for scope defined.
 *
 * @summary Query the usage data for scope defined.
 * x-ms-original-file: specification/cost-management/resource-manager/Microsoft.CostManagement/stable/2022-10-01/examples/MCACustomerQuery.json
 */
async function customerQueryMca(): Promise<void> {
  const scope =
    "providers/Microsoft.Billing/billingAccounts/12345:6789/customers/5678";
  const parameters: QueryDefinition = {
    type: "Usage",
    dataset: {
      filter: {
        and: [
          {
            or: [
              {
                dimensions: {
                  name: "ResourceLocation",
                  operator: "In",
                  values: ["East US", "West Europe"]
                }
              },
              {
                tags: {
                  name: "Environment",
                  operator: "In",
                  values: ["UAT", "Prod"]
                }
              }
            ]
          },
          {
            dimensions: {
              name: "ResourceGroup",
              operator: "In",
              values: ["API"]
            }
          }
        ]
      },
      granularity: "Daily"
    },
    timeframe: "MonthToDate"
  };
  const credential = new DefaultAzureCredential();
  const client = new CostManagementClient(credential);
  const result = await client.query.usage(scope, parameters);
  console.log(result);
}

/**
 * This sample demonstrates how to Query the usage data for scope defined.
 *
 * @summary Query the usage data for scope defined.
 * x-ms-original-file: specification/cost-management/resource-manager/Microsoft.CostManagement/stable/2022-10-01/examples/MCACustomerQueryGrouping.json
 */
async function customerQueryGroupingMca(): Promise<void> {
  const scope =
    "providers/Microsoft.Billing/billingAccounts/12345:6789/customers/5678";
  const parameters: QueryDefinition = {
    type: "Usage",
    dataset: {
      aggregation: { totalCost: { name: "PreTaxCost", function: "Sum" } },
      granularity: "None",
      grouping: [{ name: "ResourceGroup", type: "Dimension" }]
    },
    timeframe: "TheLastMonth"
  };
  const credential = new DefaultAzureCredential();
  const client = new CostManagementClient(credential);
  const result = await client.query.usage(scope, parameters);
  console.log(result);
}

/**
 * This sample demonstrates how to Query the usage data for scope defined.
 *
 * @summary Query the usage data for scope defined.
 * x-ms-original-file: specification/cost-management/resource-manager/Microsoft.CostManagement/stable/2022-10-01/examples/DepartmentQuery.json
 */
async function departmentQueryLegacy(): Promise<void> {
  const scope =
    "providers/Microsoft.Billing/billingAccounts/100/departments/123";
  const parameters: QueryDefinition = {
    type: "Usage",
    dataset: {
      filter: {
        and: [
          {
            or: [
              {
                dimensions: {
                  name: "ResourceLocation",
                  operator: "In",
                  values: ["East US", "West Europe"]
                }
              },
              {
                tags: {
                  name: "Environment",
                  operator: "In",
                  values: ["UAT", "Prod"]
                }
              }
            ]
          },
          {
            dimensions: {
              name: "ResourceGroup",
              operator: "In",
              values: ["API"]
            }
          }
        ]
      },
      granularity: "Daily"
    },
    timeframe: "MonthToDate"
  };
  const credential = new DefaultAzureCredential();
  const client = new CostManagementClient(credential);
  const result = await client.query.usage(scope, parameters);
  console.log(result);
}

/**
 * This sample demonstrates how to Query the usage data for scope defined.
 *
 * @summary Query the usage data for scope defined.
 * x-ms-original-file: specification/cost-management/resource-manager/Microsoft.CostManagement/stable/2022-10-01/examples/DepartmentQueryGrouping.json
 */
async function departmentQueryGroupingLegacy(): Promise<void> {
  const scope =
    "providers/Microsoft.Billing/billingAccounts/100/departments/123";
  const parameters: QueryDefinition = {
    type: "Usage",
    dataset: {
      aggregation: { totalCost: { name: "PreTaxCost", function: "Sum" } },
      granularity: "None",
      grouping: [{ name: "ResourceGroup", type: "Dimension" }]
    },
    timeframe: "TheLastMonth"
  };
  const credential = new DefaultAzureCredential();
  const client = new CostManagementClient(credential);
  const result = await client.query.usage(scope, parameters);
  console.log(result);
}

/**
 * This sample demonstrates how to Query the usage data for scope defined.
 *
 * @summary Query the usage data for scope defined.
 * x-ms-original-file: specification/cost-management/resource-manager/Microsoft.CostManagement/stable/2022-10-01/examples/EnrollmentAccountQuery.json
 */
async function enrollmentAccountQueryLegacy(): Promise<void> {
  const scope =
    "providers/Microsoft.Billing/billingAccounts/100/enrollmentAccounts/456";
  const parameters: QueryDefinition = {
    type: "Usage",
    dataset: {
      filter: {
        and: [
          {
            or: [
              {
                dimensions: {
                  name: "ResourceLocation",
                  operator: "In",
                  values: ["East US", "West Europe"]
                }
              },
              {
                tags: {
                  name: "Environment",
                  operator: "In",
                  values: ["UAT", "Prod"]
                }
              }
            ]
          },
          {
            dimensions: {
              name: "ResourceGroup",
              operator: "In",
              values: ["API"]
            }
          }
        ]
      },
      granularity: "Daily"
    },
    timeframe: "MonthToDate"
  };
  const credential = new DefaultAzureCredential();
  const client = new CostManagementClient(credential);
  const result = await client.query.usage(scope, parameters);
  console.log(result);
}

/**
 * This sample demonstrates how to Query the usage data for scope defined.
 *
 * @summary Query the usage data for scope defined.
 * x-ms-original-file: specification/cost-management/resource-manager/Microsoft.CostManagement/stable/2022-10-01/examples/EnrollmentAccountQueryGrouping.json
 */
async function enrollmentAccountQueryGroupingLegacy(): Promise<void> {
  const scope =
    "providers/Microsoft.Billing/billingAccounts/100/enrollmentAccounts/456";
  const parameters: QueryDefinition = {
    type: "Usage",
    dataset: {
      aggregation: { totalCost: { name: "PreTaxCost", function: "Sum" } },
      granularity: "Daily",
      grouping: [{ name: "ResourceGroup", type: "Dimension" }]
    },
    timeframe: "TheLastMonth"
  };
  const credential = new DefaultAzureCredential();
  const client = new CostManagementClient(credential);
  const result = await client.query.usage(scope, parameters);
  console.log(result);
}

/**
 * This sample demonstrates how to Query the usage data for scope defined.
 *
 * @summary Query the usage data for scope defined.
 * x-ms-original-file: specification/cost-management/resource-manager/Microsoft.CostManagement/stable/2022-10-01/examples/MCAInvoiceSectionQuery.json
 */
async function invoiceSectionQueryMca(): Promise<void> {
  const scope =
    "providers/Microsoft.Billing/billingAccounts/12345:6789/billingProfiles/13579/invoiceSections/9876";
  const parameters: QueryDefinition = {
    type: "Usage",
    dataset: {
      filter: {
        and: [
          {
            or: [
              {
                dimensions: {
                  name: "ResourceLocation",
                  operator: "In",
                  values: ["East US", "West Europe"]
                }
              },
              {
                tags: {
                  name: "Environment",
                  operator: "In",
                  values: ["UAT", "Prod"]
                }
              }
            ]
          },
          {
            dimensions: {
              name: "ResourceGroup",
              operator: "In",
              values: ["API"]
            }
          }
        ]
      },
      granularity: "Daily"
    },
    timeframe: "MonthToDate"
  };
  const credential = new DefaultAzureCredential();
  const client = new CostManagementClient(credential);
  const result = await client.query.usage(scope, parameters);
  console.log(result);
}

/**
 * This sample demonstrates how to Query the usage data for scope defined.
 *
 * @summary Query the usage data for scope defined.
 * x-ms-original-file: specification/cost-management/resource-manager/Microsoft.CostManagement/stable/2022-10-01/examples/MCAInvoiceSectionQueryGrouping.json
 */
async function invoiceSectionQueryGroupingMca(): Promise<void> {
  const scope =
    "providers/Microsoft.Billing/billingAccounts/12345:6789/billingProfiles/13579/invoiceSections/9876";
  const parameters: QueryDefinition = {
    type: "Usage",
    dataset: {
      aggregation: { totalCost: { name: "PreTaxCost", function: "Sum" } },
      granularity: "None",
      grouping: [{ name: "ResourceGroup", type: "Dimension" }]
    },
    timeframe: "TheLastMonth"
  };
  const credential = new DefaultAzureCredential();
  const client = new CostManagementClient(credential);
  const result = await client.query.usage(scope, parameters);
  console.log(result);
}

/**
 * This sample demonstrates how to Query the usage data for scope defined.
 *
 * @summary Query the usage data for scope defined.
 * x-ms-original-file: specification/cost-management/resource-manager/Microsoft.CostManagement/stable/2022-10-01/examples/ManagementGroupQuery.json
 */
async function managementGroupQueryLegacy(): Promise<void> {
  const scope = "providers/Microsoft.Management/managementGroups/MyMgId";
  const parameters: QueryDefinition = {
    type: "Usage",
    dataset: {
      filter: {
        and: [
          {
            or: [
              {
                dimensions: {
                  name: "ResourceLocation",
                  operator: "In",
                  values: ["East US", "West Europe"]
                }
              },
              {
                tags: {
                  name: "Environment",
                  operator: "In",
                  values: ["UAT", "Prod"]
                }
              }
            ]
          },
          {
            dimensions: {
              name: "ResourceGroup",
              operator: "In",
              values: ["API"]
            }
          }
        ]
      },
      granularity: "Daily"
    },
    timeframe: "MonthToDate"
  };
  const credential = new DefaultAzureCredential();
  const client = new CostManagementClient(credential);
  const result = await client.query.usage(scope, parameters);
  console.log(result);
}

/**
 * This sample demonstrates how to Query the usage data for scope defined.
 *
 * @summary Query the usage data for scope defined.
 * x-ms-original-file: specification/cost-management/resource-manager/Microsoft.CostManagement/stable/2022-10-01/examples/ManagementGroupQueryGrouping.json
 */
async function managementGroupQueryGroupingLegacy(): Promise<void> {
  const scope = "providers/Microsoft.Management/managementGroups/MyMgId";
  const parameters: QueryDefinition = {
    type: "Usage",
    dataset: {
      aggregation: { totalCost: { name: "PreTaxCost", function: "Sum" } },
      granularity: "None",
      grouping: [{ name: "ResourceGroup", type: "Dimension" }]
    },
    timeframe: "TheLastMonth"
  };
  const credential = new DefaultAzureCredential();
  const client = new CostManagementClient(credential);
  const result = await client.query.usage(scope, parameters);
  console.log(result);
}

/**
 * This sample demonstrates how to Query the usage data for scope defined.
 *
 * @summary Query the usage data for scope defined.
 * x-ms-original-file: specification/cost-management/resource-manager/Microsoft.CostManagement/stable/2022-10-01/examples/ResourceGroupQuery.json
 */
async function resourceGroupQueryLegacy(): Promise<void> {
  const scope =
    "subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/ScreenSharingTest-peer";
  const parameters: QueryDefinition = {
    type: "Usage",
    dataset: {
      filter: {
        and: [
          {
            or: [
              {
                dimensions: {
                  name: "ResourceLocation",
                  operator: "In",
                  values: ["East US", "West Europe"]
                }
              },
              {
                tags: {
                  name: "Environment",
                  operator: "In",
                  values: ["UAT", "Prod"]
                }
              }
            ]
          },
          {
            dimensions: {
              name: "ResourceGroup",
              operator: "In",
              values: ["API"]
            }
          }
        ]
      },
      granularity: "Daily"
    },
    timeframe: "MonthToDate"
  };
  const credential = new DefaultAzureCredential();
  const client = new CostManagementClient(credential);
  const result = await client.query.usage(scope, parameters);
  console.log(result);
}

/**
 * This sample demonstrates how to Query the usage data for scope defined.
 *
 * @summary Query the usage data for scope defined.
 * x-ms-original-file: specification/cost-management/resource-manager/Microsoft.CostManagement/stable/2022-10-01/examples/ResourceGroupQueryGrouping.json
 */
async function resourceGroupQueryGroupingLegacy(): Promise<void> {
  const scope =
    "subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/ScreenSharingTest-peer";
  const parameters: QueryDefinition = {
    type: "Usage",
    dataset: {
      aggregation: { totalCost: { name: "PreTaxCost", function: "Sum" } },
      granularity: "Daily",
      grouping: [{ name: "ResourceType", type: "Dimension" }]
    },
    timeframe: "TheLastMonth"
  };
  const credential = new DefaultAzureCredential();
  const client = new CostManagementClient(credential);
  const result = await client.query.usage(scope, parameters);
  console.log(result);
}

/**
 * This sample demonstrates how to Query the usage data for scope defined.
 *
 * @summary Query the usage data for scope defined.
 * x-ms-original-file: specification/cost-management/resource-manager/Microsoft.CostManagement/stable/2022-10-01/examples/SubscriptionQuery.json
 */
async function subscriptionQueryLegacy(): Promise<void> {
  const scope = "subscriptions/00000000-0000-0000-0000-000000000000";
  const parameters: QueryDefinition = {
    type: "Usage",
    dataset: {
      filter: {
        and: [
          {
            or: [
              {
                dimensions: {
                  name: "ResourceLocation",
                  operator: "In",
                  values: ["East US", "West Europe"]
                }
              },
              {
                tags: {
                  name: "Environment",
                  operator: "In",
                  values: ["UAT", "Prod"]
                }
              }
            ]
          },
          {
            dimensions: {
              name: "ResourceGroup",
              operator: "In",
              values: ["API"]
            }
          }
        ]
      },
      granularity: "Daily"
    },
    timeframe: "MonthToDate"
  };
  const credential = new DefaultAzureCredential();
  const client = new CostManagementClient(credential);
  const result = await client.query.usage(scope, parameters);
  console.log(result);
}

/**
 * This sample demonstrates how to Query the usage data for scope defined.
 *
 * @summary Query the usage data for scope defined.
 * x-ms-original-file: specification/cost-management/resource-manager/Microsoft.CostManagement/stable/2022-10-01/examples/SubscriptionQueryGrouping.json
 */
async function subscriptionQueryGroupingLegacy(): Promise<void> {
  const scope = "subscriptions/00000000-0000-0000-0000-000000000000";
  const parameters: QueryDefinition = {
    type: "Usage",
    dataset: {
      aggregation: { totalCost: { name: "PreTaxCost", function: "Sum" } },
      granularity: "None",
      grouping: [{ name: "ResourceGroup", type: "Dimension" }]
    },
    timeframe: "TheLastMonth"
  };
  const credential = new DefaultAzureCredential();
  const client = new CostManagementClient(credential);
  const result = await client.query.usage(scope, parameters);
  console.log(result);
}

async function main(): Promise<void> {
  billingAccountQueryLegacy();
  billingAccountQueryMca();
  billingAccountQueryGroupingLegacy();
  billingAccountQueryGroupingMca();
  billingProfileQueryMca();
  billingProfileQueryGroupingMca();
  customerQueryMca();
  customerQueryGroupingMca();
  departmentQueryLegacy();
  departmentQueryGroupingLegacy();
  enrollmentAccountQueryLegacy();
  enrollmentAccountQueryGroupingLegacy();
  invoiceSectionQueryMca();
  invoiceSectionQueryGroupingMca();
  managementGroupQueryLegacy();
  managementGroupQueryGroupingLegacy();
  resourceGroupQueryLegacy();
  resourceGroupQueryGroupingLegacy();
  subscriptionQueryLegacy();
  subscriptionQueryGroupingLegacy();
}

main().catch(console.error);
