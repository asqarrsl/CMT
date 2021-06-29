import React,{useEffect,useState} from 'react'
import axios from 'axios';

import Breadcrumb from '../../Components/Breadcrumb/BreadCrumb';
import UserDataTable from './UserDataTable';
const UserIndex = () =>{
    var titles = [
        {name : 'Admin',link : '/admin'},
        {name : 'Users',link : '/user'}
    ]
    const [users,setUsers] = useState([]); 

    useEffect(() => {
        axios.get('http://localhost:3000/users')
        .then(response=>{
            setUsers(response.data.Users);
        })
    },[])

    return(
        <>
            <div className="row">
                <div className="col-md-6">
                    <Breadcrumb titles={titles} />
                </div>
                {console.log("hi",users)}
                <div className="col-md-6 text-end">
                    <a className="btn btn-primary" href="/admin/user/add">Add Users</a>
                </div>
            </div>
            <hr />
            <div className="fs-4">All Users</div>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                        <th scope="col">Role</th>
                        <th scope="col" colSpan="2">Action</th>
                    </tr>
                </thead>
                <UserDataTable data={users} />
            </table>
        </>
    );
}

export default UserIndex;