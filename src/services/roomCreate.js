import axios from "axios";

const api = axios.create({
  baseURL: "https://5ff61bbd941eaf0017f37764.mockapi.io/api/v1/",
});

function addRoom(data) {
  const response = api.post("/rooms", data);

  return response;
}

const exportData = {
  api,
  addRoom,
};

export default exportData;
