import {
  LIST_HOTELS,
  GET_HOTELS_PAGINATE,
  SET_HOTELS_PAGE_OR_LIMIT,
  SET_HOTELS_TOTAL_PAGES,
  GET_HOTELS_SIZE,
} from "../../constants/hotelsConstants";

const INITIAL_STATE = {
  hotels: [],
  size: 0,
  page: 1,
  limit: 25,
  totalPages: [],
};

export default function reducer(state = INITIAL_STATE, action = null) {
  switch (action.type) {
    case LIST_HOTELS:
      return { ...state, hotels: action.payload };
    case GET_HOTELS_PAGINATE:
      return { ...state, hotels: action.payload };

    case SET_HOTELS_PAGE_OR_LIMIT:
      return { ...state, [action.payload.field]: action.payload.data };

    case SET_HOTELS_TOTAL_PAGES:
      const pages = Math.ceil(action.payload / state.limit);
      const totalPages = new Array(pages)
        .fill(pages)
        .map((data, index) => index + 1);

      return { ...state, totalPages };

    case GET_HOTELS_SIZE:
      return { ...state, size: action.payload };
    default:
      return state;
  }
}
