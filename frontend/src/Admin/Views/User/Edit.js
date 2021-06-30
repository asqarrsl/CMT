import React from 'react'
import Breadcrumb from '../../Components/Breadcrumb/BreadCrumb';

const EditUser = () =>{
    var titles = [
        {
            name : 'Admin',
            link : '/admin'
        },
        {
            name : 'User',
            link : '/user'
        },
        {
            name : 'Edit',
            link : '/edit'
        }
    ]
        
    return(
        <>
            <Breadcrumb titles={titles} />
            <hr />
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Edit User</h5>
                    <hr />
                    <form>
                        <div className="row">
                            <div className="mb-3 col-md-6">
                                <label for="name" className="form-label">Full Name</label>
                                <input 
                                    type="text"
                                    className="form-control" 
                                    name="name"
                                    id="name" 
                                />
                            </div>
                            <div className="mb-3 col-md-6">
                                <label for="email" className="form-label">Email Address</label>
                                <input 
                                    type="email"
                                    className="form-control" 
                                    name="email"
                                    id="email" 
                                />
                                {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                            </div>
                        </div>
                        <div className="row">
                            <div className="mb-3 col-md-6">
                                <label for="mobile" className="form-label">Mobile</label>
                                <input 
                                    type="text"
                                    className="form-control" 
                                    name="mobile"
                                    id="mobile" 
                                />
                            </div>
                            <div className="mb-3 col-md-6">
                                <label for="username" className="form-label">Username</label>
                                <input 
                                    type="text"
                                    className="form-control" 
                                    name="username"
                                    id="username" 
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="mb-3 col-md-6">
                                <label for="name" className="form-label">Role</label>
                                <br />
                                <div class="form-check form-check-inline">
                                    <input 
                                        class="form-check-input"
                                        type="radio" 
                                        name="role" 
                                        id="role1" 
                                        value="Admin" 
                                    />
                                    <label class="form-check-label" for="role1">Admin</label>
                                </div>
                                    <div class="form-check form-check-inline">
                                    <input 
                                        class="form-check-input"
                                        type="radio" 
                                        name="role" 
                                        id="role2" 
                                        value="Reviewer" 
                                    />
                                    <label class="form-check-label" for="role2">Reviewer</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input 
                                        class="form-check-input"
                                        type="radio" 
                                        name="role" 
                                        id="role3" 
                                        value="Editor" 
                                    />
                                    <label class="form-check-label" for="role3">Editor</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input 
                                        class="form-check-input"
                                        type="radio" 
                                        name="role" 
                                        id="role4" 
                                        value="Participants" 
                                    />
                                    <label class="form-check-label" for="role4">Participants</label>
                                </div>
                            </div>
                            <div className="mb-3 col-md-6">
                                <label for="name" className="form-label">Participant Type</label>
                                <br />
                                <div class="form-check form-check-inline">
                                    <input 
                                        class="form-check-input"
                                        type="radio" 
                                        name="partic
                                        ipanttype" 
                                        id="prole1" value="Researcher" 
                                    />
                                    <label class="form-check-label" for="prole1">Researcher</label>
                                </div>
                                    <div class="form-check form-check-inline">
                                    <input 
                                        class="form-check-input"
                                        type="radio" 
                                        name="partic
                                        ipanttype" 
                                        id="prole2" value="WorkshopConductor" 
                                    />
                                    <label class="form-check-label" for="prole2">WorkshopConductor</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input 
                                        class="form-check-input"
                                        type="radio" 
                                        name="partic
                                        ipanttype" 
                                        id="prole3" value="Participant" 
                                    />
                                    <label class="form-check-label" for="prole3">Participant</label>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="mb-3 col-md-6">
                                <label for="specialization" className="form-label">specialization</label>
                                <input 
                                    type="text"
                                    className="form-control" 
                                    name="specialization"
                                    id="specialization" 
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="mb-3 col-md-6">
                                <label for="qualification" className="form-label">Qualification</label>
                                <input 
                                    type="text"
                                    className="form-control" 
                                    name="qualification"
                                    id="qualification" 
                                />
                            </div>
                            <div className="mb-3 col-md-6">
                                <label for="designation" className="form-label">Designation</label>
                                <input 
                                    type="text"
                                    className="form-control" 
                                    name="designation"
                                    id="designation" 
                                />
                            </div>
                            <div className="mb-3 col-md-6">
                                <label for="affiliation" className="form-label">Affiliation</label>
                                <input 
                                    type="text"
                                    className="form-control" 
                                    name="affiliation"
                                    id="affiliation" 
                                />
                            </div>
                            <div className="mb-3 col-md-6">
                                <label for="isPaid" className="form-label">isPaid</label>
                                <input 
                                    type="text"
                                    className="form-control" 
                                    name="isPaid"
                                    id="isPaid" 
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="mb-3 col-md-6">
                                <label for="password" className="form-label">password</label>
                                <input 
                                    type="password"
                                    className="form-control" 
                                    name="password"
                                    id="password" 
                                />
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </>
    );

}

export default EditUser;