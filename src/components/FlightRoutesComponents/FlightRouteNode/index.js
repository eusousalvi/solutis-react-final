import React from "react";
import InputMask from "react-input-mask";

import airportsService from "../../../services/airports";

export default function FlightNode({
  node,
  removable,
  onClickDelete,
  onChange,
}) {
  const [airlines, setAirlines] = React.useState(["GOL", "Azul", "Passaredo"]);
  const [loadingAirports, setLoadingAirports] = React.useState(true);
  const [airports, setAirports] = React.useState([]);

  React.useEffect(() => {
    airportsService.getAirports().then((response) => {
      setAirports(response);
      setLoadingAirports(false);

      if (response.length)
        onChange({ target: { name: "city", value: response[0].id } });
    });

    if (airlines.length)
      onChange({ target: { name: "airline", value: airlines[0] } });

    return () => {};
  }, [onChange, airlines]);

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
      {!loadingAirports && (
        <td>
          <select
            className="form-control"
            id={`${type.toLowerCase()}Airport`}
            name="city"
            defaultValue={airport}
            onChange={onChange}
          >
            {airports.map((airport) => (
              <option key={airport.id} value={airport.id}>
                {airport.citycode}
              </option>
            ))}
          </select>
        </td>
      )}
      <td>
        <select
          className="form-control"
          id={`${type.toLowerCase()}Airline`}
          name="airline"
          defaultValue={airline}
          onChange={onChange}
          required
        >
          {airlines.map((airline) => (
            <option>{airline}</option>
          ))}
        </select>
      </td>
      <td>
        <InputMask
          className="form-control"
          type="text"
          name="flightNumber"
          defaultValue={flightNumber}
          onChange={onChange}
          required
          mask="999999"
          maskPlaceholder={null}
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
