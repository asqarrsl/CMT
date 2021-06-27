import React from 'react'
import './card.css'
import { Card, CardHeader, CardBody, CardFooter } from 'react-simple-card';

const Papers = (props) => {
  return (
    <header className="masthead text-white text-center">
      <div className="overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-xl-9 mx-auto">
            <h1 className="mb-5">Papers</h1>
          </div>
          <div className="card-container">
            <Card>
              <CardBody>
                <p>Paper Name:</p><br />
                <p>Description:</p><br />
                <p>Author:</p><br />
                <a href="/paper_details">View More</a>
              </CardBody>
            </Card>
          </div>
          <div className="card-container">
            <Card>
              <CardBody>
                <p>Paper Name:</p><br />
                <p>Description:</p><br />
                <p>Author:</p><br />
                <a href="/paper_details">View More</a>
              </CardBody>
            </Card>
          </div>
          <div className="card-container">
            <Card>
              <CardBody>
                <p>Paper Name:</p><br />
                <p>Description:</p><br />
                <p>Author:</p><br />
                <a href="/paper_details">View More</a>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </header>

  );
}

export default Papers;