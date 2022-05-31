import React from "react";
import { AiFillInfoCircle } from "react-icons/ai";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Bar } from "react-chartjs-2";
import { Button } from "@mui/material";
import ActionButton from "../governance-sub-component/ActionButton";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function TrainingDevelopment() {
  const labels = ["Junior", "Middle", "Senior"];
  const data = {
    labels,
    datasets: [
      {
        label: "Junior",
        data: [71],
        backgroundColor: "#32E7A4",
      },
      {
        label: "Middle",
        data: ["x", 17],
        backgroundColor: "#04B1B4",
      },
      {
        label: "Senior",
        data: ["", "", 7],
        backgroundColor: "#155EA2",
      },
    ],
  };
  const options = {
    indexAxis: "y",
    responsive: true,
    scales: {
      //   yAxes: [
      //     {
      //       scaleLabel: {
      //         display: true,
      //         labelString: "probability",
      //       },
      //     },
      //   ],
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
        // display: "Top",
      },
    },
  };

  return (
    <div className="chart_container sc2">
      <div className="header_title">
        <div className="title">
          <p>Hours of Training & Development spent by employees</p>
        </div>
        <Button>
          <AiFillInfoCircle color="grey"></AiFillInfoCircle>
        </Button>
      </div>
      <div className="bar_chart">
        <Bar options={options} data={data} plugins={[ChartDataLabels]} />
      </div>
      <div className="action_button">
        <ActionButton></ActionButton>
      </div>
    </div>
  );
}

export default TrainingDevelopment;
