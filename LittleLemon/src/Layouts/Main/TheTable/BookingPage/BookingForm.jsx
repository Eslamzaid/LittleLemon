import React, { useEffect } from "react";
import { submitAPI, fetchAPI } from "../Sources";
import Time from "../Sources";
import { useState } from "react";
import "./Table.css";



function BookingForm() {
  const [date, setDate] = useState()
  const [time, setTime] = useState()
  const [guestsNum, setGuestsNum] = useState()
  const [occasion, setOccasion] = useState()
  useEffect(
    () => {
      console.log(date);
      console.log(time);
      console.log(guestsNum);
      console.log(occasion);
    },
    [date,time,guestsNum,occasion]
  );

  return (
    <section className="fathofAll">
      <h2>Book a table</h2>
      <form>
        <label htmlFor="res-date">Choose date</label>
        <input
          required
          type="date"
          id="res-date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
        />
        {date == "01/01/2023" ? <h1>yes</h1> : <h1>no</h1>}
        {time == 3 ? <h1>😁</h1>: <h1>👎</h1>}
        <label htmlFor="res-pmnoram">Am/Pm</label>
        <select required id="res-pmnoram">
          <option>Am/Pm</option>
          <option>Am</option>
          <option>Pm</option>
        </select>
        <label htmlFor="res-time">Choose time</label>
        <select required id="res-time " onChange={(e) => setTime(e.target.value)}>
          <option>Select Time</option>
          <option>3</option>
          <option aria-selected="false">4</option>
          <option>5</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input
          required
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          onChange={(e) => setGuestsNum(e.target.value)}
        />
        <label htmlFor="occasion">Occasion</label>
        <select required id="occasion" onChange={(e) => setOccasion(e.target.value)}>
          <option>Select an occasion</option>
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <button type="submit">Make Your reservation</button>
      </form>
    </section>
  );
}

export default BookingForm;
