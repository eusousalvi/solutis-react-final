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

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await RoomsService.getRooms();
        if (response.status === 200 || response.status || 201)
          setRooms(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [deleted]);

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
        <div className="row">
          <div className="col-md-12 mt-5">
            <div className="border border-secondary rounded d-flex justify-content-between mb-4 bg-white p-3 ">
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
              <thead className="thead">
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
                {rooms.map((room) => (
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
                    <th scope="row">{room.id}</th>
                    <td>
                      <button className="btn btn-link">{room.roomType}</button>
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
    </>
  );
}

export default Rooms;
