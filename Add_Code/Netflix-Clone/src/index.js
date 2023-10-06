import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //imported BrowserRouter to allow for components to be navigated as multiple pages with different urls
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
