import { LIST_HOTELS } from "../../constants/hotelsConstants";

const INITIAL_STATE = {
  hotels: [],
};

export default function reducer(state = INITIAL_STATE, action = null) {
  switch (action.type) {
    case LIST_HOTELS:
      return { ...state, hotels: action.payload };
    default:
      return state;
  }
}
