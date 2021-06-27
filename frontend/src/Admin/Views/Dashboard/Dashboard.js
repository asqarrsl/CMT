import React from 'react';
import Breadcrumb from '../../Components/Breadcrumb/BreadCrumb';

const Dashboard = () => {
    var titles = [
        {
            name : 'Admin',
            link : '/admin'
        },
        {
            name : 'Dashboard',
            link : '/admin'
        }
    ]
        
    return(
        <>
            <Breadcrumb titles={titles} />
        </>
    );
}

export default Dashboard;