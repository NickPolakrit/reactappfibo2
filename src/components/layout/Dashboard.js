import React, { Component } from "react";
import Chart from "react-apexcharts";

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
        }
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91]
        },
        {
          name: "series-2",
          data: [40, 50, 55, 60, 59, 70, 60, 99]
        }
      ]
    };
  }

  render() {
    return (
      <div
        className="card border-primary mb-3 shadow-lg p-3 mb-5 bg-white rounded"
        style={{ width: "550px" }}
      >
        <div className="card-body">
          <div className="app">
            <div className="row">
              <div className="mixed-chart">
                <Chart
                  options={this.state.options}
                  series={this.state.series}
                  type="line"
                  width="500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
