import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { BrowserRouter } from 'react-router-dom'
// import '../node_modules/bootstrap/dist/css/bootstrap-reboot.min.css'

ReactDOM.render(
    <BrowserRouter>
<App />
</BrowserRouter>, 
document.getElementById("root"));
