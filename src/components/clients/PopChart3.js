// import { compose } from "redux";
// import { connect } from "react-redux";
// import { firestoreConnect } from "react-redux-firebase";
// import { Link } from "react-router-dom";
// import PropTypes from "prop-types";
import Chart from "react-apexcharts";
import React, { Component } from "react";

class PopChart3 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar",
          background: "#fff",
          foreColor: "#373d3f",
          height: "100",
          sparkline: {
            enabled: true
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

      series1: [
        {
          name: "series-1",
          data: [30, 80, 45, 50, 80, 60, 70, 10]
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
            className="col-md-auto shadow-sm p-3 mb-5 bg-white rounded-0 border-bottom border-success "
            // className="col-md-auto"
            options={this.state.options}
            series={this.state.series1}
            type="line"
            width="100%"
            height="150"
          />

          {/* <Chart
            className="col-sm"
            options={this.state.options}
            series={this.state.series1}
            type="line"
            width="100%"
            height="150"
          />
          <Chart
            className="col-sm"
            options={this.state.options}
            series={this.state.series1}
            type="line"
            width="100%"
            height="150"
          /> */}
        </div>
      </React.Fragment>
    );
  }
}

export default PopChart3;
