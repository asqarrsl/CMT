import React from 'react'
import './Test.css'
import './card.css'
import { Card, CardBody } from 'react-simple-card';

const Test = (props) => {
    return (
        <body className="masthead text-white text-center">
            <div class="container emp-profile">
                <div class="col-md-12">
                    <div class="profile-head">
                        <h6>
                            Events
                        </h6>
                        <ul class="nav nav-tabs" id="myTab" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active" id="workshop-tab" data-toggle="tab" href="/events" role="tab" aria-controls="home" aria-selected="true">Workshops</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="conference-tab" data-toggle="tab" href="/conference" role="tab" aria-controls="home" aria-selected="false">Conferences</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="row">
                    <div className="card-container">
                        <div className="image-container">
                            <img src="https://hire4event.com/blogs/wp-content/uploads/2019/03/best-Event-company-in-Greater-Noida-.jpg" />
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
                            <img src="https://hire4event.com/blogs/wp-content/uploads/2019/03/best-Event-company-in-Greater-Noida-.jpg" />
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
                            <img src="https://hire4event.com/blogs/wp-content/uploads/2019/03/best-Event-company-in-Greater-Noida-.jpg" />
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

export default Test;