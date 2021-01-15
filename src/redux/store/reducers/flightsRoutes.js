import { SELECT_ITEM, DESELECT_ITEM } from "../../constants/flightsRoutes";

const INITIAL_STATE = {
  selectedItems: [],
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
          selectedItems: state.selectedItems.filter((id) => id !== action.payload),
      };

    default:
      return state;
  }
}
