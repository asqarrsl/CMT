import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";
import "./App.css";

import PrivateRoute from "./Utils/PrivateRoute";
import PublicRoute from "./Utils/PublicRoute";
import { getToken, removeUserSession, setUserSession } from "./Utils/Common";

import LandingPage from "./User/Views/LandingPage/LangingPage";
import NavBar from "./User/Components/NavBar/Navbar";
import Footer from "./User/Components/Footer/Footer";
import Login from "./User/Views/LoginPage/Login";

import AdminRoute from "./Admin/AdminRoute";
import MainAdmin from "./Admin/Components/Layout/MainAdmin";
import Dashboard from "./Admin/Views/Dashboard/Dashboard";
import Main from "./User/Components/Layout/Main";
import UserIndex from "./Admin/Views/User";
import AddUser from "./Admin/Views/User/Add";
import EditUser from "./Admin/Views/User/Edit";
import AddEvent from "./Admin/Views/Event/Add";
import EditEvent from "./Admin/Views/Event/Edit";
import EventIndex from "./Admin/Views/Event";
import EditMaterial from "./Admin/Views/Material/Edit";
import AddMaterial from "./Admin/Views/Material/Add";
import MaterialIndex from "./Admin/Views/Material";

import Register from "./User/Views/RegisterPage/Register";
import UserProfile from "./User/Views/UserProfilePage/UserProfile";
import Payment from "./User/Views/Payment/Payment";
import WorkshopMgt from "./User/Views/WorkshopMgtPage/WorkshopMgt";
import MaterialAdd from "./User/Views/Material/Add";
import MaterialEdit from "./User/Views/Material/Edit";

const App = (props) => {
  // const [isAuth, setIsAuth] = useState();
  const [authLoading, setAuthLoading] = useState(true);
  const [userInfo, setUserInfo] = useState();
  const [token, setToken] = useState();

  useEffect(() => {
    const token = getToken();
    if (!token) {
      return;
    }

    axios
      .get(`http://localhost:1234/verifyToken?token=${token}`)
      .then((response) => {
        setUserSession(response.data.token, response.data.user);
        setAuthLoading(false);
      })
      .catch((error) => {
        removeUserSession();
        setAuthLoading(false);
      });
  }, []);

  if (authLoading && getToken()) {
    return <div className="content">Checking Authentication...</div>;
  }

  return (
    <>
      <Router>
        <Switch>
          <Route path="/admin/:path?">
            <MainAdmin>
              <Switch>
                <Route
                  path="/admin/event/:id/edit"
                  exact
                  component={EditEvent}
                />
                <Route path="/admin/event/add" exact component={AddEvent} />
                <Route path="/admin/event" exact component={EventIndex} />
                <Route
                  path="/admin/material/:id/edit"
                  exact
                  component={EditMaterial}
                />
                <Route
                  path="/admin/material/add"
                  exact
                  component={AddMaterial}
                />
                <Route path="/admin/material" exact component={MaterialIndex} />
                <Route path="/admin/user/:id/edit" exact component={EditUser} />
                <Route path="/admin/user/add" exact component={AddUser} />
                <Route path="/admin/user" exact component={UserIndex} />
                <AdminRoute path="/admin" exact component={Dashboard} />
                <Route path="*" component={Dashboard} />
              </Switch>
            </MainAdmin>
          </Route>
          <Route>
            <Main>
              <Switch>
                <Route path="/" exact component={LandingPage} />
                <Route path="/login" component={Login} />
                <Route path="/payment" component={Payment} />
                <Route path="/payment" component={Payment} />
                <Route path="/register" component={Register} />
                <Route path="/userprofile" component={UserProfile} />
                <Route path="/workshopMgt" component={WorkshopMgt} />
                <Route path="/materialadd" component={MaterialAdd} />
                <Route path="/materialedit" component={MaterialEdit} />
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
};

export default App;
