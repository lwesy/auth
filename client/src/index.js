import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import rootReducer from "./reducers/";
import App from "./components/App";
import Welcome from "./components/Welcome";
import Signup from "./components/auth/Signup";

ReactDOM.render(
  <Provider store={createStore(rootReducer)}>
    <BrowserRouter>
      <App>
        <Route path="/signup" component={Signup} />
        <Route exact path="/" component={Welcome} />
      </App>
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root")
);
