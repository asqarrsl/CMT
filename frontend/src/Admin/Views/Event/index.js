import React ,{useEffect,useState} from 'react'
import axios from 'axios';
import Breadcrumb from '../../Components/Breadcrumb/BreadCrumb';
import EventDataTable from './EventDataTable';

const EventIndex = () =>{
    var titles = [
        {
            name : 'Admin',
            link : '/admin'
        },
        {
            name : 'Event',
            link : '/event'
        }
    ]
    const [events,setEvents] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/event')
        .then(response=>{
            console.log(response.data);
            setEvents(response.data.events);
        })
    },[])
        
    return(
        <>
            <div className="row">
                <div className="col-md-6">
                    <Breadcrumb titles={titles} />
                </div>
                <div className="col-md-6 text-end">
                    <a className="btn btn-primary" href="/admin/event/add">Add Event</a>
                </div>
            </div>
            <hr />
            <div className="fs-4">All Event</div>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Event Name</th>
                        <th scope="col">Event Type</th>
                        <th scope="col">Venue</th>
                        <th scope="col">From</th>
                        <th scope="col">To</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <EventDataTable data={events} />
            </table>
        </>
    );

}

export default EventIndex;