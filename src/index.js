import React from "react";
import {createRoot} from "react-dom/client";

import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

import App from "./App";
import "./index.css";
import About from "./Pages/about/About";
import Checkout from "./Pages/checkout/Checkout";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />
    },
    {
        path: "about",
        element: <About />
    },
    {
      path: "bestellung",
      element: <Checkout />
    }
  ]);
  
const Index = () => {
  return(
    <React.StrictMode>
      <RouterProvider router={router}/>
    </React.StrictMode>
  )
}

const root = createRoot(document.getElementById("root"));

root.render(<Index />);