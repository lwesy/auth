import axios from "axios";

import * as types from "./types";

export const signup = formProps => async dispatch => {
  const response = await axios.post("http://localhost:3001/signup", formProps);

  dispatch({ type: types.AUTH_USER, payload: response.data.token });
};
