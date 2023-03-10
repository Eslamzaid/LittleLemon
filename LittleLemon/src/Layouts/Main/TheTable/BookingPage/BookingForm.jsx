import React, { useContext, useReducer, useState } from "react";
import ThePotatoes from "./../../../../assets/Main/ThePotates.png";
import ThePizza from "./../../../../assets/Main/thePizza.png";
import BlackChare from "./../../../../assets/Main/BlackChare.png";
import WhiteChare from "./../../../../assets/Main/WhiteChare (1).png";
import BlackArrow from "./../../../../assets/Icons/BlackArrow.png";
import Special from "./../../../../assets/Icons/Untitled design (11) 1.png";
import WhiteArrow from "./../../../../assets/Icons/WhiteArrow.png";
import Info from "./../../../../assets/Icons/Info.png";
import BlackIcon from "./../../../../assets/Icons/BlackIcon.png";
import Cooker from "./../../../../assets/Main/Cooker.png";
import CarHome from "./../../../../assets/Main/CarHome.png";
import LittleLemon from "./../../../../assets/Icons/SmallLemon.png";
import X from "./../../../../assets/Icons/Addiction.png";
import M from "./../../../../assets/Icons/Substraction.png";
import ToUp from "./../../../../assets/Icons/ToUp.png";
import Check from "./../../../../assets/Icons/Group.png";
import Tippy from "@tippyjs/react/headless";
import swal from "@sweetalert/with-react";
import "./Table.css";
import { theMainCon } from "../../../Layouts";

const reducer1 = (state, action) => {
  if (action.type === "VVIP") return { total: state.total + 1000 };
  if (action.type === "VVIPM") return { total: (state.total = 0) };
  if (action.type === "VIP") return { total: state.total + 500 };
  if (action.type === "VIPM") return { total: (state.total = 0) };
  if (action.type === "Pre") return { total: state.total + 250 };
  if (action.type === "PreM") return { total: (state.total = 0) };
};

const reducer2 = (state2, action2) => {
  if (action2.type === "Guests") return { guests: state2.guests + 30 };
  if (action2.type === "GuestsM")
    return {
      guests: state2.guests >= 60 ? state2.guests - 30 : (state2.guests = 30),
    };
};

