import React from "react";
import { FaWindowClose } from "react-icons/fa";

const TicketSummary = (props) => {
  return (
    <div>
      <div>
        <h3>Numbers Selected</h3>
        {props.numbers.map((number, index) => (
          <div key={index}>
            <p>Mark: {number}</p>
            <FaWindowClose onClick={() => props.onRemoveNumber(number)} />
          </div>
        ))}
        <h3>Total: ${props.total}</h3>
      </div>
    </div>
  );
};

export default TicketSummary;
