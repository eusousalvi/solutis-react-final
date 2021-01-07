import React from "react";

import FlightRouteNode from "../FlightRouteNode";

export default function FlightRouteManagerForm() {
  const [connections, setConnections] = React.useState([]);

  function handleAddTransitClick() {
    setConnections([...connections, { id: connections.length }]);
  }

  function handleDeleteNodeClick(id) {
    return () => {
      setConnections(connections.filter((connection) => connection.id !== id));
    };
  }

  return (
    <div id="connection-manager-form">
      <table className="table text-center">
        <thead>
          <tr>
            <th className="col">Type</th>
            <th className="col">Airport</th>
            <th className="col">Airline</th>
            <th className="col">Flight NO.</th>
            <th className="col">Date</th>
            <th className="col">Time</th>
            <th className="col">Checkout</th>
          </tr>
        </thead>
        <tbody>
          <FlightRouteNode type="Departure" />
          {connections.map((connection) => (
            <FlightRouteNode
              key={connection.id}
              type="Transit"
              onClickDelete={handleDeleteNodeClick(connection.id)}
              removable
            />
          ))}
          <FlightRouteNode type="Arrival" />
        </tbody>
      </table>
      <button type="button" className="btn btn-success" onClick={handleAddTransitClick}>
        Add Transit
      </button>
    </div>
  );
}
