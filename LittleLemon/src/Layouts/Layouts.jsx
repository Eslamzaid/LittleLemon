import React, { useRef } from "react";
import Header from "./Header/Header";
import Main from "./Main/Main";
import "./Layouts.css";
import { CartProvider } from "react-use-cart";
import Footer from "./Footer/Footer";

function Layouts() {
  const OrderNow = useRef(null);
  const focusInput = () => {
    OrderNow.current.focus();
  };
  return (
    <div className="Makethimcener">
      <CartProvider>
        <Header connect1M={focusInput} />
        <Main connect1={OrderNow} />
      </CartProvider>
      <Footer />
    </div>
  );
}

export default Layouts;
