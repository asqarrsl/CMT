import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LandingPage from './User/Views/LandingPage/LangingPage';
import './App.css'
import Payment from './User/Views/Payment/Payment';
import Dashboard from './Admin/Views/Dashboard/Dashboard';
import MainAdmin from './Admin/Components/Layout/MainAdmin';
import Main from './User/Components/Layout/Main';
import Events from './User/Components/Events/events';
import Papers from './User/Components/Papers/papers';
import EventDetails from './User/Components/Events/eventDetails';
import PaperDetails from './User/Components/Papers/paperDetails';
import Test from './User/Components/Test/Test';
import researchPapers from './User/Components/Papers/ressearchPapers';
import conference from './User/Components/Events/conference';
import eventMaterials from './User/Components/Events/eventMaterials';


const App = (props) => {
    return (
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
                                <Route path='/' exact component={LandingPage} />
                                <Route path='/payment' component={Payment} />
                                <Route path='/events' component={Events} />
                                <Route path='/papers' component={Papers} />
                                <Route path='/event_details' component={EventDetails} />
                                <Route path='/conference' component={conference} />
                                <Route path='/event_materials' component={eventMaterials} />
                                <Route path='/paper_details' component={PaperDetails} />
                                <Route path='/research_papers' component={researchPapers} />
                                <Route path='/test' component={Test} />
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