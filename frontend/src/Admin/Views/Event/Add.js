import React , {useState} from 'react'
import Breadcrumb from '../../Components/Breadcrumb/BreadCrumb';
import axios from 'axios';
import moment from 'moment'

const AddEvent = () =>{
    var titles = [
        {name : 'Admin',link : '/admin'},
        {name : 'Event',link : '/event'},
        {name : 'Add Event',link : '/add'}
    ]
    const [init, setinit] = useState(true)

    const [eventName, setEventName] = useState('')
    const [description, setDescription] = useState('')
    const [eventType, setEventType] = useState('')
    const [venue, setVenue] = useState('')
    const [mainImg, setMainImg] = useState('')
    const [From, setFrom] = useState('')
    const [To, setTo] = useState('')
    const [isApproved, setIsApproved] = useState('')
    const [formValid,setFormValid] = useState(false);
    const [formError,setFormError] = useState(false);
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
        if(
            checknull(eventName) && checknull(description) && checknull(eventType) && 
            checknull(venue) && checknull(mainImg) &&
            checknull(From) && checknull(To)
        ){
            setFormValid(true);
        }else{
            setFormValid(false);
        }
    }
    const onSubmit = (e) =>{
        e.preventDefault();
        setinit(false);
        onValidate();
        if(1){
        // if(formValid){
            let event = {
                eventName, 
                description, 
                eventType, 
                venue,    
                image:mainImg,
                duration:{
                    From,
                    To
                },
                isApproved
            }
            // var date = new Date(Date); 
            console.log(event);
            axios.post('http://localhost:3000/event',event)
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
                    console.log(error.request);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error', error.message);
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
                    <h5 className="card-title">Add Event</h5>
                    <hr />
                    <form method="POST" onSubmit={onSubmit}> 
                        <div className="row">
                            <div className="mb-3 col-md-6">
                                <label htmlFor="eventName" className="form-label">Event Name</label>
                                <input 
                                    type="text"
                                    className="form-control" 
                                    name="eventName"
                                    id="eventName" 
                                    onChange = {(event)=>setEventName(event.target.value)} 
                                />
                            </div>
                            <div className="mb-3 col-md-6">
                                <label htmlFor="venue" className="form-label">Venue</label>
                                <input 
                                    type="text"
                                    className="form-control" 
                                    name="venue"
                                    id="venue" 
                                    onChange = {(event)=>setVenue(event.target.value)} 
                                />
                            </div>
                            <div className="mb-3 col-md-12">
                                <label htmlFor="description" className="form-label">Description</label>
                                <textarea 
                                    className="form-control" 
                                    id="description" 
                                    onChange = {(event)=>setDescription(event.target.value)} 
                                    rows="4"
                                    name="description"
                                ></textarea>
                            </div>
                        {/* </div>
                        <div className="row"> */}
                            <div className="mb-3 col-md-6">
                                <label htmlFor="eventtyple" className="form-label">Event Type</label>
                                <br />
                                <div className="form-check form-check-inline">
                                    <input 
                                        className="form-check-input"
                                        type="radio" 
                                        name="eventType" 
                                        id="eventType1" 
                                        onChange = {(event)=>setEventType(event.target.value)} 
                                        value="Workshop" 
                                    />
                                    <label className="form-check-label" htmlFor="prole1">Workshop</label>
                                </div>
                                    <div className="form-check form-check-inline">
                                    <input 
                                        className="form-check-input"
                                        type="radio" 
                                        name="eventType" 
                                        id="eventType2" 
                                        onChange = {(event)=>setEventType(event.target.value)} 
                                        value="Conference" 
                                    />
                                    <label className="form-check-label" htmlFor="prole1">Conference</label>
                                </div>
                            </div>
                            
                        </div>
                        {/* <div className="row">
                            
                        </div> */}
                        <div className="row">
                            <div className=" col-md-12 fs-4">Duration</div>
                            <div className="mb-6 col-md-6">
                                <label htmlFor="date" className="form-label">From</label>
                                <input 
                                    type="datetime-local"
                                    className="form-control" 
                                    name="fromdate"
                                    id="fromdate" 
                                    onChange = {(event)=>setFrom(event.target.value)} 
                                />
                            </div>
                            <div className="mb-6 col-md-6">
                                <label htmlFor="date" className="form-label">To</label>
                                <input 
                                    type="datetime-local"
                                    className="form-control" 
                                    name="todate"
                                    id="todate" 
                                    onChange = {(event)=>setTo(event.target.value)} 
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="mb-3 col-md-6">
                                <label htmlFor="mainImage" className="form-label">Main Image</label>
                                <input 
                                    type="file"
                                    className="form-control" 
                                    name="mainImage"
                                    id="mainImage" 
                                    onChange = {(event)=>setMainImg(event.target.value)} 
                                />
                            </div>                         
                        </div>
                        <div className="row">
                            <div className="mb-3 col-md-6">
                                <div className=" col-md-12 fs-6">Is Approved ? </div>
                                <div className="form-check form-switch">
                                    <input 
                                        className="form-check-input" 
                                        type="checkbox" 
                                        id="isApproved" 
                                        name="isApproved"
                                        defaultChecked
                                        onChange = {(event)=>{setIsApproved(event.target.checked)}}
                                    />
                                    {/* <label className="form-check-label" htmlFor="isApproved">isApproved </label> */}
                                </div>
                            </div>                          
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </>
    );

}

export default AddEvent;