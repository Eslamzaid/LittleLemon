import React, {  useRef } from "react";
import Hero from "./Hero/Hero";
import SearchF from "./SearchF/SearchF";
import "./Main.css";
import BookingPage from "./TheTable/BookingPage";
import Slider from "./TheSlid/Slider";


function Main() {
  return (
    <main>
      {/* <Hero /> */}
      {/* <SearchF /> */}
      <BookingPage  />
      {/* <Slider /> */}
    </main>
  );
}

export default Main;
