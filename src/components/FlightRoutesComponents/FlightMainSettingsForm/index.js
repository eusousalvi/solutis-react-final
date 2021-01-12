import React from "react";
import "./styles.css";
import InputMask from "react-input-mask";

export default function MainSettingsForm() {
  const {
    status,
    totalHours,
    vatTax,
    deposite,
    flightType,
    refundable,
    direction,
  } = []; // TODO: useSelector

  function onChange(e) {
    const { name, value } = e.target;
    console.log(`(MainSettingsForm) ${name} changed to ${value}`);
  }

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
              value={status}
              onChange={onChange}
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
              value={totalHours}
              onChange={onChange}
            />
            <label htmlFor="totalHours">Total Hours</label>
          </div>
          <div className="form-floating main-settings-item">
            <InputMask
              type="text"
              className="form-control"
              id="vatTax"
              name="vatTax"
              value={vatTax}
              onChange={onChange}
              mask="99%"
              placeholder="%"
            />
            <label htmlFor="vatTax">Vat Tax</label>
          </div>
          <div className="form-floating main-settings-item">
            <InputMask
              type="text"
              className="form-control"
              id="deposite"
              name="deposite"
              value={deposite}
              onChange={onChange}
              mask="R$9999,99"
              placeholder="R$"
            />
            <label htmlFor="deposite">Deposite</label>
          </div>
          <div className="form-floating main-settings-item">
            <select
              id="flightType"
              name="flightType"
              className="form-select"
              aria-label="Flight Type"
              value={flightType}
              onChange={onChange}
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
              value={refundable}
              onChange={onChange}
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
              value={direction}
              onChange={onChange}
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
