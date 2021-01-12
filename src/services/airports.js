import axios from "axios";

const api = axios.create({
  baseURL: "https://5ff63868941eaf0017f378a8.mockapi.io/api/"
})

function getAirports() {
  return api.get("/airports")
}

function getAirportById(id) {
  return api.get(`/airports/${id}`)
}

function deleteAirport(id) {
  return api.delete(`/airports/${id}`)  
}

async function searchAirports(query) {
  return api.get(`/airports/?cityname=${query}`)
}

async function getAirportsPaginated(page, limit) {
  return api.get(`/airports/?page=${page}&limit=${limit}`)
}

export default {
  getAirports,
  deleteAirport,
  searchAirports,
  getAirportsPaginated,
  getAirportById
}