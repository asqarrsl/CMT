import React, {useState} from 'react'
import axios from 'axios';

import Breadcrumb from '../../Components/Breadcrumb/BreadCrumb';
import Error from '../../Components/Alert/Error';
const AddUser = () =>{
    var titles = [
        {name : 'Admin',link : '/admin'},
        {name : 'Users',link : '/user'},
        {name : 'Add User',link : '/add'}    
    ]

    const [name,setName] = useState('');
    const [mobile,setMobile] = useState('');
    const [username,setUsername] = useState('');
    const [role,setRole] = useState('');
    const [email,setEmail] = useState('');
    const [specialization,setSpecialization] = useState('');
    const [ptype,setPtype] = useState('');
    const [designation,setDesignation] = useState('');
    const [affiliation,setAffiliation] = useState('');
    const [password,setPassword] = useState('');
    const [isPaid,setisPaid] = useState('');
    const [formValid,setFormValid] = useState(false);
    const [formError,setFormError] = useState(false);
    const [init,setinit] = useState(true);
    const [error,setError] = useState(true);

    const checknull = (value)=>{
        if(value.trim()==null || value.trim()==''){
            return false;
        }else{
            return true;
        }
    }
    const checkstring = (value)=>{
        if(typeof value != "string"){
            return false;
        }
    }
    function validateEmail(value) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(value).toLowerCase());
    }
    const onValidate = () => {
        if(checknull(name) && checknull(mobile) && checknull(username) && checknull(role) && checknull(email) && checknull(password)){
            setFormValid(validateEmail(email));
            if(role=="Admin"){
                setFormValid(true);
            }else if(role=="Reviewer"){
                if(checknull(specialization)){
                    setFormValid(true);
                }
            }else if(role=="Editor"){
                setFormValid(true);
            }else if(role=="Participants"){
                if(checknull(ptype) && checknull(designation) && checknull(affiliation) && checknull(isPaid)){
                    setFormValid(true);
                }
            }else{
                setFormValid(false);
            }

        }else{
            setFormValid(false);
        }
    }

    const onSubmit = (e) =>{
        e.preventDefault();
        setinit(false);
        onValidate();
        if(formValid){
            let user = {
                name,
                mobile,
                role,
                email,
                specialization,
                participant: ptype,
                designation,
                affiliation,
                isPaid,
                username,
                password
            }
            // let user1 = {
            //     "name": "Re D. D1",
            //     "mobile": "+947778888771",
            //     "role": "Editor",
            //     "email": "testing@gmail1.com",
            //     "reviewer": {
            //         "specialization": "BLOG"
            //     },
            //     "username" : "testing1",
            //     "password" : "1234561",
            //     "participants": {
            //         "type": "researcher",
            //         "qualification": "PHD",
            //         "designation": "Professor",
            //         "affiliation": "SLIIT",
            //         "isPaid": "false"
            //     },
            //     "bio": "Researcher in collaborating",
            //     "isActive": "true"
            // }
            axios.post('http://localhost:3000/users/register',user)
            .then(response=>{
                console.log(response);
                alert("Successfully Inserted")
            })
            .catch((error)=>{
                if (error.response) {
                    setFormError(error.response.data.message);
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    // console.log(error.response.data);
                    // console.log(error.response.status);
                    // console.log(error.response.headers);
                } else if (error.request) {
                    // The request was made but no response was received
                    // `error.request` is an instance of XMLHttpRequest in the 
                    // browser and an instance of
                    // http.ClientRequest in node.js
                    // console.log(error.request);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    // console.log('Error', error.message);
                }
                // console.log(error.config);
            })
        }else{
            setError("Invalid");
        }
    }
    return(
        <>
            <Breadcrumb titles={titles} />
            <hr />
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Add User</h5>
                    <hr />
                    {(formError) && <Error message={formError} />}
                    <form onSubmit={onSubmit} method="POST">
                        <div className="row">
                            <div className="mb-3 col-md-6">
                                <label htmlFor="name" className="form-label">Full Name</label>
                                <input 
                                    type="text"
                                    className="form-control" 
                                    name="name"
                                    id="name" 
                                    value={name}
                                    onChange = {(event)=>setName(event.target.value)} 
                                />
                            </div>
                            <div className="mb-3 col-md-6">
                                <label htmlFor="email" className="form-label">Email Address</label>
                                <input 
                                    type="email"
                                    className="form-control" 
                                    name="email"
                                    id="email" 
                                    value={email}
                                    onChange = {(event)=>setEmail(event.target.value)} 
                                />
                                {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                            </div>
                        </div>
                        <div className="row">
                            <div className="mb-3 col-md-6">
                                <label htmlFor="mobile" className="form-label">Mobile</label>
                                <input 
                                    type="text"
                                    className="form-control" 
                                    name="mobile"
                                    id="mobile" 
                                    value={mobile}
                                    onChange = {(event)=>setMobile(event.target.value)} 
                                />
                            </div>
                            <div className="mb-3 col-md-6">
                                <label htmlFor="name" className="form-label">Role</label>
                                <br />
                                <div className="form-check form-check-inline">
                                    <input 
                                        className="form-check-input"
                                        type="radio" 
                                        name="role" 
                                        id="role1" 
                                        value="Admin" 
                                        checked={role=="Admin"}
                                        onChange = {(event)=>setRole(event.target.value)} 
                                    />
                                    <label className="form-check-label" htmlFor="role1">Admin</label>
                                </div>
                                    <div className="form-check form-check-inline">
                                    <input 
                                        className="form-check-input"
                                        type="radio" 
                                        name="role" 
                                        id="role2" 
                                        checked={role=="Reviewer"}
                                        value="Reviewer" 
                                        onChange = {(event)=>setRole(event.target.value)} 
                                    />
                                    <label className="form-check-label" htmlFor="role2">Reviewer</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input 
                                        className="form-check-input"
                                        type="radio" 
                                        name="role" 
                                        id="role3" 
                                        checked={role=="Editor"}
                                        value="Editor" 
                                        onChange = {(event)=>setRole(event.target.value)} 
                                    />
                                    <label className="form-check-label" htmlFor="role3">Editor</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input 
                                        className="form-check-input"
                                        type="radio" 
                                        name="role" 
                                        id="role4" 
                                        checked={role=="Participants"}
                                        value="Participants" 
                                        onChange = {(event)=>setRole(event.target.value)} 
                                    />
                                    <label className="form-check-label" htmlFor="role4">Participants</label>
                                </div>
                            </div>
                        </div>
                        {(role=="Participants") &&
                        <div className="row">                            
                            <div className="mb-3 col-md-6">
                                <label htmlFor="name" className="form-label">Participant Type</label>
                                <br />
                                <div className="form-check form-check-inline">
                                    <input 
                                        className="form-check-input"
                                        type="radio" 
                                        name="participanttype" 
                                        id="prole1" 
                                        checked={ptype=="Researcher"}
                                        value="Researcher" 
                                        onChange = {(event)=>setPtype(event.target.value)} 
                                    />
                                    <label className="form-check-label" htmlFor="prole1">Researcher</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input 
                                        className="form-check-input"
                                        type="radio" 
                                        name="participanttype" 
                                        id="prole2" 
                                        checked={ptype=="WorkshopConductor"}
                                        value="WorkshopConductor" 
                                        onChange = {(event)=>setPtype(event.target.value)} 

                                    />
                                    <label className="form-check-label" htmlFor="prole2">WorkshopConductor</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input 
                                        className="form-check-input"
                                        type="radio" 
                                        name="participanttype" 
                                        id="prole3" 
                                        checked={ptype=="Participant"}
                                        value="Participant" 
                                        onChange = {(event)=>setPtype(event.target.value)} 
                                    />
                                    <label className="form-check-label" htmlFor="prole3">Participant</label>
                                </div>
                            </div>
                        {/* </div>
                        <div className="row"> */}
                            <div className="mb-3 col-md-6">
                                <label htmlFor="designation" className="form-label">Designation</label>
                                <input 
                                    type="text"
                                    className="form-control" 
                                    name="designation"
                                    id="designation" 
                                    value={designation}
                                    onChange = {(event)=>setDesignation(event.target.value)} 
                                />
                            </div>
                            <div className="mb-3 col-md-6">
                                <label htmlFor="affiliation" className="form-label">Affiliation</label>
                                <input 
                                    type="text"
                                    className="form-control" 
                                    name="affiliation"
                                    id="affiliation" 
                                    value={affiliation}
                                    onChange = {(event)=>setAffiliation(event.target.value)} 
                                />
                            </div>
                            <div className="mb-3 col-md-6">
                                <label htmlFor="isPaid" className="form-label">isPaid</label>
                                <select 
                                    className="form-select" 
                                    name="isPaid"
                                    id="isPaid" 
                                    aria-label="Default select example"
                                    value={isPaid}
                                    onChange = {(event)=>setisPaid(event.target.value)}  
                                >
                                    <option defaultValue>Open this select menu</option>
                                    <option  value="true">Yes</option>
                                    <option value="false">No</option>
                                </select>
                            </div>
                        </div>}
                        <div className="row">
                        {(role=="Reviewer") &&
                            <div className="mb-3 col-md-6">
                                <label htmlFor="specialization" className="form-label">specialization</label>
                                <input 
                                    type="text"
                                    className="form-control" 
                                    name="specialization"
                                    id="specialization" 
                                    value={specialization}
                                    onChange = {(event)=> setSpecialization(event.target.value)} 
                                />
                            </div>}
                        </div>
                        <div className="row">
                        <div className="mb-3 col-md-6">
                                <label htmlFor="username" className="form-label">Username</label>
                                <input 
                                    type="text"
                                    className="form-control" 
                                    name="username"
                                    id="username"
                                    value={username}
                                    onChange = {(event)=>setUsername(event.target.value)}  
                                />
                            </div>
                            <div className="mb-3 col-md-6">
                                <label htmlFor="password" className="form-label">password</label>
                                <input 
                                    type="password"
                                    className="form-control" 
                                    name="password"
                                    id="password" 

                                    onChange = {(event)=>setPassword(event.target.value)} 
                                />
                            </div>
                        </div>
                        <button className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
            
        </>
    );

}

export default AddUser;