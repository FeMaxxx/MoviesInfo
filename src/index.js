import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import "../src/fonds/Tilt_Prism/TiltPrism-Regular.ttf";
import { Provider } from "react-redux";
import { store } from "redux/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/goit-react-hw-05-movies">
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
