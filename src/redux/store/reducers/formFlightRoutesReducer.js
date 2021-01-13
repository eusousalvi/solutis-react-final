import { ROUTES_UPDATE, ROUTES_RESET } from "../../constants/formFlightRoutes";

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
      city: "",
      airline: "",
      flightNumber: 0,
      date: "",
      time: "",
      checkout: "",
    },
    {
      id: 1,
      type: "Arrival",
      city: "",
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
    case ROUTES_UPDATE:
      return { ...state, [action.payload.key]: action.payload.value };
    case ROUTES_RESET:
    default:
      return INITIAL_STATE;
  }
}
