import React, { useState } from "react";
import MenuD from "./../Sources";
import DatePicker from "react-date-picker";
import "./Table.css";

function BookingForm() {
  const [time, setTime] = useState(MenuD);
  const [value, onChange] = useState(new Date());
  const date = new Date();
  const daHours = date.getHours();
  const daMin = date.getMinutes();
  const daSec = date.getSeconds();
  const deDay = date.getDay();
  const deMon = date.getMonth();
  const deYear = date.getFullYear();
  return (
    <section className="fathofAll">
      <h1>Book a table</h1>
      <DatePicker
        required
        calendarType="Arabic"
        defaultView="month"
        onChange={onChange}
        value={value}
      />
      {/* {value == 'Mon Feb 13 2023 11:37:28 GMT+0300 (Arabian Standard Time)' ? <h1>Yes</h1> : <h1>No</h1>} */}
      {value == `` ? <h1>Yes</h1> : <h1>No</h1>}
      {console.log(value)}
      <div className="calender">
        <form>
          <label htmlFor="Thecal">Pick a date</label>
          <input id="Thecal" type="date" />
        </form>
      </div>
      <div>
        {time.map((ele, ind) => {
          const { time, when } = ele;
          // console.log(time);
          return (
            <div key={ind}>
              <h1>
                {time} {when}
              </h1>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default BookingForm;
