import React from 'react'

const EventDataTable = ({data}) =>{
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
                </tr>
            ))}
        </tbody>
    );
}

export default EventDataTable;