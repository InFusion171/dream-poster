import React from "react";
import  ReactDOM  from "react-dom";

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

ReactDOM.render(<RouterProvider router={router}/>, document.getElementById("root"));