import React, { Component } from "react";
import { Link } from "react-router-dom";

import { compose } from "redux";
import { connect } from "react-redux";
import { firebaseConnect } from "react-redux-firebase";
import PropTypes from "prop-types";
import Sflogo from "../layout/sflogo.png";
import styled from "styled-components";

const Wrapper = styled.section`
  padding: 4em;
  background: #007bff;
`;
class AppNavbar extends Component {
  state = {
    isAuthenticated: false
  };

  static getDerivedStateFromProps(props, state) {
    const { auth } = props;

    if (auth.uid) {
      return { isAuthenticated: true };
    } else {
      return { isAuthenticated: false };
    }
  }

  onLogoutClick = e => {
    e.preventDefault();

    const { firebase } = this.props;
    firebase.logout();
  };

  render() {
    const { isAuthenticated } = this.state;
    const { auth } = this.props;

    return (
      <nav className="navbar navbar-expand-xl navbar-dark bg-primary mb-4 sticky-top">
        {/* <nav className="navbar navbar-expand-xl navbar-dark bg-primary mb-4"> */}
        <div className="container">
          <Link to="/" className="navbar-brand ">
            {/* SF System */}
            <img
              src={Sflogo}
              width="150"
              height="40"
              className="d-inline-block align-top"
              alt=""
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarMain"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarMain">
            <ul className="navbar-nav mr-auto">
              {isAuthenticated ? (
                <li className="navbar-item">
                  <Link to="/" className="nav-link ">
                    <i className="fas fa-tachometer-alt fa-fw" /> Dashboard
                  </Link>
                </li>
              ) : null}
              {isAuthenticated ? (
                <li className="navbar-item">
                  <Link to="/device" className="nav-link">
                    <i className="fas fa-hdd fa-fw" /> Device
                  </Link>
                </li>
              ) : null}
            </ul>
            {isAuthenticated ? (
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a href="#!" className="nav-link">
                    <i className="fas fa-user fa-fw" /> {auth.email}
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#!"
                    className="nav-link"
                    onClick={this.onLogoutClick}
                  >
                    <i className="fas fa-sign-out-alt fa-fw" />
                    Logout
                  </a>
                </li>
              </ul>
            ) : null}
          </div>
        </div>
      </nav>
    );
  }
}

AppNavbar.propTypes = {
  firebase: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

export default compose(
  firebaseConnect(),
  connect((state, props) => ({
    auth: state.firebase.auth
  }))
)(AppNavbar);
