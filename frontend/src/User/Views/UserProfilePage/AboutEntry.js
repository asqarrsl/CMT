import React from "react";

const AboutEntry = (props) => {
  const title = props.data.title;
  const info = props.data.info;
  return (
    <div class="row">
      <div class="col-md-3">
        <p style={{ fontWeight: "bold" }}>{title}</p>
      </div>
      <div class="col-md-6">
        <p>{info}</p>
      </div>
    </div>
  );
};

export default AboutEntry;
