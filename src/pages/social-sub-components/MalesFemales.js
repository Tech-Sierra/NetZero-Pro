import React from "react";
import { AiFillInfoCircle } from "react-icons/ai";
import { Button } from "@mui/material";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Pie } from "react-chartjs-2";
import ActionButton from "../Button";

ChartJS.register(ArcElement, Tooltip, Legend);

function MalesFemales() {
  const labels = ["Female", "Male"];
  const data = {
    labels,
    datasets: [
      {
        backgroundColor: ["#32E7A4", "#64B5FC"],
        data: [71239, 173458],
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
    <div className="chart_container pie_one">
      <div className="header_title">
        <div className="title">
          <p>Number of Males and females in the company</p>
        </div>
        <Button>
          <AiFillInfoCircle color="grey"></AiFillInfoCircle>
        </Button>
      </div>
      <div className="bar_chart">
        <Pie data={data} option={option} plugins={[ChartDataLabels]}></Pie>
      </div>
      <div className="action_button">
        <ActionButton buttonName="Take action"></ActionButton>
      </div>
    </div>
  );
}

export default MalesFemales;
