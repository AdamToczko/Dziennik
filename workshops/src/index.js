import { subscribe } from "./redux/store";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Root from "./Root";

subscribe(() => {
  console.log("Rendering the whole app!");
  ReactDOM.render(<Root />, document.getElementById("root"));
});

ReactDOM.render(<Root />, document.getElementById("root"));
