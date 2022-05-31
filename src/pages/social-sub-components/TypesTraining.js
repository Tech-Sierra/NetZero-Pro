import React from "react";
import { Doughnut } from "react-chartjs-2";

import { AiFillInfoCircle } from "react-icons/ai";
import { Button } from "@mui/material";
import ActionButton from "../governance-sub-component/ActionButton";

function TypesTraining() {
  const data = {
    maintainAspectRatio: true,
    responsive: true,
    labels: [
      "Compliance training",
      "Fresher’s training",
      "Lateral trainings (Technical)",
      "Behavioral training",
      "Other E-learnings",
    ],
    datasets: [
      {
        data: [0.9, 1.8, 2, 0.6, 9],
        backgroundColor: [
          "#155EA2",
          "#FCEA64",
          "#32E7A4",
          "#04B1B4",
          "#64B5FC",
        ],
        // hoverBackgroundColor: chartColors,
      },
    ],
  };

  const options = {
    elements: {
      arc: {
        borderWidth: 0,
      },
    },
    plugins: {
      title: {
        responsive: true,
        animation: {
          animateScale: true,
        },
      },
      legend: {
        display: false,
        position: "right",
      },
      maintainAspectRatio: false,
    },
  };

  const plugins = [
    {
      beforeDraw: function (chart) {
        var width = chart.width,
          height = chart.height,
          ctx = chart.ctx;
        ctx.restore();
        var fontSize = (height / 180).toFixed(2);
        ctx.font = fontSize + "em sans-serif";
        ctx.textBaseline = "top";
        var text = "13.11M",
          textX = Math.round((width - ctx.measureText(text).width) / 2),
          textY = height / 2.2;
        ctx.fillText(text, textX, textY);
        ctx.save();
      },
    },
  ];

  return (
    <div className="chart_container social_doughnut">
      <div className="header_title">
        <div className="title">
          <p>Types of Training</p>
        </div>
        <Button>
          <AiFillInfoCircle color="grey"></AiFillInfoCircle>
        </Button>
      </div>
      <div className="bar_chart" style={{ height: "32vh" }}>
        <Doughnut data={data} options={options} plugins={plugins} />
      </div>
    </div>
  );
}

export default TypesTraining;
