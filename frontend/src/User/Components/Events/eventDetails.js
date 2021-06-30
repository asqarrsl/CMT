import React from 'react';
import { render } from 'react-dom';
import './card.css'
import { Card, CardHeader, CardBody, CardFooter } from 'react-simple-card';

const EventDetails = (props) => {
    return (
        <body className="masthead text-black text-center">
            <div className="container emp-profile">
                <div className="details_card">
                    <div className="row">
                        <div className="col-lg-4 col-md-5 col-sm-6">
                            <div className="profile-img">
                                <img src="https://hire4event.com/blogs/wp-content/uploads/2019/03/best-Event-company-in-Greater-Noida-.jpg" />
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-7 col-sm-6">
                            <div className="profile-head">
                                <h6>
                                    Event Details
                                </h6>
                                <ul className="nav nav-tabs" id="myTab" role="tablist">
                                </ul>
                            </div>
                            <div className="col-md-6">
                                <label>Event Name</label>
                            </div>
                            <div className="col-md-6">
                                <label>Description</label>
                            </div>
                            <div className="col-md-6">
                                <label>Venue</label>
                            </div>
                            <div className="col-md-6">
                                <label>Start Time</label>
                            </div>
                            <div className="col-md-6">
                                <label>End Time</label>
                            </div>
                            <br></br>
                            <div className="col-md-6">
                                <a href="/event_materials">View Materials</a>
                            </div>
                            <br></br>
                            <div className="col-md-6">
                                <form method="get" action="/events">
                                    <button type="submit" className="profile-edit-btn" >Apply</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </body>

    );
}

export default EventDetails;