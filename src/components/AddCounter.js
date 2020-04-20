import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Counters from "./Counters";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  form {
    display: flex;
    justify-content: center;
    margin: 50px 0;
  }
`;

const AddCounter = () => {
  const [step, setStep] = useState("");
  const [steps, setSteps] = useState([]);

  function handleStep(e) {
    if (!e.target.value.match("^[0-9]*$")) {
      console.log(e.target.value);
      setStep(e.target.value);
    }
    // const roundedValue = Math.floor(e.target.value * 10) / 10;
    // setStep(roundedValue);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (step) {
      setSteps([...steps, parseFloat(step)]);
      setStep("");
    }
  }

  useEffect(() => {
    console.log(steps);
  }, [steps]);

  return (
    <StyledContainer>
      <form onSubmit={handleSubmit} noValidate>
        <div>
          <label htmlFor="step">
            <input
              type="string"
              name="step"
              value={step}
              onChange={handleStep}
              placeholder="Step"
            />
          </label>
          <button type="submit">Add Counter</button>
        </div>
      </form>
      <Counters steps={steps} />
    </StyledContainer>
  );
};

export default AddCounter;
