import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import Spinner from "../layout/Spinner";
class Clients extends Component {
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
  state = {
    totalMc: null
  };

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
          <div className="row ">
            <div className="col-md-6">
              <h2>
                {" "}
                <i className="fas fa-hdd" /> Devices{" "}
              </h2>
            </div>
            <div className="col-md-6">
              <h5 className="text-right text-secondary ">
                Date/Time :{" "}
                <span className="text-primary ">
                  {/* {parseFloat(totalMc).toFixed(2)} */}
                  {/* {new Date().toLocaleTimeString()} */}
                  {this.state.time}
                  {/* error Time */}
                </span>
              </h5>
            </div>
          </div>
          <table className="table table-striped table-responsive-xl">
            <thead className="thead-inverse">
              <tr>
                <th>Name</th>
                <th>Availability</th>
                <th>Performance</th>
                <th>Quality</th>
                <th>OEE</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {clients.map(client => (
                <tr key={client.id}>
                  <td>
                    {client.Name}{" "}
                    <span className="badge badge-success">
                      {" "}
                      <i className="far fa-clock fa-fw " />
                      {client.Time}
                    </span>
                  </td>
                  <td>{client.Availability} %</td>
                  <td>{client.Performance} %</td>
                  <td> {client.Quality} %</td>
                  {/* <td> {client.OEE} %</td> */}
                  <td>
                    {parseFloat(
                      (((((parseFloat(client.Performance.toString()) / 100) *
                        parseFloat(client.Availability.toString())) /
                        100) *
                        parseFloat(client.Quality.toString())) /
                        100) *
                        100
                    ).toFixed(2)}
                    %
                  </td>
                  <td>
                    <Link
                      to={`/client/${client.id}`}
                      className="btn btn-secondary btn-sm"
                    >
                      <i className="fas fa-arrow-circle-right" /> Details
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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
  firestoreConnect([{ collection: "clients", orderBy: "Time" }]),
  connect((state, props) => ({
    clients: state.firestore.ordered.clients
  }))
)(Clients);
