import exportData from '../services/rooms';

const { api } = exportData;

export async function getRoomAvailability(roomId) {
  try {
    const response = await api.get(`/rooms/${roomId}`);
    const { availability } = response.data;
    return availability;
  } catch (error) {
    console.log(error);
  }
}

export async function editRoomAvailability(roomId, data) {
  try {
    await api.put(`/rooms/${roomId}`, data);
  } catch (error) {
    console.log(error);
  }
}
