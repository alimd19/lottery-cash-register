import React from "react";

const NumberPicker = (props) => {
  let numberButtons = [];
  for (let i = 1; i <= 20; i++) {
    numberButtons.push(
      <button
        className={props.numbers.includes(i) ? "selected" : ""}
        key={i}
        onClick={() => props.onAddNumber(i)}
        disabled={props.isDisabled ? true : props.numbers.includes(i)}
      >
        {i}
      </button>
    );
  }

  return (
    <div>
      <h3>Please selecte any 5 numbers</h3>
      <div>{numberButtons}</div>
      <div>
        <button onClick={() => props.onCash()}>Cash</button>
        <button onClick={() => props.onClear()}>Clear</button>
        <button onClick={() => props.onRandom()}>Random</button>
      </div>
    </div>
  );
};

export default NumberPicker;
