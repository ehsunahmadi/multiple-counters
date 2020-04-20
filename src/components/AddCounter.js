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
    const pattern = /^[-+]?(\d+)?([.]?\d{0,1})?$/;
    if (e.target.value === "" || pattern.test(e.target.value)) {
      setStep(e.target.value);
    }
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
              type="text"
              name="step"
              value={step !== 0 ? step : ""}
              onChange={handleStep}
              placeholder="Step"
            />
            {/* <NumberFormat
              decimalScale={1}
              placeholder="Step"
              value={step}
              onValueChange={(values) => {
                const { floatValue } = values;
                return setStep(floatValue);
              }}
              isAllowed={(values) => {
                const { formattedValue, floatValue } = values;
                return formattedValue === "" || floatValue <= 1000000000;
              }}
            /> */}
          </label>

          <button type="submit">Add Counter</button>
        </div>
      </form>
      <Counters steps={steps} />
    </StyledContainer>
  );
};

export default AddCounter;
