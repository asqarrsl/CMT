import React, { useState, useEffect, useRef } from "react";
import "../../../App.css";
import SuccessButton from "../../Components/Button/SuccessButton";
import Step from "../../Components/Stepper/step";
import DatetimeRangePicker from "react-datetime-range-picker";
import axios from "axios";
import moment from "moment";
const WorkshopMgt = () => {
  const [step, setStep] = useState(1);
  const [presenterId, setPresenterId] = useState("");
  const [formValid, setFormValid] = useState(false);
  const [formError, setFormError] = useState(false);
  const [error, setError] = useState(true);
  const [init, setinit] = useState(true);
  const [useroptions, setUseroptions] = useState([]);
  const [eventoptions, setEventoptions] = useState([]);

  const [eventName, setEventName] = useState("");
  const [description, setDescription] = useState("");
  const [eventType, setEventType] = useState("Workshop");
  const [venue, setVenue] = useState("");
  const [mainImg, setMainImg] = useState();
  const [From, setFrom] = useState("");
  const [To, setTo] = useState("");
  const [isApproved, setIsApproved] = useState("");


  const form = useRef(null)
  const [uid, setUid] = useState();
  const [name, setName] = useState();
  const [tags, setTags] = useState();
  const [descrip, setDescrip] = useState();
  const [images, setImages] = useState();
  const [type, setType] = useState("Workshop");
  const [eventId, setEventId] = useState();
  const [document, setDocument] = useState();
  const [isPaid, setIsPaid] = useState();
  const [now, setNow] = useState();

  const checknull = (value) => {
    if (value.trim() == null || value.trim() == "") {
      return false;
    } else {
      return true;
    }
  };

  var myCurrentDate = new Date();

  let reset = (e) => {
    e.preventDefault();
    setStep(0);
  };

  let done = (e) => {
    e.preventDefault();
    setStep(0);
    window.location = `/`;
    //navigate
  };

  const checkstring = (value) => {
    if (typeof value != "string") {
      return false;
    }
  };

  function validateEmail(value) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(value).toLowerCase());
  }

  const onValidateEvent = () => {
    if (
      checknull(eventName) &&
      checknull(description) &&
      checknull(eventType) &&
      checknull(venue) &&
      checknull(mainImg) &&
      checknull(From) &&
      checknull(To)
    ) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  };

  const onValidateMaterial = () => {
    if (
      checknull(uid) &&
      checknull(name) &&
      checknull(tags) &&
      checknull(description) &&
      checknull(type) &&
      checknull(isPaid) &&
      checknull(isApproved)
    ) {
      setFormValid(true);
      return true;
    } else {
      setFormValid(false);
      return false;
    }
  };

  let submitEvent = (e) => {
    e.preventDefault();
    setStep(step + 1);

    setinit(false);
    onValidateEvent();
    // if (1) {
    if (formValid) {
      let event = {
        eventName,
        description,
        eventType,
        venue,
        image: mainImg,
        duration: {
          From,
          To,
        },
        isApproved,
      };
      // var date = new Date(Date);
      // console.log(event);
      axios
        .post("http://localhost:3000/event", event)
        .then((response) => {
          console.log(response);
          alert("Successfully Inserted");
        })
        .catch((error) => {
          if (error.response) {
            setFormError(error.response.data.message);
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            console.log(error.request);
            console.log(error.request);
          } else {
            console.log("Error", error.message);
          }
          console.log(error.config);
        });
    } else {
      setError("Invalid");
    }
  };

  useEffect(() => {
    axios.get("http://localhost:3000/event").then((response) => {
      // console.log(response.data);
      let data = [];
      response.data.events.map((item, index) => {
        let event = {
          value: item._id,
          label: item.eventName,
        };
        data.push(event);
      });
      setEventoptions(data);
    });

    axios.get("http://localhost:3000/users").then((response) => {
      let data1 = [];
      response.data.Users.map((item, index) => {
        let user = {
          value: item._id,
          label: item.name,
        };
        data1.push(user);
      });
      setUseroptions(data1);
    });
  }, []);

  let submitMaterial = (e) => {
    e.preventDefault();
    setStep(step + 1);

    setinit(false);
    if (onValidateMaterial) {
      let material = {
        uid,
        name,
        tags,
        description,
        // images:[imageSchema],
        type,
        eventId,
        // document[documentSchema],
        isPaid,
        status: isApproved,
      };
      const data = new FormData(form.current)
      // console.log(material);
      axios({
        method: "post",
        url: "http://localhost:3000/material",
        data: data,
        headers: { "Content-Type": "multipart/form-data" },
        })
        .catch((error) => {
          if (error.response) {
            // console.log(error.response.data);
            setFormError(error.response.data.message);
          } else if (error.request) {
            // console.log(error.request);
          } else {
            // console.log("Error", error.message);
          }
        });
    } else {
      setError("Invalid");
    }
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
      <form method="post" onSubmit={submitEvent}>
        <div className="row">
          <div className="mb-3 col-md-12">
            <input
              type="text"
              id="eventName"
              className="form-control"
              placeholder="Workshop name"
              onChange={(event) => setEventName(event.target.value)}
              required
            />
          </div>
          <div className="mb-3 col-md-12">
            <input
              type="text"
              id="eventVenue"
              className="form-control"
              placeholder="Venue link"
              onChange={(event) => setVenue(event.target.value)}
              required
            />
          </div>
          <div className="mb-3 col-md-12">
            <textarea
              type="text"
              id="eventDescription"
              className="form-control"
              placeholder="Workshop description"
              onChange={(event) => setDescription(event.target.value)}
              required
            />
          </div>
        </div>
        <label for="from" className="addFile">
          Date and duration
        </label>
        <div className="row">
          <div className="mb-6 col-md-6">
            <input
              type="datetime-local"
              className="form-control"
              name="fromdate"
              id="fromdate"
              min={moment(myCurrentDate).format("YYYY-MM-DDTkk:mm")}
              onChange={(event) => setFrom(event.target.value)}
            />
          </div>
          <div className="mb-6 col-md-6">
            <input
              type="datetime-local"
              className="form-control"
              name="todate"
              id="todate"
              min={From}
              onChange={(event) => setTo(event.target.value)}
            />
          </div>
        </div>
        <div style={{ marginBottom: "10px" }} />
        <label for="wsCover" className="addFile">
          Submit Workshop cover photo below
        </label>
        <input
          type="file"
          id="wsCover"
          placeholder="Workshop cover photo"
          className="form-control"
          onChange={(event) => setMainImg(event.target.value)}
          required
        />
        <div style={{ marginBottom: "15px" }} />

        <div style={{ float: "right", marginBottom: "10px" }}>
          <SuccessButton text="Submit" type="Submit" />
        </div>
      </form>
    </div>
  );

  const MaterialData = (
    <div>
      <form ref={form} onSubmit={submitMaterial} method="POST">
        <div className="row">
          <div className="mb-3 col-md-12">
            <input
              type="text"
              id="materialName"
              className="form-control"
              placeholder="Material name"
              onChange={(event) => setName(event.target.value)}
              required
            />
          </div>
          <div className="mb-3 col-md-12">
            <input
              type="text"
              id="tags"
              className="form-control"
              placeholder="Tags"
              onChange={(event) => setTags(event.target.value)}
              required
            />
          </div>
          <div className="mb-3 col-md-12">
            <textarea
              type="text"
              id="descrip"
              className="form-control"
              placeholder="Material description"
              onChange={(event) => setDescrip(event.target.value)}
              required
            />
          </div>
        </div>
        <label for="image" className="addFile">
          Presentation cover photo below
        </label>
        <input
          type="file"
          name="image"
          id="image"
          className="form-control"
          style={{
            maxWidth: "400px",
            margin: "10px",
          }}
          placeholder="Presentation photo"
          onChange={(event) => setImages(event.target.value)}
          required
        />

        <label for="document" className="addFile">
          Submit Presentation below
        </label>
        <input
          type="file"
          name="document"
          id="document"
          className="form-control"
          style={{
            maxWidth: "400px",
            margin: "10px",
          }}
          placeholder="Presentation"
          onChange={(event) => setDocument(event.target.value)}
          required
        />

        <div style={{ float: "right", marginBottom: "10px" }}>
          <SuccessButton text="Submit" type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="rootBody">
      <div className="workshopForm">
        <h4
          style={{
            fontWeight: "bold",
            color: "#004BB0",
            padding: "20px",
          }}
        >
          Workshop
        </h4>
        <div className="workshopFormInput">
          <div id="stepper1" className="bs-stepper">
            <div className="bs-stepper-header">
              {step == 0 ? (
                <Step title="Event Data" dis="false" />
              ) : (
                <Step title="Event Data" dis="true" />
              )}
              <div className="line"></div>
              {step == 1 ? (
                <Step title="Material Data" dis="false" />
              ) : (
                <Step title="Material Data" dis="true" />
              )}
              <div className="line"></div>
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
