import React, { Component } from "react";
import Chart from "react-apexcharts";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";

class DashChart extends Component {
  constructor(props) {
    super(props);

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
        title: {
          text: "OEE Realtime",
          align: "left",
          margin: 0,
          offsetX: 10,
          offsetY: 10,
          floating: false,
          style: {
            fontSize: "16px",
            color: "#263238"
          }
        },

        //------
        xaxis: {
          // labels: {
          //   format: "D/T"
          // },
          type: "datetime",
          categories: [
            "2018/09/19T00:00:00",
            "2018/09/19T01:30:00",
            "2018/09/19T02:30:00",
            "2018/09/19T03:30:00",
            "2018/09/19T04:30:00",
            "2018/09/19T05:30:00",
            "2018/09/19T06:30:00"
          ]
        },
        yaxis: {
          max: 100
        },
        tooltip: {
          x: {
            format: "dd/MM/yy HH:mm:ss"
          }
        }
      },
      series: [
        {
          name: "A01",
          data: [31, 40, 28, 51, 42, 100, 100]
        },
        {
          name: "A02",
          data: [11, 32, 45, 32, 34, 52, 41]
        },
        {
          name: "A03",
          data: [9, 39, 33, 69, 70, 50, 75]
        }
      ]
    };
  }

  render() {
    const { clients } = this.props;

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

export default DashChart;
