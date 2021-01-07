import ReturnFlightRoutesButton from "../../components/FlightsRoutesList/ReturnFlightRoutesButton";
import Header from "../../components/Header";

function Visualization() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="d-flex justify-content-center mt-5">Visualização</h1>
          </div>
        </div>
        <ReturnFlightRoutesButton />
        <div className={"container mt-5"}>
          <table className={"table table-bordered"}>
            <thead>
              <tr>
                <th scope="col">Tipo</th>
                <th scope="col">Cidade</th>
                <th scope="col">Liha Aérea</th>
                <th scope="col">Número do voo</th>
                <th scope="col">Data</th>
                <th scope="col">Tempo</th>
                <th scope="col">Checkout</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Partida</td>
                <td>Salvador</td>
                <td>Gol</td>
                <td>2345</td>
                <td>11/01/2020</td>
                <td>01:30:00</td>
                <td>09:30:00</td>
              </tr>
              <tr>
                <td>Translado</td>
                <td>São Paulo</td>
                <td>Gol</td>
                <td>2345</td>
                <td>11/01/2020</td>
                <td>01:30:00</td>
                <td>09:30:00</td>
              </tr>
              <tr>
                <td>Chegada</td>
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
                <table class="table table-borderless mt-5">
                  <tbody>
                    <tr>
                      <th scope="row">Status:</th>
                      <td>Confirmado</td>
                    </tr>
                    <tr>
                      <th scope="row">Total de horas:</th>
                      <td>03:00:00</td>
                    </tr>
                    <tr>
                      <th scope="row">Vat Tax</th>
                      <td>35%</td>
                    </tr>
                    <tr>
                      <th scope="row">Deposito</th>
                      <td>80%</td>
                    </tr>
                    <tr>
                      <th scope="row">Tipo de voo</th>
                      <td>Econômico</td>
                    </tr>
                    <tr>
                      <th scope="row">Reembolsável</th>
                      <td>Não</td>
                    </tr>
                    <tr>
                      <th scope="row">Direção</th>
                      <td>Apenas ida</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className={"col-sm"}>
                <table class="table table-striped mt-5">
                  <thead>
                    <tr>
                      <th scope="col">Descrição</th>
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
