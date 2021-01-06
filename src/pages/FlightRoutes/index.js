import Header from "../../components/Header";
import CreateFlightRoutesButton from "../../components/flights-routes-list/CreateFlightRoutesButton";
import FlightRoutesTable from "../../components/flights-routes-list/FlightRoutesTable";

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
