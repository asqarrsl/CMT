import React from "react";

const MaterialDataTable = ({ data }) => {
  var editUrl = (obj) => {
    return `/admin/material/${obj}/edit`;
  };
  var deleteUrl = (obj) => {
    return `/admin/material/${obj}/edit`;
  };
  return (
    <tbody>
      {data.map((materials, i) => (
        <tr key={i}>
          <th scope="row">{i}</th>
          <td>{materials.name}</td>
          <td>{materials.type}</td>
          <td>{materials.eventId.eventName}</td>
          <td>{materials.uid.name}</td>
          {console.log(materials)}
          <td>
            <a href={editUrl(materials._id)}>
              <i className="fas fa-pen"></i>
            </a>
          </td>
          <td>
            <a href={deleteUrl(materials._id)}>
              <i className="far fa-trash-alt"></i>
            </a>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default MaterialDataTable;
