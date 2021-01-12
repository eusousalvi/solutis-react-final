import {
  GET_ALL_ROOMS,
  GET_ROOMS_PAGINATE,
  FILTER_ROOMS,
  CHANGE_ROOMS_FILTER_ACTIVE,
} from "../../constants/rooms";

const INITIAL_STATE = {
  rooms: [],
  filter: {
    field: "",
    active: false,
    order: true,
  },
  isClicked: false,
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

        default:
          rooms = [];
      }

      return { ...state, rooms };

    default:
      return state;
  }
}
