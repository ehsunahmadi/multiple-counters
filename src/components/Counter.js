import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { ReactComponent as Run } from "./play-button.svg";

const StyledCounter = styled.div`
  /* margin: 2rem; */
  /* padding-bottom: 1rem; */
  display: flex;
  /* min-width: 200px; */
  flex-direction: column;
  align-items: center;
  align-content: space-around;
  position: relative;
  margin: 2rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  position: relative;
  overflow: hidden;
  background: #5399d7;
  box-shadow: 0 1rem 1rem rgba(black, 0.05);
  border-radius: 0.5em;
  max-width: 100%;
  background-image: linear-gradient(140deg, #ecc68a, transparent 70%);
  .bar {
    height: 20%;
    padding: 1rem;
    width: 100%;
    h4 {
      font-size: 1.4rem;
      border-bottom: 2px #333 solid;

      /* text-align: center; */
    }
  }
  .count-wrapper {
    height: 40%;
    margin: 0 auto;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    h2 {
      font-size: 24px;
      text-align: center;
      color: black;
    }
  }
  .button-wrapper {
    width: 100%;
    height: 35%;
    margin: auto;
    text-align: center;
    button {
      display: inline-block;
      /* background-color: #23b7ce; */
      height: 80px;
      width: 80px;
      border: none;
      background: none;
      cursor: pointer;
      &:focus {
        outline: 2px dashed #17171d;
      }
      &:hover {
        svg {
          transform: scale(1.1);
        }
      }
      &::-moz-focus-inner {
        border: 0;
      }
      &:first-child {
        outline: none;
        transition: transform 0.15s linear;
      }
    }
  }
`;

const Counter = ({ step }) => {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(+(count + step).toFixed(1));
  }

  return (
    <StyledCounter>
      <div className="bar">
        <h4>STEP: {step}</h4>
      </div>
      <div className="count-wrapper">
        <h2>{count}</h2>
      </div>
      <div className="button-wrapper">
        <button type="button" onClick={handleClick}>
          <Run />
        </button>
      </div>
    </StyledCounter>
  );
};

Counter.propTypes = {
  step: PropTypes.number.isRequired,
};

export default Counter;
