import {
  LIST_HOTELS,
  SET_HOTELS_TOTAL_PAGES,
  SET_HOTELS_PAGE_OR_LIMIT,
  GET_HOTELS_SIZE,
  GET_HOTELS_PAGINATE,
} from "../constants/hotelsConstants";

export const getAllHotels = (hotels) => (dispatch) => {
  return dispatch({
    type: LIST_HOTELS,
    payload: hotels,
  });
};

export const setTotalPages = (data) => (dispatch) => {
  return dispatch({
    type: SET_HOTELS_TOTAL_PAGES,
    payload: data,
  });
};

export const setPageOrLimit = (field, data) => (dispatch) => {
  return dispatch({
    type: SET_HOTELS_PAGE_OR_LIMIT,
    payload: { field, data },
  });
};

export const getHotelsSize = (size) => (dispatch) => {
  return dispatch({
    type: GET_HOTELS_SIZE,
    payload: size,
  });
};

export const getAllHotelsPaginate = (hotels) => (dispatch) => {
  return dispatch({
    type: GET_HOTELS_PAGINATE,
    payload: hotels,
  });
};

export default {
  getAllHotels,
  setTotalPages,
  setPageOrLimit,
  getHotelsSize,
  getAllHotelsPaginate,
};
