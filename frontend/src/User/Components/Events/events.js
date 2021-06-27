import React from 'react';
import { render } from 'react-dom';
import './card.css'
import { Card, CardHeader, CardBody, CardFooter } from 'react-simple-card';

const Events = (props) => {
  return (
    <header className="masthead text-white text-center">
      <div className="overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-xl-9 mx-auto">
            <h1 className="mb-5">Event Details</h1>
          </div>
          <div className="card-container">
            <div className="image-container">
              <img src="https://hire4event.com/blogs/wp-content/uploads/2019/03/best-Event-company-in-Greater-Noida-.jpg" />
            </div>
            <Card>
              <CardBody>
                <p>Event Name</p><br />
                <p>Description:</p><br />
                <p>Venue:</p><br />
                <a href="/event_details">View More</a>
              </CardBody>
            </Card>
          </div>
          <div className="card-container">
            <div className="image-container">
              <img src="https://hire4event.com/blogs/wp-content/uploads/2019/03/best-Event-company-in-Greater-Noida-.jpg" />
            </div>
            <Card>
              <CardBody>
                <p>Event Name</p><br />
                <p>Description:</p><br />
                <p>Venue:</p><br />
                <a href="/event_details">View More</a>
              </CardBody>
            </Card>
          </div>
          <div className="card-container">
            <div className="image-container">
              <img src="https://hire4event.com/blogs/wp-content/uploads/2019/03/best-Event-company-in-Greater-Noida-.jpg" />
            </div>
            <Card>
              <CardBody>
                <p>Event Name</p><br />
                <p>Description:</p><br />
                <p>Venue:</p><br />
                <a href="/event_details">View More</a>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </header>

  );
}

export default Events;