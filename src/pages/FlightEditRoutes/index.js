import React from "react";
import axios from "axios";

import { useParams } from "react-router-dom";

import FlightRouteForm from "../../components/FlightRoutesComponents/FlightRouterForm";

export default function EditFlightRoutes() {
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState();
  const { id } = useParams();

  function handleFormSubmit(values) {
    console.log(values);
  }

  React.useEffect(() => {
    axios
      .get(`https://5ff83d6510778b0017042ff3.mockapi.io/routes/${id}`)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((erro) => console.log(erro));
    return () => {};
  }, [id]);

  console.log(data);

  return (
    <div id="edit-flight-routes">
      {/* <Header /> */}
      {!loading && <FlightRouteForm onSubmit={handleFormSubmit} data={data} />}
    </div>
  );
}
