import axios from 'axios';


const api = axios.create({
  baseURL: "https://5ff639a4941eaf0017f378b8.mockapi.io"
})


async function getHotels() {
  let data = false;
  await api.get("/hotels").then(response => {
    if (response) data = response.data;
  }).catch(error => {
    console.log("Ocorreu algum erro:", error);
  })

  return data;
}

async function deleteHotel(id) {
  let data = false;

  await api.delete(`/hotels/${id}`).then(response => {
    if (response) data = true;
  }).catch(error => {
    console.log('Ocorreu algum erro:', error)
  })

  return data;
}


export default {
  getHotels,
  deleteHotel,
}