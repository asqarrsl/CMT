import React, { useState } from "react";
import "../../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bs-stepper/dist/css/bs-stepper.min.css";
import Stepper from "bs-stepper";

<div id="stepper1" class="bs-stepper">
  <div class="bs-stepper-header">
    <div class="step">
      <button class="step-trigger" styles={{ color: "blue" }}>
        <span class="bs-stepper-circle" />
        <span class="bs-stepper-label" styles={{ color: "blue" }}>
          Event Data
        </span>
      </button>
    </div>
    <div class="line"></div>
    <div class="step">
      <button class="step-trigger" disabled>
        <span class="bs-stepper-circle" />
        <span class="bs-stepper-label">Materials Data</span>
      </button>
    </div>
    <div class="line"></div>
    <div class="step">
      <button class="step-trigger" disabled>
        <span class="bs-stepper-circle" />
        <span class="bs-stepper-label">Confirmation</span>
      </button>
    </div>
  </div>
</div>;
