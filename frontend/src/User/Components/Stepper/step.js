import React from "react";

const Step = (props) => {
  return (
    <div class="step">
      {props.dis ? (
        <button class="step-trigger" disabled>
          <span class="bs-stepper-circle" />
          <span class="bs-stepper-label">{props.title}</span>
        </button>
      ) : (
        <button class="step-trigger">
          <span class="bs-stepper-circle" />
          <span class="bs-stepper-label">{props.title}</span>
        </button>
      )}
    </div>
  );
};

export default Step;
