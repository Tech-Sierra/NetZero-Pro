import React from "react";
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function HealthSafetyCharts(props) {
  const labels = [`${props.Xlabel}`];
  const data = {
    labels,
    datasets: [
      {
        label: "FY 2018-2019",
        data: [`${props.data1}`],
        backgroundColor: "#32E7A4",
      },
      {
        label: "FY 2019-2020",
        data: [`${props.data2}`],
        backgroundColor: "#04B1B4",
      },
      {
        label: "FY 2020-2021",
        data: [`${props.data3}`],
        backgroundColor: "#155EA2",
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
    },
  };
  return (
    <div>
      <Bar options={options} data={data} width="65" height="110" />
    </div>
  );
}

export default HealthSafetyCharts;