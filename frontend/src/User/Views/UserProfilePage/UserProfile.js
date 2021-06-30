import React, { useState } from "react";
// import "../../../App.css";
import "../../../App.css";
import About from "./About";
import Inbox from "./Inbox";
const UserProfile = () => {
  const [togBtn, setTogBtn] = useState("about");

  const aboutUser = [
    { id: "1", title: "userID", info: "UID1" },
    { id: "2", title: "Name", info: "User1" },
  ];
  return (
    <div>
      <div class="container profile">
        <form method="post">
          <div class="row" style={{ maxHeight: "150px" }}>
            {/* ======================== Profile photo sector ======================== */}
            <div class="col-md-4" style={{ paddingLeft: "60px" }}>
              <h5>User name here</h5>
              <h6>User role here</h6>
            </div>
            {/* ======================== Profile summary sector ======================== */}
            <div class="col-md-6">
              <div class="profile-summary">
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                  <li class="nav-item" style={{ marginRight: "10px" }}>
                    <a
                      class="nav-link active"
                      id="about"
                      style={{ cursor: "pointer" }}
                      onClick={(e) => setTogBtn("about")}
                    >
                      About
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link active"
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
            <div class="col-md-2">
              <input
                type="submit"
                class="profile-edit-btn"
                name="btnAddMore"
                value="Edit Profile"
              />
            </div>
          </div>
          {/* ======================== Side Pannel ======================== */}
          <div class="row">
            <div class="col-md-4">
              <div class="profile-work">
                <p>Some links here</p>
                <a href="">Events</a>
                <br />
                <a href="">Material</a>
                <br />
              </div>
            </div>
            {/* ======================== Profile details ======================== */}
            <div
              class="col-md-7"
              style={{ backgroundColor: "#FFFFFF", minHeight: "200px" }}
            >
              <div class="tab-content inbox-tab" id="myTabContent">
                {togBtn == "about" && <About about={aboutUser} />}
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
