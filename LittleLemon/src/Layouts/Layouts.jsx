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
  return (
    <theMainCon.Provider
      value={{
        one: OrderNow,
        two: focusInput,
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
