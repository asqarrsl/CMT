import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../../App.css";
import About from "./About";
import Inbox from "./Inbox";
import { getUserId, getToken } from "../../../Utils/Common";

const UserProfile = (props) => {
  const [togBtn, setTogBtn] = useState("about");
  const [users, setUsers] = useState([]);
  const [user_id, setUser_ID] = useState();
  const token = getToken();

  useEffect(() => {
    setUser_ID(getUserId());
    // console.log(user_id);
    axios
      .get(`http://localhost:3000/users/${user_id}`)
      .then((response) => {
        // console.log(respose);
        setUsers(response.data.Users);
        // console.log(users);
      })
      .catch((error) => {
        // console.log(error);
      });
  }, []);

  const userDetails = [
    { id: "0", title: "Name", info: users.name },
    { id: "1", title: "Email", info: users.email },
    { id: "2", title: "Mobile", info: users.mobile },
    { id: "3", title: "Designation", info: users.designation },
    { id: "4", title: "Affiliation", info: users.affiliation },
  ];

  return (
    <div>
      <div className="container profile">
        <form method="post">
          <div className="row" style={{ maxHeight: "150px" }}>
            {/* ======================== Profile photo sector ======================== */}
            <div className="col-md-4" style={{ paddingLeft: "60px" }}>
              <h5>User name here</h5>
              <h6>User role here</h6>
            </div>
            {/* ======================== Profile summary sector ======================== */}
            <div className="col-md-6">
              <div className="profile-summary">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item" style={{ marginRight: "10px" }}>
                    <a
                      className="nav-link active"
                      id="about"
                      style={{ cursor: "pointer" }}
                      onClick={(e) => setTogBtn("about")}
                    >
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="inbox"
                      style={{ cursor: "pointer" }}
                      onClick={(e) => setTogBtn("inbox")}
                    >
                      Inbox
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* ======================== Edit profile button ======================== */}
            <div className="col-md-2">
              <input
                type="submit"
                className="profile-edit-btn"
                name="btnAddMore"
                value="Edit Profile"
              />
            </div>
          </div>
          {/* ======================== Side Pannel ======================== */}
          <div className="row">
            <div className="col-md-4">
              <div className="profile-work">
                <p>Some links here</p>
                <a href="">Events</a>
                <br />
                <a href="">Material</a>
                <br />
              </div>
            </div>
            {/* ======================== Profile details ======================== */}
            <div
              className="col-md-7"
              style={{ backgroundColor: "#FFFFFF", minHeight: "200px" }}
            >
              <div className="tab-content inbox-tab" id="myTabContent">
                {togBtn == "about" && <About about={userDetails} />}
                {togBtn == "inbox" && <Inbox />}
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserProfile;
