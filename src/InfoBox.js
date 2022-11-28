import Bill from "./Bill";
import NumberPeople from "./NumberPeople";
import SelectTip from "./SelectTip";

export default function InfoBox(props) {
  return (
    <div className="info-box">
      <Bill
        redBorderFunc2={props.redBorderFunc2}
        value={props.billInpVal}
        billChange={props.billChange}
        id={props.billInpVal == 0 ? "number-people-input2" : ""}
      />
      <SelectTip
        value={props.value}
        changeCustom={props.changeCustom}
        tip={props.tip}
        click={props.click}
      />
      <NumberPeople
        id={props.numberPeople < 1 ? "number-people-input2" : ""}
        className={props.className}
        redBorderFunc={props.redBorderFunc}
        value={props.numberPeople}
        NumberPpl={props.NumberPpl}
      />
    </div>
  );
}
