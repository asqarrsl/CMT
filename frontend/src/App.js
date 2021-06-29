import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import LandingPage from './User/Views/LandingPage/LangingPage';
import NavBar from './User/Components/NavBar/Navbar'
import Footer from './User/Components/Footer/Footer'
import './App.css'
import Payment from './User/Views/Payment/Payment';
import Dashboard from './Admin/Views/Dashboard/Dashboard';
import AdminRoute from './Admin/AdminRoute';
import MainAdmin from './Admin/Components/Layout/MainAdmin';
import Main from './User/Components/Layout/Main';
import UserIndex from './Admin/Views/User';
import AddUser from './Admin/Views/User/Add';
import EditUser from './Admin/Views/User/Edit';
import AddEvent from './Admin/Views/Event/Add';
import EditEvent from './Admin/Views/Event/Edit';
import EventIndex from './Admin/Views/Event';
import EditMaterial from './Admin/Views/Material/Edit';
import AddMaterial from './Admin/Views/Material/Add';
import MaterialIndex from './Admin/Views/Material';
import Login from "./User/Views/LoginPage/Login";
import Register from "./User/Views/RegisterPage/Register";
import UserProfile from "./User/Views/UserProfilePage/UserProfile";
import ViewEvent from './Admin/Views/Event/View';
import ViewMaterial from './Admin/Views/Material/View';

const App = (props) =>{
    return(
        <>
            <Router>
                <Switch>
                    <Route path='/admin/:path?'>
                        <MainAdmin>
                            <Switch>
                                <Route path='/admin/event/:id/edit' exact component={EditEvent} />
                                <Route path='/admin/event/:id' exact component={ViewEvent} />
                                <Route path='/admin/event/add' exact component={AddEvent} />
                                <Route path='/admin/event' exact component={EventIndex} />
                                <Route path='/admin/material/:id/edit' exact component={EditMaterial} />
                                <Route path='/admin/material/:id' exact component={ViewMaterial} />
                                <Route path='/admin/material/add' exact component={AddMaterial} />
                                <Route path='/admin/material' exact component={MaterialIndex} />
                                <Route path='/admin/user/:id/edit' exact component={EditUser} />
                                <Route path='/admin/user/add' exact component={AddUser} />
                                <Route path='/admin/user' exact component={UserIndex} />
                                <Route path='/admin' exact component={Dashboard} />
                                <Route path='*' component={Dashboard} />
                            </Switch>
                        </MainAdmin>
                    </Route>
                    <Route>
                        <Main>
                            <Switch>
                                <Route path='/' exact component={LandingPage} />
                                <Route path='/payment' component={Payment} />
                                  <Route path="/payment" component={Payment} />
                                  <Route path="/login" component={Login} />
                                  <Route path="/register" component={Register} />
                                  <Route path="/userprofile" component={UserProfile} />
                            </Switch>
                        </Main>
                    </Route>
                    {/* <Route path="/admin/dashboard" component={Dashboard} /> */}
                    {/* <AdminRoute path="/admin/dashboard" component={Dashboard}></AdminRoute> */}
                    {/* <AdminRoute path="/user/:id/edit" component={Dashboard}></AdminRoute> */}
                    {/* <Route path="/" component={LandingPage}  exact/>    */}
                </Switch>
            </Router>
        </>
    );
}

export default App;
