import {
  GET_ALL_ROOMS,
  GET_ROOMS_PAGINATE,
  FILTER_ROOMS,
  CHANGE_ROOMS_FILTER_ACTIVE,
} from "../constants/rooms";

export const getAllRooms = (rooms) => (dispatch) => {
  return dispatch({
    type: GET_ALL_ROOMS,
    payload: rooms,
  });
};

export const getAllRoomsPaginate = (rooms) => (dispatch) => {
  return dispatch({
    type: GET_ROOMS_PAGINATE,
    payload: rooms,
  });
};

export const changeRoomsFilterActive = (field) => (dispatch) => {
  return dispatch({
    type: CHANGE_ROOMS_FILTER_ACTIVE,
    payload: field,
  });
};

export const filterRooms = (field) => (dispatch) => {
  return dispatch({
    type: FILTER_ROOMS,
    payload: field,
  });
};

const exportData = {
  getAllRooms,
  getAllRoomsPaginate,
  changeRoomsFilterActive,
  filterRooms,
};

export default exportData;
