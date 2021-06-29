import React ,{useEffect,useState} from 'react'
import axios from 'axios';
import Breadcrumb from '../../Components/Breadcrumb/BreadCrumb';
import MaterialDataTable from './MaterialDataTable';
const MaterialIndex = () =>{
    var titles = [
        {
            name : 'Admin',
            link : '/admin'
        },
        {
            name : 'Material',
            link : '/material'
        }
    ]

    const [materials,setMaterials] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/material')
        .then(response=>{
            console.log(response.data);
            setMaterials(response.data.materials);
        })
    },[])
        
    return(
        <>
            <div className="row">
                <div className="col-md-6">
                    <Breadcrumb titles={titles} />
                </div>
                <div className="col-md-6 text-end">
                    <a className="btn btn-primary" href="/admin/material/add">Add Paper</a>
                </div>
            </div>
            <hr />
            <div className="fs-4">All Material</div>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Type</th>
                        <th scope="col">Event Name</th>
                        <th scope="col">User</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <MaterialDataTable data={materials} />
            </table>
        </>
    );

}

export default MaterialIndex;