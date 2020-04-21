import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Counter from "./Counter";

const StyledContainer = styled.div`
  /* display: flex;
  flex-wrap: wrap;
  justify-content: center; */
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-auto-rows: 150px;
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

Counters.propTypes = {
  steps: PropTypes.array.isRequired,
};

export default Counters;
