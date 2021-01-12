import React from "react";
import InputMask from "react-input-mask";

export default function FlightPricesForm() {
  function onChange(e) {
    const { name, value } = e.target;
    console.log(`${name} changed to ${value} on FlightPricesForm`);
  }

  const { adultsPrice, childPrice, infantPrice } = [0, 0, 0]; // TODO: useSelector to catch store data.

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
            <InputMask
              type="text"
              className="form-control"
              id="adultsPrice"
              name="adultsPrice"
              required
              placeholder="R$"
              value={adultsPrice}
              onChange={onChange}
              mask="R$999,99"
            />
          </th>
          <th>
            <InputMask
              type="text"
              className="form-control"
              id="childPrice"
              name="childPrice"
              required
              placeholder="R$"
              value={childPrice}
              onChange={onChange}
              mask="R$999,99"
            />
          </th>
          <th>
            <InputMask
              type="text"
              className="form-control"
              id="infantPrice"
              name="infantPrice"
              required
              placeholder="R$"
              value={infantPrice}
              onChange={onChange}
              mask="R$999,99"
            />
          </th>
        </tr>
      </tbody>
    </table>
  );
}
