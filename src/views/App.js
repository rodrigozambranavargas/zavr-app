import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// Pages
import ZavrPTIndex from "views/ZavrPTIndex.js";

import Navbar from "components_II/Navbar";
import Home from "components_II/Home";
import Products from "components_II/Products";
import ProductAdmin from "components_II/ProductAdmin";
import LogIn from "components_II/auth/LogIn";
import Register from "components_II/auth/Register";
import ForgotPassword from "components_II/auth/ForgotPassword";
import ForgotPasswordVerification from "components_II/auth/ForgotPasswordVerification";
import ChangePassword from "components_II/auth/ChangePassword";
import ChangePasswordConfirm from "components_II/auth/ChangePasswordConfirm";
import Welcome from "components_II/auth/Welcome";
import Footer from "components_II/Footer";
import { Auth } from "aws-amplify";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
library.add(faEdit);

class App extends Component {
  //
  state = {
    isAuthenticated: false,
    isAuthenticating: true,
    user: null
  };

  setAuthStatus = authenticated => {
    this.setState({ isAuthenticated: authenticated });
  };

  setUser = user => {
    this.setState({ user: user });
  };

  async componentDidMount() {
    try {
      const session = await Auth.currentSession();
      this.setAuthStatus(true);
      console.log(session);
      const user = await Auth.currentAuthenticatedUser();
      this.setUser(user);
    } catch (error) {
      if (error !== "No current user") {
        console.log(error);
      }
    }

    this.setState({ isAuthenticating: false });
  }

  //
  render() {
    const authProps = {
      isAuthenticated: this.state.isAuthenticated,
      user: this.state.user,
      setAuthStatus: this.setAuthStatus,
      setUser: this.setUser
    };
    return (
      !this.state.isAuthenticating && (
        <div className="">
          <BrowserRouter>
            <div>
              {/* <Navbar auth={authProps} /> */}
              <Switch>
                <Route
                  path="/indexPT"
                  render={props => <ZavrPTIndex {...props} />}
                />
                {/* <Route
                  exact
                  path="/LogIn"
                  render={props => <LogIn {...props} auth={authProps} />}
                /> */}

                {/*
                <Route
                  exact
                  path="/products"
                  render={props => <Products {...props} auth={authProps} />}
                />
                <Route
                  exact
                  path="/admin"
                  render={props => <ProductAdmin {...props} auth={authProps} />}
                />
                <Route
                  exact
                  path="/login"
                  render={props => <LogIn {...props} auth={authProps} />}
                />
                <Route
                  exact
                  path="/register"
                  render={props => <Register {...props} auth={authProps} />}
                />
                <Route
                  exact
                  path="/forgotpassword"
                  render={props => (
                    <ForgotPassword {...props} auth={authProps} />
                  )}
                />
                <Route
                  exact
                  path="/forgotpasswordverification"
                  render={props => (
                    <ForgotPasswordVerification {...props} auth={authProps} />
                  )}
                />
                <Route
                  exact
                  path="/changepassword"
                  render={props => (
                    <ChangePassword {...props} auth={authProps} />
                  )}
                />
                <Route
                  exact
                  path="/changepasswordconfirmation"
                  render={props => (
                    <ChangePasswordConfirm {...props} auth={authProps} />
                  )}
                />
                <Route
                  exact
                  path="/welcome"
                  render={props => <Welcome {...props} auth={authProps} />}
                /> */}
                <Redirect to="/indexPT" />
              </Switch>
            </div>
          </BrowserRouter>
        </div>
      )
    );
  }
}

export default App;
