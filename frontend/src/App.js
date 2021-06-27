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
import EditWorkshop from './Admin/Views/Workshop/Edit';
import AddWorkshop from './Admin/Views/Workshop/Add';
import WorkshopIndex from './Admin/Views/Workshop';
import EditWorkshopMaterial from './Admin/Views/WorkshopMaterial/Edit';
import AddWorkshopMaterial from './Admin/Views/WorkshopMaterial/Add';
import AddConference from './Admin/Views/Conference/Add';
import EditConference from './Admin/Views/Conference/Edit';
import ConferenceIndex from './Admin/Views/Conference';
import WorkshopMaterialIndex from './Admin/Views/WorkshopMaterial';
import EditResearchMaterial from './Admin/Views/ResearchMaterial/Edit';
import AddResearchMaterial from './Admin/Views/ResearchMaterial/Add';
import ResearchMaterialIndex from './Admin/Views/ResearchMaterial';
import UserIndex from './Admin/Views/User';
import AddUser from './Admin/Views/User/Add';
import EditUser from './Admin/Views/User/Edit';
const App = (props) =>{
    return(
        <>
            <Router>
                <Switch>
                    <Route path='/admin/:path?' exact>
                        <MainAdmin>
                            <Switch>
                                <Route path='/admin/conference/:id/edit' exact component={EditConference} />
                                <Route path='/admin/conference/add' exact component={AddConference} />
                                <Route path='/admin/conference' exact component={ConferenceIndex} />
                                <Route path='/admin/workshop/:id/edit'exact component={EditWorkshop} />
                                <Route path='/admin/workshop/add' exact component={AddWorkshop} />
                                <Route path='/admin/workshop' exact component={WorkshopIndex} />
                                <Route path='/admin/workshopmaterial/:id/edit' exact component={EditWorkshopMaterial} />
                                <Route path='/admin/workshopmaterial/add' exact component={AddWorkshopMaterial} />
                                <Route path='/admin/workshopmaterial' exact component={WorkshopMaterialIndex} />
                                <Route path='/admin/researchmaterial/:id/edit' exact component={EditResearchMaterial} />
                                <Route path='/admin/researchmaterial/add' exact component={AddResearchMaterial} />
                                <Route path='/admin/researchmaterial' exact component={ResearchMaterialIndex} />
                                <Route path='/admin/user/:id/edit' exact component={AddUser} />
                                <Route path='/admin/user/add' exact component={EditUser} />
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