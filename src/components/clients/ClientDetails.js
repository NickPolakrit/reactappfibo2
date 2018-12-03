import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import Spinner from "../layout/Spinner";
import classnames from "classnames";

class ClientDetails extends Component {
  render() {
    const { client } = this.props;

    if (client) {
      return (
        <div>
          <div className="row">
            <div className="col-md-6">
              <Link to="/" className="btn btn-link">
                <i className="fas fa-arrow-circle-left fa-fw" />
                Back To Dashboard
              </Link>
            </div>
            {/* <div className="col-md-6">
              <div className="btn-group float-right">
                <Link to={`/client/edit/${client.id}`} className="btn btn-dark">
                  Edit
                </Link>
                <button className="btn btn-danger">Delete</button>
              </div>
            </div> */}
          </div>
          <hr />
          <div className="card">
            <h3 className="card-header">
              {client.Name}
              {"  "}
              <span className="badge badge-danger">
                {" "}
                <i className="far fa-clock fa-fw " />
                {client.Time}
              </span>
            </h3>
            <div className="card-body">
              <div className="row">
                <div className="col-md-8 col-sm-6">
                  <h4>
                    Device ID: {""}{" "}
                    <span className="text-secondary">{client.id} </span>{" "}
                  </h4>
                </div>
                <div className="col-md-4 col-sm-6">
                  <button type="button" className="btn btn-success">
                    OEE{" "}
                    <span className="badge badge-light"> {client.OEE} %</span>
                  </button>
                </div>
              </div>
              <hr />
              <ul className="list-group">
                <li className="list-group-item">
                  Availability : {client.Availability} %
                </li>
                <li className="list-group-item">
                  Performance : {client.Performance} %
                </li>
                <li className="list-group-item">
                  Quality : {client.Quality} %
                </li>
              </ul>
            </div>
          </div>
        </div>
      );
    } else {
      return <Spinner />;
    }
  }
}

ClientDetails.propTypes = {
  firestore: PropTypes.object.isRequired
};

export default compose(
  firestoreConnect(props => [
    { collection: "clients", storeAs: "client", doc: props.match.params.id }
  ]),
  connect(({ firestore: { ordered } }, props) => ({
    client: ordered.client && ordered.client[0]
  }))
)(ClientDetails);
