import React, { useState } from "react";
import MenuD from "./SearchD";
import "./SearchF.css";

function SearchF() {
  const [item, setItem] = useState(MenuD);
  const filterMenu = (category) => {
    const updateItems = MenuD.filter((curElem) => {
      return curElem.category === category;
    });

    setItem(updateItems);
  };
  return (
    <article>
      <section>
        <h1>Our menu</h1>
        <div>
          <button>TheSearch</button>
        </div>
      </section>
      <section>
        <button onClick={() => filterMenu("breakfast")}>Breakfast</button>
        <button onClick={() => filterMenu("lunch")}>Lunch</button>
        <button onClick={() => filterMenu("evening")}>Evening</button>
        <button onClick={() => filterMenu("dinner")}>Dinner</button>
        <button onClick={() => setItem(MenuD)}>All</button>
        <p>PImage</p>
      </section>

      {item.map((ele) => {
        const { id, image, name, price, alt } = ele;
        return (
          <div key={id}>
            <h3>{name}</h3>
            <img src={image} width="200px" alt={alt} />
            <p>Price: {price}</p>
          </div>
        );
      })}
    </article>
  );
}

export default SearchF;
