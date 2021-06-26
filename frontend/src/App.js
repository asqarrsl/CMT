import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import LandingPage from './User/Views/LandingPage/LangingPage';
import NavBar from './User/Components/NavBar/Navbar'
import Footer from './User/Components/Footer/Footer'
import './App.css'
import Payment from './User/Views/Payment/Payment';
import Dashboard from './Admin/Views/Dashboard/Dashboard';
import AdminRoute from './Admin/AdminRoute'
const App = (props) =>{
    return(
        <>
            <NavBar />
            <Router>
                <Switch>
                    <Route path="/admin/dashboard" component={Dashboard} />

                    {/* <AdminRoute path="/admin/dashboard" component={Dashboard}></AdminRoute> */}
                    {/* <AdminRoute path="/user/:id/edit" component={Dashboard}></AdminRoute> */}
                    
                    <Route path="/payment" component={Payment} />
                    <Route path="/" component={LandingPage}  />
                    {/* <Route path="/" component={LandingPage}  exact/>    */}
                </Switch>
            </Router>
            <Footer />
        </>
    );
}

export default App;