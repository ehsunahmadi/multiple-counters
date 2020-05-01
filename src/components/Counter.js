import React, { useState } from "react";
import PropTypes from "prop-types";
import { ReactComponent as Run } from "./play-button.svg";

// Child of Counters component, recieves a number with props and renders a Counter using it as its step, increments/decrements the value keeping it in a local state
const Counter = ({ step }) => {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(+(count + step).toFixed(1));
  }

  return (
    <div className="counter-container">
      <div className="bar">
        <h3 className="step">STEP: {step}</h3>
      </div>
      <div className="count-wrapper">
        <h2 className="count">{count}</h2>
      </div>
      <div className="button-wrapper">
        <button className="run-button" type="button" onClick={handleClick}>
          <Run />
        </button>
      </div>
    </div>
  );
};

Counter.propTypes = {
  step: PropTypes.number.isRequired,
};

export default Counter;
