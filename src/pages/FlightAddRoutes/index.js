import React from "react";

import axios from "axios";

import FlightRouteForm from "../../components/FlightRoutesComponents/FlightRouterForm";
import Header from "../../components/Header";

export default function AddFlightRoutes() {
  function handleFormSubmit(values) {
    axios
      .post("https://5ff83d6510778b0017042ff3.mockapi.io/routes/", values)
      .catch((erro) => console.log(erro));

    console.log(values);
  }

  return (
    <div id="edit-flight">
      <Header />
      <FlightRouteForm onSubmit={handleFormSubmit} />
    </div>
  );
}
