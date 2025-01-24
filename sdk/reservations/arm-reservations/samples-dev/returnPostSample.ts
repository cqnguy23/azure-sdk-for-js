/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import type { RefundRequest } from "@azure/arm-reservations";
import { AzureReservationAPI } from "@azure/arm-reservations";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Return a reservation and get refund information.
 *
 * @summary Return a reservation and get refund information.
 * x-ms-original-file: specification/reservations/resource-manager/Microsoft.Capacity/stable/2022-11-01/examples/Return.json
 */
async function returnAReservation() {
  const reservationOrderId = "50000000-aaaa-bbbb-cccc-100000000004";
  const body: RefundRequest = {
    properties: {
      reservationToReturn: {
        quantity: 1,
        reservationId:
          "/providers/microsoft.capacity/reservationOrders/50000000-aaaa-bbbb-cccc-100000000004/reservations/40000000-aaaa-bbbb-cccc-100000000000",
      },
      returnReason: "PurchasedWrongProduct",
      scope: "Reservation",
      sessionId: "10000000-aaaa-bbbb-cccc-200000000000",
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureReservationAPI(credential);
  const result = await client.return.beginPostAndWait(reservationOrderId, body);
  console.log(result);
}

async function main() {
  await returnAReservation();
}

main().catch(console.error);
