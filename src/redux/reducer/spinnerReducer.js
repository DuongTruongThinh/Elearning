const initialState = {
  isLoading: false,
};

// Action types
const SET_LOADING_ON = "SET_LOADING_ON";
const SET_LOADING_OFF = "SET_LOADING_OFF";

// Action creators
export const setLoadingOn = () => {
  return {
    type: SET_LOADING_ON,
  };
};

export const setLoadingOff = () => {
  return {
    type: SET_LOADING_OFF,
  };
};

// Reducer
const spinnerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING_ON:
      return {
        ...state,
        isLoading: true,
      };
    case SET_LOADING_OFF:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default spinnerReducer;
