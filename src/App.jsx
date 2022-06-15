import { useState } from "react";
import "./App.css";
import CashButtons from "./components/CashButtons";
import NumberPicker from "./components/NumberPicker";
import TicketSummary from "./components/TicketSummary";
import lotteryIMG from "./images/lottery-png-transparent.png";

function App() {
  const [selectedNumbers, setSelectedNumbers] = useState([]);
  const [canSelectNumbers, setCanSelectNumbers] = useState(true);
  const [total, setTotal] = useState(0);

  const addSelection = (num) => {
    if (selectedNumbers.length < 4) {
      setSelectedNumbers([...selectedNumbers, num]);
    } else if (selectedNumbers.length === 4) {
      setSelectedNumbers([...selectedNumbers, num]);
      setCanSelectNumbers(false);
    }
  };

  const cash = () => {
    let message = "Numbers selected: ";
    selectedNumbers.forEach((number) => (message += " " + number));
    message += "\nAmount: " + total;
    alert(message);
  };

  const removeSelection = (num) => {
    const filteredNumbers = selectedNumbers.filter((number) => number !== num);
    setSelectedNumbers(filteredNumbers);
    setCanSelectNumbers(true);
  };

  const addToTotal = (num) => setTotal(total + num);

  const reset = () => {
    setCanSelectNumbers(true);
    setSelectedNumbers([]);
    setTotal(0);
  };

  const random = () => {
    let randomNumbers = [...selectedNumbers];
    while (randomNumbers.length <= 4) {
      const randomNumber = Math.floor(Math.random() * 20) + 1;
      if (!randomNumbers.includes(randomNumber)) {
        randomNumbers.push(randomNumber);
      }
    }

    setSelectedNumbers(randomNumbers);
    setCanSelectNumbers(false);
  };

  return (
    <div className="container">
      <h1>WHE WHE on D'Avenue</h1>
      <div>
        <img src={lotteryIMG} alt="" />
      </div>
      <CashButtons onAddMoney={addToTotal} isDisabled={canSelectNumbers} />
      <NumberPicker
        numbers={selectedNumbers}
        onAddNumber={addSelection}
        isDisabled={!canSelectNumbers}
        onClear={reset}
        onRandom={random}
        onCash={cash}
      />
      <TicketSummary
        total={total}
        numbers={selectedNumbers}
        onRemoveNumber={removeSelection}
      />
    </div>
  );
}

export default App;
