// React
import React from "react";
import ReactDOM from "react-dom";
//import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss";
//import "bulma/css/bulma.min.css"; // CSS de login

// Pages
import App from "views/App.js";

// AWS
import Amplify from "aws-amplify"; // AWS Amplify es una plataforma de desarrollo para la creación de aplicaciones móviles y web seguras y escalables.
import config from "AWS/config";

// Configuration AWS Amplify
Amplify.configure({
  Auth: {
    mandatorySignIn: true,
    region: config.cognito.REGION,
    userPoolId: config.cognito.USER_POOL_ID,
    userPoolWebClientId: config.cognito.APP_CLIENT_ID // Base de datos
  }
});

ReactDOM.render(<App />, document.getElementById("root"));
