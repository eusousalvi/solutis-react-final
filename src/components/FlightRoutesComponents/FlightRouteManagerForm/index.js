import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { update, updateNode } from "../../../redux/actions/formFlightRoutes";
import parseFlightNodeDate from "../../../helpers/parseFlightNodeDate";
import FlightRouteNode from "../FlightRouteNode";

const DEFAULT_NODE = {
  flightNumber: "",
  city: "citycode 0",
  checkout: "",
  checkin: "",
  airline: "",
  date: "",
};

function evaluateRoute(route) {
  let i;
  for (i = 0; i < route.length; i++) {
    const currentNodeCheckOut = parseFlightNodeDate(route[i], false);
    const currentNodeCheckIn = parseFlightNodeDate(route[i], true);

    if (i > 0 && currentNodeCheckIn - parseFlightNodeDate(route[i - 1]) < 0) {
      return {
        hasError: true,
        message: `O Check In de uma conexão deve ocorrer após o Check Out da conexão anterior!`,
      };
    } else if (currentNodeCheckOut - currentNodeCheckIn < 0) {
      return {
        hasError: true,
        message: `Verifique se o horário do checkin antecede o horário do checkout!`,
      };
    }
  }
  return { hasError: false };
}

function applyChange(route, { id, data }) {
  return route.map((node) => (node.id === id ? { ...node, ...data } : node));
}

export default function FlightRouteManagerForm() {
  const { route } = useSelector((state) => state.formFlightRoutesReducer);
  const dispatch = useDispatch();

  function handleAddTransitClick() {
    const { checkout, date, flightNumber } = route[route.length - 2];
    dispatch(
      update("route", [
        ...route.slice(0, route.length - 1),
        {
          ...DEFAULT_NODE,
          date,
          checkout,
          flightNumber,
          type: "Transit",
          id: route.length,
          checkin: checkout,
        },
        ...route.slice(route.length - 1),
      ])
    );
  }

  function onChange(id) {
    return (data) => {
      const routeAfterChange = applyChange(route, { id, data });
      const { hasError, message } = evaluateRoute(routeAfterChange);

      if (!hasError) dispatch(updateNode(id, data));
      else {
        alert(message);
        // console.log(message);
      }
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
            <th className="col">Check In</th>
            <th className="col">Check Out</th>
          </tr>
        </thead>
        <tbody>
          {route.map((node, i) => (
            <FlightRouteNode
              key={node.id}
              node={node}
              onClickDelete={handleDeleteNodeClick(node.id)}
              onChange={onChange(node.id)}
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
