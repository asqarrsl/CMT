import React from 'react';
import './card.css'
import { Card, CardBody } from 'react-simple-card';

const Events = (props) => {
  return (
    <body className="masthead text-white text-center">
            <div className="container emp-profile">
                <div className="col-md-12">
                    <div className="profile-head">
                        <h6>
                            Events
                        </h6>
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" id="workshop-tab" data-toggle="tab" href="/events" role="tab" aria-controls="home" aria-selected="true">Workshops</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="conference-tab" data-toggle="tab" href="/conference" role="tab" aria-controls="home" aria-selected="false">Conferences</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="row">
                    <div className="card-container">
                        <div className="image-container">
                            <img src="https://www.ba-beyond.eu/assets/images/sessions/2020/immersion-workshop-visual.jpg" />
                        </div>
                        <Card>
                            <CardBody>
                                <p>Event Name</p>
                                <p>Description:</p>
                                <p>Venue:</p>
                                <a href="/event_details">View More</a>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="card-container">
                        <div className="image-container">
                            <img src="https://www.ba-beyond.eu/assets/images/sessions/2020/immersion-workshop-visual.jpg" />
                        </div>
                        <Card>
                            <CardBody>
                                <p>Event Name</p>
                                <p>Description:</p>
                                <p>Venue:</p>
                                <a href="/event_details">View More</a>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="card-container">
                        <div className="image-container">
                            <img src="https://www.ba-beyond.eu/assets/images/sessions/2020/immersion-workshop-visual.jpg" />
                        </div>
                        <Card>
                            <CardBody>
                                <p>Event Name</p>
                                <p>Description:</p>
                                <p>Venue:</p>
                                <a href="/event_details">View More</a>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
        </body>

  );
}

export default Events;