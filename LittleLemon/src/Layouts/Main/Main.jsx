import React, { useRef } from "react";
import Hero from "./Hero/Hero";
import SearchF from "./SearchF/SearchF";
import "./Main.css";
import BookingPage from "./TheTable/BookingPage";
import Slider from "./TheSlid/Slider";

function Main() {
  const OrderNow = useRef(null);
  const focusInput = () => {
    OrderNow.current.focus();
  };
  return (
    <main>
      <Hero connectMenu={focusInput} />
      <SearchF connect={OrderNow} />
      <BookingPage connectMenu={focusInput}/>
      <Slider/>
    </main>
  );
}

export default Main;
