import exportData from '../services/rooms';
import getMonths from '../helpers/getMonths';

const { api } = exportData;

export async function getRoomAvailability(roomId) {
  try {
    const response = await api.get(`/rooms/${roomId}`);
    let { availability } = response.data;
    availability = availability.length > 0 ? availability : getMonths();
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
