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

function searchAirports(searchFilter, query) {
  return api.get(`/airports/?${searchFilter}=${query}`)
}

function getAirportsPaginated(searchFilter, query, page, limit, sortBy, order) {
  const getOrder = order ? "asc" : "desc"
  return api.get(`/airports/?${searchFilter}=${query}&page=${page}&limit=${limit}&sortBy=${sortBy}&order=${getOrder}`)
}

function updateAirport(id, data) {
  return api.put(`/airports/${id}`, data)
};

function addAirport(data) {
  return api.post(`/airports`, data)
}

const exportData = {
  getAirports,
  deleteAirport,
  searchAirports,
  getAirportsPaginated,
  getAirportById,
  updateAirport,
  addAirport
}

export default exportData