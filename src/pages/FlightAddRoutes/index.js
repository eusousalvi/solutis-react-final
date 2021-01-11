import React from "react";

import { useHistory } from "react-router-dom";

import FlightRouteForm from "../../components/FlightRoutesComponents/FlightRouterForm";

import routes from "../../services/routes";

export default function AddFlightRoutes() {
  const history = useHistory();

  function handleFormSubmit(values) {
    routes
      .addRoute(values)
      .then(() => history.push("/flights/routes"))
      .catch((error) => console.log(error));
  }

  return (
    <div id="edit-flight">
      {/* <Header /> */}
      <FlightRouteForm onSubmit={handleFormSubmit} />
    </div>
  );
}
