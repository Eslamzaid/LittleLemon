import React, { useRef } from "react";
import Hero from "./Hero/Hero";
import SearchF from "./SearchF/SearchF";
import "./Main.css";
import OrderTable from "./TheTable/Table";

function Main() {
  const OrderNow = useRef(null);
  const focusInput = () => {
    OrderNow.current.focus();
  };
  return (
    <main>
      <Hero connectMenu={focusInput} />
      <SearchF connect={OrderNow} />
      <OrderTable/>
    </main>
  );
}

export default Main;
