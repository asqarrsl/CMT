import React from 'react'
import './card.css'

const PaperDetails = (props) => {
  return (
    <body className="masthead text-black text-center">
      <div class="container emp-profile">
        <div class="details_card">
          <div class="row">
            <div class="col-lg-4 col-md-5 col-sm-6">
              <div class="profile-img">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPEZkRlu5xIvlEA6q7q04xGyDxe__XZSD8cQ&usqp=CAU" />
              </div>
            </div>
            <div class="col-lg-8 col-md-7 col-sm-6">
              <div class="profile-head">
                <h6>
                  Material Paper Title
                </h6>
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                </ul>
              </div>
              <div class="col-md-6">
                <label>Paper Name</label>
              </div>
              <div class="col-md-6">
                <label>Paper Description</label>
              </div>
              <div class="col-md-6">
                <label>Author name</label>
              </div>
              <br></br>
              <div class="col-md-6">
                <form method="get" action="/papers">
                  <button type="submit" class="profile-edit-btn" >Download</button>
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