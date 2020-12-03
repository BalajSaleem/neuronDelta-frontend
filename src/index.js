/*! Developed by Alinon */
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";

import AdminLayout from "layouts/Admin.js";
import AuthLayout from "layouts/Auth.js";
import ManagerLayout from "components/Manager/Manager.js";
import UserLayout from "components/User/User.js";


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/admin" render={props => <AdminLayout {...props} />} />
      <Route path="/manager" render={props => <ManagerLayout {...props} />} />
      <Route path="/user" render={props => <UserLayout {...props} />} />
      <Route path="/auth" render={props => <AuthLayout {...props} />} />
      
      <Redirect from="/" to="/user/index" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);  
