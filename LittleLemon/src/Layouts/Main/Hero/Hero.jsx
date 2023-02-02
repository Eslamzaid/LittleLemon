import React from "react";
import TheBurger from "./../../../assets/Main/TheBurger.png";
import "./Hero.css";

function Hero() {
  return (
    <article className="TheHero">
      <section className="TheFirstBoy">
        <div className="TheFirstGrand">
          <h2>
            We are a family owned<br/> Mediterranean restaurant,<br/> focused on
            traditional<br/> recipes served with a modern twist.
          </h2>
          <button>Order Now</button>
        </div>
        <div className="TheSecondGrand">
          <img id="TheBurgerImg" src={TheBurger} alt="Delicious Burger" />
        </div>
      </section>
    </article>
  );
}

export default Hero;
