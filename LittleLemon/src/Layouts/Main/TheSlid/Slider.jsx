import React from "react";
import RightHalf from "./../../../assets/Main/righthalf.png";
import LeftHalf from "./../../../assets/Main/lefthalg.png";
import PauseOnHover from "./TheContent";
import "./Slider.css";

const Slider = () => {
  return (
    <section className="TheFathher">
      <div className="FEslamSection">
        <div className="LRImages"></div>
        <h2 id="OurPartners">Our competitors</h2>
        <div className="LRImages"></div>
      </div>
      <div>
        <PauseOnHover />
      </div>
    </section>
  );
};

export default Slider;