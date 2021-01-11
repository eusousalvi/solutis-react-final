import React from "react";
import axios from "axios";

import { useParams } from "react-router-dom";

import FlightRouteForm from "../../components/FlightRoutesComponents/FlightRouterForm";
import Header from "../../components/Header";

export default function EditFlightRoutes() {
  const [data, setData] = React.useState();
  const { id } = useParams();

  function handleFormSubmit(values) {
    console.log(values);
  }

  React.useEffect(() => {
    axios
      .get(`https://5ff83d6510778b0017042ff3.mockapi.io/routes/${id}`)
      .then((response) => {
        console.log(response);
      })
      .catch((erro) => console.log(erro));
    return () => {};
  }, [id]);

  return (
    <div id="edit-flight-routes">
      {/* <Header /> */}
      <FlightRouteForm onSubmit={handleFormSubmit} data={data} />
    </div>
  );
}
