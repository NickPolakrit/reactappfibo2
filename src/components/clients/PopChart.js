import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import Spinner from "../layout/Spinner";
class PopChart extends Component {
  // ? -- time ---------------
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleString()
    };
  }
  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  tick() {
    this.setState({
      time: new Date().toLocaleString()
    });
  }
  // ?-- Time --------------
  // state = {
  //   totalMc: null
  // };

  static getDerivedStateFromProps(props, state) {
    const { clients } = props;

    // if (clients) {
    //   const total = clients.reduce((total, client) => {
    //     return total + parseFloat(client.OEE.toString()); // ERROR !!!!
    //   }, 0);

    //   return { totalMc: total };
    // }

    return null;
  }

  render() {
    const { clients } = this.props;
    // const dateTime = new Date().toLocaleString();
    // clearInterval(clients, 100);

    if (clients) {
      return (
        <div>
          {clients.map(client => (
            <a>{client.Name}</a>
          ))}
        </div>
      );
    } else {
      return <Spinner />;
    }
  }
}

PopChart.propTypes = {
  firestore: PropTypes.object.isRequired,
  clients: PropTypes.array
};

export default compose(
  firestoreConnect([{ collection: "clients", orderBy: "Time" }]),
  connect((state, props) => ({
    clients: state.firestore.ordered.clients
  }))
)(PopChart);
