import React from "react";

import FlightRouteManagerForm from "../FlightRouteManagerForm";
import FlightPricesForm from "../FlightPricesForm";

import "./styles.css";

export default function OneWayForm() {
  return (
    <div id="one-way-edit" className="one-way-form">
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">One Way</h3>
        </div>
        <div className="card-body">
          <FlightPricesForm />
          <FlightRouteManagerForm />
        </div>
      </div>
    </div>
  );
}
