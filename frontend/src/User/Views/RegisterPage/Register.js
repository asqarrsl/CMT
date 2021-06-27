import React from "react";
import "../../../App.css";
import SuccessButton from "../../Components/Button/SuccessButton";
import "bootstrap/dist/css/bootstrap.min.css";
import "bs-stepper/dist/css/bs-stepper.min.css";
import Stepper from "bs-stepper";

const Register = () => {
  const check = () => {
    console.log("hi");
  };

  const AccountData = () => {
    return <div></div>;
  };

  return (
    <div class="rootBody">
      <div class="customCardOne">
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
                type="mobile"
                id="text"
                class="form-control"
                placeholder="Mobile"
              />
            </div>

            <select class="form-dropdown" aria-label="Default select example">
              <option selected>Choose account type</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>

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
            <div class="form-group">
              <SuccessButton text="Success" onClick={check} position="center" />
            </div>
          </form>
        </div>
        <div class="card-footer">
          <div class="form-group">
            <a href="#" style={{ color: "#1286C1", fontSize: "14px" }}>
              Don't have an account? Sign Up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
