import Answer from "./Answer";
import { MyContext } from "./Context";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function Calculator() {
  // ----------Input Variables
  const [billInpVal, setBillInpVal] = useState("");
  const [numberPeople, setNumberPeople] = useState("");
  const [tip, setTip] = useState("");
  // -----------Can't be zero TEXT
  function redBorderFunc() {
    if (numberPeople < 1) {
      return <p className="red-border-text">Can't be Zero</p>;
    }
  }
  function redBorderFunc2() {
    if (billInpVal == 0) {
      return <p className="red-border-text">Can't be Zero</p>;
    }
  }
  // ---------Click Function
  function click(Val) {
    setTip(Val);
  }
  // -------input target values
  function billChange(event) {
    if (event.target.value < 0) {
      setBillInpVal(0);
    } else {
      setBillInpVal(event.target.value);
    }
  }
  function changeCustom(event) {
    setTip(event.target.value);
  }
  function NumberPpl(event) {
    setNumberPeople(event.target.value);
    if (event.target.value < 1) {
      setNumberPeople(0);
    } else {
      setNumberPeople(event.target.value);
    }
  }
  return (
    <MyContext.Provider
      value={{
        billInpVal: billInpVal,
        numberPeople: numberPeople,
        tip: tip,
        resetBill: setBillInpVal,
        resetTip: setTip,
        resetNumberPeople: setNumberPeople,
      }}
    >
      <div className="calc-container">
        <InfoBox
          redBorderFunc2={redBorderFunc2}
          className={"number-people-input"}
          billInpVal={billInpVal}
          billChange={billChange}
          numberPeople={numberPeople}
          NumberPpl={NumberPpl}
          click={click}
          tip={tip}
          changeCustom={changeCustom}
          value={tip}
          redBorderFunc={redBorderFunc}
        />
        <Answer />
      </div>
    </MyContext.Provider>
  );
}
