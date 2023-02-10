import React, { useRef } from "react";
import Hero from "./Hero/Hero";
import SearchF from "./SearchF/SearchF";
import Cart from "./Cart/Cart";
import { CartProvider ,useCart} from "react-use-cart";
import "./Main.css";

function Main() {
  const OrderNow = useRef(null)
  const focusInput = () => {
    OrderNow.current.focus()
  }
  return (
    <main>
      <Hero connectMenu={focusInput}/>
        <SearchF connect={OrderNow}/>
    </main>
  );
}

export default Main;
