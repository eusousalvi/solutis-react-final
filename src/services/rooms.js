import axios from 'axios';

const api = axios.create({
  baseURL: 'https://5ff3741c28c3980017b1953d.mockapi.io',
});

function getRooms() {
  const response = api.get('/rooms');

  return response;
}

function getRoomsPaginate(page, limit) {
  const response = api.get(`/rooms?page=${page}&limit=${limit}`);

  return response;
}

function deleteRoom(id) {
  const response = api.delete(`/rooms/${id}`);

  return response;
}

const exportData = {
  api,
  getRooms,
  getRoomsPaginate,
  deleteRoom,
};

export default exportData;
