import React from "react";
import ReactDOM from "react-dom";
import { Auth0Provider } from "@auth0/auth0-react";

import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

import App from "./App";
import "./index.css";
import About from "./Pages/About";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />
    },
    {
        path: "about",
        element: <About />
    },
  ]);

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

console.log(domain);

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
      
    >
      <RouterProvider router={router}/>
    </Auth0Provider>
  </React.StrictMode>, 
  document.getElementById("root"));