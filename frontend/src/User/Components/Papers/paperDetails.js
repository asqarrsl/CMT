import React from 'react'
import './card.css'
import { Card, CardHeader, CardBody, CardFooter } from 'react-simple-card';

const PaperDetails = (props) => {
  return (
    <header className="masthead text-white text-center">
      <div className="overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-xl-9 mx-auto">
            <h1 className="mb-5">Paper Details</h1>
          </div>
          <div>
            <Card>
              <CardBody>
                <p>Paper Name:</p><br />
                <p>Description:</p><br />
                <p>Author:</p><br />
                <p>Rating:</p><br />
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </header>

  );
}

export default PaperDetails;