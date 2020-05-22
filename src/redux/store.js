import { combineReducers, createStore, applyMiddleware } from "redux";

import thunk from "redux-thunk";

import newsReducer from "./reducers/news";

const rootReducer = combineReducers({ newsReducer });

const store = createStore(rootReducer, applyMiddleware(thunk));

export { store };