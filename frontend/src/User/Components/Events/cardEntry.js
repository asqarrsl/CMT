import React from "react";
import "./card.css";
import { Card, CardBody } from "react-simple-card";

const CardEntry = ({ data }) => {
  const id = data[0]._id;
  const eventName = data[0].eventName;
  const description = data[0].description;
  const rowLen = data[0].mainImg.length;
  let mainImg = "";
  data[0].mainImg.map((img, i) => {
    if (rowLen === i + 1) {
      mainImg = img.url;
    } else {
      return 0;
    }
  });
  const venue = data[0].venue;

  return (
    <div className="card-container" key={id}>
      <div className="image-container">
        <img src={mainImg} />
      </div>
      <Card>
        <CardBody>
          {console.log(data[0])}
          <p>{eventName}</p>
          <p>{description}</p>
          <p>{venue}</p>
          <p>
            <a href="/event_details">View More</a>
          </p>
        </CardBody>
      </Card>
    </div>
  );
};

export default CardEntry;
