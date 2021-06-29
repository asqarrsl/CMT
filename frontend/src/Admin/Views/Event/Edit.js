import React from 'react'
import Breadcrumb from '../../Components/Breadcrumb/BreadCrumb';

const EditEvent = () =>{
    var titles = [
        {name : 'Admin',link : '/admin'},
        {name : 'Event',link : '/event'},
        {name : 'Edit',link : '/edit'}
    ]
        
    const [user,setUser] = useState([]); 

    useEffect(() => {
        axios.get('http://localhost:3000/users/')
        .then(response=>{
            setUser(response.data.Users);
        })
    },[])

    return(
        <>
            <Breadcrumb titles={titles} />
            <hr />
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Add Event</h5>
                    <hr />
                    <form>
                        <div className="row">
                            <div className="mb-3 col-md-6">
                                <label for="eventName" className="form-label">Event Name</label>
                                <input 
                                    type="text"
                                    className="form-control" 
                                    name="eventName"
                                    id="eventName" 
                                />
                            </div>
                            <div className="mb-3 col-md-6">
                                <label for="description" class="form-label">Description</label>
                                <textarea 
                                    class="form-control" 
                                    id="description" 
                                    rows="3"
                                    name="description"
                                ></textarea>
                            </div>
                        </div>
                        <div className="row">
                            <div className="mb-3 col-md-6">
                                <label for="eventtyple" className="form-label">Event Type</label>
                                <br />
                                <div class="form-check form-check-inline">
                                    <input 
                                        class="form-check-input"
                                        type="radio" 
                                        name="eventType" 
                                        id="eventType1" 
                                        value="Workshop" 
                                    />
                                    <label class="form-check-label" for="prole1">Workshop</label>
                                </div>
                                    <div class="form-check form-check-inline">
                                    <input 
                                        class="form-check-input"
                                        type="radio" 
                                        name="eventType" 
                                        id="eventType2" 
                                        value="Conference" 
                                    />
                                    <label class="form-check-label" for="prole1">Conference</label>
                                </div>
                            </div>
                            <div className="mb-3 col-md-6">
                                <label for="venue" className="form-label">Venue</label>
                                <input 
                                    type="text"
                                    className="form-control" 
                                    name="venue"
                                    id="venue" 
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="mb-3 col-md-6">
                                <label for="mainImage" className="form-label">Main Image</label>
                                <input 
                                    type="file"
                                    className="form-control" 
                                    name="mainImage"
                                    id="mainImage" 
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className=" col-md-12 fs-4">Duration</div>
                            <div className="mb-3 col-md-4">
                                <label for="date" className="form-label">Date</label>
                                <input 
                                    type="text"
                                    className="form-control" 
                                    name="date"
                                    id="date" 
                                />
                            </div>
                            <div className="mb-3 col-md-4">
                                <label for="StartTime" className="form-label">Start Time</label>
                                <input 
                                    type="text"
                                    className="form-control" 
                                    name="StartTime"
                                    id="StartTime" 
                                />
                            </div>
                            <div className="mb-3 col-md-4">
                                <label for="StopTime" className="form-label">Stop Time</label>
                                <input 
                                    type="text"
                                    className="form-control" 
                                    name="StopTime"
                                    id="StopTime" 
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="mb-3 col-md-6">
                                <label for="presenter" className="form-label">Presenter</label>
                                <input 
                                    type="text"
                                    className="form-control" 
                                    name="presenter"
                                    id="presenter" 
                                />
                            </div>
                            <div className="mb-3 col-md-6">
                                <label for="editor" className="form-label">Editor</label>
                                <input 
                                    type="text"
                                    className="form-control" 
                                    name="editor"
                                    id="editor" 
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

export default EditEvent;