import axios from "axios";

import * as types from "./types";

export const signup = formProps => dispatch => {
  axios.post("http://localhost:3001/signup", formProps);
};
