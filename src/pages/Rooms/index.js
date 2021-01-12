import { useState, useEffect } from "react";
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
  //TODO
  //! ADICIONAR FUNÇÃO DE DELETAR NO REDUX
  //! ADICIONAR PAGINAÇÃO NO REDUX
  //! ADICIONAR CUSTOM HOOKS

  //const [rooms, setRooms] = useState([]);
  const [deleted, setDeleted] = useState(false);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(25);
  const [totalPages, setTotalPages] = useState([]);
  const titleColumns = [
    "Room Type",
    "Hotel",
    "Qty",
    "Price",
    "Prices",
    "Availability",
    "Gallery",
  ];

  const { rooms, filter } = useSelector((state) => state.rooms);
  const dispatch = useDispatch();

  function handleToggleActive(field) {
    dispatch(roomsActions.changeRoomsFilterActive(field));
    dispatch(roomsActions.filterRooms(field));
  }

  /*  function handleFilter(array, field, order) {
    let arrayCopy = array.slice("");

    switch (field) {
      case "Room Type":
        arrayCopy = array.sort((room1, room2) => {
          if (order) {
            return room1.roomType - room2.roomType;
          } else {
            return room2.roomType - room1.roomType;
          }
        });

        break;

      case "Qty":
        arrayCopy = array.sort((room1, room2) => {
          if (order) {
            return room1.qty - room2.qty;
          } else {
            return room2.qty - room1.qty;
          }
        });

        break;

      case "Price":
        arrayCopy = array.sort((room1, room2) => {
          if (order) {
            return room1.price - room2.price;
          } else {
            return room2.price - room1.price;
          }
        });

        break;

      case "Availability":
        arrayCopy = array.sort((room1, room2) => {
          if (order) {
            return room1.availability.length - room2.availability.length;
          } else {
            return room2.availability.length - room1.availability.length;
          }
        });

        break;

      case "Gallery":
        arrayCopy = array.sort((room1, room2) => {
          if (order) {
            return room1.uploads - room2.uploads;
          } else {
            return room2.uploads - room1.uploads;
          }
        });

        break;

      default:
        console.log("ata");
    }

    return arrayCopy;
  } */
  /* 
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
            if (filterIsActive.active) {
              const data = handleFilter(
                response.data,
                filterIsActive.field,
                filterIsActive.order
              );
              setRooms(data);
            } else {
              setRooms(response.data);
            }
        } else {
          response2 = await RoomsService.getRooms();

          if (response2.status === 200 || response2.status || 201) {
            if (filterIsActive.active) {
              const data = handleFilter(
                response2.data,
                filterIsActive.field,
                filterIsActive.order
              );
              setRooms(data);
            } else {
              setRooms(response2.data);
            }
          }
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [deleted, page, limit, filterIsActive]);
 */

  useEffect(() => {
    async function fetchData() {
      await RoomsService.getRooms(dispatch);
    }

    fetchData();
  }, [dispatch]);

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
          order={filter}
          handleChangeOrder={handleToggleActive}
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
