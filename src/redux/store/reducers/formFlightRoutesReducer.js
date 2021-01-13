import {
  ROUTES_UPDATE_GENERAL,
  ROUTES_UPDATE_NODE,
  ROUTES_RESET,
} from "../../constants/formFlightRoutes";

const INITIAL_STATE = {
  refundable: "refundable",
  flightType: "business",
  direction: "one-way",
  status: "enabled",
  totalHours: "",
  deposite: "",
  vatTax: "",

  route: [
    {
      id: 0,
      type: "Departure",
      city: undefined,
      airline: "",
      flightNumber: 0,
      date: "",
      time: "",
      checkout: "",
    },
    {
      id: 1,
      type: "Arrival",
      city: undefined,
      airline: "",
      flightNumber: 0,
      date: "",
      time: "",
      checkout: "",
    },
  ],

  adultsPrice: "",
  infantPrice: "",
  childPrice: "",

  description: "",
};

export default function reducer(state = INITIAL_STATE, action = null) {
  switch (action.type) {
    case ROUTES_UPDATE_NODE:
      const { id, data } = action.payload;
      return {
        ...state,
        route: state.route.map((node) =>
          node.id !== id ? node : { ...node, ...data }
        ),
      };
    case ROUTES_UPDATE_GENERAL:
      return { ...state, [action.payload.key]: action.payload.value };
    case ROUTES_RESET:
    default:
      return INITIAL_STATE;
  }
}
