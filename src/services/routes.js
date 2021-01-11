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

function putRoute(id) {
  return api.put(`/routes/${id}`);
}

function deleteRoute(id) {
  return api.delete(`/routes/${id}`);
}

const exportData = {
  api,
  getRoute,
  putRoute,
  getRoutes,
  deleteRoute,
};

export default exportData;
