import {
  configureStore,
  combineReducers,
  applyMiddleware,
} from "@reduxjs/toolkit";
import userReducer from "./Users";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({ userReducer });
const store = configureStore(
  { reducer: rootReducer },
  composeWithDevTools(applyMiddleware())
);

export default store;
