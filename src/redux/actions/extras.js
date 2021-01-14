import {
  GET_ALL_EXTRAS,
  GET_EXTRAS_PAGINATE,
  SET_EXTRAS_PAGE_OR_LIMIT,
  GET_EXTRAS_SIZE,
  SET_EXTRAS_TOTAL_PAGES,
} from "../constants/extras";

const getAllExtras = extras => dispatch => {
  return dispatch({
    type: GET_ALL_EXTRAS,
    payload: extras,
  });
};

const getAllExtrasPaginate = extras => dispatch => {
  return dispatch({
    type: GET_EXTRAS_PAGINATE,
    payload: extras,
  });
};

export const setPageOrLimit = (field, data) => dispatch => {
  return dispatch({
    type: SET_EXTRAS_PAGE_OR_LIMIT,
    payload: { field, data },
  });
};

export const getExtrasSize = size => dispatch => {
  return dispatch({
    type: GET_EXTRAS_SIZE,
    payload: size,
  });
};

export const setTotalPages = data => dispatch => {
  return dispatch({
    type: SET_EXTRAS_TOTAL_PAGES,
    payload: data,
  });
};

const actions = {
  getAllExtras,
  getAllExtrasPaginate,
  setPageOrLimit,
  getExtrasSize,
  setTotalPages,
};

export default actions;
