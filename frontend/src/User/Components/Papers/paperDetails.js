import React from 'react'
import './card.css'

const PaperDetails = (props) => {
  return (
    <body className="masthead text-black text-center">
      <div className="container emp-profile">
        <div className="details_card">
          <div className="row">
            <div className="col-lg-4 col-md-5 col-sm-6">
              <div className="profile-img">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPEZkRlu5xIvlEA6q7q04xGyDxe__XZSD8cQ&usqp=CAU" />
              </div>
            </div>
            <div className="col-lg-8 col-md-7 col-sm-6">
              <div className="profile-head">
                <h6>
                  Material Paper Title
                </h6>
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                </ul>
              </div>
              <div className="col-md-6">
                <label>Paper Name</label>
              </div>
              <div className="col-md-6">
                <label>Paper Description</label>
              </div>
              <div className="col-md-6">
                <label>Author name</label>
              </div>
              <br></br>
              <div className="col-md-6">
                <form method="get" action="/papers">
                  <button type="submit" className="profile-edit-btn" >Download</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>

  );
}

export default PaperDetails;