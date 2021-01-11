<<<<<<< HEAD
import { useState, useEffect } from 'react';
import HotelsHeader from '../../components/HotelsHeader';
import {
  FiEdit,
  FiX,
  FiPlusCircle,
  FiFile,
  FiPrinter,
  FiCheck,
} from 'react-icons/fi';
import './style.css';

import RoomsService from '../../services/rooms';
import { Link } from 'react-router-dom';
=======
import { useState, useEffect } from "react";
import { FiEdit, FiPlusCircle, FiFile, FiPrinter } from "react-icons/fi";

import HotelsHeader from "../../components/HotelsHeader";
import { FaCheck, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./style.css";

import RoomsService from "../../services/rooms";
import RoomsCard from "../../components/HotelsRoomList/RoomsCard/index";
import RoomsListTopToolBar from "../../components/HotelsRoomList/RoomsListTopToolBar/index";
import RoomsButton from "../../components/HotelsRoomList/RoomsButton/index";
import RoomsTable from "../../components/HotelsRoomList/RoomsTable/index";
import RoomsFooter from "../../components/HotelsRoomList/RoomsFooter/index";
import Pagination from "../../components/Pagination/index";
>>>>>>> bc3956dbcaaeafbd523f05b89e4233e03f616d33

function Rooms() {
  const [rooms, setRooms] = useState([]);
  const [deleted, setDeleted] = useState(false);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(25);
  const [totalPages, setTotalPages] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        let response;
        let response2;

        if (limit !== "all") {
          let pageNumber = page;

          response2 = await RoomsService.getRooms();

          if (limit === 100 && response2.data.length <= 100) pageNumber = 1;

          response = await RoomsService.getRoomsPaginate(pageNumber, limit);

          if (response2.status === 200 || response2.status || 201) {
            const pages = Math.ceil(response2.data.length / limit);
            const array = new Array(pages)
              .fill(pages)
              .map((data, index) => index + 1);

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

  const cardBody = (
    <div className="row">
      <div className="col">
        <RoomsListTopToolBar>
          <RoomsButton variant="add" title="ADD" />
          <div>
            <RoomsButton
              variant="print"
              title="PRINT"
              style={{ marginRight: 10 }}
            />
            <RoomsButton
              variant="export"
              title="EXPORT INTO CSV"
              style={{ marginRight: 10 }}
            />
            <RoomsButton variant="delete" title="DELETE SELECTED" />
          </div>
        </RoomsListTopToolBar>
        <RoomsTable rooms={rooms} handleDeleteRoom={handleDelete} />
      </div>
    </div>
  );

  return (
    <>
      <HotelsHeader />
      <br />
      <div className="container ">
<<<<<<< HEAD
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
                  <FiX /> DELETE SELECTED
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
                        to={`/hotels/rooms/availability/${room.id}`}
                      >
                        Availability
                      </Link>
                    </td>
                    <td>
                      <button className="btn btn-link">{`Upload(${room.uploads})`}</button>
                    </td>

                    <td>
                      <div className="status-container">
                        <FiCheck />

                        <button className="btn btn-warning mx-2">
                          <FiEdit />
                        </button>
                        <button className="btn btn-danger">
                          <FiX />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
=======
        <RoomsCard title="Rooms" content={cardBody} />
>>>>>>> bc3956dbcaaeafbd523f05b89e4233e03f616d33
      </div>
      <RoomsFooter>
        <Pagination
          page={page}
          limit={limit}
          totalPages={totalPages}
          handleChangePage={setPage}
          handleChangeLimit={setLimit}
        />
      </RoomsFooter>
    </>
  );
}

export default Rooms;
