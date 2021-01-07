import React from "react";

import FlightRouteNode from "../FlightRouteNode";

const DEFAULT_NODE = {
  airport: "",
  airline: "",
  flightNumber: 0,
  date: "",
  time: "",
  checkout: "",
};

export default function FlightRouteManagerForm({ route }) {
  const [connections, setConnections] = React.useState(
    route ? route.connections : []
  );

  const departure = route
    ? route.departure
    : { ...DEFAULT_NODE, type: "Departure" };

  const arrival = route ? route.arrival : { ...DEFAULT_NODE, type: "Arival" };

  function handleAddTransitClick() {
    setConnections([
      ...connections,
      { ...DEFAULT_NODE, id: connections.length, type: "Transit" },
    ]);
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
          <FlightRouteNode node={departure} />
          {connections.map((node) => (
            <FlightRouteNode
              key={node.id}
              node={node}
              onClickDelete={handleDeleteNodeClick(node.id)}
              removable
            />
          ))}
          <FlightRouteNode node={arrival} />
        </tbody>
      </table>
      <button
        type="button"
        className="btn btn-success"
        onClick={handleAddTransitClick}
      >
        Add Transit
      </button>
    </div>
  );
}
