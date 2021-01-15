import {
  GET_ALL_EXTRAS,
  GET_EXTRAS_PAGINATE,
  SET_EXTRAS_PAGE_OR_LIMIT,
  GET_EXTRAS_SIZE,
  SET_EXTRAS_TOTAL_PAGES,
  SET_IS_DELETING,
  SET_SELECTEDS,
  REMOVE_SELECTED,
  SET_IS_ALL_SELECTED,
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

export const setIsDeleting = () => dispatch => {
  return dispatch({
    type: SET_IS_DELETING,
    payload: null,
  });
};

export const setSelecteds = selecteds => dispatch => {
  return dispatch({
    type: SET_SELECTEDS,
    payload: selecteds,
  });
};

export const removeSelected = id => dispatch => {
  return dispatch({
    type: REMOVE_SELECTED,
    payload: id,
  });
};

export const setIsAllSelected = () => dispatch => {
  return dispatch({
    type: SET_IS_ALL_SELECTED,
    payload: null,
  });
};

const actions = {
  getAllExtras,
  getAllExtrasPaginate,
  setPageOrLimit,
  getExtrasSize,
  setTotalPages,
  setIsAllSelected,
  removeSelected,
  setSelecteds,
  setIsDeleting,
};

export default actions;