function BookingForm() {
  var [VVIP, setVVIP] = useState(false);
  var [VIP, setVIP] = useState(false);
  var [Pre, setPre] = useState(false);
  const [message, setMessage] = useState("");
  const [message2, setMessage2] = useState("");
  const [radioValue, setRadioValue] = useState(0);

  const onChange = (ev) => {
    setRadioValue(ev.target.value);
  };

  const [value, setValue] = useState("Select");

  const handleChangeSelect = (e) => {
    setValue(e.target.value);
  };

  const handleChange = (event) => {
    setMessage(event.target.value);
  };
  const handleChange2 = (event) => {
    setMessage2(event.target.value);
  };

  const [numGuests, setNumGuests] = useState(1);
  const initalTotal = { total: 0 };
  const [state, dispatch] = useReducer(reducer1, initalTotal);

  const initalTotal2 = { guests: 30 };
  const [state2, dispatch2] = useReducer(reducer2, initalTotal2);

  const hanleInc = () => {
    if (numGuests >= 12) {
      setNumGuests(12);
    } else {
      setNumGuests(() => numGuests + 1);
    }
    dispatch2({ type: "Guests" });
  };
  const hanleDec = () => {
    if (numGuests == 1) {
      setNumGuests(1);
    } else {
      setNumGuests(() => numGuests - 1);
    }
    dispatch2({ type: "GuestsM" });
  };
  const handleSumbit = (e) => {
    e.preventDefault();
  };
  const handleClick1 = () => {
    setVVIP(() => !VVIP);
    setVIP(() => (VIP = false));
    setPre(() => (Pre = false));
    if (state.total < 1000) {
      dispatch({ type: "VVIPM" });
    }
  };
  const handleClick2 = () => {
    setVVIP(() => (VVIP = false));
    setVIP(() => !VIP);
    setPre(() => (Pre = false));
    if (state.total == 1000 || state.total == 250) {
      dispatch({ type: "VIPM" });
    }
  };
  const handleClick3 = () => {
    setVVIP(() => (VVIP = false));
    setVIP(() => (VIP = false));
    setPre(() => !Pre);
    if (state.total == 1000 || state.total == 500) {
      dispatch({ type: "PreM" });
    }
  };

  const date = new Date().toLocaleString("en-US", { day: "2-digit" });
  const day = date;

  const thePrepi = useContext(theMainCon);

  const TheAlert = () => {
    swal({
      icon: "success",
      content: (
        <div className="TheSwal">
          <h1>Your table is booked!</h1>
          <table className="Table">
            <tbody className="THeTable">
              <tr>
                <td>Total guests</td>
                <td>{numGuests}</td>
              </tr>
              <tr>
                <td id="MakeItL">We hope to see you on</td>
                <td>{message}</td>
              </tr>
              <tr>
                <td id="MakeItL">On time</td>
                <td>{message2}</td>
              </tr>
              <tr>
                <td>Your Anniversary is</td>
                <td>
                  {radioValue == 1
                    ? "Birthday"
                    : "" || radioValue == 2
                    ? "Anniversary"
                    : "" || radioValue == 3
                    ? "Other"
                    : ""}
                </td>
              </tr>
              <tr>
                <td id="MakeItL">You came for</td>
                <td>{value}</td>
              </tr>
              <tr>
                <td>
                  <h2 id="MakeItL">Your total is</h2>
                </td>
                <td>
                  <h2>${state2.guests + state.total}</h2>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ),
    });
  };

  const HandleSubmit2 = () => {
    if (
      message === "" ||
      message2 === "" ||
      radioValue === 0 ||
      state.total === 0 ||
      value == "Select"
    ) {
      //TODO Create a form validation by changing the state to false/true on
      //TODO the classname
      console.warn("Please fill in all the inputs");
    } else {
      TheAlert();
    }
    if (state.total == 0) {
      alert("Please choose what type of tables you want");
    } else if (value == "Select") {
      alert("Please select what you will come for");
    }
  };

  return (
    <article className="fathofAll">
      <section className="FirstSection">
        <img src={ThePotatoes} alt="Potato" id="Potato" />
        <div className="TheTextt">
          <h2>Book Your Table Now</h2>
          <p>Personalize your journey</p>
        </div>
        <img src={ThePizza} id="THENASHBA" alt="Pizza" />
      </section>
      {/*! Second Part */}
      <section className="SecondSection">
        <div className="FGroup" id="NameMe1">
          <div className={VVIP ? "VVIPTrue" : "OuterShell"}>
            <Tippy
              render={(attrs) => (
                <div className="box" tabIndex="-1" {...attrs}>
                  This will provide you with all types of food and Resorts,
                  <br /> It will coast you <strong>$1000</strong>
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
                  VVIP is the ultimate package
                  <span className={VVIP ? "LetsGoo" : "NOP"}> we offer</span>,
                  it have everything you can dream of, for example
                  <span className={VVIP ? "LetsGoo" : "NOP"}>
                    {" "}
                    yates, the JERA museam and a flight to space!
                  </span>
                </p>
              </div>
            </div>
            <button
              className="TheBigButton"
              // onClick={VVIP ? () => state.total < 1000 ? dispatch({type: "VVIP"})  : dispatch({type: "VVIPM"}) : handleClick1}
              onClick={
                VVIP
                  ? () =>
                      state.total < 1000
                        ? dispatch({ type: "VVIP" })
                        : dispatch({ type: "VVIPM" })
                  : handleClick1
              }
            >
              <span id="ContinueText">
                {VVIP
                  ? state.total < 1000 && VVIP == true
                    ? "Sure?"
                    : "Booked"
                  : "I want this"}
              </span>
              <img
                src={WhiteArrow}
                alt="Black arrow"
                id={VVIP ? "WhiteandWeirdCh" : "WhiteandWeirdChare"}
              />
            </button>
          </div>
        </div>
        <div className="FGroup" id="NameMe2">
          <div className={VIP ? "VVIPTrue" : "OuterShell"}>
            <Tippy
              render={(atttrs) => (
                <div className="box" tabIndex="-2" {...atttrs}>
                  {/* VIP or very important person, usually of being famous or
                  influential. */}
                  This will provide you with all types of food but with limited
                  <br />
                  amount of Resorts, It will coast you <strong>$500</strong>
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
                  VIP is the right choice if you want to{" "}
                  <span className={VIP ? "LetsGoo" : "NOP"}>
                    {" "}
                    enjoy with your family or friends,
                  </span>{" "}
                  it will provide you with all the{" "}
                  <span className={VIP ? "LetsGoo" : "NOP"}>
                    Premium features and FREE ticket for the JERA museum.
                  </span>
                </p>
              </div>
            </div>
            <button
              className="TheBigButton2"
              onClick={
                VIP
                  ? () =>
                      state.total < 500
                        ? dispatch({ type: "VIP" })
                        : dispatch({ type: "VIPM" })
                  : handleClick2
              }
            >
              <span id="ContinueText2">
                {VIP ? (state.total < 500 ? "Sure?" : "Booked") : "I want this"}
              </span>
              <img
                src={BlackArrow}
                alt="Black arrow"
                id={VIP ? "WhiteandWeirdCh" : "WhiteandWeirdChare"}
              />
            </button>
          </div>
        </div>
        <div className="FGroup" id="NameMe3">
          <div className={Pre ? "VVIPTrue" : "OuterShell"}>
            <Tippy
              render={(attttrs) => (
                <div className="box" tabIndex="-3" {...attttrs}>
                  {/* This will fit <strong>all</strong> your regular needs */}
                  This will provide you with limited amount of food and Resorts,
                  <br />
                  It will coast you <strong>$250</strong>
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
                  Premium will fit{" "}
                  <span className={Pre ? "LetsGoo" : "NOP"}>
                    all your needs, car parking, hotel, three tickets for the
                    opera
                  </span>{" "}
                  and a lot more, if you are flying solo it will be the right
                  choice.
                </p>
              </div>
            </div>
            <button
              className="TheBigButton2"
              onClick={
                Pre
                  ? () =>
                      state.total < 250
                        ? dispatch({ type: "Pre" })
                        : handleClick3 && dispatch({ type: "PreM" })
                  : handleClick3
              }
            >
              <span id="ContinueText2">
                {Pre
                  ? state.total < 250 && Pre
                    ? "Sure?"
                    : "Booked"
                  : "I want this"}
              </span>
              <img
                src={BlackArrow}
                alt="White arrow"
                id={Pre ? "WhiteandWeirdCh" : "WhiteandWeirdChare"}
              />
            </button>
          </div>
        </div>
      </section>
      <button className="invisible" ref={thePrepi.three}></button>
      {/*! Third section  */}
      <section className="TheLast">
        <div className="TheLastFirstDiv">
          <h3>Book a table</h3>
          <img src={LittleLemon} alt="Little lemon" id="smallLemon" />
        </div>
        <div className="TheContainer">
          <div className="FirstOf1">
            <img src={Cooker} alt="A woman cooking" />
            <h2>Our core values</h2>
            <p>We care about</p>
            <table className="TheSmallTable">
              <tbody>
                <tr>
                  <td>Integrity</td>
                  <td>Boldness</td>
                </tr>
                <tr>
                  <td>Honesty</td>
                  <td>Trust</td>
                </tr>
                <tr>
                  <td>Accountability</td>
                  <td>immaculation</td>
                </tr>
                <tr>
                  <td>Passion</td>
                  <td>Fun</td>
                </tr>
              </tbody>
            </table>
            <div className="TheStepFatherOfButton">
              <button id="TheReadMoreBu">READ MORE</button>
            </div>
          </div>
          {/*             Second part               */}
          <div>
            <form onSubmit={handleSumbit} className="TheSeconddPart">
              <div className="NumGuests">
                <label htmlFor="people" className="HowMany">
                  <Tippy
                    render={(attrs) => (
                      <div className="box32" tabIndex="-1" {...attrs}>
                        For one guest $30
                      </div>
                    )}
                  >
                    <img
                      src={VVIP ? Info : BlackIcon}
                      alt="Information"
                      id="MakeItLeft32"
                    />
                  </Tippy>
                  How many People:
                </label>
                <div className="JustCheck">
                  <button
                    type="button"
                    className="TheIncDecButton"
                    id="TheInce"
                    onClick={hanleInc}
                  >
                    <img
                      width="23px"
                      src={X}
                      alt="Add guest"
                      id="MakeMeACursonr"
                    />
                  </button>
                  <input id="people" readOnly value={numGuests}></input>
                  <button
                    className="TheIncDecButton"
                    type="button"
                    onClick={hanleDec}
                  >
                    <img src={M} alt="Add guest" id="MakeMeACursonr" />
                  </button>
                </div>
              </div>
              <div className="PickUpADate">
                <label id="Date" htmlFor="Date">
                  Date:
                </label>
                <input
                  required
                  className="TheInputDate"
                  type="date"
                  min={`2023-02-${day}`}
                  max="2023-05-01"
                  name="Date"
                  onChange={handleChange}
                />
              </div>
              {/* The time */}
              <div className="ChooseTime">
                <label className="TheTime" htmlFor="Time">
                  Time :
                </label>
                <input
                  required
                  className="TheTiemINput"
                  type="time"
                  onChange={handleChange2}
                />
              </div>
              <div className="TheOccastion">
                <label htmlFor="Anni" className="occasion">
                  Occasion :
                </label>
                <div>
                  <input
                    required
                    type="radio"
                    id="occa1"
                    className="BeCool"
                    name="occa"
                    value={1}
                    onChange={onChange}
                  />
                  <label htmlFor="occa1" id="MakeMeACursonr">
                    Birthday
                  </label>
                </div>
                <div>
                  <input
                    required
                    type="radio"
                    id="occa2"
                    className="BeCool"
                    name="occa"
                    value={2}
                    onChange={onChange}
                  />
                  <label htmlFor="occa2" id="MakeMeACursonr">
                    Holiday
                  </label>
                </div>
                <div>
                  <input
                    required
                    type="radio"
                    id="occa3"
                    className="BeCool"
                    name="occa"
                    value={3}
                    onChange={onChange}
                  />
                  <label htmlFor="occa3" id="someleft">
                    Other
                  </label>
                </div>
              </div>
              <div className="TheOptions">
                <label htmlFor="reason" id="someleftt">
                  You come for :
                </label>
                <select
                  required
                  className="THeSelectedOpetions"
                  onChange={handleChangeSelect}
                  value={value}
                  // defaultValue={"Select"}
                >
                  <option disabled value={"Select"}>
                    Select
                  </option>
                  <option value={"Breakfast"} id="SomeCursorsPls">
                    Breakfast
                  </option>
                  <option value={"Lunch"} id="SomeCursorsPls">
                    Lunch
                  </option>
                  <option value={"Dinner"} id="SomeCursorsPls">
                    Dinner
                  </option>
                  <option value={"All"} id="SomeCursorsPls">
                    All
                  </option>
                </select>
              </div>
              <button onClick={HandleSubmit2} className="TheFinalButtonInComp">
                Confirm your table
              </button>
            </form>
          </div>
          {/* Last thing */}
          <div className="FSSeciont">
            <img src={CarHome} alt="Order Online" />
            <h3>Order Online</h3>
            <div className="SHORTENme2">
              <p className="SHORTENme">
                Fast and affordable order from any place and time
              </p>
            </div>
            <table className="TheSmallTable2">
              <tbody>
                <tr>
                  <td>
                    <img
                      src={Check}
                      className="accordion-flush"
                      alt="Fast shipping"
                    />
                    Fast
                  </td>
                  <td>
                    <img
                      src={Check}
                      className="accordion-flush"
                      alt="Fast shipping"
                    />
                    Hot and tasty
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      src={Check}
                      className="accordion-flush"
                      alt="Fast shipping"
                    />
                    Free
                  </td>
                  <td>
                    <img
                      src={Check}
                      className="accordion-flush"
                      alt="Fast shipping"
                    />
                    City to city
                  </td>
                </tr>
              </tbody>
            </table>
            <button className="TheLastButtton">
              <img src={ToUp} onClick={thePrepi.two} id="SOWhat" alt="Go up" />
            </button>
          </div>
          {/* <h1>{state.total}</h1>
          <h1>{state2.guests}</h1>
          <h1>{state2.guests + state.total}</h1> */}
        </div>
      </section>
    </article>
  );
}

export default BookingForm;
