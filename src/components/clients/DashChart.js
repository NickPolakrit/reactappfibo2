import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import Spinner from "../layout/Spinner";
import Chart from "react-apexcharts";

class DashChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        chart: {
          id: "chart01",
          background: "#fff",
          foreColor: "#373d3f",
          height: "100",
          sparkline: {
            enabled: false
          }
        },
        stroke: {
          width: 5,
          curve: "smooth"
        },
        markers: {
          size: 5,
          colors: "#F9C80E",
          strokeColor: "#fff",
          strokeWidth: 2,
          strokeOpacity: 0.9,
          fillOpacity: 2,
          discrete: [],
          shape: "circle",
          radius: 2,
          offsetX: 0,
          offsetY: 0,
          hover: {
            size: 2,
            sizeOffset: 5
          }
        },

        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
        },
        title: {
          text: "OEE",
          align: "left",
          margin: 0,
          offsetX: 10,
          offsetY: 10,
          floating: false,
          style: {
            fontSize: "16px",
            color: "#263238"
          }
        }
      },

      date01: [
        {
          name: "oee",
          data: [30, 80, 45, 50, 80, 60, 70, 10, 10, 12]
        }
      ]
    };
  }

  render() {
    const { clients } = this.props;
    let arr = [];
    if (clients) {
      return (
        // <div className="row">
        //   <Chart
        //     className="col-md-auto"
        //     options={this.state.options}
        //     series={this.state.date01}
        //     type="line"
        //     width="200%"
        //     // height="150"
        //   />
        // </div>
        // <div>store.firestore.get({{client.Name}}),</div>
        <div>
          {clients.map(client =>
            // <i key={client.id}> {client.Name} </i>
            arr.push(client.Name)
          )}
        </div>
      );
    } else {
      return <Spinner />;
    }
  }
}

DashChart.propTypes = {
  firestore: PropTypes.object.isRequired,
  clients: PropTypes.array
};

export default compose(
  firestoreConnect([{ collection: "clients", orderBy: "Time" }]),
  connect((state, props) => ({
    clients: state.firestore.ordered.clients
  }))
)(DashChart);
