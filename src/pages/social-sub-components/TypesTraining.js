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
    text: "23%",
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
      <div
        className="bar_chart"
        style={{ marginBottom: "0rem", height: "32vh" }}
      >
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
}

export default TypesTraining;
