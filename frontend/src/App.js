import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import LandingPage from './Views/LandingPage/LangingPage';
import NavBar from './Components/NavBar/Navbar'
import Footer from './Components/Footer/Footer'
import './App.css'
import Payment from './Views/Payment/Payment';

const App = (props) =>{
    return(
        <>
            <NavBar />
            <Router>
                <Switch>
                    <Route path="/" component={LandingPage}  exact/>   
                    <Route path="/payment" component={Payment}  exact/>   
                    {/* <Route path="/" component={LandingPage}  exact/>    */}
                </Switch>
            </Router>
            <Footer />
        </>
    );
}

export default App;