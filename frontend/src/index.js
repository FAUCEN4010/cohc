import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css'
import { disableReactDevTools } from '@fvilers/disable-react-devtools';

if (process.env.NODE_ENV === 'production') {
  disableReactDevTools();
}

// development only
//axios.defaults.baseURL = "http://localhost:3009";

// production only
axios.defaults.baseURL = "https://cohc-server:10000";
//axios.defaults.baseURL = "https://cohc-server.onrender.com";
//axios.defaults.baseURL = "https://cohc.herokuapp.com";

// heroku only


// do not use for production or development
axios.defaults.withCredentials = true;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

