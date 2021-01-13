import {
  GET_ALL_ROOMS,
  GET_ROOMS_PAGINATE,
  FILTER_ROOMS,
  CHANGE_ROOMS_FILTER_ACTIVE,
  DELETE_ROOM,
  SET_ROOMS_PAGE_OR_LIMIT,
  SET_ROOMS_TOTAL_PAGES,
  GET_ROOMS_SIZE,
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

export const deleteRoom = () => (dispatch) => {
  return dispatch({
    type: DELETE_ROOM,
    payload: null,
  });
};

export const setPageOrLimit = (field, data) => (dispatch) => {
  return dispatch({
    type: SET_ROOMS_PAGE_OR_LIMIT,
    payload: { field, data },
  });
};

export const setTotalPages = (data) => (dispatch) => {
  return dispatch({
    type: SET_ROOMS_TOTAL_PAGES,
    payload: data,
  });
};

export const getRoomsSize = (size) => (dispatch) => {
  return dispatch({
    type: GET_ROOMS_SIZE,
    payload: size,
  });
};

const exportData = {
  getAllRooms,
  getAllRoomsPaginate,
  changeRoomsFilterActive,
  filterRooms,
  deleteRoom,
  setPageOrLimit,
  setTotalPages,
  getRoomsSize,
};

export default exportData;
