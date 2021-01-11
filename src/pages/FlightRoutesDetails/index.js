import ReturnFlightRoutesButton from "../../components/FlightRoutesComponents/FlightRoutesReturnButton";
import { useParams } from "react-router";
import axios from "axios";
import { useEffect, useState } from "react";
import FlightRoutesDetailsTableRow from "../../components/FlightRoutesComponents/FlightRouteDetailsTableRow";

function Visualization() {
  const id = useParams();
  const [routeData, setRouteData] = useState({route: []});

  useEffect(getAPIdata, []);

  function getAPIdata() {
    axios
      .get(`https://5ff83d6510778b0017042ff3.mockapi.io/routes/${id.id}`)
      .then((res) => {
        setRouteData(res.data);
      })
      .catch((erro) => console.log(erro));
  }

  console.log(routeData.route);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="d-flex justify-content-center mt-5">Flight Route</h1>
          </div>
        </div>
        <ReturnFlightRoutesButton />
        <div className={"container mt-5"}>
          <table className={"table table-bordered"}>
            <thead>
              <tr>
                <th scope="col">Type</th>
                <th scope="col">Airport</th>
                <th scope="col">Airline</th>
                <th scope="col">Flight Number</th>
                <th scope="col">Date</th>
                <th scope="col">Time</th>
                <th scope="col">Checkout</th>
              </tr>
            </thead>
            <tbody>
              {routeData.route.map((route, index) => {
                return (
                  <FlightRoutesDetailsTableRow
                    key={index}
                    route={route}
                  />
                );
              })}
            </tbody>
          </table>
          <div className={"container"}>
            <div className={"row"}>
              <div className={"col-3"}>
                <table className={"table table-borderless mt-5"}>
                  <tbody>
                    <tr>
                      <th scope="row">Status:</th>
                      <td>{routeData.status}</td>
                    </tr>
                    <tr>
                      <th scope="row">Total hours:</th>
                      <td>{routeData.totalHours}</td>
                    </tr>
                    <tr>
                      <th scope="row">Vat Tax</th>
                      <td>{routeData.vatTax}</td>
                    </tr>
                    <tr>
                      <th scope="row">Deposite</th>
                      <td>{routeData.deposite}</td>
                    </tr>
                    <tr>
                      <th scope="row">Flight Type</th>
                      <td>{routeData.flightType}</td>
                    </tr>
                    <tr>
                      <th scope="row">Refundable</th>
                      <td>{routeData.refundable}</td>
                    </tr>
                    <tr>
                      <th scope="row">Direction</th>
                      <td>{routeData.direction}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className={"col-sm"}>
                <table className={"table table-striped mt-5"}>
                  <thead>
                    <tr>
                      <th scope="col">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{routeData.description}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Visualization;
