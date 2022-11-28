import React from "react";
import icon from "./images/$.png";

export default function Bill(props) {
  return (
    <div className="bill-container">
      {props.redBorderFunc2()}
      <p className="bill-title">Bill</p>
      <div className="bill-input-box">
        <img className="bill-icon" src={icon} alt="dollar-icon" />
        <input
          id={props.id}
          value={props.value}
          onChange={props.billChange}
          className="bill-input"
          placeholder="0"
          type="text"
        />
      </div>
    </div>
  );
}
