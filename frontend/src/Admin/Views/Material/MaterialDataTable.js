import React from 'react'

const MaterialDataTable = ({data}) =>{
    var editUrl = (obj)=>{
        return `/admin/material/${obj}/edit`
    }
    var deleteUrl = (obj)=>{
        return `/admin/material/${obj}/edit`
    }
    return(
        <tbody>
            {data.map((material,i)=>(
                <tr key={i}> 
                    <th scope="row">{i}</th>
                    <td>{material.name}</td>
                    <td>{material.type}</td>
                    <td>{material.eventId.eventName}</td>
                    <td>{material.uid.name}</td>
                    <td><a href={editUrl(material._id)}><i className="fas fa-pen"></i></a></td>
                    <td><a href={deleteUrl(material._id)}><i className="far fa-trash-alt"></i></a></td>
                </tr>
            ))}
        </tbody>
    );
}

export default MaterialDataTable;