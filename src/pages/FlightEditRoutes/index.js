import React from "react";

import { useParams, useHistory } from "react-router-dom";

import FlightRouteForm from "../../components/FlightRoutesComponents/FlightRouterForm";

import routes from "../../services/routes";

export default function EditFlightRoutes() {
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState();
  const { id } = useParams();

  const history = useHistory();

  function handleFormSubmit(values) {
    routes
      .putRoute(id, values)
      .then(() => {
        history.push("/flights/routes");
      })
      .catch((error) => console.log(error));
  }

  React.useEffect(() => {
    routes
      .getRoute(id)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
    return () => {};
  }, [id]);

  return (
    <div id="edit-flight-routes">
      {!loading && <FlightRouteForm onSubmit={handleFormSubmit} data={data} />}
    </div>
  );
}
