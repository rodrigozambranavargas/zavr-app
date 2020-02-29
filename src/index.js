import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss";
//import "assets/demo/demo.css";

// pages
import ZavrIndex from "views/ZavrIndex.js";
//import RegisterPage from "views/examples/RegisterPage.js";

// others

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/zavr" render={props => <ZavrIndex {...props} />} />
      {/*  <Route
        path="/register-page"
        render={props => <RegisterPage {...props} />}
      /> */}
      <Redirect to="/index" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
