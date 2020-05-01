import React, { useState } from "react";
import Counters from "./Counters";

//Parent Components that contains the form and its states and also wraps the counters sending it the array of every submitted steps with props
const AddCounter = () => {
  const [step, setStep] = useState("");
  const [steps, setSteps] = useState([]);
  const [error, setError] = useState("");

  // controls input value
  function handleStep(e) {
    const { value } = e.target;
    // blocks too-big or too-small inputs, taking advantage of js' dynamic types
    if (value >= 10000) {
      console.error(value);
      return setError("Try entering a number smaller than 10,000");
    }
    if (value <= -10000) {
      console.error(value);
      return setError("Try entering a number biger than -10,000");
    }

    // checks for a string representation of a number with one decimal to set the input value
    const pattern = /^[-+]?(\d+)?([.]?\d{0,1})?$/;
    if (value === "" || pattern.test(value)) {
      setStep(value);
    } else {
      return setError("Try entering a number instead!");
    }
  }

  // sets new input value to the steps array to send it to Counters component with props
  function handleSubmit(e) {
    e.preventDefault();
    // validation after input entry. makes sure zero or empty step doesn't trigger the event
    if (!step) {
      return setError("Try entering a number first!");
    }
    if (parseFloat(step) === 0) {
      return setError("Try entering a number other than 0");
    }
    // turns the input string into a number and pushes it steps state
    else {
      setSteps([...steps, parseFloat(step)]);
      setStep("");
    }
  }

  // reads the error from the error state and clears it up after. would be conditionally rendered inside the component using && operator.
  const Error = () => {
    setTimeout(() => {
      setError("");
    }, 3600);
    return <p className="error">{error}</p>;
  };

  return (
    <div className="main-container">
      <div className="form-container">
        <form onSubmit={handleSubmit} noValidate>
          <div className="add-box">
            <input
              type="text"
              name="step"
              value={step}
              onChange={handleStep}
              placeholder="Step..."
              autoFocus
              autoComplete="off"
              className={error && "alarm"}
            />
            <button className="add-button" type="submit">
              Add Counter
            </button>
          </div>
          {error && <Error />}
        </form>
      </div>
      <Counters steps={steps} />
    </div>
  );
};

export default AddCounter;
