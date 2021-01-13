import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import exampleReducer from "./reducers/exampleReducer";
import formFlightRoutesReducer from "./reducers/formFlightRoutesReducer";
import rooms from "./reducers/rooms";
import airports from "./reducers/airports";

const reducer = combineReducers({
  formFlightRoutesReducer,
  exampleReducer,
  rooms,
  airports
});

const middleware = applyMiddleware(thunk);

export default createStore(reducer, middleware);
