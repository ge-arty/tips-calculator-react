import Answer from "./Answer";
import { MyContext } from "./Context";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function Calculator() {
  const [billInpVal, setBillInpVal] = useState("");
  const [numberPeople, setNumberPeople] = useState("");
  const [tip, setTip] = useState("");
  const [tipAmountAnswer, setTipAmountAnswer] = useState(0);
  const [total, setTotal] = useState(0);
  function changeCustom(event) {
    setTip(event.target.value);
  }
  function click(Val) {
    setTip(Val);
  }
  function calc1() {
    if (billInpVal > 0 && numberPeople > 0 && tip > 0) {
      setTotal(
        (billInpVal * 1 + ((billInpVal * tip) / 100) * 1) / numberPeople
      );
    }
    return <p className="answer-text">${total.toFixed(2)}</p>;
  }
  function calc2() {
    if (billInpVal > 0 && numberPeople > 0 && tip > 0) {
      setTipAmountAnswer((billInpVal * tip) / 100 / numberPeople);
    }

    return <p className="answer-text">${tipAmountAnswer.toFixed(2)}</p>;
  }
  function billChange(event) {
    setBillInpVal(event.target.value);
  }
  function NumberPpl(event) {
    setNumberPeople(event.target.value);
  }
  return (
    <MyContext.Provider
      value={{
        tipAmount: tipAmountAnswer,
        totalAmount: total,
        calc1: calc1,
        calc2: calc2,
      }}
    >
      <div className="calc-container">
        <InfoBox
          billInpVal={billInpVal}
          billChange={billChange}
          numberPeople={numberPeople}
          NumberPpl={NumberPpl}
          click={click}
          tip={tip}
          changeCustom={changeCustom}
          value={tip}
        />
        <Answer />
      </div>
    </MyContext.Provider>
  );
}
