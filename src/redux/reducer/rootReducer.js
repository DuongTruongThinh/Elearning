import { combineReducers } from "redux";
import userReducer from "./user";
import courseReducer from "./courseReducer";
export let rootReducer = combineReducers({ userReducer, courseReducer });
