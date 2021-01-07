import React from "react";

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
          <th>
            <input
              type="text"
              className="form-control"
              id="adultPrice"
              name="adultPrice"
              required
              placeholder="R$"             
            />
          </th>
          <th>
            <input
              type="text"
              className="form-control"
              id="childPrice"
              name="childPrice"
              placeholder="R$" 
            />
          </th>
          <th>
            <input
              type="text"
              className="form-control"
              id="infantPrice"
              name="infantPrice"
              placeholder="R$" 
            />
          </th>
        </tr>
      </tbody>
    </table>
  );
}
