import React from "react";
import { AiFillInfoCircle } from "react-icons/ai";
import { Bar } from "react-chartjs-2";
import { Button } from "@mui/material";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Womens() {
  const labels = ["FY 2018-19", "FY 2019-20", "FY 2020-21"];
  const data = {
    labels,
    datasets: [
      {
        backgroundColor: ["#32E7A4", "#04B1B4", "#155EA2"],
        borderColor: "rgb(255, 99, 132)",
        data: [7.2, 14.4, 16, 17.8],
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
    <div className="womens_container">
      <div className="header_title">
        <div className="title">
          <p>Women in Management Positions</p>
          <p>(including Junior, middle and senior management)</p>
        </div>
        <AiFillInfoCircle color="grey"></AiFillInfoCircle>
      </div>
      <div className="bar_chart">
        <Bar options={options} data={data} />
      </div>
      <div className="action_button">
        <Button className="">Take Action</Button>
      </div>
    </div>
  );
}

export default Womens;
