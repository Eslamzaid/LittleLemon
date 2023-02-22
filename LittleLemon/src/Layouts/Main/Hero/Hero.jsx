import React, { useContext } from "react";
import TheBurger from "./../../../assets/Main/TheBurger.png";
import Booking from "./../../../assets/Icons/icons8-mobile-order-64.png";
import FArrow from "./../../../assets/Icons/Arrow 1.png";
import SArrow from "./../../../assets/Icons/Arrow 2.png";
import BigArrow from "./../../../assets/Icons/BigArrow.png";
import Prepare from "./../../../assets/Icons/icons8-weber-50.png";
import Shipping from "./../../../assets/Icons/icons8-free-shipping-50.png";
import Home from "./../../../assets/Icons/icons8-home-page-50.png";
import "./Hero.css";
import { theMainCon } from "../../Layouts";

function Hero() {
  const LetsSee = useContext(theMainCon);
  return (
    <article className="TheHero">
      <section className="TheFirstBoy">
        <div className="TheFirstGrand">
          <h2>
            We are a family owned
            <br /> Mediterranean restaurant,
            <br /> focused on traditional
            <br /> recipes served with a modern twist.
          </h2>
          <button id="TheBuutonnna" onClick={LetsSee.UiBu}>
            Order Now
          </button>
        </div>
        <button className="invisible" ref={LetsSee.seven}></button>
        <div className="TheSecondGrandP1">
          <img id="TheBurgerImg" src={TheBurger} alt="Delicious Burger" />
        </div>
      </section>
      <section className="TheSecondBoy">
        <div className="TheSecondGrand">
          <div className="TheParts">
            <img
              className="TheArrowTop"
              src={Booking}
              alt="Book from the phone"
            />
            <p className="TThTe">Booking from Mobile</p>
          </div>
          <div className="hi">
            <img className="HEHE" src={FArrow} alt="Simple arrow" />
          </div>
          <div className="TheParts">
            <img
              className="TheArrowTop"
              src={Prepare}
              alt="A grilling mashine"
            />
            <p className="TThT">Preparing Your order</p>
          </div>
          <div className="hi">
            <img className="HEHE" src={SArrow} alt="A simple arrow" />
          </div>
          <div className="TheParts">
            <img className="TheArrowTop" src={Shipping} alt="Shipping car" />
            <p className="TThT">Shipping</p>
          </div>
          <div className="hi">
            <img className="HEHE" src={BigArrow} alt="Big arrow" />
          </div>
          <div className="TheParts">
            <img className="TheArrowTop" src={Home} alt="A simple home" />
            <p className="TThT">Happy meal</p>
          </div>
        </div>
      </section>
    </article>
  );
}

export default Hero;
