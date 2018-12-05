import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import Spinner from "../layout/Spinner";

class Clients extends Component {
  render() {
    const { clients } = this.props;

    if (clients) {
      return (
        <div>
          {clients.map(
            client => (
              <i> {client.Name} </i>
            )
            // <td>{client.Availability} </td>
            // <td>{client.Performance} </td>
            // <td> {client.Quality} </td>
            // </tr>
          )}
        </div>
      );
    } else {
      return <Spinner />;
    }
  }
}

Clients.propTypes = {
  firestore: PropTypes.object.isRequired,
  clients: PropTypes.array
};

export default compose(
  firestoreConnect([{ collection: "clients", orderBy: "Name" }]),
  connect((state, props) => ({
    clients: state.firestore.ordered.clients
  }))
)(Clients);
