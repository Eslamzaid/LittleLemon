import React, { useContext, useState } from "react";
import MenuD from "./SearchD";
import Sho from "./../../../assets/Icons/shopping.png";
import Plus from "./../../../assets/Icons/Plus.png";
import PopUp from "../PopUp/PopUp";
import { useCart } from "react-use-cart";
import "./SearchF.css";
import { theMainCon } from "../../Layouts";

function SearchF() {
  const [quiry, setQuiry] = useState("");
  const [item, setItem] = useState(MenuD);
  const [tru, setTrue] = useState(false);
  let [setTHecla, setsetTHecla] = useState(true);
  let [setTHecla1, setsetTHecla1] = useState(false);
  let [setTHecla2, setsetTHecla2] = useState(false);
  let [setTHecla3, setsetTHecla3] = useState(false);
  let [setTHecla4, setsetTHecla4] = useState(false);

  const { addItem, totalItems } = useCart();

  const filterMenu = (category) => {
    //! The Filters
    const updateItems = MenuD.filter((curElem) => {
      return curElem.category === category;
    });

    setItem(updateItems);
  };
  const thePrepi = useContext(theMainCon);

  const handleTHeFun1 = () => {
    setsetTHecla(() => !setTHecla);
    setsetTHecla1(() => (setTHecla1 = false));
    setsetTHecla2(() => (setTHecla2 = false));
    setsetTHecla3(() => (setTHecla3 = false));
    setsetTHecla4(() => (setTHecla4 = false));
    setItem(MenuD);
  };

  const handleTHeFun2 = () => {
    setsetTHecla(() => (setTHecla1 = false));
    setsetTHecla1(() => !setTHecla1);
    setsetTHecla2(() => (setTHecla2 = false));
    setsetTHecla3(() => (setTHecla3 = false));
    setsetTHecla4(() => (setTHecla4 = false));
    filterMenu("breakfast");
  };

  const handleTHeFun3 = () => {
    setsetTHecla(() => (setTHecla = false));
    setsetTHecla1(() => (setTHecla1 = false));
    setsetTHecla2(() => !setTHecla2);
    setsetTHecla3(() => (setTHecla3 = false));
    setsetTHecla4(() => (setTHecla4 = false));
    filterMenu("lunch");
  };

  const handleTHeFun4 = () => {
    setsetTHecla(() => (setTHecla = false));
    setsetTHecla1(() => (setTHecla1 = false));
    setsetTHecla2(() => (setTHecla2 = false));
    setsetTHecla3(() => !setTHecla3);
    setsetTHecla4(() => (setTHecla4 = false));
    filterMenu("evening");
  };

  const handleTHeFun5 = () => {
    setsetTHecla(() => (setTHecla = false));
    setsetTHecla1(() => (setTHecla1 = false));
    setsetTHecla2(() => (setTHecla2 = false));
    setsetTHecla3(() => (setTHecla3 = false));
    setsetTHecla4(() => !setTHecla4);
    filterMenu("dinner");
  };
  return (
    <article className="TheFather">
      <section className="FSection">
        <h1>Our menu</h1>
        <div className="FSButton">
          <input
            type="text"
            className="icon"
            placeholder="Search"
            onChange={(e) => setQuiry(e.target.value)}
          ></input>
        </div>
        <hr id="BYEBYE" />
      </section>
      <section className="SSection">
        <button
          className={setTHecla ? "SThat" : "SItIwAct"}
          onClick={() => handleTHeFun1()}
        >
          All
        </button>
        <button
          className={setTHecla1 ? "SThat" : "SItIwAct"}
          onClick={() => handleTHeFun2()}
        >
          Breakfast
        </button>
        <button
          className={setTHecla2 ? "SThat" : "SItIwAct"}
          onClick={() => handleTHeFun3()}
        >
          Lunch
        </button>
        <button
          className={setTHecla3 ? "SThat" : "SItIwAct"}
          onClick={() => handleTHeFun4()}
        >
          Evening
        </button>
        <button
          className={setTHecla4 ? "SThat" : "SItIwAct"}
          onClick={() => handleTHeFun5()}
        >
          Dinner
        </button>
        <button ref={thePrepi.one} className="invisible"></button>
        <button ref={thePrepi.theFi} className="invisible"></button>
        <div className="theLin">
          <PopUp trigger={tru} manger={setTrue} />
          <div
            className="TheLin"
            onClick={() => setTrue(() => !tru)}
            role="button"
            aria-pressed={`${tru}`}
          >
            <div className="LeftSide">
              <h3 className="LeftSideCu">
                {totalItems == 0
                  ? "Cart is empty"
                  : totalItems == 0
                  ? ""
                  : ` Check out (${totalItems})`}
              </h3>
            </div>
            <img src={Sho} id="Shopping" />
          </div>
        </div>
      </section>

      <h3 id="Willbechaned">Results: {item.length}</h3>
      <p id="Willbechaned2">Swipe rigth to explore more dishes</p>
      <section className="TSection">
        {item
          .filter(
            (itemm) =>
              itemm.name.toLowerCase().includes(quiry) ||
              itemm.name.includes(quiry)
          )
          .map((ele) => {
            const { id, image, name, price, alt, theSpecial, theSpecial2 } =
              ele;
            return (
              <div key={id} id={theSpecial || theSpecial2} className="Cards">
                <div className="FirstPart">
                  <img src={image} alt={alt} id="Theimgs" />
                </div>
                <div className="BottomPart">
                  <div className="BottomPartFirst">
                    <h3>{name}</h3>
                    <p>Price: ${price}.00</p>
                  </div>
                  <div className="BottomPartSecond">
                    <button onClick={() => addItem(ele)}>
                      <img src={Plus} alt="Add to cart" id="Plus" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
      </section>
    </article>
  );
}

export default SearchF;
