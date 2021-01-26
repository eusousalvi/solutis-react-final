import axios from "axios";
import roomsAction from "../redux/actions/rooms";

const api = axios.create({
  baseURL: "https://5ff3741c28c3980017b1953d.mockapi.io",
});

function getRooms(dispatch) {
  return api
    .get("/rooms")
    .then((response) => {
      if (response) {
        dispatch(roomsAction.getAllRooms(response.data));
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

function getRoomsPaginate(page, limit, dispatch) {
  return api
    .get(`/rooms?page=${page}&limit=${limit}`)
    .then((response) => {
      if (response) {
        dispatch(roomsAction.getAllRoomsPaginate(response.data));
      }
    })
    .catch((error) => console.log(error));
}

function deleteRoom(id, dispatch, type) {
  return api
    .delete(`/rooms/${id}`)
    .then((response) => {
      if (response.status === 200 || response.status === 201) {
        dispatch(roomsAction.deleteRoom());
        if (!type) window.alert("Room successfully deleted");
      }
    })
    .catch((error) => console.log(error));
}

function getRoomsSize(dispatch) {
  return api
    .get("/rooms")
    .then((response) => {
      if (response) {
        dispatch(roomsAction.getRoomsSize(response.data.length));
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

const exportData = {
  api,
  getRooms,
  getRoomsPaginate,
  deleteRoom,
  getRoomsSize,
};

export default exportData;
