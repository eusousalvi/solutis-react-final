import React from "react";

import FlightRouteForm from "../../components/FlightRoutesComponents/FlightRouterForm";
import Header from "../../components/Header";

export default function AddFlightRoutes() {
  function handleFormSubmit(values) {
    console.log("Custom submit method.");
    console.log(values);
  }

  return (
    <div id="edit-flight">
      <Header />
      <FlightRouteForm onSubmit={handleFormSubmit} />
    </div>
  );
}
