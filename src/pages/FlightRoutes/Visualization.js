import ReturnFlightRoutesButton from "../../components/flights-routes-list/ReturnFlightRoutesButton";
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
                <td>Salvador</td>
                <td>Gol</td>
                <td>2345</td>
                <td>11/01/2020</td>
                <td>01:30:00</td>
                <td>09:30:00</td>
              </tr>
              <tr>
                <td>Chegada</td>
                <td>Salvador</td>
                <td>Gol</td>
                <td>2345</td>
                <td>11/01/2020</td>
                <td>01:30:00</td>
                <td>09:30:00</td>
              </tr>
            </tbody>
          </table>
          <div>
              
          </div>
        </div>
      </div>
    </>
  );
}

export default Visualization;
