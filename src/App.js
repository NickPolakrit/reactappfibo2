import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import { Provider } from "react-redux";
import store from "./store";

import AppNavbar from "./components/layout/AppNavbar";
import Device from "./components/layout/Device";
import AddClient from "./components/clients/AddClient";
import ClientDetails from "./components/clients/ClientDetails";
import Login from "./components/auth/Login";

import Dashboard from "./components/layout/Dashboard";
import NotFound from "./components/pages/NotFound";
import Landing from "./components/pages/Landing";
import About from "./components/pages/About";

import { UserIsAuthenticated, UserIsNotAuthenticated } from "./helpers/auth";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <AppNavbar />
            <div className="container">
              <Switch>
                <Route
                  exact
                  path="/device"
                  component={UserIsAuthenticated(Device)}
                />
                <Route
                  exact
                  path="/client/add"
                  component={UserIsAuthenticated(AddClient)}
                />
                <Route
                  exact
                  path="/client/:id"
                  component={UserIsAuthenticated(ClientDetails)}
                />
                <Route
                  exact
                  path="/dashboard"
                  component={UserIsAuthenticated(Dashboard)}
                />
                <Route
                  exact
                  path="/about"
                  component={UserIsAuthenticated(About)}
                />
                <Route
                  exact
                  path="/login"
                  component={UserIsNotAuthenticated(Login)}
                />
                <Route
                  exact
                  path="/"
                  component={UserIsNotAuthenticated(Landing)}
                />
                <Route component={UserIsAuthenticated(NotFound)} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
