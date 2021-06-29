import React from 'react'

const MaterialDataTable = ({data}) =>{
    var editUrl = (obj)=>{
        return `/admin/material/${obj}/edit`
    }
    var viewUrl = (obj)=>{
        return `/admin/material/${obj}`
    }
    var deleteUrl = (obj)=>{
        return `/admin/material/${obj}/edit`
    }
    return(
        <tbody>
            {data.map((material,i)=>(
                <tr key={i}> 
                    <th scope="row">{i+1}</th>
                    <td>{material.name}</td>
                    <td>{material.type}</td>
                    <td>{material.eventId.eventName}</td>
                    <td>{material.uid.name}</td>
                    <td>
                        <a href={viewUrl(material._id)} className="me-3"><i className="far fa-eye"></i></a>
                        <a href={editUrl(material._id)} className="me-3"><i className="fas fa-pen"></i></a>
                        <a href={deleteUrl(material._id)} className="me-3"><i className="far fa-trash-alt"></i></a>
                    </td>
                </tr>
            ))}
        </tbody>
    );
}

export default MaterialDataTable;