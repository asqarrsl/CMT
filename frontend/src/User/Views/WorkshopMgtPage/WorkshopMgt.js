import React, { useState } from "react";
import "../../../App.css";
import SuccessButton from "../../Components/Button/SuccessButton";
import WorkshopCard from "./workshopCard";

const activeWorkshops = [
  { id: "2", name: "name1", description: "UID1   lalala" },
  { id: "3", name: "name1", description: "UID1   lalala" },
  { id: "4", name: "name2", description: "User1    lalallala" },
  { id: "5", name: "name1", description: "UID1   lalala" },
  { id: "6", name: "name1", description: "UID1   lalala" },
];

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

  return (
    <div class="container workshopMgt">
      <div class="workshopForm">
        <h4
          style={{
            fontWeight: "bold",
            color: "#004BB0",
            padding: "20px",
          }}
        >
          Create workshop
        </h4>
        <div class="workshopFormInput">
          <form method="post">
            <input
              type="text"
              id="name"
              class="form-control"
              placeholder="Workshop name"
              style={{ maxWidth: "400px", margin: "10px" }}
              required
            />
            <textarea
              type="text"
              id="description"
              class="form-control"
              placeholder="Workshop description"
              style={{ maxWidth: "400px", margin: "10px" }}
              required
            />
            <input
              type="file"
              id="cover"
              class="hidden"
              placeholder="Submit cover photo"
              required
            />
            <label for="cover" class="addFile">
              Submit cover photo
            </label>

            <input
              type="file"
              id="proporsal"
              class="hidden"
              placeholder="Submit proporsal"
              style={{ maxWidth: "400px", margin: "10px" }}
              required
            />
            <label for="proporsal" class="addFile">
              Submit proporsal document
            </label>

            <input
              type="file"
              id="presentation"
              class="hidden"
              placeholder="Submit presentation"
              style={{ maxWidth: "400px", margin: "10px" }}
              required
            />
            <label for="presentation" class="addFile">
              Submit presentation
            </label>
            <div style={{ float: "right", marginBottom: "10px" }}>
              <SuccessButton text="Submit" onClick={check} />
            </div>
          </form>
        </div>
      </div>
      {/* ======================== Workshop details ======================== */}
      <div class="workShopEntries">
        {activeWorkshops.map((events) => (
          <WorkshopCard data={events} />
        ))}
      </div>
    </div>
  );
};

export default WorkshopMgt;
