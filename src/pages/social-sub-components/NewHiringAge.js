import React from "react";
import { AiFillInfoCircle } from "react-icons/ai";
import { Button } from "@mui/material";
import ActionButton from "../governance-sub-component/ActionButton";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

function NewHiringAge() {
  const labels = ["< 30", "30-50", "> 50"];
  const data = {
    labels,
    datasets: [
      {
        backgroundColor: ["#32E7A4", "#64B5FC", "#FCEA64"],
        data: [100005, 90058, 9934],
        barThickness: 20,
        borderWidth: 0,
      },
    ],
  };

  const option = {
    plugins: {
      datalabels: {
        display: true,
        color: "black",
      },
    },
  };
  return (
    <div className="chart_container pie_two">
      <div className="header_title">
        <div className="title">
          <p>New Hiring in the company in the following age groups</p>
        </div>
        <Button>
          <AiFillInfoCircle color="grey"></AiFillInfoCircle>
        </Button>
      </div>
      <div className="bar_chart">
        <Pie data={data} option={option}></Pie>
      </div>
      <div className="action_button">
        <ActionButton></ActionButton>
      </div>
    </div>
  );
}

export default NewHiringAge;
