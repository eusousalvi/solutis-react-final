import { useState, useEffect } from "react";
import HotelsHeader from "../../components/HotelsHeader";
import { FiEdit, FiPlusCircle, FiFile, FiPrinter } from "react-icons/fi";
import { FaCheck, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./style.css";

import RoomsService from "../../services/rooms";

function Rooms() {
  const [rooms, setRooms] = useState([]);
  const [deleted, setDeleted] = useState(false);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(25);
  const [totalPages, setTotalPages] = useState([]);
  console.log(totalPages);
  useEffect(() => {
    async function fetchData() {
      try {
        let response;
        let response2;

        if (limit !== "all") {
          response = await RoomsService.getRoomsPaginate(page, limit);
          response2 = await RoomsService.getRooms();

          if (response2.status === 200 || response2.status || 201) {
            const pages = Math.ceil(response2.data.length / limit);
            const array = new Array(pages)
              .fill(pages)
              .map((data, index) => index + 1);

            console.log(array);
            setTotalPages(array);
          }

          if (response.status === 200 || response.status || 201)
            setRooms(response.data);
        } else {
          response2 = await RoomsService.getRooms();

          if (response2.status === 200 || response2.status || 201) {
            setRooms(response2.data);
          }
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [deleted, page, limit]);

  async function handleDelete(id) {
    const confirmDelete = window.confirm("Are you sure?");

    if (confirmDelete) {
      try {
        const response = await RoomsService.deleteRoom(id);
        if (response.status === 200 || response.status || 201) {
          setDeleted(!deleted);
          window.alert("This room has been successfully deleted");
        }
      } catch (error) {
        window.alert("Ocorreu um erro");
      }
    }
  }

  return (
    <>
      <HotelsHeader />

      <div className="container ">
        <br />
        <div className="card">
          <div className="card-header">Rooms</div>
          <div className="card-body">
            <div className="row">
              <div className="col">
                <div className=" d-flex justify-content-between mb-4  p-3  bg-light border border-Secondary">
                  <button
                    type="button"
                    className="btn btn-success btn-outline-light"
                  >
                    ADD <FiPlusCircle />
                  </button>
                  <div>
                    <button
                      type="button"
                      className="btn btn-light btn-outline-dark"
                      style={{ marginRight: 10 }}
                    >
                      <FiPrinter /> PRINT
                    </button>
                    <button
                      type="button"
                      className="btn btn-light btn-outline-dark"
                      style={{ marginRight: 10 }}
                    >
                      <FiFile /> EXPORT INTO CSV
                    </button>

                    <button
                      type="button"
                      className="btn btn-danger btn-outline-light"
                    >
                      <FaTimes /> DELETE SELECTED
                    </button>
                  </div>
                </div>
                <table className="table table-striped table-hover">
                  <thead className="bg-light">
                    <tr>
                      <th scrop="col">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            value=""
                            id="selectAll"
                            className="form-check-input"
                          />
                        </div>
                      </th>
                      <th scope="col">#</th>
                      <th scope="col">Room Type</th>
                      <th scope="col">Hotel</th>
                      <th scope="col">Qty</th>
                      <th scope="col">Price</th>
                      <th scope="col">Prices</th>
                      <th scope="col">Availability</th>
                      <th scope="col">Gallery</th>
                      <th scope="col">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rooms.map((room, index) => (
                      <tr key={room.id}>
                        <th scope="row">
                          <div className="form-check">
                            <input
                              type="checkbox"
                              value=""
                              id="selectRoom"
                              className="form-check-input"
                            />
                          </div>
                        </th>
                        <th scope="row">{index + 1}</th>
                        <td>
                          <button className="btn btn-link">
                            {room.roomType}
                          </button>
                        </td>
                        <td>{room.hotel}</td>
                        <td>{room.qty}</td>
                        <td>{room.price}</td>
                        <td>
                          <button className="btn btn-link">Prices</button>
                        </td>
                        <td>
                          <Link
                            className="btn btn-link"
                            to={`/hotels/rooms/availabilty/${room.id}`}
                          >
                            Availability
                          </Link>
                        </td>
                        <td>
                          <button className="btn btn-link">{`Upload(${room.uploads})`}</button>
                        </td>

                        <td>
                          <div className="status-container">
                            <FaCheck />

                            <button className="btn btn-warning mx-2">
                              <FiEdit />
                            </button>
                            <button
                              className="btn btn-danger"
                              onClick={() => handleDelete(room.id)}
                            >
                              <FaTimes />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="card-body">
            <div className="btn-toolbar">
              {totalPages.length > 1 && limit !== "all" && (
                <div className="btn-group me-2" role="group">
                  {totalPages.map((item) => {
                    return (
                      <button
                        className={`${
                          page === item
                            ? "btn btn-primary"
                            : "btn btn-light btn-outline-dark "
                        }`}
                        key={item}
                        onClick={() => setPage(item)}
                      >
                        {item}
                      </button>
                    );
                  })}
                </div>
              )}
              <div className="btn-group me-2" role="group">
                <button
                  className={`${
                    limit === 25
                      ? "btn btn-primary"
                      : "btn btn-light btn-outline-dark "
                  }`}
                  onClick={() => setLimit(25)}
                >
                  25
                </button>
                <button
                  className={`${
                    limit === 50
                      ? "btn btn-primary"
                      : "btn btn-light btn-outline-dark "
                  }`}
                  onClick={() => setLimit(50)}
                >
                  50
                </button>
                <button
                  className={`${
                    limit === 100
                      ? "btn btn-primary"
                      : "btn btn-light btn-outline-dark "
                  }`}
                  onClick={() => setLimit(100)}
                >
                  100
                </button>
                <button
                  className={`${
                    limit === "all"
                      ? "btn btn-primary"
                      : "btn btn-light btn-outline-dark "
                  }`}
                  onClick={() => setLimit("all")}
                >
                  All
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Rooms;
