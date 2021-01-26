import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import exampleReducer from "./reducers/exampleReducer";
import formFlightRoutesReducer from "./reducers/formFlightRoutesReducer";
import rooms from "./reducers/rooms";
import hotelsReducer from "./reducers/hotelsReducer";
import airports from "./reducers/airports";
import extraReducer from "./reducers/extraReducer";
import flightsRoutes from "./reducers/flightsRoutes";

const reducer = combineReducers({
  formFlightRoutesReducer,
  exampleReducer,
  rooms,
  hotelsReducer,
  airports,
  extraReducer,
  flightsRoutes,
});

const middleware = applyMiddleware(thunk);

export default createStore(reducer, middleware);
