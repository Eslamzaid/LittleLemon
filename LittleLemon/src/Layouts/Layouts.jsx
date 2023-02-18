import React from "react";
import Header from "./Header/Header";
import Main from "./Main/Main";
import "./Layouts.css";
import { CartProvider } from "react-use-cart";
import Footer from "./Footer/Footer";

function Layouts() {
  return (
    <div className="Makethimcener">
    <CartProvider>
      <Header />
    </CartProvider>
      <Footer/>
    </div>
  );
}

export default Layouts;
