import React, { useState } from "react";
import "../../../App.css";
import SuccessButton from "../../Components/Button/SuccessButton";
import "bootstrap/dist/css/bootstrap.min.css";
import "bs-stepper/dist/css/bs-stepper.min.css";
import Step from "../../Components/Stepper/step";

const Register = () => {
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

  const AccountData = (
    <div class="customCardOne" style={{ marginLeft: "70px" }}>
      <div class="card-header">
        <center>
          <h3> Register </h3>
        </center>
      </div>
      <div class="card-body"></div>
      <form>
        <div class="form-group">
          <input
            type="text"
            id="name"
            class="form-control"
            placeholder="Name"
            required
          />
        </div>
        <div class="form-group">
          <input
            type="email"
            id="email"
            class="form-control"
            placeholder="Email"
            required
          />
        </div>

        <div class="form-group">
          <input
            type="password"
            id="password"
            class="form-control"
            placeholder="Password"
            required
          />
        </div>

        <div class="form-group">
          <input
            type="mobile"
            id="text"
            class="form-control"
            placeholder="Mobile"
            required
          />
        </div>

        <select
          class="form-dropdown"
          aria-label="Default select example"
          required
        >
          <option selected>Choose account type</option>
          <option value="Researcher">Researcher</option>
          <option value="Workshop Conductor">WorkshopConductor</option>
          <option value="Participant">Participant</option>
        </select>
        <div class="form-group">
          <SuccessButton text="Next" onClick={submit} position="center" />
        </div>
      </form>
      <div class="card-footer"></div>
    </div>
  );
  const UserData = (
    <div class="customCardOne" style={{ marginLeft: "70px" }}>
      <div class="card-header">
        <center>
          <h3> Register </h3>
        </center>
      </div>
      <div class="card-body">
        <form>
          <div class="form-group">
            <input
              type="text"
              id="qualification"
              class="form-control"
              placeholder="Qualification"
              required
            />
          </div>

          <div class="form-group">
            <input
              type="text"
              id="designation"
              class="form-control"
              placeholder="Designation"
              required
            />
          </div>

          <div class="form-group">
            <input
              type="text"
              id="affiliation"
              class="form-control"
              placeholder="Affiliation"
              required
            />
          </div>
          <div class="form-group">
            <SuccessButton text="Next" onClick={submit} position="center" />
          </div>
        </form>
        <div class="card-footer"></div>
      </div>
    </div>
  );

  const ConfirmData = (
    <div style={{ width: "100%", display: "table" }}>
      <div style={{ display: "table-row" }}>
        <div style={{ width: "600px", display: "table-cell" }}>
          <div class="customCardOne" style={{ marginLeft: "70px" }}>
            <div class="card-header">
              <center>
                <h3> Register </h3>
              </center>
            </div>
            <div class="card-body"></div>
            <form>
              <div class="form-group">
                <input
                  type="text"
                  id="name"
                  class="form-control"
                  placeholder="Name"
                />
              </div>
              <div class="form-group">
                <input
                  type="email"
                  id="email"
                  class="form-control"
                  placeholder="Email"
                />
              </div>

              <div class="form-group">
                <input
                  type="password"
                  id="password"
                  class="form-control"
                  placeholder="Password"
                />
              </div>

              <div class="form-group">
                <input
                  type="text"
                  id="mobile"
                  class="form-control"
                  placeholder="Mobile"
                />
              </div>

              <div class="form-group">
                <input
                  type="text"
                  id="accountType"
                  class="form-control"
                  placeholder="Account Type"
                />
              </div>
            </form>
            <div class="card-footer"></div>
          </div>
        </div>
        <div style={{ display: "table-cell" }}>
          <div class="customCardOne" style={{ marginLeft: "70px" }}>
            <div class="card-header">
              <center>
                <h3> Register </h3>
              </center>
            </div>
            <div class="card-body">
              <form>
                <div class="form-group">
                  <input
                    type="text"
                    id="qualification"
                    class="form-control"
                    placeholder="Qualification"
                  />
                </div>

                <div class="form-group">
                  <input
                    type="text"
                    id="designation"
                    class="form-control"
                    placeholder="Designation"
                  />
                </div>

                <div class="form-group">
                  <input
                    type="text"
                    id="affiliation"
                    class="form-control"
                    placeholder="Affiliation"
                  />
                </div>
              </form>
              <div class="card-footer"></div>
            </div>
          </div>

          <div class="form-group" style={{ paddingLeft: "75px" }}>
            <SuccessButton text="Reset" onClick={reset} position="center" />

            <SuccessButton text="Submit" onClick={done} position="center" />
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <div class="rootBody">
      <div>
        <div id="stepper1" class="bs-stepper" style={{ maxWidth: "250px" }}>
          <div class="bs-stepper-header">
            {step == 0 ? (
              <Step title="Account Data" dis="false" />
            ) : (
              <Step title="Account Data" dis="true" />
            )}
            <div class="line"></div>
            {step == 1 ? (
              <Step title="User Data" dis="false" />
            ) : (
              <Step title="User Data" dis="true" />
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
          ? AccountData
          : step === 1
          ? UserData
          : step === 2
          ? ConfirmData
          : null}
      </div>
    </div>
  );
};

export default Register;
