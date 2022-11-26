import Bill from "./Bill";
import NumberPeople from "./NumberPeople";
import SelectTip from "./SelectTip";

export default function InfoBox(props) {
  return (
    <div className="info-box">
      <Bill value={props.billInpVal} billChange={props.billChange} />
      <SelectTip
        value={props.value}
        changeCustom={props.changeCustom}
        tip={props.tip}
        click={props.click}
      />
      <NumberPeople value={props.numberPeople} NumberPpl={props.NumberPpl} />
    </div>
  );
}
