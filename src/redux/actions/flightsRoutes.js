import {
  SELECT_ITEM,
  DESELECT_ITEM,
  ROUTES_SEARCH,
  CLEAR_ROUTES_SEARCH,
  CLEAR_SELECT_ITEM,
} from "../constants/flightsRoutes";

export const selectItem = (id) => {
  return {
    type: SELECT_ITEM,
    payload: id,
  };
};

export const deselectItem = (id) => {
  return {
    type: DESELECT_ITEM,
    payload: id,
  };
};

export const clearSelectItem = () => {
    return {
      type: CLEAR_SELECT_ITEM,
    };
  };

export const routesFilter = (search) => {
  return {
    type: ROUTES_SEARCH,
    payload: search,
  };
};

export const clearRoutesFilter = () => {
  return {
    type: CLEAR_ROUTES_SEARCH,
  };
};
