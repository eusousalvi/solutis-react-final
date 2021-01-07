import React from "react";

import { useParams } from "react-router-dom";

import FlightRouteForm from "../../components/FlightRoutesComponents/FlightRouterForm";
import Header from "../../components/Header";

export default function AddFlightRoutes() {
  const { id } = useParams();

  function handleFormSubmit(e) {
    e.preventDefault();
    console.log("Custom submit method.");
    console.log(id);
  }

  return (
    <div id="edit-flight">
      <Header />
      <FlightRouteForm onSubmit={handleFormSubmit} />
    </div>
  );
}