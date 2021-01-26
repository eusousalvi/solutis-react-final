import {
  SELECT_ITEM,
  DESELECT_ITEM,
  ROUTES_SEARCH,
  CLEAR_ROUTES_SEARCH,
  CLEAR_SELECT_ITEM,
} from "../../constants/flightsRoutes";

const INITIAL_STATE = {
  selectedItems: [],
  search: {},
};

export default function reducer(state = INITIAL_STATE, action = null) {
  switch (action.type) {
    case SELECT_ITEM:
      return {
        ...state,
        selectedItems: [...state.selectedItems, action.payload],
      };
    case DESELECT_ITEM:
      return {
        ...state,
        selectedItems: state.selectedItems.filter(
          (id) => id !== action.payload
        ),
      };
    case CLEAR_SELECT_ITEM:
      return {
        ...state,
        selectedItems: [],
      };
    case ROUTES_SEARCH:
      return {
        ...state,
        search: {
          ...state.search,
          filter: action.payload.filter,
          word: action.payload.word,
        },
      };
    case CLEAR_ROUTES_SEARCH:
      return {
        ...state,
        search: {},
      };
    default:
      return state;
  }
}
