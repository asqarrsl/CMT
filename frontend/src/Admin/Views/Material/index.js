import React from 'react'
import Breadcrumb from '../../Components/Breadcrumb/BreadCrumb';

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
            <table class="table table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td colspan="2">Larry the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </table>
        </>
    );

}

export default MaterialIndex;