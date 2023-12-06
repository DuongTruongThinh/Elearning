import { UPDATE_COURSE } from "../constant/course";

const initialState = {
  infoUpdate: {},
};

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_COURSE:
      return { ...state, infoUpdate: action.payload };

    default:
      return state;
  }
};

export default courseReducer;
