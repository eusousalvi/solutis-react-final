import {
  GET_ALL_ROOMS,
  GET_ROOMS_PAGINATE,
  GET_ROOMS_SIZE,
  FILTER_ROOMS,
  CHANGE_ROOMS_FILTER_ACTIVE,
  DELETE_ROOM,
  SET_ROOMS_PAGE_OR_LIMIT,
  SET_ROOMS_TOTAL_PAGES,
  ADD_ROOMS_CHECKBOX,
  REMOVE_ROOMS_CHECKBOX,
} from "../../constants/rooms";

const INITIAL_STATE = {
  rooms: [],
  roomsSelected: [],
  size: 0,
  filter: {
    field: "",
    active: false,
    order: true,
  },
  isClicked: false,
  deleted: false,
  page: 1,
  limit: 25,
  totalPages: [],
};

export default function reducer(state = INITIAL_STATE, action = null) {
  switch (action.type) {
    case GET_ALL_ROOMS:
      return { ...state, rooms: action.payload };

    case GET_ROOMS_PAGINATE:
      return { ...state, rooms: action.payload };

    case CHANGE_ROOMS_FILTER_ACTIVE:
      let newState = {};

      if (state.isClicked) {
        newState = {
          ...state,
          filter: {
            ...state.filter,
            field: action.payload,
            order: !state.filter.order,
          },
        };
      } else {
        newState = {
          ...state,
          isClicked: true,
          filter: {
            ...state.filter,
            field: action.payload,
            active: true,
          },
        };
      }
      return newState;

    case FILTER_ROOMS:
      let rooms = [];
      switch (action.payload) {
        case "Room Type":
          rooms = state.rooms.sort((room1, room2) => {
            if (state.filter.order) {
              return room1.roomType - room2.roomType;
            } else {
              return room2.roomType - room1.roomType;
            }
          });

          break;

        case "Qty":
          rooms = state.rooms.sort((room1, room2) => {
            if (state.filter.order) {
              return room1.qty - room2.qty;
            } else {
              return room2.qty - room1.qty;
            }
          });

          break;

        case "Price":
          rooms = state.rooms.sort((room1, room2) => {
            if (state.filter.order) {
              return room1.price - room2.price;
            } else {
              return room2.price - room1.price;
            }
          });

          break;

        case "Availability":
          rooms = state.rooms.sort((room1, room2) => {
            if (state.filter.order) {
              return room1.availability.length - room2.availability.length;
            } else {
              return room2.availability.length - room1.availability.length;
            }
          });

          break;
        case "Gallery":
          rooms = state.rooms.sort((room1, room2) => {
            if (state.filter.order) {
              return room1.uploads - room2.uploads;
            } else {
              return room2.uploads - room1.uploads;
            }
          });

          break;

        case "Hotel":
          rooms = state.rooms.sort((room1, room2) => {
            if (state.filter.order) {
              return room1.hotel - room2.hotel;
            } else {
              return room2.hotel - room1.hotel;
            }
          });

          break;

        default:
          rooms = [];
      }

      return { ...state, rooms };

    case DELETE_ROOM:
      return { ...state, deleted: !state.deleted };

    case SET_ROOMS_PAGE_OR_LIMIT:
      return { ...state, [action.payload.field]: action.payload.data };

    case SET_ROOMS_TOTAL_PAGES:
      const pages = Math.ceil(action.payload / state.limit);
      const totalPages = new Array(pages)
        .fill(pages)
        .map((data, index) => index + 1);

      return { ...state, totalPages };

    case GET_ROOMS_SIZE:
      return { ...state, size: action.payload };

    case ADD_ROOMS_CHECKBOX:
      const data = action.payload.toString();
      const roomsSelected = [...state.roomsSelected];
      roomsSelected.push(data);
      console.log("teste", roomsSelected);
      return {
        ...state,
        roomsSelected,
      };

    case REMOVE_ROOMS_CHECKBOX:
      let newData = state.roomsSelected.splice("");
      const dataID = action.payload.toString();

      console.log(state.roomsSelected.includes(dataID));

      newData = state.roomsSelected.filter((value) => {
        return value !== dataID;
      });

      return { ...state, roomsSelected: newData };

    default:
      return state;
  }
}
