import React, { useState } from "react";
import ThePotatoes from "./../../../../assets/Main/ThePotates.png";
import ThePizza from "./../../../../assets/Main/thePizza.png";
import BlackChare from "./../../../../assets/Main/BlackChare.png";
import WhiteChare from "./../../../../assets/Main/WhiteChare (1).png";
import WeirdChare from "./../../../../assets/Main/WeirdChare.png";
import BlackArrow from "./../../../../assets/Icons/BlackArrow.png";
import Special from "./../../../../assets/Icons/Untitled design (11) 1.png";
import WhiteArrow from "./../../../../assets/Icons/WhiteArrow.png";
import Info from "./../../../../assets/Icons/Info.png";
import BlackIcon from "./../../../../assets/Icons/BlackIcon.png";
import Cooker from "./../../../../assets/Main/Cooker.png";
import CarHome from "./../../../../assets/Main/CarHome.png";
import LittleLemon from "./../../../../assets/Icons/SmallLemon.png";
import Tippy from "@tippyjs/react/headless";
import "./Table.css";

function BookingForm() {
  var [VVIP, setVVIP] = useState(false);
  var [VIP, setVIP] = useState(false);
  var [Pre, setPre] = useState(false);

  const handleClick1 = () => {
    setVVIP(() => !VVIP);
    setVIP(() => (VIP = false));
    setPre(() => (Pre = false));
  };
  const handleClick2 = () => {
    setVVIP(() => (VVIP = false));
    setVIP(() => !VIP);
    setPre(() => (Pre = false));
  };
  const handleClick3 = () => {
    setVVIP(() => (VVIP = false));
    setVIP(() => (VIP = false));
    setPre(() => !Pre);
  };

  console.log(VVIP, VIP, Pre);
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
          <div className={VVIP ? "VVIPTrue" : "OuterShell"}>
            <Tippy
              render={(attrs) => (
                <div className="box" tabIndex="-1" {...attrs}>
                  Very important person, A very important person or personage is
                  a person who is accorded special privileges due to their high
                  social status, influence or importance.
                </div>
              )}
            >
              <img
                src={VVIP ? Info : BlackIcon}
                alt="Information"
                id="MakeItLeft"
              />
            </Tippy>
            <div className="TheContent1">
              <img
                src={VVIP ? WhiteChare : BlackChare}
                alt="Black chare"
                className="ChairImg"
              />
              <div className="TheText">
                <h2 id={VVIP ? "TheH22" : "TheH2"}>
                  VVIP <img src={Special} alt="White chare" id="SppnImg" />
                </h2>
                <p className={VVIP ? "ThenoicyPP" : "ThenoicyP"}>
                  VVIP or V.V.I.P.) is also used, especially with reference to
                  VIPs with very high rank or spending power. It is used
                  especially when anyone can buy VIP treatment,{" "}
                </p>
              </div>
            </div>
            <button className="TheBigButton" onClick={handleClick1}>
              <span id="ContinueText">{VVIP ? "chosen" : "I want this"}</span>
              <img
                src={WhiteArrow}
                alt="Black arrow"
                id={VVIP ? "WhiteandWeirdCh" : "WhiteandWeirdChare"}
              />
            </button>
          </div>
        </div>
        <div className="FGroup">
          <div className={VIP ? "VVIPTrue" : "OuterShell"}>
            <Tippy
              render={(atttrs) => (
                <div className="boox" tabIndex="-2" {...atttrs}>
                  VIP or very important person, usually of being famous or
                  influential.
                </div>
              )}
            >
              <img
                src={VIP ? Info : BlackIcon}
                alt="Information"
                id="MakeItLeft"
              />
            </Tippy>
            <div className="TheContent1">
              <img
                src={VIP ? WhiteChare : BlackChare}
                alt="Pale chare"
                className="ChairImg"
              />
              <div className="TheText">
                <h2 id={VIP ? "TheH22" : "TheH2"}>VIP</h2>
                <p className={VIP ? "ThenoicyPP" : "ThenoicyP"}>
                  VIP is the right choice if you want to enjoy with your family
                  or friends, it will provide you with all the Premium features
                  and FREE ticket for the JERA museum.
                </p>
              </div>
            </div>
            <button className="TheBigButton2" onClick={handleClick2}>
              <span id="ContinueText2">{VIP ? "chosen" : "I want this"}</span>
              <img
                src={BlackArrow}
                alt="Black arrow"
                id={VIP ? "WhiteandWeirdCh" : "WhiteandWeirdChare"}
              />
            </button>
          </div>
        </div>
        <div className="FGroup">
          <div className={Pre ? "VVIPTrue" : "OuterShell"}>
            <Tippy
              render={(attttrs) => (
                <div className="booox" tabIndex="-3" {...attttrs}>
                  This will fit <strong>all</strong> your regular needs
                </div>
              )}
            >
              <img
                src={Pre ? Info : BlackIcon}
                alt="Information"
                id="MakeItLeft"
              />
            </Tippy>
            <div className="TheContent1">
              <img
                src={Pre ? WhiteChare : BlackChare}
                alt="Black chare"
                className="ChairImg"
              />
              <div className="TheText">
                <h2 id={Pre ? "TheH22" : "TheH2"}>Premium</h2>
                <p className={Pre ? "ThenoicyPP" : "ThenoicyP"}>
                  Premium will fit all your needs, car parking, hotel, three
                  tickets for the opera and a lot more, if you are flying solo
                  it will be the right choice.
                </p>
              </div>
            </div>
            <button className="TheBigButton2" onClick={handleClick3}>
              <span id="ContinueText2">{Pre ? "chosen" : "I want this"}</span>
              <img
                src={BlackArrow}
                alt="White arrow"
                id={Pre ? "WhiteandWeirdCh" : "WhiteandWeirdChare"}
              />
            </button>
          </div>
        </div>
      </section>

      {/*! Third section  */}
      <section>
        <h3>Book a table</h3>
        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </section>
    </article>
  );
}

export default BookingForm;
