import React from "react";

function PriceField({ id }) {
  return (
    <div className="input-group">
      <span className="input-group-text" id="basic-addon1">
        R$
      </span>
      <input
        type="text"
        className="form-control"
        id={id}
        name={id}
        required
        pattern="[\d]+(,\d{2})?"
        title="Informe um valor numérico. Ex: 150,00 ou 1500,10"
      />
    </div>
  );
}

export default function FlightPricesForm({ handler }) {
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
          <th>
            <PriceField id="adultsPrice" />
          </th>
          <th>
            <PriceField id="childPrice" />
          </th>
          <th>
            <PriceField id="infantPrice" />
          </th>
        </tr>
      </tbody>
    </table>
  );
}
