import axios from "axios";

const api = axios.create({
  baseURL: "https://5ff83d6510778b0017042ff3.mockapi.io",
});

function getRoutes() {
  return api.get("/routes");
}

function getRoute(id) {
  return api.get(`/routes/${id}`);
}

function searchRoutes(searchFilter, query) {
  return api.get(`/routes/?${searchFilter}=${query}`);
}

function addRoute(params) {
  return api.post(`/routes/`, params);
}

function putRoute(id, params) {
  return api.put(`/routes/${id}`, params);
}

function deleteRoute(id) {
  return api.delete(`/routes/${id}`);
}

const exportData = {
  api,
  addRoute,
  getRoute,
  putRoute,
  getRoutes,
  deleteRoute,
  searchRoutes,
};

export default exportData;
