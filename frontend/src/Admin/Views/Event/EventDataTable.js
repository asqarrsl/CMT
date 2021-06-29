import React from 'react'

const EventDataTable = ({data}) =>{
    var editUrl = (obj)=>{
        return `/admin/event/${obj}/edit`
    }
    var deleteUrl = (obj)=>{
        return `/admin/event/${obj}/edit`
    }
    return(
        <tbody>
            {data.map((event,i)=>(
                <tr key={i}> 
                    <th scope="row">{i}</th>
                    <td>{event.eventName}</td>
                    <td>{event.eventType}</td>
                    <td>{event.venue}</td>
                    <td>{event.duration.From}</td>
                    <td>{event.duration.To}</td>
                    <td><a href={editUrl(event._id)}><i className="fas fa-pen"></i></a></td>
                    <td><a href={deleteUrl(event._id)}><i className="far fa-trash-alt"></i></a></td>
                </tr>
            ))}
        </tbody>
    );
}

export default EventDataTable;