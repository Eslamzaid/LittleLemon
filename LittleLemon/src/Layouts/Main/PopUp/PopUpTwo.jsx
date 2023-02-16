import React from "react";
import THeX from "./../../../assets/Icons/close (1).png";
import "./PopUp.css";

const PopUpTwo = (props) => {
  return props.trigger ? (
    <article className="TheFatherOfAll">
      <section className="StepFather">
        <aside className="SecondFather">
          <button
            className="Close-bth"
            onClick={() => props.manger(() => !props.trigger)}
          >
            <img
              src={THeX}
              alt="Close the shopping cart"
              width="20px"
              id="CloseBTN"
            />
          </button>
        </aside>
      </section>
    </article>
  ) : (
    ""
  );
};

export default PopUpTwo;
