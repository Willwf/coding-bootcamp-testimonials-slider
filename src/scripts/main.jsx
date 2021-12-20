import React from "react";
import ReactDOM from "react-dom";
import "../styles/index.scss";
import App from "./components/App";
import { Footer } from "./components/Footer";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);
