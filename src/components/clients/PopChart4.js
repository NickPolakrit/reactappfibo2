import React, { Component } from "react";
import Chart from "react-apexcharts";

class PopChart4 extends Component {
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
        plotOptions: {
          radialBar: {
            startAngle: -135,
            endAngle: 225,
            hollow: {
              margin: 0,
              size: "70%",
              background: "#fff",
              image: undefined,
              imageOffsetX: 0,
              imageOffsetY: 0,
              position: "front",
              dropShadow: {
                enabled: true,
                top: 3,
                left: 0,
                blur: 4,
                opacity: 0.24
              }
            },
            track: {
              background: "#fff",
              strokeWidth: "67%",
              margin: 0, // margin is in pixels
              dropShadow: {
                enabled: true,
                top: -3,
                left: 0,
                blur: 4,
                opacity: 0.35
              }
            },

            dataLabels: {
              showOn: "always",
              name: {
                offsetY: -10,
                show: true,
                color: "#888",
                fontSize: "17px"
              },
              value: {
                formatter: function(val) {
                  return parseInt(val);
                },
                color: "#111",
                fontSize: "36px",
                show: true
              }
            }
          }
        },
        fill: {
          type: "gradient",
          colors: "#FF5722",
          gradient: {
            shade: "light",
            type: "horizontal",
            shadeIntensity: 0.5,
            gradientToColors: ["#FFEB3B"],
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100]
          }
        },
        stroke: {
          lineCap: "round"
        },
        title: {
          text: "Performance",
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
        labels: ["Percent"]
        //------
      },
      series: [64]
    };
  }

  render() {
    return (
      <div className="row">
        <Chart
          className="col-sm shadow-lg mb-3 p-1 bg-white rounded-0 border-bottom border-warning"
          options={this.state.options}
          series={this.state.series}
          type="radialBar"
          // width="50%"
          height="180"
        />
      </div>
    );
  }
}

export default PopChart4;
