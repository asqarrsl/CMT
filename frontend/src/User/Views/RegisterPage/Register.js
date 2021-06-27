import React, { useState } from "react";
import "../../../App.css";
import SuccessButton from "../../Components/Button/SuccessButton";
import "bootstrap/dist/css/bootstrap.min.css";
import "bs-stepper/dist/css/bs-stepper.min.css";
import Stepper from "bs-stepper";

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
    <div>
      <div id="stepper1" class="bs-stepper">
        <div class="bs-stepper-header">
          <div class="step">
            <button class="step-trigger" styles={{ color: "blue" }}>
              <span class="bs-stepper-circle" />
              <span class="bs-stepper-label" styles={{ color: "blue" }}>
                Account Data
              </span>
            </button>
          </div>
          <div class="line"></div>
          <div class="step">
            <button class="step-trigger" disabled>
              <span class="bs-stepper-circle" />
              <span class="bs-stepper-label">User Data</span>
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
      </div>
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
    </div>
  );
  const UserData = (
    <div>
      <div id="stepper1" class="bs-stepper">
        <div class="bs-stepper-header">
          <div class="step">
            <button class="step-trigger" disabled>
              <span class="bs-stepper-circle" />
              <span class="bs-stepper-label">Account Data</span>
            </button>
          </div>
          <div class="line"></div>
          <div class="step">
            <button class="step-trigger" styles={{ color: "blue" }}>
              <span class="bs-stepper-circle" />
              <span class="bs-stepper-label" styles={{ color: "blue" }}>
                User Data
              </span>
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
      </div>
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
    </div>
  );

  const ConfirmData = (
    <div>
      <div id="stepper1" class="bs-stepper">
        <div class="bs-stepper-header">
          <div class="step">
            <button class="step-trigger" disabled>
              <span class="bs-stepper-circle" />
              <span class="bs-stepper-label">Account Data</span>
            </button>
          </div>
          <div class="line"></div>
          <div class="step">
            <button class="step-trigger" disabled>
              <span class="bs-stepper-circle" />
              <span class="bs-stepper-label">User Data</span>
            </button>
          </div>
          <div class="line"></div>
          <div class="step">
            <button class="step-trigger" styles={{ color: "blue" }}>
              <span class="bs-stepper-circle" />
              <span class="bs-stepper-label" styles={{ color: "blue" }}>
                Confirmation
              </span>
            </button>
          </div>
        </div>
      </div>

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
    </div>
  );
  return (
    <div class="rootBody">
      {step === 0
        ? AccountData
        : step === 1
        ? UserData
        : step === 2
        ? ConfirmData
        : null}
    </div>
  );
};

export default Register;
