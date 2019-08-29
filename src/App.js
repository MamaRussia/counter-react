import React, { useState } from "react";
import "./App.css";
import Increase from "./components/IncreaseBtn";
import Decrease from "./components/DecreaseBtn";
import Reset from "./components/Reset";

function App() {
  let [count, setCount] = useState(0);
  const incrementCount = increment => {
    setCount(count + increment);
  };
  const decreaseCount = increment => {
    setCount(count + increment);
  };

  const resetCount = () => {
    setCount((count = 0));
  };
  return (
    <div className="App">
      <Increase increment={1} onClickFunction={incrementCount} />
      <Increase increment={10} onClickFunction={incrementCount} />
      <Increase increment={100} onClickFunction={incrementCount} />
      <Increase increment={1000} onClickFunction={incrementCount} />
      <div></div>
      <Decrease increment={-1} onClickFunction={decreaseCount} />
      <Decrease increment={-10} onClickFunction={decreaseCount} />
      <Decrease increment={-100} onClickFunction={decreaseCount} />
      <Decrease increment={-1000} onClickFunction={decreaseCount} />
      <div></div>
      <Reset onClickFunction={resetCount} />
      <div></div>
      <span>{count}</span>
      <div></div>
    </div>
  );
}

export default App;
