import React from 'react'
import './card.css'
import { Card, CardHeader, CardBody, CardFooter } from 'react-simple-card';

const Papers = (props) => {
  return (
    <body className="masthead text-white text-center">
      <div class="container emp-profile">
        <div class="col-md-12">
          <div class="profile-head">
            <h6>
              Material Papers
            </h6>
            <ul class="nav nav-tabs" id="myTab" role="tablist">
              <li class="nav-item">
                <a class="nav-link active" id="workshop-tab" data-toggle="tab" href="/papers" role="tab" aria-controls="home" aria-selected="true">Workshop</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" id="research-tab" data-toggle="tab" href="/research_papers" role="tab" aria-controls="home" aria-selected="false">Research</a>
              </li>
            </ul>
          </div>
        </div>

        <div class="row">
          <div className="card-container">
            <div className="image-container">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPEZkRlu5xIvlEA6q7q04xGyDxe__XZSD8cQ&usqp=CAU" />
            </div>
            <Card>
              <CardBody>
                <p>Paper Name:</p>
                <p>Description:</p>
                <p>Author:</p>
                <a href="/paper_details">View More</a>
              </CardBody>
            </Card>
          </div>
          <div className="card-container">
            <div className="image-container">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPEZkRlu5xIvlEA6q7q04xGyDxe__XZSD8cQ&usqp=CAU" />
            </div>
            <Card>
              <CardBody>
                <p>Paper Name:</p>
                <p>Description:</p>
                <p>Author:</p>
                <a href="/paper_details">View More</a>
              </CardBody>
            </Card>
          </div>
          <div className="card-container">
            <div className="image-container">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPEZkRlu5xIvlEA6q7q04xGyDxe__XZSD8cQ&usqp=CAU" />
            </div>
            <Card>
              <CardBody>
                <p>Paper Name:</p>
                <p>Description:</p>
                <p>Author:</p>
                <a href="/paper_details">View More</a>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </body>

  );
}

export default Papers;