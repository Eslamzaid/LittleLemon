import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./App";
import About from "./RComponenets/About/About";
import "./index.css";
import ErrorPage from "./Funct/error-page";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import Menu from "./RComponenets/Menu/Menu";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/AboutUs",
        element: <About />,
      },
      {
        path: "/TheMenu",
        element: <Menu/>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
