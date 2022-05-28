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
import { Bar } from "react-chartjs-2";
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
function OmbudsProcess() {
  const labels = [
    "HR/People Process",
    "COBCE/ Security Policy",
    "Falsification/ Destruction of Information",
    "Workplace Harassment",
    "Others",
  ];
  const data = {
    labels,
    datasets: [
      {
        label: "FY 2020-2021",
        data: [9, 50, , 22, 5, 9, 34, 55],
        backgroundColor: "#04B1B4",
      },
      {
        label: "FY 2021-2022",
        data: [4, 12, 34, 4, 12, 47],
        backgroundColor: "#32E7A4",
      },
    ],
  };
  const options = {
    indexAxis: "y",
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
        display: "right",
      },
    },
  };
  return (
    <div className="womens_container">
      <div className="header_title">
        <div className="title">
          <p>
            Grievance Redressal: Break-up of Complaints received through the
            Ombuds Process
          </p>
        </div>
        <AiFillInfoCircle color="grey"></AiFillInfoCircle>
      </div>
      <div className="bar_chart">
        <Bar options={options} data={data} />
      </div>
      <div className="action_button">
        <ActionButton></ActionButton>
      </div>
    </div>
  );
}

export default OmbudsProcess;
