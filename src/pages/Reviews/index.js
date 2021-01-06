import { FiEdit, FiTrash2 } from "react-icons/fi";
import Header from "../../components/Header";
import HotelsHeader from "../../components/HotelsHeader";
import "./styles.css";

function Reviews() {
  return (
    <>
      <Header />
      <HotelsHeader />
      <section className="container">
        <div className="row col-md-12 mt-5 card">
          <div className="card-header bg-light d-flex justify-content-between align-items-center">
            <h5 className="card-title">Gerenciamento de Avaliações</h5>
            <button className="btn btn-lg btn-danger d-flex align-items-center justify-content-between">
              <FiTrash2  size={17}/> Deletar selecionados
            </button>
          </div>
          <div className="card-body">
            <table className="table table-striped table-hover">
              <thead className="thead-light table-secondary">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Hotel</th>
                  <th scope="col">Nome</th>
                  <th scope="col">E-mail</th>
                  <th scope="col">Data</th>
                  <th scope="col">Média</th>
                  <th scope="col" colSpan="2">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Rendezvous Hotels</td>
                  <td>Zea</td>
                  <td>
                    <a
                      className="btn btn-light btn-email"
                      href="mailto:zee2@gmail.com"
                    >
                      zee2@gmail.com
                    </a>
                  </td>
                  <td>03/05/2014</td>
                  <td>4</td>
                  <td>No</td>
                  <td>
                    <button className="btn btn-warning mx-auto edit-hover">
                      <FiEdit />
                    </button>
                  </td>
                </tr>
                <tr>
                  <th scrope="row">2</th>
                  <td>Rendezvous Hotels</td>
                  <td>Tariq Malik</td>
                  <td>
                    <a
                      className="btn btn-light btn-email"
                      href="mailto:takaa@gmail.com"
                    >
                      takaa@gmail.com
                    </a>
                  </td>
                  <td>03/05/2014</td>
                  <td>4.8</td>
                  <td>Yes</td>
                  <td>
                    <button className="btn btn-warning mx-auto edit-hover">
                      <FiEdit />
                    </button>
                  </td>
                </tr>
                <tr>
                  <th scrope="row">3</th>
                  <td>Malmaison Manchester</td>
                  <td>Sehra</td>
                  <td>
                    <a
                      className="btn btn-light btn-email"
                      href="mailto:se@gmal.com"
                    >
                      se@gmal.com
                    </a>
                  </td>
                  <td>11/09/2015</td>
                  <td>5.6</td>
                  <td>Yes</td>
                  <td>
                    <button className="btn btn-warning mx-auto edit-hover">
                      <FiEdit />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}

export default Reviews;
