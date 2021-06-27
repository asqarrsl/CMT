import React from 'react'
import Breadcrumb from '../../Components/Breadcrumb/BreadCrumb';

const AddResearchMaterial = () =>{
    var titles = [
        {
            name : 'Admin',
            link : '/admin'
        },
        {
            name : 'Research Material',
            link : '/researchmaterial'
        },
        {
            name : 'Add Research Material',
            link : '/add'
        }
    ]
        
    return(
        <>
            <Breadcrumb titles={titles} />
            <hr />
            <div className="fs-4">All Research Material</div>
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

export default AddResearchMaterial;