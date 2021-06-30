import React from "react";
import axios from "axios";
const DeleteModals = ({ data }) => {

  var deletemodalid = (obj) => {
    return `deleteModal${obj}`;
  };

  const onDeleteHandle = (e,obj) =>{
    e.preventDefault();
    axios.delete(`http://localhost:3000/event/${obj}`)
    .then(response=>{
        console.log(response);
    })
    .catch(error=>{
      console.log(error.message);
    })
  }

  return (
    data.map((event, i) => (
        <div
          className="modal fade"
          key={i}
          id={deletemodalid(event._id)}
          aria-labelledby="deleteModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Delete event
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">Are You Sure You need to delete This event</div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" onClick={e=>{onDeleteHandle(e,event._id)}} className="btn btn-danger">
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      ))
  );
};

export default DeleteModals;













