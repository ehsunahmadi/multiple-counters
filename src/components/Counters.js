import React from "react";
import Counter from "./Counter";
import styled from "styled-components";

const StyledContainer = styled.div`
  /* display: flex;
  flex-wrap: wrap;
  justify-content: center; */
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-template-rows: repeat(3, 300px [col-start]);
  grid-gap: 1rem;
`;

const Counters = ({ steps }) => {
  return (
    <StyledContainer>
      {steps.map((step, index) => (
        <Counter step={step} key={index} />
      ))}
    </StyledContainer>
  );
};

export default Counters;
