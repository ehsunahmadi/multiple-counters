import React, { useState } from "react";
import styled from "styled-components";

const StyledCounter = styled.div`
  /* margin: 2rem; */
  padding-bottom: 1rem;
  display: flex;
  /* min-width: 200px; */
  flex-direction: column;
  align-items: center;
  align-content: space-between;
  background: #eee;

  .bar {
    border-bottom: 1px black solid;
    width: 100%;
    p {
      /* text-align: center; */
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
      <h1>{count}</h1>
      <button type="button" onClick={handleClick}>
        Run
      </button>
    </StyledCounter>
  );
};

export default Counter;
