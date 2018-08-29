import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/navbar";
import Calculation from "./components/calculation";

ReactDOM.render(<Navbar />, document.getElementById("navbar"));
ReactDOM.render(<Calculation />, document.getElementById("calculation"));
ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
