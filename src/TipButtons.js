export default function TipButtons(props) {
  return (
    <>
      <button className="tip-buttons" id={props.id} onClick={props.click}>
        {props.element}%
      </button>
    </>
  );
}
