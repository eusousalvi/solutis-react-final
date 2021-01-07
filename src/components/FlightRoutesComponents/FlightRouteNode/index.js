import React from "react";

export default function FlightRouteNode({ node, removable, onClickDelete }) {
  const airportList = ["VCP", "REC", "CWB", "SSA"];
  const airlineList = ["GOL", "Azul", "Passaredo"];

  const { type, airport, airline, flightNumber, date, time, checkout } = node;

  return (
    <tr>
      <td>
        <input
          className="form-control text-center"
          type="text"
          placeholder={type}
          readOnly
        />
      </td>
      <td>
        <select
          className="form-control"
          name={`${type.toLowerCase()}Airport`}
          id={`${type.toLowerCase()}Airport`}
          defaultValue={airport}
        >
          {airportList.map((airport) => (
            <option key={airport}>{airport}</option>
          ))}
        </select>
      </td>
      <td>
        <select
          className="form-control"
          name={`${type.toLowerCase()}Airline`}
          id={`${type.toLowerCase()}Airline`}
          defaultValue={airline}
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
          required
        />
      </td>
      <td>
        <input
          className="form-control"
          type="date"
          id="flight-date"
          defaultValue={date}
          required
        />
      </td>
      <td>
        <input
          className="form-control"
          type="time"
          id="flight-time"
          defaultValue={time}
          required
        />
      </td>
      <td>
        <input
          className="form-control"
          type="time"
          id="flight-checkout"
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
