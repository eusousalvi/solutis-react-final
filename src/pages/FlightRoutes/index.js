import Header from "../../components/Header";
import CreateFlightRoutesButton from "../../components/FlightsRoutesList/CreateFlightRoutesButton";
import FlightRoutesTable from "../../components/FlightsRoutesList/FlightRoutesTable";

function FlightRoutes() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="d-flex justify-content-center mt-5">Rotas de Voo</h1>
          </div>
        </div>
      </div>
      <div className="container">
        <CreateFlightRoutesButton />
        <FlightRoutesTable />
      </div>
    </>
  );
}

export default FlightRoutes;
