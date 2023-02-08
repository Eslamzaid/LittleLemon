import React from "react";
import Header from "./Header/Header";
import Main from "./Main/Main";
import "./Layouts.css";
import { CartProvider } from "react-use-cart";

function Layouts() {
  return (
    <>
    <CartProvider>
      <Header />
    </CartProvider>
    </>
  );
}

export default Layouts;
