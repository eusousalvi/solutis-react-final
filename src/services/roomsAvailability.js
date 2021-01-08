import exportData from '../services/rooms';

const { api } = exportData;

export async function getRoomAvailability(roomId) {
  const response = await api.get(`/rooms/${roomId}`);
  const { availability } = response.data;
  return availability;
}
