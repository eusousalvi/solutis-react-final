import CreateFlightRoutesButton from "../../components/FlightRoutesComponents/FlightRoutesCreateButton";
import FlightRoutesTable from "../../components/FlightRoutesComponents/FlightRoutesTable";
import FlightsHeader from "../../components/FlightsHeader";

function FlightRoutes() {
  return (
    <>
      <FlightsHeader/>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="d-flex justify-content-center mt-5">Flights Routes</h1>
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
