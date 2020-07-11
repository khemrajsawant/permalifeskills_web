import seedrandom from "seedrandom";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { Routes, store } from "./client/src/routes";
import { signIn } from "./client/src/actions";

import "jquery";

import "./client/styles/html5reset-1.6.1.css";

import "font-awesome/css/font-awesome.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

// import 'materialize-css/dist/css/materialize.css';
import "./client/styles/collapsible.css";
import "materialize-css/dist/js/materialize";

import "./client/fonts/Roboto.css";
import "./client/fonts/material-icons.css";

import "./client/styles/social.css";
import "./client/styles/style.css";

//import injectTapEventPlugin from "react-tap-event-plugin";
//injectTapEventPlugin();

seedrandom();
////Math.seedrandom();

const token = localStorage.getItem("token");
if (token) {
  store.dispatch(signIn());
}

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById("root")
);
