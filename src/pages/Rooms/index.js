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

function Rooms() {
  const [rooms, setRooms] = useState([]);
  const [deleted, setDeleted] = useState(false);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(25);
  const [totalPages, setTotalPages] = useState([]);
  const titleColumns = [
    "#",
    "Room Type",
    "Hotel",
    "Qty",
    "Price",
    "Prices",
    "Availability",
    "Gallery",
    "Status",
  ];

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
        <RoomsTable
          rooms={rooms}
          handleDeleteRoom={handleDelete}
          fields={titleColumns}
        />
      </div>
    </div>
  );

  return (
    <>
      <HotelsHeader />
      <br />
      <div className="container ">
        <RoomsCard title="Rooms" content={cardBody} />
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
