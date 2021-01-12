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

function deleteRoom(id) {
  const response = api.delete(`/rooms/${id}`);

  return response;
}

const exportData = {
  api,
  getRooms,
  getRoomsPaginate,
  deleteRoom,
};

export default exportData;
