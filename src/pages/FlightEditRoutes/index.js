import React from "react";
import { useParams } from "react-router-dom";

import FlightRouteForm from "../../components/FlightRoutesComponents/FlightRouterForm";
import Header from "../../components/Header";

const mock = {
  flightManagement: {
    priceAdult: 0,
    priceChild: 0,
    priceInfant: 0,
    route: [
      {
        type: "Departure",
        airport: "VCP",
        airline: "GOL",
        flightNumber: 0,
        date: "dd/mm/aaaa",
        time: "hh:mm",
        checkout: "hh:mm",
      },
      {
        type: "Transit",
        airport: "SSA",
        airline: "GOL",
        flightNumber: 0,
        date: "dd/mm/aaaa",
        time: "hh:mm",
        checkout: "hh:mm",
      },
      {
        type: "Arrival",
        airport: "CWP",
        airline: "GOL",
        flightNumber: 0,
        date: "dd/mm/aaaa",
        time: "hh:mm",
        checkout: "hh:mm",
      },
    ],
    description:
      "Some lorem ipsum here, just to illustrate the flight description.",
  },
  mainSettings: {
    status: "disabled",
    totalHours: "12:00",
    vatTax: 123,
    deposite: 456,
    flightType: "economic",
    refundable: "nonRefundable",
    direction: "return",
  },
};

export default function EditFlightRoutes() {
  const [route, setRoute] = React.useState(undefined);
  const [loading, setLoading] = React.useState(true);
  const { id } = useParams();

  React.useEffect(() => {
    // Fetch data and display only after promisse.
    setLoading(false);
    setRoute(mock);
    return () => {};
  }, []);

  function handleFormSubmit(e) {}

  return (
    <div id="edit-flight-routes">
      <Header />
      {!loading && <FlightRouteForm onSubmit={handleFormSubmit} data={route} />}
    </div>
  );
}
