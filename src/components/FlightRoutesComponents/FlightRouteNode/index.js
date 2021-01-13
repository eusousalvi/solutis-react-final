import React, { Fragment } from "react";

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

  const { type, city, airline, flightNumber, date, time, checkout } = node;

  React.useEffect(() => {
    airportsService.getAirports().then((response) => {
      setAirports(response.data);
      setLoadingAirports(false);

      if (response.data.length > 0 && city === undefined) {
        onChange({
          city: response.data[0].id,
          airline: airlines[0],
        });
      }
    });

    return () => {};
  }, []);

  function handleChange(e) {
    const { name, value } = e.target;
    onChange({
      [name]: value,
    });
  }

  return (
    <Fragment>
      {!loadingAirports && (
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
              defaultValue={city}
              onChange={handleChange}
            >
              {airports.map((airport) => (
                <option key={airport.id} value={airport.id}>
                  {airport.citycode}
                </option>
              ))}
            </select>
          </td>

          <td>
            <select
              className="form-control"
              id={`${type.toLowerCase()}Airline`}
              name="airline"
              defaultValue={airline}
              onChange={handleChange}
              required
            >
              {airlines.map((airline) => (
                <option key={airline}>{airline}</option>
              ))}
            </select>
          </td>
          <td>
            <input
              className="form-control"
              name="flightNumber"
              type="text"
              onChange={handleChange}
              defaultValue={flightNumber}
              pattern="[\d]{4}"
              title="O número do voo deve conter 4 dígitos numéricos."
              required
            />
          </td>
          <td>
            <input
              className="form-control"
              id="flight-date"
              type="date"
              name="date"
              onChange={handleChange}
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
              onChange={handleChange}
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
              onChange={handleChange}
              defaultValue={checkout}
              required
            />
          </td>
          {removable && (
            <td>
              <button
                type="button"
                className="btn btn-danger"
                onClick={onClickDelete}
              >
                x
              </button>
            </td>
          )}
        </tr>
      )}
    </Fragment>
  );
}
