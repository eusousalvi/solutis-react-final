import React from "react";
import { useParams } from "react-router-dom";

import FlightRouteForm from "../../components/FlightRoutesComponents/FlightRouterForm";
import Header from "../../components/Header";

const mock = {
  flightManagement: {
    adultsPrice: 123,
    childPrice: 456,
    infantPrice: 789,
    route: {
      departure: {
        type: "Departure",
        airport: "VCP",
        airline: "Azul",
        flightNumber: 0,
        date: "2021-01-01",
        time: "12:00",
        checkout: "12:00",
      },
      arrival: {
        type: "Arrival",
        airport: "CWP",
        airline: "GOL",
        flightNumber: 0,
        date: "2021-01-01",
        time: "12:00",
        checkout: "12:00",
      },
      connections: [
        {
          type: "Transit",
          airport: "SSA",
          airline: "GOL",
          flightNumber: 555,
          date: "2021-01-01",
          time: "12:30",
          checkout: "12:22",
        },
      ],
    },
    description:
      "Some lorem ipsum here, just to illustrate the flight description.",
  },
  mainSettings: {
    status: "disabled",
    totalHours: "12:00",
    vatTax: 123,
    deposite: 452,
    flightType: "economic",
    refundable: "non-refundable",
    direction: "return",
  },
};

export default function EditFlightRoutes() {
  const { id } = useParams();

  function handleFormSubmit(values) {
    console.log(values);
  }

  const data = {
    refundable: mock.mainSettings.refundable,
    flightType: mock.mainSettings.flightType,
    totalHours: mock.mainSettings.totalHours,
    direction: mock.mainSettings.direction,
    deposite: mock.mainSettings.deposite,
    status: mock.mainSettings.status,
    vatTax: mock.mainSettings.vatTax,

    route: {},

    adultsPrice: mock.flightManagement.adultsPrice,
    infantPrice: mock.flightManagement.infantPrice,
    childPrice: mock.flightManagement.childPrice,

    description: mock.flightManagement.description,
  };

  return (
    <div id="edit-flight-routes">
      <Header />
      <FlightRouteForm onSubmit={handleFormSubmit} data={data} />
    </div>
  );
}
