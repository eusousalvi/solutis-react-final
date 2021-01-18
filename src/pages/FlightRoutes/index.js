import FlightRoutesTable from "../../components/FlightRoutesComponents/FlightRoutesTable";
import FlightsHeader from "../../components/FlightsHeader";
import FlightRoutePagination from "../../components/FlightRoutesComponents/FlightRoutePagination";
import { useState } from "react";
import FlightRoutesSearch from "../../components/FlightRoutesComponents/FlightRoutesSearch";

function FlightRoutes() {
  const [page, setPage] = useState(1);
  const [refresh, setRefresh] = useState(0);
  const [numberPerPage, setNumberPerPage] = useState(10);
  const [totalRoutes, setTotalRoutes] = useState();

  return (
    <>
      <FlightsHeader />
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="d-flex justify-content-center mt-5">Flights List</h1>
          </div>
        </div>
      </div>
      <div className="container">
        <FlightRoutesTable
          page={page}
          numberPerPage={numberPerPage}
          setTotalRoutes={setTotalRoutes}
          refresh={refresh}
          setRefresh={setRefresh}
        />
        <div className={"container d-flex"}>
          <FlightRoutePagination
            numberPerPage={numberPerPage}
            totalRoutes={totalRoutes}
            setPage={setPage}
            setNumberPerPage={setNumberPerPage}
            page={page}
          />
          <FlightRoutesSearch 
            refresh={refresh}
            setRefresh={setRefresh}
          />
        </div>
      </div>
    </>
  );
}

export default FlightRoutes;
