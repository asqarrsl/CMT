import React from 'react'
import './card.css'
import { Card, CardHeader, CardBody, CardFooter } from 'react-simple-card';

const researchPapers = (props) => {
  return (
    <body className="masthead text-white text-center">
      <div className="container emp-profile">
        <div className="col-md-12">
          <div className="profile-head">
            <h6>
              Material Papers
            </h6>
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item">
                <a className="nav-link" id="workshop-tab" data-toggle="tab" href="/papers" role="tab" aria-controls="home" aria-selected="true">Workshop</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" id="research-tab" data-toggle="tab" href="/research_papers" role="tab" aria-controls="home" aria-selected="false">Research</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="row">
          <div className="card-container">
            <div className="image-container">
              <img src="https://www.press.umich.edu/images/covers/190h/0472086391.jpg" />
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
              <img src="https://www.press.umich.edu/images/covers/190h/0472086391.jpg" />
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
              <img src="https://www.press.umich.edu/images/covers/190h/0472086391.jpg" />
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

export default researchPapers;