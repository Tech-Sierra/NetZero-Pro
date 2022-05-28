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
import ActionButton from "./ActionButton";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function SourceOfComplain() {
  const labels = [
    "Employee",
    "Anonymous",
    "Other",
    "Vendor",
    "Contract EMP",
    "Client",
    "Ex-Employees",
  ];
  const data = {
    labels,
    datasets: [
      {
        label: "FY 2020-2021",
        data: [845, 255, 57, 14, 2, 34, 80],
        backgroundColor: "#32E7A4",
      },
      {
        label: "FY 2021-2022",
        data: [548, 150, 65, 10, 4, 1, 0],
        backgroundColor: "#04B1B4",
      },
    ],
  };
  const options = {
    indexAxis: "x",
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
    <div className="complain_container">
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

export default SourceOfComplain;
