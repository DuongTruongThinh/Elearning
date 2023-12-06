import { userLocalStorage } from "../../services/localServices";
import { SET_INFO } from "../constant/user";

const initialState = {
  info: userLocalStorage.get(),
};
let userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_INFO:
      state.info = payload;
      return { ...state };

    default:
      return state;
  }
};
export default userReducer;
