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

  const { addItem, totalItems } = useCart();

  const filterMenu = (category) => {
    //! The Filters
    const updateItems = MenuD.filter((curElem) => {
      return curElem.category === category;
    });

    setItem(updateItems);
  };
  const thePrepi = useContext(theMainCon);

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
        <button onClick={() => setItem(MenuD)}>All</button>
        <button onClick={() => filterMenu("breakfast")}>Breakfast</button>
        <button onClick={() => filterMenu("lunch")}>Lunch</button>
        <button onClick={() => filterMenu("evening")}>Evening</button>
        <button onClick={() => filterMenu("dinner")}>Dinner</button>
        <button ref={thePrepi.one} className="invisible"></button>
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
