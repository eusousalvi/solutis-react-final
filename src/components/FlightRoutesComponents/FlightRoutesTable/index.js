import { useState, useEffect } from "react";
import FlightRoutesRow from "../FlightRoutesRow";
import routes from "../../../services/routes";
import CreateFlightRoutesButton from "../FlightRoutesCreateButton";
import FlightRouteDeleteSelected from "../FlightRouteDeleteSelected";

function FlightRoutesTable(props) {
  const [flights, setFlights] = useState([]);
  const [refresh, setRefresh] = useState(0);
  const [selected, setSelected] = useState([]);
  const [allChecked, setAllChecked] = useState(false);

  useEffect(setFlightsList, [refresh, props]);

  function setFlightsList() {
    routes
      .getRoutes()
      .then((res) => {
        props.setTotalRoutes(res.data.length);
        let array = pageExhibition(props.page, props.numberPerPage, res.data);
        setFlights(array);
      })
      .catch((erro) => console.log(erro));
  }

  function pageExhibition(page, numberPerPage, array) {
    let routesInPage = [];

    let startArray = numberPerPage * (page - 1);
    let finishArray = startArray + numberPerPage;

    if (finishArray > array.length) {
      finishArray = array.length;
    }
    for (let i = startArray; i < finishArray; i++) {
      routesInPage.push(array[i]);
    }

    return routesInPage;
  }

  function refreshChange() {
    setRefresh(refresh + 1);
  }

  return (
    <>
      <div className={"d-flex justify-content-between"}>
        <CreateFlightRoutesButton />
        <FlightRouteDeleteSelected refresh={refresh} setRefresh={setRefresh} />
      </div>
      <div className={"table-responsive"}>
        <table className="table table-striped mt-2">
          <thead>
            <tr>
              <th>
                <input
                  type={"checkbox"}
                  checked={allChecked}
                  onChange={() => {
                    setAllChecked(!allChecked);
                  }}
                ></input>
              </th>
              <th scope="col">#</th>
              <th scope="col">From</th>
              <th scope="col">To</th>
              <th scope="col">Flight Status</th>
              <th scope="col">Flight Mode</th>
              <th scope="col">Total Hours</th>
              <th scope="col">Departure Date</th>
              <th scope="col">Date Arrival</th>
              <th scope="col">Time Departure</th>
              <th scope="col">Time Arrival</th>
              <th scope="col" className="text-center">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {flights.map((flight, index) => {
              return (
                <FlightRoutesRow
                  allChecked={allChecked}
                  selected={selected}
                  setSelected={setSelected}
                  refresh={refreshChange}
                  key={index}
                  flight={flight}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default FlightRoutesTable;
