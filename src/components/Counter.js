import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
const StyledCounter = styled.div`
  /* margin: 2rem; */
  /* padding-bottom: 1rem; */
  display: flex;
  /* min-width: 200px; */
  flex-direction: column;
  align-items: center;
  align-content: space-around;
  background: #eee;

  .bar {
    border-bottom: 1px black solid;
    width: 100%;
    height: 20%;
    p {
      /* text-align: center; */
    }
  }
  .count-wrapper {
    height: 50%;
    margin: auto;
    h2 {
      text-align: center;
    }
  }
  .button-wrapper {
    width: 100%;
    height: 30%;
    margin: auto;
    text-align: center;
    button {
      display: inline-block;
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
        <p>Step: {step}</p>
      </div>
      <div className="count-wrapper">
        <h2>{count}</h2>
      </div>
      <div className="button-wrapper">
        <button type="button" onClick={handleClick}>
          Run
        </button>
      </div>
    </StyledCounter>
  );
};

Counter.propTypes = {
  step: PropTypes.number.isRequired,
};

export default Counter;
