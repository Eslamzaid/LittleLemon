import React from "react";
import Hero from "./Hero/Hero";
import SearchF from "./SearchF/SearchF";
import { CartProvider } from "react-use-cart";
import Cart from "./Cart/Cart";
import "./Main.css";

function Main() {
  return (
    <main>
      <Hero />
      <CartProvider>
        <SearchF />
        <Cart />
      </CartProvider>
    </main>
  );
}

export default Main;
