import React from "react";
import "./styles.css";

import { useDispatch, useSelector } from "react-redux";

import { update } from "../../../redux/actions/formFlightRoutes";

function parseNodeDate(node) {
  const date = node.date.split("-");
  const time = node.time.split(":");
  return new Date(date[0], date[1] - 1, date[2], time[0], time[1]);
}

function minutesToString(minutes) {
  return `${Math.floor(minutes / 60)}:${minutes % 60 <= 9 ? "0" : ""}${
    minutes % 60
  }`;
}

function getNodeDifference(initial, final) {
  return (parseNodeDate(final) - parseNodeDate(initial)) / (1000 * 60);
}

export default function MainSettingsForm() {
  const {
    route,
    status,
    vatTax,
    deposite,
    totalHours,
    flightType,
    refundable,
    direction,
  } = useSelector((state) => state.formFlightRoutesReducer);
  const dispatch = useDispatch();

  function onChange(e) {
    const { name, value } = e.target;
    dispatch(update(name, value));
  }

  React.useEffect(() => {
    const flightTime = getNodeDifference(route[0], route[route.length - 1]);
    dispatch(update("totalHours", minutesToString(flightTime)));
    return () => {};
  }, [route, dispatch]);

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
              onChange={onChange}
              value={status}
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
              className="form-control"
              id="totalHours"
              name="totalHours"
              onChange={onChange}
              value={totalHours}
              readOnly
            />
            <label htmlFor="totalHours">Total Hours</label>
          </div>
          <div className="input-group main-settings-item">
            <div
              className="form-floating"
              style={{ display: "flex", flexGrow: 1 }}
            >
              <input
                style={{ borderBottomRightRadius: 0, borderTopRightRadius: 0 }}
                className="form-control"
                type="text"
                id="vatTax"
                name="vatTax"
                pattern="100|\d{1,2}(,\d{2})?"
                placeholder="vatTax"
                title="Seu percentual deve ser maior que 0 e menor ou igual a 100."
                onChange={onChange}
                value={vatTax}
                required
              />
              <label htmlFor="vatTax">Vat Tax</label>
            </div>
            <span className=" input-group-text input-group-append">%</span>
          </div>

          <div className="input-group main-settings-item">
            <span className="input-group-text" id="basic-addon1">
              R$
            </span>
            <div
              className="form-floating"
              style={{ display: "flex", flexGrow: 1 }}
            >
              <input
                style={{ borderBottomLeftRadius: 0, borderTopLeftRadius: 0 }}
                className="form-control"
                type="text"
                id="deposite"
                name="deposite"
                placeholder="deposite"
                onChange={onChange}
                value={deposite}
              />
              <label htmlFor="deposite">Deposite</label>
            </div>
          </div>

          <div className="form-floating main-settings-item">
            <select
              id="flightType"
              name="flightType"
              className="form-select"
              aria-label="Flight Type"
              onChange={onChange}
              value={flightType}
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
              onChange={onChange}
              value={refundable}
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
              onChange={onChange}
              value={direction}
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
