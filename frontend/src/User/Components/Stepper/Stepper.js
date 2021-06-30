import React, { useState } from "react";
import "../../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bs-stepper/dist/css/bs-stepper.min.css";
import Stepper from "bs-stepper";
import Step from "./step";
const Stepper = (props) => {
  const title1 = props.data.title1;
  const title2 = props.data.title2;
  return (
    <div id="stepper1" class="bs-stepper">
      <div class="bs-stepper-header">
        <Step title="Title 1" />
        <div class="line"></div>
        <Step title="Title 1" />
        <div class="line"></div>
        <Step title="Title 1" />
      </div>
    </div>
  );
};
export default Stepper;
