import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import extraReducer from "./reducers/extraReducer";

const reducer = combineReducers({
  extraReducer,
});

const middleware = applyMiddleware(thunk);

export default createStore(reducer, middleware);
