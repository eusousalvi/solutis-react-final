import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import exampleReducer from './reducers/exampleReducer';

const reducer = combineReducers({ exampleReducer });

const middleware = applyMiddleware(thunk);

export default createStore(reducer, middleware);
