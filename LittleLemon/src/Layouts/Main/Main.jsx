import React from "react";
import Hero from "./Hero/Hero";
import SearchF from "./SearchF/SearchF";
import Cart from "./Cart/Cart";
import { CartProvider ,useCart} from "react-use-cart";
import "./Main.css";

function Main() {
  return (
    <main>
      <Hero />
        <SearchF />
    </main>
  );
}

export default Main;
