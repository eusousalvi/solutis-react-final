import React from "react";

export default function FlightNode({
  node,
  removable,
  onClickDelete,
  onChange,
}) {
  const airportList = ["VCP", "REC", "CWB", "SSA"];
  const airlineList = ["GOL", "Azul", "Passaredo"];

  const { type, airport, airline, flightNumber, date, time, checkout } = node;

  return (
    <tr>
      <td>
        <input
          className="form-control text-center"
          type="text"
          name="type"
          placeholder={type}
          readOnly
        />
      </td>
      <td>
        <select
          className="form-control"
          id={`${type.toLowerCase()}Airport`}
          name="city"
          defaultValue={airport}
          onChange={onChange}
        >
          {airportList.map((airport) => (
            <option key={airport}>{airport}</option>
          ))}
        </select>
      </td>
      <td>
        <select
          className="form-control"
          id={`${type.toLowerCase()}Airline`}
          name="airline"
          defaultValue={airline}
          onChange={onChange}
          required
        >
          {airlineList.map((airline) => (
            <option key={airline}>{airline}</option>
          ))}
        </select>
      </td>
      <td>
        <input
          className="form-control"
          type="number"
          name="flightNumber"
          defaultValue={flightNumber}
          onChange={onChange}
          required
        />
      </td>
      <td>
        <input
          className="form-control"
          id="flight-date"
          type="date"
          name="date"
          onChange={onChange}
          defaultValue={date}
          required
        />
      </td>
      <td>
        <input
          className="form-control"
          type="time"
          id="flight-time"
          name="time"
          onChange={onChange}
          defaultValue={time}
          required
        />
      </td>
      <td>
        <input
          className="form-control"
          type="time"
          id="flight-checkout"
          name="checkout"
          onChange={onChange}
          defaultValue={checkout}
          required
        />
      </td>
      {removable && (
        <td>
          <button className="btn btn-danger" onClick={onClickDelete}>
            x
          </button>
        </td>
      )}
    </tr>
  );
}
