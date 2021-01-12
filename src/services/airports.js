import axios from "axios";

const api = axios.create({
  baseURL: "https://5ff63868941eaf0017f378a8.mockapi.io/api/"
})

function getAirports() {
  const res = api.get("/airports")
  return res
}

function getAirportById(id) {
  const res = api.get(`/airports/${id}`)
  return res
}

function deleteAirport(id) {
  const res = api.delete(`/airports/${id}`)  
  return res
}

async function searchAirports(query) {
  const res = api.get(`/airports/?cityname=${query}`)
  return res
}

async function getAirportsPaginated(page, limit) {
  const res = api.get(`/airports/?page=${page}&limit=${limit}`)
  return res
}

export default {
  getAirports,
  deleteAirport,
  searchAirports,
  getAirportsPaginated,
  getAirportById
}