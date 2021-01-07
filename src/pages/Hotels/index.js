import Header from "../../components/Header";
import HotelsHeader from "../../components/HotelsHeader";
import { FiCheck } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import { BiWorld } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { withRouter } from "react-router-dom";

import "./styles.css";
import { Link } from "react-router-dom";

import axios from "axios";
import { useEffect, useState } from "react";

function Hotels(props) {
  const [hotels, setHotels] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(
        "https://5ff639a4941eaf0017f378b8.mockapi.io/hotels"
      );
      setHotels(res.data);
      console.log(res.data);
    }
    fetchData();
  }, []);

  function handleDelete(id) {
    axios.delete(`https://5ff639a4941eaf0017f378b8.mockapi.io/hotels/${id}`);
    props.history.push("/");
  }
  return (
    <>
      <Header />
      <HotelsHeader />
      <div className="container">
        <div className="row">
          <div className="col-md-12 mt-5">
            <div className="border border-secondary rounded d-flex justify-content-between mb-4 bg-white p-3 ">
              <Link className="btn btn-success" to="/hotels/add">
                <FiPlus /> Add
              </Link>
              <a className="btn btn-danger" href="/hotels">
                <FiX /> Delete All
              </a>
            </div>
            <table className="table">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Image</th>
                  <th scope="col">Name</th>
                  <th scope="col">Star</th>
                  <th scope="col">Owned By</th>
                  <th scope="col">Location</th>
                  <th scope="col">Gallery</th>
                  <th scope="col">Order</th>
                  <th scope="col">Discount</th>
                  <th scope="col">Status</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {hotels.map((hotel, index) => {
                  return (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>
                        <img
                          src={hotel.image}
                          alt="Sunset view from a window"
                          className="rounded"
                          height="40"
                        />
                      </td>
                      <td>{hotel.name}</td>
                      <td>{hotel.star}</td>
                      <td>{hotel.owned_by}</td>
                      <td>{hotel.location}</td>
                      <td>
                        <a className="btn btn-outline-dark" href="/hotels">
                          Upload
                        </a>
                      </td>
                      <td>
                        <input
                          type="number"
                          className="form-control input-sm"
                          defaultValue={hotel.order}
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          className="form-control input-sm"
                          defaultValue={hotel.discount}
                        />
                      </td>
                      <td>{hotel.status === true ? <FiCheck /> : <FiX />}</td>
                      <td>
                        <button className="btn btn-primary">
                          <BiWorld />
                        </button>
                        <button className="btn btn-warning mx-2">
                          <FiEdit />
                        </button>
                        <button
                          className="btn btn-danger"
                          onClick={() => {
                            handleDelete(hotel.id);
                          }}
                        >
                          <AiOutlineDelete />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default withRouter(Hotels);
