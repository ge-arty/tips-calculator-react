import React from "react";
import TipButtons from "./TipButtons";

export default function SelectTip(props) {
  let btnArray = [5, 10, 15, 25, 50];
  return (
    <div className="select-tip-container">
      <p className="select-tip-title">Select Tip %</p>
      <div className="select-tip-button-box">
        {btnArray.map((Val, index) => {
          return (
            <TipButtons
              element={Val}
              key={index}
              id={props.tip == Val ? "active" : ""}
              click={() => props.click(Val)}
            />
          );
        })}
        <input
          id={props.id}
          value={props.value}
          onChange={props.changeCustom}
          placeholder="Custom"
          className="tip-input"
          type="text"
        />
      </div>
    </div>
  );
}
