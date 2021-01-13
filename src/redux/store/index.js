import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import exampleReducer from "./reducers/exampleReducer";
import rooms from "./reducers/rooms";

const reducer = combineReducers({ exampleReducer, rooms });

const middleware = applyMiddleware(thunk);

export default createStore(reducer, middleware);
