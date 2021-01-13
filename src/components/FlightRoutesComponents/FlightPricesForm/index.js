import React from "react";
import { useDispatch } from "react-redux";

import { update } from "../../../redux/actions/formFlightRoutes";

function PriceField({ id }) {
  const dispatch = useDispatch();

  function onChange(e) {
    const { name, value } = e.target;
    dispatch(update(name, value));
  }

  return (
    <th>
      <div className="input-group">
        <span className="input-group-text" id="basic-addon1">
          R$
        </span>
        <input
          className="form-control"
          type="text"
          name={id}
          id={id}
          title="Informe um valor numérico. Ex: 150,00 ou 1500,10"
          pattern="[\d]+(,\d{2})?"
          onChange={onChange}
          required
        />
      </div>
    </th>
  );
}

export default function FlightPricesForm() {
  return (
    <table className="table table-hover text-center">
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col">Adults</th>
          <th scope="col">Child</th>
          <th scope="col">Infant</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th className="align-middle">Price</th>
          <PriceField id="adultsPrice" />
          <PriceField id="childPrice" />
          <PriceField id="infantPrice" />
        </tr>
      </tbody>
    </table>
  );
}
