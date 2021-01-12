import axios from "axios";

const http = axios.create({
  baseURL: "https://5ffba75063ea2f0017bdb2c6.mockapi.io",
  headers: {
    "Content-type": "application/json"
  }
});

export const getAirport = id => {
  return http.get(`/airport/${id}`);
};

export const updateAirport = (id, data) => {
    return http.put(`/airport/${id}`, data);
  };
