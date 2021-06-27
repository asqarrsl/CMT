import React from "react";
import "../../../App.css";
import SuccessButton from "../../Components/Button/SuccessButton";

const check = () => {
  console.log("hi");
};

const Login = () => {
  return (
    <div class="rootBody">
      <div class="customCardOne">
        <div class="card-header">
          <center>
            <h3>Sign In</h3>
          </center>
        </div>
        <div class="card-body">
          <form>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                placeholder="Username"
                style={{ border: "1", borderColor: "#1286C1" }}
              />
            </div>
            <div class="form-group">
              <input
                type="password"
                class="form-control"
                placeholder="Password"
                style={{ border: "1", borderColor: "#1286C1" }}
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

export default Login;
