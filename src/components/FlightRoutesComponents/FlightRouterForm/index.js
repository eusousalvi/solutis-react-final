import React from "react";

import FlightManagementForm from "../FlightManagementForm";
import MainSettingsForm from "../FlightMainSettingsForm";

import store from "../../../redux/store";

import "./styles.css";

export default function EditFlightForm({ onSubmit: customOnSubmit, data }) {
  function onSubmit(e) {
    e.preventDefault();

    const { formFlightRoutesReducer } = store.getState();
    customOnSubmit(formFlightRoutesReducer); 
  }

  return (
    <div
      id="edit-flight-form-wrapper"
      className="container-fluid edit-flight-form "
    >
      <form onSubmit={onSubmit} id="edit-flight-form">
        <div className="d-flex justify-content-between">
          <FlightManagementForm />
          <MainSettingsForm />
        </div>
        <div className="col-8">
          <button
            type="submit"
            form="edit-flight-form"
            className="btn btn-primary w-100 edit-submit-button"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
