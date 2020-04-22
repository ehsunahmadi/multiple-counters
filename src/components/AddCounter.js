import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Counters from "./Counters";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  .form-container {
    position: relative;
    width: 100%;
    height: 30vh;
    form {
      display: flex;
      justify-content: center;
      height: 100px;
      width: 30%;
      min-width: 250px;
      position: absolute;
      top: 20vh;
      left: 50%;
      transform: translate(-50%, -50%);

      div {
        width: 100%;
        position: relative;
        display: flex;
        font-size: 20px;

        input {
          width: 100%;
          border: 3px solid #4f98d9;
          border-right: none;
          padding: 5px;
          height: 50px;
          border-radius: 5px 0 0 5px;
          outline: none;
          font-size: 2rem;
          color: #9dbfaf;
        }
        input:focus,
        input:active {
          color: #4f98d9;
        }

        button {
          width: 300px;
          height: 50px;
          border: 1px solid #4f98d9;
          background: #4f98d9;
          text-align: center;
          color: #fff;
          border-radius: 0 5px 5px 0;
          cursor: pointer;
          font-size: 2rem;
        }
      }
    }
  }
`;

const AddCounter = () => {
  const [step, setStep] = useState("");
  const [steps, setSteps] = useState([]);

  function handleStep(e) {
    if (e.target.value >= 9999999 || e.target.value <= -999999) {
      return console.error("number is too big!");
    }
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
      <div className="form-container">
        <form onSubmit={handleSubmit} noValidate>
          <div>
            <input
              type="text"
              name="step"
              value={step}
              onChange={handleStep}
              placeholder="Step"
              autoFocus
              autoComplete="off"
            />
            <button type="submit">Add Counter</button>
          </div>
        </form>
      </div>
      <Counters steps={steps} />
    </StyledContainer>
  );
};

export default AddCounter;
