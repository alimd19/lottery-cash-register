import React from "react";

const CashButtons = (props) => {
  const cashAmounts = [1, 5, 10, 20];
  return (
    <div>
      {cashAmounts.map((amount, index) => (
        <button
          key={index}
          onClick={() => props.onAddMoney(amount)}
          disabled={props.isDisabled}
        >
          {amount}
        </button>
      ))}
    </div>
  );
};

export default CashButtons;
