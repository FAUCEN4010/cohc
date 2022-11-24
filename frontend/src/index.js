import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css'

axios.defaults.baseURL = "http://localhost:3009";
axios.defaults.withCredentials = true;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
