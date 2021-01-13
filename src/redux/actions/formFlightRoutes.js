import { ROUTES_UPDATE, ROUTES_RESET } from "../constants/formFlightRoutes";

export const update = (key, value) => (dispatch) => {
  return dispatch({
    type: ROUTES_UPDATE,
    payload: { key, value },
  });
};

export const reset = () => (dispatch) => {
  return dispatch({
    type: ROUTES_RESET,
    payload: undefined,
  });
};
