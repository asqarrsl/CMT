import React from 'react'

const UserDataTable = ({data}) =>{
    return(
        <tbody>
            {data.map((user,i)=>(
                <tr key={i}> 
                    <th scope="row">{i}</th>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                </tr>
            ))}
        </tbody>
    );
}

export default UserDataTable;