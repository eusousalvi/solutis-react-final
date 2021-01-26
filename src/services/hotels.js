import axios from "axios";
import hotelsAction from "../redux/actions/hotelsAction";

const api = axios.create({
  baseURL: "https://5ff639a4941eaf0017f378b8.mockapi.io",
});

async function getHotels(dispatch) {
  const res = await api.get("/hotels");
  console.log(res.data);
  dispatch(hotelsAction.getAllHotels(res.data));
}

function createHotel(hotel) {
  try {
    api.post("/hotels", hotel);
  } catch (e) {
    console.log(e);
  }
}

function getHotel(id) {
  const response = api.get(`/hotels/${id}`);

  return response;
}

function editHotel(hotel) {
  try {
    api.put(`/hotels/${hotel.id}`, hotel);
  } catch (e) {
    console.log(e);
  }
}

function getHotelsPaginate(page, limit, dispatch) {
  return api
    .get(`/hotels?page=${page}&limit=${limit}`)
    .then((response) => {
      if (response) {
        dispatch(hotelsAction.getAllHotelsPaginate(response.data));
      }
    })
    .catch((error) => console.log(error));
}

function deleteHotel(id) {
  const response = api.delete(`/hotels/${id}`);
  return response;
}

function getHotelsSize(dispatch) {
  return api
    .get("/hotels")
    .then((response) => {
      if (response) {
        dispatch(hotelsAction.getHotelsSize(response.data.length));
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

const exportData = {
  getHotels,
  getHotelsPaginate,
  deleteHotel,
  createHotel,
  getHotel,
  editHotel,
  getHotelsSize,
};

export default exportData;
