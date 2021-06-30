import React, { useEffect, useState } from "react";
import './card.css'
import { Card, CardBody } from 'react-simple-card';
import axios from 'axios';
import { getEventId, getToken } from "../../../Utils/Common";


const Test = (props) => {
    const [togBtn, setTogBtn] = useState("events");
    const [events, setEvents] = useState([]);
    const [event_id, setEvents_ID] = useState();
    const token = getToken();

    useEffect(() => {
        setEvents_ID(getEventId());
        console.log(event_id);
        axios
            .get(`http://localhost:3000/events/`)
            .then((response) => {
                console.log(respose);
                setEvents(response.data.Events);
                console.log(events);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const eventDetails = [
        { id: "0", title: "Event Name", info: events.nameName },
        { id: "1", title: "Description", info: events.description },
        { id: "2", title: "Event Type", info: events.eventType },
        { id: "3", title: "Venue", info: events.venue }
    ];

    return (
        <div className="masthead text-white text-center" >
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
                            <img src="https://www.ba-beyond.eu/assets/images/sessions/2020/immersion-workshop-visual.jpg" />
                        </div>
                        <Card>
                            <CardBody>
                                {togBtn == "about" && <About about={eventDetails} />}
                                <a href="/event_details">View More</a>
                            </CardBody>
                        </Card>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Test;