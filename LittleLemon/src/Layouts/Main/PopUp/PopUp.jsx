import React from "react";
import Cart from "./../Cart/Cart";
import THeX from './../../../assets/Icons/close (1).png'
import "./PopUp.css";

const PopUp = (props) => {
  return props.trigger ? (
    <section className="TheFatherOfAll">
      <aside className="SecondFather">
        <button
          className="Close-bth"
          onClick={() => props.manger(() => !props.trigger)}
        >
          <img src={THeX} alt="Close the shopping cart" width='20px'id="CloseBTN"/>
        </button>
        <Cart />
      </aside>
    </section>
  ) : (
    ""
  );
};

export default PopUp;
