import { useState, useEffect } from "react";
import FlightRoutesRow from "./FlightRoutesRow";
import axios from "axios";

function FlightRoutesTable() {
  const [flights, setFlights] = useState([]);
  const [refresh, setRefresh] = useState(0);

  useEffect(setFlightsList, [refresh]);

  function setFlightsList() {
    axios
      .get("https://5ff83d6510778b0017042ff3.mockapi.io/routes/")
      .then((res) => {
        setFlights(res.data);
      })
      .catch((erro) => console.log(erro));
  }

  function refreshChange() {
    setRefresh(refresh + 1);
  }

  return (
    <table className="table table-striped table-bordered mt-2">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">From</th>
          <th scope="col">To</th>
          <th scope="col">Flight Status</th>
          <th scope="col">Flight Mode</th>
          <th scope="col">Total Hours</th>
          <th scope="col">Departure Date</th>
          <th scope="col">Date Arrival</th>
          <th scope="col">Time Departure</th>
          <th scope="col">Time Arrival</th>
          <th scope="col" className="text-center">
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        {flights.map((flight, index) => {
          return <FlightRoutesRow refresh={refreshChange} key={index} flight={flight} />;
        })}
      </tbody>
    </table>
  );
}

export default FlightRoutesTable;
