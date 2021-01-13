import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { update, updateNode } from "../../../redux/actions/formFlightRoutes";

import FlightRouteNode from "../FlightRouteNode";

const DEFAULT_NODE = {
  flightNumber: 0,
  checkout: "",
  airline: "",
  city: "",
  date: "",
  time: "",
};

export default function FlightRouteManagerForm() {
  const { route } = useSelector((state) => state.formFlightRoutesReducer);
  const dispatch = useDispatch();

  function handleAddTransitClick() {
    dispatch(
      update("route", [
        ...route.slice(0, route.length - 1),
        {
          id: route.length,
          type: "Transit",
          ...DEFAULT_NODE,
        },
        ...route.slice(route.length - 1),
      ])
    );
  }

  function onChange(id) {
    return (data) => {
      dispatch(updateNode(id, data));
    };
  }

  function handleDeleteNodeClick(id) {
    return () => {
      dispatch(
        update(
          "route",
          route.filter((node) => node.id !== id)
        )
      );
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
          {route.map((node, i) => (
            <FlightRouteNode
              key={node.id}
              node={node}
              onClickDelete={handleDeleteNodeClick(node.id)}
              onChange={onChange(i)}
              removable={i > 0 && i < route.length - 1}
            />
          ))}
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
