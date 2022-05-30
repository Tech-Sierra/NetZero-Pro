import React from "react";
import { AiFillInfoCircle } from "react-icons/ai";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Button } from "@mui/material";
import ActionButton from "./ActionButton";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function BoardStructure() {
  const labels = [
    "Executive",
    "Independent",
    "Non-executive",
    "Female",
    " IT Sector exp",
  ];
  const data = {
    labels,
    datasets: [
      {
        backgroundColor: "#64B5FC",
        borderColor: "rgb(255, 99, 132)",
        data: [2, 6, 1, 1, 6, 7],
        barThickness: 20,
      },
    ],
  };
  const options = {
    responsive: true,
    scales: {
      yAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: "probability",
          },
        },
      ],
      // xAxes: [
      //   {
      //     barThickness: 2, // number (pixels) or 'flex'
      //     maxBarThickness: 1, // number (pixels)
      //     barPercentage: 0.2,
      //   },
      // ],
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  return (
    <div>
      <div className="chart_container">
        <div className="header_title">
          <div className="title">
            <p>Board structure (as of March 31)</p>
          </div>
          <Button>
            <AiFillInfoCircle color="grey"></AiFillInfoCircle>
          </Button>
        </div>
        <div className="bar_chart">
          <Bar options={options} data={data} />
        </div>
        <div className="action_button">
          <ActionButton></ActionButton>
        </div>
      </div>
    </div>
  );
}

export default BoardStructure;
