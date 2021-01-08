import axios from "axios";

const api = axios.create({
  baseURL: "https://5ff3741c28c3980017b1953d.mockapi.io",
});

async function getRooms() {
  let data = false;

  await api
    .get("/Rooms")
    .then((response) => {
      if (response) data = response.data;
    })
    .catch((error) => {
      console.log("Ocorreu algum erro:", error);
    });

  return data;
}

async function deleteRoom(id) {
  let data = false;

  await api
    .delete(`/Rooms/${id}`)
    .then((response) => {
      if (response) data = true;
    })
    .catch((error) => {
      console.log("Ocorreu algum erro:", error);
    });

  return data;
}

export default {
  getRooms,
  deleteRoom,
};
