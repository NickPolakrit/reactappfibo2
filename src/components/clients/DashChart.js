import React, { Component } from "react";
import Chart from "react-apexcharts";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

class DashChart extends Component {
  constructor(props) {
    super(props);
    const newSeries = [];
    const timeG = [];
    const { clients } = this.props;

    this.state = {
      options: {
        chart: {
          background: "#fff",
          foreColor: "#373d3f",
          sparkline: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: "smooth"
        },

        //------
        xaxis: {
          type: "datetime",
          categories: [
            "2018-09-19T00:00:00",
            "2018-09-19T01:30:00",
            "2018-09-19T02:30:00",
            "2018-09-19T03:30:00",
            "2018-09-19T04:30:00",
            "2018-09-19T05:30:00",
            "2018-09-19T06:30:00"
          ]
        },
        tooltip: {
          x: {
            format: "dd/MM/yy HH:mm:ss"
          }
        }
      },
      series: newSeries
    };
    this.state.series.map(s => {
      clients.map(client => {
        return client.Quality;
      });
      newSeries.push({ clients, name: clients.Name });
    });
  }

  render() {
    return (
      <React.Fragment>
        <div className="row">
          <Chart
            className="col shadow-lg p-3 mb-5 bg-white rounded border border-success"
            options={this.state.options}
            series={this.state.series}
            type="area"
            width="100%"
            height="450"
          />
        </div>
      </React.Fragment>
    );
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
