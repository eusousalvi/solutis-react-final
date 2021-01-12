import axios from "axios";

const api = axios.create({
  baseURL: "https://5ff639a4941eaf0017f378b8.mockapi.io",
});

function getHotels() {
  const response = api.get("/hotels");

  return response;
}

function createHotel(hotel) {
  try {
    api.post("/hotels", hotel);
  } catch (e) {
    console.log(e);
  }
}

function getHotelsPaginate(page, limit) {
  const response = api.get(`/hotels?page=${page}&limit=${limit}`);

  return response;
}

function deleteHotel(id) {
  const response = api.delete(`/hotels/${id}`);
  return response;
}

const exportData = {
  getHotels,
  getHotelsPaginate,
  deleteHotel,
  createHotel,
};

export default exportData;