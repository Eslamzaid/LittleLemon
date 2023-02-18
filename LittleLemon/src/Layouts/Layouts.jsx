import React, { useRef, useContext, createContext } from "react";
import Header from "./Header/Header";
import Main from "./Main/Main";
import "./Layouts.css";
import { CartProvider } from "react-use-cart";
import Footer from "./Footer/Footer";

export const theMainCon = createContext("Let's see");

function Layouts() {
  const OrderNow = useRef(null);
  const focusInput = () => {
    OrderNow.current.focus();
  };

  const OrderNow2 = useRef();
  const focusInput2 = () => {
    OrderNow2.current.focus();
  };

  const OrderNow3 = useRef();
  const focusInput3 = () => {
    OrderNow3.current.focus();
  };
  return (
    <theMainCon.Provider
      value={{
        one: OrderNow,
        two: focusInput,
        three: OrderNow2,
        four: focusInput2,
        five: OrderNow3,
        six: focusInput3,
      }}
    >
      <div className="Makethimcener">
        <CartProvider>
          <Header connect1M={focusInput} />
          <Main connect1={OrderNow} />
        </CartProvider>
        <Footer />
      </div>
    </theMainCon.Provider>
  );
}

export default Layouts;
