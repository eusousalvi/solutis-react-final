import React from "react";

import FlightManagementForm from "../FlightManagementForm";
import MainSettingsForm from "../FlightMainSettingsForm";
import { Link } from "react-router-dom";

import "./styles.css";

export default function EditFlightForm({ onSubmit: customOnSubmit, data }) {
  function onSubmit(e) {
    e.preventDefault();
    customOnSubmit({}); // TODO: useSelector to catch store data.
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
            className="btn btn-primary w-100 edit-submit-button m-1"
          >
            Submit
          </button>
          <Link 
            to="/flights/routes/"
            className="btn btn-danger w-100 m-1"
          >
            Return
          </Link>
        </div>
      </form>
    </div>
  );
}
