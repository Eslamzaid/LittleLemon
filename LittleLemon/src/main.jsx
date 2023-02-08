import React from "react";
import ReactDOM from "react-dom/client";
import ErrorPage from "./Funct/error-page";
import Root from "./App";
import Layouts from "./Layouts/Layouts";
import About from "./RComponenets/About/About";
import Menu from "./RComponenets/Menu/Menu";
import Header from "./Layouts/Header/Header";
import Main from "./Layouts/Main/Main";
import Cart from "./Layouts/Main/Cart/Cart";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import SearchF from "./Layouts/Main/SearchF/SearchF";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/home',
        element: <Main />
      },
      {
        path: "/AboutUs",
        element: <About />,
      },
      {
        path: "/TheMenu",
        element: <Menu />,
      },
      {
        path: "/Order",
        element: <Cart/>
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
