import React from "react";

export default function FlightRouteNode({ type, removable, onClickDelete }) {
  const airportList = ["VCP", "REC", "CWB", "SSA"];
  const airlineList = ["GOL", "Azul", "Passaredo"];

  return (
    <tr>
      <td>
        <input
          class="form-control text-center"
          type="text"
          placeholder={type}
          readOnly
        />
      </td>
      <td>
        <select
          class="form-control"
          name={`${type.toLowerCase()}Airport`}
          id={`${type.toLowerCase()}Airport`}
        >
          {airportList.map((airport) => (
            <option key={airport}>{airport}</option>
          ))}
        </select>
      </td>
      <td>
        <select
          class="form-control"
          name={`${type.toLowerCase()}Airline`}
          id={`${type.toLowerCase()}Airline`}
        >
          {airlineList.map((airline) => (
            <option key={airline}>{airline}</option>
          ))}
        </select>
      </td>
      <td>
        <input className="form-control" type="text" name="flightNumber" />
      </td>
      <td>
        <input class="form-control" type="date" id="example-date-input" />
      </td>
      <td>
        <input class="form-control" type="time" id="example-time-input" />
      </td>
      <td>
        <input class="form-control" type="time" id="example-time-input" />
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
