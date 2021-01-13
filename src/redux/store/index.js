import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import exampleReducer from "./reducers/exampleReducer";
import formFlightRoutesReducer from "./reducers/formFlightRoutesReducer";
import rooms from "./reducers/rooms";
<<<<<<< HEAD
import hotelsReducer from "./reducers/hotelsReducer";
=======
import airports from "./reducers/airports";
>>>>>>> d0b369593fa5ab591b81ecf71b86ba2ac270a4ab

const reducer = combineReducers({
  formFlightRoutesReducer,
  exampleReducer,
  rooms,
<<<<<<< HEAD
  hotelsReducer,
=======
  airports
>>>>>>> d0b369593fa5ab591b81ecf71b86ba2ac270a4ab
});

const middleware = applyMiddleware(thunk);

export default createStore(reducer, middleware);
