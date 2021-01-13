import CreateFlightRoutesButton from "../../components/FlightRoutesComponents/FlightRoutesCreateButton";
import FlightRoutesTable from "../../components/FlightRoutesComponents/FlightRoutesTable";
import FlightsHeader from "../../components/FlightsHeader";
import FlightRoutePagination from "../../components/FlightRoutesComponents/FlightRoutePagination";
import { useState } from "react";

function FlightRoutes() {

  const [page, setPage] = useState(1);
  const [numberPerPage, setNumberPerPage] = useState(10);
  const [totalRoutes, setTotalRoutes] = useState();

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
        <FlightRoutesTable page={page} numberPerPage={numberPerPage} setTotalRoutes={setTotalRoutes}/>
        <FlightRoutePagination numberPerPage={numberPerPage} totalRoutes={totalRoutes} setPage={setPage} setNumberPerPage={setNumberPerPage} page={page}/>
      </div>
    </>
  );
}

export default FlightRoutes;
