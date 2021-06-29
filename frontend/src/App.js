import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import LandingPage from './User/Views/LandingPage/LangingPage';
import NavBar from './User/Components/NavBar/Navbar'
import Footer from './User/Components/Footer/Footer'
import './App.css'
import Payment from './User/Views/Payment/Payment';
import Dashboard from './Admin/Views/Dashboard/Dashboard';
import AdminRoute from './Admin/AdminRoute'
import MainAdmin from './Admin/Components/Layout/MainAdmin';
import Main from './User/Components/Layout/Main';
import WCForm from './User/Views/Workshop/WCForm';
const App = (props) =>{
    return(
        <>
            <Router>
                <Switch>
                    <Route path='/admin/:path?' exact>
                        <MainAdmin>
                            <Switch>
                                <Route path='/admin' exact component={Dashboard} />
                            </Switch>
                        </MainAdmin>
                    </Route>
                    <Route>
                        <Main>
                            <Switch>                
                                <Route path="/Payment" component={Payment} />
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