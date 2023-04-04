import "./styles.css";
import { useRef, useState } from "react";

export default function App() {
  const [counter, setCounter] = useState(0);
  const [counterState, setCounterState] = useState("initial");

  const counterRef = useRef(null);

  const startTimer = () => {
    counterRef.current = setInterval(
      () => setCounter((prev) => prev + 1),
      1000
    );
  };

  const stopTimer = () => {
    clearInterval(counterRef.current);
  };

  const handleClick = () => {
    if (counterState === "incrementing") {
      stopTimer();
      setCounterState("initial");
    } else {
      setCounterState("incrementing");
      startTimer();
    }
  };

  const handleReset = () => {
    setCounter(0);
    setCounterState("initial");
    clearInterval(counterRef.current);
  };

  return (
    <div className="App">
      <p>counter: {counter}</p>
      <button onClick={handleClick}>
        {counterState === "incrementing" ? "Pause" : "Start"}
      </button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
