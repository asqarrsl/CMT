import React, { useState } from "react";
import "../../../App.css";
import SuccessButton from "../../Components/Button/SuccessButton";
import Step from "../../Components/Stepper/step";
import DatetimeRangePicker from "react-datetime-range-picker";

const WorkshopMgt = () => {
  const check = () => {
    console.log("hey");
  };

  const [step, setStep] = useState(0);
  let submit = (e) => {
    e.preventDefault();
    setStep(step + 1);
  };

  let reset = (e) => {
    e.preventDefault();
    setStep(0);
  };

  let done = (e) => {
    e.preventDefault();
    console.log(done);
  };

  const Confirmation = (
    <div
      style={{
        margin: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <h4
          style={{
            fontWeight: "bold",
            color: "#117DFF",
          }}
        >
          Data submitted for approval
        </h4>
        <p
          style={{
            fontWeight: "bold",
            color: "#777777",
          }}
        >
          A notification will be sent if approved
        </p>
        <SuccessButton text="Add new" onClick={reset} position="center" />
        <SuccessButton text="Done" onClick={done} position="center" />
      </div>
    </div>
  );

  const EventData = (
    <div>
      <form method="post">
        <input
          type="text"
          id="eventName"
          class="form-control"
          placeholder="Workshop name"
          style={{ maxWidth: "400px", margin: "10px" }}
          required
        />
        <input
          type="text"
          id="eventVenue"
          class="form-control"
          placeholder="Venue link"
          style={{ maxWidth: "400px", margin: "10px" }}
          required
        />
        <textarea
          type="text"
          id="eventDescription"
          class="form-control"
          placeholder="Workshop description"
          style={{ maxWidth: "400px", margin: "10px" }}
          required
        />
        <label for="from" class="addFile">
          Date and duration
        </label>
        <div
          style={{
            maxWidth: "400px",
            margin: "10px",
          }}
        >
          <DatetimeRangePicker />
        </div>

        <input
          type="file"
          id="wsCover"
          class="hidden"
          placeholder="Workshop cover photo"
          required
        />
        <label for="wsCover" class="addFile">
          Submit Workshop cover photo -- click here
        </label>
        <div style={{ float: "right", marginBottom: "10px" }}>
          <SuccessButton text="Submit" onClick={submit} />
        </div>
      </form>
    </div>
  );

  const MaterialData = (
    <div>
      <form method="post">
        <input
          type="text"
          id="materialName"
          class="form-control"
          placeholder="Material name"
          style={{ maxWidth: "400px", margin: "10px" }}
          required
        />
        <input
          type="text"
          id="tags"
          class="form-control"
          placeholder="Tags"
          style={{ maxWidth: "400px", margin: "10px" }}
          required
        />

        <input
          type="file"
          id="proporsal"
          class="hidden"
          placeholder="Proporsal"
          required
        />
        <label for="proporsal" class="addFile">
          Submit proporsal pdf -- click here
        </label>

        <input
          type="file"
          id="materialCover"
          class="hidden"
          placeholder="Presentation photo"
          required
        />
        <label for="materialCover" class="addFile">
          Presentation cover photo -- click here
        </label>

        <input
          type="file"
          id="presentation"
          class="hidden"
          placeholder="Presentation"
          required
        />
        <label for="presentation" class="addFile">
          Submit Presentation -- click here
        </label>

        <div style={{ float: "right", marginBottom: "10px" }}>
          <SuccessButton text="Submit" onClick={submit} />
        </div>
      </form>
    </div>
  );

  return (
    <div class="rootBody">
      <div class="workshopForm">
        <h4
          style={{
            fontWeight: "bold",
            color: "#004BB0",
            padding: "20px",
          }}
        >
          Workshop
        </h4>
        <div class="workshopFormInput">
          <div id="stepper1" class="bs-stepper">
            <div class="bs-stepper-header">
              {step == 0 ? (
                <Step title="Event Data" dis="false" />
              ) : (
                <Step title="Event Data" dis="true" />
              )}
              <div class="line"></div>
              {step == 1 ? (
                <Step title="Material Data" dis="false" />
              ) : (
                <Step title="Material Data" dis="true" />
              )}
              <div class="line"></div>
              {step == 2 ? (
                <Step title="Confirmation" dis="false" />
              ) : (
                <Step title="Confirmation" dis="true" />
              )}
            </div>
          </div>
          {step === 0
            ? EventData
            : step === 1
            ? MaterialData
            : step === 2
            ? Confirmation
            : null}
        </div>
      </div>
    </div>
  );
};

export default WorkshopMgt;
