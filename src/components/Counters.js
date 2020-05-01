import React from "react";
import PropTypes from "prop-types";
import Counter from "./Counter";

// Child of AddCounter component, gets the array of steps with props, loops over them and renders a Counter component for each.
const Counters = ({ steps }) => {
  return (
    <div className="counters-container">
      {steps.map((step, index) => (
        <Counter step={step} key={index} />
      ))}
    </div>
  );
};

Counters.propTypes = {
  steps: PropTypes.array.isRequired,
};

export default Counters;
