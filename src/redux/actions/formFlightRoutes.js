import {
  ROUTES_UPDATE_GENERAL,
  ROUTES_UPDATE_NODE,
  ROUTES_OVERRIDE,
  ROUTES_RESET,
} from "../constants/formFlightRoutes";

export const update = (key, value) => (dispatch) => {
  return dispatch({
    type: ROUTES_UPDATE_GENERAL,
    payload: { key, value },
  });
};

export const updateNode = (id, data) => (dispatch) => {
  return dispatch({
    type: ROUTES_UPDATE_NODE,
    payload: { id, data },
  });
};

export const override = (data) => (dispatch) => {
  return dispatch({
    type: ROUTES_OVERRIDE,
    payload: { data },
  });
};

export const reset = () => (dispatch) => {
  return dispatch({
    type: ROUTES_RESET,
    payload: undefined,
  });
};
