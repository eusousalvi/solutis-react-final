import { useEffect, useCallback } from "react";
import HotelsHeader from "../../components/HotelsHeader";
import "./style.css";

import RoomsService from "../../services/rooms";
import RoomsCard from "../../components/HotelsRoomList/RoomsCard/index";
import RoomsListTopToolBar from "../../components/HotelsRoomList/RoomsListTopToolBar/index";
import RoomsButton from "../../components/HotelsRoomList/RoomsButton/index";
import RoomsTable from "../../components/HotelsRoomList/RoomsTable/index";
import RoomsFooter from "../../components/HotelsRoomList/RoomsFooter/index";
import Pagination from "../../components/Pagination/index";

import { useSelector, useDispatch } from "react-redux";
import roomsActions from "../../redux/actions/rooms";

function Rooms() {
  const titleColumns = [
    "Room Type",
    "Hotel",
    "Qty",
    "Price",
    "Prices",
    "Availability",
    "Gallery",
  ];

  const {
    rooms,
    filter,
    deleted,
    page,
    limit,
    totalPages,
    size,
    roomsSelected,
  } = useSelector((state) => state.rooms);

  const dispatch = useDispatch();
  const fetchData = useCallback(async () => {
    if (limit !== "all") {
      let pageNumber = page;

      await RoomsService.getRoomsSize(dispatch);

      if (limit === 100 && size <= 100) pageNumber = 1; // eslint-disable-line no-unused-vars

      await RoomsService.getRoomsPaginate(page, limit, dispatch);
      dispatch(roomsActions.setTotalPages(size));

      if (filter.active) {
        dispatch(roomsActions.filterRooms(filter.field));
      }
    } else {
      await RoomsService.getRooms(dispatch);
      if (filter.active) {
        dispatch(roomsActions.filterRooms(filter.field));
      }
    }
  }, [filter, dispatch, page, size, limit]);

  function handleToggleActive(field) {
    dispatch(roomsActions.changeRoomsFilterActive(field));
    dispatch(roomsActions.filterRooms(field));
  }

  useEffect(() => {
    fetchData();
  }, [fetchData, deleted]);

  function handleSendSelectData(data) {
    dispatch(roomsActions.addRoomsSelecteds(data));
  }

  function handleRemoveSelectData(data) {
    dispatch(roomsActions.removeRoomsSelecteds(data));
  }

  async function handleDelete(id) {
    const confirmDelete = window.confirm("Are you sure?");

    if (confirmDelete) {
      await RoomsService.deleteRoom(id, dispatch);
    }
  }

  function handleChangePageOrLimit(field, data) {
    dispatch(roomsActions.setPageOrLimit(field, data));
  }

  async function handleDeleteSelected() {
    roomsSelected.forEach(async (value) => {
      await RoomsService.deleteRoom(value, dispatch, "selected");
    });
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
            <RoomsButton
              variant="delete"
              title="DELETE SELECTED"
              onClick={handleDeleteSelected}
            />
          </div>
        </RoomsListTopToolBar>
        <RoomsTable
          rooms={rooms}
          handleDeleteRoom={handleDelete}
          fields={titleColumns}
          order={filter}
          handleChangeOrder={handleToggleActive}
          handleSendSelectData={handleSendSelectData}
          handleRemoveSelectData={handleRemoveSelectData}
        />
      </div>
    </div>
  );

  return (
    <>
      <HotelsHeader />
      <br />
      <div className="container-fluid ">
        <RoomsCard title="Rooms" content={cardBody} />
      </div>
      <RoomsFooter>
        <Pagination
          page={page}
          limit={limit}
          totalPages={totalPages}
          handleChangePageOrLimit={handleChangePageOrLimit}
        />
      </RoomsFooter>
    </>
  );
}

export default Rooms;
