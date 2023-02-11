import React, { useEffect } from "react";
import { submitAPI, fetchAPI } from "../Sources";
import { useState } from "react";
import "./Table.css";

function OrderTable() {
  const [table, setTable] = useState();

  return (
    <div>
      <h1>TheTable</h1>
      <div>
        <form>
          <label>Choose date</label>
          <input type="date" id="res-date" />
          <label>Choose time</label>
          <select id="res-time ">
            <option>17:00</option>
            <option>18:00</option>
            <option>19:00</option>
            <option>20:00</option>
            <option>21:00</option>
            <option>22:00</option>
          </select>
          <label>Number of guests</label>
          <input type="number" placeholder="1" min="1" max="10" id="guests" />
          <label>Occasion</label>
          <select id="occasion">
            <option>Birthday</option>
            <option>Anniversary</option>
          </select>
          <button type="submit">Make Your reservation</button>
        </form>
      </div>
    </div>
  );
}

export default OrderTable;
