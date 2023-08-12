import React from "react";
import {createRoot} from "react-dom/client";

import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

import App from "./App";
import "./index.css";
import About from "./pages/about/About";
import Checkout from "./pages/checkout/Checkout";

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

const rootElement = document.getElementById("root");

if (!rootElement) throw new Error('Failed to find the root element');

const root = createRoot(rootElement);

root.render(<Index />);