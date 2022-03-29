// entry point of client side code base

import React from "react";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";
import axios from "axios";
import Routes from "./Routes";
import reducers from "../client/reducers";

// STYLED COMPONENTS
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
const axiosInstance = axios.create({
  baseURL: "/api",
});

const store = createStore(
  reducers,
  window.INITIAL_STATE,
  applyMiddleware(thunk.withExtraArgument(axiosInstance))
);

ReactDOM.hydrate(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div>{renderRoutes(Routes)}</div>
      </BrowserRouter>
    </ThemeProvider>
  </Provider>,
  document.querySelector("#root")
);
