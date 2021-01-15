import {
  GET_ALL_EXTRAS,
  GET_EXTRAS_PAGINATE,
  SET_EXTRAS_PAGE_OR_LIMIT,
  GET_EXTRAS_SIZE,
  SET_EXTRAS_TOTAL_PAGES,
} from "../../constants/extras";

const INITIAL_STATE = {
  extras: [],
  totalPages: [],
  size: 0,
  page: 1,
  limit: 25,
};

export default function reducer(state = INITIAL_STATE, action = null) {
  switch (action.type) {
    case GET_ALL_EXTRAS:
      return { ...state, extras: action.payload };

    case GET_EXTRAS_PAGINATE:
      return { ...state, extras: action.payload };

    case SET_EXTRAS_PAGE_OR_LIMIT:
      return { ...state, [action.payload.field]: action.payload.data };

    case SET_EXTRAS_TOTAL_PAGES:
      const pages = Math.ceil(action.payload / state.limit);
      const totalPages = new Array(pages)
        .fill(pages)
        .map((data, index) => index + 1);
      return { ...state, totalPages };

    case GET_EXTRAS_SIZE:
      return { ...state, size: action.payload };

    default:
      return state;
  }
}
