import { useEffect, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import Header from "../../components/Header";
import HotelsHeader from "../../components/HotelsHeader";
import zeroLeft from "../../helpers/zeroLeft";
import api from '../../services/reviews';
import "./styles.css";

function Reviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    (async function fetchReviews(){
      const data = await api.getReviews();
      data && setReviews([...data]);
    })()
  }, []);

  const handleDate = (date) => {
    const d = new Date(date);
    const day = zeroLeft(d.getDate());
    const month = zeroLeft(d.getMonth() + 1);
    const year = d.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <>
      <Header />
      <HotelsHeader />
      <section className="container">
        <div className="row col-md-12 mt-5 card">
          <div className="card-header bg-light d-flex justify-content-between align-items-center">
            <h5 className="card-title">Gerenciamento de Avaliações</h5>
            <button 
              className="btn btn-lg btn-danger d-flex align-items-center justify-content-between"
            >
              <IoMdClose /> Deletar selecionados
            </button>
          </div>
          <div className="card-body">
            <table className="table table-striped table-hover">
              <thead className="thead-light table-secondary">
                <tr>
                  <th scope="col">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="select_all"
                      id="select_all"
                      value=""
                    />
                  </th>
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
                {reviews &&
                  reviews.map((review) => {
                    return (
                      <tr key={review.id}>
                        <td>
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name={`review_${review.id}`}
                            id={review.id}
                          />
                        </td>
                        <td>{review.id}</td>
                        <td>{review.hotel}</td>
                        <td>{review.name}</td>
                        <td>
                          <a
                            className="btn btn-light btn-email"
                            href={`mailto:${review.email}`}
                          >
                            {review.email}
                          </a>
                        </td>
                        <td>{handleDate(review.date)}</td>
                        <td>{(+review.overall / 10).toFixed(1)}</td>
                        <td>{review.status ? "Yes" : "No"}</td>
                        <td>
                          <button className="btn btn-warning mx-auto edit-hover">
                            <FiEdit />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}

export default Reviews;
