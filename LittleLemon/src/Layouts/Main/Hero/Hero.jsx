import React from "react";
import TheBurger from "./../../../assets/Main/TheBurger.png";
import Booking from "./../../../assets/Icons/icons8-mobile-order-64.png";
import FArrow from "./../../../assets/Icons/Arrow 1.png";
import SArrow from "./../../../assets/Icons/Arrow 2.png";
import BigArrow from "./../../../assets/Icons/BigArrow.png";
import Prepare from "./../../../assets/Icons/icons8-weber-50.png";
import Shipping from "./../../../assets/Icons/icons8-free-shipping-50.png";
import Home from "./../../../assets/Icons/icons8-home-page-50.png";
import "./Hero.css";

function Hero() {
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
          <p>Oh yeahh...</p>
          <button>Order Now</button>
        </div>
        <div className="TheSecondGrandP1">
          <img id="TheBurgerImg" src={TheBurger} alt="Delicious Burger" />
        </div>
      </section>
      <section className="TheSecondBoy">
        <div className="TheSecondGrand">
          <div className="TheParts">
            <img src={Booking} alt="Book from the phone" />
            <p>Booking from Mobile</p>
          </div>
          <div>
            <img src={FArrow} alt="Simple arrow" />
          </div>
          <div className="TheParts">
            <img src={Prepare} alt="A grilling mashine" />
            <p>Preparing Your order</p>
          </div>
          <div>
            <img src={SArrow} alt="A simple arrow" />
          </div>
          <div className="TheParts">
            <img src={Shipping} alt="Shipping car" />
            <p>Shipping</p>
          </div>
          <div>
            <img src={BigArrow} alt="Big arrow" />
          </div>
          <div className="TheParts">
          <img src={Home} alt="A simple home"/>
          <p>Happy meal</p>
          </div>
        </div>
      </section>
    </article>
  );
}

export default Hero;
