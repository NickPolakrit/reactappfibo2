import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
// import { compose } from "redux";
// import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";

class AddClient extends Component {
  state = {
    Name: "",
    Time: "",
    Performance: "",
    Availability: "",
    Quality: "",
    OEE: ""
  };

  onSubmit = e => {
    e.preventDefault();

    const newClient = this.state;

    const { firestore, history } = this.props;

    // if  3 no value , make 0
    if (newClient.Availability === "") {
      newClient.Availability = 0;
    }
    if (newClient.Performance === "") {
      newClient.Performance = 0;
    }
    if (newClient.Quality === "") {
      newClient.Quality = 0;
    }
    if (newClient.OEE === "") {
      newClient.OEE = parseFloat(
        (((((parseFloat(newClient.Performance.toString()) / 100) *
          parseFloat(newClient.Availability.toString())) /
          100) *
          parseFloat(newClient.Quality.toString())) /
          100) *
          100
      ).toFixed(2);
    }
    if (newClient.Time === "") {
      newClient.Time = new Date().toLocaleString();
    }

    firestore
      .add({ collection: "clients" }, newClient)
      .then(() => history.push("/device"));
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-6">
            <Link to="/device" className="btn btn-link">
              <i className="fas fa-arrow-circle-left" /> Back To Device
            </Link>
          </div>
        </div>

        <div className="card">
          <div className="card-header">Add Client</div>
          <div className="card-body">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="Name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="Name"
                  minLength="2"
                  required
                  onChange={this.onChange}
                  value={this.state.Name}
                />
              </div>

              <div className="form-group">
                <label htmlFor="Availability">Availability</label>
                <input
                  type="number"
                  className="form-control"
                  name="Availability"
                  maxLength="2"
                  //   required
                  onChange={this.onChange}
                  value={this.state.Availability}
                />
              </div>

              <div className="form-group">
                <label htmlFor="Performance">Performance</label>
                <input
                  type="number"
                  className="form-control"
                  name="Performance"
                  maxLength="2"
                  //   required
                  onChange={this.onChange}
                  value={this.state.Performance}
                />
              </div>

              <div className="form-group">
                <label htmlFor="Quality">Quality</label>
                <input
                  type="number"
                  className="form-control"
                  name="Quality"
                  maxLength="2"
                  //   required
                  onChange={this.onChange}
                  value={this.state.Quality}
                />
              </div>

              {/* <div className="form-group">
                <label htmlFor="OEE">OEE</label>
                <input
                  type="number"
                  className="form-control"
                  name="OEE"
                  maxLength="2"
                  //   required
                  onChange={this.onChange}
                  value={this.state.OEE}
                />
              </div> */}
              <input
                type="submit"
                value="Submit"
                className="btn btn-primary btn-block"
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

AddClient.propTypes = {
  firestore: PropTypes.object.isRequired
};

export default firestoreConnect()(AddClient);
