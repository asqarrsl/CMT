import React, { useState } from "react";
import "../../../App.css";
import SuccessButton from "../../Components/Button/SuccessButton";
import axios from "axios";

const check = () => {
  console.log("hi");
};

const Login = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [formValid, setFormValid] = useState(false);
  const [formError, setFormError] = useState("");
  const [init, setinit] = useState(true);

  const checkNull = (value) => {
    if (value.trim() == null || value.trim() == "") {
      return false;
    } else {
      return true;
    }
  };

  const onValidate = () => {
    if (checkNull(username) && checkNull(password)) {
      setFormValid(true);
      return true;
    } else {
      setFormValid(false);
      return false;
    }
  };

  const submit = (e) => {
    e.preventDefault();
    setinit(false);
    if (onValidate) {
      let user = {
        username,
        password,
      };
      axios
        .post("http://localhost:3000/users/login", user)
        .then((response) => {
          console.log(response);
          alert("Successfully logged");

          // if (response.data.role == "Participants") {
          //   window.location = `/`;
          // } else if (response.data.role == "Admin") {
          //   window.location = `/admin`;
          // } else if (response.data.role == "Reviewer") {
          //   window.location = `/reviewer`;
          // } else if (response.data.role == "Editor") {
          //   window.location = `/editor`;
          // } else {
          //   window.location = `/`;
          // }
        })
        .catch((error) => {
          if (error.response) {
            setFormError(error.response.data.message);
            console.log(error.response.data.message);
            console.log(error.response);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log("Error", error.message);
          }
        });
    } else {
      console.log(formValid);
      setError("Invalid");
    }
  };

  return (
    <div class="rootBody">
      <div class="customCardOne">
        <div class="card-header">
          <center>
            <h3>Sign In</h3>
          </center>
        </div>
        <div class="card-body">
          <form onSubmit={submit} method="POST">
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                placeholder="Username"
                style={{ border: "1", borderColor: "#1286C1" }}
                onChange={(event) => setUsername(event.target.value)}
              />
            </div>
            <div class="form-group">
              <input
                type="password"
                class="form-control"
                placeholder="Password"
                style={{ border: "1", borderColor: "#1286C1" }}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <div class="form-group">
              <SuccessButton text="Login" type="submit" position="center" />
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
