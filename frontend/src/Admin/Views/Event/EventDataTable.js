import React from 'react'

const EventDataTable = ({data}) =>{
    var editUrl = (obj)=>{
        return `/admin/event/${obj}/edit`
    }
    var viewUrl = (obj)=>{
        return `/admin/event/${obj}`
    }
    var deleteUrl = (obj)=>{
        return `/admin/event/${obj}/edit`
    }
    return(
        <tbody>
            {data.map((event,i)=>(
                <tr key={i}> 
                    <th scope="row">{i+1}</th>
                    <td>{event.eventName}</td>
                    <td>{event.eventType}</td>
                    <td>{event.venue}</td>
                    <td>{(event.duration) && event.duration.From}</td>
                    <td>{(event.duration) && event.duration.To}</td>
                    <td>
                        <a href={viewUrl(event._id)} className="me-3"><i class="far fa-eye"></i></a>
                        <a href={editUrl(event._id)} className="me-3"><i className="fas fa-pen"></i></a>
                        <a href={deleteUrl(event._id)} className="me-3"><i className="far fa-trash-alt"></i></a>
                    </td>
                </tr>
            ))}
        </tbody>
    );
}

export default EventDataTable;