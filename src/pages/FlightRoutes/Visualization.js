import ReturnFlightRoutesButton from "../../components/FlightsRoutesList/ReturnFlightRoutesButton";
import Header from "../../components/Header";

function Visualization() {
  return (
    <>
      <Header />
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
                <th scope="col">City</th>
                <th scope="col">Airline</th>
                <th scope="col">Flight Number</th>
                <th scope="col">Date</th>
                <th scope="col">Time</th>
                <th scope="col">Checkout</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Departure</td>
                <td>Salvador</td>
                <td>Gol</td>
                <td>2345</td>
                <td>11/01/2020</td>
                <td>01:30:00</td>
                <td>09:30:00</td>
              </tr>
              <tr>
                <td>Transit</td>
                <td>São Paulo</td>
                <td>Gol</td>
                <td>2345</td>
                <td>11/01/2020</td>
                <td>01:30:00</td>
                <td>09:30:00</td>
              </tr>
              <tr>
                <td>Arrival</td>
                <td>Curitiba</td>
                <td>Gol</td>
                <td>2345</td>
                <td>11/01/2020</td>
                <td>01:30:00</td>
                <td>09:30:00</td>
              </tr>
            </tbody>
          </table>
          <div className={"container"}>
            <div className={"row"}>
              <div className={"col-3"}>
                <table className={"table table-borderless mt-5"}>
                  <tbody>
                    <tr>
                      <th scope="row">Status:</th>
                      <td>Confirmed</td>
                    </tr>
                    <tr>
                      <th scope="row">Total hours:</th>
                      <td>03:00:00</td>
                    </tr>
                    <tr>
                      <th scope="row">Vat Tax</th>
                      <td>35%</td>
                    </tr>
                    <tr>
                      <th scope="row">Deposite</th>
                      <td>80%</td>
                    </tr>
                    <tr>
                      <th scope="row">Flight Type</th>
                      <td>Economic</td>
                    </tr>
                    <tr>
                      <th scope="row">Refundable</th>
                      <td>No</td>
                    </tr>
                    <tr>
                      <th scope="row">Direction</th>
                      <td>One way</td>
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
                      <td>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                      </td>
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
