import React, { useState } from "react";
import ReactHover from "react-hover";
import MenuD from "./../Sources";
import ThePotatoes from "./../../../../assets/Main/ThePotates.png";
import ThePizza from "./../../../../assets/Main/thePizza.png";
import BlackChare from "./../../../../assets/Main/BlackChare.png";
import WhiteChare from "./../../../../assets/Main/WhiteChare (1).png";
import WeirdChare from "./../../../../assets/Main/WeirdChare.png";
import BlackArrow from "./../../../../assets/Icons/BlackArrow.png";
import Special from "./../../../../assets/Icons/Untitled design (11) 1.png";
import WhiteArrow from "./../../../../assets/Icons/WhiteArrow.png";
import Info from "./../../../../assets/Icons/Info.png";
import "./Table.css";

function BookingForm() {
  const [VVIP, setVVIP] = useState(false);
  const [VIP, setVIP] = useState(false);
  const [Pre, setPre] = useState(false);

  const optionsCursorTrueWithMargin = {
    followCursor:true,
    shiftX:20,
    shiftY:0
}

  return (
    <article className="fathofAll">
      <section className="FirstSection">
        <img src={ThePotatoes} alt="Potato" />
        <div className="TheTextt">
          <h2>Book Your Table Now</h2>
          <p>Personalize your journey</p>
        </div>
        <img src={ThePizza} alt="Pizza" />
      </section>

      {/*! Second Part */}
      <section className="SecondSection">
        <div className="FGroup">
          <div className="OuterShell">
            
            <img src={Info} alt="Information" id="MakeItLeft" />
            <div className="HideMeBut">
              Very important person, A very important person or personage is a
              person who is accorded special privileges due to their high social
              status, influence or importance.
            </div>
            <div className="TheContent1">
              <img src={BlackChare} alt="Black chare" className="ChairImg" />
              <div className="TheText">
                <h2 id="TheH2">
                  VVIP <img src={Special} alt="White chare" id="SppnImg" />
                </h2>
                <p className="ThenoicyP">
                  VVIP or V.V.I.P.) is also used, especially with reference to
                  VIPs with very high rank or spending power. It is used
                  especially when anyone can buy VIP treatment,{" "}
                </p>
              </div>
            </div>
            <button className="TheBigButton">
              <span id="ContinueText">Continue</span>
              <img src={WhiteArrow} alt="Black arrow" id="BlackArrow" />
            </button>
          </div>
        </div>
        <div className="FGroup">
          <div className="OuterShell">
            <img src={Info} alt="Information" id="MakeItLeft" />
            <div className="HideMeBut2">
              VIP or very important person, usually of being famous or
              influential.
            </div>
            <div className="TheContent1">
              <img src={WeirdChare} alt="Pale chare" className="ChairImg" />
              <div className="TheText">
                <h2 id="TheH2">VIP</h2>
                <p className="ThenoicyP">
                  VVIP or V.V.I.P.) is also used, especially with reference to
                  VIPs with very high rank or spending power. It is used
                  especially when anyone can buy VIP treatment,{" "}
                </p>
              </div>
            </div>
            <button className="TheBigButton2">
              <span id="ContinueText2">Continue</span>
              <img src={BlackArrow} alt="Black arrow" id="WhiteandWeirdChare" />
            </button>
          </div>
        </div>
        <div className="FGroup">
          <div className="OuterShell">
            <img src={Info} alt="Information" id="MakeItLeft" />
            <div className="HideMeBut3">
              This will fit <strong>all</strong> your regular needs
            </div>
            <div className="TheContent1">
              <img src={WhiteChare} alt="Black chare" className="ChairImg" />
              <div className="TheText">
                <h2 id="TheH2">Premium</h2>
                <p className="ThenoicyP">
                  VVIP or V.V.I.P.) is also used, especially with reference to
                  VIPs with very high rank or spending power. It is used
                  especially when anyone can buy VIP treatment,{" "}
                </p>
              </div>
            </div>
            <button className="TheBigButton2">
              <span id="ContinueText2">Continue</span>
              <img src={BlackArrow} alt="White arrow" id="WhiteandWeirdChare" />
            </button>
          </div>
        </div>
      </section>
      <section></section>
    </article>
  );
}

export default BookingForm;
