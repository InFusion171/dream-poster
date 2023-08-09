import React from "react";
import {createRoot} from "react-dom/client";

import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

import App from "./App";
import "./index.css";
import About from "./Pages/about/About";

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
  
const Index = () => {
  return(
    <React.StrictMode>
      <RouterProvider router={router}/>
    </React.StrictMode>
  )
}

const root = createRoot(document.getElementById("root"));

root.render(<Index />);