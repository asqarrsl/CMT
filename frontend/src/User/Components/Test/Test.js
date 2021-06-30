import React, { Component } from 'react';
import axios from 'axios';

class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
            event: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:1234/event/')
            .then(response => {
                this.setState({ event: response.data.data });
            })
    }

    navigateProductsPage(e, name) {
        window.location = `/${name}`
    }

    render() {
        return (
            <div className="masthead text-white text-center">
                <div class="container emp-profile">
                    <div class="col-md-12">
                        <div class="profile-head">
                            <h6>
                                Events
                            </h6>
                            <ul class="nav nav-tabs" id="myTab" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active" id="workshop-tab" data-toggle="tab" href="/event" role="tab" aria-controls="home" aria-selected="true">Workshops</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="conference-tab" data-toggle="tab" href="/conference" role="tab" aria-controls="home" aria-selected="false">Conferences</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {this.state.event.length > 0 && this.state.event.map((item, index) => (
                        <div key={index} class="row">
                            <div className="card-container">
                                <div className="image-container">
                                    <img src="https://hire4event.com/blogs/wp-content/uploads/2019/03/best-Event-company-in-Greater-Noida-.jpg" />
                                </div>
                                <Card>
                                    <CardBody>
                                        <p>
                                            {this.state.event.map(event => <li>Event Name: {event.name}</li>)}
                                        </p>
                                        <p>
                                            {this.state.event.map(event => <li>Description: {event.description}</li>)}
                                        </p>
                                        <p>
                                            {this.state.event.map(event => <li>Event Name: {event.venue}</li>)}
                                        </p>
                                        <a href="/event_details">View More</a>
                                    </CardBody>
                                </Card>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default Test;