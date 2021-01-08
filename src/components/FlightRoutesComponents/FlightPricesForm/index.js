import React from "react";

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
            <input
              type="text"
              className="form-control"
              id="adultsPrice"
              name="adultsPrice"
              required
              placeholder="R$"
              value={handler.values.adultsPrice}
              onChange={handler.onChange}
            />
          </th>
          <th>
            <input
              type="text"
              className="form-control"
              id="childPrice"
              name="childPrice"
              required
              placeholder="R$"
              value={handler.values.childPrice}
              onChange={handler.onChange}
            />
          </th>
          <th>
            <input
              type="text"
              className="form-control"
              id="infantPrice"
              name="infantPrice"
              required
              placeholder="R$"
              value={handler.values.infantPrice}
              onChange={handler.onChange}
            />
          </th>
        </tr>
      </tbody>
    </table>
  );
}
