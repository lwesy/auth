import axios from "axios";

import * as types from "./types";

export const signup = (formProps, callback) => async dispatch => {
  try {
    const response = await axios.post(
      "http://localhost:3001/signup",
      formProps
    );

    dispatch({ type: types.AUTH_USER, payload: response.data.token });
    localStorage.setItem("token", response.data.token);
    callback();
  } catch (error) {
    dispatch({ type: types.AUTH_ERROR, payload: "Email already in use." });
  }
};

export const signout = () => {
  localStorage.removeItem("token");

  return { type: types.AUTH_USER, payload: "" };
};
