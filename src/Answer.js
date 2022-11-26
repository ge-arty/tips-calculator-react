import React from "react";
import { MyContext } from "./Context";
import { useContext } from "react";

export default function Answer() {
  let Answers = useContext(MyContext);
  return (
    <div className="answer-box">
      <div className="tip-amount-box">
        <div className="tip-text-box">
          <p className="answer-value">Tip Amount</p>
          <p className="person-text">/ person</p>
        </div>
        {Answers.calc2()}
      </div>
      <div className="total-amount-box">
        <div className="total-text-box">
          <p className="answer-value">Total</p>
          <p className="person-text">/ person</p>
        </div>
        {Answers.calc1()}
      </div>
      <button className="reset-btn">Reset</button>
    </div>
  );
}
