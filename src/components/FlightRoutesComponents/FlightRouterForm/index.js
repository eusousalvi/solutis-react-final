import React from "react";

import FlightManagementForm from "../FlightManagementForm";
import MainSettingsForm from "../FlightMainSettingsForm";

import "./styles.css";

export default function EditFlightForm({ onSubmit, data }) {
  return (
    <div
      id="edit-flight-form-wrapper"
      className="container-fluid edit-flight-form "
    >
      <form onSubmit={onSubmit} id="edit-flight-form">
        <div className="d-flex justify-content-between">
          <FlightManagementForm data={data?.flightManagement} />
          <MainSettingsForm data={data?.mainSettings} />
        </div>
        <div className="col-8">
          <button className="btn btn-primary w-100 edit-submit-button">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
