import React from "react";

const AboutEntry = (props) => {
  const title = props.data.title;
  const info = props.data.info;
  return (
    <div className="row">
      <div className="col-md-3">
        <p style={{ fontWeight: "bold" }}>{title}</p>
      </div>
      <div className="col-md-6">
        <p>{info}</p>
      </div>
    </div>
  );
};

export default AboutEntry;
