import React from "react";
import Chart from "chart.js";
import "./ChartView.css";

export default class ChartView extends React.Component {
  componentDidMount() {
    var ctx = document.getElementById("canvas-bar").getContext("2d");
    var chart = new Chart(ctx, {
      // The type of chart we want to create
      type: "line",

      // The data for our dataset
      data: {
        labels: this.props.timeline
          .slice(0, 50)
          .reverse()
          .map(x => x.date),
        datasets: [
          {
            label: "Confirmed Cases",
            borderColor: "rgb(61, 69, 104)",
            backgroundColor: "rgb(255,255,255, 0)",
            data: this.props.timeline
              .slice(0, 50)
              .reverse()
              .map(x => x.confirmed)
          }
        ]
      },

      // Configuration options go here
      options: {}
    });
    chart.render();
    var ctx_2 = document.getElementById("canvas-2").getContext("2d");
    var chart_2 = new Chart(ctx_2, {
      // The type of chart we want to create
      type: "doughnut",

      // The data for our dataset
      data: {
        labels: ["confirmed", "deaths", "recovered"],
        datasets: [
          {
            backgroundColor: [
              "rgb(216, 69, 69)",
              "rgb(34, 35, 39)",
              "rgb(55, 219, 137)"
            ],
            data: [
              this.props.confirmed,
              this.props.deaths,
              this.props.recovered
            ]
          }
        ]
      },

      // Configuration options go here
      options: {
        cutoutPercentage: 70
      }
    });
    chart_2.render();
    console.log(this.props.timeline);
  }

  render() {
    return (
      <div className="ChartApp">
        <canvas id="canvas-2"></canvas>
        <canvas id="canvas-bar"></canvas>
      </div>
    );
  }
}
