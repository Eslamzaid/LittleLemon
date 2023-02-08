import React, { useReducer, useState } from "react";
import MenuD from "./SearchD";
import { useCart } from "react-use-cart";
import "./SearchF.css";

function SearchF() {
  const [quiry, setQuiry] = useState("");
  const [item, setItem] = useState(MenuD);

  const { addItem } = useCart();

  //! The Filters
  const filterMenu = (category) => {
    const updateItems = MenuD.filter((curElem) => {
      return curElem.category === category;
    });

    setItem(updateItems);
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
      </section>
      <section className="SSection">
        <button onClick={() => setItem(MenuD)}>All</button>
        <button onClick={() => filterMenu("breakfast")}>Breakfast</button>
        <button onClick={() => filterMenu("lunch")}>Lunch</button>
        <button onClick={() => filterMenu("evening")}>Evening</button>
        <button onClick={() => filterMenu("dinner")}>Dinner</button>
      </section>
      <section className="TSection">
        {item
          .filter(
            (itemm) =>
              itemm.name.toLowerCase().includes(quiry) ||
              itemm.name.includes(quiry)
          )
          .map((ele) => {
            const { id, image, name, price, alt, amount } = ele;
            return (
              <div key={id}>
                <div>
                  <img src={image} width="200px" alt={alt} id="Theimgs" />
                </div>
                <div>
                  <h3>{name}</h3>
                  <p>Price: {price}</p>
                </div>
                <div>
                  <button onClick={() => addItem(ele)}>Add to cart</button>
                </div>
              </div>
            );
          })}
      </section>
    </article>
  );
}

export default SearchF;
