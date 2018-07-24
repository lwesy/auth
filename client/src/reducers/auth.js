import * as types from "../actions/types";

const initialState = {
  authenticated: "",
  errorMessage: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.AUTH_USER:
      return { ...state, authenticated: action.payload };
    default:
      return state;
  }
};
