import React from "react";
import icon from "./images/Combined Shape.png";

export default function NumberPeople(props) {
  return (
    <div className="number-people-container">
      <p className="number-people-text">Number People</p>
      <div className="number-people-input-box">
        <img
          className="number-people-icon"
          src={icon}
          alt="number-people-icon"
        />
        <input
          className="number-people-input"
          onChange={props.NumberPpl}
          value={props.value}
          type="text"
          placeholder="0"
        />
      </div>
    </div>
  );
}