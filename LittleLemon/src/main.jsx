import React from "react";
import ReactDOM from "react-dom/client";
import ErrorPage from "./Funct/error-page";
import Root from "./App";
import About from "./RComponenets/About/About";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage />,
    children: [
      // {
      //   path: "/home",
      //   element: <Main />,
      // },
      {
        path: "/AboutUs",
        element: <About />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
