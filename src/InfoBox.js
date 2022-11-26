import React, { useState } from "react";
import Bill from "./Bill";
import NumberPeople from "./NumberPeople";
import SelectTip from "./SelectTip";

export default function InfoBox() {
  const [billInpVal, setBillInpVal] = useState("");
  const [numberPeople, setNumberPeople] = useState("");
  const [tip, setTip] = useState("");
  const [tipAmountAnswer, setTipAmountAnswer] = useState(0);
  const [total, setTotal] = useState(0);
  function changeCustom(event) {
    setTip(event.target.value);
  }
  function billChange(event) {
    setBillInpVal(event.target.value);
  }
  function NumberPpl(event) {
    setNumberPeople(event.target.value);
  }
  function click(Val) {
    setTip(Val);
  }
  function Calculate() {
    setTipAmountAnswer((billInpVal * tip) / 100 / numberPeople);
    setTotal((billInpVal * 1 + ((billInpVal * tip) / 100) * 1) / numberPeople);
  }
  return (
    <div className="info-box">
      <Bill value={billInpVal} billChange={billChange} />
      <SelectTip
        value={tip}
        changeCustom={changeCustom}
        tip={tip}
        click={click}
      />
      <NumberPeople value={numberPeople} NumberPpl={NumberPpl} />
      <button onClick={Calculate}>{tipAmountAnswer}</button>
      <h1>{total}</h1>
    </div>
  );
}
