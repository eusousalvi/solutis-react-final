import React from "react";
import "./styles.css";

export default function MainSettingsForm({ handler }) {
  return (
    <div id="main-settings-form-wrapper" className="col-4">
      <div
        id="main-settings-form"
        className="card ml-8"
        style={{ marginLeft: "4px" }}
      >
        <div className="card-header">
          <h3 className="card-title">Main Settings</h3>
        </div>
        <div className="card-body">
          <div className="form-floating main-settings-item">
            <select
              id="status"
              name="status"
              className="form-select"
              aria-label="Flight Status"
              value={handler.values.status}
              onChange={handler.onChange}
            >
              <option value="enabled">Enabled</option>
              <option value="disabled">Disabled</option>
            </select>
            <label htmlFor="flightStatus" className="form-label">
              Status
            </label>
          </div>
          <div className="form-floating main-settings-item">
            <input
              required
              type="time"
              className="form-control"
              id="totalHours"
              name="totalHours"
              value={handler.values.totalHours}
              onChange={handler.onChange}
            />
            <label htmlFor="totalHours">Total Hours</label>
          </div>
          <div className="form-floating main-settings-item">
            <input
              type="number"
              className="form-control"
              id="vatTax"
              name="vatTax"
              value={handler.values.vatTax}
              onChange={handler.onChange}
            />
            <label htmlFor="vatTax">Vat Tax</label>
          </div>
          <div className="form-floating main-settings-item">
            <input
              type="number"
              className="form-control"
              id="deposite"
              name="deposite"
              value={handler.values.deposite}
              onChange={handler.onChange}
            />
            <label htmlFor="deposite">Deposite</label>
          </div>
          <div className="form-floating main-settings-item">
            <select
              id="flightType"
              name="flightType"
              className="form-select"
              aria-label="Flight Type"
              value={handler.values.flightType}
              onChange={handler.onChange}
            >
              <option value="business">Business</option>
              <option value="economic">Economic</option>
            </select>
            <label htmlFor="flightType" className="form-label">
              Flight Type
            </label>
          </div>
          <div className="form-floating main-settings-item">
            <select
              id="refundable"
              name="refundable"
              className="form-select"
              aria-label="Refundable"
              value={handler.values.refundable}
              onChange={handler.onChange}
            >
              <option value="refundable">Refundable</option>
              <option value="non-refundable">Non Refundable</option>
            </select>
            <label htmlFor="refundable" className="form-label">
              Refundable
            </label>
          </div>
          <div className="form-floating">
            <select
              id="direction"
              name="direction"
              className="form-select"
              aria-label="Flight Direction"
              value={handler.values.direction}
              onChange={handler.onChange}
            >
              <option value="one-way">One Way</option>
              <option value="return">Return</option>
            </select>
            <label htmlFor="direction" className="form-label">
              Direction
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
