import React from "react";

export default function FlightPricesForm({ prices }) {
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
              id="adultPrice"
              name="adultPrice"
              required
              placeholder="R$"
              defaultValue={prices?.adult}
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
              defaultValue={prices?.child}
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
              defaultValue={prices?.infant}
            />
          </th>
        </tr>
      </tbody>
    </table>
  );
}
