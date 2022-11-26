import React from "react";

export default function Answer() {
  return (
    <div className="answer-box">
      <div className="tip-amount-box">
        <div className="tip-text-box">
          <p className="answer-value">Tip Amount</p>
          <p className="person-text">/ person</p>
        </div>
        <p className="answer-text">$0</p>
      </div>
      <div className="total-amount-box">
        <div className="total-text-box">
          <p className="answer-value">Total</p>
          <p className="person-text">/ person</p>
        </div>
        <p className="answer-text">$0</p>
      </div>
      <button className="reset-btn">Reset</button>
    </div>
  );
}
