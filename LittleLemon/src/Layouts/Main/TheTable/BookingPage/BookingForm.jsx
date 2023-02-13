import React, { useState } from "react";
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
  const [time, setTime] = useState(MenuD);
  const [date, setDate] = useState();
  const datee = new Date(2023, 2, 13);
  const daHours = datee.getHours();
  const daMin = datee.getMinutes();
  const daSec = datee.getSeconds();
  const deDay = datee.getDay();
  const deMon = datee.getMonth();
  const deYear = datee.getFullYear();
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
          <img src={Info} alt="Information" id="MakeItLeft" />
          <div className="OuterShell">
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
              <img src={WhiteArrow} alt="Black arrow" />
            </button>
          </div>
        </div>
        <div className="TheContent2">
          <img src={Info} alt="Information" id="MakeItLeft" />
          <div>
            <img src={WeirdChare} alt="White chare" />
            <div>
              <h2>VIP</h2>
              <p>
                VVIP or V.V.I.P.) is also used, especially with reference to
                VIPs with very high rank or spending power. It is used
                especially when anyone can buy VIP treatment,{" "}
              </p>
            </div>
            <button>
              <img src={BlackArrow} />
            </button>
          </div>
        </div>
        <div className="TheContent3">
          <img src={Info} alt="Information" id="MakeItLeft" />
          <div>
            <img src={WhiteChare} alt="Pale color chare" />
            <div>
              <h2>Premium</h2>
              <p>
                VVIP or V.V.I.P.) is also used, especially with reference to
                VIPs with very high rank or spending power. It is used
                especially when anyone can buy VIP treatment,{" "}
              </p>
            </div>
            <button>
              <img src={BlackArrow} />
            </button>
          </div>
        </div>
      </section>
      <section></section>
    </article>
  );
}

export default BookingForm;
