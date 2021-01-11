import React from "react";
import axios from "axios";

import { useHistory } from "react-router-dom";

import FlightRouteForm from "../../components/FlightRoutesComponents/FlightRouterForm";

export default function AddFlightRoutes() {
  const history = useHistory();

  function handleFormSubmit(values) {
    console.log(values);
    axios
      .post("https://5ff83d6510778b0017042ff3.mockapi.io/routes/", values)
      .then(() => history.push("/flights/routes"))
      .catch((erro) => console.log(erro));
  }

  return (
    <div id="edit-flight">
      {/* <Header /> */}
      <FlightRouteForm onSubmit={handleFormSubmit} />
    </div>
  );
}
