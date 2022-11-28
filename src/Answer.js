import React from "react";
import { MyContext } from "./Context";
import { useContext } from "react";
import { useEffect, useState } from "react";

export default function Answer() {
  let Answers = useContext(MyContext);
  // -------------------Answer Variables
  const [tipAmountAnswer, setTipAmountAnswer] = useState(0);
  const [total, setTotal] = useState(0);
  // const [counter, setCounter] = useState(0);
  // ------ Calculations
  function Calculate() {
    if (Answers.billInpVal > 0 && Answers.numberPeople > 1 && Answers.tip > 0) {
      setTipAmountAnswer(
        (Answers.billInpVal * Answers.tip) / 100 / Answers.numberPeople
      );
      setTotal(
        (Answers.billInpVal * 1 +
          ((Answers.billInpVal * Answers.tip) / 100) * 1) /
          Answers.numberPeople
      );
    }
  }
  useEffect(() => {
    Calculate();
  });

  // --------Reset Function
  function reset() {
    Answers.resetBill("");
    Answers.resetTip("");
    Answers.resetNumberPeople("");
    setTotal(0);
    setTipAmountAnswer(0);
  }
  return (
    <div className="answer-box">
      <div className="tip-amount-box">
        <div className="tip-text-box">
          <p className="answer-value">Tip Amount</p>
          <p className="person-text">/ person</p>
        </div>
        <p className="answer-text">${tipAmountAnswer.toFixed(2)}</p>
      </div>
      <div className="total-amount-box">
        <div className="total-text-box">
          <p className="answer-value">Total</p>
          <p className="person-text">/ person</p>
        </div>
        <p className="answer-text">${total.toFixed(2)}</p>
      </div>
      <button
        onClick={reset}
        id={total > 0 && tipAmountAnswer > 0 ? "reset-btnID" : ""}
        className="reset-btn"
      >
        Reset
      </button>
    </div>
  );
}
