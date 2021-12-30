import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Container from "@mui/material/Container";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Store from "./redux/store/store";
import { PersistGate } from "redux-persist/integration/react";

const { persistor, store } = Store;


ReactDOM.render(
<Provider store={store}>
    <PersistGate persistor={persistor}>
      <BrowserRouter>
      <Container maxWidth="L">
        <App />
      </Container>
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
