import React from "react";
import axios from "axios";
import { getToken } from "../../../Utils/Common";
const DeleteModals = ({ data }) => {

  var deletemodalid = (obj) => {
    return `deleteModal${obj}`;
  };

  const onDeleteHandle = (obj) =>{

    const token = getToken();
    axios({
      method: "delete",
      url: `http://localhost:3000/material/${obj}`,
      headers: { authorization: token },
    })
    .then(response=>{
      // console.log(response);
    })
    .catch(err=>{
      // console.log(err);
    })
  }

  return (
    data.map((material, i) => (
        <div
          className="modal fade"
          key={i}
          id={deletemodalid(material._id)}
        //   tabindex="-1"
          aria-labelledby="deleteModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Delete material
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">Are You Sure You need to delete This material</div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" onClick={onDeleteHandle(material._id)} className="btn btn-danger">
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













