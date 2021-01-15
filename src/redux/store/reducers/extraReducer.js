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
} from "../../constants/extras";

const INITIAL_STATE = {
  extras: [],
  totalPages: [],
  selecteds: [],
  isDeleting: false,
  isAllSelected: false,
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

    case SET_IS_DELETING:
      return { ...state, isDeleting: !state.isDeleting };

    case SET_SELECTEDS:
      return { ...state, selecteds: [...state.selecteds, ...action.payload] };

    case REMOVE_SELECTED:
      const newSelecteds = state.selecteds.filter(
        item => item !== action.payload
      );
      console.log(newSelecteds);
      return { ...state, selecteds: newSelecteds };

    case SET_IS_ALL_SELECTED:
      const selecteds = !state.isAllSelected
        ? state.extras.map(item => item.id)
        : [];
      return {
        ...state,
        isAllSelected: !state.isAllSelected,
        selecteds: selecteds,
      };

    default:
      return state;
  }
}
