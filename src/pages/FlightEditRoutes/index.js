import React from "react";
import axios from "axios";

import { useParams, useHistory } from "react-router-dom";

import FlightRouteForm from "../../components/FlightRoutesComponents/FlightRouterForm";

export default function EditFlightRoutes() {
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState();
  const { id } = useParams();

  const history = useHistory();

  function handleFormSubmit(values) {
    axios
      .put(`https://5ff83d6510778b0017042ff3.mockapi.io/routes/${id}`, values)
      .then((response) => {
        history.push("/flights/routes");
      })
      .catch((erro) => console.log(erro));
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

  return (
    <div id="edit-flight-routes">
      {/* <Header /> */}
      {!loading && <FlightRouteForm onSubmit={handleFormSubmit} data={data} />}
    </div>
  );
}
