import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./Users";

const rootReducer = combineReducers({ userReducer });
const store = configureStore({ reducer: rootReducer });

export default store;
