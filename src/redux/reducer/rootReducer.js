import { combineReducers } from "redux";
import userReducer from "./user";
import courseReducer from "./courseReducer";
import spinnerReducer from "./spinnerReducer";
export let rootReducer = combineReducers({
  userReducer,
  courseReducer,
  spinnerReducer,
});
